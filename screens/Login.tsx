import { Box, View } from '@gluestack-ui/themed';
import {
  PrimaryButton,
  SecondaryButton,
  TextInput,
  CheckBox,
  Text,
} from '../components';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import Vkontakte from '../assets/Icons/Vkontakte';
import Telegram from '../assets/Icons/Telegram';
import Discord from '../assets/Icons/Discord';

interface LoginProps {
  route: RouteProp<ParamListBase, 'Login'>;
  navigation: any;
  onLayout: () => Promise<void>;
}

export default function Login(props: LoginProps) {
  return (
    <View
      flex={1}
      backgroundColor="#16171c"
      padding={16}
      justifyContent="center"
      alignItems="center"
      onLayout={props.onLayout}
      paddingBottom={200}
    >
      <Text
        marginTop={140}
        fontFamily="Rubik-Bold"
        paddingBottom={50}
        size="3xl"
        color="$white"
      >
        Вход
      </Text>

      <Box width="$full" paddingBottom={30}>
        <TextInput placeholder="Почта" />
      </Box>
      <Box width="$full" paddingBottom={20}>
        <TextInput type="password" placeholder="Пароль" />
      </Box>

      <Box
        paddingBottom={60}
        width="$full"
        flexDirection="row"
        justifyContent="space-between"
      >
        <CheckBox text="Запомнить меня" />
        <Text fontSize={13} textAlign="center" underline={true} color="#7b7c7f">
          Восстановить пароль
        </Text>
      </Box>

      <Box width="$full">
        <Box paddingBottom={16}>
          <PrimaryButton>Войти</PrimaryButton>
        </Box>

        <SecondaryButton onPress={() => props.navigation.navigate('Register')}>
          Создать аккаунт
        </SecondaryButton>
      </Box>

      <Box position="absolute" bottom={13}>
        <Text fontSize={13} color="rgba(255, 255, 255, 0.70)">
          Также вы можете войти через
        </Text>
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          marginTop={10}
        >
          <Vkontakte width={50} height={50} />
          <Telegram width={50} height={50} />
          <Discord width={50} height={50} />
        </Box>
      </Box>
    </View>
  );
}
