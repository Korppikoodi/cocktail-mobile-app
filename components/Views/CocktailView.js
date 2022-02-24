import React from 'react';
import { Text, View, Image, ScrollView, StyleSheet, FlatList } from 'react-native';

// function handles removing nulls from drink object
const reformat = (obj) => {
  const newObj = {}
  Object.keys(obj).forEach((d) => {
    if(obj[d] !== null){
      newObj[d] = obj[d] 
    }
  })
  return newObj
}

const ingData = (obj) => {
   const tempArr = []
   // filter out ingredients to array
   const ingredients = Object.keys(obj).filter((d) => d.includes('strIngredient'))
   // filter out measures to array
   const measures = Object.keys(obj).filter((d) => d.includes('strMeasure'))
  // this loop puts both ingredients and their measurements to same string
   for(let i = 0; i < ingredients.length; i++) {
     const row = `${obj[ingredients[i]]}:  ${obj[measures[i]]}`
     tempArr.push(row)
   }
   return tempArr;
}

// this is detailed cocktail activity that shows more information on sertain cocktail
const CocktailView = ({route}) => {

  // remove nulls
  const drink = reformat(route.params.data)
  // combine ingredients and measures to single strings
  const ingredientRows = ingData(drink)
 
  return (
    <View style={{ flex: 1, backgroundColor: '#e6d3d4'}}>
      <View style={styles.upperPart}>
        <Image style={styles.image} source={{uri: drink.strDrinkThumb}}/>
        <View style={{width: '50%'}}>
        <Text style={styles.header}>{drink.strDrink}</Text>
        <View style={styles.info}>
        {drink.strCategory && <Text>Category:  {drink.strCategory}</Text>}
        {drink.strGlass && <Text>Glass:  {drink.strGlass}</Text>}
        {drink.strAlcoholic && <Text>Type:  {drink.strAlcoholic}</Text>}
        </View>
        </View>
      </View>
      <Text style={styles.header}>Ingredients</Text>
      <View style={styles.ingredientContainer}>
        <FlatList 
        data={ingredientRows}
        renderItem={({item}) => <View style={styles.ingredient}><Text>{item}</Text></View>}
        keyExtractor={(item, index) => index}/>
      </View>
      <Text style={styles.header}>Instructions</Text>
      <ScrollView style={styles.instructions}>
        <Text>{drink.strInstructions}</Text>
      </ScrollView>
    </View>
  );
}

// muuta scrollview Flatlistiksi

// styles for elements
const styles = StyleSheet.create({
  upperPart: {
    flexDirection: 'row',
    height: '40%',
    alignContent: 'center'
  },  
    ingredient: {
      flexDirection: 'row'
    },
    ingredientContainer: {
      paddingTop: 10,
      height: '20%',
      paddingLeft: 15,
    },
    image: {
      width: '50%',
      height: '95%',
      resizeMode: 'cover',
    },   
    instructions: {
      height: '40%',
      width: '95%',
      paddingTop: 10,
      paddingLeft: 15,
    },
    header: {
      fontWeight: 'bold',
      fontSize: 20,
      fontFamily: 'sans-serif',
      paddingTop: 20,
      paddingLeft: 15,
      textAlign: 'center',
    },
    info: {
      paddingTop: 30,
      alignContent: 'space-between',
      justifyContent: 'space-evenly',
      width: '100%',
      height: '40%',
      paddingLeft: 15,
    }
});

export default CocktailView;