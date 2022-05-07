import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { propsStack } from "../../routes/Stack/Models";

export function Profile() {
    const params = useRoute()
    const navigation = useNavigation<propsStack>();

    console.log(params.params?.name)
    return (
        <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1 }}>
            <Text style={{ fontSize: 20 }}>Profile</Text>

            <TouchableOpacity
                style={{ marginTop: 12, backgroundColor: "#ddd", padding: 10, borderRadius: 10 }}
                onPress={() => navigation.navigate("Home")}>
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ marginTop: 12, backgroundColor: "#ddd", padding: 10, borderRadius: 10 }}
                onPress={() => navigation.navigate("Search")}>
                <Text>Search</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{ marginTop: 12, backgroundColor: "#ddd", padding: 10, borderRadius: 10 }}
                onPress={() => navigation.goBack()}
            >
                <Text>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}