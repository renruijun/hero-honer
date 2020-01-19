import styles from './index.css';
import { Layout, Menu,Icon,Popover ,message} from 'antd';
import React from 'react'
import Link from 'umi/link';
import {ChromePicker} from 'react-color'

const { Header, Content, Footer } = Layout;
const menuData = [
  { route: 'hero', name: '英雄' },
  { route: 'equipment', name: '局内道具' },
  { route: 'skill', name: '召唤师技能' },
];
class BasicLayout extends React.Component {
  state = {
    color:"#ff9900"
  }
  handleChangeComplete = (color) => {
    this.setState({ color: color.hex });
    window.less.modifyVars(
      {
          '@primary-color': color.hex
      }
    ).then((res) => {
      message.success(`主题颜色更换成功`);
    })
    .catch(error => {
      console.log(error)
        message.error(`主题颜色更换失败`);
    });
  };

  render(){
    const { location: { pathname }, children } = this.props
    
    const content = (
      <ChromePicker
        color={ this.state.color }
        onChangeComplete={ this.handleChangeComplete }
      />
    );
    if (pathname === '/login' || pathname === '/resetPassword') {
      return <div>{ children }</div>
    }
    return (
      <Layout>
        <Header>
          <div className={styles.logo}>峡谷资料库</div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[pathname]}
            style={{ lineHeight: '64px' }}
          >
            {menuData.map(k => {
              return (
                <Menu.Item key={`/${k.route}`}>
                  <Link to={k.route}>{k.name}</Link>
                </Menu.Item>
              );
            })}
          </Menu>
          <div className={styles.color_icon}>
            <Popover placement="bottomRight" content={content} title={null}>
              <Icon type="bg-colors" />
            </Popover>
          </div>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>{children}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>王者峡谷资料库 / 1301914095@qq.com</Footer>
      </Layout>
    );
  }
}

export default BasicLayout;
