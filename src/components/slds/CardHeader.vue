<template>
    <div class="slds-card__header slds-grid">
      <div class="slds-media slds-media--center slds-has-flexi-truncate">
        <div class="slds-media__figure">
          <svg aria-hidden="true" class="slds-icon slds-icon-standard-contact slds-icon--small">
            <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#contact"></use>
          </svg>
        </div>
        <div class="slds-media__body slds-truncate">
          <a href="javascript:void(0);" class="slds-text-link--reset">
            <span class="slds-text-heading--small">Card Header</span>
          </a>
        </div>
      </div>
      <div class="slds-no-flex">
        <slot name="actions">
          <button class="slds-button slds-button--neutral slds-col--bump-left">New</button>
        </slot>
      </div>
    </div>
</template>

<script>
  export default {

  }
</script>
