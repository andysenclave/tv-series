import {DEMO_FORM_SUBMIT, DEMO_FORM_LOAD} from '../constants/actionTypes';

export function onSubmit(formData) {
  return {
    type: DEMO_FORM_SUBMIT,
    data: formData
  };
}

export function load(formData) {
  return {
    type: DEMO_FORM_LOAD,
    data: formData
  };
}
