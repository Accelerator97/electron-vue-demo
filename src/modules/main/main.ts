import { createApp } from 'vue'
import App from './Main.vue'
import router from '../../router/index'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(router).mount('#app')
