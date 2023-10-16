import Svg, { SvgProps, Path } from 'react-native-svg';
const Events = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      fill="#fff"
      d="M14.167 2.5H17.5c.46 0 .833.373.833.833v13.334c0 .46-.373.833-.833.833h-15a.833.833 0 0 1-.833-.833V3.333c0-.46.373-.833.833-.833h3.333V.833H7.5V2.5h5V.833h1.667V2.5Zm-10.834 5v8.333h13.334V7.5H3.333ZM5 10.833h4.167v3.334H5v-3.334Z"
    />
  </Svg>
);
export default Events;
