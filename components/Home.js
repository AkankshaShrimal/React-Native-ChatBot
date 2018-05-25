
import React from 'react';
import {  View, Text, Image ,StyleSheet,} from 'react-native';
import { Icon, Button,Card } from 'react-native-elements';
import chat from '../images/chat.png';
import robo from '../images/robo.jpg';






class HomeScreen extends React.Component {


  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' ,backgroundColor: 'black',}}> 
         <Card
  
            
            image={require('../images/chat.png')}
             style={styles.image}
            
            containerStyle = {styles.container}
            >
           
                          <Button
                                  large
                                  raised
                                  icon={{name: 'comments-o', type: 'font-awesome',color:'black' }}
                                  backgroundColor='orange'
                                  title="START CHATTING"
                                  borderRadius = {30}
                                  onPress={() => this.props.navigation.navigate('chat')} /> 
                           

                         <Image style={ { borderRadius: 70  ,width:140, height:140}} source={ robo } />
             </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width : 200,
    height: 400,
  },
  container :
  {
    
    backgroundColor:'black',
    
  }
 
});



export default HomeScreen;
