<template>
  <div class="slds-page-header" role="banner">
  <div class="slds-grid">
    <div class="slds-col slds-has-flexi-truncate">
      <p class="slds-text-heading--label">Leads</p>
      <div class="slds-grid">
        <div class="slds-grid slds-type-focus slds-no-space">
          <h1 class="slds-page-header__title slds-truncate" title="My Leads (truncates)">My Leads (truncates)</h1>
          <button class="slds-button slds-button--icon-bare slds-shrink-none slds-align-middle slds-m-left--x-small">
            <svg aria-hidden="true" class="slds-button__icon">
              <use xlink:href="#down"></use>
            </svg>
            <span class="slds-assistive-text">View More</span>
          </button>
        </div>
      </div>
    </div>
    <div class="slds-col slds-no-flex slds-grid slds-align-top">
      <div class="slds-button-group" role="group">
        <button class="slds-button slds-button--neutral">New Lead</button>
        <div class="slds-button--last">
          <button class="slds-button slds-button--icon-border-filled">
            <svg aria-hidden="true" class="slds-button__icon">
              <use xlink:href="#down"></use>
            </svg>
            <span class="slds-assistive-text">More Actions</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="slds-grid">
    <div class="slds-col slds-align-bottom">
      <p class="slds-text-body--small page-header__info">10 items • sorted by name</p>
    </div>
    <div class="slds-col slds-no-flex slds-grid slds-align-bottom">
      <button class="slds-button slds-button--icon-more" aria-haspopup="true">
        <svg aria-hidden="true" class="slds-button__icon">
          <use xlink:href="#settings"></use>
        </svg>
        <span class="slds-assistive-text">Settings</span>

        <svg aria-hidden="true" class="slds-button__icon button__icon--xx-small">
          <use xlink:href="#down"></use>
        </svg>
      </button>
      <button class="slds-button slds-button--brand slds-m-left--x-small slds-hide" aria-hidden="true">Save</button>
      <button class="slds-button slds-button--icon-more slds-m-left--xx-small" aria-haspopup="true">
        <svg aria-hidden="true" class="slds-button__icon">
          <use xlink:href="#table"></use>
        </svg>
        <span class="slds-assistive-text">Table</span>
        <svg aria-hidden="true" class="slds-button__icon slds-button__icon--x-small">
          <use xlink:href="#down"></use>
        </svg>
      </button>
      <div class="slds-button-group" role="group">
        <button class="slds-button slds-button--icon-border slds-not-selected">
          <svg aria-hidden="true" class="slds-button__icon">
            <use xlink:href="#chart"></use>
          </svg>
          <span class="slds-assistive-text">Chart</span>
        </button>
        <button class="slds-button slds-button--icon-border slds-not-selected">
          <svg aria-hidden="true" class="slds-button__icon">
            <use xlink:href="#filterList"></use>
          </svg>
          <span class="slds-assistive-text">Filter List</span>
        </button>
        <button class="slds-button slds-button--icon-more">
          <svg aria-hidden="true" class="slds-button__icon">
            <use xlink:href="#sort"></use>
          </svg>
          <span class="slds-assistive-text">Sort</span>
          <svg aria-hidden="true" class="slds-button__icon slds-button__icon--x-small">
            <use xlink:href="#down"></use>
          </svg>
          <span class="slds-assistive-text">More</span>
        </button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {

  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
