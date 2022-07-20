import { VStack, Text } from 'native-base';
import {useRoute} from '@react-navigation/native';
import{Header} from '../components/Header';
import { OrderProps } from '../components/Order';


type RouteParams = {
  orderId: string;
}

type OrderDetails = OrderProps & {
  description: string;
  solution: string;
  closed: string;
}

export function Details() {
  const route = useRoute();
  const {orderId} = route.params as RouteParams;
  return (
    <VStack>
      <Header title="solicitation" />
      <Text color="white">
        {orderId}
      </Text>
    </VStack>
  );
}