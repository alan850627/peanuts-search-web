import Button from './Button'
import Form from './Form'
import FormElement from './FormElement'
import FormInput from './FormInput'
import Icon from './Icon'
import Modal from './Modal'

function install (_Vue) {
  _Vue.component('slds-button', Button)
  _Vue.component('slds-form', Form)
  _Vue.component('slds-form-element', FormElement)
  _Vue.component('slds-form-input', FormInput)
  _Vue.component('slds-icon', Icon)
  _Vue.component('slds-modal', Modal)
}

export default {
  install,
}
