import Vue from 'vue'
import App from './App.vue'
// 导入lib-flexible
import 'lib-flexible'
// 引入Button
import JsButton from './components/button.vue'
// dialog组件
import JsDialog from './components/dialog.vue'
import JsInput from './components/input.vue'
import JsSwitch from './components/switch.vue'
import JsRadio from './components/radio.vue'
import JsRadioGroup from './components/radioGroup.vue'
import JsCheckbox from './components/checkbox.vue'
import JsCheckboxGroup from './components/checkboxGroup.vue'

import './styles/fonts/iconfont.css'
Vue.component(JsButton.name, JsButton)
Vue.component(JsDialog.name, JsDialog)
Vue.component(JsInput.name, JsInput)
Vue.component(JsSwitch.name, JsSwitch)
Vue.component(JsRadio.name, JsRadio)
Vue.component(JsRadioGroup.name, JsRadioGroup)
Vue.component(JsCheckbox.name, JsCheckbox)
Vue.component(JsCheckboxGroup.name, JsCheckboxGroup)

Vue.config.productionTip = false
new Vue({

  render: h => h(App)
}).$mount('#app')
