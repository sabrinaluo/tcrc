import Vue from 'vue';
import Router from 'vue-router';
import Resource from 'vue-resource';
import LoginView from './components/LoginView';
import TutorView from './components/TutorView.vue';
import StudentView from './components/StudentView.vue';

import App from './App';

Vue.use(Router);
Vue.use(Resource);

export var router = new Router();

router.map({
  '/login': {
    component: LoginView
  },
  '/tutor': {
    component: TutorView
  },
  '/student': {
    component: StudentView
  }
});

router.redirect({
  '*': '/login'
});

router.start(App, '#app');
