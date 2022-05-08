import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../../screens/Home"
import { Profile } from "../../screens/Profile"
import { Search } from "../../screens/Search"
import { Register } from "../../screens/Register";
import { propsNavigationStack } from "./Models";

const { Navigator, Screen } = createStackNavigator<propsNavigationStack>();

export default function() {
    return(
        <Navigator initialRouteName="Home">
            <Screen name="Home" component={Home} options={{
                title: "Login",
                headerTitleAlign: "center",
                headerStyle:{
                    backgroundColor: "#404040",
                    height: 100,
                },
                headerTitleStyle:{
                    color: "#fff",
                    fontSize: 30,
                    fontWeight: 'bold'
                }
            }} />
            <Screen name="Profile" component={Profile} options={(props) =>({
                title: props.route.params.name
            })}/>
            <Screen name="Search" component={Search} />
            <Screen name="Register" component={Register}></Screen>
        </Navigator>
    );
}