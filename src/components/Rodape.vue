<template>
  <footer class="rodape">
    <p class="texto-rodape">Desenvolvido por Felipwz | 2025 - Projeto Alura</p>
  </footer>
</template>

<script></script>

<style scoped>
.rodape {
  background: var(--verde-escuro, #263a29);
  padding: 1.5rem 7.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}


@media only screen and (max-width: 1300px) {
  .rodape {
    padding: 1.5rem 3.75rem;
  }
}

@media only screen and (max-width: 767px) {
  .rodape {
    padding: 1.5rem;
  }
}
</style>
