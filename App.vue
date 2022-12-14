<template>
  <Login />
  <!-- <BarraLateral /> -->
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Login from "./components/Login.vue";
// import BarraLateral from "./components/BarraLateral.vue";

export default defineComponent({
  name: "App",
  components: {
    Login
    // BarraLateral,

    
  },
  data() {
    return {
      email: "vradmin",
      senha: "vradmin22",
    };
  },

  // methods: {
  //   submit() {
  //   const payload = {
  //     email:this.email, 
  //     senha:this.senha
  //   }
  //   fetch( input `http://localhost:8082/sgc`, init: {
  //     method:'POST',
  //       heards: {
  //         'Content-Type': 'application/json',
  //         'Access': 'application/json',
  //       },
  //           body:JSON.stringify(payload)
  //     })
  //           .then(response => response.json())
  //           .then(res => {
  //               console.log(res;)
  //           })
  //   },
  // },

});

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: transparent;
  border: 0px;
}
</style>
