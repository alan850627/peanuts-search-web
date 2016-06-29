<template>
  <button :class="buttonClass" :disabled="disabled">
    <slot>
      Button
    </slot>
  </button>
</template>

<script>
  const THEMES = {
    neutral: true,
    brand: true,
    destructive: true,
    inverse: true,
  }

  export default {
    props: {
      theme: {
        type: String,
        default: 'neutral',
        validator: (value) => THEMES[value],
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      // TODO: Stateful Buttons
      // TODO: Icon Buttons
    },

    computed: {
      buttonClass () {
        return `slds-button slds-button--${this.theme}`
      },
    },
  }
</script>
