<template>
  <div>
  <Loadding />
  <div class="test">
    <h2>Page này để test vuex</h2>
    <button @click="showDb">click</button>

    <div>
      <h1>Color mode: {{ $colorMode.value }}</h1>
      <select v-model="$colorMode.preference">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="sepia">Sepia</option>
      </select>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters,  mapActions} from 'vuex'
import Loadding from '@/components/loading/loadding'

  export default {
    data() {
      return {
      }
    },

    components: {
      Loadding,
    },

    computed: {
    ...mapGetters('login', ['getterCovid'])
    },
    methods: {
      ...mapActions('login', ['getPosts']),

      showDb() {
        console.log("DB test", this.getterCovid)
      }
    },
    mounted() {
      this.getPosts();
    },
  }
</script>

<style>
body {
  background-color: #fff;
  color: rgba(0,0,0,0.8);
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>
