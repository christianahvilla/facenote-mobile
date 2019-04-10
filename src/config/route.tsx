import {
    createStackNavigator,
    createAppContainer
} from "react-navigation";

//Routes to navigate through the app
const Routes = createStackNavigator(
    {

    },
    {
        initialRouteName: "SelectInitialRoute",
        headerMode: "none",
    }
)

export default createAppContainer(Routes);