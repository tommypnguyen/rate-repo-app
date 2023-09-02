import { View, Pressable, StyleSheet } from "react-native";
import { useNavigate } from 'react-router-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import useSignIn from "../../hooks/useSignIn";
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
    backgroundColor: 'white',
    flexDirection: 'column'
  }
})

const initialValues = {
  username: '',
  password: '',
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(4, 'Username must have length of 4 or greater')
    .required('Username is required'),
  password: yup
    .string()
    .min(4, 'Password must have length of 4 or greater')
    .required('Password is required')
})

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
  const [ signIn ] = useSignIn()
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signIn({ username, password })
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  )
};

export default SignIn;