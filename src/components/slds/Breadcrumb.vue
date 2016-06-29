<template>
  <li class="slds-breadcrumb__item slds-text-heading--label">
    <slot>
      <a :href="href">{{ label }}</a>
    </slot>
  </li>
</template>

<script>
  export default {
    props: {
      label: {
        type: String,
        default: '',
      },
      href: {
        type: String,
        default: 'javascript:void(0);',
      },
    },
  }
</script>
