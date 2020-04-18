
import {
  addStudentObj,
  getStudentInfo,
  addStudentHWObj,
  editStudentHWObj,
  addStudentScoreList,
  addStudentLeaveList,
  addStudentComplaintList,
  editStudenttHworkList
} from "../../service/user/user";
import {
  ADDSTUDENT_ACTION,
  ADDSTUDENTHEIGHT_ACTION,
  GETSTUDENTINFO_ACTION,
  ADDSTUDENTHWORK_ACTION,
  EDITSTUDENTHEIGHT_ACTION,
  ADDSTUDENTSCORE_ACTION,
  ADDSTUDENTLEAVE_ACTION,
  ADDSTUDENTCOMPLAINT_ACTION
} from "./action-types";

export default {
  [ADDSTUDENT_ACTION]({ dispatch, commit }, payload) {
    return new Promise(async (resolve, reject) => {
      commit(AUTH_REQUEST_MUTATION);
      try {
        const result = await addStudentObj(payload);
        resolve(result);
      } catch (error) {
        commit(AUTH_ERROR_MUTATION);
        reject(error);
      }
    });
  },
  [ADDSTUDENTHEIGHT_ACTION]({ dispatch, commit }, payload) {
    return new Promise(async (resolve, reject) => {
      commit(AUTH_REQUEST_MUTATION);
      try {
        console.log(payload);
        const result = await editStudenttHworkList(payload);
        resolve(result);
      } catch (error) {
        commit(AUTH_ERROR_MUTATION);
        reject(error);
      }
    });
  },
  [ADDSTUDENTHWORK_ACTION]({ dispatch, commit }, payload) {
    return new Promise(async (resolve, reject) => {
      commit(AUTH_REQUEST_MUTATION);
      try {
        console.log(payload);
        const result = await addStudenttHworktList(payload);
        resolve(result);
      } catch (error) {
        commit(AUTH_ERROR_MUTATION);
        reject(error);
      }
    });
  },
  [ADDSTUDENTCOMPLAINT_ACTION]({ dispatch, commit }, payload) {
    return new Promise(async (resolve, reject) => {
      commit(AUTH_REQUEST_MUTATION);
      try {
        console.log(payload);
        const result = await editStudentComplaintList(payload);
        resolve(result);
      } catch (error) {
        commit(AUTH_ERROR_MUTATION);
        reject(error);
      }
    });
  },
  [ADDSTUDENTLEAVE_ACTION]({ dispatch, commit }, payload) {
    return new Promise(async (resolve, reject) => {
      commit(AUTH_REQUEST_MUTATION);
      try {
        console.log(payload);
        const result = await addStudentLeaveList(payload);
        resolve(result);
      } catch (error) {
        commit(AUTH_ERROR_MUTATION);
        reject(error);
      }
    });
  },
  [ADDSTUDENTSCORE_ACTION]({ dispatch, commit }, payload) {
    return new Promise(async (resolve, reject) => {
      commit(AUTH_REQUEST_MUTATION);
      try {
        console.log(payload);
        const result = await addStudentScoreList(payload);
        resolve(result);
      } catch (error) {
        commit(AUTH_ERROR_MUTATION);
        reject(error);
      }
    });
  },
  [EDITSTUDENTHEIGHT_ACTION]({ dispatch, commit }, payload) {
    return new Promise(async (resolve, reject) => {
      commit(AUTH_REQUEST_MUTATION);
      try {
        const result = await editStudentHWObj(payload);
        resolve(result);
      } catch (error) {
        commit(AUTH_ERROR_MUTATION);
        reject(error);
      }
    });
  },
  [GETSTUDENTINFO_ACTION]({ dispatch, commit }, payload) {
    return new Promise(async (resolve, reject) => {
      commit(AUTH_REQUEST_MUTATION);
      try {
        const result = await getStudentInfo(payload);
        resolve(result);
      } catch (error) {
        commit(AUTH_ERROR_MUTATION);
        reject(error);
      }
    });
  }
};
