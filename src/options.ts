const cssSelectors: Readonly<Record<string, string>> = {
    keyInput: '#apiKey',
    keyToggle: '#passwordToggle',
    save: '#optionsSave',
    saveMessage: '.options-save-message'
}
const cssClasses: Readonly<Record<string, string>> = {
    keyVisible: 'fa-eye',
    messageActive: 'options-save-message--active'
}

const apiKeyInput = document.querySelector(cssSelectors.keyInput) as HTMLInputElement | null
const apiKeyToggle = document.querySelector(cssSelectors.keyToggle) as HTMLElement | null
const saveTrigger = document.querySelector(cssSelectors.save) as HTMLElement | null
const saveMessage = document.querySelector(cssSelectors.saveMessage) as HTMLElement | null

loadOptions()

apiKeyToggle?.addEventListener('click', () => toggleApiKeyVisibility())
saveTrigger?.addEventListener('click', (event) => {
    event.preventDefault()
    saveOptions()
})

apiKeyInput?.addEventListener('focus', () => hideSaveMessage())

function loadOptions() {
    chrome.storage.local.get('key').then(({ key }) => {
        if (apiKeyInput) {
            apiKeyInput.value = key
        }
    })
}

function saveOptions() {
    const apiKey: string | undefined = apiKeyInput?.value
    if (apiKeyInput && apiKeyInput.value) {
        chrome.storage.local.set({ 'key': apiKeyInput.value })
            .then(() => showSaveMessage())
    }
}

function showSaveMessage() {
    saveMessage?.classList.add(cssClasses.messageActive)
}
function hideSaveMessage() {
    saveMessage?.classList.remove(cssClasses.messageActive)
}

function toggleApiKeyVisibility()  {
    const type = apiKeyInput?.getAttribute('type') === 'password' ? 'text' : 'password'
    apiKeyInput?.setAttribute('type', type)
    apiKeyToggle?.classList.toggle(cssClasses.keyVisible)
}
