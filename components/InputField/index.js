import { TextInput, View } from "react-native";

import styles from "./InputField.module";

const InputField = ({
  name,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  ...props
}) => {
  const handleTextChange = (text) => {
    onChangeText(name, text);
  };
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={handleTextChange}
        placeholder={placeholder}
        {...props}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default InputField;
