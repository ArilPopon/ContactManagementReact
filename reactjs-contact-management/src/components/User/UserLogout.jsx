import { useEffectOnce, useLocalStorage } from "react-use"
import { userLogout } from "../../lib/api/UserApi";
import { alertError } from "../../lib/alert";
import { useNavigate } from "react-router";

export default function UserLogout() {
    const [token, setToken] = useLocalStorage("token", "");
    const navigate = useNavigate();

    async function handleLogout() {
        const response = await userLogout(token);
        const responseBody = await response.json();
        console.log(responseBody);

        if (response.status === 200) {
            setToken("");
            await navigate({
                pathname: "/login"
            })
        } else {
            await alertError(responseBody.errors)
        }
    }

    useEffectOnce(() => {
        handleLogout()
            .then(() => console.log("User Logged Out Successfully"))
    })
    return (
        <>
        </>
    )
}