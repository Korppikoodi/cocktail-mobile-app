import React from 'react';
import { View, Image, StyleSheet, Text  } from 'react-native';
import Button from './Button';

// Drink spesific display component
// it shows image of drink, name and has button which will navigate to
// detailed drink activity
export default function Drink({drink, action}) {
  return (<View style={styles.row}>
      <Image style={styles.image} source={{uri: drink.strDrinkThumb}}/>
      <Text style={styles.drinkName}>
          {drink.strDrink}
        </Text>
    <Button title={'Details '} styles={styles} onPress={() => action('Drink details', {data: drink})}></Button>
  </View>
  );
}

// element styles
const styles = StyleSheet.create({
  image: {
    width: '20%',
    height: '100%',
    resizeMode: 'stretch',
  },
  drinkName: {
    width: '60%', 
    alignSelf: 'center', 
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  row: {
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 5,
    height: 50,
    width: '80%',
    padding: 1,
  },
  button: {
    alignItems: 'center',
    height: '100%',
    width: '20%',
    justifyContent: 'center',
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#ad8184',
  }, 
  text: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
 
});