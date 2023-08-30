import { View, Pressable, StyleSheet } from "react-native";
import { Formik } from 'formik';

import FormikTextInput from "../common/FormikTextInput";
import Text from "../common/Text";
import theme from "../../theme";

const styles = StyleSheet.create({
  formButton: {
    padding: 20,
    margin: 5,
    backgroundColor: theme.colors.primary,
    fontWeight: theme.fontWeights.bold,
    borderRadius: 15/2,
    textAlign: 'center',
  },
  container: {
    backgroundColor: 'white'
  }
})

const initialValues = {
  username: '',
  password: '',
}

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput 
        name="username" placeholder="Username" fontWeight="light"
      />
      <FormikTextInput 
        name="password"
        placeholder="Password"
        secureTextEntry={true}
        fontWeight="light"
      />
      <Pressable style={styles.formButton} onPress={onSubmit}>
        <Text color="white">Sign in</Text>
      </Pressable>
    </View>
  )
}

const SignIn = () => {
  return (
    <Formik initialValues={initialValues} onSubmit={(values) => console.log(values)}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  )
};

export default SignIn;