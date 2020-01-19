import API from '../service'

export default {
    namespace:'heroModel',
    state: {
        list: [],
        filter: 0
    },
    reducers: {
        updateState(state, { payload }){
            return { ...state, ...payload }
        }
    },
    effects: {
        *getList({ payload }, { call, put, select }){
            const data = yield call(API.getList)
            yield put({
                type: 'updateState',
                payload: {
                    list: data
                }
            })
        }
    }
}