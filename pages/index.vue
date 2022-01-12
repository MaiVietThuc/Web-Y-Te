<template>
  <div>
    <!-- <div v-if="!showLoadding" class="flex h-screen cursor-pointer text-blue-50">
      <div class="fly">
        <img src="../assets/img/hospital-svgrepo-com.svg" alt="hospital" />
      </div>
      <div
        id="doctor"
        class="figure w-1/2 content-center transition duration-200 ease-in-out bg-blue-500 transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl"
        @click="handleClick('doctor')"
      >
        <figcaption>
          <span class="p-16">BÁC SĨ</span>
          <img src="../assets/img/doctor-svgrepo-com.svg" alt="patient-img" />
        </figcaption>
      </div>
      <div
        class="figure w-1/2 content-center transition duration-200 ease-in-out bg-gray-900 transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl"
        @click="handleClick('patient')"
      >
        <figcaption>
          <span>BỆNH NHÂN</span>
          <img src="../assets/img/patient-svgrepo-com.svg" alt="patient-img" />
        </figcaption>
      </div>
    </div>
-->
    <div>
      <Loadding :timeShow="2000" />
    </div>
    <div class="home-screen h-screen w-screen ">
      <div>
        <section :class="['banner', { 'banner-move': selected }]">
          <h1 class="fade-in delayed">
            WELCOME TO PHAM THI CHAM HOSPITAL
          </h1>
          <p class="fade-in delayed">
            Bền vững – Tận tâm – Hiện đại
          </p>
          <button
            @click="bannerMove()"
            class="fade-in boder-0 delayed mt-5 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          >
            {{ selected ? "Quay lại" : "Đăng nhập" }}
          </button>
        </section>
        <div
          class="flex flex-col mt-20 h-50 justify-center items-center "
          v-if="selected"
        >
          <div
            class="bg-gray-50 w-72 h-72 opacity-80 shadow-2xl rounded shadow-2xl flex"
          >
            <div class="w-full max-w-xs ">
              <form class="px-8 pt-6 pb-8 mb-4 " >
                <div class="mb-4">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="username"
                  >
                    Tên đăng nhập
                  </label>
                  <input
                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                    id="username"
                    type="text"
                    v-model="dataLogin.username"
                    placeholder="Username" required
                  />
                </div>
                <div class="">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="password"
                  >
                    Mật khẩu
                  </label>
                  <input
                    class="appearance-none border border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none"
                    id="password"
                    type="password"
                    v-model="dataLogin.password"
                    placeholder="************" required
                  />
                  <a
                    class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                    href="#"
                  >
                    Quên mật khẩu?
                  </a>
                </div>
                <div class="flex flex-col-reverse items-center">
                  <button
                  @click="handleClick()"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
                    type="button"
                  >
                    Đăng nhập
                  </button>
                </div>
              </form>
            </div>
          </div>
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
      selected: false,
      dataLogin: {
        username: '',
        password: ''
      },
      account: null,
      accountLocal: [
        {
          username: 'adminlocal',
          password: '123',
          type: 'admin'
        },
        {
          username: 'doctorlocal',
          password: '123',
          type: 'doctor'
        },
        {
          username: 'patientlocal',
          password: '123',
          type: 'patient'
        }
      ]
    };
  },

  components: {
    Loadding,
  },

  computed: {
    ...mapGetters("loadding", ["getterShowLoadding"]),

    showLoadding() {
      console.log("showloadding", this.getterShowLoadding);
      return this.getterShowLoadding;
    },
  },

  methods: {
    ...mapActions("login", ["contentLogin", 'login']),
    bannerMove() {
      this.selected = !this.selected;
    },
    async handleClick() {
      // this.contentLogin(type);
      // this.$router.push({ path: "/form/login" });

      // code local test
      // var accountLocal = JSON.parse(localStorage.getItem("accountLocal"));
      // for (let acc of accountLocal) {
      //   console.log("Debug accountLocal", acc)
      //   if (acc.username == this.dataLogin.username && acc.password == this.dataLogin.password) {
      //     const page = {
      //       admin: 'admin',
      //       doctor: 'doctor',
      //       patient: 'patient'
      //     }
      //     this.$router.push({ path: "/" + page[acc.type] });
      //   }
      // }

      // code logic login
      await this.login(this.dataLogin);
      console.log(this.$store.getters['login/getAccountLogin'])
      const type = this.$store.getters['login/getAccountLogin'].user_type
      const accountLoginSuccess = this.$store.getters['login/getAccountLogin']
      localStorage.setItem("accountLoginSuccess", JSON.stringify(accountLoginSuccess));

      if (type == 'DOCTOR') {
        this.$router.push({path: '/doctor'})
      } else if (type == 'ADMIN') {
        this.$router.push({path: '/admin'})
      } else {
        this.$router.push({path: '/patient'})
      }
    },
    // createAccountLocal() {
    //   localStorage.setItem("accountLocal", JSON.stringify(this.accountLocal));
    // }
  },
  mounted() {
    // this.createAccountLocal()
  }
};
</script>

<style scoped>
* {
  overflow: hidden;
}
.home-screen {
  background-image: url("../assets/img/background.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
/**Banner**/
.banner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 350ms ease-in-out;
  height: 100vh;
}
.banner-move {
  height: 25vh;
}
.banner h1 {
  color: rgb(27, 123, 202);
  font-size: 3rem;
  font-weight: 400;
  text-transform: uppercase;
}
/* make keyframes that tell the start state and the end state of our object */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.fade-in {
  outline: none;
  opacity: 0;
  animation: fadeIn ease-in 1;
  /* make things invisible upon start */
  animation-fill-mode: forwards;
  animation-duration: 1s;
}
.fade-in.delayed {
  animation-delay: 2s;
}
</style>
