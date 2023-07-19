
import initVue from '../components/init-vue.js';
import ModalComponent from '../components/modal-component.vue';
import HeaderComponent from '../components/header-component.vue';
import SignupButton from '../components/signup-button.vue';
import HeroComponent from '../components/hero-component.vue';
import IconicComponent from '../components/iconic-component.vue';
import FooterComponent from '../components/footer-component.vue';

const components = {
  'signup-button': SignupButton,
  'header-component': HeaderComponent,
  'hero-component': HeroComponent,
  'iconic-component': IconicComponent,
  'modal-component': ModalComponent,
  'footer-component': FooterComponent,
};

initVue(components);

