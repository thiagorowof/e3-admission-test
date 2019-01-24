import React, {PureComponent, Component} from 'react';
import { View, Text, Button, AsyncStorage, FlatList, ScrollView, ActivityIndicator, StyleSheet, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { CheckBox, SearchBar } from 'react-native-elements';
import axios from 'axios';

import ModalItem from './itemModalScreen';

class ProductList extends PureComponent {
    constructor (props){
        super(props)
        this.attemptLogout = this.attemptLogout.bind(this)
        this.state={
            checked: false,
            isLoading: true,
            isModalVisible: false,
            selectedItem: null
          }
          this.arrayholder = [];
    }

    attemptLogout(){
        this.props.authLogout();
    }

    componentDidMount(){

        axios.get('https://e3-cluster-dev.sao01.containers.appdomain.cloud/api/product/test?NUMREGIAO=5&CODFILIAL=1')
        .then(res => {
            const responseJson = res.data;
            this.setState({
                isLoading: false,
                dataSource: responseJson,
              });
              this.arrayholder = responseJson;    
        })
      }

      renderHeader = () => {    
        return (      
            <SearchBar    style={{backgroundColor: '#FFFFFF'}}    
            placeholder="Buscar por descrição"        
            lightTheme        
            round        
            onChangeText={text => this.searchFilterFunction(text)}
            autoCorrect={false}             
            />    
        );  
    };


    searchFilterFunction = text => {    
        const newData = this.arrayholder.filter(item => {      
          const itemData = `${item.DESCRICAO.toUpperCase()}`;
           const textData = text.toUpperCase();
            
           return itemData.indexOf(textData) > -1;    
        });    
        this.setState({ dataSource: newData });  
      };



      _onPressItem = (item) => { 
        this._showModal(item);
    };

    _hideMyModal = () => {
        this.setState({isModalVisible: false})
    }

    _showModal = (item) => this.setState({ isModalVisible: true, 
    selectedItem: item })

    _keyExtractor = ({_id}, index) => _id;

    _renderItem = ({item}) => (
        <MyItem 
            style={styles.row}
            item={item}
            onPressItem={() => this._onPressItem(item)}
        />
    );


    render() {
        if(this.state.isLoading){
            return(
                <View style={{flex: 1, justifyContent: 'center', flexDirection: 'row', justifyContent: 'space-around', padding: 10}}>
                    <ActivityIndicator size="large" color="#FD6A02" />
                </View>
            ) 
        }
        return (
                <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
                    <CheckBox title="Filtrar apenas por estoque"
                    checkedTitle="Produtos filtrados apenas pelos que tem em estoque"
                    textStyle={styles.checkbox}
                    checked={this.state.checked}
                    onPress={() => this.setState({ checked: !this.state.checked })} /> 
                    <ScrollView style={{flex: 2, height:90, backgroundColor: '#FFFFFF'}}>
                    <FlatList
                        data={this.state.checked ? this.state.dataSource.filter(item => item.quantity !== null) : this.state.dataSource}
                        renderItem={this._renderItem}
                        keyExtractor={this._keyExtractor}
                        ListHeaderComponent={this.renderHeader} 
                    />
                    </ScrollView>
                    { this.state.isModalVisible && <ModalItem selectedItem={this.state.selectedItem} modalVisible={this.state.isModalVisible} hideModal={this._hideMyModal} /> }                
                    <Button  title="Logout" onPress={this.attemptLogout} />
                </View>
        )
    }


};



class MyItem extends React.Component { 
    _onPress = () => { 
      this.props.onPressItem(this.props.item); 
    }; 
    render() { 
      return(
          <TouchableOpacity 
              {...this.props}
              onPress={this._onPress}
              >
              <Text style={styles.itemText}> {this.props.item.CODPROD}, {this.props.item.DESCRICAO}</Text>
          </TouchableOpacity>
      ) 
    } 
  }





  



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#db0606',
    },
    checkbox: {
        color: '#FD6A02',
    },
  });



const mapStateToProps = (state, ownProps) => {
    return{}
}

export const actionCreator = (type,payload=null) => ({type,payload})

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        authLogout:() =>{
            AsyncStorage.multiRemove(['token', 'authenticated'])
            dispatch(actionCreator('LOGGOUT'))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)