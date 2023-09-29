import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { CheckBox } from 'react-native-elements';
import axios from 'axios';


import styles from '../styles';

function ReportIssue() {
  const [selectedTrail, setSelectedTrail] = useState('');
  const [condition, setCondition] = useState('good'); 
  const [comments, setComments] = useState('');
  const [username, setUsername] = useState('');
  const [isUrgent, setIsUrgent] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  

  const submitReport = async () => {
    try {
      const reportData = {
        trail_name: selectedTrail,
        condition: condition,
        is_urgent: isUrgent,
        comments: comments,
        username: username,
      };
      const response = await axios.post('http://192.168.1.200:3000/report', reportData);
      console.log('Report submitted:', response.data); // log the response from the server
      setIsSubmitted(true);
      // Clear the form by resetting the state variables
      setSelectedTrail('');
      setCondition('good'); // reset to default value
      setComments('');
      setUsername('');
      setIsUrgent(false);

      Alert.alert('Your report has been submitted successfully.');

    } catch (error) {
      console.error('There was an error submitting the report!', error);
    }
};


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Report Trail Condition</Text>

      {/* Username Input */}
      <TextInput
        style={styles.usernameInput}
        placeholder="Enter your username"
        placeholderTextColor="white"
        multiline
        value={username}
        onChangeText={setUsername}
      />


      {/* Trail Picker */}
      <View style={styles.pickerContainer}>
        <Picker
        selectedValue={selectedTrail}
        onValueChange={(itemValue, itemIndex) => {
        if(itemIndex !== 0) { 
            setSelectedTrail(itemValue);
        }
        }}
        style={styles.picker}
    >
        <Picker.Item label="Select a trail" value="" />
        <Picker.Item label="Greens Lick" value="Greens Lick" />
        <Picker.Item label="Ingles Feild Gap" value="Ignles Feild Gap" />
        <Picker.Item label="Wolf Creek" value="Wolf Creek" />
        </Picker>
   
        </View>



      {/* Condition Picker */}
      <View style={styles.pickerConditionContainer}>
      <Picker
        selectedValue={condition}
        style={{ height: 50, width: 200, color: 'white', }} 
        onValueChange={(itemValue) => setCondition(itemValue)}
      >
        <Picker.Item label="Rippin" value="rippin" />
        <Picker.Item label="Good" value="good" />
        <Picker.Item label="Moderate" value="moderate" />
        <Picker.Item label="Poor" value="poor" />
      </Picker>
      
      
        </View>

    {/* Urgent Checkbox */}
        <CheckBox
        title='Urgent'
        checkedColor='red'
        uncheckedColor='white'
        checked={isUrgent}
        onPress={() => setIsUrgent(!isUrgent)}
        containerStyle={styles.checkBoxContainer}
        textStyle={styles.checkBoxText}
      />

      {/* Comments Input */}
      <TextInput
        style={styles.input}
        placeholder="Comments"
        placeholderTextColor="white"
        multiline
        value={comments}
        onChangeText={setComments}
      />

      {/* Submit Button */}
      <TouchableOpacity style={styles.button} onPress={submitReport}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ReportIssue;
