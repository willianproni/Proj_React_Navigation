import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { propsStack } from "../../routes/Stack/Models";
import { Container, RegisterInput } from "./styles";

export function Register() {
    const navigation = useNavigation<propsStack>();
    return (
        <Container>

            <RegisterInput
                placeholder="Nome de Usuário..."
            />

            <RegisterInput
                placeholder="Email..."
            />

            <RegisterInput
                placeholder="Senha..."
                secureTextEntry
            />

            <Text>
                Já tem uma conta?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Text>
                    Login
                </Text>
            </TouchableOpacity>
        </Container>
    );
}