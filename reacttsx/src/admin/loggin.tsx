import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useEffect, useState } from 'react'
import { Getalluser } from '../api/product';
import { useNavigate } from "react-router-dom"
import { IProduct } from '../api/Ip';
interface Ivalue {
  name: string,
  password: number
}
const Loggin = (props) => {
  const navigate = useNavigate()
  const [user, setuser] = useState([])


  const onFinish = (values: Ivalue) => {
    if (props.user.find((item) => item.name == values.name && item.password == values.password)) {
      navigate('/admin')
    }
    else {
      alert("tài khoản hoặc mật khẩu không đúng")
    }
  };
  // console.log((props.user.find((item) => item.name)));

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  // }
  // const usename = user.map((item)=>item.name)    
  // const usepass = user.map((item)=>item.password)    
  // console.log(usename,usepass ,name , Number(pass));
  // const onFormSwitch = ()=>{
  //        if(name == usename && pass== usepass){
  //       console.log("aaaaaa");

  //   } 
  //   console.log(user.name);

  // }
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div>
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
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
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
export default Loggin