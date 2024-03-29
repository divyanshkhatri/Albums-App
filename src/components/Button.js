import React from 'react';
import {Text, TouchableOpacity} from 'react-native';


const Button = (props) =>{

    return(
        <TouchableOpacity onPress = {props.onPress} style = {styles.buttonStyle}>
            <Text style = {styles.textStyle}>
                BUY {props.album.title}
            </Text>
        </TouchableOpacity>
    )
};

const styles = {
    buttonStyle: {
        flex: 1,
        borderRadius: 5,
        borderWidth: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10

    },
     textStyle: {
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: '600', 
        color: '#007aff',
        paddingTop: 10,
        paddingBottom: 10
    }
}


export default Button;