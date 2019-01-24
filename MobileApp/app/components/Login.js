import React, {PureComponent} from 'react';
import { View, Text, Button, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';


class LoginScreen extends PureComponent {
    constructor (props){
        super(props)
        this.attemptLogin = this.attemptLogin.bind(this)
    }

    attemptLogin(){
        var token = 'someToken';
        this.props.authSuccess(token);
    }

    render(){
        return(
            <View>
                <Button title="Login" onPress={this.attemptLogin} />
            </View>
        )
    }

};

const mapStateToProps = (state, ownProps) => {
    return{}
}

export const actionCreator = (type,payload=null) => ({type,payload})

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        authSuccess:(token) =>{
            AsyncStorage.multiSet([['token', token],['authenticated','1']])
            dispatch(actionCreator('LOGIN_SUCESS'))
        }
    }
}

export const authStateReducer = (state={app_stated:false,authenticated:false},{type,payload}) => {
    switch(type){
        case 'LOGIN_SUCESS':
        return {...state, authenticated:true}
        case 'LOGGOUT':
        return {...state, authenticated:false}
        case 'APP_LOADED':
        return {...state, app_started:true}
        default:
        return state
    } 
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)