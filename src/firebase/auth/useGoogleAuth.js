import { projectAuth, GoogleAuthProvider } from "../config";
import useAuth from "./useAuth";

export default function useGoogleAuth() {
    const { setAuth } = useAuth();

    async function authenticate() {
        let provider = new GoogleAuthProvider();
        try {
            let auth = await projectAuth.signInWithPopup(provider);
            setAuth(auth.user)
        } catch (error) {
            alert(error.message);
        }
    }

    async function logout() {
        await projectAuth.signOut()
    }

    return { authenticate, logout }
}