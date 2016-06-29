<template>
  <form :class="formClass">
    <slot>
      Button
    </slot>
  </form>
</template>

<script>
  const LAYOUTS = {
    horizontal: true,
    stacked: true,
    inline: true,
    compound: true,
  }

  export default {
    props: {
      layout: {
        type: String,
        default: 'stacked',
        validator: (value) => LAYOUTS[value],
      },
    },

    computed: {
      formClass () {
        return `slds-form--${this.layout}`
      },
    },
  }
</script>
