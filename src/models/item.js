export default {
  namespace: 'item', // 默认与文件名相同
  state: 'item',
  subscriptions: {
    setup({ dispatch, history }) {},
  },
  reducers: {
    update(state) {
      return `${state}_item`;
    },
  },
  effects: {
    *fetch({ type, payload }, { put, call, select }) {},
  },
};
