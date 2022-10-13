# Deepgram Translation Chrome Extension

A repository for creating a chrome extension that allows users to create transcripts and to translate transcripts.
This is a JavaScript project that uses [Parcel](https://parceljs.org/) and [TypeScript](https://www.typescriptlang.org/).

This project was inspired by [@phazonoverload](https://github.com/phazonoverload)'s [Chrome Transcription blog post](https://blog.deepgram.com/transcribing-browser-tab-audio-chrome-extensions/).


## Development and Contributing

Interested in contributing? We ❤️ pull requests!

To make sure our community is safe for all, be sure to review and agree to our
[Code of Conduct](./CODE_OF_CONDUCT.md). Then see the
[Contribution](./CONTRIBUTING.md) guidelines for more information.

## Getting Started
### Install the extension


Before you get started, [learn how to load an unpacked extension](https://developer.chrome.com/docs/extensions/mv3/getstarted/#unpacked).


- Run `yarn` to install the dependencies.
- Run `yarn build`. 
- To load this extension unpacked, navigate to `/dg-translation-chrome-ext/dist`.

### Install for development
For this project, you'll need a Deepgram API Key, which you can get [here](https://console.deepgram.com/signup?jump=keys). You can choose Admin or Owner for your API key.

- Run `yarn` to install the dependencies.
- Run `yarn start` to start in development mode. 
- Load from the `dist` folder.
- To run this extension, navigate to the tab you want transcribed. Open the extension, add your API key to the input, and click "Start Transcription". Make sure you select the tab you want transcribed and share the tab audio.


## Getting Help

We love to hear from you so if you have questions, comments or find a bug in the
project, let us know! You can either:

- [Start a Conversation on our Community Forum](https://github.com/deepgram/community/discussions/34)
- [Open an issue](https://github.com/deepgram-devs/dg-translation-chrome-ext/issues/new) on this repository
- Tweet at us! We're [@DeepgramAI on Twitter](https://twitter.com/DeepgramAI)

## Further Reading

Check out the Developer Documentation at [https://developers.deepgram.com/](https://developers.deepgram.com/)


