import styles from './summoner.css';
import { connect } from 'dva';
import IconFont from '../components/icon'
function Summoner(props) {
  return (
    <div className={styles.normal}>
      <h1>Page summoner</h1>
      <h2>This is {props.summoner}</h2>
      <IconFont
        type="icon-shuzi6"
        style={{
          paddingLeft: 12,
          marginLeft: 7,
          fontSize: 22,
          color: 'red',
          verticalAlign: 'baseline',
          cursor: 'pointer',
        }}
      />
      <IconFont
        type="icon-shuzi3"
        style={{
          paddingLeft: 12,
          marginLeft: 7,
          fontSize: 22,
          color: 'red',
          verticalAlign: 'baseline',
          cursor: 'pointer',
        }}
      />
    </div>
  );
}

export default connect(({ summoner }) => ({ summoner }))(Summoner);
