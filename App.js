import SearchView from './components/Views/SearchView';
import CocktailView from './components/Views/CocktailView';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// this is the top component that has the navigation routes for activities
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CocktailSearch"
          component={SearchView}
        />
        <Stack.Screen 
        name="Drink details"
        component={CocktailView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

