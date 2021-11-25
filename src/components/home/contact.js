import React from "react";

import { Form, Input, Button, Checkbox } from 'antd';

function AppContact() {
    return(
        <div className="block contactBlock">
            <div className="container-fluid">
            <div className="titleHolder">
                <h2>Get in Touch</h2>
                <p>Dolore nam rerum obcaecati fugit odio nobis Molestiae rerum</p>
                </div>  
                <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      
    >
      <Form.Item
        name="fullname"
        rules={[{ required: true, message: 'Please input your fullname!' }]}
      >
        <Input placeholder="fullname" />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input
          type="email"
          placeholder="email Address"
        />
      </Form.Item>
      <Form.Item
        name="subject"
      >
        <Input placeholder="subject" />
      </Form.Item>
      <Form.Item
        name="Telephone"
      >
        <Input placeholder="Telephone" />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
    </Form>  

            </div>

        </div>
    );
}

export default AppContact;