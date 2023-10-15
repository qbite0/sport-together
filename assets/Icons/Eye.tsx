import Svg, { SvgProps, Path } from 'react-native-svg';
const Eye = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      fill="#fff"
      d="M.985 10C1.768 5.733 5.507 2.5 10 2.5c4.494 0 8.232 3.233 9.016 7.5-.784 4.267-4.522 7.5-9.016 7.5-4.493 0-8.232-3.233-9.015-7.5ZM10 14.167a4.167 4.167 0 1 0 0-8.334 4.167 4.167 0 0 0 0 8.334Zm0-1.667a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
    />
  </Svg>
);
export default Eye;
