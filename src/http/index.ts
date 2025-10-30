import type ICategoria from '@/interfaces/ICategoria';

export async function obterCategorias(){
  const response = await fetch('https://api.jsonbin.io/v3/b/68fecf60ae596e708f2f3273');

  if(!response.ok){
    throw new Error(`Erro ao buscar receitas: ${response.status}`);
  }

  const data: ICategoria[] = await response.json();
  return data;
}