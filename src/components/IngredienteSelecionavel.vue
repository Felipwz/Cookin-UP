<template>
  <button class="ingrediente" v-on:click="selecionado = !selecionado"
 :aria-pressed="selecionado">
    <Tag :texto="ingrediente" :ativa="selecionado" />
  </button>
</template>

<script lang="ts">
import { setEmitFlags } from "typescript";
import Tag from "./Tag.vue";

export default {
  components: { Tag },

  props: {
    ingrediente: { type: String, required: true },
  },

  data() {
    return {
      selecionado: false,
    };
  },
};
</script>

<style scoped>
.ingrediente{
    cursor: pointer;
}
</style>
