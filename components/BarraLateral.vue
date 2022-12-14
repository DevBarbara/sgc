<template>
  <div class="fundo">
    <header>
        <h1>
          <img src="https://dev.nweb.com.br/connect3/dist/logo_2.png" alt="">  
        </h1>
    </header>
  </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'BarraLateral'
  })
  </script>
  
  <style scoped>
  header {
    padding: 1rem;
    background: #1b1b29;
    width: 20%;
    height: 100vh;
  }
  @media only screen and (max-width: 768px) {
    header {
      padding: 2.5rem;
      height: auto;
    }
  }

  .fundo {
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: black;
  position: absolute;
}

* { 
  margin: 0; 
  padding: 0; 
  box-sizing: border-box;
  width: 35%;
}

  </style>