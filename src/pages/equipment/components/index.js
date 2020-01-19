import styles from './index.less';
import React from 'react'
import { connect } from 'dva';
import { Row, Col, Radio, Card } from 'antd';

const RadioGroup = Radio.Group;
const itemType = [
  { key: 0, value: '全部' },
  { key: 1, value: '攻击' },
  { key: 2, value: '法术' },
  { key: 3, value: '防御' },
  { key: 4, value: '移动' },
  { key: 5, value: '打野' },
  { key: 7, value: '辅助' },
];
class Index extends React.Component {
  
  
  componentDidMount(){
    console.log(this.props)
    this.handleQuery()
  }

  handleQuery = ()=>{
    this.props.dispatch({
      type: 'equipmentModel/getList'
    });
  }

  // 筛选
  handleSelectChange = (e) => {
    this.props.dispatch({
      type: 'equipmentModel/updateState',
      payload: {
        filter: e.target.value
      }
    });
  }
  render(){
    const { list, filter } = this.props
    return (
      <div className={styles.normal}>
        <Card style={{marginBottom: 20, boxShadow: '0 10px 8px rgba(0, 0, 0, 0.15)'}}>
          <RadioGroup defaultValue={filter} onChange={this.handleSelectChange}>
            { itemType.map( ( k ) => { 
            return <Radio key={k.key} value={k.key}>{ k.value }</Radio>
             } ) }
          </RadioGroup>
        </Card>
        <Row>
          {list.filter((j)=>{
            return filter === 0 || j.item_type === filter
          }).map(item => (
              <Col key={item.item_id} span={2} className={styles.heroitem}>
                <img
                  alt=''
                  src={`http://game.gtimg.cn/images/yxzj/img201606/itemimg/${item.item_id}.jpg`}
                />
                <p>{item.item_name}</p>
              </Col>
          ))}
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let { list, filter } = state.equipmentModel
  return {
    list,
    filter
  }
}

export default connect(mapStateToProps)(Index);
