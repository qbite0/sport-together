import Svg, { SvgProps, Path } from 'react-native-svg';
const Scan = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      fill="#fff"
      d="M1.667 3.333h1.666v13.334H1.667V3.333Zm3.333 0h1.667v13.334H5V3.333Zm2.5 0H10v13.334H7.5V3.333Zm3.333 0H12.5v13.334h-1.667V3.333Zm2.5 0H15v13.334h-1.667V3.333Zm2.5 0h2.5v13.334h-2.5V3.333Z"
    />
  </Svg>
);
export default Scan;
