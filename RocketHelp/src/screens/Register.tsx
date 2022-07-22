import {useState} from 'react';
import { Alert } from 'react-native';
import { VStack } from 'native-base';
import {useNavigation} from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore'
import {Header} from '../components/Header';
import {Input} from '../components/Input';
import {Button} from '../components/Button';


export function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [patrimony,setPatrimony] = useState('');
  const [description, setDescription] = useState('');
  const navigation = useNavigation();

  function handleNewOrderRegister() {   

    if(!patrimony || !description){
      return Alert.alert('Register', 'Please fill all fields');
    }  
      setIsLoading(true);

      firestore()
      .collection('orders')
      .add({
        patrimony,
        description,
        status: 'open',
        created_at: firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {       
        Alert.alert('Register', 'Order registered successfully');
        navigation.goBack();
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
        Alert.alert('Register', 'Something went wrong');
      });
  }



  
  return (
    <VStack flex={1} p={6} bg="gray.600">
      <Header title="New solicitation"/>   

      <Input
      placeholder="Patrimony number"
      mt={4}
      onChangeText={setPatrimony}
      />

      <Input
      placeholder="Problem description"
      flex={1}
      mt={5}
      multiline
      textAlignVertical='top'
      onChangeText={setDescription}
      /> 
      
      <Button
        title="Register" 
        mt={5}
        isLoading={isLoading}
        onPress={handleNewOrderRegister}
      
      />
    </VStack>
  );
}