import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import styles from "../styles";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createExpense } from "../actions/expense";
import { INCORRECT_AMT, INSUFFICIENT_FUNDS } from "../constants";

class Withdraw extends Component {
  state = {
    withdraw: 0
  };
  handleSubmit = () => {
    let withdraw = this.strip(this.refs.withdraw.state.value);
    let postWithdrawAccount = this.props.account - withdraw;

    if (postWithdrawAccount > 0) {
      if (withdraw > 0 && withdraw % 20 === 0) {
        this.props.createExpense(withdraw);
      } else {
        Alert.alert(INCORRECT_AMT);
      }
    } else {
      Alert.alert(INSUFFICIENT_FUNDS);
    }
  };
  strip(value) {
    return Number(value.replace(/[^0-9.-]+/g, ""));
  }
  static propTypes = {
    createExpense: PropTypes.func.isRequired
  };
  render() {
    return (
      <View style={[styles.boxContainer, styles.boxWithdraw]}>
        {/* <View style={styles.withdrawBox}>
          <Text style={styles.transactionText}>Withdraw Cash</Text>
        </View> */}

        <View style={styles.withdraw}>
          <TextInputMask
            ref="withdraw"
            type={"money"}
            style={styles.inputContainer}
            placeholder="$0.00"
            options={{
              precision: 2,
              separator: ".",
              unit: "$"
            }}
            value={this.state.withdraw}
            onChangeText={this.withdrawChangeHandler}
          />
          <Button
            title="Withdraw"
            onPress={this.handleSubmit.bind(this)}
            style={styles.withdrawButton}
          />
        </View>
      </View>
    );
  }
}

mapStateToProps = state => {
  return {
    account: state.account
  };
};

export default connect(
  mapStateToProps,
  { createExpense }
)(Withdraw);
