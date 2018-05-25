import React from 'react';
import { Image, Button,View, Text,NetInfo,AsyncStorage, } from 'react-native';
import robo from '../images/robo.jpg';
import Chat from './chat.js';
import { Icon } from 'react-native-elements';





class Andreea extends React.Component {
 
        
    constructor(props) {

             super(props);
           

       
        this.clearChat = this.clearChat.bind(this);
        
        }



    clearChat()
    {
        AsyncStorage.clear();   
         
    }


     render() {
    return (
     
       <View style={{flex: 1}}>
             <View style={{flex: 1}} > 
                    <View style={{flex: 1, backgroundColor: '#0911F1'}} /> 
                     <View style={{  flex: 0, flexBasis: 70,height: 80,flexDirection: 'row', backgroundColor: '#393FF4'}} >

                          <Image style={ { borderRadius: 64  ,width:70, height:70}} source={ robo } />
                          
                            <View style={{flex: 1,flexDirection: 'column'}} >
                                 <View  style={{ flex: 1}}/>   
                                 
                                 <Text  style={{ flex: 2, fontStyle: 'italic', fontSize: 20, color: "#FFFFFF"} }>ANDREEA </Text>
                                
                            </View>
                             
                            <View  style={{  flex: 0, flexBasis: 70,width : 70,flexDirection: 'row', backgroundColor: '#393FF4', justifyContent: 'center'}}>
                                <Icon name='chat' color='white' onPress={() =>{ this.clearChat();  this.props.navigation.navigate('Home');}} />
                                           
                            </View>
               
            
                    </View>
            </View>
            <View style={{flex: 6, backgroundColor: '#DDEDF2'}} > 
                 
                <Chat navigation = {this.props.navigation} />
            </View>  
      </View>
       
    );
  }
}

export default Andreea;