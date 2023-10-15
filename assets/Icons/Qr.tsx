import Svg, { SvgProps, Path } from 'react-native-svg';
const Qr = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      fill="#fff"
      d="M13.333 14.167v-.834h-2.5v-2.5h2.5V12.5H15v1.667h-.833v1.666H12.5V17.5h-1.667V15H12.5v-.833h.833ZM17.5 17.5h-3.333v-1.667h1.666v-1.666H17.5V17.5Zm-15-15h6.667v6.667H2.5V2.5Zm8.333 0H17.5v6.667h-6.667V2.5ZM2.5 10.833h6.667V17.5H2.5v-6.667Zm12.5 0h2.5V12.5H15v-1.667ZM5 5v1.667h1.667V5H5Zm0 8.333V15h1.667v-1.667H5ZM13.333 5v1.667H15V5h-1.667Z"
    />
  </Svg>
);
export default Qr;
