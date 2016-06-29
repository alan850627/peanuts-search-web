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

      <textarea v-if="rows > 1" :rows="rows" :placeholder="placeholder" v-model="value" class="slds-textarea"></textarea>
      <input v-else :type="type" :placeholder="placeholder" v-model="value" class="slds-input"/>

      <slot name="icon-right"></slot>
    </div>

    <div class="slds-form-element__help">This field is required</div>
  </div>
</template>

<script>
  const TYPES = {
    text: true,
    search: true,
    email: true,
    url: true,
    tel: true,
    number: true,
  }

  export default {
    props: {
      label: {
        type: String,
        default: 'Field Label',
      },
      placeholder: {
        type: String,
        default: 'Enter a value...',
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      required: {
        type: Boolean,
        default: false,
      },
      rows: {
        type: Number,
        default: 1,
      },
      type: {
        type: String,
        default: 'text',
        validator: (value) => TYPES[value],
      },
      value: {
        type: [String, Number],
        default: '',
        twoWay: true,
      },
    },

    data () {
      return {
        valid: true,
        hasIconLeft: false,
        hasIconRight: false,
      }
    },

    computed: {
      isTextArea () {
        return this.rows > 1
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
