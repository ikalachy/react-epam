import modalReducer from './modalReducer'
import { showModal, hideModal } from '../actions/actions'

import expect from 'expect'


describe('movies modal reducer', () => {

  it('should return the initial state', () => {
    expect(modalReducer(undefined, {})).toEqual(initialStateExpected);
  })

  it('should handle SHOW_MODAL', () => {
    console.log(showModal('123'))
    expect(modalReducer({}, showModal('123'))).toEqual(showModalExpected);
  })

  it('should handle HIDE_MODAL', () => {
    console.log(hideModal('123'))
    expect(modalReducer({}, hideModal('123'))).toEqual(initialStateExpected);
  })

})

const initialStateExpected = {
  modalType: null,
  modalProps: {
    open: false,
    context: ''
  }
}


const showModalExpected = {
  modalProps: {
    open: true,
    context: '123'
  }
}

