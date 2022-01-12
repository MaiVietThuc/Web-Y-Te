<template>
  <div class="form-tiep-nhan">
    <div class="flex justify-between items-center">
    <h2 class="font-bold p-3">TIẾP NHẬN KHÁM BỆNH</h2>
    <div class="w-1/3 flex items-center">
      <input v-model="infoSearch.ID" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 my-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="MSBH / ID">
      <button class="rounded bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white my-3 mr-3" @click="handleCheckPatient()"> Tìm</button>
    </div>
    </div>
    <hr>
    <div v-if="hapatient">
      <h4 class="w-2/3 p-3">Thông tin hành chính</h4>
      <div class="w-full flex p-4">
        <div class="w-1/2 pr-2">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Mã bệnh nhân<span class="text-red-500">*</span>
              </label>
              <input v-model="patientInfo.ID" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Mã bệnh nhân" disabled>
              <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
            </div>

            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Tên bệnh nhân<span class="text-red-500">*</span>
              </label>
              <input v-model="patientInfo.fullname" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Tên bệnh nhân">
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-1/2">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 px-3" for="grid-password">
                CMND/Số điện thoại<span class="text-red-500">*</span>
              </label>
              <div class="flex flex-wrap">
                <div class="w-1/3 pl-3 pr-1">
                  <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="CMND">
                </div>
                <div class="w-2/3 pr-3 pl-1">
                  <input v-model="patientInfo.phone" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Số điện thoại">
                </div>
              </div>
            </div>

            <div class="w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Địa chỉ<span class="text-red-500">*</span>
              </label>
              <input v-model="patientInfo.quequan" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Địa chỉ">
            </div>
          </div>
            <!-- <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-1/2 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                  Thân nhân
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Thân nhân">
              </div>

              <div class="w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                  Số điện thoại
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Số điện thoại">
              </div>
            </div> -->
        </div>

        <div class="w-1/2 pl-2">
          <div class="flex flex-wrap -mx-3 mb-9">
            <div class="w-1/4 px-3" v-if="showDomGender">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Giới tính
              </label>
              <div class="inline-block relative" style="width:10rem;">
                <select v-model="patientInfo.gender" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                  <option
                    v-for="(option, index) in gender" :key="index"
                    :value="option.sex"
                    @click="patientInfo.gender = option.sex"
                    >{{ option.sex }}</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>

            <div class="w-1/4 px-3" v-if="!showDomGender">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Giới tính
              </label>
              <div class="inline-block relative" style="width:10rem;">
                <select v-model="convertGender" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                  <option
                    v-for="(option, index) in gender" :key="index"
                    :value="option.sex"
                    @click="patientInfo.gender = option.sex"
                    >{{ option.sex }}</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>

            <div class="w-1/4 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Ngày sinh
              </label>
              <client-only>
                <date-picker
                  class="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="YYYY-MM-DD"
                  format="yyyy-MM-dd"
                  v-model="patientInfo.dob" />
              </client-only>
              <!-- <input v-model="patientInfo.dob" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Ngày sinh"> -->
            </div>

            <div class="w-1/4 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Quốc tịch
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Quốc tịch">
            </div>

            <div class="w-1/4 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Dân tộc
              </label>
              <div class="inline-block relative" style="width:10rem;">
                <select class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                  <option>Kinh</option>
                  <option>Ba Na</option>
                  <option>Brâu</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-9">
            <div class="w-full flex items-center px-3">
              <div class="w-1/2 pr-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                  Username
                </label>
                <input disabled v-model="patient.username" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Username">
              </div>

              <div class="w-1/2 pl-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                  Password
                </label>
                <input disabled v-model="patient.password" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="password" placeholder="************">
              </div>
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Email
              </label>
              <input v-model="patientInfo.email" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Địa chỉ thân nhân">
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <h4 class="p-3">Thông tin khám chữa bệnh</h4>
    <div class="w-full p-4">
      <div class="flex justify-between">
        <div class="w-1/2 ">
          <div class="w-full pr-2 flex items-center mb-6">
            <div class="w-3/12 pr-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Ngày tiếp nhận
              </label>
              <input disabled v-model="currentDate" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Ngày tiếp nhận">
            </div>

            <div class="w-3/12 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Mã tiếp nhận
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Mã tiếp nhận">
            </div>

            <div class="w-4/12 pl-3 mt-4">
              <input type="checkbox" class="form-checkbox">
              <span class="ml-2">Bệnh nhân được ưu tiên</span>
            </div>
          </div>
          <div class="w-full pr-2 flex items-center">
            <div class="w-1/2 pr-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Mã số bảo hiểm
              </label>
              <input v-model="patientInfo.MSBH" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Mã số bảo hiểm">
            </div>

            <div class="w-1/2 pl-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Ngày cấp
              </label>
              <client-only>
                <date-picker
                  class="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="DD/MM/YYYY"
                  format="dd/MM/yyyy"
                  v-model="date_today" />
              </client-only>
            </div>
          </div>
        </div>

        <div class="w-1/2 px-3">
          <div class="rounded border w-full mx-auto mt-4">
        <!-- Tabs -->
            <ul id="tabs" class="inline-flex pt-2 px-1 w-full border-b">
              <li class="bg-white px-4 text-gray-800 font-semibold py-2 rounded-t border-t border-r border-l -mb-px"><a id="default-tab" href="#first">Chọn phòng khám</a></li>
              <li class="px-4 text-gray-800 font-semibold py-2 rounded-t"><a href="#second">Chọn bác sĩ</a></li>
              <li class="px-4 text-gray-800 font-semibold py-2 rounded-t"><a href="#third">Chọn loại khám</a></li>
              <li class="px-4 text-gray-800 font-semibold py-2 rounded-t"><a href="#fourth"></a></li>
            </ul>

            <!-- Tab Contents -->
            <div id="tab-contents">
              <div id="first" class="p-4 py-12">
                <Loadding2 v-if="showListKind == null || showListKind == undefined" :isActive="isActive"/>
                <div v-if="showListKind !== null || showListKind !== undefined" class="m-auto">
                  <table class="w-full table-collapse">
                    <thead>
                      <tr>
                        <th class="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-grey-light">ID phòng khám</th>
                        <th class="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-grey-light">Phòng khám</th>
                      </tr>
                    </thead>
                    <tbody class="align-baseline" v-for="(room, index) in showListRoom" :key="index">
                      <tr class="group cursor-pointer hover:bg-grey-lightest">
                        <td class="text-sm p-3 border-t border-grey-light whitespace-no-wrap">{{room.ID_PhongKham}}</td>
                        <td class="text-sm p-3 border-t border-grey-light whitespace-no-wrap">{{room.TenPhongKham}}</td>
                        <td class="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
                          <div class="flex items-center mr-4 mb-4">
                            <input :id="'radio'+room.ID_PhongKham" type="radio" name="radio" class="hidden" />
                            <label :for="'radio'+room.ID_PhongKham" class="flex items-center cursor-pointer text-xl">
                              <span class="w-8 h-8 inline-block mr-2 rounded-full border border-grey flex-no-shrink" @click="handleInputRoom(room)"></span>
                            </label>
                          </div>
                        </td>

                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div id="second" class="hidden p-4 py-12">
                <Loadding2 v-if="showListDoctor == null && showListDoctor == undefined" :isActive="isActive"/>
                <div v-if="showListDoctor !== null && showListDoctor !== undefined" class="m-auto">
                  <table class="w-full table-collapse">
                    <thead>
                      <tr>
                        <th class="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-grey-light">ID Bác sĩ</th>
                        <th class="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-grey-light">Tên bác sĩ</th>
                        <th class="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-grey-light">Giới tính</th>
                        <th class="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-grey-light">Năm sinh</th>
                        <th class="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-grey-light">SĐT</th>
                        <th class="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-grey-light">Quê quán</th>
                      </tr>
                    </thead>
                    <tbody class="align-baseline" v-for="(doctor, index) in showListDoctor" :key="index">
                      <tr class="group cursor-pointer hover:bg-grey-lightest">
                        <td class="text-sm p-3 border-t border-grey-light whitespace-no-wrap">{{doctor.IDBS}}</td>
                        <td class="text-sm p-3 border-t border-grey-light whitespace-no-wrap">{{doctor.TenBS}}</td>
                        <td class="text-sm p-3 border-t border-grey-light whitespace-no-wrap">{{doctor.GioiTinh}}</td>
                        <td class="text-sm p-3 border-t border-grey-light whitespace-no-wrap">{{formatDate(doctor.NamSinh)}}</td>
                        <td class="text-sm p-3 border-t border-grey-light whitespace-no-wrap">{{doctor.SDT}}</td>
                        <td class="text-sm p-3 border-t border-grey-light whitespace-no-wrap">{{doctor.QueQuan}}</td>
                        <td class="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
                          <div class="flex items-center mr-4 mb-4">
                            <input :id="'radiobs'+doctor.IDBS" type="radio" name="radio-bs" class="hidden" />
                            <label :for="'radiobs'+doctor.IDBS" class="flex items-center cursor-pointer text-xl">
                              <span class="w-8 h-8 inline-block mr-2 rounded-full border border-grey flex-no-shrink" @click="handleInputDoctor(doctor)"></span>
                            </label>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div id="third" class="hidden p-4 py-12">
                <Loadding2 v-if="showListKind == null || showListKind == undefined" :isActive="isActive"/>

                <div v-if="showListKind !== null || showListKind !== undefined" class="m-auto">
                  <table class="w-full table-collapse">
                    <thead>
                      <tr>
                        <th class="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-grey-light">ID loại khám</th>
                        <th class="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-grey-light">Tên loại khám</th>
                      </tr>
                    </thead>
                    <tbody class="align-baseline" v-for="(kind, index) in showListKind" :key="index">
                      <tr class="group cursor-pointer hover:bg-grey-lightest">
                        <td class="text-sm p-3 border-t border-grey-light whitespace-no-wrap">{{ kind.IDLoaiKham }}</td>
                        <td class="text-sm p-3 border-t border-grey-light whitespace-no-wrap">{{ kind.TenLoaiKham }}</td>
                        <td class="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
                          <div class="flex items-center mr-4 mb-4">
                            <input :id="'radiolk'+kind.IDLoaiKham" type="radio" name="radio-lk" class="hidden" checked />
                            <label :for="'radiolk'+kind.IDLoaiKham" class="flex items-center cursor-pointer text-xl">
                              <span class="w-8 h-8 inline-block mr-2 rounded-full border border-grey flex-no-shrink" @click="handleInputKind(kind)"></span>
                            </label>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="flex justify-end">
                    <button class="rounded bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white " @click="handleAddTN"> Tạo</button>
                  </div>
                </div>
              </div>
              <div id="fourth" class="hidden p-4 py-12">
                <Loadding2 v-if="isloadding" :isActive="isActive"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loadding2 from '@/components/loading/loadding-2'
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      dateFormat: 'MM/DD/YYYY',
      date_today: null,
      date_todaytest: null,
      currentDate: null,
      isloadding: true,
      hapatient: false,
      stt: 1,
      gender: [
        {sex: 'NỮ'},
        {sex: 'NAM'},
        {sex: 'KHÁC'}
      ],
      patientInfo: {
        ID: null,
        username: '',
        password: '',
        MSBH: null,
        dob: null,
        email: null,
        fullname: null,
        gender: '',
        phone: null,
        quequan: ''
      },
      isActive: true,
      showDomGender: false,
      patient: {
        username: '',
        password: ''
      },
      infoSearch: {
        ID: ''
      },
      room: null,
      doctor: null,
      kindObj: null,
      idMSBN: null
    }
  },

  components: {
    Loadding2
  },

  computed: {
    ...mapGetters("room", ["getListRoom"]),
    ...mapGetters("kind", ["getListKind"]),
    ...mapGetters("doctor", ["getterListDoctor"]),
    ...mapGetters("random", ["getPatient"]),
    ...mapGetters("patient", ["getPatientSearch"]),

    showListRoom() {
      return this.getListRoom
    },

    showListKind() {
      return this.getListKind
    },

    showListDoctor() {
      return this.getterListDoctor
    },

    randomUser() {
      return this.getPatient
    },

    convertGender() {
      return this.patientInfo.gender.toUpperCase()
    }

  },

  methods: {
    ...mapActions("room", ["FETCH_LIST_ROOM"]),
    ...mapActions("kind", ["FETCH_LIST_KIND"]),
    ...mapActions("doctor", ["getAllDoctor"]),
    ...mapActions("random", ["FETCH_USERNAME", "FETCH_PASSWORD"]),
    ...mapActions("patient", ["getPatientFlowId", "ADD_PATIENT", "ADD_PATIENT_CD", "getAllPatient"]),
    getCurrentDate() {
      var today = new Date();
      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      const yyyy = today.getFullYear();

      today = yyyy + '-' + mm + '-' + dd;
      this.currentDate = today
    },

    tabPannel() {
      let tabsContainer = document.querySelector("#tabs");

      let tabTogglers = tabsContainer.querySelectorAll("a");
      console.log(tabTogglers);

      tabTogglers.forEach(function(toggler) {
      toggler.addEventListener("click", function(e) {
        e.preventDefault();

        let tabName = this.getAttribute("href");

        let tabContents = document.querySelector("#tab-contents");

        for (let i = 0; i < tabContents.children.length; i++) {
          tabTogglers[i].parentElement.classList.remove("border-t", "border-r", "border-l", "-mb-px", "bg-white");  tabContents.children[i].classList.remove("hidden");
          if ("#" + tabContents.children[i].id === tabName) {
            continue;
          }
          tabContents.children[i].classList.add("hidden");
        }
        e.target.parentElement.classList.add("border-t", "border-r", "border-l", "-mb-px", "bg-white");
      });
      });

      document.getElementById("default-tab").click();

    },

    async handleCheckPatient() {
      this.hapatient = true
      this.isActive = false
      try {
        await this.getPatientFlowId(this.infoSearch)
      } catch (e) {
      }
      if (this.getPatientSearch === null || this.getPatientSearch == undefined) {
        // this.setRandomUserPass()
        this.idMSBN = await this.getAllPatient('tiep-nhan')
        console.log('getallPatient - ', this.idMSBN.slice(-1)[0] )
        this.patientInfo.ID = Math.trunc(this.idMSBN.slice(-1)[0].MSBH) + 1
        console.log("Debug", this.randomUser)

        this.patientInfo.ID = this.patientInfo.ID + ""
        this.patient.username = this.randomUser.username
        this.patient.password = this.randomUser.password
        this.patientInfo.MSBH = ''
        this.patientInfo.dob = ''
        this.patientInfo.email = ''
        this.patientInfo.fullname = ''
        this.patientInfo.gender = ''
        this.patientInfo.phone = ''
        this.patientInfo.quequan = ''
        this.hapatient = true
        this.isActive = false
        this.showDomGender = true
        alert("Bệnh nhân chưa có trong hệ thống!")
      } else {
        let patientInfo = this.getPatientSearch
        console.log("DEBG patient info", this.getPatientSearch)
        alert(`Bệnh nhân ${patientInfo.fullname} đã có trong hệ thống!`)
        this.patientInfo = patientInfo
        this.patientInfo.ID = patientInfo.ID
        this.patient.username = 'Username đã bị ẩn'
        this.patient.password = '*************'
        this.patientInfo.MSBH = patientInfo.MSBH
        this.patientInfo.dob = patientInfo.dob
        this.patientInfo.email = patientInfo.email
        this.patientInfo.gender = patientInfo.gender
        this.patientInfo.phone = patientInfo.phone
        this.patientInfo.quequan = patientInfo.quequan
        this.hapatient = true
        this.isActive = false
        this.showDomGender = false
      }
    },

    async handleShowRooms() {
      await this.FETCH_LIST_ROOM()
    },

    async handleShowKind() {
      await this.FETCH_LIST_KIND()
    },

    async handleShowDoctor() {
      await this.getAllDoctor()
    },

    async handleShowUername() {
      await this.FETCH_USERNAME()
    },

    async handleShowPassword() {
      await this.FETCH_PASSWORD()
    },

    async handleConvertGender(gender) {
      return gender.toUpperCase()
    },

    formatDate(str) {
      const date = new Date(str),
        mnth = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
      return [date.getFullYear(), mnth, day].join("-");
    },

    // convertDate(str) {
    //   var date = new Date(str),
    //     mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    //     day = ("0" + date.getDate()).slice(-2);
    //   return [date.getFullYear(), mnth, day].join("-");
    // },

    convertGenderText(gender) {
      return gender.toUpperCase()
    },

    handleFormatGender(gender) {
      switch(gender.toLowerCase()) {
        case 'nữ':
          return 1
        case 'nam':
          return 2
        default:
          return 3
      }
    },

    // setRandomUserPass() {
    //   if (this.getPatientSearch === null) {
    //     this.patient.username = this.getPatient.username
    //     this.patient.password = this.getPatient.password
    //   }
    // },

    async handleAddTN() {
      if (this.getPatientSearch === null || this.getPatientSearch == undefined) {
        let patientUser = {
          username: this.patient.username,
          password: this.patient.password,
          grant : "PATIENT",
          cusname: this.patientInfo.fullname,
          sdt: this.patientInfo.phone,
          email: this.patientInfo.email,
          sex: this.patientInfo.gender,
          dob: this.formatDate(this.patientInfo.dob),
          quequan: this.patientInfo.quequan
        }
        let patientCD = {
          pMSBN: this.patientInfo.ID,
          pIDBS: this.doctor.IDBS,
          pIDPK: this.room.ID_PhongKham,
          pIDLK: this.kindObj.IDLoaiKham,
          pTT: "1",
          pDate: this.currentDate
        }
        await this.ADD_PATIENT(patientUser)
        await this.ADD_PATIENT_CD(patientCD)
        alert('Thêm bệnh nhân thành công!')
      } else {
        let patientCD = {
          pMSBN: this.patientInfo.ID,
          pIDBS: this.doctor.IDBS,
          pIDPK: this.room.ID_PhongKham,
          pIDLK: this.kindObj.IDLoaiKham,
          pTT: "1",
          pDate: this.currentDate
        }
        await this.ADD_PATIENT_CD(patientCD)
        alert('Chỉ định bệnh nhân thành công!')
      }
    },

    handleInputRoom(room) {
      this.room = room
    },

    handleInputKind(kind) {
      this.kindObj = kind
      console.log("Kind - ", kind)
    },

    handleInputDoctor(doctor) {
      this.doctor = doctor
      console.log("Doctor - ", doctor)
    },
  },

  mounted() {
    this.getCurrentDate()
    this.tabPannel()
    this.handleShowRooms()
    this.handleShowKind()
    this.handleShowDoctor()
    this.handleShowUername()
    this.handleShowPassword()
    // this.setRandomUserPass()
  },
}
</script>

<style lang="scss">
  .group:hover .group-hover\:visible {
    visibility: visible;
  }
  .vdp-datepicker * {
    background-color: transparent;

    input {
      width: 100%;
      padding-left: 1rem;
      padding-right: 1rem;
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
    }

    &:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
      border-color: rgba(107, 114, 128, var(--tw-border-opacity));
      background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
    }
  }

  input[type="radio"] + label span {
    transition: background .2s,
    transform .2s;
  }

  input[type="radio"] + label span:hover,
  input[type="radio"] + label:hover span{
    transform: scale(1.2);
  }

  input[type="radio"]:checked + label span {
    background-color: #3490DC; //bg-blue
    box-shadow: 0px 0px 0px 2px white inset;
  }

  input[type="radio"]:checked + label{
    color: #3490DC; //text-blue
  }
</style>
