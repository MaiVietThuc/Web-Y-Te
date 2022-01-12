<template>
  <div>
    <div v-if="!printReportBoo">
      <div v-if="!showLoadding" class="w-full h-auto bg-indigo-100">
        <div v-if="banner" class="w-full h-screen fixed z-10" >
          <img class="fixed z-30 inset-x-0 m-auto"  src="../../assets/img/1598942097_chung-s-ng-an-to-n-v-i---i-d-ch-covid-19.png" alt="banner">
          <span class="w-full h-screen fixed z-20 bg-gray-500 opacity-70" @click="closeBanner"></span>
        </div>
        <button class="open-button rounded" @click="formChatHandle()">
          Nhận tư vấn từ bác sĩ
        </button>

        <div class="chat-popup" v-bind:class="{ 'from-open': chat }">
          <form action="#" class="form-container">
            <h1>Gửi email cho bác sĩ</h1>

            <label for="msg"><b>Tin nhắn</b></label>
            <textarea
              placeholder="Nhập tin nhắn..."
              name="msg"
              required
            ></textarea>

            <button type="submit" class="btn">Gửi</button>
            <button type="button" class="btn cancel" @click="formChatHandle()">
              Đóng
            </button>
          </form>
        </div>
        <div class="w-full h-auto bg-white m-auto rounded-lg p-3 flex justify-between">
          <div class="w-1/2 h-auto flex items-center ml-12">
            <img
            v-if="showInfo.gender == 'Nam' || showInfo.gender == 'NAM'"
              class="w-52 h-52 rounded-full mr-3"
              src="https://www.crushpixel.com/big-static15/preview4/male-patient-lay-hospital-bed-2005018.jpg"
            />
            <img
            v-if="showInfo.gender == 'Nữ' || showInfo.gender == 'nỮ' || showInfo.gender == 'NỮ'"
              class="w-52 h-52 rounded-full mr-3"
              src="https://c7.alamy.com/comp/2BT4PC6/the-female-patient-lay-in-the-hospital-bed-raised-his-hands-up-with-two-fingers-2BT4PC6.jpg"
            />
            <div>
              <p class="text-xl">BỆNH NHÂN: {{ showInfo.fullname }}</p>
              <p>ID:{{ showInfo.id }}</p>
            </div>
          </div>
          <div class="w-1/2 h-full flex justify-end">
              <button class="p-2 bg-gray-500 rounded text-white mr-2">Đổi mật khẩu</button>
              <button @click="logOut()" class="p-2 bg-red-500 rounded text-white ">Đăng xuất</button>
          </div>
        </div>
        <div class="w-full h-auto bg-white m-auto rounded-lg p-3 mt-5">
          <p class="text-center text-xl text-indigo-400">THÔNG TIN COVID-19</p>
          <div class="mt-5 flex">
            <div class="w-1/4 h-auto p-5 m-5 bg-red-500 rounded">
                <p class="text-center text-white">Số ca nhiễm: {{showCovid.canhiem}}</p>
            </div>
            <div class="w-1/4 h-auto p-5 m-5 bg-green-500 rounded">
                <p class="text-center text-white">Số ca đã điều trị: {{showCovid.dieutri}}</p>
            </div>
            <div class="w-1/4 h-auto p-5 m-5 bg-blue-500 rounded">
                <p class="text-center text-white">Số ca khỏi bệnh: {{showCovid.khoi}}</p>
            </div>
            <div class="w-1/4 h-auto p-5 m-5 bg-gray-500 rounded">
                <p class="text-center text-white">Số ca tử vong: {{showCovid.tuvong}}</p>
            </div>
          </div>
        </div>
        <div>
          <div class="w-full h-auto bg-white m-auto rounded-lg p-3 mt-5" id="content">
            <p class="text-center text-xl text-indigo-400">THÔNG TIN CÁ NHÂN</p>
            <div class="flex justify-around mt-5">
              <div>
                <p class="text-indigo-400 text-xl" >Họ và tên:</p>
                <p>{{ showInfo.fullname }}</p>
                <p class="text-indigo-400 text-xl">Ngày sinh:</p>
                <p>{{ formatDate(showInfo.dob) }}</p>
                <p class="text-indigo-400 text-xl">Giới tính:</p>
                <p>{{ showInfo.gender }}</p>
                <p class="text-indigo-400 text-xl">Quê quán:</p>
                <p>{{ showInfo.quequan }}</p>
              </div>
              <div>
                <p class="text-indigo-400 text-xl">Số điện thoại:</p>
                <p>{{ showInfo.phone }}</p>
                <p class="text-indigo-400 text-xl">Email:</p>
                <p>{{ showInfo.email }}</p>
                <p class="text-indigo-400 text-xl">Ngày tái khám:</p>
                <p>30/4/1999</p>
              </div>
            </div>
          </div>
          <div class="w-full h-auto bg-white m-auto rounded-lg p-3 mt-5">
            <!-- <p class="text-center text-xl text-indigo-400">THÔNG TIN CHẨN ĐOÁN</p>
            <div
              class="w-full h-auto flex"
              v-for="(chanDoans, index) in showChanDoan"
              :key="index"
            >
              <div class="m-2 border border-gray-500 rounded">
                <p class="text-indigo-400 text-xl">Chẩn đoán của bác sĩ:</p>
                <p class="text-indigo-400">Ngày chỉ định</p>
                <p>{{ formatDate(chanDoans.NgayChiDinh) }}</p>
                <p class="text-indigo-400">Dịch vụ</p>
                <p>{{ chanDoans.TenDV }}</p>
                <p class="text-indigo-400">Chẩn đoán</p>
                <p>
                  {{ chanDoans.ChanDoan }}
                </p>

                <p class="text-indigo-400 text-xl">Ghi chú:</p>
                <p>{{ chanDoans.GhiChu }}</p>
              </div>
              <div class="m-2 border border-gray-500 rounded">
                <p class="text-indigo-400 text-xl">Chẩn đoán của bác sĩ:</p>
                <p class="text-indigo-400">Ngày chỉ định</p>
                <p>{{ formatDate(chanDoans.NgayChiDinh) }}</p>
                <p class="text-indigo-400">Dịch vụ</p>
                <p>{{ chanDoans.TenDV }}</p>
                <p class="text-indigo-400">Chẩn đoán</p>
                <p>
                  {{ chanDoans.ChanDoan }}
                </p>

                <p class="text-indigo-400 text-xl">Ghi chú:</p>
                <p>{{ chanDoans.GhiChu }}</p>
              </div>
              <div class="m-2 border border-gray-500 rounded">
                <p class="text-indigo-400 text-xl">Chẩn đoán của bác sĩ:</p>
                <p class="text-indigo-400">Ngày chỉ định</p>
                <p>{{ formatDate(chanDoans.NgayChiDinh) }}</p>
                <p class="text-indigo-400">Dịch vụ</p>
                <p>{{ chanDoans.TenDV }}</p>
                <p class="text-indigo-400">Chẩn đoán</p>
                <p>
                  {{ chanDoans.ChanDoan }}
                </p>

                <p class="text-indigo-400 text-xl">Ghi chú:</p>
                <p>{{ chanDoans.GhiChu }}</p>
              </div>
            </div> -->

            <p class="text-center text-xl text-indigo-400">
              THÔNG TIN CHẨN ĐOÁN HÌNH ẢNH
            </p>
            <div class="mt-5" v-if="patientImg == null">
              <p  v-if="showPatientImg == null" class="text-red-400 text-2xl">CHƯA CÓ THÔNG TIN HÌNH ẢNH</p>
            </div>
            <div v-if="showPatientImg !== null" class="mt-5">
              <div class="m-2 border border-gray-700  flex" v-for="(img, index) in showPatientImg" :key="index">
              <div class="w-1/2">
                <p class="text-indigo-400 text-xl">MÔ TẢ:</p>
                <p>Ngày: {{formatDate(img.Date)}}</p>
                <p class="text-indigo-400 text-xl">KỸ THUẬT:</p>
                <p>{{img.TenDV}}</p>
                <p class="text-indigo-400 text-xl">MÔ TẢ HÌNH ẢNH:</p>
                <p v-html="format(img.GhiChu)"></p>
                <p class="text-indigo-400 text-xl">KẾT LUẬN:</p>
                <p class="text-bold">{{img.ChanDoan}} </p>
                <p>Bác sĩ chẩn đoán: {{img.TenBS}}</p>
                <button class="p-2 bg-green-500 rounded text-white mr-2" @click="printReport(img)">In bệnh án</button>
              </div>
              <div class="w-1/2">
                <p class="text-indigo-400 text-xl">HÌNH ẢNH:</p>
                <img
                  class="w-full"
                  :src="'data:image/png;base64,'+ img.img"
                />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Loadding :timeShow="2000" />
      </div>
    </div>
    <div v-if="printReportBoo">
      <div class="w-full flex justify-beetwen">
        <div class="w-1/2 p-4">
         <p class="w-max cursor-pointer" @click="backPatient()">
           Bệnh viện abc
          </p>
        </div>
        <div class="w-1/2 text-right p-4">MÃ</div>
      </div>
      <div class="text-3xl md:text-4xl font-medium text-center mb-2" @click="onButton()">
        KẾT QUẢ CHUẨN ĐOÁN
        <div class="line"></div>
      </div>
      <div>
        <div class="flex justify-center text-base p-4">
          <div class="w-3/5 flex justify-center">
            <ul class="w-full">
              <li class="flex justify-beetwen"><div class="w-2/5">Họ và tên:</div><div class="w-4/5">{{ getPatientSearch.fullname}}</div> </li>
              <li class="flex justify-beetwen"><div class="w-2/5">Địa chỉ: </div> <div class="w-4/5">{{ getPatientSearch.quequan}}</div></li>
              <li class="flex justify-beetwen"><div class="w-2/5">Bác sĩ chỉ định: </div> <div class="w-4/5">{{ reportIn.TenBS}}</div></li>
              <li class="flex justify-beetwen"><div class="w-2/5">Chuẩn đoán: </div> <div class="w-4/5">{{ reportIn.ChanDoan}}</div></li>
              <li class="flex justify-beetwen"><div class="w-2/5">Chỉ định: </div> <div class="w-4/5">{{ reportIn.TenDV}}</div></li>
            </ul>
          </div>
          <div class="w-2/5 flex justify-center">
            <ul class="w-full">
              <li class="flex justify-beetwen"><div class="w-4/5">Ngày sinh: </div><div class="w-4/5">{{ formatDate(getPatientSearch.dob) }}</div></li>
              <li class="text-white">.</li>
              <li class="flex justify-beetwen"><div class="w-4/5">Ngày chỉ định: </div><div class="w-4/5">{{ formatDate(reportIn.Date) }}</div></li>
              <li class="flex justify-beetwen"><div class="w-4/5">Ngày in: </div><div class="w-4/5">{{ this.currentDate() }}</div></li>
            </ul>
          </div>
          <div class="w-1/5 flex justify-center">
            <ul class="w-full">
              <li class="flex justify-beetwen"><div class="w-3/5">Giới tính: </div><div class="w-4/5">{{ getPatientSearch.gender }}</div></li>
            </ul>
          </div>
        </div>
        <div class="line-page"></div>
        <div class="flex p-4">
          <div class="w-1/2">
            <div class="text-3xl md:text-4xl font-medium mb-2">
              Kỹ thuật
            </div>
            <div>{{ reportIn.TenDV }}</div>
          </div>

          <div class="w-1/2">
            <div class="text-3xl md:text-4xl font-medium mb-2">
              Mô tả hình ảnh
            </div>
            <img
              class="w-full"
              :src="'data:image/png;base64,'+ reportIn.img"
            />
          </div>
        </div>
        <div class="p-4">
          <div class="text-3xl md:text-4xl font-medium mb-2">
            Kết luận
          </div>
          <div>{{ reportIn.GhiChu }}</div>
        </div>
        <div class="p-4">
          <button class="p-2 bg-gray-500 rounded text-white mr-2" v-if="hiddenButtonPrint" @click="printReportPDF()">In bệnh án</button>
          <button class="p-2 bg-red-500 rounded text-white" v-if="hiddenButtonPrint" @click="backPatient()">Quay lại</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loadding from "@/components/loading/loadding";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      covid:null,
      loginInfo: null,
      chanDoan: null,
      patientImg: null,
      chat: false,
      banner:true,
      reportIn: null,
      patientReport: null,
      printReportBoo: false,
      hiddenButtonPrint: true
    };
  },
  head(){
    return{
      title:"Bệnh nhân",
    }
  },
  components: {
    Loadding,
  },
  computed: {
    ...mapGetters("loadding", ["getterShowLoadding"]),
    ...mapGetters("login", ["getAccountLogin"]),
    ...mapGetters("patient", ["getterChanDoan", "getterPatientImage", "getPatientSearch"]),
    ...mapGetters("covid",["getterCovid"]),
    showLoadding() {
      return this.getterShowLoadding;
    },
    showInfo() {
      this.loginInfo = localStorage.getItem("accountLoginSuccess");
      return JSON.parse(this.loginInfo);
    },
    showPatientImg() {
      return (this.patientImg = this.getterPatientImage);
    },
    showCovid(){
      return this.getterCovid;
    },
  },
  methods: {
    ...mapActions("patient", [ "getPatientImg", "getPatientFlowId"]),
    ...mapActions("covid",["getCovid"]),

    formatDate(str) {
      const date = new Date(str),
        mnth = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
      return [day, mnth, date.getFullYear()].join("-");
    },
    formChatHandle() {
      this.chat = !this.chat;
    },
    currentDate() {
      const current = new Date();
      const date = `${current.getDate() < 10 ? '0'+current.getDate() : current.getDate()}-${(current.getMonth() + 1) < 10 ? '0'+(current.getMonth() + 1) : (current.getMonth() + 1)}-${current.getFullYear()}`;
      return date;
    },
    logOut() {
      localStorage.removeItem("accountLoginSuccess");
      this.$router.push({path: '/'})
    },
    closeBanner(){
      this.banner = !this.banner;
    },
    async getCovidInfo(){
      await this.getCovid()
    },
    printReportPDF() {
      this.hiddenButtonPrint = false
      setTimeout(function () { window.print(); }, 100);
    },
    onButton() {
      this.hiddenButtonPrint = true
    },
    async printReport(report) {
      console.log("report debug - ", report)
      this.reportIn = report
      let infoSearch = {
        ID: report.IDBN
      }
      this.patientReport = await this.getPatientFlowId(infoSearch)
      console.log("patientReport debug - ", this.getPatientSearch)
      this.printReportBoo = true
    },
    backPatient() {
      this.printReportBoo = false
    },
    async format(text){
      
      return text
    }
  },

  mounted() {
    this.getPatientImg(this.showInfo.id);
    this.getCovidInfo();
    const accLogin = JSON.parse(localStorage.getItem("accountLoginSuccess"));
    if (accLogin == undefined || accLogin == null) {
      this.$router.push({ path: "/" });
      alert("Làm ơn đăng nhập vào hệ thống - CẢM ƠN!");
    }
  },
};
</script>
<style scoped>
p {
  padding: 0.5rem;
}
.open-button {
  background-color: #555;
  color: white;
  padding: 16px 20px;
  border: none;
  cursor: pointer;
  opacity: 0.8;
  position: fixed;
  bottom: 23px;
  right: 28px;
  width: 280px;
}

/* The popup chat - hidden by default */
.chat-popup {
  display: none;
  position: fixed;
  bottom: 0;
  right: 15px;
  border: 3px solid #f1f1f1;
  z-index: 9;
}

/* Add styles to the form container */
.form-container {
  max-width: 300px;
  padding: 10px;
  background-color: white;
}

/* Full-width textarea */
.form-container textarea {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  border: none;
  background: #f1f1f1;
  resize: none;
  min-height: 200px;
}

/* When the textarea gets focus, do something */
.form-container textarea:focus {
  background-color: #ddd;
  outline: none;
}

/* Set a style for the submit/send button */
.form-container .btn {
  background-color: #04aa6d;
  color: white;
  padding: 16px 20px;
  border: none;
  cursor: pointer;
  width: 100%;
  margin-bottom: 10px;
  opacity: 0.8;
}

/* Add a red background color to the cancel button */
.form-container .cancel {
  background-color: red;
}

/* Add some hover effects to buttons */
.form-container .btn:hover,
.open-button:hover {
  opacity: 1;
}
.from-open {
  display: block;
}
.line {
  width: 5rem;
  border: .2rem solid;
  margin: 1rem auto;
}
.line-page {
  width: 90%;
  border: .1rem solid;
  margin: 1rem auto;
}
</style>

