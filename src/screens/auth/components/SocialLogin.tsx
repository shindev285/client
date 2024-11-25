import { Button, message } from "antd";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../../../firebase/firebaseConfig";
import handleAPI from "../../../apis/handleAPI";
import { addAuth } from "../../../redux/reducers/authReducer";

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
        console.log(user);
        if(user){
          const data = {
            name : user.displayName,
            email : user.email,
          }
          const api = `/auth/google-login`;
          try {
            const res: any = await handleAPI(api, data, "post");
              console.log('google-login',res);
              message.success(res.message);
              dispatch(addAuth(res.data));
          } catch (error: any) {
            console.log(error);
            message.error(error.message);            
          }finally{
            setIsLoading(false);
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
