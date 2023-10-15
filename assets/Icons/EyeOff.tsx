import Svg, { SvgProps, Path } from 'react-native-svg';
const EyeOff = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      fill="#fff"
      d="M3.767 4.946 1.161 2.34 2.34 1.16l16.5 16.5-1.18 1.178-2.758-2.758A9.124 9.124 0 0 1 10 17.5c-4.493 0-8.232-3.234-9.015-7.5a9.151 9.151 0 0 1 2.782-5.055Zm8.531 8.53-1.22-1.22a2.5 2.5 0 0 1-3.334-3.334l-1.22-1.22a4.167 4.167 0 0 0 5.774 5.774ZM6.645 3.133A9.143 9.143 0 0 1 10 2.5c4.494 0 8.232 3.233 9.016 7.5a9.124 9.124 0 0 1-1.677 3.827l-3.216-3.216A4.167 4.167 0 0 0 9.39 5.878L6.645 3.133Z"
    />
  </Svg>
);
export default EyeOff;