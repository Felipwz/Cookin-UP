<template>
  <main class="conteudo-principal">
    <SuaLista :ingredientes="ingredientes" />
    <selecionarIngredientes
      @adicionar-ingrediente="adicionarIngredientes"
      @retirar-ingrediente="retirarIngrediente"
    />
    <BotaoPrincipal/>
  </main>
  <Rodape/>
</template>

<script lang="ts">
import BotaoPrincipal from "./BotaoPrincipal.vue";
import Rodape from "./Rodape.vue";
import SelecionarIngredientes from "./SelecionarIngredientes.vue";
import SuaLista from "./SuaLista.vue";

export default {
  components: { SelecionarIngredientes, SuaLista, BotaoPrincipal, Rodape},

  data() {
    return {
      ingredientes: [] as string[],
    };
  },

  methods: {
    adicionarIngredientes(ingrediente: string) {
      this.ingredientes.push(ingrediente);
    },

    retirarIngrediente(ingrediente: string) {
      this.ingredientes = this.ingredientes.filter((i) => i !== ingrediente);
    },
  },
};
</script>

<style scoped>
.conteudo-principal {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background: var(--creme, #fffaf3);
  color: var(--cinza, #444);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}

.sua-lista-texto {
  color: var(--coral, #f0633c);
  display: block;
  text-align: center;
  margin-bottom: 1.5rem;
}

.ingredientes-sua-lista {
  display: flex;
  justify-content: center;
  gap: 1rem 1.5rem;
  flex-wrap: wrap;
}

.lista-vazia {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;

  color: var(--coral, #f0633c);
  text-align: center;
}

@media only screen and (max-width: 1300px) {
  .conteudo-principal {
    padding: 5rem 3.75rem;
    gap: 3.5rem;
  }
}

@media only screen and (max-width: 767px) {
  .conteudo-principal {
    padding: 4rem 1.5rem;
    gap: 4rem;
  }
}
</style>
