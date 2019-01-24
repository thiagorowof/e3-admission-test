import {createStackNavigator} from 'react-navigation';
import LoginScreen from '../components/Login';
import ProductList from '../components/ProductList';

export default AppNavigation = (authenticated) =>createStackNavigator({
    login:{
        getScreen:()=>LoginScreen,
        navigationOptions:{
            title: 'Login'
        }
    },
    ProductList:{
        getScreen:()=>ProductList,
        navigationOptions:{
            title: 'ProductList'
        }
    }
},{
    initialRouteName:authenticated?'ProductList':'login'
})