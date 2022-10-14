name: 🐞 Bug Report
description: Something isn't working! Help us improve.
labels: ['Type: bug', 'Status: Needs Triage']
body:
  - type: markdown
    attributes:
      value: |
        # Thank you for filling out our bug report!

        ![Squash this bug!](https://media.giphy.com/media/ge3SJPKwPdZSClGEua/giphy.gif) to ask a question or report a bug!
  - type: checkboxes
    attributes:
      label: Is there an existing issue for this?
      description: Please search to see if an issue already exists for the bug you encountered.
      options:
        - label: I have searched the existing issues
          required: true
  - type: textarea
    id: what-happened
    attributes:
      label: What happened?
      description: What did you expect to happen?
      placeholder: Tell us what you see!
      value: 'A bug happened!'
    validations:
      required: true
  - type: textarea
    attributes:
      label: Steps To Reproduce
      description: Steps to reproduce the behavior.
      placeholder: |
        1. In this environment...
        2. With this config...
        3. Run '...'
        4. See error...
    validations:
      required: false
  - type: dropdown
    id: browsers
    attributes:
      label: What browsers are you seeing the problem on?
      multiple: true
      options:
        - Firefox
        - Chrome
        - Safari
        - Microsoft Edge
        - Other
  - type: textarea
    attributes:
      label: Environment
      description: |
        examples:
          - **OS**: Mac 11.5.1
          - **Node**: 13.14.0
          - **yarn**: 1.22.11
      value: |
        - OS:
        - Node:
        - yarn:
      render: markdown
    validations:
      required: false
  - type: textarea
    attributes:
      label: Anything else?
      description: |
        Links? References? Anything that will give us more context about the issue you are encountering!

        Tip: You can attach images or log files by clicking this area to highlight it and then dragging files in.
    validations:
      required: false
  - type: checkboxes
    id: terms
    attributes:
      label: Code of Conduct
      description: By submitting this issue, you agree to follow our [Code of Conduct](https://github.com/deepgram-devs/dg-translation-chrome-ext/commit/cbb9b1ae572ccbac3aa3b723e0ee5ca513d1aeb8)
      options:
        - label: I've read the Code of Conduct and understand my responsibilities as a member of the Deepgram community
          required: true