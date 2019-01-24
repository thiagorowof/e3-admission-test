import React, {PureComponent} from 'react';
import {AsyncStorage, Platform, StyleSheet, Text, ActivityIndicator, View} from 'react-native';
import AppNavigation from './app/config/navigation';
import { actionCreator } from './app/components/Login';
import { connect } from 'react-redux';

class AppRoot extends PureComponent{
    constructor(props){
        super(props)
    }

    componentWillMount(){
        this.props.checkLogin();
    }

    render(){
        const {app_started, authenticated} = this.props.authState
        return app_started ? this._renderAppRoot(authenticated) : this._renderSplash(app_started);
    }


    _renderAppRoot(authenticated){
        const CreateRoot = AppNavigation(authenticated)
        return <CreateRoot/>        
    }

    _renderSplash(){
        return (
            <View>
                <ActivityIndicator size='large'/>
                <Text children='loading...' />
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        async checkLogin(){ 
            const isLoggin = await AsyncStorage.getItem('authenticated').catch(e=>console.log(e))
            if(isLoggin){
                dispatch(actionCreator('LOGIN_SUCESS'))
            }
            dispatch(actionCreator('APP_LOADED'))
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return{
        authState: state.authState
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppRoot)