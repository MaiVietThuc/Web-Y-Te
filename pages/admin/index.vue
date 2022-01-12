<template>
  <div>
    <div v-if="!showLoadding" class="flex">
      <!--DASHBOARD-->
      <div
        class="
          h-screen
          w-1/6
          justify-items-start
          md:justify-items-center
          shadow-lg
        "
      >
        <div class="h-screen shadow-lg">
          <a
            class="flex flex-col items-center h-full overflow-hidden shadow-lg"
          >
            <a class="flex items-center px-3 mt-3" href="#">
              <svg
                class="w-10 h-10 mr-3"
                id="Layer_1"
                enable-background="new 0 0 510 510"
                height="512"
                viewBox="0 0 510 510"
                width="512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="XMLID_2283_">
                  <path
                    id="XMLID_2282_"
                    d="m212.293 0c-3.064 18.38-9.476 56.852-11.262 67.57-14.026 4.031-27.548 9.636-40.382 16.75-15.112-10.795-46.863-33.474-55.763-39.831-7.341 7.341-53.036 53.036-60.397 60.397 10.795 15.113 33.474 46.863 39.831 55.763-7.104 12.816-12.713 26.336-16.75 40.382-18.38 3.063-56.852 9.476-67.57 11.262v85.414c18.38 3.064 56.852 9.476 67.57 11.262 4.031 14.025 9.636 27.547 16.75 40.382-10.795 15.112-33.474 46.862-39.831 55.763 7.341 7.341 53.036 53.037 60.397 60.397 15.112-10.795 46.863-33.474 55.763-39.831 12.816 7.105 26.333 12.713 40.382 16.75 3.063 18.381 9.475 56.853 11.262 67.57h42.707l15-255-15-255c-14.939 0-27.769 0-42.707 0z"
                    fill="#a7cafc"
                  />
                  <path
                    id="XMLID_2280_"
                    d="m308.969 442.43c14.026-4.03 27.548-9.636 40.382-16.75 15.112 10.795 46.863 33.474 55.763 39.831l60.397-60.397c-10.795-15.112-33.474-46.862-39.831-55.763 7.104-12.815 12.713-26.335 16.75-40.382 18.381-3.064 56.853-9.476 67.57-11.262 0-10.382 0-75.004 0-85.414-18.381-3.063-56.853-9.476-67.57-11.262-4.031-14.027-9.635-27.547-16.75-40.382 10.795-15.112 33.474-46.863 39.831-55.763-7.341-7.341-53.037-53.037-60.397-60.397-15.112 10.795-46.863 33.474-55.763 39.831-12.815-7.104-26.335-12.713-40.382-16.75-3.064-18.38-9.476-56.852-11.262-67.57-14.939 0-27.769 0-42.707 0v510h42.707c3.063-18.381 9.476-56.853 11.262-67.57z"
                    fill="#8493fb"
                  />
                  <path
                    id="XMLID_2279_"
                    d="m127.5 255c0 70.302 57.194 127.5 127.5 127.5l15-127.5-15-127.5c-70.302 0-127.5 57.194-127.5 127.5z"
                    fill="#e2dff4"
                  />
                  <path
                    id="XMLID_2278_"
                    d="m382.5 255c0-70.302-57.194-127.5-127.5-127.5v255c70.302 0 127.5-57.194 127.5-127.5z"
                    fill="#bebcdd"
                  />
                  <path
                    id="XMLID_2272_"
                    d="m157.5 255c0 25.87 10.194 50.353 28.295 68.609l84.205-68.609-15-97.5c-53.76 0-97.5 43.737-97.5 97.5z"
                    fill="#f9f9f9"
                  />
                  <path
                    id="XMLID_2271_"
                    d="m323.911 186.089c-17.655-17.654-42.03-28.589-68.911-28.589v97.5l69.205 68.609c37.819-38.145 37.738-99.487-.294-137.52z"
                    fill="#e2dff4"
                  />
                  <path
                    id="XMLID_2268_"
                    d="m185.795 323.609c18.273 18.43 42.996 28.891 69.205 28.891 0-9.379 10-37.5 10-37.5s-10-31.2-10-37.5c-30.693 0-57.7 18.651-69.205 46.109z"
                    fill="#ecbd2c"
                  />
                  <path
                    id="XMLID_2239_"
                    d="m255 277.5v75c26.162 0 50.899-10.428 69.205-28.891-11.487-27.415-38.465-46.109-69.205-46.109z"
                    fill="#e58f22"
                  />
                  <path
                    id="XMLID_2186_"
                    d="m202.5 255c0 28.947 23.55 52.5 52.5 52.5l15-52.5-15-52.5c-28.948 0-52.5 23.55-52.5 52.5z"
                    fill="#edbba7"
                  />
                  <path
                    id="XMLID_2155_"
                    d="m307.5 255c0-28.947-23.55-52.5-52.5-52.5v105c28.947 0 52.5-23.551 52.5-52.5z"
                    fill="#e8a38b"
                  />
                </g>
              </svg>
              <span class="nunito text-gray-700">a</span>
              <span class="nunito text-gray-700">d</span>
              <span class="nunito text-indigo-700">m</span>
              <span class="nunito text-indigo-700">i</span>
              <span class="nunito text-indigo-700">n</span>
            </a>
            <div class="w-full px-2">
              <div class="flex flex-col items-center w-full mt-3">
                <a
                  class="
                    flex
                    items-center
                    w-full
                    h-12
                    px-3
                    mt-2
                    rounded-lg
                    hover:bg-indigo-700
                    hover:shadow-md
                    hover:text-gray-50
                    hover:fill-current
                    hover:text-gray-50
                  "
                  href="#"
                  @click="handlePage('main')"
                >
                  <svg
                    class="w-6 h-6 stroke-current"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <span class="ml-2 text-sm font-medium">Bảng điều khiển</span>
                </a>
                <a
                  class="
                    flex
                    items-center
                    w-full
                    h-12
                    px-3
                    mt-2
                    rounded-lg
                    hover:bg-indigo-700
                    hover:shadow-md
                    hover:text-gray-50
                    fill-svg
                  "
                  href="#"
                  @click="handlePage('patient')"
                >
                  <svg
                    class="w-6 h-6 stroke-current"
                    viewBox="0 -28 512.001 512"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm-112.96875-425.523437c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0"
                    />
                  </svg>
                  <span class="ml-2 text-sm font-medium">Bệnh nhân</span>
                </a>
                <a
                  class="
                    flex
                    items-center
                    w-full
                    h-12
                    px-3
                    mt-2
                    hover:bg-indigo-700
                    rounded-lg
                    hover:shadow-md
                    hover:text-gray-50
                    fill-svg
                  "
                  href="#"
                  @click="handlePage('doctor')"
                >
                  <svg
                    class="w-6 h-6 stroke-current"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 480.007 480.007"
                    style="enable-background: new 0 0 480.007 480.007"
                    xml:space="preserve"
                  >
                    <g>
                      <g>
                        <path
                          d="M479.426,267.581c-3.547-24.574-22.852-43.879-47.426-47.426v-14.544c0-40.128-30.504-72.8-68-72.8
			c-36.416,0-66.904,31.68-68,70.624h0.464l-0.464,0.08v157.656c0,50.4-37.68,91.328-84,91.328s-84-40.984-84-91.328v-13.656
			c11.6,0,24-8.408,24-32v-20.12c51.344-13.128,88-57.216,88-107.2v-16.68h-16l-0.336-104.12
			c-0.116-19.273-13.946-35.729-32.912-39.16c-4.091-12.533-17.568-19.377-30.102-15.285c-12.533,4.091-19.377,17.568-15.285,30.102
			c4.091,12.533,17.568,19.377,30.102,15.285c6.711-2.191,12.108-7.24,14.741-13.79c10.249,2.916,17.349,12.24,17.432,22.896
			L208,171.515h-16v16.912c-0.638,27.827-19.294,52.009-46.048,59.688c-14.315,4.542-29.685,4.542-44,0
			C75.229,240.41,56.615,216.232,56,188.427v-16.912H32v-104c0.046-10.813,7.318-20.261,17.76-23.072
			c4.869,12.395,18.864,18.495,31.259,13.626S99.514,39.204,94.645,26.81S75.78,8.315,63.386,13.184
			c-6.716,2.639-11.898,8.146-14.122,15.011C30.091,31.471,16.053,48.064,16,67.515v104H0v16.64c0,50.04,36.68,94.144,88,107.24
			v20.12c0,23.592,12.4,32,24,32v13.656c0,59.2,44.856,107.328,100,107.328s100-48.184,100-107.328V203.899
			c0.8-30.36,24.144-55.064,52-55.064c28.672,0,52,25.472,52,56.8v14.52c-30.611,4.418-51.844,32.815-47.426,63.426
			s32.815,51.844,63.426,47.426S483.844,298.191,479.426,267.581z M168,43.515c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8
			S172.418,43.515,168,43.515z M72,27.515c4.418,0,8,3.582,8,8s-3.582,8-8,8s-8-3.582-8-8S67.582,27.515,72,27.515z M16,188.155
			v-0.64h24v0.912c0.6,34.771,23.733,65.116,57.104,74.904c17.487,5.537,36.257,5.537,53.744,0
			c33.387-9.775,56.541-40.121,57.152-74.904v-0.912h16v0.64c0,44.504-34.304,83.664-81.6,93.136
			c-11.106,2.224-22.482,2.782-33.752,1.656c-3.71-0.36-7.398-0.918-11.048-1.672C50.304,271.819,16,232.659,16,188.155z
			 M112,331.515c-7.2,0-8-11.2-8-16v-16.976c0.64,0.08,1.296,0.112,1.944,0.176c0.8,0.088,1.6,0.152,2.4,0.224
			c3.784,0.336,7.6,0.56,11.448,0.568h0.4c3.84,0,7.648-0.232,11.408-0.568c0.8-0.072,1.648-0.136,2.472-0.224
			c0.632-0.072,1.288-0.096,1.92-0.176v16.976c0,4.8-0.8,16-8,16H112z M424,315.515c-22.091,0-40-17.909-40-40
			c0-22.091,17.909-40,40-40c22.091,0,40,17.909,40,40C463.974,297.596,446.08,315.489,424,315.515z"
                        />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path
                          d="M424,251.515c-13.255,0-24,10.745-24,24s10.745,24,24,24s24-10.745,24-24S437.255,251.515,424,251.515z M424,283.515
			c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S428.418,283.515,424,283.515z"
                        />
                      </g>
                    </g>
                  </svg>
                  <span class="ml-2 text-sm font-medium">Bác sĩ</span>
                </a>
              </div>
              <div
                class="flex flex-col items-center w-full mt-2"
              >
                <a
                  class="
                    flex
                    items-center
                    w-full
                    h-12
                    px-3
                    mt-2
                    rounded-lg
                    hover:bg-indigo-700
                    hover:shadow-md
                    hover:text-gray-50
                    fill-svg
                  "
                  href="#"
                >
                  <svg
                    class="w-6 h-6 stroke-current"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                  <span class="ml-2 text-sm font-medium">Cài đặt</span>
                </a>
                <a
                  class="
                    relative
                    flex
                    items-center
                    w-full
                    h-12
                    px-3
                    mt-2
                    rounded-lg
                    hover:bg-indigo-700
                    hover:shadow-md
                    hover:text-gray-50
                  "
                  href="#"
                  @click="handlePage('message')"
                >
                  <svg
                    class="w-6 h-6 stroke-current"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                  <span class="ml-2 text-sm font-medium">Tin nhắn</span>
                  <span
                    class="
                      absolute
                      top-0
                      left-0
                      w-2
                      h-2
                      mt-2
                      ml-2
                      rounded-lg-full
                    "
                  ></span>
                </a>
                <a
                  class="
                    flex
                    items-center
                    w-full
                    h-12
                    px-3
                    mt-2
                    rounded-lg
                    hover:bg-indigo-700
                    hover:shadow-md
                    hover:text-gray-50
                    fill-svg
                  "
                  href="#"
                >
                  <svg
                    class="w-6 h-6 stroke-current"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    style="enable-background: new 0 0 512 512"
                    xml:space="preserve"
                  >
                    <g>
                      <g>
                        <path
                          d="M256,0C114.497,0,0,114.507,0,256c0,141.503,114.507,256,256,256c141.503,0,256-114.507,256-256
			C512,114.497,397.492,0,256,0z M256,472c-119.393,0-216-96.615-216-216c0-119.393,96.615-216,216-216
			c119.393,0,216,96.615,216,216C472,375.393,375.384,472,256,472z"
                        />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path
                          d="M256,214.33c-11.046,0-20,8.954-20,20v128.793c0,11.046,8.954,20,20,20s20-8.955,20-20.001V234.33
			C276,223.284,267.046,214.33,256,214.33z"
                        />
                      </g>
                    </g>
                    <g>
                      <g>
                        <circle cx="256" cy="162.84" r="27" />
                      </g>
                    </g>
                  </svg>
                  <span class="ml-2 text-sm font-medium">Thông tin</span>
                </a>
              </div>
            </div>
            <a
              class="
                flex
                items-center
                justify-center
                w-full
                h-16
                mt-auto
                hover:bg-indigo-700
                hover:text-gray-50
              "
              href="#"
              @click="logOut()"
            >
              <svg
                width="30px"
                height="40px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512.001 512.001"
                style="enable-background: new 0 0 512.001 512.001"
                xml:space="preserve"
              >
                <linearGradient
                  id="SVGID_1_"
                  gradientUnits="userSpaceOnUse"
                  x1="41.0006"
                  y1="257.9995"
                  x2="471.0004"
                  y2="257.9995"
                  gradientTransform="matrix(1 0 0 -1 0 514)"
                >
                  <stop offset="0" style="stop-color: #80d8ff" />
                  <stop offset="0.16" style="stop-color: #88d1ff" />
                  <stop offset="0.413" style="stop-color: #9fbefe" />
                  <stop offset="0.725" style="stop-color: #c4a0fd" />
                  <stop offset="1" style="stop-color: #ea80fc" />
                </linearGradient>
                <path
                  style="fill: url(#SVGID_1_)"
                  d="M380.234,410.812v51.811c0,27.227-22.396,49.378-49.923,49.378H90.924
	C63.397,512,41.001,489.849,41.001,462.622V49.378C41.001,22.151,63.397,0,90.924,0h239.387c27.527,0,49.923,22.151,49.923,49.378
	v51.811c0,11.046-8.954,20-20,20s-20-8.954-20-20V49.378c0-5.171-4.451-9.378-9.923-9.378H90.924c-5.472,0-9.923,4.207-9.923,9.378
	v413.244c0,5.171,4.451,9.378,9.923,9.378h239.387c5.472,0,9.923-4.207,9.923-9.378v-51.811c0-11.046,8.954-20,20-20
	S380.234,399.766,380.234,410.812z M464.964,241.682L358.522,137.881c-7.908-7.713-20.571-7.554-28.281,0.355
	c-7.712,7.907-7.553,20.57,0.355,28.281L401.846,236H210.617c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h191.229
	l-71.25,69.482c-7.908,7.711-8.067,20.374-0.355,28.281c7.709,7.907,20.373,8.07,28.281,0.355l106.442-103.801
	C473.062,262.436,472.964,249.469,464.964,241.682z"
                />
              </svg>
              <span class="ml-2 text-sm font-medium">Đăng xuất</span>
            </a>
          </a>

          <!-- overlay -->
          <div
            id="modal_overlay"
            class="
              absolute
              inset-0
              bg-black bg-opacity-30
              h-screen
              w-full
              flex
              justify-center
              items-start
              md:items-center
              pt-10
              md:pt-0
            "
            v-if="showModal"
          >
            <!-- modal -->
            <div
              id="modal"
              class="
                pacity-0
                transform
                relative
                w-10/12
                md:w-1/2
                h-1/2
                md:h-3/4
                bg-white
                rounded-lg
                shadow-lg
                transition-opacity transition-transform
                duration-300
              "
              v-bind:class="{
                '-translate-y-full scale-150': isModalActive,
                '-translate-y-full': isModalTranslate,
              }"
            >
              <!-- button close -->
              <button
                @click="openModal(false)"
                class="
                  absolute
                  -top-3
                  -right-3
                  bg-red-500
                  hover:bg-red-600
                  text-2xl
                  w-10
                  h-10
                  rounded-lg-full
                  focus:outline-none
                  text-white
                "
              >
                X
              </button>

              <!-- header -->
              <div class="px-4 py-3 border-b border-gray-200">
                <h2 class="text-xl font-semibold text-gray-600">Thêm bác sĩ</h2>
              </div>

              <!-- body -->
              <div class="w-full h-full">
                <div class="w-full h-full flex">
                  <div class="w-full p-3">
                    <label class="block">Họ và tên</label>
                    <input type="text" placeholder="Nhập họ và tên bác sĩ" class="p-1 border rounded w-full" required v-model="signUpInfo.cusname">
                    <label class="block">Ngày sinh</label>
                    <input type="date" class="p-1 border rounded " v-model="signUpInfo.dob">
                    <label class="block">Quê quán</label>
                    <input type="text" placeholder="Nhập quê quán" class="p-1 border rounded w-full" required v-model="signUpInfo.quequan">
                    <label class="block">Giới tính</label>
                    <select name="gender" class="p-1 border rounded " v-model="signUpInfo.sex">
                      <option value="Nam">Nam</option>
                      <option value="Nữ">Nữ</option>
                    </select>
                     <label class="block">SĐT</label>
                    <input type="number" placeholder="Nhập số điện loại" class="p-1 border rounded " required v-model="signUpInfo.sdt">
                     <label class="block">Email</label>
                    <input type="email" placeholder="Nhập email" class="p-1 border rounded " required v-model="signUpInfo.email">
                  </div>
                  <div
                class="
                  absolute
                  bottom-0
                  left-0
                  px-4
                  py-3
                  border-t border-gray-200
                  w-full
                  flex
                  justify-end
                  items-center
                  gap-3
                "
              >
                <button
                  class="
                    bg-green-500
                    hover:bg-green-600
                    px-4
                    py-2
                    rounded-lg
                    text-white
                    focus:outline-none
                  "
                  @click="signUpDoctorPost()"
                >
                  Lưu
                </button>
                <button
                  @click="openModal(false)"
                  class="
                    bg-red-500
                    hover:bg-red-600
                    px-4
                    py-2
                    rounded-lg
                    text-white
                    focus:outline-none
                  "
                >
                  Thoát
                </button>
              </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
      <!-- ADMIN-MAIN-PAGE -->
      <div
        v-if="currentPage === 'main' ? true : false"
        class="flex h-screen w-5/6 bg-gray-50"
      >
        <div class="w-3/5 h-screen">
          <p class="text-blue-800 text-xl mt-7 ml-5">Bảng điều khiển</p>
          <p class="text-blue-800 text-xl ml-5">{{ currentDate() }}</p>
          <div class="m-5 h-1/2">
            <div class="w-full max-w-3xl">
              <div class="-mx-2 md:flex">
                <div class="w-full md:w-1/2 px-2">
                  <div class="rounded-lg shadow-sm mb-4">
                    <div
                      class="
                        rounded-lg
                        bg-white
                        shadow-lg
                        md:shadow-l
                        overflow-hidden
                      "
                    >
                      <div class="px-3 pt-8 pb-10 text-center">
                        <h4
                          class="text-sm uppercase text-gray-500 leading-tight"
                        >
                          Bệnh nhân mới
                        </h4>
                        <h3
                        v-if="listPatient"
                          class="
                            text-3xl text-gray-700
                            font-semibold
                            leading-tight
                            my-3
                          "
                        >
                          {{showSumPatient.length}}
                        </h3>
                        <p class="text-xs text-green-500 leading-tight">
                          ▲ 57.1%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-1/2 px-2">
                  <div class="rounded-lg shadow-sm mb-4">
                    <div
                      class="
                        rounded-lg
                        bg-white
                        shadow-lg
                        md:shadow-l
                        overflow-hidden
                      "
                    >
                      <div class="px-3 pt-8 pb-10 text-center">
                        <h4
                          class="text-sm uppercase text-gray-500 leading-tight"
                        >
                          Tái khám
                        </h4>
                        <h3
                          class="
                            text-3xl text-gray-700
                            font-semibold
                            leading-tight
                            my-3
                          "
                        >
                          11,427
                        </h3>
                        <p class="text-xs text-red-500 leading-tight">
                          ▼ 42.8%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="w-full max-w-3xl h-1/2 rounded-lg shadow-xl bg-white mt-1"
            >
              <h4 class="p-3">THỐNG KÊ THĂM KHÁM</h4>
              <img
             
                src="https://quickchart.io/chart?w=650&h=140&c=%7B%0A%20%20type%3A%20%27bar%27%2C%0A%20%20data%3A%20%7B%0A%20%20%20%20labels%3A%20%5B2017%2C%202018%2C%202019%2C%202020%2C%202021%5D%2C%0A%20%20%20%20datasets%3A%20%5B%7B%0A%20%20%20%20%20%20label%3A%20%27B%E1%BB%87nh%20nh%C3%A2n%27%2C%0A%20%20%20%20%20%20data%3A%20%5B12%2C%206%2C%205%2C%2018%2C%2012%5D%2C%0A%20%20%20%20%20%20backgroundColor%3A%20%27%2336a2eb%27%0A%20%20%20%20%7D%5D%0A%20%20%7D%0A%7D"
                alt=""
              />
            </div>
            <div
              class="
                text-white
                w-full
                max-w-3xl
                h-2/3
                rounded-lg
                shadow-xl
                bg-indigo-800
                mt-3
              "
            >
              <h4 class="p-3">THỜI TIẾT</h4>
              <h4 class="p-3">TP. Hồ Chí Minh</h4>
              <p class="text-center">{{ this.weather.main }}</p>
              <p class="text-center text-6xl">
                {{ this.weather.temperature }}°C
              </p>
            </div>
          </div>
        </div>
        <div class="w-2/5 h-screen">
          <div class="flex justify-end mt-6 p-5">
            <input
              type="text"
              placeholder="Enter để tìm kiếm"
              class="
                focus:outline-none
                focus:ring
                focus:border-blue-300
                border
                p-1
                rounded
              "
            />
            <button
              class="bg-indigo-700 text-white p-2 rounded ml-2"
            >
              Cài đặt
            </button>
          </div>
          <div class="w-full h-1/3 text-white">
            <div class="flex h-1/2 w-full">
              <div class="rounded w-full h-full bg-red-500 mr-5 shadow-md">
                <h4 class="text-center">Bệnh nhân</h4>
                <div class="text-sm p-3">
                  <h4>Hôm nay: 25</h4>
                  <h4>Tháng này: 53</h4>
                  <h4>Tổng số: 500000000</h4>
                </div>
              </div>
              <div class="rounded w-full h-full bg-green-500 mr-5 shadow-md">
                <h4 class="text-center">Vật tư</h4>
                <div class="text-sm p-3">
                  <h4>Hôm nay: 25</h4>
                  <h4>Tháng này: 53</h4>
                  <h4>Tổng số: 500000000</h4>
                </div>
              </div>
            </div>
            <div class="flex mt-5 h-1/2 w-full">
              <div class="rounded w-full h-full bg-blue-500 mr-5 shadow-md">
                <h4 class="text-center">Thuốc</h4>
                <div class="text-sm p-3">
                  <h4>Hôm nay: 25</h4>
                  <h4>Tháng này: 53</h4>
                  <h4>Tổng số: 500000000</h4>
                </div>
              </div>
              <div class="rounded w-full h-full bg-purple-600 mr-5 shadow-md">
                <h4 class="text-center">Tập tin</h4>
                <div class="text-sm p-3">
                  <h4>Hôm nay: 25</h4>
                  <h4>Tháng này: 53</h4>
                  <h4>Tổng số: 500000000</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full h-2/5 mt-10 rounded">
            <img style="height: 280px" src="https://1.bp.blogspot.com/-oYr49c9TUNU/YPr_xlNttEI/AAAAAAAAD5w/TDKXMRuvojAX8YSetPnPeGroCmMGiWZkgCLcBGAsYHQ/s320/10.5.2021%2BTin%2B%25C4%2590P%2B1.jpg" alt="">
          </div>
        </div>
      </div>
      <!--PATIENT-MAIN-PAGE -->
      <div
        v-if="currentPage === 'patient' ? true : false"
        class="h-screen w-5/6 bg-gray-50"
      >
        <div class="w-full h-1/5">
          <h1 class="nunito p-5">Bệnh nhân</h1>
          <div class="flex justify-between pl-3 w-full h-auto">
            <input
              type="text"
              placeholder="Enter để tìm kiếm"
              class="
                focus:outline-none
                focus:ring
                focus:border-blue-300
                border
                p-1
                rounded
              "
            />
            <div class="flex pr-5">
              <select
                class="p-2 rounded border-2 border-indigo-700 text-indigo-700"
              >
                <option value="" disabled selected>Lọc theo cái gì đó</option>
                <option value="male">Nam</option>
                <option value="female">Nữ</option>
              </select>
            </div>
          </div>
        </div>
        <div class="w-full h-4/5">
          <table class="table-auto border-2 rounded w-full">
            <thead class="border-2">
              <tr>
                <th
                  class="
                    px-5
                    py-3
                    border-b-2 border-gray-200
                    bg-gray-100
                    text-left text-xs
                    font-semibold
                    text-gray-700
                    uppercase
                    tracking-wider
                  "
                >
                  Mã bệnh nhân
                </th>
                <th
                  class="
                    px-5
                    py-3
                    border-b-2 border-gray-200
                    bg-gray-100
                    text-left text-xs
                    font-semibold
                    text-gray-700
                    uppercase
                    tracking-wider
                  "
                >
                  Tên bệnh nhân
                </th>
                <th
                  class="
                    px-5
                    py-3
                    border-b-2 border-gray-200
                    bg-gray-100
                    text-left text-xs
                    font-semibold
                    text-gray-700
                    uppercase
                    tracking-wider
                  "
                >
                  MSBH
                </th>
                <th
                  class="
                    px-5
                    py-3
                    border-b-2 border-gray-200
                    bg-gray-100
                    text-left text-xs
                    font-semibold
                    text-gray-700
                    uppercase
                    tracking-wider
                  "
                >
                  Ngày sinh
                </th>
                <th
                  class="
                    px-5
                    py-3
                    border-b-2 border-gray-200
                    bg-gray-100
                    text-left text-xs
                    font-semibold
                    text-gray-700
                    uppercase
                    tracking-wider
                  "
                >
                  Giới tính
                </th>
                <th
                  class="
                    px-5
                    py-3
                    border-b-2 border-gray-200
                    bg-gray-100
                    text-left text-xs
                    font-semibold
                    text-gray-700
                    uppercase
                    tracking-wider
                  "
                >
                  Quê quán
                </th>
                <th
                  class="
                    px-5
                    py-3
                    border-b-2 border-gray-200
                    bg-gray-100
                    text-left text-xs
                    font-semibold
                    text-gray-700
                    uppercase
                    tracking-wider
                  "
                >
                  SĐT
                </th>
                <th
                  class="
                    px-5
                    py-3
                    border-b-2 border-gray-200
                    bg-gray-100
                    text-left text-xs
                    font-semibold
                    text-gray-700
                    uppercase
                    tracking-wider
                  "
                >
                  Email
                </th>
                <th
                  class="
                    px-5
                    py-3
                    border-b-2 border-gray-200
                    bg-gray-100
                    text-left text-xs
                    font-semibold
                    text-gray-700
                    uppercase
                    tracking-wider
                  "
                ></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(patient, index) in listPatient" :key="index">
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  BN-{{ patient.IDBN }}
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {{ patient.TenBN }}
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {{ patient.MSBH }}
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {{ formatDate(patient.NamSinh) }}
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {{ patient.GioiTinh }}
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {{ patient.QueQuan }}
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {{ patient.SDT }}
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {{ patient.Email }}
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <button
                    type="button"
                    class="inline-block text-gray-500 hover:text-gray-700"
                  >
                    <svg
                      class="inline-block h-6 w-6 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!--DOCTOR-MAIN-PAGE -->
      <div
        v-if="currentPage === 'doctor' ? true : false"
        class="h-screen w-5/6 bg-gray-50"
      >
        <div class="w-full h-1/5">
          <h1 class="nunito p-5">Bác sĩ</h1>
          <div class="flex justify-between pl-3 w-full h-auto">
            <input
              type="text"
              placeholder="Enter để tìm kiếm"
              class="
                focus:outline-none
                focus:ring
                focus:border-blue-300
                border
                p-1
                rounded
              "
            />
            <div class="flex pr-5">
              <button class="bg-red-500 p-2 mr-3 rounded text-white" @click="openModal(true)">
                + Thêm mới
              </button>
              <select
                class="p-2 rounded border-2 border-indigo-700 text-indigo-700"
              >
                <option value="" disabled selected>Lọc theo ...</option>
                <option value="male">Nam</option>
                <option value="female">Nữ</option>
              </select>
            </div>
          </div>
        </div>
        <div class="w-full h-4/5">
          <table class="table-auto border-2 rounded w-full">
            <thead class="border-2">
              <tr>
                <th
                  class="
                    px-5
                    py-3
                    border-b-2 border-gray-200
                    bg-gray-100
                    text-left text-xs
                    font-semibold
                    text-gray-700
                    uppercase
                    tracking-wider
                  "
                >
                  Mã bác sĩ
                </th>
                <th
                  class="
                    px-5
                    py-3
                    border-b-2 border-gray-200
                    bg-gray-100
                    text-left text-xs
                    font-semibold
                    text-gray-700
                    uppercase
                    tracking-wider
                  "
                >
                  Họ và tên
                </th>
                <th
                  class="
                    px-5
                    py-3
                    border-b-2 border-gray-200
                    bg-gray-100
                    text-left text-xs
                    font-semibold
                    text-gray-700
                    uppercase
                    tracking-wider
                  "
                >
                  Ngày sinh
                </th>
                <th
                  class="
                    px-5
                    py-3
                    border-b-2 border-gray-200
                    bg-gray-100
                    text-left text-xs
                    font-semibold
                    text-gray-700
                    uppercase
                    tracking-wider
                  "
                >
                  Giới tính
                </th>
                <th
                  class="
                    px-5
                    py-3
                    border-b-2 border-gray-200
                    bg-gray-100
                    text-left text-xs
                    font-semibold
                    text-gray-700
                    uppercase
                    tracking-wider
                  "
                >
                  Quên quán
                </th>
                <th
                  class="
                    px-5
                    py-3
                    border-b-2 border-gray-200
                    bg-gray-100
                    text-left text-xs
                    font-semibold
                    text-gray-700
                    uppercase
                    tracking-wider
                  "
                >
                  Số điện thoại
                </th>
                <th
                  class="
                    px-5
                    py-3
                    border-b-2 border-gray-200
                    bg-gray-100
                    text-left text-xs
                    font-semibold
                    text-gray-700
                    uppercase
                    tracking-wider
                  "
                ></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(doctor, index) in listDoctor" :key="index">
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  BS-{{ doctor.IDBS }}
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {{ doctor.TenBS }}
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {{ formatDate(doctor.NamSinh) }}
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {{ doctor.GioiTinh }}
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {{ doctor.QueQuan }}
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {{ doctor.SDT }}
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <button
                    type="button"
                    class="inline-block text-gray-500 hover:text-gray-700"
                  >
                    <svg
                      class="inline-block h-6 w-6 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!--MESSAGE-MAIN-PAGE -->
      <div
        v-if="currentPage === 'message' ? true : false"
        class="flex h-screen w-5/6 bg-gray-50"
      >
        <p>TIN NHẮN</p>
      </div>
    </div>
    <div>
      <Loadding :timeShow='1000'/>
    </div>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap");
p {
  font-weight: bolder;
}
.nunito {
  font-family: "Nunito", sans-serif;
  font-weight: bolder;
  font-size: 2rem;
}
.fill-svg:hover {
  fill: rgba(249, 250, 251, var(--tw-bg-opacity));
}
</style>
<script>
import Loadding from "@/components/loading/loadding";

import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      showModal: false,
      isModalActive: true,
      isModalTranslate: false,
      currentPage: "main",
      weather: {
        temperature: "",
        city: "",
        main: "",
      },
      listDoctor: null,
      listPatient: null,
      signUpInfo:{
        grant:"DOCTOR",
        cusname:"",
        sdt:"",
        email:"",
        sex:"",
        dob:"",
        quequan:"",
      },
      
    };
  },
  components: {
    Loadding,
  },
  computed: {
    ...mapGetters("loadding", ["getterShowLoadding"]),
    ...mapGetters("weather", ["getterWeather"]),
    ...mapGetters("doctor", ["getterListDoctor"]),
    ...mapGetters("patient",["getterListPatient"]),
    showLoadding() {
      return this.getterShowLoadding;
    },
    showSumPatient(){
      this.listPatient =this.getterListPatient
      return this.listPatient
    }
  },
  mounted() {
    this.getAllDoctor();
    this.getAllPatient();
    this.getWeather();
    this.weather = this.getterWeather;
    this.listPatient = this.getterListPatient
    const accLogin = JSON.parse(localStorage.getItem("accountLoginSuccess"));
    if (accLogin == undefined || accLogin == null) {
      this.$router.push({path: '/'})
      alert('Làm ơn đăng nhập vào hệ thống - CẢM ƠN!')
    }
    switch (accLogin.user_type) {
      case "PATIENT":
        alert(
          "Bạn không phải là ADMIN - Bệnh nhân nên vào trang /patient - CẢM ƠN!"
        );
        this.$router.push({ path: "/patient" });
        break;
      case "DOCTOR":
        alert(
          "Bạn không phải là ADMIN - Bác sĩ nên vào trang /doctor - CẢM ƠN!"
        );
        this.$router.push({ path: "/doctor" });
        break;
      case "ADMIN":
        break;
    }
  },
  methods: {
    ...mapActions("patient", ["getAllPatient"]),
    ...mapActions("weather", ["getWeather"]),
    ...mapActions("doctor", ["getAllDoctor","signUpDoctor"]),
    
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
      const date = `${current.getDate()}/${
        current.getMonth() + 1
      }/${current.getFullYear()}`;
      return date;
    },
    formatDate(str) {
      const date = new Date(str),
        mnth = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
      return [day, mnth, date.getFullYear()].join("-");
    },
    handlePage(state) {
      switch (state) {
        case "main":
          return (this.currentPage = "main");
        case "patient": {
          this.currentPage = "patient";
          this.listPatient = this.getterListPatient;
          break;
        }
        case "doctor": {
          this.currentPage = "doctor";
          this.listDoctor = this.getterListDoctor;
          break;
        }
        case "message":
          return (this.currentPage = "message");
      }
    },
    signUpDoctorPost(){
      this.signUpDoctor(this.signUpInfo);
      setTimeout(()=>{  this.$router.go(this.$router.currentRoute) }, 1500);
    },
    logOut() {
      localStorage.removeItem("accountLoginSuccess");
      this.$router.push({path: '/'})
    }
  },
};
</script>
