import React, { Component } from "react";
import { View, Text, Picker } from "react-native";
import { connect } from "react-redux";
import styles from "../styles";
import { sortHigh, sortLow } from "../actions/expense";
import PropTypes from "prop-types";

class ListExpense extends Component {
  handlePickerValueChange = (value, index) => {
    value === "low" ? this.props.sortLow() : this.props.sortHigh();
  };
  static propTypes = {
    sortHigh: PropTypes.func.isRequired,
    sortLow: PropTypes.func.isRequired
  };
  render() {
    return (
      <View style={styles.transactions}>
        <Text style={styles.transactionText}>Recent Transactions</Text>
        <Picker
          style={styles.picker}
          onValueChange={this.handlePickerValueChange}
        >
          <Picker.Item label="Sort" value="sort" />
          <Picker.Item label="Highest" value="high" />
          <Picker.Item label="Lowest" value="low" />
        </Picker>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  expenses: state.expenses
});

export default connect(
  mapStateToProps,
  { sortHigh, sortLow }
)(ListExpense);
