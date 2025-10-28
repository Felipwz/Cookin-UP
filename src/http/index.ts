export async function obterCategorias(){
  const resposta = await fetch('https://api.jsonbin.io/v3/b/68fecf60ae596e708f2f3273')

  const categorias = await resposta.json();

  return categorias;

}