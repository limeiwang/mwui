<template>
  <button
  :class="{
    'mwui-button': true,
    'mwui-disabled': disabled,
    'mwui-button-loading': loading
  }"
  @click="handleClick"
  :disabled="disabled"
  :autofocus="autofocus"
  :type="nativeType">
    <i class="mwui-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'MwuiButton',

  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean
  },

  computed: {},

  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  }
}
</script>

<style lang="less">

.mwui-button {
  @mwui-brand-color: #3998FC;
  @mwui-brand-color-1: #2E7ACA;
  @mwui-brand-color-2: #3389E3;
  @small-height: 28px;
  @small-width: 74px;
  
  padding: 0px 12px;
  user-select: none;
  vertical-align: middle;
  min-height: @small-height;
  min-width: @small-width;
  border-color: lightblue;
  background-color: lightblue;

  color: #666666;
  border-radius: 4px;
  font-size: 14px;

  &:hover {
    background-color: #F8F8F8;
  }

  &:active {
    color: #F0F0F0;
  }

  &:focus {
    outline: none;
  }

  &.focus-visible {
    color: @mwui-brand-color;
  }

  &[ui~="primary"] {
    border-color: transparent;
    background-color: @mwui-brand-color;
    color: #FFFFFF;
    min-width: @small-width;
    min-height: @small-height;

    &:hover,
    &.focus-visible {
      background-color: @mwui-brand-color-2;
    }

    &:active {
      background-color: @mwui-brand-color-1;
    }
    
    &.mwui-disabled,
    &.mwui-disabled[ui] {
      &,
      &:hover {
        cursor: not-allowed;
        border-color: transparent;
        background-color: @mwui-brand-color;
        opacity: 0.4;
        color: #666666;
      }
    }
  }

}

</style>