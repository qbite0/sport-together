import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
const StatusWrong = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M8.668.553a1.88 1.88 0 0 1 2.664 0l8.115 8.115a1.88 1.88 0 0 1 0 2.664l-8.115 8.115a1.88 1.88 0 0 1-2.664 0L.553 11.332a1.88 1.88 0 0 1 0-2.664L8.668.553ZM10 1.893 1.892 10 10 18.108 18.108 10 10 1.892Zm-.15 9.293-2.032 2.031-1.335-1.335L8.515 9.85 6.483 7.818l1.335-1.335L9.85 8.515l2.032-2.032 1.335 1.335-2.031 2.032 2.031 2.032-1.335 1.335-2.032-2.031Z"
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
export default StatusWrong;
