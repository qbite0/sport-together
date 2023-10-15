import { Box, View } from "@gluestack-ui/themed";
import { PrimaryButton, SecondaryButton, TextInput, CheckBox, Text } from "../components";
import { ComponentProps } from "react";

export default function Login(props: ComponentProps<typeof View>) {
    return (
        <View
            flex={1}
            backgroundColor="#16171c"
            padding={16}
            justifyContent="center"
            alignItems="center"
            {...props}
        >
            <Text fontFamily="Rubik-Bold" paddingBottom={50} size="3xl" color="$white">Вход</Text>

            <Box width="$full" paddingBottom={30}>
                <TextInput placeholder="Почта" />
            </Box>
            <Box width="$full" paddingBottom={20}>
                <TextInput type="password" placeholder="Пароль" />
            </Box>

            <Box paddingBottom={60} width="$full" flexDirection="row" justifyContent="space-between">
                <CheckBox />
                <Text underline={true} color="#7b7c7f">Восстановить пароль</Text>
            </Box>

            <Box width="$full">
                <Box paddingBottom={16}>
                    <PrimaryButton>Войти</PrimaryButton>
                </Box>
                <SecondaryButton>Создать аккаунт</SecondaryButton>
            </Box>
        </View>
    )
}