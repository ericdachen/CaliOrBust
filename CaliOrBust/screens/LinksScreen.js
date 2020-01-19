//import React from 'react';
import React, { Component } from 'react';
//import styles from 'HomeScreen.jsx';
import { 
  View,
  Text,
  TouchableOpacity,
  Button,
  Alert,
  SafeAreaView
} from 'react-native';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Constants from 'expo-constants';
//import { Button } from 'react-native-elements';
//import Icon from 'react-native-vector-icons/FontAwesome';

export default class LinksScreen extends Component {
  constructor() {
    super();
    //this.state = {};
  }
  _onNextPress = (status) => {
    console.log(status);
    this.props.navigation.navigate('QuestionScreen');
  }

//export default function LinksScreen() {
  render(){
  return (
    <ScrollView style={styles.container}>
		<Text style={styles.caliOrBustText}>Please upload your resume:</Text>
		<TouchableOpacity style={styles.resumeButton} 
		onPress={() => Alert.alert('Please select a .pdf')}>
		<Text style={{
            fontSize: 16,
            color: '#fff',
          }}>Attach File</Text>
		
		</TouchableOpacity>
	<TouchableOpacity style={styles.resumeButton} 
		onPress={() => this._onNextPress('Pressed')}>
		<Text style={{
            fontSize: 16,
            color: '#fff',
          }}>Next</Text>
		
		</TouchableOpacity>
    </ScrollView>

  );
//};
}
};

LinksScreen.navigationOptions = {
  title: 'Links',
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: 15,
    backgroundColor: '#fff',

  },
  caliOrBustText: {
    marginTop: 25,
    //justifyContent: 'flex-start',
    textAlign: 'center',
	fontSize: 20
	
  },
  uploadButton: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 45,
	borderRadius: 25
  },
  nextButton: {
	flex: 1,
	//alignSelf: 'flex-end',
	alignItems: 'center',
	marginTop: 400,
	//position: 'absolute',
    //bottom: 0
  },
    resumeButton: {
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'turquoise'
  }
}); 
