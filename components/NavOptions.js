import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "@rneui/themed";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const data = [
  {
    id: 1,
    title: "Get a ride",
    image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_372/v1568070443/assets/82/6bf372-6016-492d-b20d-d81878a14752/original/Black.png",
    screen: "MapScreen",
  },
  {
    id: 2,
    title: "Khaya de",
    image: "https://banner2.cleanpng.com/20180620/hjp/kisspng-uber-eats-pizza-food-delivery-restaurant-eat-street-express-5b2aa8d839e1d7.0953035415295223922371.jpg",
    screen: "EatsScreen",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={tw`p-2 bg-gray-200 m-2 w-40`}
          onPress={() => navigation.navigate(item.screen)}
          disabled={!origin}
        >
          <View style={tw`${!origin && "opacity-20"}`}>
            <Image
              style={{ width: 120, height: 120 }}
              source={{ uri: item.image }}
            />
            <Text>{item.title}</Text>

            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name="arrowright"
              type="antdesign"
              color="#fff"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
