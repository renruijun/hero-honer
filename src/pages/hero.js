import styles from './hero.css';
import React from 'react'
// import {Button } from "antd"
import { connect } from 'dva';

class Hero extends React.Component {
  
  
  componentDidMount(){
    // console.log(this.props)
  }
  // handleQuery = ()=>{
  //   this.props.dispatch({
  //     type: 'fetchHero',
  //   });
  // }
  render(){
    return (
      <div className={styles.normal}>
        <h1>Page hero</h1>
        <h2 className={styles.test}>This is {JSON.stringify(this.props.hero)}</h2>
        {/* <Button type='primary' onClick={this.handleQuery}>获取英雄</Button> */}
      </div>
    );
  }
  
}

export default connect(({ hero }) => ({ hero }))(Hero);
