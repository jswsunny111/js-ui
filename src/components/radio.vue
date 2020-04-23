<template>
 <label class="js-radio" :class="{'is-checked':label === model}">
    <span class="js-radio_input">
      <span class="js-radio_inner"></span>
      <input
      type="radio"
      class="js-radio_original"
      :name="name"
      :value="label"
      v-model="model"
      >
    </span>
    <span class="js-radio_label">
      <slot></slot>
      <!-- 如果没有传值，就把label作为文本显示 -->
      <template v-if="!$slots.default">{{label}}</template>
      </span>
  </label>
</template>

<script>
export default {
  name: 'jsRadio',
  inject: {
    RadioGroup: {
      default: ''
    }
  },
  props: {
    label: {
      type: [String, Boolean, Number],
      default: ''
    },
    value: null,
    name: {
      type: String,
      default: ''
    }
  },
  computed: {
    model: {
      get () {
        // 如果被包裹就没有model 返回RadioGroup 的value
        return this.isGroup ? this.RadioGroup.value : this.value
      },
      set (value) {
        this.isGroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    // 是否被包裹
    isGroup () {
      return !!this.RadioGroup
    }
  }
}
</script>

<style lang="scss" scoped>
  .js-radio{
    color: #606266;
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    outline: none;
    font-size: 14px;
    margin-right: 30px;
    -moz-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    .js-radio_input{
      white-space: nowrap;
      cursor: pointer;
      outline: njs;
      display: inline-block;
      line-height: 1;
      position: relative;
      vertical-align: middle;
      .js-radio_inner{
        border: 1px solid #dcdfe6;
        border-radius: 100%;
        width: 14px;
        height: 14px;
        background-color: #fff;
        position: relative;
        cursor: pointer;
        display: inline-block;
        box-sizing: border-box;
        &:after{
          width: 4px;
          height: 4px;
          border-radius: 100%;
          background-color: #fff;
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%) scale(0);
          transition: transform .15s ease-in;
        }
      }
      .js-radio_original{
        opacity: 0;
        outline: none;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0px;
        right: 0;
        bottom: 0;
        margin: 0;
      }
    }
    .js-radio_label{
      font-size: 14px;
      padding-left: 10px;;
    }
  }
  // 选中的样式
  .js-radio.is-checked{
    .js-radio_input{
      .js-radio_inner{
        border-color: #409eff;
        background-color: #409eff;
        &:after{
          transform: translate(-50%,-50%) scale(1);
        }
      }
    }
    .js-radio_label{
      color:#409eff;
    }
  }
</style>
