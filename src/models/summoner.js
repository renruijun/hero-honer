export default {
  namespace: 'summoner', // 默认与文件名相同
  state: 'summoner',
  subscriptions: {
    setup({ dispatch, history }) {},
  },
  reducers: {
    update(state) {
      return `${state}_summoner`;
    },
  },
  effects: {
    *fetch({ type, payload }, { put, call, select }) {},
  },
};
