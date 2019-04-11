import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  boxContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 10
  },
  boxInfo: {
    flex: 2
  },
  boxWithdraw: {
    flex: 1
  },
  boxExpenses: {
    flex: 2
  },
  scroll: {
    width: "100%"
  },
  withdraw: {
    flexDirection: "row",
    alignItems: "stretch"
  },
  withdrawBox: {
    alignItems: "flex-start"
  },
  withdrawText: {
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    fontWeight: "bold"
  },
  withdrawButton: {
    textAlignVertical: "center"
  },
  account: {
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 15
  },
  inputContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 3,
    borderColor: "gray",
    borderWidth: 1,
    marginRight: 5
  },
  listContainer: {
    width: "100%"
  },
  transactions: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  transactionText: {
    flex: 2,
    justifyContent: "center",
    textAlignVertical: "center",
    fontWeight: "bold"
  },
  expenseContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 5,
    padding: 10
  },
  picker: {
    flex: 2
  },
  item_amount: {
    justifyContent: "flex-start",
    textAlign: "left"
  }
});

export default styles;
