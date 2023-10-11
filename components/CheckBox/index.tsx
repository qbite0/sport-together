import { CheckIcon, Checkbox, CheckboxIcon, CheckboxIndicator, CheckboxLabel } from "@gluestack-ui/themed";

export default function CheckBox() {
    return (
        <Checkbox size="md" value={""} aria-label="d">
            <CheckboxIndicator borderWidth={0} backgroundColor="transparent" mr="$2">
                <CheckboxIcon backgroundColor="#cf2626" color="$white" as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel color="#8a8b8d">Запомнить меня</CheckboxLabel>
        </Checkbox>
    )
}