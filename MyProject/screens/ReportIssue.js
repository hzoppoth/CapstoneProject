import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { CheckBox } from 'react-native-elements';

import styles from '../styles';

function ReportIssue() {
  const [selectedTrail, setSelectedTrail] = useState('');
  const [condition, setCondition] = useState('good'); //default value
  const [comments, setComments] = useState('');
  const [username, setUsername] = useState('');
  const [isUrgent, setIsUrgent] = useState(false);
  

  const submitReport = () => {
    // Logic to submit the report will go here
    console.log({
      trailName,
      condition,
      comments
    }); //for now, just log the input values
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Report Trail Condition</Text>

      {/* Username Input */}
      <TextInput
        style={styles.usernameInput}
        placeholder="Username"
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
        <Picker.Item label="Trail 1" value="trail1" />
        <Picker.Item label="Trail 2" value="trail2" />
        <Picker.Item label="Trail 3" value="trail3" />
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
