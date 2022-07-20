import { useState } from 'react';
import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import {VStack, Heading, Icon, useTheme} from 'native-base';
import {Envelope, Key} from 'phosphor-react-native';
import Logo from '../assets/logo_primary.svg';
import { Input } from '../components/Input';
import {Button} from '../components/Button';


export function SignIn(){

    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');   
    const {colors} = useTheme();

    function handleSignIn(){
        if(!email || !password){
           return  Alert.alert('Log in', 'Please fill all fields');                  
        }      
        setIsLoading(true);
        auth().
        signInWithEmailAndPassword(email, password)
        .catch(error => {
            console.log(error);
            setIsLoading(false);
           
            if(error.code === 'auth/invalid-email'){
               return  Alert.alert('Log in', 'Invalid email');
            }
            if(error.code === 'auth/wrong-password'){
                return  Alert.alert('Log in', 
                'wrong password or email');
             }

            if(error.code === 'auth/user-not found'){
                return  Alert.alert('Log in', 
                'unregistered user');
             }
              return Alert.alert('Log in', 'Something went wrong');

        });   
    }  
        

    return (
        <VStack flex={1} alignItems="center" bg="gray.800" px={8} pt={24}>
            <Logo/>
        < Heading color="gray.100"  fontSize="xl" mt={20} mb={6}>
        Access your account
        </Heading>

        <Input placeholder="E-mail" 
        mb={4}
        InputLeftElement = {<Icon as={<Envelope color={colors.gray[300]}/>}ml={4} />}
        onChangeText={setEmail}
        /> 
        <Input placeholder="Password" 
         mb={8}
         InputLeftElement = {<Icon as={<Key color={colors.gray[300]}/>} ml={4}/>}
         secureTextEntry
         onChangeText={setPassword}
        />
        
        <Button title='Log in' 
        w="full"
        onPress={handleSignIn}
        isLoading={isLoading}
        />
        </VStack>
    );
}