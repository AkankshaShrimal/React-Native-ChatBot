# REACT-NATIVE CHATBOT

react-native project to chat with people any time.

This bot- Andreea aims to chat with users for the sake of conversation and engagement.

## Dependencies:
 
- react 16.2.0
- react-native 0.52.0
- react-navigation 1.5.10
- [react-native-elements](https://github.com/react-native-training/react-native-elements) 
- [react-native-gifted-chat](https://github.com/FaridSafi/react-native-gifted-chat)
- [react-native-tts](https://github.com/ak1394/react-https://dialogflow.com/docs/reference/agent/querynative-tts) 
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) 

- Extras For Building :
      -[react-native-cli](https://facebook.github.io/react-native/docs/getting-started.html)
      -Download and Install latest JDK version
      

## Result:
<img src='https://user-images.githubusercontent.com/24764528/40529746-d4b8c2a2-6013-11e8-81ef-9b09f1e2a5f8.gif' width='400px'>

## Procedure:

- Clone this repository `git clone https://github.com/AkankshaShrimal/React-Native-ChatBot.git`.

## Running React Native application:

-Install the `Expo` client app on your iOS or Android phone.

-Connect to the same wireless network as your PC and run successfully. 

## Creating ChatAgent with Dialogflow:

-Create an account and a new ChatAgent 

-Create intents and corresponding responses

-Add `Small Talk` using [link](https://dialogflow.com/docs/small-talk).

-use chatAgent [API Reference](https://dialogflow.com/docs/reference/agent/query) to get responses 

<img src='https://user-images.githubusercontent.com/24764528/40528333-505c55dc-600e-11e8-8866-b5cb7db88622.png' width='500px'>

## Building Project

- `Ejecting App` - To build and deploy app, you'll need to eject from CRNA and use Xcode and Android Studio.

           To Eject follow the below instructions:
        ```bash
            $ npm run eject
       ```

-refer [link](https://facebook.github.io/react-native/docs/signed-apk-android.html)

-Generate Signed APK

-Setting up gredle-variables

-Adding signing config to app's gradle config

-Generating the release APK and Testing the release build of app


           Follow these instructions:
        ```bash
            $  cd android && ./gradlew assembleRelease
            $ react-native run-android --variant=release
        ```   

## Vote of Thanks

- Thanks to [Farid Safi](https://github.com/FaridSafi) whose chat template helped me making this chatbot.

- Thanks to [Google-Dialogflow](https://dialogflow.com/?gclid=CjwKCAjwxZnYBRAVEiwANMTRX_Hf3N1EfTCtvRxh1LgVbbZuFhvBX0JI8LjjLCtmjzR1txjk_rZcPhoCwBoQAvD_BwE) for developing dialogflow platform and smallTalk feature.
 