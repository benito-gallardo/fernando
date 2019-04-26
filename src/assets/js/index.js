import Vue from 'vue';

import './components/_scroll';

window.main = new Vue ({
  el: '#main',
  data: {
    toggle: {
      mobileNavOpen: false,
      formModal: false
    }
  },
  methods: {
    stickyHeader(evt,el){
      let sticky = el.offsetTop;
      console.log(sticky)
      if(window.scrollY > 52) {
        el.classList.add('sticky')
      } else {
        el.classList.remove('sticky')
      }
      //if(window.scrollY > 50)console.log(el);
    }
  }
}) 
