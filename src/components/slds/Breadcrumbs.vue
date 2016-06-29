<template>
  <nav role="navigation" aria-label="Breadcrumbs">
    <ol class="slds-breadcrumb slds-list--horizontal">
      <slot>
        <breadcrumb v-for="crumb in breadcrumbs" :href="crumb.href" :label="crumb.label"></breadcrumb>
      </slot>
    </ol>
  </nav>
</template>

<script>
  import Breadcrumb from './Breadcrumb'

  export default {
    components: {
      Breadcrumb,
    },
    props: {
      /**
       * An array of objects containing 'href' and
       * 'label' properties. If you need to customize
       * the content of each breadcrumb, use the slot
       * and render them manually.
       */
      breadcrumbs: {
        type: Array,
        default: [],
      },
    },
  }
</script>
