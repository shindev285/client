import { Button, Card, Checkbox, Form, Input, Space, Typography } from "antd";
import SocialLogin from "./components/SocialLogin";
import { Link } from "react-router-dom";
import { useState } from "react";
import avatar from "../../assets/images/avatar.png";
const { Title, Paragraph, Text } = Typography;

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRemember, setIsRemember] = useState(false);
  const [form] = Form.useForm();
  const handleLogin = (values: { email: string; password: string }) => {
    console.log(values);
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
          <Title level={2}>Create an account</Title>
          <Paragraph type="secondary">Start your 30-day free trial.</Paragraph>
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
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your email" }]}
          >
            <Input placeholder="Enter your name" allowClear></Input>
          </Form.Item>
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
              placeholder="Create your password"
              maxLength={100}
              type="email"
            ></Input.Password>
          </Form.Item>
        </Form>

        <div className="mt-4 mb-3">
          <Button
            onClick={() => form.submit()}
            type="primary"
            style={{ width: "100%"}}
            size="large"
          >
            Get started
          </Button>
        </div>
        <SocialLogin />
        <div className="mt-4 text-center">
          <Space>
            <Text type="secondary">Already have an account?</Text>
            <Link to={"/"}>log-in</Link>
          </Space>
        </div>
      </Card>
    </>
  );
};

export default SignUp;
