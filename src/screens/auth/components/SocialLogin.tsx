import { Button } from "antd";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../../../firebase/firebaseConfig";

const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
provider.setCustomParameters({
  login_hint: "vhcity285@example.com",
});
const SocialLogin = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const handleLoginWithGoogle = async () => {
    setIsLoading(true);
    try {
      
      const result = await signInWithPopup(auth, provider);
      if (result) {
        const user = result.user;
        if(user){
          const data = {
            name : user.displayName,
            email : user.email,
          }
        }
      } else {
        console.log("login with google fail");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <>
      <Button
        loading={isLoading}
        onClick={handleLoginWithGoogle}
        size="large"
        style={{ width: "100%" }}
        icon={
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/fluency/48/google-logo.png"
            alt="google-logo"
          />
        }
      >
        Login with Google
      </Button>
    </>
  );
};

export default SocialLogin;
