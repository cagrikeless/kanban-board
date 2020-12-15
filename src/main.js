import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebase from 'firebase'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAf1skWH4ZjefFNv-rNepkt9vlx2OSHE4I",
    authDomain: "kanban-db-c8768.firebaseapp.com",
    projectId: "kanban-db-c8768",
    storageBucket: "kanban-db-c8768.appspot.com",
    messagingSenderId: "251429112054",
    appId: "1:251429112054:web:b158cc02d24a017f6604d7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  require("firebase/firestore");
  var db = firebase.firestore();

  // DB SETTINGS in firebase
  db.settings({
    timestampsInSnapshots: true
  });

Vue.config.productionTip = false

import { BootstrapVue , IconsPlugin} from 'bootstrap-vue'

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  render: h => h(App),
}).$mount('#app')
