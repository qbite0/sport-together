import { Button, Text } from "@gluestack-ui/themed"
import { PropsWithChildren } from "react"

export default function SecondaryButton(props: PropsWithChildren) {
    return (
        <Button backgroundColor="#25272f" >
            <Text color="$white">{props.children}</Text>
        </Button>
    )
}
