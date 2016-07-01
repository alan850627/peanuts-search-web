<template>
  <div class="slds-page-header" role="banner">
    <div class="slds-media slds-media--center">
      <div class="slds-media__figure">
        <img src="~assets/images/iot-analytics-square.png" alt="Logo" height="100" width="100"/>
      </div>
    <div class="slds-media__body">
        <p class="slds-page-header__title slds-truncate slds-align-middle" title="Silicon Labs - Commitments">Silicon Labs - Commitments</p>
        <p class="slds-text-body--small page-header__info">
          TripReport</p>
    </div>
    <div>
      <slds-lookups :lookup-text.sync="lookupText"></slds-lookups>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      lookupText: {
        type: String,
        default: '',
        twoWay: true,
      },
    },
  }
</script>
