<template>
  <span :class="containerClass" :title="title">
    <svg aria-hidden="true" :class="iconClass">
      <use :xlink:href="iconHref"></use>
    </svg>
    <span class="slds-assistive-text">{{ title }}</span>
  </span>
</template>

<script>
  import 'assets/icons/utility-sprite/svg/symbols.svg'
  import 'assets/icons/action-sprite/svg/symbols.svg'
  import 'assets/icons/standard-sprite/svg/symbols.svg'
  import 'assets/icons/custom-sprite/svg/symbols.svg'

  const SIZES = {
    'small': true,
    'x-small': true,
    'medium': true,
    'large': true,
  }

  const THEMES = {
    'base': true,
    'default': true,
    'warning': true,
    'error': true,
  }

  const SPRITES = {
    'standard': true,
    'utility': true,
    'action': true,
    'doctype': true,
    'custom': true,
  }

  export default {
    props: {
      title: {
        type: String,
        default: '',
      },
      size: {
        type: String,
        default: 'medium',
        validator: (value) => SIZES[value],
      },
      theme: {
        type: String,
        default: 'base',
        validator: (value) => THEMES[value],
      },
      sprite: {
        type: String,
        default: 'utility',
        validator: (value) => SPRITES[value],
      },
      icon: {
        type: String,
        required: true,
        // validator: (value) => SPRITES[value],
      },
    },

    computed: {
      containerClass () {
        let className

        switch (this.sprite) {
          case 'standard':
          case 'custom':
            className = `slds-icon-${this.sprite}-${this.icon}`
            break
          case 'action':
            className = 'slds-icon_container--circle'
            break
          default:
            className = ''
        }

        return `slds-icon_container ${className}`
      },
      iconClass () {
        return `slds-icon slds-icon--${this.size} slds-icon-text-${this.theme}`
      },
      iconHref () {
        return `#${this.icon}`
      },
    },
  }
</script>
