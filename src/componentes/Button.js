import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native';

const styles = StyleSheet.create({
    button: {
        color: '#fff',
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#000',
        textAlign: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#000',

    },
    operationButton: {
        color: '#FA8334',
        backgroundColor: '#000',
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2,
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3,
    },
});

export default props => {
    const stylesButton = [styles.button]
    if (props.double) stylesButton.push(styles.buttonDouble)
    if (props.triple) stylesButton.push(styles.buttonTriple)
    if (props.operation) stylesButton.push(styles.operationButton)

    // console.log(props.label);

    let label = props.label;
    if (label==='=') {
        label = <Icon name="md-play-circle" size={50} />;
    } else if (label==='<') {
        label = <Icon name="md-backspace" size={40} />;
    }

    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={stylesButton}>{label}</Text>
        </TouchableHighlight>
    );
}
