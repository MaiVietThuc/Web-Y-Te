<template>
  <div>
    <div class="lg:flex" v-if="!showLoadding && contentPage">
      <div class="lg:w-1/2 xl:max-w-screen-sm">
        <div
          class="py-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12"
        >
          <div class="cursor-pointer flex items-center">
            <div>
              <svg
                class="w-10 text-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                viewBox="0 0 225 225"
                style="enable-background: new 0 0 225 225"
                xml:space="preserve"
              >
                <style type="text/css">
                  .st0 {
                    fill: none;
                    stroke: currentColor;
                    stroke-width: 20;
                    stroke-linecap: round;
                    stroke-miterlimit: 3;
                  }
                </style>
                <g transform="matrix( 1, 0, 0, 1, 0,0) ">
                  <g>
                    <path
                      id="Layer0_0_1_STROKES"
                      class="st0"
                      d="M173.8,151.5l13.6-13.6 M35.4,89.9l29.1-29 M89.4,34.9v1 M137.4,187.9l-0.6-0.4     M36.6,138.7l0.2-0.2 M56.1,169.1l27.7-27.6 M63.8,111.5l74.3-74.4 M87.1,188.1L187.6,87.6 M110.8,114.5l57.8-57.8"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div
              class="text-2xl text-indigo-800 tracking-wide ml-2 font-semibold"
            >
              Đăng nhập {{LoginContent.title}}
            </div>
          </div>
        </div>
        <div
          class="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl"
        >
          <h2
            class="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl xl:text-bold"
          >
            Đăng nhập
          </h2>
          <div class="mt-12">
            <div>
              <div class="text-sm font-bold text-gray-700 tracking-wide">
                Địa chỉ email
              </div>
              <input
                class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type=""
                placeholder="abc@gmail.com"
                v-model="dataLogin.username"
              />
            </div>
            <div class="mt-8">
              <div class="flex justify-between items-center">
                <div class="text-sm font-bold text-gray-700 tracking-wide">
                  Mật khẩu
                </div>
                <div>
                  
                </div>
              </div>
              <input
                class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type="password"
                placeholder="Nhập mật khẩu"
                v-model="dataLogin.password"
              />
              <a
                    class="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800 cursor-pointer"
                  >
                    Forgot Password?
                  </a>
            </div>
            <div class="mt-10">
              <button
                class="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg"
                @click="handleLogin()"
              >
                Đăng nhập
              </button>
            </div>
            <!-- <div
              class="mt-12 text-sm font-display font-semibold text-gray-700 text-center"
            >
              Don't have an account ?
              <a class="cursor-pointer text-indigo-600 hover:text-indigo-800"
                >Sign up</a
              >
            </div> -->
          </div>
        </div>
      </div>
      <div
        class="hidden lg:flex items-center justify-center bg-indigo-100 flex-1 h-screen"
      >
        <div
          class="max-w-xs transform duration-200 hover:scale-110 cursor-pointer"
        >
        <img v-if="isDoctor == 'doctor'" src="../../../assets/img/Female-Doctor.svg" class="w-96 mx-auto transform scale-150">
        <img v-else src="../../../assets/img/1598942097_chung-s-ng-an-to-n-v-i---i-d-ch-covid-19.png" class="w-96 mx-auto transform scale-150">
        </div>
      </div>
    </div>

    <div>
      <Loadding :timeShow="1000"/>
    </div>
  </div>
</template>

<script>
import Loadding from '@/components/loading/loadding'
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      LoginContent: null,
      dataLogin: {
        username: '',
        password: ''
      },
      account: null,
      isDoctor: null
    }
  },

  components: {
    Loadding,
  },

  methods: {
    async handleLogin() {
      await this.login(this.dataLogin);
     const type = localStorage.getItem('typeAccount')
      if (type == 'doctor') {
        this.$router.push({path: '/doctor'})
      } else {
        this.$router.push({path: '/patient'})
      }
      console.log(this.$store.getters['login/getAccountLogin'])
    },

    ...mapActions('login', ['contentLogin', 'login']),

  },

  computed: {
    ...mapGetters('loadding', ['getterShowLoadding']),
    ...mapGetters('login', ['getContentLogin']),

    showLoadding() {
      //console.log('showloadding', this.getterShowLoadding)
      return this.getterShowLoadding
    },

    contentPage() {
      this.LoginContent = this.getContentLogin
      //console.log('contentPage', this.getContentLogin)
      return this.getContentLogin
    }
  },

  mounted() {
    const type = localStorage.getItem('typeAccount')
    this.isDoctor = type
    this.contentLogin(type)
  },
}
</script>

