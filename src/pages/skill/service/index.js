import request from '@utils/request'

const API = {

    // 获取英雄list
    getList: ()=>{
        return request('/api/summoner.json', {
            method: 'GET'
        })
    },
}
export default API