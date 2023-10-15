import {
  CheckIcon,
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
} from '@gluestack-ui/themed';

interface Props {
  text: string;
}

export default function CheckBox(props: Props) {
  return (
    <Checkbox size="md" value={''} aria-label="d">
      <CheckboxIndicator borderWidth={1} backgroundColor="transparent" mr="$2">
        <CheckboxIcon backgroundColor="#cf2626" color="$white" as={CheckIcon} />
      </CheckboxIndicator>
      <CheckboxLabel fontSize={13} color="#8a8b8d">
        {props.text}
      </CheckboxLabel>
    </Checkbox>
  );
}
