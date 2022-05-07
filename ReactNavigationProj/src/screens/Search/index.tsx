import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { propsStack } from "../../routes/Stack/Models";

export function Search() {
    const navigation = useNavigation<propsStack>();
    return (
        <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1 }}>
            <Text style={{ fontSize: 20 }}>Search</Text>

            <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                style={{ marginTop: 12, backgroundColor: "#ddd", padding: 10, borderRadius: 10 }}
            >
                <Text>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate("Profile", {
                    name: "Willian"
                })}
                style={{ marginTop: 12, backgroundColor: "#ddd", padding: 10, borderRadius: 10 }}
            >
                <Text>Profile</Text>
            </TouchableOpacity>
        </View>
    );
}