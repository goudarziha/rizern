import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { connect } from "react-redux";
import styles from "../styles";

class ListExpense extends Component {
  render() {
    return (
      <ScrollView style={styles.scroll}>
        <View style={styles.listContainer}>
          {this.props.expenses.map((item, key) => (
            <View key={key} style={styles.expenseContainer}>
              <Text>{item.name}</Text>
              <Text>${item.amount}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  expenses: state.expenses
});

export default connect(mapStateToProps)(ListExpense);
