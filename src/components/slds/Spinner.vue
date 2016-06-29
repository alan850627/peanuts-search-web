<template>
  <div class="slds-spinner_container">
    <div :class="spinnerClass" aria-hidden="false" role="alert">
      <div class="slds-spinner__dot-a"></div>
      <div class="slds-spinner__dot-b"></div>
    </div>
  </div>
</template>

<script>
  const THEMES = {
    neutral: true,
    brand: true,
    inverse: true
  }

  const SIZES = {
    small: true,
    medium: true,
    large: true
  }

  export default {
    props: {
      size: {
        type: String,
        default: 'small',
        validator: (value) => SIZES[value]
      },
      theme: {
        type: String,
        default: 'neutral',
        validator: (value) => THEMES[value]
      },
    },

    computed: {
      spinnerClass () {
        return `slds-spinner slds-spinner--${this.size} slds-spinner--${this.theme}`
      }
    }
  }
</script>
