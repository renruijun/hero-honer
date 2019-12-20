import request from '../utils/request'
export default {
  namespace: 'hero', // 默认与文件名相同
  state: { heros: [] },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/hero') {
          dispatch({
            type: 'fetchHero',
          });
        }
      });
    },
  },
  reducers: {
    update(state) {
      return `${state}_hero`;
    },
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
  effects: {
    *fetchHero({ type, payload }, { put, call, select }) {
      
      const data = yield request('/api/test.json')
    
      yield put({
        type: 'save',
        payload: {
          heros: data || [],
        },
      });
    },
  },
};
