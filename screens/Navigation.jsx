import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './Home';
import { FullPostScreen } from './FullPost';

const Stack = createStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Home"
                    component={HomeScreen}
                    options={{title: 'Новости', headerTitleAlign: 'center'}}
                />
                <Stack.Screen 
                    name="FullPost"
                    component={FullPostScreen}
                    options={{title: 'Статья', headerTitleAlign: 'center'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}