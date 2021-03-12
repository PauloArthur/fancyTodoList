import React from 'react';
import { Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container } from './styles';

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Text>SignUp</Text>
      <Button onPress={() => navigation.goBack()} title="Back"/>
    </Container>
  )
}

export default SignUp;