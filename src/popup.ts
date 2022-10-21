import { content } from './content-script';

showLatestTranscript()

document.getElementById('start')?.addEventListener('click', async () => {
    const api = document.getElementById('api-key') as HTMLInputElement | null

    const key = api?.value

      chrome.storage.local.set({ key }, () => {
        alert('Deepgram API Key Set')
      })
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
       document.getElementById('transcript').innerHTML = transcript
    })
}

async function getCurrentTab() {
    const queryOptions = { active: true, lastFocusedWindow: true }
    const [tab] = await chrome.tabs.query(queryOptions)
    console.log({tab})
    return tab
}

const togglePassword = document.getElementById('togglePassword')
const APIKey = document.getElementById('api-key')

togglePassword?.addEventListener('click', function(){
    const type = APIKey?.getAttribute('type') === 'password' ? 'text' : 'password'
    APIKey?.setAttribute('type', type)
    this.classList.toggle('fa-eye')
})