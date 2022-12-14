
<template>
    <div class="main">
      <!-- Loader -->
      <loader
        v-if="situacaoLoader"
        descricao="Validando Acesso..."
      />
  
      <!-- NavBar -->
      <navBar />
      <!-- Modal novo Cliente -->
      <modalNovoCliente id="modal_novo_cliente"/>
      <!-- Menu -->
      <myMenu />
      <!-- Conteudo dinamico -->
      <div class="conteudo">
  
        <!-- Titulo da Página -->
        <div class="conteudo_title">
          <h2>Lista de Clientes</h2>
            <div class="conteudo_search"> 
              <!-- Input p/ filtro dos Clientes -->
              <inputSearch>
                <input v-on:input="filtro = $event.target.value" type="search" placeholder="Pesquise pelo nome do cliente" />
              </inputSearch>
  
              <b-button @click="showModal" class="btn_add_cliente">Adicionar Cliente</b-button>
            </div>
        </div>
  
        <!-- Card dos Clientes -->
        <div id="cards" class="cards_clientes_grid">
          <card 
            v-for="card of cardsClientesFiltrados" 
            :key="card.id" 
            :id="card.id"
            :nome_cliente="card.nome_cliente" 
            :grupo="card.grupo_cliente" 
            :situacao="card.situacao" 
            :apple="card.apple" 
            :v_apple="card.versao_apple" 
            :android="card.android" 
            :v_android="card.versao_android" 
            :ecommerce="card.ecommerce" 
            :v_ecommerce="card.versao_ecommerce" 
            :dash="card.dash" 
            :v_dash="card.versao_dash" 
            :midia="card.midia" 
            :v_midia="card.versao_midia" 
          />
        </div>
  
      </div>
    </div>
  </template>
  
  <script>
    // Libs 
    import axios from '../services/axios';
  import $ from 'jquery';
    // Classe Statica p/ retorno
      import { verificaStatusRetorno } from "../class/RetornoRequest.js";
    // Components
    import NavBar           from '../components/shared/navbar/NavBar.vue';
    import Menu             from '../components/shared/menu/Menu.vue';
    import CardHome         from '../components/shared/card/CardHome.vue';
    import NovoClienteModal from '../components/shared/modal/cliente/NovoClienteModal.vue';
    import InputSearch      from '../components/shared/input/InputSearch.vue';
    import Loader           from "../components/shared/loader/Loader.vue";
  
    export default {
  
      components: {
        navBar: NavBar,
        myMenu: Menu,
        card: CardHome,
        modalNovoCliente: NovoClienteModal,
        inputSearch: InputSearch,
        loader: Loader
      },
  
      data() {
        return {
          cards: [],
          filtro: '',
          situacaoLoader: false
        }
      },
  
      methods: {
        showModal() {
          $("#modal_novo_cliente").css("display", "flex" );
          $("#nome_supermercado").focus();
        }
      },
  
      computed: {
        cardsClientesFiltrados() {
          if (this.filtro) {
            // criando uma expressão com o valor do filtro, insensitivo
            let exp = new RegExp(this.filtro.trim(), 'i');
            return this.cards.filter(card => exp.test(card.nome_cliente));
          } 
          else {
            // se o campo estiver vazio, não filtramos, retornamos a lista
            return this.cards;
          }
        }
      },
  
      created() {
        
        this.situacaoLoader = true;
  
        axios()
        .post('/RequestController.php', {
          modulo  : "sgc",
          versao  : "a0.01",
          endpoint: "homeInicial",
          method  : "GET"
        })
        .then(response => {
          if(verificaStatusRetorno(response.data).aprovado) {
            this.cards = response.data.return.clientes;
            this.situacaoLoader = false;
          }
        })
        .catch(error => {
          this.$toast.error("Erro ao trazer Clientes!", {
            duration: 2000,
            position: "top-right"
          });
          this.situacaoLoader = false;
        })
      }
  
    }
  
  </script>
  
  <style scoped>
  
    /* Modal */
    #modal_novo_cliente {
      display: none;
    }
  
    /*  Conteudo Home */
  
    .conteudo_search {
      display: grid;
      grid-template-columns: 4fr auto;
      gap: 1.5rem;
    }
  
    .icon {
      margin-left: 9px;
      margin-top: 8px;
    }
  
    .btn_add_cliente {
      padding: 0 1rem;
      background-color: var(--primary);
      color: var(--texto-menu);
      transition: filter 0.5;
    }
  
    .btn_add_cliente:hover {
      cursor: pointer;
      filter: brightness(0.9);
    } 
  
    .cards_clientes_grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    }
  
    @media screen and (max-width: 1600px) {
      .cards_clientes_grid {
        grid-template-columns: 1fr 1fr 1fr 1fr;
      }
    }
  
    @media screen and (max-width: 1300px) {
      .cards_clientes_grid {
        grid-template-columns: 1fr 1fr 1fr;
      }
    }
  
    @media screen and (max-width: 1000px) {
      .cards_clientes_grid {
        grid-template-columns: 1fr 1fr;
      }
    }
  
  
  </style>
  