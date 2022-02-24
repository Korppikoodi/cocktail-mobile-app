import React, {useState, useRef} from 'react';
import { Text, TextInput, View, StyleSheet, ImageBackground, FlatList } from 'react-native';
import Button from '../smallerComponents/Button';
import Drink from '../smallerComponents/Drink';
import useFetch from '../hooks/fetch-hook';

// this is the main activity that also handles searching drinks
// user can look for list of drinks or pick one at random
const SearchView = ({navigation}) => {
  const [input, setInput] = useState('')
  const [url, setUrl] = useState(null)
  // this is used so you can refetch even when urlstring is still same
  const reFetch = useRef(0)
  const drinks = useFetch(url)
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
      <ImageBackground style={styles.image} source={{uri: 'https://3.bp.blogspot.com/-QU4xmqqsXpE/UYJaeY_U89I/AAAAAAAALsY/cMmm-xX4wFM/s1600/DSC_0001.JPG'}}>
      <View style={styles.header}>
      <Text style={styles.headerText}>
        Search some drinks
      </Text>
      </View>
      <TextInput style={styles.input} onChangeText={setInput} value={input}></TextInput>
      <View style={styles.buttons}>
          <Button 
            title='Search ' 
            styles={styles} 
            onPress={() => setUrl({url: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`, reFetch: reFetch.current + 1})}>
          </Button>
          <Button 
            title='Random ' 
            styles={styles} 
            onPress={() => setUrl({url: 'https://www.thecocktaildb.com/api/json/v1/1/random.php', reFetch: reFetch.current + 1})}>
          </Button>
        </View>  
        <View style={styles.drinks}>
        {drinks.loading === true && <Text style={styles.bolded}>Loading</Text>}
        {drinks.error !== null && <Text style={styles.bolded}>{drinks.error} </Text>}
        {drinks.loading === false && drinks.data.length > 0 ? 
        <FlatList
        data={drinks.data} 
        renderItem={({item}) => <Drink  drink={item} action={navigation.navigate}/>}
        keyExtractor={(item) =>  item.strDrink}/>
         : <></>}
        </View>
      </ImageBackground>
    </View>
    
  );
}

// element styles
const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%',
    justifyContent: "center"
  },
  input: {
    height: '8%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 5
  },
  buttons: {
    height: '6%',
    width: '100%',
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  button: {
    alignItems: 'center',
    height: '100%',
    width: '40%',
    justifyContent: 'center',
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#ad8184',
  },
  bolded: {
    fontWeight: 'bold',
    color: '#994b82',
    textAlign: 'center',
    width: '80%',
    fontSize: 40,
    lineHeight: 40,
  },
  text: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
  header: {
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    width: '90%',
    fontSize: 40,
    lineHeight: 40,
    fontWeight: 'bold',
    color: '#d6b5b7',
  },
  drinks: {
    paddingTop: 10,
    height: '60%',
    width: '100%',
  },
});

export default SearchView;
