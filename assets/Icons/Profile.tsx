import Svg, { SvgProps, Path } from 'react-native-svg';
const Profile = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      fill="#fff"
      d="M1.667 3.328c0-.457.38-.828.826-.828h15.014c.456 0 .826.37.826.828v13.344c0 .457-.38.828-.826.828H2.493a.827.827 0 0 1-.826-.828V3.328ZM5 12.5v1.667h10V12.5H5Zm0-6.667v5h5v-5H5Zm6.667 0V7.5H15V5.833h-3.333Zm0 3.334v1.666H15V9.167h-3.333Zm-5-1.667h1.666v1.667H6.667V7.5Z"
    />
  </Svg>
);
export default Profile;
