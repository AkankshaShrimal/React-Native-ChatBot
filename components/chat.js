import {GiftedChat, Bubble} from 'react-native-gifted-chat';
import React from 'react';
import { KeyboardAvoidingView , Platform,
  StyleSheet,
  Text,
  View,AsyncStorage,Alert,} from 'react-native';
import Tts from 'react-native-tts';
import robo from '../images/robo.jpg';
import user_icon from '../images/user.jpg';




class Chat extends React.Component {

   constructor(props) {
    super(props);
    this.state = {
      messages: [],
       
    };

    
  
    this.onSend = this.onSend.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
     this.renderBubble = this.renderBubble.bind(this);
     this.localStorage = this.localStorage.bind(this);
      this.capitalizeFirstLetter = this.capitalizeFirstLetter.bind(this);
     
  
  }
  
  componentDidMount()
{

  
   AsyncStorage.getAllKeys((err, keys) => {
         AsyncStorage.multiGet(keys, (err, func) => {
                func.map((result, i, store) => {
                  // get at each store's key/value so you can work with it
                                                  let key = store[i][0];
                                                  let value = store[i][1];
                                                
                                                 if(value)
                                                 {
                                                     this.setState((previousState) => {
                                                             return {
                                                              messages: GiftedChat.append(previousState.messages, JSON.parse(value)),
                                                              
                                                            }
                                                     }
                                                     );
                                                 }
      
                                             });
                                 });
                });

  
}

capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
 

  onSend(messages = []) {

    
    this.answerDemo(messages);
     this.localStorage(messages);
    var text = this.capitalizeFirstLetter(messages[0].text);
    messages[0].text = text;
    this.setState((previousState) => {
      return {
       
        messages: GiftedChat.append(previousState.messages, messages),
        
      };
    });

   
    
    
  }

  answerDemo(messages) {
    
         var query = messages[0].text;

    if (messages.length > 0) {
      fetch('https://api.dialogflow.com/v1/query?query?v=20150910&lang=en&query=' + 
       query + '&sessionId=12345&timezone=America/New_York', {

                      method: 'GET',
                       headers: new Headers({
                               'Authorization': 'Bearer 8322350a86dc48cc82694678b84f2e44', 
                               'Accept': 'application/json',
                                'Content-Type': 'application/json',  
                              }),
                                                                          
                                      
                                }) .then((response) => response.json())
                                    .then((responseJson) => {
                                      
                                      this.handleResponse(responseJson);
                                    

                                    })
                                    .catch((error) => {
                                              return (
                                              Alert.alert(
    
                                                        // This is Alert Dialog Title
                                                        'CONNECTION PROBLEM',
                                                    
                                                        // This is Alert Dialog Message. 
                                                        'You are offline',
                                                        [
                                                          // First Text Button in Alert Dialog.
                                                          {text: 'START CHATTING', onPress: () =>  this.props.navigation.navigate('Home')}
                                                    
                                                        
                                                          
                                                        ]
                                                    
                                                      )
 
                                              );
                                     
                                  
                                     
                                    });
          
        }
  }

  handleResponse(res ){

      var speech =  this.capitalizeFirstLetter(res.result["speech"]);
    obj = [{"text":speech,"user":{"_id":2 ,"name": 'Robo',
            "avatar": robo,},"createdAt":new Date() ,"_id": Math.round(Math.random() * 1000000)}];
    this.localStorage(obj);

      Tts.getInitStatus().then(() => {
                                      Tts.setDefaultVoice('com.apple.ttsbundle.Samantha-compact');
                                      Tts.setDefaultLanguage('en-IE');  
                                      Tts.setDucking(true);

                                       Tts.speak(res.result["speech"]);
                                  });
     
    
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, obj),
        
      };
    });


  }

  localStorage(data)
  {
  
   AsyncStorage.setItem(JSON.stringify( new Date().getTime()),JSON.stringify(data));
  
     
  }


    renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: '#A3E47D',
          }
        }}
      />
    );
  }




  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={this.onSend}
       

        user={{
          "_id": 1, "avatar": user_icon,// sent messages should have same user._id
        }}

          renderBubble={this.renderBubble}
        
      />
    );
  }
}


export default Chat;