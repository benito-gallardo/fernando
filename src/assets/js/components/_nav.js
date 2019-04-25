// import Vue from 'vue';

export default {
  name: 'site-nav',
  data() {
    return { 
      navOpen: true
    }
  },
  methods: {
    toggleMenu(){
      console.log('click')
      this.navOpen = !this.navOpen
    }
  },
  template: `
    <div class="nav-wrap" v-on:enlarge="toggleMenu()">
      <slot></slot>
    </div>
  `
};


