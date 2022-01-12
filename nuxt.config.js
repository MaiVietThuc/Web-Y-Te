export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'web-yt-fe',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: "https://unpkg.com/webcam-easy/dist/webcam-easy.min.js",
      },
      {
        src: 'https://code.jquery.com/jquery-2.1.1.js',
        defer: true
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/foundation/6.3.1/js/foundation.min.js",
        defer: true
      },
      {
        src: "https://hammerjs.github.io/dist/hammer.min.js",
        defer: true
      },
      {
        src: "https://unpkg.com/xzoom/dist/xzoom.min.js",
        defer: true
      },
      {
        src: "https://cpwebassets.codepen.io/assets/common/stopExecutionOnTimeout-8216c69d01441f36c0ea791ae2d4469f0f8ff5326f00ae2d00e4bb7d20e24edb.js",
        defer: true
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.2.61/jspdf.min.js",
        defer: true
      },
    //   {
    //     innerHTML: `
    //       $(document).ready(function() {
    //           $('.xzoom, .xzoom-gallery').xzoom({zoomWidth: 400, title: true, tint: '#333', Xoffset: 15});
    //           $('.xzoom2, .xzoom-gallery2').xzoom({position: '#xzoom2-id', tint: '#ffa200'});
    //           $('.xzoom3, .xzoom-gallery3').xzoom({position: 'lens', lensShape: 'circle', sourceClass: 'xzoom-hidden'});
    //           $('.xzoom4, .xzoom-gallery4').xzoom({tint: '#006699', Xoffset: 15});
    //           $('.xzoom5, .xzoom-gallery5').xzoom({tint: '#006699', Xoffset: 15});
      
    //           //Integration with hammer.js
    //           var isTouchSupported = 'ontouchstart' in window;
      
    //           if (isTouchSupported) {
    //               //If touch device
    //               $('.xzoom, .xzoom2, .xzoom3, .xzoom4, .xzoom5').each(function(){
    //                   var xzoom = $(this).data('xzoom');
    //                   xzoom.eventunbind();
    //               });
                  
    //               $('.xzoom, .xzoom2, .xzoom3').each(function() {
    //                   var xzoom = $(this).data('xzoom');
    //                   $(this).hammer().on("tap", function(event) {
    //                       event.pageX = event.gesture.center.pageX;
    //                       event.pageY = event.gesture.center.pageY;
    //                       var s = 1, ls;
          
    //                       xzoom.eventmove = function(element) {
    //                           element.hammer().on('drag', function(event) {
    //                               event.pageX = event.gesture.center.pageX;
    //                               event.pageY = event.gesture.center.pageY;
    //                               xzoom.movezoom(event);
    //                               event.gesture.preventDefault();
    //                           });
    //                       }
          
    //                       xzoom.eventleave = function(element) {
    //                           element.hammer().on('tap', function(event) {
    //                               xzoom.closezoom();
    //                           });
    //                       }
    //                       xzoom.openzoom(event);
    //                   });
    //               });
      
    //           $('.xzoom4').each(function() {
    //               var xzoom = $(this).data('xzoom');
    //               $(this).hammer().on("tap", function(event) {
    //                   event.pageX = event.gesture.center.pageX;
    //                   event.pageY = event.gesture.center.pageY;
    //                   var s = 1, ls;
      
    //                   xzoom.eventmove = function(element) {
    //                       element.hammer().on('drag', function(event) {
    //                           event.pageX = event.gesture.center.pageX;
    //                           event.pageY = event.gesture.center.pageY;
    //                           xzoom.movezoom(event);
    //                           event.gesture.preventDefault();
    //                       });
    //                   }
      
    //                   var counter = 0;
    //                   xzoom.eventclick = function(element) {
    //                       element.hammer().on('tap', function() {
    //                           counter++;
    //                           if (counter == 1) setTimeout(openfancy,300);
    //                           event.gesture.preventDefault();
    //                       });
    //                   }

    //                   function openfancy() {
    //                       if (counter == 2) {
    //                           xzoom.closezoom();
    //                           $.fancybox.open(xzoom.gallery().cgallery);
    //                       } else {
    //                           xzoom.closezoom();
    //                       }
    //                       counter = 0;
    //                   }
    //               xzoom.openzoom(event);
    //               });
    //           });

    //           $('.xzoom5').each(function() {
    //               var xzoom = $(this).data('xzoom');
    //               $(this).hammer().on("tap", function(event) {
    //                   event.pageX = event.gesture.center.pageX;
    //                   event.pageY = event.gesture.center.pageY;
    //                   var s = 1, ls;
      
    //                   xzoom.eventmove = function(element) {
    //                       element.hammer().on('drag', function(event) {
    //                           event.pageX = event.gesture.center.pageX;
    //                           event.pageY = event.gesture.center.pageY;
    //                           xzoom.movezoom(event);
    //                           event.gesture.preventDefault();
    //                       });
    //                   }

    //                   var counter = 0;
    //                   xzoom.eventclick = function(element) {
    //                       element.hammer().on('tap', function() {
    //                           counter++;
    //                           if (counter == 1) setTimeout(openmagnific,300);
    //                           event.gesture.preventDefault();
    //                       });
    //                   }

    //                   function openmagnific() {
    //                       if (counter == 2) {
    //                           xzoom.closezoom();
    //                           var gallery = xzoom.gallery().cgallery;
    //                           var i, images = new Array();
    //                           for (i in gallery) {
    //                               images[i] = {src: gallery[i]};
    //                           }
    //                           $.magnificPopup.open({items: images, type:'image', gallery: {enabled: true}});
    //                       } else {
    //                           xzoom.closezoom();
    //                       }
    //                       counter = 0;
    //                   }
    //                   xzoom.openzoom(event);
    //               });
    //           });

    //           } else {
    //               //If not touch device

    //               //Integration with fancybox plugin
    //               $('#xzoom-fancy').bind('click', function(event) {
    //                   var xzoom = $(this).data('xzoom');
    //                   xzoom.closezoom();
    //                   $.fancybox.open(xzoom.gallery().cgallery, {padding: 0, helpers: {overlay: {locked: false}}});
    //                   event.preventDefault();
    //               });

    //               //Integration with magnific popup plugin
    //               $('#xzoom-magnific').bind('click', function(event) {
    //                   var xzoom = $(this).data('xzoom');
    //                   xzoom.closezoom();
    //                   var gallery = xzoom.gallery().cgallery;
    //                   var i, images = new Array();
    //                   for (i in gallery) {
    //                       images[i] = {src: gallery[i]};
    //                   }
    //                   $.magnificPopup.open({items: images, type:'image', gallery: {enabled: true}});
    //                   event.preventDefault();
    //               });
    //           }
    //       });
    //  `,
    //     body: true
    //   },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-datepicker', ssr: false } // Plugin date picker
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  axios: {
    baseURL: 'https://ocr.mobile-id.vn', // Used as fallback if no runtime config is provided
    proxyHeaders: false,
    credentials: false
  },

  // publicRuntimeConfig: {
  //   axios: {
  //     browserBaseURL: process.env.BROWSER_BASE_URL
  //   }
  // },

  // privateRuntimeConfig: {
  //   axios: {
  //     baseURL: process.env.BASE_URL
  //   }
  // },

  // proxy: {
  //   '/api/v1': { target: 'http://25.63.16.67:12481/', pathRewrite: {'^/api/v1': ''}, changeOrigin: true }
  // },

  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode'
  }
}
