import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screen
import PokedexScreen from "../screens/Pokedex";
import PokemonScreen from "../screens/Pokemon";

const Stack = createStackNavigator();

const PokedexNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pokédex" component={PokedexScreen} />
      <Stack.Screen name="Pokémon" component={PokemonScreen} />
    </Stack.Navigator>
  );
};

export default PokedexNavigation;
