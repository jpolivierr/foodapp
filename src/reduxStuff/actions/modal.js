import * as actions from './actionType'

export const modalon = (formType)=>{
  return{
      type: actions.MODALON,
      payload: {
          modaltype: formType
      }
  }
}
export const modaloff = ()=>{
  return{
      type: actions.MODALOFF,
      payload: {
          modaltype: ''
      }
  }
}