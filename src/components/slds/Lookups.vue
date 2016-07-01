<template>
  <div class="filter">
    <div class="slds-form-element slds-lookup" data-select="single" data-scope="single">
      <label class="slds-form-element__label" for="lookup-01">
        <slds-icon icon="search" theme="default" size="x-small" theme="default"></slds-icon> Search
      </label>
      <div class="slds-form-element__control slds-input-has-icon slds-input-has-icon--right">
        <input v-model="lookupText" id="lookup-01" class="slds-lookup__search-input slds-input" type="text" aria-autocomplete="list" role="combobox" aria-expanded="true" aria-activedescendant="" placeholder="Filter Commitments" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      lookupText: {
        type: String,
        default: '',
      },
    },
  }
</script>

<style scoped>
  .filter {
    padding: 10px
  }
</style>
