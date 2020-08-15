import { useMemo, useState } from "react";

export default function useAuthState() {
    const [auth, setAuth] = useState(null);
    const authState = useMemo(() => ({auth, setAuth}), [auth, setAuth]); 

    return authState;
}