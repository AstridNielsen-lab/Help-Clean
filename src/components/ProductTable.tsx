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
  { name: 'Desinfetante', price2L: 'R$ 7,50', price5L: 'R$ 12,50', category: 'Produtos 2L / 5L' },
  { name: 'Água sanitária', price2L: 'R$ 0,00', price5L: 'R$ 10,00', category: 'Produtos 2L / 5L' },
  { name: 'Cloro 12%', price2L: 'R$ 0,00', price5L: 'R$ 19,90', category: 'Produtos 2L / 5L' },
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
  { name: 'Sacos para lixo 60 litros (c/ 100)', singlePrice: 'R$ 45,00', category: 'Sacos para Lixo' },
  { name: 'Sacos para lixo 100 litros grosso (c/ 50)', singlePrice: 'R$ 80,00', category: 'Sacos para Lixo' },
  { name: 'Sacos para lixo 200 litros grosso (c/ 50)', singlePrice: 'R$ 80,00', category: 'Sacos para Lixo' },
  { name: 'Sacos para lixo 300 litros grosso (c/ 50)', singlePrice: 'R$ 130,00', category: 'Sacos para Lixo' },
  
  // Outros Produtos
  { name: 'Panos PP 28', singlePrice: 'R$ 6,00', category: 'Outros Produtos' },
  { name: 'Pano branco', singlePrice: 'R$ 4,00', category: 'Outros Produtos' },
  { name: 'Sabão em pó OMO', singlePrice: 'R$ 18,00', category: 'Outros Produtos' },
  { name: 'Álcool em gel 500ml', singlePrice: 'R$ 8,50', category: 'Outros Produtos' },
  { name: 'Sabão caseiro', singlePrice: 'R$ 3,00', category: 'Outros Produtos' },
  { name: 'Álcool líquido', singlePrice: 'R$ 9,80', category: 'Outros Produtos' },
  { name: 'Luvas', singlePrice: 'R$ 14,00', category: 'Outros Produtos' },
  { name: 'Esponja', singlePrice: 'R$ 1,50', category: 'Outros Produtos' },
  { name: 'Papel toalha interfolha (unidade)', singlePrice: 'R$ 18,50', category: 'Outros Produtos' },
  { name: 'Papel higiênico folha simples (c/ 4un)', singlePrice: 'R$ 4,50', category: 'Outros Produtos' },
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
  {/* Informações detalhadas dos produtos */}
      <div className="mt-12 bg-white rounded-lg shadow-lg p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Produtos de Limpeza com Qualidade e Preços Imbatíveis - Compre Direto da Fábrica</h2>
        
        <p className="text-gray-700 mb-6">
          Procurando produtos de limpeza de qualidade com preços acessíveis? Nossa loja oferece uma linha completa de produtos de limpeza doméstica, empresarial e industrial, com produção própria e pronta entrega. Veja nossos principais itens e aproveite os melhores preços:
        </p>

        <div className="space-y-8">
          <section>
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Amaciantes e Sabões Líquidos</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Comprar amaciante de roupa 2L e 5L com fragrância duradoura</li>
              <li>Sabão líquido OMO e Dynamo - Preço direto da fábrica</li>
              <li>Sabão líquido de coco e sabão líquido de querosene para limpeza pesada</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Produtos Multiuso e Desengordurantes</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Ajax com amôniaco - Limpeza eficiente para superfícies diversas</li>
              <li>Multiuso de limão - Ideal para cozinha e superfícies engorduradas</li>
              <li>Desengraxante Solopan e limpa baú - Perfeitos para limpeza automotiva</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Desinfetantes e Alvejantes</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Comprar desinfetante perfumado 2L e 5L para ambientes limpos e seguros</li>
              <li>Alvejante com cloro - Remoção eficaz de manchas e germes</li>
              <li>Água sanitária e cloro 12% - Potentes agentes de limpeza</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Produtos Especializados para Limpeza Pesada</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Limpa alumínio profissional - Deixe suas panelas e utensílios brilhando</li>
              <li>Limpa pedra - Ideal para pisos externos e superfícies rústicas</li>
              <li>Sabão Maridão desengordurante - Eficiência na remoção de gorduras difíceis</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Acessórios e Complementos para Limpeza</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Sacos para lixo de 20L a 300L - Resistência e durabilidade garantida</li>
              <li>Panos de limpeza PP 28 e panos brancos - Limpeza eficiente e prática</li>
              <li>Esponjas e luvas de limpeza - Itens essenciais para sua casa ou empresa</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Higiene Pessoal e Proteção</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Sabonete líquido lava-doce - Mãos limpas e perfumadas</li>
              <li>Álcool em gel 70% 500ml - Proteção contra germes e bactérias</li>
              <li>Papel toalha interfolha e papel higiênico folha dupla - Suprimentos de higiene para empresas e residências</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Por que comprar nossos produtos de limpeza?</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Produção própria com ingredientes de alta qualidade</li>
              <li>Preços competitivos para atacado e varejo</li>
              <li>Entrega rápida e atendimento personalizado</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Principais buscas que levam até nós:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Onde comprar produtos de limpeza no atacado?</li>
              <li>Produtos de limpeza direto da fábrica com preço justo</li>
              <li>Sabão líquido OMO e Dynamo com entrega rápida</li>
              <li>Desinfetante perfumado 5L para empresas</li>
              <li>Produtos para limpeza pesada automotiva e industrial</li>
            </ul>
          </section>
        </div>

        <div className="mt-8 text-center">
          <p className="text-lg text-gray-700 font-medium">
            Entre em contato e solicite seu pedido agora! Nossa loja oferece tudo o que você precisa para manter seu ambiente sempre limpo, perfumado e livre de germes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductTable;
