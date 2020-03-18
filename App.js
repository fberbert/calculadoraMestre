import React, { Component } from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View
} from 'react-native';
import Button from './src/componentes/Button';
import Display from './src/componentes/Display';


export default class App extends Component {

    state = {
      displayValue: '0',
      displayResult: '',
      isResult: false,
      isOperator: false,
    }

    calculate = () => {
      let displayValue = this.state.displayValue;
      let result;

      try {
        result = eval(displayValue);
        if (!Number.isInteger(result)) {
          result = result.toFixed(5);
        }
      } catch (e) {
        result = '0'
      }
      this.setState({displayResult: result});
      this.setState({isResult: true});

    }

    addDigit = n => {
      let displayValue = this.state.displayValue;
      let displayResult = this.state.displayResult;
      let lastResult = displayResult;

      if (displayValue==='0' || this.state.isResult) {
        displayValue = '';
        displayResult = '';
        this.setState({isResult: false});
        this.setState({displayResult: displayResult});
      }

      if (/\d/.test(n)) {
        this.setState({isOperator: false})
      } else {
        this.setState({isOperator: true})
      }
      if ( /[\+\-\/\*]/.test(n) && displayValue==='') {
        console.log("primeiro digito operador:: " + displayResult);
        if (lastResult!='') {
          displayValue = lastResult;
        } else {
          displayValue = '0';
        }
      }


      // console.log(/\d/.test(n) + ' ' + n + ' - ' + this.state.isOperator)
      // console.log(/[\+\-\/\*]/.test(n) + ' ' + n + ' - ' + displayValue)

      if ( /[\+\-\/\*]/.test(n) && this.state.isOperator===true) {
        console.log("faça nada");
      } else {
        this.setState({displayValue: displayValue + n});
      }

    }


    removeDigit = () => {
      let displayValue = this.state.displayValue;
      let lastChar = displayValue.substring(displayValue.length - 1);

      if (!/\d/.lastChar) {
        this.setState({isOperator: false});
      }

      displayValue = displayValue.substring(0, displayValue.length - 1);

      if (!displayValue) displayValue = '0'; 
      this.setState({displayValue: displayValue});
    }

    clearMemory = () => {
      this.setState({displayValue: '0'});
      this.setState({displayResult: ''});
    }

    render() {
      return(
        <View style={styles.container}>
          <Display value={this.state.displayValue} result={this.state.displayResult} isResult={this.state.isResult} />
          <View style={styles.buttons}>
            <Button label='C' double operation onClick={this.clearMemory} />
            <Button label='<' operation onClick={this.removeDigit} />
            <Button label='+' operation onClick={this.addDigit} />
            <Button label='7' onClick={this.addDigit} />
            <Button label='8' onClick={this.addDigit} />
            <Button label='9' onClick={this.addDigit} />
            <Button label='-' operation onClick={this.addDigit} />
            <Button label='4' onClick={this.addDigit} />
            <Button label='5' onClick={this.addDigit} />
            <Button label='6' onClick={this.addDigit} />
            <Button label='*' operation onClick={this.addDigit} />
            <Button label='1' onClick={this.addDigit} />
            <Button label='2' onClick={this.addDigit} />
            <Button label='3' onClick={this.addDigit} />
            <Button label='/' operation onClick={this.addDigit} />
            <Button label='0' double onClick={this.addDigit} />
            <Button label='.' onClick={this.addDigit} />
            <Button label='=' operation onClick={this.calculate} />
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})