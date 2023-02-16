import { content } from './content-script';

showLatestTranscript()

document.getElementById('start')?.addEventListener('click', async () => {
    const tab = await getCurrentTab()
    if(!tab) return alert('Require an active tab')
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: content,
    })
})

document.getElementById('stop')?.addEventListener('click', async () => {
    const tab = await getCurrentTab()
    if(!tab) return alert('Require an active tab')
    chrome.tabs.sendMessage(tab.id, { message: 'stop' })
})

chrome.runtime.onMessage.addListener(({ message }) => {
    if(message == 'transcriptavailable') {
        showLatestTranscript()
    }
})

function showLatestTranscript() {
    chrome.storage.local.get("transcript", ({ transcript }) => {
       document.getElementById('transcript').innerHTML = transcript;
       transcript && document.getElementById('clear')?.removeAttribute('disabled');
    })
}

function clearTranscript() {
    chrome.storage.local.set({"transcript": ""});
    document.getElementById('transcript').innerHTML = "";
    document.getElementById('clear').disabled = true;
}

document.getElementById('clear')?.addEventListener('click', () => clearTranscript())

async function getCurrentTab() {
    const queryOptions = { active: true, lastFocusedWindow: true }
    const [tab] = await chrome.tabs.query(queryOptions)
    console.log({tab})
    return tab
}
