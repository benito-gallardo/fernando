import Vue from 'vue';
import Card from './components/slider/_card';
import './components/_scroll';

window.main = new Vue ({
  el: '#main',
  components: {
    Card
  },
  data: {
    toggle: {
      mobileNavOpen: false,
      formModal: false
    }
  },
  methods: {
    stickyHeader(evt,el) {
      let sticky = el.offsetTop;
      if(window.scrollY > 52) {
        el.classList.add('sticky')
      } else {
        el.classList.remove('sticky')
      }
    }
  }
}) 
