import { createContext } from "react";

let AuthContext = createContext({
    auth: null,
    setAuth: _ => {} // No-op
})

export default AuthContext