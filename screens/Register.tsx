import { ComponentProps } from 'react';
import { Box, Text, TextareaInput, View } from '@gluestack-ui/themed';

export default function Register(props: ComponentProps<typeof View>) {
  return (
    <View
      flex={1}
      backgroundColor="#16171c"
      padding={16}
      justifyContent="center"
      alignItems="center"
      {...props}
    >
      <Box backgroundColor="#16171c">
        <Text>Регистрация</Text>
      </Box>
    </View>
  );
}
