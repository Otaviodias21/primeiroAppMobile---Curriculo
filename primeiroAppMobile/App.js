import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';
import { Paragraph } from 'react-native-paper';

class App extends Component{
  render(){

    let profile= 'App Meu Perfil';
    let img = 'https://avatars.githubusercontent.com/u/60992292?v=4 ';

    let dados = 'Dados pessoais';
    let Nome = 'Nome: Otávio Augusto dias Araujo';
    let idade = 'Idade: 20 Anos' ;
    let num = 'Celular: (13)9711-****'; 
    let nasc = 'Nascimento: 22/07/02';
    let civil = 'Estado Cívil: Solteiro';

    let escola = 'Formação';
    let curso = 'Técnico em Informática para Internet - ETEC Praia Grande';
    let facul = 'Cursando Análise e Desenvolvimento de Sistemas - FATEC Praia Grande';

    let exp = 'Experiência';
    let faz = 'Estagiario na Prefeituira de São Vicente';
    let faz1 = 'direcionado para Área de Manutenção de Computadores e Redes';

    let projects = 'Projetos';
    let lessons = 'Calculadora mobile e Site da Etec'
    let mobile ='https://github.com/Otaviodias21';
    return(
      <View>
       <Text style={{ marginTop: 20,
          marginRight: 'auto',
          marginBottom: 0,
          marginLeft: 'auto', 
          fontWeight: 'bold', 
          fontSize: 30, 
          color: '#1DF260'}}>{profile}</Text>
      <Image
          source={{ uri: img }}
          style={{borderRadius: 40, width: 200, height: 200,   
          marginTop: 0,
          marginRight: 'auto',
          marginBottom: 0,
          marginLeft: 'auto'
          }}    
    />

    <Text style={{ fontWeight: 'bold', fontSize: 30, margin: 15, color: '#1DF260'}}>{dados}</Text>
    <Text style={{ fontFamily: 'arial',  fontSize: 30, margin: 20, color: '#7C32FC'}}>{Nome}{'\n'}{'\n'}{idade}{'\n'}{'\n'}{nasc}{'\n'}{'\n'}{num}{'\n'}{'\n'}{civil}</Text>

    <Text style={{ fontWeight: 'bold', fontSize: 30, margin: 15, color: '#1DF260'}}>{escola}</Text>   
    <Text style={{ fontFamily: 'arial', fontSize: 30, margin: 20, color: '#7C32FC'}}>{curso}{'\n'}{'\n'}{facul}</Text>

    <Text style={{ fontWeight: 'bold', fontSize: 30, margin: 15, color: '#1DF260'}}>{exp}</Text>   
    <Text style={{ fontFamily: 'arial', fontSize: 30, margin: 20, color: '#7C32FC'}}>{faz}, {faz1}</Text>

    <Text style={{ fontWeight: 'bold', fontSize: 30, margin: 15, color: '#1DF260'}}>{projects}</Text>
    <Text style={{ fontFamily: 'arial', fontSize: 30, margin: 20, color: '#7C32FC'}}>{lessons}{'\n'}{'\n'}{mobile}</Text>  
           
      </View>
    )
  }
}


export default App;