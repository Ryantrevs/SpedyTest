import { newClassified } from "../Actions";

import axios from 'axios'

export const classifiedApi = {
    getInitialState: () => axios.get('/Classified/getClassified'),
    newClassified: (obj) => axios.post('/Classified/insertClassified',obj)
}