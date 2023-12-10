import React from 'react';
import { Text, TextProps, TextStyle } from 'react-native';
import {
  FONT_SIZE,
  COLORS,
  Color,
  FontSize,
} from '../attributes';

type StyledTextProps = TextProps & {
  size?: FontSize;
  color?: Color;
  weight?: TextStyle['fontWeight'],
  align?: TextStyle['textAlign'];
  transform?: TextStyle['textTransform'];
}
const StyledText: React.FC<StyledTextProps> = ({
  size = 'm',
  color = 'black',
  weight = 'normal',
  align = 'left',
  transform = 'none',
  ...textProps
}) => {

  const propStyles = {
    ...FONT_SIZE[size],
    fontWeight: weight,
    color: COLORS[color],
    textAlign: align,
    textTransform: transform
  };

  return <Text {...textProps} style={[propStyles, textProps.style]} />;
};

export default StyledText;
