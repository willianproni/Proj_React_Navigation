import React, { useState } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { propsStack } from "../../routes/Stack/Models";
import { ButtonOpacidade, Container, EmailInput, Title } from "./styles";

export function Home() {
    const navigation = useNavigation<propsStack>();
    const [name, setName] = useState('');

    return (
        <Container>
            <Title>
                Bem-Vindo
            </Title>

            <EmailInput
                placeholder="Nome..."
                value={name}
                onChangeText={setName}
            />

            <EmailInput
                placeholder="Senha..."
                secureTextEntry
            />

            <View>
                <Text>Não tem Conta?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                    <Text>Criar</Text>
                </TouchableOpacity>
            </View>

            <ButtonOpacidade
                onPress={() => navigation.navigate("Profile", {
                    name: name
                })}>
                <Text>Entrar no Sistema</Text>
            </ButtonOpacidade>
{/* 
            <ButtonOpacidade
                onPress={() => navigation.navigate("Search")}>
                <Text>Search</Text>
            </ButtonOpacidade> */}
        </Container>
    );
}