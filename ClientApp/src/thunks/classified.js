import {classifiedApi} from '../Api/classifiedApi'
import {getAll,newClassified} from '../Actions/index'

export const thunksClassified = {
    getClassifieds: () => dispatch =>{
        classifiedApi.getInitialState().then(classifieds => dispatch(getAll(classifieds.data)))
    },
    newClassified: (payload) => dispatch =>{
        classifiedApi.newClassified(payload).then(classified => dispatch(newClassified(classified.data)))
    }
}
