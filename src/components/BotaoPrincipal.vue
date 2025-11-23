<template>
  <button class="botao-principal">
    {{ texto }}
  </button>
</template>


<script lang="ts">
export default{
  props:{
    texto: {type: String, required: true},
  }
}
</script>



<style scoped>
.botao-principal {
  font-size: large;
  border-radius: 2rem;
  min-width: 6rem;
  padding: 1rem;
  width: 19.5rem;
  height: 3.5rem;
  font-weight: 700;
  box-shadow: 4px 4px 15px 0px rgba(255, 115, 76, 0.25);
  background: var(--coral, #f0633c);
  color: var(--creme, #FFFAF3);
  cursor: pointer;
  transition: 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;


}
</style>
