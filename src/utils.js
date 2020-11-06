var mixin = {
  methods: {
    isMobile: function() {
      console.log('document.body.clientWidth:', document.body.clientWidth);
      console.log('innerWidth:', window.innerWidth);
      return document.body.clientWidth < 768;
    }
  }
};

export {
  mixin,
};
