export interface Categoria {
  nome: string;
  ingredientes: string[];
  imagem: string;
}

export async function obterCategorias(): Promise<Categoria[]> {
  const response = await fetch('https://api.jsonbin.io/v3/b/69040c73d0ea881f40c8306f');

  if(!response.ok){
    throw new Error(`Erro ao buscar categorias: ${response.status}`);
  }

  const data = await response.json();
  return data.record;
}