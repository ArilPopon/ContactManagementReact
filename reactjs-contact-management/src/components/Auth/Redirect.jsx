import { Navigate } from "react-router";
import { useLocalStorage } from "react-use"

export default function Redirect() {
    const [token, _] = useLocalStorage("token", "");

    if (token) {
        return <Navigate to={"/dashboard/contacts"} replace />
    } else {
        return <Navigate to={"/login"} replace />

    }
}