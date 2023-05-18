import { useContext, useState } from "react";
import { View } from "react-native";

import Button from "../../../components/Button";
import InputField from "../../../components/InputField";
import Typography from "../../../components/Typography";

import { UserContext } from "../../../context/UserContext";

import { isValidEmail } from "../../../utils/validators";

import styles from "./Login.module";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "abdulfatahi@gmail.com",
    password: "",
  });
  const { email, password } = formData;
  const [submitted, setSubmitted] = useState(false);

  const { setName, setEmail, name, setIsLoggedIn } = useContext(UserContext);
  const handleTextChange = (filedName, fieldValue) => {
    setFormData({ ...formData, [filedName]: fieldValue });
  };

  const handleSubmit = () => {
    setSubmitted(true);
    if (isValidEmail(email) && password) {
      const name = email.split("@")[0]?.toUpperCase();
      setName(name);
      setIsLoggedIn(true);
      setEmail(email);
    }
  };

  return (
    <View style={styles.container}>
      <Typography type="h5">Login</Typography>
      <View id="email-input-group">
        <InputField
          name="email"
          value={email}
          onChangeText={handleTextChange}
          placeholder="Enter Your Email"
          autoCapitalize="none"
          keyboardType="email-address"
        />
        {submitted && !email && (
          <Typography style={styles.error}>Email is required</Typography>
        )}
        {submitted && email && !isValidEmail(email) && (
          <Typography style={styles.error}>Invalid email address</Typography>
        )}
      </View>
      <View id="password-input-group">
        <InputField
          name="password"
          value={password}
          onChangeText={handleTextChange}
          placeholder="Enter Your Password"
          secureTextEntry
        />
        {submitted && !password && (
          <Typography style={styles.error}>Password is required</Typography>
        )}
      </View>
      <Button title="Login" onPress={handleSubmit} />
    </View>
  );
};

export { Login };
