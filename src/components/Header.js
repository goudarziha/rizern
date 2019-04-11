import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import styles from "../styles";
import { PieChart } from "react-native-chart-kit";

class Header extends Component {
  roundHundred(value) {
    return Math.round(value * 100) / 100;
  }

  render() {
    const data = [
      {
        name: "Housing",
        population: this.props.housing,
        color: "#F00",
        legendFontColor: "#7F7F7F",
        legendFontSize: 8
      },

      {
        name: "Food/Beverages",
        population: this.props.food,
        color: "yellow",
        legendFontColor: "#7F7F7F",
        legendFontSize: 8
      },
      {
        name: "Transportation",
        population: this.props.transportation,
        color: "rgba(131, 167, 234, 1)",
        legendFontColor: "#7F7F7F",
        legendFontSize: 8
      },
      {
        name: "Entertainment",
        population: this.props.fun,
        color: "green",
        legendFontColor: "#7F7F7F",
        legendFontSize: 8
      },
      {
        name: "Misc",
        population: this.props.misc,
        color: "rgb(0, 0, 255)",
        legendFontColor: "#7F7F7F",
        legendFontSize: 8
      },
      {
        name: "Withdrawl",
        population: this.props.totalWithdraw,
        color: "pink",
        legendFontColor: "#7F7F7F",
        legendFontSize: 8
      },
      {
        name: "Available",
        population: this.roundHundred(this.props.account),
        color: "transparent",
        legendFontColor: "#7F7F7F",
        legendFontSize: 8
      }
    ];
    const chartConfig = {
      backgroundGradientFrom: "#1E2923",
      backgroundGradientTo: "#08130D",
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
      strokeWidth: 2 // optional, default 3
    };
    return (
      <View>
        <Text style={styles.account}>
          ${this.roundHundred(this.props.account)}
        </Text>
        <PieChart
          data={data}
          width={300}
          height={220}
          chartConfig={chartConfig}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  account: state.account,
  expenses: state.expenses,
  food: state.food,
  fun: state.fun,
  transportation: state.transportation,
  housing: state.housing,
  misc: state.misc,
  initialExpenses: state.initialExpenses,
  totalWithdraw: state.totalWithdraw
});

export default connect(mapStateToProps)(Header);
