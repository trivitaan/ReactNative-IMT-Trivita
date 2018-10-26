import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, 
         Header,
         Text,
         View,
         Body, 
         Content,
         Form,
         Button,
         Item,
         Input,
         Title,
         Label, 
         Alert,
         Footer } from 'native-base';

class App extends Component {
    constructor(){
        super();
        this.state = {
          massa:'',
          tinggi:'',
          indeks:'',
          diagnosa:'',
          status:false }
        }

        Hasil(){
            var a = parseInt(this.state.massa);
                if(isNaN(a)){
                    alert("Masukkan Angka!");
                return;
                } else {
                }
            var b = parseInt(this.state.tinggi)/100;
                if(isNaN(b)){
                    alert("Masukkan Angka!");
                return;
                } else {
                }

            var c = a/Math.pow(b, 2);
            var d = '';
                if (c <= 18.5) {
                    d='Berat Badan Kurang';
                }
                else if (c <= 24.9){
                    d='Berat Badan Ideal';
                }
                else if (c <= 29.9){
                    d='BB berlebih';
                }
                else if (c <=39.9){
                    d='BB sangat berlebih';
                }
                else if (c >=39.9){
                    d='Obesitas';
                }
                else {
                    console.log("don't give up!");
                }
            this.setState({
                massa    : a,
                tinggi   : b,
                indeks   : c,
                diagnosa : d,
                status   : true
                })
          }
          
    render() {
        return (
            <Container style={styles.body}>
                <Header>
                    <Title style={styles.title}> 
                      INDEKS MASSA TUBUH 
                    </Title>
                </Header>

                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label style={styles.input}> 
                                Massa/Berat (kg) 
                            </Label>
                            <Input onChangeText={(a)=>{this.setState({massa:a})}} style={styles.input} />
                        </Item>

                        <Item floatingLabel last>
                            <Label style={styles.input}> 
                                Tinggi (cm) 
                            </Label>
                            <Input onChangeText={(b)=>{this.setState({tinggi:b})}} style={styles.input} />
                        </Item>

                    </Form>
                    <Button block style={{padding: 10}} onPress={()=>{this.Hasil();}}>
                        <Text> HITUNG IMT </Text>
                    </Button>

                    {this.state.status &&
                        <View hidden="true">
                            <Text style={styles.text} >Berat Badan:</Text>
                            <Text style={styles.hasil}>{this.state.massa} KG</Text>
                            <Text style={styles.text} >Tinggi Badan:</Text>
                            <Text style={styles.hasil}>{this.state.tinggi} M</Text>
                            <Text style={styles.text} >Index massa tubuh:</Text>
                            <Text style={styles.hasil}>{this.state.indeks}</Text>
                            <Text style={styles.text} >Diagnosa:</Text>
                            <Text style={styles.hasil}>{this.state.diagnosa}</Text>
                        </View>
                    }
                </Content>
                <Footer></Footer>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    body:{
        backgroundColor:'lightcoral'
    },

    title:{
        paddingTop: 20,
        color: 'white'
    },
    input:{
        textAlign :'center',
        color     : 'white'
    },
    text:{
      fontSize  : 16,
      textAlign :'center',
      padding   : 10,
      color     : 'white'
    },
    hasil:{
        fontSize  : 20,
        textAlign :'center',
        padding   : 10,
        fontWeight: 'bold',
        color     : 'red'
    }
  });

export default App;