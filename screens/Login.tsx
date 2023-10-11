import { Box, Text, View } from "@gluestack-ui/themed";
import { PrimaryButton, SecondaryButton, TextInput, CheckBox } from "../components";

export default function Login() {
    return (
        <View
            flex={1}
            backgroundColor="#16171c"
            padding={26}
            justifyContent="center"
            alignItems="center"
        >
            <Text paddingBottom={30} size="3xl" color="$white">Вход</Text>

            <Box width="$full" paddingVertical={10}>
                <TextInput placeholder="Почта" />
            </Box>
            <Box width="$full" paddingVertical={10}>
                <TextInput type="password" placeholder="Пароль" />
            </Box>

            <Box paddingBottom={50} width="$full" flexDirection="row" justifyContent="space-between">
                <CheckBox />
                <Text underline={true} color="#7b7c7f">Восстановить пароль</Text>
            </Box>

            <Box width="$full">
                <Box paddingBottom={20}>
                    <PrimaryButton>Войти</PrimaryButton>
                </Box>
                <SecondaryButton>Создать аккаунт</SecondaryButton>
            </Box>
        </View>
    )
}