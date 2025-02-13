import React from 'react';

interface Product {
  name: string;
  price2L?: string;
  price5L?: string;
  singlePrice?: string;
  category: string;
}

const products: Product[] = [
  // Produtos 2L / 5L
  { name: 'Amaciante', price2L: 'R$ 9,00', price5L: 'R$ 17,50', category: 'Produtos 2L / 5L' },
  { name: 'Ajax c/ amoníaco', price2L: 'R$ 9,00', price5L: 'R$ 17,50', category: 'Produtos 2L / 5L' },
  { name: 'Álcool perfumado', price2L: 'R$ 12,00', price5L: 'R$ 19,90', category: 'Produtos 2L / 5L' },
  { name: 'Alvejante c/ cloro', price2L: 'R$ 9,00', price5L: 'R$ 17,50', category: 'Produtos 2L / 5L' },
  { name: 'Desinfetante', price2L: 'R$ 7,00', price5L: 'R$ 12,50', category: 'Produtos 2L / 5L' },
  { name: 'Água sanitária', price2L: 'R$ 0,00', price5L: 'R$ 10,00', category: 'Produtos 2L / 5L' },
  { name: 'Cloro 12%', price2L: 'R$ 00,00', price5L: 'R$ 19,90', category: 'Produtos 2L / 5L' },
  { name: 'Sabão Maridão desengordurante', price2L: 'R$ 9,00', price5L: 'R$ 17,50', category: 'Produtos 2L / 5L' },
  { name: 'Multiuso limão', price2L: 'R$ 9,00', price5L: 'R$ 17,50', category: 'Produtos 2L / 5L' },
  { name: 'Desengraxante Solopan', price2L: 'R$ 15,00', price5L: 'R$ 35,00', category: 'Produtos 2L / 5L' },
  { name: 'Detergente Clean Neutro', price2L: 'R$ 7,00', price5L: 'R$ 15,00', category: 'Produtos 2L / 5L' },
  { name: 'Limpa alumínio', price2L: 'R$ 12,00', price5L: 'R$ 28,00', category: 'Produtos 2L / 5L' },
  { name: 'Limpa baú', price2L: 'R$ 12,00', price5L: 'R$ 28,00', category: 'Produtos 2L / 5L' },
  { name: 'Limpa pedra', price2L: 'R$ 15,00', price5L: 'R$ 27,50', category: 'Produtos 2L / 5L' },
  { name: 'Sabão líquido OMO', price2L: 'R$ 9,00', price5L: 'R$ 17,50', category: 'Produtos 2L / 5L' },
  { name: 'Sabão líquido Dynamo', price2L: 'R$ 9,00', price5L: 'R$ 17,50', category: 'Produtos 2L / 5L' },
  { name: 'Sabão líquido coco', price2L: 'R$ 9,00', price5L: 'R$ 17,50', category: 'Produtos 2L / 5L' },
  { name: 'Sabão de querosene', price2L: 'R$ 18,00', price5L: 'R$ 35,00', category: 'Produtos 2L / 5L' },
  { name: 'Sabonete líquido lava doce', price2L: 'R$ 9,00', price5L: 'R$ 18,50', category: 'Produtos 2L / 5L' },
  
  // Sacos para Lixo
  { name: 'Sacos para lixo 20 litros (c/ 100)', singlePrice: 'R$ 25,00', category: 'Sacos para Lixo' },
  { name: 'Sacos para lixo 40 litros (c/ 100)', singlePrice: 'R$ 35,00', category: 'Sacos para Lixo' },
  { name: 'Sacos para lixo 60 litros (c/ 100)', singlePrice: 'R$ 50,00', category: 'Sacos para Lixo' },
  { name: 'Sacos para lixo 100 litros grosso (c/ 50)', singlePrice: 'R$ 80,00', category: 'Sacos para Lixo' },
  { name: 'Sacos para lixo 200 litros grosso (c/ 50)', singlePrice: 'R$ 80,00', category: 'Sacos para Lixo' },
  { name: 'Sacos para lixo 300 litros grosso (c/ 50)', singlePrice: 'R$ 80,00', category: 'Sacos para Lixo' },
  
  // Outros Produtos
  { name: 'Panos PP 28', singlePrice: 'R$ 6,00', category: 'Outros Produtos' },
  { name: 'Pano branco', singlePrice: 'R$ 9,00', category: 'Outros Produtos' },
  { name: 'Sabão em pó OMO', singlePrice: 'R$ 28,00', category: 'Outros Produtos' },
  { name: 'Álcool em gel 500ml', singlePrice: 'R$ 8,50', category: 'Outros Produtos' },
  { name: 'Sabão caseiro', singlePrice: 'R$ 3,00', category: 'Outros Produtos' },
  { name: 'Álcool líquido', singlePrice: 'R$ 7,50', category: 'Outros Produtos' },
  { name: 'Luvas', singlePrice: 'R$ 14,00', category: 'Outros Produtos' },
  { name: 'Esponja', singlePrice: 'R$ 3,50', category: 'Outros Produtos' },
  { name: 'Papel toalha interfolha (unidade)', singlePrice: 'R$ 12,50', category: 'Outros Produtos' },
  { name: 'Papel higiênico folha simples (c/ 4un)', singlePrice: 'R$ 6,00', category: 'Outros Produtos' },
  { name: 'Papel higiênico folha dupla (c/ 4un)', singlePrice: 'R$ 7,50', category: 'Outros Produtos' },
];

function ProductTable() {
  const categories = Array.from(new Set(products.map(product => product.category)));

  return (
    <div className="mb-8 md:mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">Tabela de Preços</h2>
      {categories.map(category => (
        <div key={category} className="mb-6 md:mb-8">
          <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-blue-600">{category}</h3>
          <div className="overflow-x-auto -mx-4 md:mx-0">
            <div className="min-w-full inline-block md:w-full px-4 md:px-0">
              <table className="w-full border-collapse bg-white rounded-lg shadow-lg">
                <thead className="bg-blue-500 text-white">
                  <tr>
                    <th className="px-4 md:px-6 py-2 md:py-3 text-left text-sm md:text-base">Produto</th>
                    {category === 'Produtos 2L / 5L' ? (
                      <>
                        <th className="px-4 md:px-6 py-2 md:py-3 text-right text-sm md:text-base">2L</th>
                        <th className="px-4 md:px-6 py-2 md:py-3 text-right text-sm md:text-base">5L</th>
                      </>
                    ) : (
                      <th className="px-4 md:px-6 py-2 md:py-3 text-right text-sm md:text-base">Preço</th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {products
                    .filter(product => product.category === category)
                    .map((product, index) => (
                      <tr
                        key={product.name}
                        className={`
                          border-b
                          ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                          hover:bg-blue-50 transition-colors
                        `}
                      >
                        <td className="px-4 md:px-6 py-2 md:py-4 text-sm md:text-base">{product.name}</td>
                        {category === 'Produtos 2L / 5L' ? (
                          <>
                            <td className="px-4 md:px-6 py-2 md:py-4 text-right text-sm md:text-base">{product.price2L}</td>
                            <td className="px-4 md:px-6 py-2 md:py-4 text-right text-sm md:text-base">{product.price5L}</td>
                          </>
                        ) : (
                          <td className="px-4 md:px-6 py-2 md:py-4 text-right text-sm md:text-base">{product.singlePrice}</td>
                        )}
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductTable;
