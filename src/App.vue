<template>
  <div id="app" >
  <js-checkbox-group v-model="aa">
      <js-checkbox label="抽烟"></js-checkbox>
      <js-checkbox label="喝酒"></js-checkbox>
      <js-checkbox label="烫头"></js-checkbox>
  </js-checkbox-group>
  </div>
</template>
<script>
export default {
  data () {
    return {
      active: false,
      aa: ['抽烟', '喝酒']
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" >
// .box {
// }

</style>
