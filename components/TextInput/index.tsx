import { Input, InputField } from "@gluestack-ui/themed"
import { PropsWithChildren } from "react"
import { TextInputProps } from "react-native"

interface IInputProps {
    type?: 'text' | 'password';
    onKeyPress?: (e: any) => void;
    onFocus?: any;
    onBlur?: any;
}

export default function TextInput(props?: TextInputProps & IInputProps) {
    return (
        <Input
            rounded={6}
            size="md"
            backgroundColor="#25272f"
            borderWidth={0}
        >
            <InputField color="$white" placeholderTextColor="#67686f" {...props} />
        </Input>
    )
}