import Svg, { SvgProps, Path } from 'react-native-svg';
const Filters = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      fill="#fff"
      d="M8.333 15h3.334v-1.667H8.333V15ZM2.5 5v1.667h15V5h-15ZM5 10.833h10V9.167H5v1.666Z"
    />
  </Svg>
);
export default Filters;
