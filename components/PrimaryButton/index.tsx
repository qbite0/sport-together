import { Button, Text } from "@gluestack-ui/themed"
import { PropsWithChildren } from "react"

export default function PrimaryButton(props: PropsWithChildren) {
    return (
        <Button backgroundColor="#cf2626">
            <Text color="$white">{props.children}</Text>
        </Button>
    )
}