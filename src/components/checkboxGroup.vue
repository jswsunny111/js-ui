<template>
  <div class="js-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'jsCheckboxGroup',
  provide () {
    return {
      CheckboxGroup: this
    }
  },
  props: {
    value: {
      type: Array
    }
  }
}
</script>
