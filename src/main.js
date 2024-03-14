import { createApp } from 'vue'
import App from './App.vue';
import router from './router/index.js'
import 'bootstrap/dist/css/bootstrap.css'

import AddUser from './components/AddUser.vue'
import ShowUser from './components/ShowUser.vue'

const app = createApp(App);
app.component('add-user', AddUser);

app.component('show-user', ShowUser);

app.use(router).mount("#app");