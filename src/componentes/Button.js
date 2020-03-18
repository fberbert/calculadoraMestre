import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
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

    const operatorSize = 30;
    const equalSize = 30;
    let label = props.label;
    if (label==='=') {
        label = <Icon name="equals" size={equalSize} />;
    } else if (label==='<') {
        label = <Icon name="backspace" size={operatorSize} />;
    } else if (label==='-') {
        label = <Icon name="minus" size={operatorSize} />;
    } else if (label==='+') {
        label = <Icon name="plus" size={operatorSize} />;
    } else if (label==='*') {
        label = <Icon name="asterisk" size={operatorSize} />;
    } else if (label==='/') {
        label = <Icon name="divide" size={operatorSize} />;
    } else if (label==='C') {
        label = <Icon name="xbox" size={operatorSize} />;
    }

    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={stylesButton}>{label}</Text>
        </TouchableHighlight>
    );
}
