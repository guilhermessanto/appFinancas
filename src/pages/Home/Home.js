import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Actions from "../../components/Actions/Actions";
import Balance from "../../components/Balance/Balance";
import Header from "../../components/Header/Header";
import Moviments from "../../components/Moviments/Moviments";
const list = [
  {
    id: 1,
    label: "Boleto conta luz",
    value: "300,90",
    date: "08/11/2022",
    type: 0, //despesas
  },
  {
    id: 2,
    label: "Pix Cliente José",
    value: "2500,00",
    date: "07/11/2022",
    type: 1, //entradas
  },
  {
    id: 3,
    label: "Salario",
    value: "7.500,00",
    date: "06/11/2022",
    type: 1, //entradas
  },
];
export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Seu Edson" />
      <Balance saldo="9.250,50" gastos="-527,00" />
      <Actions />
      <Text style={styles.title}>Últimas Movimentações</Text>
      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Moviments data={item} />}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
});
