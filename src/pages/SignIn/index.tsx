import React from 'react';
import { Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { Container } from './styles';

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Text>SignIn</Text>
      <Button onPress={() => navigation.navigate("SignUp")} title="SignUp"/>
    </Container>
  )
}

export default SignIn;