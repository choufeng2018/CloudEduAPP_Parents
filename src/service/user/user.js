import { get, post, put } from '../http'
import { getCode, login, register, getRole, getUser, addStudent, getStudent, getMyStudent, getMyStudentHw, addStudentHw } from './url'

export const appLogin = params => post(login, params)

export const appRegister = params => post(register, params)

export const appLogout = () => post()

export const getAppCodeImage = () => get(getCode)

export const getRoleList = () => get(getRole)

export const getUserInfo = () => get(getUser)

export const getMyStudentList = () => get(getMyStudent)

export const addStudentObj = params => post(addStudent, params)

export const addStudentHWObj = params => post(addStudentHw, params)
export const editStudentHWObj = params => put(addStudentHw, params)
export const getStudentInfo = params => get(getStudent+'/'+params)

export const getStudentHwInfo = id => get('/api/dev-api/app/parents/hw/'+id)

export const getMyStudentHWList = () => get(getMyStudentHw)

export const getStudentScoreInfo = (id) => get('/api/dev-api/app/parents/score/'+id)
export const getMyStudentScoreList = () => get('/api/dev-api/app/parents/score/list')
export const addStudentScoreList = param => post('/api/dev-api/app/parents/score', param)
export const editStudentScoreList = param => put('/api/dev-api/app/parents/score', param)

export const getStudentMisInfo = (id) => get('/api/dev-api/app/parents/score/'+id)
export const getMyStudentMisList = () => get('/api/dev-api/app/parents/mistake/getMyStudentMistake')
export const addStudentMisList = param => post('/api/dev-api/app/parents/mistake/addStudentMistake', param)
export const editStudentMisList = param => post('/dev-api/app/parents/mistake/editStudentMistake', param)

export const getStudentLeaveInfo = (id) => get('/api/dev-api/app/parents/stLeave/getMyStudentLeaveById/'+id)
export const getMyStudentLeaveList = () => get('/api/dev-api/app/parents/stLeave/getMyStudentLeave')
export const addStudentLeaveList = param => post('/api/dev-api/app/parents/stLeave/addStudentLeave', param)
export const editStudentLeaveList = param => post('/api/dev-api/app/parents/stLeave/editStudentLeave', param)

export const getStudentComplaintInfo = (id) => get('/api/dev-api/app/parents/stLeave/getMyStudentLeaveById/'+id)
export const getMyStudentComplaintList = () => get('/api/dev-api/app/parents/complaint/list')
export const addStudentComplaintList = param => post('/api/dev-api/app/parents/complaint', param)
export const editStudentComplaintList = param => put('/api/dev-api/app/parents/complaint', param)

export const getStudentHworkInfo = (id) => get('/api/dev-api/app/parents/stLeave/getMyStudentLeaveById/'+id)
export const getMyStudentHworkList = () => get('/api/dev-api/app/parents/hwork/list')
export const addStudenttHworktList = param => post('/api/dev-api/app/parents/complaint', param)
export const editStudenttHworkList = param => put('/api/dev-api/app/parents/complaint', param)
 
export const getSignedUrl = param => post('/api/dev-api/app/common/upload', param)