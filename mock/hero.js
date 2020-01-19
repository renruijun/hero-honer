import herolist from './herolist.json'
import equipmentlist from './equipment.json'
import skilllist from './skill.json'

export default {
    'GET /api/herolist.json': herolist,
    'GET /api/item.json': equipmentlist,
    'GET /api/summoner.json': skilllist,
}