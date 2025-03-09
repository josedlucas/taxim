import Badge from '../components/argo/Badge.vue'
import BaseAlert from '../components/argo/BaseAlert.vue'
import BaseButton from '../components/argo/BaseButton.vue'
import BaseCheckbox from '../components/argo/BaseCheckbox.vue'
import BaseInput from '../components/argo/BaseInput.vue'
import BasePagination from '../components/argo/BasePagination.vue'
import BaseProgress from '../components/argo/BaseProgress.vue'
import BaseRadio from '../components/argo/BaseRadio.vue'
import BaseSlider from '../components/argo/BaseSlider.vue'
import BaseSwitch from '../components/argo/BaseSwitch.vue'
import Card from '../components/argo/Card.vue'
import Icon from '../components/argo/Icon.vue'

export default {
  install(Vue) {
    Vue.component(Badge.name, Badge)
    Vue.component(BaseAlert.name, BaseAlert)
    Vue.component(BaseButton.name, BaseButton)
    Vue.component(BaseInput.name, BaseInput)
    Vue.component(BaseCheckbox.name, BaseCheckbox)
    Vue.component(BasePagination.name, BasePagination)
    Vue.component(BaseProgress.name, BaseProgress)
    Vue.component(BaseRadio.name, BaseRadio)
    Vue.component(BaseSlider.name, BaseSlider)
    Vue.component(BaseSwitch.name, BaseSwitch)
    Vue.component(Card.name, Card)
    Vue.component(Icon.name, Icon)
  },
}
