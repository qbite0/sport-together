import { Box, View } from '@gluestack-ui/themed';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import {
  CheckBox,
  PrimaryButton,
  SecondaryButton,
  Text,
  TextInput,
} from '../components';

interface RegisterProps {
  route: RouteProp<ParamListBase, 'Register'>;
  navigation: any;
  onLayout: () => Promise<void>;
}

export default function Register(props: RegisterProps) {
  return (
    <View
      flex={1}
      backgroundColor="#16171c"
      padding={16}
      justifyContent="center"
      alignItems="center"
      paddingBottom={175}
      {...props}
    >
      <Text
        marginTop={140}
        fontFamily="Rubik-Bold"
        paddingBottom={40}
        size="3xl"
        color="$white"
      >
        Регистрация
      </Text>

      <Box width="$full" paddingBottom={30}>
        <TextInput placeholder="Имя" />
      </Box>
      <Box width="$full" paddingBottom={30}>
        <TextInput placeholder="Фамилия" />
      </Box>
      <Box width="$full" paddingBottom={30}>
        <TextInput placeholder="Почта" />
      </Box>
      <Box width="$full" paddingBottom={30}>
        <TextInput type="password" placeholder="Пароль" />
      </Box>
      <Box width="$full" paddingBottom={20}>
        <TextInput type="password" placeholder="Повторить пароль" />
      </Box>
      <Box
        paddingBottom={60}
        width="$full"
        flexDirection="row"
        justifyContent="space-between"
      >
        <CheckBox text="Я согласен на обработку персональных данных" />
      </Box>

      <Box paddingHorizontal={16} width="$full" position="absolute" bottom={36}>
        <PrimaryButton>Зарегистрироваться</PrimaryButton>
        <Box marginTop={20} flexDirection="row" justifyContent="center">
          <Text fontSize={13} color="rgba(255, 255, 255, 0.50)">
            Уже зарегестрированы?
          </Text>
          <Text
            onPress={() => props.navigation.navigate('Login')}
            color="white"
            fontSize={14}
            fontWeight="$500"
          >
            {' '}
            Войти
          </Text>
        </Box>
      </Box>
    </View>
  );
}
