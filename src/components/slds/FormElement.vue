<template>
  <div :class="{
    'slds-form-element': true,
    'is-required': required,
    'slds-has-error': !valid }">

    <label class="slds-form-element__label">
      <abbr v-if="required" class="slds-required" title="required">*</abbr>
      <slot name="label">{{ label }}</slot>
    </label>

    <div :class="{
      'slds-form-element__control': true,
      'slds-input-has-icon slds-input-has-icon--left': hasIconLeft && !hasIconRight,
      'slds-input-has-icon slds-input-has-icon--right': hasIconRight && !hasIconLeft,
      'slds-input-has-icon slds-input-has-icon--left-right': hasIconRight && hasIconLeft }">
      <slot name="icon-left"></slot>
      <slot></slot>
      <slot name="icon-right"></slot>
    </div>

    <div class="slds-form-element__help">This field is required</div>
  </div>
</template>

<script>
  export default {
    props: {
      label: {
        type: String,
        default: 'Field Label',
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      required: {
        type: Boolean,
        default: false,
      },
    },

    data () {
      return {
        valid: null,
        hasIconLeft: false,
        hasIconRight: false,
      }
    },

    computed: {
      buttonClass () {
        return `slds-button slds-button--${this.theme}`
      },
    },

    ready () {
      // this._$control = $(this.$els.control)
      //
      // if (this.type === 'textarea') {
      //   autosize(this.$els.control)
      // }

      this.hasIconLeft = this.$el.querySelector("[slot='icon-left']")
      this.hasIconRight = this.$el.querySelector("[slot='icon-right']")
      //
      // this._$control.on('focus', this.onFocus)
      // this._$control.on('blur', this.onBlur)
      //
      // if (this.autoFocus) {
      //   this.isFocused = true
      // }
    },
  }
</script>
