import { createApp } from 'vue'
import App from './App.vue'
import bitCard from './components/bit-card.vue'
const app = createApp(App)
app.component('BitCard', bitCard)
app.mount('#app')