import React, {useState} from 'react';
import {Button, TextInput, View, StyleSheet, Modal} from "react-native";

const GoalItem=props=>{
    const [enteredGoal, setEnteredGoal]=useState('');

    const goalInputHandler=(enteredText)=>{
        setEnteredGoal(enteredText);
    }

    const addGoalHandler=()=>{
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    };

    return(
        <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
            <TextInput placeholder="Course Goal" style={styles.input} onChangeText={goalInputHandler}/>
            <View style={styles.buttonContainer}>
            <Button title ="CANCEL" color= 'red' onPress={props.onCancel}/>
            <Button title = "ADD" onPress={addGoalHandler}/>
        </View>
        </View>
        </Modal>
    )

}
export default GoalItem

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection:'row',
        justifyContent: 'space-between',
        width: '60%'
    }
});
