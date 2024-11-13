import {
  Button,
  Card,
  Checkbox,
  Form,
  Input,
  message,
  Space,
  Typography,
} from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import SocialLogin from "./components/SocialLogin";
import avatar from "../../assets/images/avatar.png";
import handleAPI from "../../apis/handleAPI";
import { useDispatch } from "react-redux";
import { addAuth } from "../../redux/reducers/authReducer";
import { localDataNames } from "../../constants/appInfor";

const { Title, Paragraph, Text } = Typography;

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRemember, setIsRemember] = useState(false);
  const [form] = Form.useForm();

  const dispatch = useDispatch();

  const handleLogin = async (values: { email: string; password: string }) => {
    const api = `/auth/login`;
    setIsLoading(true);
    try {
      const res: any = await handleAPI(api, values, "post");

      message.success(res.message);
      res.data && dispatch(addAuth(res.data));

      if (isRemember) {
        localStorage.setItem(localDataNames.authData, JSON.stringify(res.data));
      }
    } catch (error: any) {
      message.error(error.message);
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Card style={{ width: "70%" }}>
        <div className="text-center">
          <img
            src={avatar}
            alt=""
            style={{ width: 100, height: 100 }}
            className="mb-3"
          />
          <Title
            level={2}
            style={{
              color: "#F04438",
            }}
          >
            Log in to your account
          </Title>
          <Paragraph type="secondary">
            Welcome back! Please enter your details.
          </Paragraph>
        </div>
        {/* form  */}
        <Form
          layout="vertical"
          form={form}
          onFinish={handleLogin}
          className="login-form"
          disabled={isLoading}
          size="large"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email" }]}
          >
            <Input
              placeholder="Enter your email"
              allowClear
              maxLength={100}
              type="email"
            ></Input>
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your Password" }]}
          >
            <Input.Password
              placeholder="Enter your password"
              maxLength={100}
              type="email"
            ></Input.Password>
          </Form.Item>
        </Form>
        <div className="row">
          <div className="col">
            <Checkbox
              checked={isRemember}
              onChange={(val) => setIsRemember(val.target.checked)}
            >
              Remember me
            </Checkbox>
          </div>
          <div className="col text-end">
            <Link to={"/forgot-password"}>Forgot password?</Link>
          </div>
        </div>
        <div className="mt-4 mb-3">
          <Button
            loading={isLoading}
            onClick={() => form.submit()}
            type="primary"
            style={{ width: "100%" }}
            size="large"
          >
            login
          </Button>
        </div>
        <SocialLogin />
        <div className="mt-4 text-center">
          <Space>
            <Text type="secondary">Don't have an account?</Text>
            <Link to={"/sign-up"}>Sign up</Link>
          </Space>
        </div>
      </Card>
    </>
  );
};

export default Login;
