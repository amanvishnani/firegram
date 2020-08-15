import AuthContext from "./AuthContext";
import useAuthState from "./useAuthState";
import React from "react";

export default function WithAuthContext(WrappedComponent) {
    let authState = useAuthState();
    return (
        <AuthContext.Provider value={authState}>
            <WrappedComponent/>
        </AuthContext.Provider>
    )
}