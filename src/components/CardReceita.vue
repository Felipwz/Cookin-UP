<template>
  <article class="receita">
    <img
      :src="`/imagens/receitas/${receita.imagem}`"
      :alt="receita.nome"
      class="receita__imagem"
    />
    <div class="receita__conteudo">
      <h2 class="paragrafo-lg receita__nome">{{ receita.nome }}</h2>
      <ul class="receita__ingredientes">
        <li v-for="ingrediente in receita.ingredientes" :key="ingrediente"></li>
      </ul>
    </div>
  </article>
</template>

<script lang="ts">
import type IReceita from "@/interfaces/IReceita";
import type { PropType } from "vue";

export default {
  props: {
    receita: { type: Object as PropType<IReceita>, required: true },
  },
};
</script>

<style scoped>
.receita {
  width: 19.5rem;
  border-radius: 1rem;
  background: var(--branco, #fff);
  box-shadow: 4px 4px 10px 0px rgba(68, 68, 68, 0.05);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.receita__imagem {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.receita__conteudo {
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.receita__nome {
  text-align: center;
  color: var(--verde-medio, #3d6d4a);
  font-weight: 600;
  margin: 0;
}

.receita__ingredientes {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
