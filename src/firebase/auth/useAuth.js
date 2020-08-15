import AuthContext from "./AuthContext";
import { useContext } from "react";

export default function useAuth() {
    const authContext = useContext(AuthContext)
    return authContext;
}
