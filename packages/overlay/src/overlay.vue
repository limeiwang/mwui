<template>
  <div class="mwui-overlay">
    <transition
      name="mwui-overlay"
      @after-leave="$emit('afterclose')"
    >
      <div
        v-show="realOpen"
        ref="box"
        class=""
      >
        <solt/>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'mwuiOverlay',

  props: {
    position: String,
    open: Boolean
  },

  data() {
    return {
      zIndex: null,
      appendBody: false,
      targetNode: null,
      source: null
    }
  },

  computed: {
    realOpen() {
      return this.zIndex !== null && this.open
    }
  },

  watch: {
    realOpen(val) {
      if(val) {

        this.initFocus()

      }else {
        this.destroyFocuse()
      }
    }
  },

  created() {

  },

  mounted() {
    this.overlayBox = this.$refs.box
    document.body.appendChild(this.overlayBox)


  },

  methods: {
    initFocus() {

    },

    destroyFocuse() {
      
    }
  }
}
</script>

<style>

</style>