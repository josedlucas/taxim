import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Argon from './plugins/argon-kit'

const app = createApp(App)

app.config.productionTip = false
app.use(Argon)
app.use(router)

app.mount('#app')
