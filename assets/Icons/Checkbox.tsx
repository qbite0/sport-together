import Svg, { SvgProps, Rect, Path } from 'react-native-svg';
const Checkbox = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Rect width={18} height={18} x={1} y={1} fill="#25272F" rx={1} />
    <Path
      fill="#fff"
      d="M1.111 0H18.89C19.503 0 20 .497 20 1.111V18.89c0 .614-.497 1.111-1.111 1.111H1.11A1.111 1.111 0 0 1 0 18.889V1.11C0 .497.497 0 1.111 0Zm7.78 14.444 7.858-7.856-1.572-1.572-6.285 6.286-3.143-3.143L4.178 9.73l4.714 4.714Z"
    />
  </Svg>
);
export default Checkbox;
