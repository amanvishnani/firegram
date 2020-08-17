import { useMemo, useState } from "react";
import { projectAuth } from "../config";

export default function useAuthState() {
    const [auth, setAuth] = useState(null);
    const authState = useMemo(() => ({auth, setAuth}), [auth, setAuth]); 
    projectAuth.onAuthStateChanged(user => {
        setAuth(user);
    })
    return authState;
}