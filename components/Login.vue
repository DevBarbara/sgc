<template>
  <div class="fundo">
    <div class="content">
      <div class="title">
        <img src="https://dev.nweb.com.br/connect3/dist/logo_2.png" alt="imgLogin" />
        <br/><p class="text">Sistema de Gerenciamento Connect</p>
      </div>
      <fieldset class="email">
        <legend>Email</legend>
        <input class="input-email" type="text" name="email" id="login" required="required">
      </fieldset>
      <fieldset class="senha">
        <legend>Senha</legend>
        <input type="password" name="senha" id="senha" required="required">
      </fieldset>
      <button @click="buttonLogin" class="button_Login">Login</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// Libs
// import axios from "../services/axios";
import Temporizador from './Temporizador.vue'

export default defineComponent({
  name: "TelaLogin",
  data () {
    return {
      descricao: ''
    }
  },
  methods: {
    buttonLogin() {
      console.log("Testando método")
    }


    // validaLogin(e) {
    //   e.preventDefault();

    //   axios()
    //   .post("/RequestController.php", {
    //     modulo  : "sgc",
    //     versao  : "a0.01",
    //     endpoint: "loginSGC",
    //     method  : "POST",

    //     params: {
    //       login:  $("#login").val(),
    //       senha:  $("#senha").val()
    //     }
    //   })
    //   .then((response) => {

    //     $("#my_loader").css("display", "flex");

    //     if (verificaStatusRetorno(response.data).aprovado) {
    //       let token = response.data.return.token;
    //       localStorage.setItem("token", token);

    //       this.$toast.success("Bem vindo de volta!", {
    //         duration: 3000,
    //         position: "top-right",
    //       });

    //       this.$router.push({ path: `/home` });
    //     } else {
    //       $("#my_loader").css("display", "none");
    //       this.$toast.error("Erro ao realizar Login!", {
    //         duration: 2000,
    //         position: "top-right",
    //       });
    //     }

    //   })
    //   .catch((error) => {
    //     console.log(error.message)

    //     $("#my_loader").css("display", "none");
    //     this.$toast.error("Erro ao realizar Login!", {
    //       duration: 2000,
    //       position: "top-right",
    //     });
    //   });
    // },



  }
});
</script>

<style scoped>
.fundo {
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(5,5,7,255);
  position: absolute;
}

.content {
  background-color: #1e1e2d;
  justify-content: center;
  position: relative;
  border-radius: 1.4rem;
  width: 35rem;
  height: 32rem;
}

.title {
  text-align: center;
  margin-top: 2rem;
}

.body {
  background-color: #39444e;
  justify-content: center;
  padding: 1.5rem;
}

.button_Login {
  color: white;
  background-color: #ff8903;
  border-radius: 0.2rem;
  border: none;
  width: 90%;
  padding: 1.2rem;
  margin-top: 8rem;
  font-size: 1rem;
  cursor: pointer;
  margin-left: 25px;
}

.input {
  margin-top: 0rem;
  background: transparent;
}

.email {
  margin-top: 40px;
  color: white;
  width: 80%;
  margin-left: 50px;
  background: transparent;
  padding: 8px;
}

.senha {
  margin-top: 25px;
  color: white;
  width: 80%;
  margin-left: 50px;
  background: transparent;
  padding: 8px;
}

fieldset {
    display: block;
    margin-left: 2px;
    margin-right: 2px;
    padding-bottom: 0.725em;
    padding-left: 0.75em;
    padding-right: 0.75em;
    border: 1px solid white;
    border-radius: 0.25rem;
}

* { 
  margin: 0; 
  padding: 0; 
  box-sizing: border-box;
}

.text {
  color: white;
  font-family: "Gilroy-Heav.ttf";
}

@font-face {
  font-family: "Gilroy-Heav";
    src: url("https://dev.nweb.com.br/connect3/dist/Gilroy-Heavy.ttf") format("ttf"),
}

</style>