import { ComponentProps, PropsWithChildren } from "react";
import { Text } from "@gluestack-ui/themed";

export default function CheckBox(props: PropsWithChildren<ComponentProps<typeof Text>>) {
    return (
        <Text fontFamily="Rubik-Regular" {...props}>{props.children}</Text>
    )
}