<template>
  <span class="slds-badge">
    <slot>{{ label }}</slot>
  </span>
</template>

<script>
  export default {
    props: {
      label: {
        type: String,
        default: '',
      },
    },
  }
</script>
