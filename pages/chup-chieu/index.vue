<template>
  <div class="flex items-center">
    <!-- <div>
      Select Image:     
      <input type="file" id="img">  
      <br/>  
      <button id="start">Start conversion</button>  
      <div>  
        Preview:<img id="imgShow" src="" alt="">  
      </div>  
      <b>Base64 data:</b>  
      <textarea rows=15 cols=60 id="conte"></textarea>  
      <button id='cpData'>copy</button><span id="succ"></span>  
      <div id="len">Data length:</div>
      <button @click="handleUpload()">Upload</button>
    </div> -->

    <div class="w-full flex justify-center mt-10">
      <div>
        <button @click="handleBase(false,false)" class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-full">
          Mở máy
        </button>
        <div class="flex justify-center">
          <video id="webcam" autoplay playsinline width="640" height="480"></video>
          <canvas id="canvas" class="d-none"></canvas>
          <audio id="snapSound" src="audio/snap.wav" preload = "auto"></audio>
          <a href="https://via.placeholder.com/640x480" id="download-photo" class="pl-3"></a>
        </div>
        <div class="flex justify-between">
          <button class="w-1/2 bg-red-500 hover:bg-red-700 text-white font-bold py-4 px-4 rounded-full" @click="handleBase(false, true)">Dừng webcam</button>
          <button class="w-1/2 bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-4 rounded-full" @click="handleBase(true, false)">Chụp ảnh</button>
        </div>
        <div class="w-full flex justify-center py-4">
          <button class="w-1/2 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-4 px-4 rounded-full" @click="handleUpload()">Lưu</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      baseData: null
    }
  },

  methods: {
    ...mapActions("image", ["ADD_IMAGE"]),

    async handleUpload() {
      const ID_CD_DV = JSON.parse(localStorage.getItem("pID_CD_DV"))
      this.baseData = document.querySelector('#download-photo').href
      let objImg = {
        pIDCD_DV: ID_CD_DV,
        pimg: this.baseData
      }
      console.log("test anh", objImg)
      await this.ADD_IMAGE(objImg)
    },

    handleUploadFile() {
      var img = document.getElementById('img')  
          , imgShow = document.getElementById('imgShow')  
          , conte = document.getElementById('conte')  
          , len = document.getElementById('len')  
          , start = document.getElementById('start')  
          , cpData = document.getElementById('cpData');  

      cpData.addEventListener('click', cpDataF);  
      start.addEventListener('click', startt);  

      function startt() {
          var imgFile = new FileReader();  
          imgFile.readAsDataURL(img.files[0]);  
          imgFile.onload = function () {
              var imgData = this.result;
              imgShow.setAttribute('src', imgData);  
              conte.value = imgData;
              len.innerHTML += imgData.length;  
          }
      }

      function cpDataF() {  
        conte.select(); 
        var cpd=document.execCommand("Copy");
        cpd ? document.getElementById('succ').innerHTML = 'Copy successful' :　console.warn('Copy failed');  
        window.setTimeout(function () {  
            document.getElementById('succ').innerHTML = '';  
        }, 1000)  
      }
    },

    handleBase(snap, sto) {
      var webcamElement = document.getElementById('webcam');
      var canvasElement = document.getElementById('canvas');
      var snapSoundElement = document.getElementById('snapSound');
      var webcam = new Webcam(webcamElement, 'user', canvasElement, snapSoundElement);
      if (snap == false && sto == false) {
      webcam.start()
        .then(result =>{
          console.log("webcam started");
        })
        .catch(err => {
          console.log(err);
      });
      }
      if (snap == true && sto == false) {
        let picture = webcam.snap();
        document.querySelector('#download-photo').href = picture;
      }
      if (sto == true && snap == false) {
        webcam.stop()
      }
    },
  },

    mounted() {
      // this.handleUploadFile()
    },
  }
</script>

<style scoped>

.booth {width: 400px; height: auto; margin: 20px auto; padding: 10px; background-color: #f1f1f1; border: 1px solid #e5e5e5;}
.booth a {display: block; padding: 10px; text-align: center; background-color: #428bca; margin: 10px 0; font-size: 15px; color: #fff; text-decoration: none;}

</style>