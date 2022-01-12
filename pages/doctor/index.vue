<template>
  <div class="flex">
    <div v-if="!showLoadding && accountDoctor" class="flex h-screen w-screen">
      <div class="w-1/4 h-full">
        <p class="text-center mt-5 mb-2">
          Bệnh nhân: {{ patientInfo.fullname }} - {{ patientInfo.ID }}
        </p>
        <hr class="border-2 border-blue-500 bg-blue-500" />
        <h1 class="text-blue-500 pl-3 mt-2">DANH SÁCH BỆNH NHÂN</h1>
        <div class="flex items-center">
          <div>
            <select
              name="status"
              id="status"
              class="border border-gray-500 rounded ml-3"
              v-model="idStatusDoc"
            >
              <option value="1">Đang chờ</option>
              <option value="2">Đợi kết quả</option>
            </select>
          </div>

          <div>
            <select
              name="status"
              id="status"
              class="border border-gray-500 rounded ml-3"
              v-model="idPhongKham"
            >
              <option value="" disabled>Phòng khám</option>
              <option
                :value="room.ID_PhongKham"
                v-for="(room, index) in showListRoom"
                :key="index"
              >
                <span>{{ room.TenPhongKham }}</span>
              </option>
            </select>
          </div>

          <div>
            <button
              class="ml-2 bg-indigo-700 px-3 rounded text-white"
              @click="handleChooseRoom()"
            >
              Lấy
            </button>
          </div>
        </div>
        <p class="pl-3">Ngày khám: {{ currentDate() }}</p>

        <table class="table-scroll small-first-col border border-gray-500">
          <thead>
            <tr class="text-white">
              <th>STT</th>
              <th>Tên bệnh nhân</th>
            </tr>
          </thead>
          <tbody class="body-half-screen">
            <tr v-for="(patient, index) in newFilterPatient" :key="index++">
              <div
                class="w-full flex items-center"
                @click="handleChoosePatient(patient.MSBN, patient)"
              >
                <td>{{ index }}</td>
                <td>{{ patient.TenBN }}</td>
                <td>{{ patient.TrangThai }}</td>
              </div>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="w-3/4 h-full">
        <div class="w-full h-2/6 mr-4">
          <div class="w-full flex justify-end items-center">
            <p class="mr-2" v-if="infoDoctor">
              Bác sĩ: {{ infoDoctor.fullname }}
            </p>
            <button
              class="mr-2 bg-indigo-700 p-2 rounded text-white"
              @click="logOut()"
            >
              Đăng xuất
            </button>
          </div>
          <p class="text-center text-2xl text-blue-700">THÔNG TIN BỆNH NHÂN</p>
          <div class="flex justify-between m-5">
            Họ và tên:<input
              type="text"
              :placeholder="patientInfo.fullname"
              readonly
              disabled
            />
            Giới tính:<input
              type="text"
              :placeholder="patientInfo.gender"
              readonly
            />
            Ngày sinh:<input
              type="text"
              :placeholder="patientInfo.dob"
              readonly
            />
            Địa chỉ:<input
              type="text"
              :placeholder="patientInfo.quequan"
              readonly
            />
          </div>
          <p class="m-5">
            Ghi chú:
            <input v-model="noteDoctor" type="text" placeholder="Ghi chú" />
          </p>
        </div>
        <div class="w-full h-4/6">
          <div class="tabset h-full">
            <!-- Tab 1 -->
            <input
              type="radio"
              name="tabset"
              id="tab1"
              aria-controls="marzen"
              checked
            />
            <label for="tab1">Khám bệnh</label>
            <!-- Tab 2 -->
            <input
              type="radio"
              name="tabset"
              id="tab2"
              aria-controls="rauchbier"
            />
            <label for="tab2">Chỉ định</label>

            <div class="tab-panels w-full">
              <section class="flex tab-panel p-3">
                <div class="w-full h-full flex">
                  <div class="w-1/2 font-medium mr-2" v-if="false">
                    <label class="block">Bệnh lý</label>
                    <input
                      class="border border-gray-500 round w-full"
                      type="text"
                    />
                    <label class="block">Tiểu sử bệnh</label>
                    <input
                      class="border border-gray-500 round w-full"
                      type="text"
                    />
                    <label class="block">Triệu chứng</label>
                    <input
                      class="border border-gray-500 round w-full"
                      type="text"
                    />
                    <div class="w-full mt-2 flex">
                      <div class="w-1/2 mr-2">
                        <label>Mạch</label>
                        <input
                          class="border border-gray-500 round w-full"
                          type="text"
                        />
                        <label>Huyết áp</label>
                        <input
                          class="border border-gray-500 round w-full"
                          type="text"
                        />
                        <label>Cân nặng (kg)</label>
                        <input
                          class="border border-gray-500 round w-full"
                          type="text"
                        />
                      </div>
                      <div class="w-1/2">
                        <label>Nhiệt độ</label>
                        <input
                          class="border border-gray-500 round w-full"
                          type="text"
                        />
                        <label>Nhịp thở</label>
                        <input
                          class="border border-gray-500 round w-full"
                          type="text"
                        />
                        <label>Chiều cao (cm)</label>
                        <input
                          class="border border-gray-500 round w-full"
                          type="text"
                        />
                      </div>
                    </div>
                    <label class="block">BMI</label>
                    <input
                      class="border border-gray-500 round w-full"
                      type="text"
                    />
                  </div>
                  <div class="w-full font-medium">
                    <label class="block">Hình ảnh</label>
                    <button class="bg-green-500 p-1 rounded text-white">
                      <a href="/image" target="_blank" @click="nextPageViewImage()"> Xem hình ảnh </a>
                    </button>
                    <label class="block">Mô tả chuẩn đoán</label>
                    <textarea
                    rows="5"
                      class="border border-gray-500 round w-full"
                      type="text"
                      v-model="chuanDoanObj.note"
                      placeholder="Nhập mô tả..."
                    />
                    <label class="block">Chẩn đoán XĐ</label>
                    <select class="w-full border border border-gray-500">
                      <option value="" disabled selected>
                        Gợi ý chẩn đoán
                      </option>
                      <option value="">HIV</option>
                    </select>
                    <input
                      class="border border-gray-500 round w-full"
                      type="text"
                      v-model="chuanDoanObj.chuandoanText"
                    />

                    <!-- <label class="block">Tái khám:</label>
                    <input
                      class="border border-gray-500 round w-full"
                      type="datetime-local"
                    /> -->
                    <div class="flex justify-end mt-5">
                      <button
                        class="mr-2 bg-green-500 p-2 rounded text-white"
                        @click="handleSubmitChuanDoan()"
                      >
                        Lưu
                      </button>
                      <button class="mr-2 bg-red-500 p-2 rounded text-white">
                        Xoá
                      </button>
                    </div>
                  </div>
                </div>
              </section>
              <section class="tab-panel">
                <div class="p-2">
                  <div class="flex justify-end w-full">
                    <select
                      name="service"
                      class="p-2 border rounded mr-2"
                      v-model="selectedService"
                    >
                      <option value="" disabled>Chọn dịch vụ</option>
                      <option
                        v-for="(service, index) in services"
                        :key="index"
                        v-bind:value="{
                          id: service.id,
                          name: service.name,
                          cost: service.cost,
                          person: service.person,
                        }"
                      >
                        {{ service.name }}
                      </option>
                    </select>
                    <button
                      class="bg-green-500 p-2 rounded text-white"
                      @click="addNewService(selectedService)"
                    >
                      Thêm
                    </button>
                  </div>
                  <div class="w-full h-full">
                    <table
                      class="border-2 w-full h-1/2 text-left"
                      id="table-service"
                    >
                      <thead class="text-white bg-blue-500">
                        <tr>
                          <th>Mã dịch vụ</th>
                          <th>Tên dịch vụ</th>
                          <!-- <th>Giá</th>
                          <th>Người thực hiện</th> -->
                          <th></th>
                        </tr>
                      </thead>
                      <tbody
                        id="table-service-body"
                        v-if="service.lenght ? false : true"
                      >
                        <tr
                          v-for="(service, index) in showListService"
                          :key="index"
                        >
                          <td>{{ service.IDDV }}</td>
                          <td>{{ service.TenDV }}</td>
                          <!-- <td>{{ service.cost }} VND</td>
                            <td>{{ service.person }}</td> -->
                          <td>
                            <button
                              class="bg-green-500 p-1 rounded text-white"
                              @click="handleChoose(service)"
                            >
                              <!-- @click="deleteRow(index, service)" -->
                              Chọn
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div class="flex justify-end mt-5">
                      <input type="text" placeholder="" readonly />
                      <button
                        class="bg-blue-500 p-1 rounded text-white"
                        @click="handleSubmit()"
                      >
                        Chỉ định
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="relative px-4 min-h-screen md:flex md:items-center md:justify-center" v-if="modalShowImg">
      <div class="bg-black opacity-25 w-full h-full absolute z-10 inset-0"></div>
      <div class="bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative">
        <div v-for="(img, index) in getImgCDDV.data" :key="index">
          <a :href="`data:image/png;base64,${img.img}`" target="_blank" @click="nextPageViewImage(img.img)">
            <figure class="zoom" :style="'background-image:'+ 'url(data:image/png;base64,'+img.img+')'" onmousemove='zoom(event)'>
              <img :src="'data:image/png;base64,'+img.img" :data-zoom="'data:image/png;base64,'+img.img" alt="img">
            </figure>
          </a>
        </div>
        <div class="text-center md:text-right mt-4 md:flex md:justify-end">
          <button class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4
            md:mt-0 md:order-1" @click="openShowModalImg()">Cancel</button>
        </div>
      </div>
    </div> -->
    <div>
      <Loadding :timeShow="2000" />
      <!-- <Loadding :isShowLoadding="true" v-if="isShowLoadding"/> -->
    </div>
  </div>
</template>

<script>
import Loadding from "@/components/loading/loadding";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      showModal: false,
      isModalActive: true,
      isModalTranslate: false,
      doctorAccount: null,
      selectedService: "",
      idPhongKham: "",
      infoDoctor: null,
      serviceChoose: null,
      noteDoctor: "",
      modalShowImg: false,
      idStatusDoc: 1,
      services: [
        {
          id: 1,
          name: "X-Quang",
          cost: 500000,
          person: "Huy Quần Hoa Siêu cấp vjpro",
        },
        {
          id: 2,
          name: "CT",
          cost: 1000000,
          person: "Huy Quần Hoa Siêu cấp vjpro",
        },
      ],
      service: [],
      patientInfo: {
        ID: null,
        MSBH: null,
        dob: null,
        email: null,
        fullname: null,
        gender: "",
        phone: null,
        quequan: "",
        patientCD: null,
        idCD_DV: null,
      },
      chuanDoanObj: {
        chuandoanText: "",
        idCD_DV: null,
        note: "",
      },
      newFilterPatient: [],
      // isShowLoadding: false
    };
  },
  components: {
    Loadding,
  },
  computed: {
    ...mapGetters("loadding", ["getterShowLoadding"]),
    ...mapGetters("login", ["getAccountLogin"]),
    ...mapGetters("room", ["getListRoom"]),
    ...mapGetters("chi-dinh", [
      "getterListChiDinh",
      "getterCDService",
      "GetIDCD_DV_PATIENT",
    ]),
    ...mapGetters("patient", ["getPatientSearch"]),
    ...mapGetters("service", ["getListService"]),
    ...mapGetters("image", ["getImgCDDV"]),

    showLoadding() {
      console.log("showloadding", this.getterShowLoadding);
      return this.getterShowLoadding;
    },

    accountDoctor() {
      this.doctorAccount = this.getAccountLogin;
      return this.getAccountLogin;
    },

    showListRoom() {
      return this.getListRoom;
    },

    // showListCD() {
    //   console.log('getterListChiDinh' ,this.getterListChiDinh)

    //   return newFilterPatient
    // },

    showListService() {
      console.log("getListService", this.getListService);
      return this.getListService;
    },
  },
  methods: {
    ...mapActions("room", ["FETCH_LIST_ROOM"]),
    ...mapActions("doctor", ["getDoctorId"]),
    ...mapActions("chi-dinh", [
      "getAllChiDinhFlowDoc",
      "addChiDinhService",
      "FETCH_IDCD_DV_BY_IDBN",
    ]),
    ...mapActions("patient", ["getPatientFlowId", "updatePatientStatus"]),
    ...mapActions("service", ["FETCH_ALL_SERVICE"]),
    ...mapActions("chuan-doan", ["ADD_CHUAN_DOAN"]),
    ...mapActions("image", ["FETCH_IMAGE_BY_IDCD_DV"]),

    openModal(val) {
      if (val) {
        this.showModal = val;
        setTimeout(() => {
          this.isModalActive = false;
        }, 100);
      } else {
        this.isModalTranslate = true;
        setTimeout(() => {
          this.isModalActive = true;
          this.isModalTranslate = false;
        }, 100);
        setTimeout(() => (this.showModal = val), 300);
      }
    },
    currentDate() {
      const current = new Date();
      const date = `${current.getFullYear()}-${
        current.getMonth() + 1
      }-${current.getDate()}`;
      return date;
    },

    currentDatetime() {
      const current = new Date();
      const date = `${current.getFullYear()}-${
        current.getMonth() + 1
      }-${current.getDate()} ${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}.${current.getMilliseconds()}`;
      return date;
    },
    addNewService(selectedService) {
      this.service.push({
        id: selectedService.id,
        name: selectedService.name,
        cost: selectedService.cost,
        person: selectedService.person,
      });
    },
    deleteRow(index, service) {
      const idx = this.service.indexOf(service);
      console.log(idx, index);
      if (idx > -1) {
        this.service.splice(idx, 1);
      }
    },

    async handleChooseRoom() {
      this.newFilterPatient = [];
      let fetchCD = {
        pIDBS: this.infoDoctor.id,
        pID_PhongKham: this.idPhongKham,
      };
      await this.getAllChiDinhFlowDoc(fetchCD);
      for (const patient of this.getterListChiDinh) {
        if (patient.TrangThai == this.idStatusDoc) {
          this.newFilterPatient.push(patient);
        }
      }
      console.log("Testtttt", this.idStatusDoc);
    },

    async handleShowRooms() {
      await this.FETCH_LIST_ROOM();
    },

    async handleShowListService() {
      await this.FETCH_ALL_SERVICE();
    },

    handleSetInforDoc() {
      const accLogin = JSON.parse(localStorage.getItem("accountLoginSuccess"));
      this.infoDoctor = accLogin;
      console.log("DEbuggggg123", this.infoDoctor);
    },

    async handleChoosePatient(idPatient, patientCD) {
      try {
      // this.isShowLoadding = true
      await this.FETCH_IDCD_DV_BY_IDBN(idPatient)
      console.log("DEBUGG 123 IDCDDV", this.GetIDCD_DV_PATIENT)
      const str = this.GetIDCD_DV_PATIENT.IDCDDV
      const res = str.split(",")
      const ele = res[res.length - 1]
      console.log("ádjqwiuehqwuihqwuie", ele)
      // Handle get image
      // for (const element of res) {
      //   try {
      //     const ID_CD_DV = element
          let obj = {
            pIDCD_DV: ele
          }
          await this.FETCH_IMAGE_BY_IDCD_DV(obj)
          localStorage.setItem("imgBase64", JSON.stringify(this.getImgCDDV.data[0].img))
          console.log("ádjqwiuehqwuihqwuie", ele)

      //   } catch {}
      // }
      } catch (e) {
        }
      let infoSearch = {
        ID: idPatient,
      };
      await this.getPatientFlowId(infoSearch);
      await this.$store.dispatch("loadding/showLoaddingVal", false);
      console.log("Debug", this.getPatientSearch);
      console.log("imggg", this.getImgCDDV.data);
      if (
        this.getPatientSearch === null ||
        this.getPatientSearch == undefined
      ) {
        // this.setRandomUserPass()
        this.patientInfo.ID = null;
        this.patientInfo.MSBH = "";
        this.patientInfo.dob = "";
        this.patientInfo.email = "";
        this.patientInfo.fullname = "";
        this.patientInfo.gender = "";
        this.patientInfo.phone = "";
        this.patientInfo.quequan = "";
        this.hapatient = true;
        this.isActive = false;
        this.showDomGender = true;
      } else {
        let patientInfo = this.getPatientSearch;
        this.patientInfo = patientInfo;
        this.patientInfo.ID = patientInfo.ID;
        this.patientInfo.MSBH = patientInfo.MSBH;
        this.patientInfo.dob = patientInfo.dob;
        this.patientInfo.email = patientInfo.email;
        this.patientInfo.gender = patientInfo.gender;
        this.patientInfo.phone = patientInfo.phone;
        this.patientInfo.quequan = patientInfo.quequan;
        this.patientCD = patientCD;
        this.hapatient = true;
        this.isActive = false;
        this.showDomGender = false;
      }
    },

    nextPageViewImage(imgBase) {
      localStorage.setItem("imgBase64", JSON.stringify(this.getImgCDDV.data[0].img));
    },

    handleChoose(ser) {
      console.log("DEBUGGG", ser);
      this.serviceChoose = ser;
    },

    async handleSubmit() {
      let obj = {
        pIDCD: this.patientCD.IDCD,
        pIDDV: this.serviceChoose.IDDV,
        pIDTT: this.patientCD.TrangThai,
        pNgayChiDinh: this.currentDate(),
        GhiChu: this.noteDoctor,
        TimeNow: this.currentDatetime() + "000",
      };
      let objChangeStatus = {
        pIDCD: this.patientCD.IDCD,
        pMSBN: this.patientCD.MSBN,
        pIDBS: this.patientCD.IDBS,
        pIDPK: this.patientCD.ID_PhongKham,
        pTT: 2,
      };
      console.log("Insert chi dinh service", this.patientCD);
      await this.addChiDinhService(obj);
      await this.updatePatientStatus(objChangeStatus);
      this.chuanDoanObj.idCD_DV = this.getterCDService.id;
      localStorage.setItem(
        "pID_CD_DV",
        JSON.stringify(this.getterCDService.id)
      );

      alert("Submit chỉnh định dịch vụ thành công!");
    },

    async handleSubmitChuanDoan() {
      let objChuanDoan = {
        chuandoanText: this.chuanDoanObj.chuandoanText,
        idCD_DV: this.chuanDoanObj.idCD_DV,
        note: this.chuanDoanObj.note,
      };
      await this.ADD_CHUAN_DOAN(objChuanDoan);
      alert("Submit chuẩn đoán thành công!");
    },

    logOut() {
      localStorage.removeItem("accountLoginSuccess");
      this.$router.push({ path: "/" });
    },

    // openShowModalImg() {
    //   // this.modalShowImg = !this.modalShowImg
    //   this.$router.push({ path: "/image" });
    // },

    // zoom(e){
    //   var zoomer = e.currentTarget;
    //   e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
    //   e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
    //   x = offsetX/zoomer.offsetWidth*100
    //   y = offsetY/zoomer.offsetHeight*100
    //   zoomer.style.backgroundPosition = x + '% ' + y + '%';
    // }
  },

  async mounted() {
    // this.zoom()
    this.handleShowRooms();
    this.handleShowListService();
    const accLogin = JSON.parse(localStorage.getItem("accountLoginSuccess"));
    if (accLogin == undefined || accLogin == null) {
      this.$router.push({ path: "/" });
      alert("Làm ơn đăng nhập vào hệ thống - CẢM ƠN!");
    }
    await this.handleSetInforDoc();
    switch (accLogin.user_type) {
      case "PATIENT":
        alert(
          "Bạn không phải là Bác Sĩ - Bệnh nhân nên vào trang /patient - CẢM ƠN!"
        );
        this.$router.push({ path: "/patient" });
        break;
      case "DOCTOR":
        break;
      case "ADMIN":
        break;
    }
  },
};
</script>
<style lang="scss" scoped>
tbody tr:hover {
  cursor: pointer;
  background: #71bcf5;
}

.tabset > input[type="radio"] {
  position: absolute;
  left: -200vw;
}

.tabset .tab-panel {
  display: none;
}

.tabset > input:first-child:checked ~ .tab-panels > .tab-panel:first-child,
.tabset > input:nth-child(3):checked ~ .tab-panels > .tab-panel:nth-child(2),
.tabset > input:nth-child(5):checked ~ .tab-panels > .tab-panel:nth-child(3),
.tabset > input:nth-child(7):checked ~ .tab-panels > .tab-panel:nth-child(4),
.tabset > input:nth-child(9):checked ~ .tab-panels > .tab-panel:nth-child(5),
.tabset > input:nth-child(11):checked ~ .tab-panels > .tab-panel:nth-child(6) {
  display: block;
}

.tabset > label {
  position: relative;
  display: inline-block;
  padding: 15px 15px 25px;
  border: 1px solid transparent;
  border-bottom: 0;
  cursor: pointer;
  font-weight: 600;
}

.tabset > label::after {
  content: "";
  position: absolute;
  left: 15px;
  bottom: 10px;
  width: 22px;
  height: 4px;
  background: #8d8d8d;
}

.tabset > label:hover,
.tabset > input:focus + label {
  color: #06c;
}

.tabset > label:hover::after,
.tabset > input:focus + label::after,
.tabset > input:checked + label::after {
  background: #06c;
}

.tabset > input:checked + label {
  border-color: #ccc;
  border-bottom: 1px solid #fff;
  margin-bottom: -1px;
}

.tab-panel {
  border-top: 1px solid #ccc;
}

/*
 Demo purposes only
*/
*,
*:before,
*:after {
  box-sizing: border-box;
}
textarea {
  resize: none; /* user can resize vertically, but width is fixed */
}

.table-scroll {
  /*width:100%; */
  display: block;
  empty-cells: show;
}

.table-scroll thead {
  background-color: #306fe2;
  position: relative;
  display: block;
  width: 100%;
  overflow-y: scroll;
}

.table-scroll tbody {
  /* Position */
  display: block;
  position: relative;
  width: 100%;
  overflow-y: scroll;
  /* Decoration */
  border-top: 1px solid rgba(0, 0, 0, 0.2);
}

.table-scroll tr {
  width: 100%;
  display: flex;
}

.table-scroll td,
.table-scroll th {
  flex-basis: 100%;
  flex-grow: 2;
  display: block;
  padding: 1rem;
  text-align: left;
}

/* Other options */

.table-scroll.small-first-col td:first-child,
.table-scroll.small-first-col th:first-child {
  flex-basis: 20%;
  flex-grow: 1;
}

.body-half-screen {
  height: 70vh;
}

.small-col {
  flex-basis: 10%;
}

figure.zoom {
  & img:hover {
    opacity: 0;
  }
  img {
    transition: opacity 0.5s;
    display: block;
    width: 100%;
  }
  background-position: 50% 50%;
  position: relative;
  width: 500px;
  overflow: hidden;
  cursor: zoom-in;
}
</style>
