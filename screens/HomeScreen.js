import { Image, SafeAreaView, Text, View } from "react-native";
import React from "react";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import tw from "twrnc";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";

const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-2`}>
        <Image
          style={{
            width: 100,
            height: 100,
            objectFit: "contain",
          }}
          source={{
            url: "https://seeklogo.com/images/U/uber-logo-2BB8EC4342-seeklogo.com.png",
          }}
        />

        <GooglePlacesAutocomplete
          placeholder="where from?"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );

            dispatch(setDestination(null));
          }}
          onFail={(data, details = null) => {
            console.log(data); // Contains the selected location data
            console.log(details); // Contains additional details about the selected location
          }}
          minLength={2}
          enablePoweredByContainer={false}
          fetchDetails={true}
          returnKeyType={"search"}
        />

        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
