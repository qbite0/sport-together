import { Button, Pressable, Text } from '@gluestack-ui/themed';
import { ComponentProps, PropsWithChildren } from 'react';

export default function PrimaryButton(
  props: PropsWithChildren<ComponentProps<typeof Button>>
) {
  return (
    <Button {...props} backgroundColor="#cf2626">
      <Text color="$white">{props.children}</Text>
    </Button>
  );
}
