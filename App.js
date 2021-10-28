import * as React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { BottomNavigation, TextInput } from "react-native-paper";


const Inicio = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Inicio de Sesión</Text>
      <View>
        <Text style={styles.textos}>Usuario</Text>
        <TextInput style={styles.input}/>
      </View>
      <View>
        <Text style={styles.textos}>Constraseña</Text>
        <TextInput style={styles.input}/>
      </View>
      <View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.textos}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Rutas = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.sep}>
          <Text style={styles.titulo}>Carrera 65 / Pedregal</Text>
        </View>
        <View style={styles.sep}>
          <Text style={styles.titulo}>Av 80/ Belén</Text>
        </View>
        <View style={styles.sep}>
          <Text style={styles.titulo}>San Antonio / Poblado</Text>
        </View>
        <View style={styles.sep}>
          <Text style={styles.titulo}>Laureles / Centro</Text>
        </View>
        <View style={styles.sep}>
          <Text style={styles.titulo}>Centro / La Floresta</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const Vehiculos = () => {
  return (
    <ScrollView>
      <View style={(styles.container, styles.vista)}>
        <View style={styles.sep}>
          <Image style={styles.img} source={require("./images/carro1.jpg")} />
          <Text style={styles.textos3}>Propetario: </Text>
          <Text style={styles.textos2}>Sebastian Puerta</Text>
          <Text style={styles.textos2}>Calificación: 4.0</Text>
        </View>
        <View style={styles.sep}>
          <Image style={styles.img} source={require("./images/carro2.jpg")} />
          <Text style={styles.textos3}>Propetario: </Text>
          <Text style={styles.textos2}>Wilmar Lopera</Text>
          <Text style={styles.textos2}>Calificación: 3.9</Text>
        </View>
        <View style={styles.sep}>
          <Image style={styles.img} source={require("./images/carro3.jpg")} />
          <Text style={styles.textos3}>Propetario: </Text>
          <Text style={styles.textos2}>Miguel Monsalve</Text>
          <Text style={styles.textos2}>Calificación: 4.5</Text>
        </View>
        <View style={styles.sep}>
          <Image style={styles.img} source={require("./images/carro4.jpg")} />
          <Text style={styles.textos3}>Propetario: </Text>
          <Text style={styles.textos2}>Lina Bedoya</Text>
          <Text style={styles.textos2}>Calificación: 5.0</Text>
        </View>

      </View>
    </ScrollView>
  );
};

const App = () => {

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "sesion", title: "Iniciar Sesión", icon: "login" },
    { key: "rut", title: "Rutas", icon: "routes" },
    { key: "veh", title: "Vehículos", icon: "car" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    sesion: Inicio,
    rut: Rutas,
    veh: Vehiculos,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "left",
  },
  titulo: {
    fontSize: 20,
    margin: 10,
    fontWeight: "bold",
  },
  img: {
    width: 150,
    height: 150,
    resizeMode: 'stretch'
  },
  input: {
    borderBottomWidth: 1,
    height: 30,
    width: 300,
    margin: 10,
  },
  textos: {
    fontSize: 15,
    margin: 10,
    fontWeight: "cursive",
  },
  textos2: {
    fontSize: 18,
    fontWeight: "cursive",
  },
  textos3: {
    fontSize: 20,
    fontWeight: "bold",
  },
  btn: {
    backgroundColor: "#83B5FF",
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  sep: {
    margin: 10,
  },
  vista: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 10,
  },
});

export default App;
