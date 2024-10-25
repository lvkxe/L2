import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Movie from'./components/Movie';

const AllMovies = () => {
  return (
      <View>
          <ScrollView>
        <Text></Text>
        <Text></Text>
              <Text>Scroll me please</Text>
        <Movie title="Doctor Sleep" year="2019" icon_name="skull" poster={require("./img/doctor-sleep.jpg")}/>
          <Movie title="Midway" year="2020" icon_name="person-rifle" poster={require("./img/midway.jpg")}/>
          </ScrollView>
      </View>
  )
}

export default AllMovies;
