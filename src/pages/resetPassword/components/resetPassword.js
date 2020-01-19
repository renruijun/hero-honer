import styles from './resetPassword.less'
import React, { Component } from 'react'
import { connect } from 'dva'
import withRouter from 'umi/withRouter'
import { Modal,Dropdown,Menu,message} from 'antd'
import IconFont from '@components/icon'
import ResetForm from './form'

class ResetPassword extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
    }
  }

  menu = (
    <Menu onClick={(k)=>{
      this.handleMenuClick(k)
    }}>
      <Menu.Item key="resetPassword">
        修改密码
      </Menu.Item>
      <Menu.Item key="logout">
        退出登录
      </Menu.Item>
    </Menu>
  );


  handleMenuClick = e => {
    switch(e.key){
      case 'resetPassword':
        this.setState({
          showModal: true
        });
        break
      case 'logout':
        message.info('功能尚未开放')
        break;
      default:
        break;
    }
    
  };


  closeModel = () => {
    this.setState({
      showModal: false
    });
  };

  cancleHandler = () => {
    this.setState({
      showModal: false
    });
  };
 
  render() {
    const { showModal} = this.state;
    return (
      <div className={styles.normal}>
        <div className={styles.header}>
          <div className={styles.others}></div>
          <div className={styles.userBox}>
          <Dropdown overlay={this.menu} placement="bottomLeft">
            <div>
              {/* <Icon type="user" theme="filled" /> */}
              <IconFont type="icon-supplier"></IconFont>
            </div>
          </Dropdown>
            
          </div>
        </div>

        <Modal
          title="修改密码"
          visible={showModal}
          onOk={this.handleOk}
          onCancel={this.closeModel}
          footer={null}
          maskClosable={false}
          destroyOnClose
          className={styles.z_w_486}
        >
          <ResetForm
            closeModel={this.closeModel}
            cancleHandler={this.cancleHandler}
          />
        </Modal>
      </div>
    )
  }
}

let withRouterMenuSide = withRouter(ResetPassword)
export default connect()(withRouterMenuSide)
