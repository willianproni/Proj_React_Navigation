import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../../screens/Home"
import { Profile } from "../../screens/Profile"
import { Search } from "../../screens/Search"
import { propsNavigationStack } from "./Models";

const { Navigator, Screen } = createStackNavigator<propsNavigationStack>();

export default function() {
    return(
        <Navigator initialRouteName="Home">
            <Screen name="Home" component={Home} />
            <Screen name="Profile" component={Profile} />
            <Screen name="Search" component={Search} />
        </Navigator>
    );
}