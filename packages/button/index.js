// 为组件提供 install 方法，供组件对外按需引入
import MwuiButton from './src/button'
MwuiButton.install = Vue => {
  Vue.component(MwuiButton.name, MwuiButton)
}
export default MwuiButton