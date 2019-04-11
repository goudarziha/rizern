import React, { Component } from "react";
import RizeApp from "./src/RizeApp";
import { Provider } from "react-redux";
import store from "./src/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RizeApp />
      </Provider>
    );
  }
}

export default App;

// import React, { Component } from "react";
// import {
//   Text,
//   View,
//   Button,
//   FlatList,
//   Alert,
//   ScrollView,
//   Picker
// } from "react-native";
// import styles from "./src/styles";
// import { connect } from "react-redux";
// import { addExpense } from "./src/actions/transactions";
// import ListItem from "./src/components/ListItem";
// import ListExpense from "./src/components/ListExpense";
// import { TextInputMask } from "react-native-masked-text";
// import { PieChart } from "react-native-chart-kit";
// import { getExpenses } from "./src/actions/transactions";
// import { INCREMENTS_20_WARNING, INSUFFICIENT_FUNDS } from "./src/constants";
// import PropTypes from "prop-types";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     console.log(this.props);
//   }

//   static propTypes = {
//     withdraw: PropTypes.number.isRequired
//   };

//   componentDidMount() {
//     this.props.getE();
//   }

//   roundHundred(value) {
//     return Math.round(value * 100) / 100;
//   }

//   strip(value) {
//     return Number(value.replace(/[^0-9.-]+/g, ""));
//   }

//   contains(original, sub) {
//     return original.toLowerCase().includes(sub);
//   }

//   withdrawChangeHandler(value) {
//     console.log(this.props.withdraw);
//   }

//   handleSubmit = () => {
//     this.props.addWithdraw("withdraw", 20);
//     // let postWithdrawAccount = this.props.account - this.props.withdraw;
//     // if (postWithdrawAccount > 0) {
//     //   if (this.props.withdraw > 0 && this.props.withdraw % 20 === 0) {
//     //     let newExpends = {
//     //       name: "Withdrawal",
//     //       amount: this.props.withdraw
//     //     };
//     //     let expenses = [...this.props.expenses, newExpends];

//     //     if (this.props.sort === "high") {
//     //       let highExpense = expenses.sort(function(a, b) {
//     //         return b.amount - a.amount;
//     //       });
//     //       this.setState({
//     //         account: (this.props.account -= this.props.withdraw),
//     //         withdraw: "",
//     //         totalWithdraw: (this.props.totalWithdraw += this.props.withdraw),
//     //         expenses: highExpense
//     //       });
//     //     } else if (this.props.sort === "low") {
//     //       let lowExpense = expenses.sort(function(a, b) {
//     //         return a.amount - b.amount;
//     //       });
//     //       this.setState({
//     //         account: (this.props.account -= this.props.withdraw),
//     //         withdraw: "",
//     //         totalWithdraw: (this.props.totalWithdraw += this.props.withdraw),
//     //         expenses: lowExpense
//     //       });
//     //     } else {
//     //       this.setState({
//     //         account: (this.props.account -= this.props.withdraw),
//     //         withdraw: "",
//     //         totalWithdraw: (this.props.totalWithdraw += this.props.withdraw),
//     //         expenses: [newExpends, ...this.props.expenses]
//     //       });
//     //     }
//     //   } else {
//     //     Alert.alert(INCREMENTS_20_WARNING);
//     //   }
//     // } else {
//     //   Alert.alert(INSUFFICIENT_FUNDS);
//     // }
//   };

//   handlePickerValueChange = (value, index) => {
//     this.setState({
//       sort: value
//     });

//     if (value === "low") {
//       let expenses = this.props.expenses.sort(function(a, b) {
//         return a.amount - b.amount;
//       });
//       this.setState({
//         expenses
//       });
//     }

//     if (value === "high") {
//       let expenses = this.props.expenses.sort(function(a, b) {
//         return b.amount - a.amount;
//       });
//       this.setState({
//         expenses
//       });
//     }
//     console.log(this.state);
//   };

//   render() {
//     const {
//       housing,
//       food,
//       transportation,
//       totalWithdraw,
//       fun,
//       expenses,
//       account,
//       misc
//     } = this.props;

//     const data = [
//       {
//         name: "Housing",
//         population: housing,
//         color: "#F00",
//         legendFontColor: "#7F7F7F",
//         legendFontSize: 8
//       },

//       {
//         name: "Food/Beverages",
//         population: food,
//         color: "yellow",
//         legendFontColor: "#7F7F7F",
//         legendFontSize: 8
//       },
//       {
//         name: "Transportation",
//         population: transportation,
//         color: "rgba(131, 167, 234, 1)",
//         legendFontColor: "#7F7F7F",
//         legendFontSize: 8
//       },
//       {
//         name: "Entertainment",
//         population: fun,
//         color: "green",
//         legendFontColor: "#7F7F7F",
//         legendFontSize: 8
//       },
//       {
//         name: "Misc",
//         population: 45,
//         color: "rgb(0, 0, 255)",
//         legendFontColor: "#7F7F7F",
//         legendFontSize: 8
//       },
//       {
//         name: "Withdrawl",
//         population: totalWithdraw,
//         color: "pink",
//         legendFontColor: "#7F7F7F",
//         legendFontSize: 8
//       },
//       {
//         name: "Available",
//         population: this.roundHundred(account),
//         color: "transparent",
//         legendFontColor: "#7F7F7F",
//         legendFontSize: 8
//       }
//     ];
//     const chartConfig = {
//       backgroundGradientFrom: "#1E2923",
//       backgroundGradientTo: "#08130D",
//       color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
//       strokeWidth: 2 // optional, default 3
//     };
//     return (
//       <View style={styles.container}>
//         <View style={[styles.boxContainer, styles.boxInfo]}>
//           <Text style={styles.account}>$ {this.roundHundred(account)}</Text>
//           <PieChart
//             data={data}
//             width={300}
//             height={220}
//             chartConfig={chartConfig}
//             accessor="population"
//             backgroundColor="transparent"
//             paddingLeft="15"
//             absolute
//           />
//         </View>

//         <View style={[styles.boxContainer, styles.boxWithdraw]}>
//           <Text style={styles.withdrawText}>Withdraw Cash</Text>

//           <View style={styles.withdraw}>
//             <TextInputMask
//               type={"money"}
//               style={styles.inputContainer}
//               placeholder="$0.00"
//               options={{
//                 precision: 2,
//                 separator: ".",
//                 unit: "$"
//               }}
//               value={this.props.withdraw}
//               onChangeText={this.withdrawChangeHandler}
//             />
//             <Button
//               title="Withdraw"
//               onPress={this.handleSubmit}
//               style={styles.withdrawButton}
//             />
//           </View>
//         </View>
//         <View style={[styles.boxContainer, styles.boxExpenses]}>
//           <View style={styles.transactions}>
//             <Text style={styles.transactionText}>Recent Transactions</Text>
//             <Picker
//               selectedValue={this.props.sort}
//               style={styles.picker}
//               onValueChange={this.handlePickerValueChange}
//             >
//               <Picker.Item label="Sort" value="sort" />
//               <Picker.Item label="Highest" value="high" />
//               <Picker.Item label="Lowest" value="low" />
//             </Picker>
//           </View>

//           <ScrollView style={styles.scroll}>
//             <View style={styles.listContainer}>
//               {expenses.map((item, key) => (
//                 <View key={key} style={styles.expenseContainer}>
//                   <Text>{item.name}</Text>
//                   <Text style={styles.item_amount}>${item.amount}</Text>
//                 </View>
//               ))}
//             </View>
//           </ScrollView>
//         </View>
//       </View>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   ...state.expenseReducer
// });
// // const s = state.expenseReducer;
// // return {
// //   initialAmount: s.initialAmount,
// //   account: s.account,
// //   initialExpenses: s.initialExpenses,
// //   expenses: s.expenses,
// //   withdraw: s.withdraw,
// //   totalWithdraw: s.totalWithdraw,
// //   food: s.food,
// //   fun: s.fun,
// //   transportation: s.transportation,
// //   misc: s.misc,
// //   housing: s.housing,
// //   sort: s.sort
// // };

// const mapDispatchToProps = dispatch => {
//   return {
//     addWithdraw: (name, amount) => {
//       dispatch(addExpense(name, amount));
//     },
//     getE: () => dispatch(getExpenses())
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);
