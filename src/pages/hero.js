import styles from './hero.css';
import React from 'react'
import { connect } from 'dva';

class Hero extends React.Component {
  
  
  // let { history } = props;
  // history.listen(({ pathname, query }) => {
  //   console.log(pathname);
  // });
  render(){
    return (
      <div className={styles.normal}>
        <h1>Page hero</h1>
        <h2 className={styles.test}>This is {JSON.stringify(this.props.hero)}</h2>
        
      </div>
    );
  }
  
}

export default connect(({ hero }) => ({ hero }))(Hero);
