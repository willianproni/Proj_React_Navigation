import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const Title = styled.Text`
    font-size: 30px;
    color: red;
`;

export const EmailInput = styled.TextInput`
    background: #ddd;
    margin-top: 12px;
    border-radius: 10px;
    padding: 10px;
`;

export const ButtonOpacidade = styled.TouchableOpacity`
    background: #87CEFA;
    height: 40px;
    justify-content: center;
    align-items: center;
    margin: 5px;
    border-radius: 10px;
`;
