import { View, Text } from "react-native";
import Splash3 from "./components/Splash3";
import Splash4 from "./components/Splash4";
import Onboarding6 from "./components/Onboarding6";
import Onboarding7 from "./components/Onboarding7";
import Onboarding8 from "./components/Onboarding8";
import Onboarding10 from "./components/Onboarding10";
import HeaderButton from "./components/HeaderButton";
import Register from "./components/Register";
import TermsOfService from "./components/TermsOfService";
import Otp from "./components/Otp";
import SignIn from "./components/SignIn";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
import ForgotPasswordOtp from "./components/forgotPassword/ForgotPasswordOtp";
import ResetPassword from "./components/forgotPassword/ResetPassword";
import Notification from "./components/Notification";
import Account from "./components/Account";
import { Divider } from "react-native-elements";
import BottomTabs from "./components/BottomTab";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Account />
    </View>
  );
}
