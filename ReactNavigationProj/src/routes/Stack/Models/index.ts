import { StackNavigationProp } from "@react-navigation/stack";

export type propsNavigationStack = {
    Home: undefined;
    Profile:{
        name: string;
    } 
    Search: undefined;
}

export type propsStack = StackNavigationProp<propsNavigationStack>