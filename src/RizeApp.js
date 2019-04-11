import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import * as expenseActions from "./actions/expense";
import ListExpense from "./components/ListExpense";
import Withdraw from "./components/Withdraw";
import Header from "./components/Header";
import styles from "./styles";
import ListFilter from "./components/ListFilter";

class App extends Component {
  componentWillMount() {
    this.props.getExpenses();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.boxContainer, styles.boxInfo]}>
          <Header />
        </View>
        <View style={[styles.boxContainer, styles.boxWithdraw]}>
          <Withdraw />
        </View>
        <View style={[styles.boxContainer, styles.boxExpenses]}>
          <ListFilter />
          <ListExpense />
        </View>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getExpenses: () => dispatch(expenseActions.getExpenses())
  };
}

export default connect(
  null,
  mapDispatchToProps
)(App);
