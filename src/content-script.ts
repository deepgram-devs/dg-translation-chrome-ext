export const content = () => {

let apiKey
let socket
chrome.storage.local.set({ transcript: '' })
chrome.storage.local.get('key', ({ key }) => apiKey = key)


//Add microphone access
navigator.mediaDevices.getDisplayMedia({ video: true, audio: true }).then((stream) => {
    if(!apiKey) return alert('You must provide a Deepgram API Key in the options page.')
    if(stream.getAudioTracks().length == 0) return alert('Please share your tab with audio. Refresh the page.')

    if (!MediaRecorder.isTypeSupported('audio/webm'))
        return alert('Browser not supported')
    const mediaRecorder = new MediaRecorder(stream, {
        mimeType: 'audio/webm',
    })

//create a websocket connection

    socket = new WebSocket('wss://api.deepgram.com/v1/listen?model=general-enhanced&punctuate=true', ['token', apiKey])

    socket.onopen = () => {
        console.log({ event: 'onopen' })
        mediaRecorder.addEventListener('dataavailable', async (event) => {
            if (event.data.size > 0 && socket.readyState === 1) {
                socket.send(event.data)
            }
        })
        mediaRecorder.start(1000)
    }

    socket.onmessage = (message) => {
        const received = JSON.parse(message.data)
        const transcript = received.channel.alternatives[0].transcript

        if (transcript) {
            chrome.storage.local.get('transcript', data => {
                chrome.storage.local.set({ transcript: data.transcript += ' ' + transcript })

                // Throws error when popup is closed, so this swallows the errors.
                chrome.runtime.sendMessage({ message: 'transcriptavailable' }).catch(err => ({}))
            })
        }
    }
})

chrome.runtime.onMessage.addListener(({ message }) => {
    if(message == 'stop') {
        socket.close()
        alert('Transcription ended')
    }
})
};
