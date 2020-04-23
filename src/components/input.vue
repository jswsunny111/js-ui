<template>
  <div class="js-input " :class="{'js-input_suffix':showSuffix}">
    <input :type="passwordVisible? (passwordVisible? 'text':'password' ):type" :placeholder="placeholder" :disabled="disabled"  class="js-input_inner" :class="{ 'is-disabled': disabled}" :name="name" :value='value' @input="handleInput">
    <span class="js-input_suffix" v-if='showSuffix'>
   <i class="js-input_icon one-icon-cancel" v-if="clearable && value " @click="clear"></i>
   <i class="js-input_icon one-icon-visible"  :class="{'js-input_icon_current':passwordVisible}" v-if="showPassword && value " @click="handlePassword" ></i>
 </span>
  </div>
</template>

<script>
export default {
  name: 'jsInput',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      passwordVisible: false
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    // 清除
    clear () {
      this.$emit('input', '')
    },
    // 更改状态
    handlePassword () {
      this.passwordVisible = !this.passwordVisible
    }
  },
  computed: {
    showSuffix () {
      return this.clearable || this.showPassword
    }
  }
}
</script>

<style lang="scss" >
  .js-input{
    width: 100%;
    position: relative;
    font-size: 14px;
    display: inline-block;
    .js-input_inner{
      -webkit-appearance: none;
      background-color: #fff;
      background-image: none;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      font-size: inherit;
      height: 40px;
      line-height: 40px;
      outline: none;
      padding: 0 15px;
      transition: border-color .2s cubic-bezier(.645,045,.355,1);
      width: 100%;

      &:focus{
        outline: none;
        border-color: #409eff;
      }
      // input禁用样式
      &.is-disabled{
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        color: #c0c4cc;
        cursor:not-allowed;
      }
    }
  }
  // 后面加suffix的意思是后面如果有后缀的话，触发该样式
  .js-input_suffix{
    .js-input_inner{
      padding-right: 30px;
    }
    .js-input_suffix{
      position: absolute;
      right: 10px;
      height: 100%;
      top: 0;
      line-height: 40px;
      text-align: center;
      color: #c0c4cc;
      transition: all .3s;
      z-index: 900;
      i{
        color: #c0c4cc;
        font-size: 14px;
        cursor: pointer;
        transition: color .2s cubic-bezier(.645,.045,.355,1);
      }
      .js-input_icon_current {
        color: red;
      }
    }
  }
</style>
