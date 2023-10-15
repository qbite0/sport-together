import { Button, Text } from '@gluestack-ui/themed';
import { ComponentProps, PropsWithChildren } from 'react';

export default function SecondaryButton(
  props: PropsWithChildren<ComponentProps<typeof Button>>
) {
  return (
    <Button {...props} backgroundColor="#25272f">
      <Text color="$white">{props.children}</Text>
    </Button>
  );
}
