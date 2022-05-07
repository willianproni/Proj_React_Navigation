import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { propsStack } from "../../routes/Stack/Models";

export function Home() {
    const navigation = useNavigation<propsStack>();
    return (
        <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1 }}>
            <Text style={{ fontSize: 20 }}>Home</Text>

            <TouchableOpacity
                style={{ marginTop: 12, backgroundColor: "#ddd", padding: 10, borderRadius: 10 }}
                onPress={() => navigation.navigate("Profile", {
                    name: "Willian"
                })}>
                <Text>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ marginTop: 12, backgroundColor: "#ddd", padding: 10, borderRadius: 10 }}
                onPress={() => navigation.navigate("Search")}>
                <Text>Search</Text>
            </TouchableOpacity>
        </View>
    );
}