<template>
  <div role="dialog">
    <div v-el:modal @keydown.esc="close" tabindex="-1" :class="{ 'slds-modal': true, 'slds-fade-in-open': show }" aria-hidden="false" role="dialog">
      <div class="slds-modal__container" >
        <div class="slds-modal__header" >
          <button @click.prevent="close" class="slds-button slds-button--icon-inverse slds-modal__close">
            <svg aria-hidden="true" class="slds-button__icon slds-button__icon--large">
              <use xlink:href="#close"></use>
            </svg>
            <span class="slds-assistive-text">Close</span>
          </button>
          <h2 class="slds-text-heading--medium">Modal Header</h2>
        </div>
        <div class="slds-modal__content slds-p-around--medium">
          <slot>
          
          </slot>
        </div>
        <div class="slds-modal__footer">
          <button class="slds-button slds-button--neutral">Cancel</button>
          <button class="slds-button slds-button--neutral slds-button--brand">Save</button>
        </div>
      </div>
    </div>
    <div :class="{ 'slds-backdrop': true, 'slds-backdrop--open': show }"></div>
  </div>
</template>

<script>
// TODO: Write subcomponents to insert headers and footers.
  export default {
    props: {
      show: {
        type: Boolean,
        required: true,
        twoWay: true,
      },
    },

    data () {
      return {
        initialFocus: null,
      }
    },

    watch: {
      show (value) {
        this.$nextTick(() => {
          if (value) {
            this.opened()
          } else {
            this.closed()
          }
        })
      },
    },

    methods: {
      close () {
        this.$emit('close')
        this.show = false
      },

      opened () {
        this.initialFocus = document.activeElement
        this.$els.modal.focus()
        this.$emit('opened')
      },

      closed () {
        this.initialFocus.focus()
        this.$emit('closed')
      },
    },

    beforeDestroy () {
      if (this.show) {
        this.initialFocus.focus()
      }
    },
  }
</script>
