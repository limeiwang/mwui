<template>
  <div class="toast-wrapper">
    <div class="mwui-toast" :class="item.type" v-for="item in notices" :key="item._name">
      <div class="content">{{item.content}}</div>
    </div>
  </div>
</template>

<script>
const DefaultOptions = {
  duration: 1500,
  type: 'info',
  content: '这是一条提示信息！'
};
let mid = 0;
export default {
  name: 'MwuiToast',

  data() {
    return {
      notices: []
    }
  },

  methods: {
    add(notice = {}) {
      // name标识 用于移除弹窗
      let _name = this.getName();
      // 合并选项
      notice = Object.assign({
        _name,
      }, DefaultOptions, notice);

      this.notices.push(notice);

      setTimeout(() => {
        this.removeNotice(_name)
      }, notice.duration);
    },

    getName() {
      return 'msg_' + (mid++) 
    },

    removeNotice(_name) {
      let index = this.notices.findIndex(item => item.name === _name);
      this.notices.splice(index, 1);
    }
  }
}
</script>

<style lang="less">
.toast-wrapper {
  position: fixed;
  top: 50px;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateX(-50%);
  .mwui-toast {
    --borderWidth: 3px;
    min-width: 240px;
    max-width: 500px;
    margin-bottom: 10px;
    border-radius: 3px;
    box-shadow: 0 0 8px #ddd;
    overflow: hidden;
    .content {
      padding: 8px;
      line-height: 1.3;
    }
    &.info {
      border-left: var(--borderWidth) solid #909399;
      background: #F4F4F5;
    }
    &.success {
      border-left: var(--borderWidth) solid #67C23A;
      background: #F0F9EB;
    }
    &.error {
      border-left: var(--borderWidth) solid #F56C6C;
      background: #FEF0F0;
    }
    &.warning {
      border-left: var(--borderWidth) solid #E6A23C;
      background: #FDF6EC;
    }
  }
}
</style>