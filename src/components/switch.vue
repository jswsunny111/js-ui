<template>
  <div class="js-switch" @click="handleClick" :class="{'is-checked':value}" >
    <span class="js-switch_core" ref="core">
      <span class="js-switch_button"></span>
    </span>
    <input type="checkbox" class="js-switch_input" ref="input" >
  </div>
</template>

<script>
export default {
  name: 'jsSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      drfault: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    async handleClick () {
      this.$emit('input', !this.value)
      // 更新渲染时，拿取参数需在生成后调用
      await this.$nextTick()
      this.setColor()
      this.$refs.input.value = this.value
    },
    setColor () {
      // 传递的有值就进行判定
      if (this.activeColor || this.inactiveColor) {
        // 判定传递的是哪个，将边框 背景改变
        const color = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    }
  },
  mounted () {
    // 调用改变color
    this.setColor()
    // 文本框的值跟随传递过来的value确定
    this.$refs.input.value = this.value
  }
}
</script>

<style lang="scss" scoped>
  .js-switch{
    display: inline-block;
    align-items: center;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    vertical-align: middle;
    .js-switch_core{
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color .3s,background-color .3s;
    vertical-align: middle;
    .js-switch_button{
      position:absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
      }
    }
  }
  // 选中样式
  .is-checked {
    .js-switch_core{
      border-color: #409eff;
      background-color: #409eff;
      .js-switch_button {
        transform: translateX(20px);
      }
    }
  }
  // 隐藏input标签
  .js-switch_input{
    position:absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
</style>
