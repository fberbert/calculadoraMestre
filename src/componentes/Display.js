import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

const styles = StyleSheet.create({
    display: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#000',
        alignItems: 'flex-end',
    },
    displayValue: {
        fontSize: 60,
        color: '#fff'
    },
    displayResult: {
        fontSize: 30,
        color: '#999'
    }
});

export default props => {
    let style1 = '';
    let style2 = '';

    if (props.isResult) {
        style1 = styles.displayResult;
        style2 = styles.displayValue;
    } else {
        style2 = styles.displayResult;
        style1 = styles.displayValue;
    }
    
    return(
    <View style={styles.display}>
        <Text style={style1} numberOfLines={1}>{props.value}</Text>
        <Text style={style2} numberOfLines={1}>= {props.result}</Text>
    </View>
    );
}