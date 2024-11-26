import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const addData = async ()=>{
    try {
        const docRef = await addDoc(collection(db, "users"), {
            first: "Stefanus",
            last: "Andrian",
            born: "2003"
        });
        console.log("Document written with ID: ", docRef.id);
    }catch(err){
        console.error("Error occured ", err)
    }
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
