import API from '../service'

export default {
    namespace:'skillModel',
    state: {
        list: []
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