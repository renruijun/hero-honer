import styles from './index.less';
import React from 'react'
import { connect } from 'dva';
import { Row, Col, Card, Radio } from 'antd'
const RadioGroup = Radio.Group;
const heroType = [
{ key: 0, value: '全部' },
{ key: 1, value: '战士' },
{ key: 2, value: '法师' },
{ key: 3, value: '坦克' },
{ key: 4, value: '刺客' },
{ key: 5, value: '射手' },
{ key: 6, value: '辅助' },
];

class Index extends React.Component {
  componentDidMount(){
    this.handleQuery()
  }
  handleQuery = ()=>{
    this.props.dispatch({
      type: 'heroModel/getList'
    });
  }

  handleSelectChange = (e) => {
    this.props.dispatch({
      type: 'heroModel/updateState',
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
            { heroType.map( ( k ) => { 
            return <Radio key={k.key} value={k.key}>{ k.value }</Radio>
             } ) }
          </RadioGroup>
        </Card>
        <Row>
          {list.filter((j)=>{
            return filter === 0 || j.hero_type === filter
          }).map(item => (
              <Col key={item.ename} span={2} className={styles.heroitem}>
                <img
                  alt=''
                  src={`https://game.gtimg.cn/images/yxzj/img201606/heroimg/${item.ename}/${item.ename}.jpg`}
                />
                <p>{item.cname}</p>
              </Col>
          ))}
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let { list,filter } = state.heroModel
  return {
    list,
    filter
  }
}

export default connect(mapStateToProps)(Index);
