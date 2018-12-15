import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import Voice from 'react-native-voice';
import { Grid, Col, Row } from "react-native-easy-grid";
export default class App extends Component {
  constructor(){
    super();
    this.state = {
      results: ''
    }
    Voice.onSpeechResults = this.onSpeechResults.bind(this);
  }

  onSpeechResults(e){
    let arrayVar = e.value[0];
    if (this.state.results === '') {
      this.setState({
        results:arrayVar
      })  
    } else {
      let arrayTwo = this.state.results + '  ' + arrayVar;
      this.setState({
        results:arrayTwo
      })  
    }
    
    console.log(arrayVar);
  }
  onSpeechStart(){
    Voice.start('tr_TR');
  }

  onSpeechEnd(){
    Voice.stop();
  }

  render() {
    return (
      <Grid>
      <Row size={30}>
        <View style={styles.logoHak}>
          <Text style={styles.title}>yaziCevir</Text>
        </View>
      </Row>  
      <Row size={20}>
      <View style={styles.Content}>
              <TouchableOpacity style={styles.touchButton} onPress={this.onSpeechStart.bind()} style={styles.btnStyle}>
              <Text>Konuşmayı Başlat!</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touchButton} onPress={this.onSpeechEnd.bind()} style={styles.btnStyle}>
              <Text>Konuşmayı Sonlandır!</Text>
              </TouchableOpacity>
              
      </View>
      </Row>  
      <Row size={40}>
        <View style={styles.Content}>
        <Text style={styles.resultText}>{this.state.results}</Text>
        </View>
      </Row>
      <Row size={20}>
      </Row>
      </Grid>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
  },
  Content:{
    flex:1,
    alignItems:'center',
    marginLeft:30,
    marginRight:30,
    justifyContent:'center',
    textAlign:'center' 
  },
  btn:{
    justifyContent:'center',
    flexDirection: 'row',
  },
  btnStyle:{
    padding:10,
    backgroundColor:'#cecece',
    marginBottom:10
  },
  logoHak:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  touchButton:{
    height:'70%',
    width:'50%'
  },
  resultText:{
    fontSize:25,
    color:'#000'
  }
});

