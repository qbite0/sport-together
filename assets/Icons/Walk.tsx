import Svg, { SvgProps, Path } from 'react-native-svg';
const Walk = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      fill="#fff"
      d="M11.059 0c-.59.008-1.21.112-1.862.331-1.392 2.407-3.153 5.261-5.802 7.768-.978.925-1.81 1.955-2.413 2.972.06.275.23.507.495.758.507.48 1.424.94 2.52 1.446 2.137.988 4.95 2.193 6.755 4.72l9.028.002c-.932-3.082-4.628-4.4-7.34-3.653l-.011.004c-.074.028-.151.05-.23.068l-.002.002c-.41.096-.869.073-1.344-.018-1.144-.219-2.435-.857-2.831-1.988C6.7 8.64 8.79 4.59 11.629 2.696c1.064-.71 2.264-1.125 3.437-1.065l.02.001C13.969.642 12.624-.019 11.059 0Zm3.773 2.437c-.887 0-1.82.33-2.706.922-2.522 1.684-4.46 5.44-3.285 8.797.236.676 1.258 1.27 2.182 1.446.462.088.887.066 1.095-.012.103-.04.146-.08.165-.112.02-.031.038-.072.012-.19-.42-1.922-.127-3.682 1.04-4.981 1.088-1.213 2.896-1.979 5.418-2.206-.693-2.052-1.729-3.1-2.83-3.483a3.26 3.26 0 0 0-1.091-.18ZM.503 11.981A6.299 6.299 0 0 0 0 13.556c.331 1.208 2.395 2.412 4.204 2.669.079-.26.27-.5.475-.62C7.033 16.86 8.656 18.247 9.386 20h10.596c.032-.418.02-.814-.029-1.19l-9.43-.001h-.236l-.127-.19c-1.634-2.418-4.335-3.593-6.543-4.613-1.104-.51-2.085-.972-2.752-1.604a2.6 2.6 0 0 1-.362-.421Z"
    />
  </Svg>
);
export default Walk;
