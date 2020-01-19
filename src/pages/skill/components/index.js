import styles from './index.less';
import React from 'react'
import { connect } from 'dva';
import { Row, Col } from 'antd'

class Index extends React.Component {
  
  
  componentDidMount(){
    console.log(this.props)
    this.handleQuery()
  }
  handleQuery = ()=>{
    this.props.dispatch({
      type: 'skillModel/getList'
    });
  }
  render(){
    const { list } = this.props
    return (
      <div className={styles.normal}>
        <Row>
          {list.map(item => (
              <Col key={item.summoner_id} span={2} className={styles.heroitem}>
                <img
                  alt=''
                  src={`http://game.gtimg.cn/images/yxzj/img201606/summoner/${item.summoner_id}.jpg`}
                />
                <p>{item.summoner_id}</p>
              </Col>
          ))}
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let { list } = state.skillModel
  return {
    list
  }
}

export default connect(mapStateToProps)(Index);
