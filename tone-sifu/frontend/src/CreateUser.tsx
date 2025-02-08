import { useAuth0 } from "@auth0/auth0-react"
import axios from 'axios'

export default function CreateUser() {

    const { user, isAuthenticated } = useAuth0();

    const handleCreateUser = async () => {
        console.log("CREATING USER")
        if (!isAuthenticated) { // Don't try to add user to database if not logged in
            return (<></>)
        }
        try {
            const response = await axios({
              method: "POST",
              url: `http://localhost:8080/users/${user.sub}`
            });
            return response.data;
          } catch (error) {
            console.error("Error creating user:", error);
          }
    };

    handleCreateUser()

    return (
        <></>
    );
};