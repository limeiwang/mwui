<template>
  <transition
    name="dialog-fade"
    @after-enter="afterEnter"
    @after-leave="afterLeave"
  >
    <div
      class="mwui-dialog-wrapper"
      @click="handleWrapperClick"
    >
      MwuiDialog
    </div>
  </transition>
</template>

<script>
export default {
  name: 'MwuiDialog',

  props: {
    closeOnClickModal: {
      type: Boolean,
      default: true
    },
    beforeClose: Function,
  },

  data() {
    return {

    }
  },

  methods: {
    handleWrapperClick() {
      if (!this.closeOnClickModal) return;
      this.handleClose();
    },
    handleClose() {
      if (typeof this.beforeClose === 'function') {
        this.beforeClose(this.hide);
      } else {
        this.hide();
      }
    },
    afterEnter() {
      this.$emit('opened');
    },
    afterLeave() {
      this.$emit('closed');
    }
  }
}
</script>

<style>

</style>