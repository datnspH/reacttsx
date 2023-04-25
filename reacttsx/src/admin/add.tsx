import { useForm } from "react-hook-form";
import { Button, Form, Input, Space, Upload, Image, InputNumber } from 'antd';
import { IProduct } from "../api/Ip";
import { useNavigate } from "react-router-dom"
import { UploadOutlined } from '@ant-design/icons';

const AddProduct = (props: IProduct) => {
  const navigate = useNavigate()
  const onFinish = (values: IProduct) => {
    props.onAdd(values)
    navigate('/admin')
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  <Space direction="vertical" style={{ width: '100%' }} size="large">
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      listType="picture"
      maxCount={1}
    >
      <Button icon={<UploadOutlined />}>Upload (Max: 1)</Button>
    </Upload>
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      listType="picture"
      maxCount={3}
      multiple
    >
      <Button icon={<UploadOutlined />}>Upload (Max: 3)</Button>
    </Upload>
  </Space>
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
        label="price"
        name="price"
        rules={[{ required: true, message: 'Please input your price!' }]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        label="description"
        name="description"
        rules={[{ required: true, message: 'Please input your description!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="categoryId"
        name="categoryId"
        rules={[{ required: true, message: 'Please input your categoryId!' }]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        label="mage"
        name="image"
        rules={[{ required: true, message: 'Please input your categoryId!' }]}
      >
        <Space direction="vertical" style={{ width: '100%' }} size="large">
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture"
            maxCount={1}
          >
            <Button icon={<UploadOutlined />}>Upload (Max: 1)</Button>
          </Upload>
        </Space>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  </div>
  )
}
export default AddProduct