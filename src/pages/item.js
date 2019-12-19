import styles from './item.css';
import { connect } from 'dva';
import {Button,Input ,message} from "antd"
function Item(props) {
  const handleTest = (color)=>{
    
  }
  return (
    <div className={styles.normal}>
      <h1>Page item</h1>
      <h2 className={styles.test}>This is {props.item}</h2>
      
      <Button type="primary"  >primary</Button>

      <Input placeholder="input somthing..."></Input>
      <a href>链接</a>


    </div>
  );
}

export default connect(({ item }) => ({ item }))(Item);
