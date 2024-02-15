// Components
import App from '@/App.vue'
import '@/plugins/apis/db'
import { createApp } from 'vue'

// styles
import '@/styles/index.scss'


import '@/styles/user-custom/style.scss'

// Plugins
import { registerPlugins } from '@/plugins/vuetify/index'

const app = createApp(App)

registerPlugins(app)
app.mount('#app')
