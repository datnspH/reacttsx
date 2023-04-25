import { useForm } from "react-hook-form";
import { Button, Form, Input, Space, Upload, Image } from 'antd';
import { IProduct } from "../api/Ip";
import { useNavigate } from "react-router-dom"
import { UploadOutlined } from '@ant-design/icons';
const Register = (props) => {
  const navigate = useNavigate()
  const onFinish = (values: any) => {
    props.onadduser(values)
    navigate('/login')
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (<div style={{ border: "5px" }}>
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="name"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="password"
        name="password"
        rules={[{ required: true, message: 'Please input your description!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  </div>
  )
}
export default Register