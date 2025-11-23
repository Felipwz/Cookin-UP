<template>
  <section class="visualizar-receitas">
    <h1 class="cabecalho titulo-receitas">Receitas</h1>

    <p class="paragrafro-lg">Resultados encontrados:</p>

    <p class="paragrafro-lg instrucoes">
      Veja as opções de receitas que encontramos com os ingredientes que você
      tem por aí!
    </p>

    <ul class="receitas">
      <li v-for="receita in receitas" :key="receita.nome">
        <CardReceita :receita="receita" />
      </li>
    </ul>

    <BotaoPrincipal texto="Edita Lista" @click="$emit('EditarLista')" />
  </section>
</template>

<script lang="ts">
import { obterCategorias, obterReceitas, type Categoria } from "../http/index";
import BotaoPrincipal from "./BotaoPrincipal.vue";
import CardReceita from "./CardReceita.vue"
export default {
  components: {
    CardReceita,
    BotaoPrincipal,
  },

  emits: ["EditarLista"],

  data() {
    return {
      receitas: [] as Receita[],
    };
  },

  async created() {
    this.receitas = await obterReceitas();
  },
};
</script>
<style scoped>
.visualizar-receitas {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.titulo-receitas {
  color: var(--verde-medio, #3d6d4a);
  display: block;
  margin-bottom: 1.5rem;
}

.instrucoes {
  margin-bottom: 2rem;
}

.receitas {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;

}
</style>
