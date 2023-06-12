import { StyleSheet } from "react-native";
import {MAX_HEIGHT, MAX_WIDTH} from '../../components/CardJogo';

const styles = StyleSheet.create({
container: {
        backgroundColor: '#9370DB',
        margin: 15,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: MAX_HEIGHT,
        width: MAX_WIDTH
},
viewImg:{
    width: '26%',
    height: '150',
},
img:{
 height: 140,
 width:'100%',
 borderRadius: 5,
 alignItems: 'center'
},
viewData:{
    padding: 10,
    width: '74%',
    height: '100%',
    textAlign: 'center'
},
nome:{
 fontSize: 18,
 fontWeight: 'bold',
 color: 'red'
},
descricao:{
    fontSize: 16,
    color: 'black',
    fontFamily: 'arial',
    marginTop: '5px',
    padding: '10px'
},
button:{
    marginTop: 10,
    padding: 10
},
titulo:{
  fontSize: 17,
},
btnText: {
    fontSize: 20,
    fontWeight: 'bold'
},
cardJogo: {
    margin: 15,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
}
});

export default styles;