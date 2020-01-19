import styles from './Login.less'
import React, { Component } from 'react'
import { connect } from 'dva'
import withRouter from 'umi/withRouter'
import { Input,Alert } from 'antd'
import IconFont from '@components/icon'
// console.log(process.UMI_ENV)
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      password:'',
      isNameUp:false,
      isPwdUp:false,
      isNameBlur:true,
      isPwdBlur:true,
      isShowPwd:false,
      hasError:false,
      errMsg:'账号或密码错误'
    }
  }
  handleFocus = (upType,blurType,e)=>{
    this.setState({
      [upType]:true,
      [blurType]:false
    })
  }
  handleBlur = (upType,blurType,e)=>{
    let {name,password}  = this.state
    if(upType === 'isNameUp' && !name){
      this.setState({
        isNameUp:false
      })
    }else if(upType === 'isPwdUp' && !password){
      this.setState({
        isPwdUp:false
      })
    }
    this.setState({
      [blurType]:true
    })
  }

  handleChange = (type,e)=>{
    let {value} = e.target
    value = value.trim()
    this.setState({
      [type]:value,
      hasError:false
    })
    
  }


  handleTogglePwd = ()=>{
    this.setState({
      isShowPwd:!this.state.isShowPwd
    })
  }


  handleSubmit = ()=>{
    let {name,password} =this.state
    if(!name || !password){return}
    console.log('表单信息：',name,password)
    this.setState({
      hasError:true
    })
  }
  render() {
    let {isNameUp,isPwdUp,name,password,isShowPwd,isNameBlur,isPwdBlur,hasError,errMsg} = this.state
    return (
      <div className={styles.normal}>
        <div className={styles.left}></div>
        <div className={styles.right}>
          <div style={{width:'100%',height:'100%'}}>
            <div className={styles.rightBox}>
              <div className={styles.rightWrap}>
                <div className={styles.rightBottom}>
                  <div className={styles.rightContent}>
                    <div className={styles.webName}>
                      账户登录
                    </div>
                    <div className={styles.title}>X-Man 智能营销平台</div>
                    <div className={styles.error}>
                      <Alert message={errMsg} type="error" showIcon className={styles._Alert} style={{display:hasError?'block':'none'}}/>
                    </div>
                    
                    <div className={styles.inputGroup}>
                      <div className={styles.inputItem} style={{marginTop:6}} >
                        <div className={isNameUp?isNameBlur?styles.inputItemLabelGray:styles.inputItemLabelFocus:styles.inputItemLabel}
                          >账号</div>
                        <input className={isNameUp? isNameBlur?styles.formInp:`${styles.formInp} ${styles.focus}`:styles.formInp} 
                          onFocus={()=>{
                            this.handleFocus('isNameUp','isNameBlur')
                          }}
                          onBlur={()=>{
                            this.handleBlur('isNameUp','isNameBlur')
                          }}
                          value={name}
                          onChange={(e)=>{
                            this.handleChange('name',e)
                          }}
                        />
                      </div>

                      <div className={styles.inputItem} style={{marginTop:17}}>
                        <div className={isPwdUp? isPwdBlur?styles.inputItemLabelGray: styles.inputItemLabelFocus:styles.inputItemLabel} >密码</div>
                        <div className={styles.wrapInput}>
                          <input 
                            type={isShowPwd?'text':'password'} 
                            className={isPwdUp? isPwdBlur?styles.formInp:`${styles.formInp} ${styles.focus}`:styles.formInp}
                            onFocus={()=>{
                              this.handleFocus('isPwdUp','isPwdBlur')
                            }}
                            onBlur={()=>{
                              this.handleBlur('isPwdUp','isPwdBlur')
                            }}
                            value={password}
                            onChange={(e)=>{
                              this.handleChange('password',e)
                            }}
                          />
                          <IconFont
                            type={isShowPwd?'icon-xmanchakanmima':'icon-xmanbukanmima'}
                            className={styles.icon}
                            onClick={()=>{this.handleTogglePwd()}}
                          />
                        </div>
                      </div>
                    </div>
                    <div className={name && password? styles.submitBtn: `${styles.submitBtn} ${styles.disabled}`} onClick={this.handleSubmit}>登录</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}

let withRouterMenuSide = withRouter(Login)
export default connect()(withRouterMenuSide)
