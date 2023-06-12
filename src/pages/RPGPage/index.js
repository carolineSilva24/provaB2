import { ActivityIndicator, SafeAreaView, ScrollView } from 'react-native';
import CardJogo from '../../components/CardJogo';
import styles from './styles';


export default function MoviesPage(){
    const cartoesJogos = [
        {
          imagem: 'https://pm1.narvii.com/6839/b22a0622bca0f39f2719c34eafbb13f8d1ba777ev2_00.jpg',
          nome: 'Adaga',
          descricao: 'Dano: 1d4 perfurante, propriedades: Acuidade, leve, arremesso (distancia 6/18)',
        },
        {
          imagem: 'https://i.pinimg.com/236x/d2/43/f3/d243f312cf189a52a48f57b7f0309e92.jpg',
          nome: 'Espada longa',
          descricao: 'Dano: 1d8 cortante, propriedade: Versatil(1d10)',
        },
        {
          imagem: 'https://i.pinimg.com/236x/cc/a0/8a/cca08ac8625c4344ebefdc2e8f30f1d8--fantasy-weapons-fantasy-crossbow.jpg',
          nome: 'Besta leve',
          descricao: 'Dano: 1d8 perfurante, propriedades: Munição(distancia 24/96), recarga, duas mãos',
        },
      ]
      return (
        <SafeAreaView style={styles.container}>
            <ScrollView horizontal>
            {cartoesJogos.map (jogo => <CardJogo rpg={jogo}/>)}  
            </ScrollView>
        </SafeAreaView>
     );
    }