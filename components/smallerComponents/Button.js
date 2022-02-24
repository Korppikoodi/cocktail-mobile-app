import React from 'react';
import { Text, Pressable } from 'react-native';

// this is custom button component
// it is made because default Button does not allow styling
export default function Button(props) {
  const { onPress, title = 'Save', styles } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

