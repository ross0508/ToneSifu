import { useAuth0 } from "@auth0/auth0-react";


export default function LoginButton({ type }) {
    const { loginWithRedirect } = useAuth0();
    return (
        <button className={type} onClick={() => loginWithRedirect({
            authorizationParams: {
                screen_hint: "signup",
                redirect_uri: window.location.origin + "/training"
            }}
        )}>Sign Up</button>
  )
}
