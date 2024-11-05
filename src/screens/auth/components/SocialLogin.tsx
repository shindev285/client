import { Button } from "antd";
import React from "react";

const SocialLogin = () => {
  return (
    <>
      <Button
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
