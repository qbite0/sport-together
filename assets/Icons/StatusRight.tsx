import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const StatusRight = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10Zm10-8.182a8.182 8.182 0 1 0 0 16.364 8.182 8.182 0 0 0 0-16.364Zm4.376 5.074-5.086 7.12-4.38-3.285L6 9.273l2.892 2.169 4.005-5.607 1.48 1.057Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default StatusRight;
