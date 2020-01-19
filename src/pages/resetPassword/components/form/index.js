import React, { Component } from 'react';
import { 
  Form, 
  Input, 
  Select, 
  Popover, 
  Button
 } from 'antd';
import './index.less';

class RegistrationForm extends Component {
  
  // 取消
  cancleHandler = () => {
    this.props.cancleHandler();
  };
  // 提交
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('表单信息：',values)
      }
    });
  };



  checkNewPassword = (rule, value, callback) => {
    let reg = /^[a-zA-Z]([a-zA-Z0-9]{5,19})$/;
    if(!value){
      callback('请输入新密码')
    }
    if (reg.test(value)) {
      callback()
    }else{
      callback('请输入符合规定的新密码')
    }
    callback();
  };

  checkNewPasswordConfirm = (rule, value, callback) => {
    let {  getFieldValue } = this.props.form;
    let newPassword = getFieldValue('newPassword')
    if(!value){
      callback('请再次输入新密码')
    }
    if (value !== newPassword) {
      callback('确认密码与新密码不一致')
    }
    callback();
  };

  

  render() {
    const { getFieldDecorator, getFieldValue, setFieldsValue } = this.props.form;

    const content = (
      <ul style={{fontSize:12,paddingLeft:5 ,margin:0,color:'#616161'}}>
        <li>必须是字母开头</li>
        <li>只能包含数字字母</li>
        <li>长度6-20位</li>
      </ul>
    );

    return (
      <div className="formWrapper">
        <Form
          autoComplete="off"
          labelAlign="left"
          hideRequiredMark
          onSubmit={this.handleSubmit}
        >
          <div >
            <Form.Item colon={false} label="当前密码" >
              {getFieldDecorator('oldPassword', {
                rules: [{ required: true, message: '请输入当前密码' }],
              })(<Input  type="password"  placeholder="请输入当前密码" />)}
            </Form.Item>
          </div>
          <div >
            <Popover placement="right" overlayClassName="popoverCustom" title={null} autoAdjustOverflow content={content} trigger="hover">
              <Form.Item  colon={false} label="新密码" >
                {getFieldDecorator('newPassword', {
                  rules: [{ validator: this.checkNewPassword }],
                })(<Input type="password"  placeholder="请输入新密码" />)}
              </Form.Item>
            </Popover>
          </div>
          <div >
            <Form.Item  colon={false}  label="确认新密码" >
              {getFieldDecorator('newPasswordConfirm', {
                rules: [{ validator: this.checkNewPasswordConfirm }],
              })(<Input  type="password"  placeholder="请再次输入新密码" />)}
            </Form.Item>
          </div>

          <div className="z_form_footer">
            
            <Button htmlType="submit" type="primary">
              确定
            </Button>
            <Button onClick={this.cancleHandler}  style={{marginRight:20}} >
              取消
            </Button>
          
          </div>
      </Form>
    
      </div>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);

export default WrappedRegistrationForm;
