import { Link } from "@react-navigation/native";
import { TouchableOpacity, Dimensions, View, Text, Image } from 'react-native';
import styles from '../pages/RPGPage/styles';

export const MAX_WIDTH = Dimensions.get('window').width*0.9;
export const MAX_HEIGHT = Dimensions.get('window').height*0.8;

export default function CardJogo(props){
    return(
      <View style = {styles.cardJogo} > 
        <Text>Página principal com os cards do jogo</Text>
       <View style = {styles.viewImg}>
        <Image source = {{
            uri: props.rpg.imagem
        }} style = {styles.img}/>
       </View>
      <View style = {styles.viewData}>
       <Text style={styles.nome}> Nome do item: {props.rpg.nome}</Text>
       <Text style={styles.descricao}> <Text style = {styles.titulo}>Descrição do item</Text>: {props.rpg.descricao}</Text>
        <TouchableOpacity style={styles.detalhes}>
        <Link to={{screen: 'LoginPage' }}><Text style={styles.btnText}>Trocar</Text></Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
         <Link to={{screen: 'RegisterPage', params: {props: props}}}><Text style={styles.btnText}>Fazer Registro</Text></Link>
        </TouchableOpacity>
      </View>
      </View>
    );
   }





    