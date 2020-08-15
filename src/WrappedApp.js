import withAuthContext from "./firebase/auth/withAuthContext";
import App from "./App";

export default function WrappedApp(params) {
    return withAuthContext(App);
}