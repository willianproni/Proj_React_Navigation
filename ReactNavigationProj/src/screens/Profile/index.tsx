import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { propsStack } from "../../routes/Stack/Models";

export function Profile() {
    const routes = useRoute()
    const navigation = useNavigation<propsStack>();

    const name = routes.params?.name ?? "visitante"

    return (
        <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1 }}>

            <Text style={{ fontSize: 25 }}>Bem-Vindo <Text style={{ color: "#d44", fontSize: 20 }}>{name}</Text></Text>

            <Text style={{ fontSize: 20 }}>Profile</Text>


            <TouchableOpacity
                style={{ marginTop: 12, backgroundColor: "#ddd", padding: 10, borderRadius: 10 }}
                onPress={() => navigation.navigate("Home")}>
                <Text>Sair</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ marginTop: 12, backgroundColor: "#ddd", padding: 10, borderRadius: 10 }}
                onPress={() => navigation.navigate("Search")}>
                <Text>Search</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity
                style={{ marginTop: 12, backgroundColor: "#ddd", padding: 10, borderRadius: 10 }}
                onPress={() => navigation.goBack()}
            >
                <Text>Voltar</Text>
            </TouchableOpacity> */}
        </View>
    );
}