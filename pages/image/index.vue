<template>
  <div>
    <div class="container">
      <!-- default start -->
      <section id="default" class="padding-top0">
        <div class="row">
          <div class="large-12 column"><h1 class="text-3xl md:text-4xl font-medium mb-2">Xem hình ảnh</h1></div>
          <hr />
          <div class="large-5 column">
            <div class="xzoom-container">
              <img
                class="xzoom"
                id="xzoom-default"
                :src="'data:image/png;base64,'+imgBa"
                :xoriginal="'data:image/png;base64,'+imgBa"
              />
              <div v-show="false" class="xzoom-thumbs">
                <a
                  href="http://www.jqueryscript.net/demo/Feature-rich-Product-Gallery-With-Image-Zoom-xZoom/images/gallery/original/01_b_car.jpg"
                  ><img
                    class="xzoom-gallery"
                    width="80"
                    src="http://www.jqueryscript.net/demo/Feature-rich-Product-Gallery-With-Image-Zoom-xZoom/images/gallery/thumbs/01_b_car.jpg"
                    xpreview="http://www.jqueryscript.net/demo/Feature-rich-Product-Gallery-With-Image-Zoom-xZoom/images/gallery/preview/01_b_car.jpg"
                    title="Zoom"
                /></a>

                <a
                  href="http://www.jqueryscript.net/demo/Feature-rich-Product-Gallery-With-Image-Zoom-xZoom/images/gallery/original/02_o_car.jpg"
                  ><img
                    class="xzoom-gallery"
                    width="80"
                    src="http://www.jqueryscript.net/demo/Feature-rich-Product-Gallery-With-Image-Zoom-xZoom/images/gallery/preview/02_o_car.jpg"
                    title="Zoom"
                /></a>

                <a
                  href="http://www.jqueryscript.net/demo/Feature-rich-Product-Gallery-With-Image-Zoom-xZoom/images/gallery/original/03_r_car.jpg"
                  ><img
                    class="xzoom-gallery"
                    width="80"
                    src="http://www.jqueryscript.net/demo/Feature-rich-Product-Gallery-With-Image-Zoom-xZoom/images/gallery/preview/03_r_car.jpg"
                    title="Zoom"
                /></a>

                <a
                  href="http://www.jqueryscript.net/demo/Feature-rich-Product-Gallery-With-Image-Zoom-xZoom/images/gallery/original/04_g_car.jpg"
                  ><img
                    class="xzoom-gallery"
                    width="80"
                    src="http://www.jqueryscript.net/demo/Feature-rich-Product-Gallery-With-Image-Zoom-xZoom/images/gallery/preview/04_g_car.jpg"
                    title="Zoom"
                /></a>
              </div>
            </div>
          </div>
          <div class="large-7 column"></div>
        </div>
      </section>
      <!-- default end -->
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  head() {
    return {
      title: "Xem ảnh chụp chiếu",
      script: [],
    };
  },
  data() {
    return {
      imgBa: null,
    };
  },

  props: {
    imgProp: {
      type: String,
      default: "",
    },
  },

  computed: {
    ...mapGetters("image", ["getImgCDDV"]),
  },

  methods: {
    load() {
      (function ($) {
        $(document).ready(function () {
          $(".xzoom, .xzoom-gallery").xzoom({
            zoomWidth: 400,
            title: true,
            tint: "#333",
            Xoffset: 15,
          });
          $(".xzoom2, .xzoom-gallery2").xzoom({
            position: "#xzoom2-id",
            tint: "#ffa200",
          });
          $(".xzoom3, .xzoom-gallery3").xzoom({
            position: "lens",
            lensShape: "circle",
            sourceClass: "xzoom-hidden",
          });
          $(".xzoom4, .xzoom-gallery4").xzoom({ tint: "#006699", Xoffset: 15 });
          $(".xzoom5, .xzoom-gallery5").xzoom({ tint: "#006699", Xoffset: 15 });

          //Integration with hammer.js
          var isTouchSupported = "ontouchstart" in window;

          if (isTouchSupported) {
            //If touch device
            $(".xzoom, .xzoom2, .xzoom3, .xzoom4, .xzoom5").each(function () {
              var xzoom = $(this).data("xzoom");
              xzoom.eventunbind();
            });

            $(".xzoom, .xzoom2, .xzoom3").each(function () {
              var xzoom = $(this).data("xzoom");
              $(this)
                .hammer()
                .on("tap", function (event) {
                  event.pageX = event.gesture.center.pageX;
                  event.pageY = event.gesture.center.pageY;
                  var s = 1,
                    ls;

                  xzoom.eventmove = function (element) {
                    element.hammer().on("drag", function (event) {
                      event.pageX = event.gesture.center.pageX;
                      event.pageY = event.gesture.center.pageY;
                      xzoom.movezoom(event);
                      event.gesture.preventDefault();
                    });
                  };

                  xzoom.eventleave = function (element) {
                    element.hammer().on("tap", function (event) {
                      xzoom.closezoom();
                    });
                  };
                  xzoom.openzoom(event);
                });
            });

            $(".xzoom4").each(function () {
              var xzoom = $(this).data("xzoom");
              $(this)
                .hammer()
                .on("tap", function (event) {
                  event.pageX = event.gesture.center.pageX;
                  event.pageY = event.gesture.center.pageY;
                  var s = 1,
                    ls;

                  xzoom.eventmove = function (element) {
                    element.hammer().on("drag", function (event) {
                      event.pageX = event.gesture.center.pageX;
                      event.pageY = event.gesture.center.pageY;
                      xzoom.movezoom(event);
                      event.gesture.preventDefault();
                    });
                  };

                  var counter = 0;
                  xzoom.eventclick = function (element) {
                    element.hammer().on("tap", function () {
                      counter++;
                      if (counter == 1) setTimeout(openfancy, 300);
                      event.gesture.preventDefault();
                    });
                  };

                  function openfancy() {
                    if (counter == 2) {
                      xzoom.closezoom();
                      $.fancybox.open(xzoom.gallery().cgallery);
                    } else {
                      xzoom.closezoom();
                    }
                    counter = 0;
                  }
                  xzoom.openzoom(event);
                });
            });

            $(".xzoom5").each(function () {
              var xzoom = $(this).data("xzoom");
              $(this)
                .hammer()
                .on("tap", function (event) {
                  event.pageX = event.gesture.center.pageX;
                  event.pageY = event.gesture.center.pageY;
                  var s = 1,
                    ls;

                  xzoom.eventmove = function (element) {
                    element.hammer().on("drag", function (event) {
                      event.pageX = event.gesture.center.pageX;
                      event.pageY = event.gesture.center.pageY;
                      xzoom.movezoom(event);
                      event.gesture.preventDefault();
                    });
                  };

                  var counter = 0;
                  xzoom.eventclick = function (element) {
                    element.hammer().on("tap", function () {
                      counter++;
                      if (counter == 1) setTimeout(openmagnific, 300);
                      event.gesture.preventDefault();
                    });
                  };

                  function openmagnific() {
                    if (counter == 2) {
                      xzoom.closezoom();
                      var gallery = xzoom.gallery().cgallery;
                      var i,
                        images = new Array();
                      for (i in gallery) {
                        images[i] = { src: gallery[i] };
                      }
                      $.magnificPopup.open({
                        items: images,
                        type: "image",
                        gallery: { enabled: true },
                      });
                    } else {
                      xzoom.closezoom();
                    }
                    counter = 0;
                  }
                  xzoom.openzoom(event);
                });
            });
          } else {
            //If not touch device

            //Integration with fancybox plugin
            $("#xzoom-fancy").bind("click", function (event) {
              var xzoom = $(this).data("xzoom");
              xzoom.closezoom();
              $.fancybox.open(xzoom.gallery().cgallery, {
                padding: 0,
                helpers: { overlay: { locked: false } },
              });
              event.preventDefault();
            });

            //Integration with magnific popup plugin
            $("#xzoom-magnific").bind("click", function (event) {
              var xzoom = $(this).data("xzoom");
              xzoom.closezoom();
              var gallery = xzoom.gallery().cgallery;
              var i,
                images = new Array();
              for (i in gallery) {
                images[i] = { src: gallery[i] };
              }
              $.magnificPopup.open({
                items: images,
                type: "image",
                gallery: { enabled: true },
              });
              event.preventDefault();
            });
          }
        });
      })(jQuery);
    },
  },

  mounted() {
    this.load();
    this.imgBa = JSON.parse(localStorage.getItem("imgBase64"))
    
  },
};
</script>

<style lang='scss'>
#default {
  text-align: center;
}
/* Compatibility styles for frameworks like bootstrap, foundation e.t.c */
.xzoom-source img,
.xzoom-preview img,
.xzoom-lens img {
  display: block;
  max-width: none;
  max-height: none;
  -webkit-transition: none;
  -moz-transition: none;
  -o-transition: none;
  transition: none;
}

.xzoom-preview img {
    width: 1280x;
    height: 960px;
}
/* --------------- */

/* xZoom Styles below */
.xzoom-container {
  display: inline-block;

  img {

  }
}

.xzoom-thumbs {
  display: flex;
  margin-top: 10px;
  text-align: center;
  margin-bottom: 10px;
}

.xzoom {
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
}
.xzoom2,
.xzoom3,
.xzoom4,
.xzoom5 {
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
}

/* Thumbs */
.xzoom-gallery,
.xzoom-gallery2,
.xzoom-gallery3,
.xzoom-gallery4,
.xzoom-gallery5 {
  border: 1px solid #cecece;
  margin-left: 5px;
  margin-bottom: 10px;
}

.xzoom-source,
.xzoom-hidden {
  display: block;
  position: static;
  float: none;
  clear: both;
}

/* Everything out of border is hidden */
.xzoom-hidden {
  overflow: hidden;
}

/* Preview */
.xzoom-preview {
  border: 1px solid #888;
  background: #2f4f4f;
  box-shadow: -0px -0px 10px rgba(0, 0, 0, 0.5);
}

/* Lens */
.xzoom-lens {
  border: 1px solid #555;
  box-shadow: -0px -0px 10px rgba(0, 0, 0, 0.5);
  cursor: crosshair;
}

/* Loading */
.xzoom-loading {
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 100%;
  opacity: 0.7;
  background: url(https://unpkg.com/xzoom@1.0.15/example/images/xloading.gif);
  width: 48px;
  height: 48px;
}

/* Additional class that applied to thumb when it is active */
.xactive {
  -webkit-box-shadow: 0px 0px 3px 0px rgba(74, 169, 210, 1);
  -moz-box-shadow: 0px 0px 3px 0px rgba(74, 169, 210, 1);
  box-shadow: 0px 0px 3px 0px rgba(74, 169, 210, 1);
  border: 1px solid #4aaad2;
}

/* Caption */
.xzoom-caption {
  position: absolute;
  bottom: -43px;
  left: 0;
  background: #000;
  width: 100%;
  text-align: left;
}

.xzoom-caption span {
  color: #fff;
  font-family: Arial, sans-serif;
  display: block;
  font-size: 0.75em;
  font-weight: bold;
  padding: 10px;
}
</style>