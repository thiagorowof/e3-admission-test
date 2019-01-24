import React, { Component } from 'react';
import {Modal, StyleSheet, Text, Button, TouchableHighlight, TouchableOpacity, AsyncStorage, View} from 'react-native';


  export default class ModalItem extends Component {
    constructor(props) {
      super(props);
      this.state = {
          isModalVisible: props.modalVisible
      };
    };
  
    render() {
      return (
          <View style={{flex: 1, paddingTop:20}}>
              <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.isModalVisible}
              onRequestClose={() => {alert("Modal has been closed.")}}
              >
                  <View style={styles.container}>
                      <View style={styles.innerContainer}>
                          <Text style={styles.buttonText}>Detalhes do item: </Text>
                          <Text>Cod Prod: {this.props.selectedItem.CODPROD}</Text>
                          <Text>Descricao: {this.props.selectedItem.DESCRICAO}</Text>
                          <Text>Preço: {this.props.selectedItem.price}</Text>
                          <Text>Quantitade: {this.props.selectedItem.quantity}</Text>
                          <Button style={styles.buttonExit} title="Fechar detalhes" onPress={() => { this.props.hideModal() }} />
                      </View>
                  </View>
              </Modal>
          </View>
      );
    }
  }





const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    buttonText: {
        color: '#FD6A02',
    },
    buttonExit: {
        color: '#F5FCFF',
        backgroundColor: '#FD6A02',
    },
  });