import React from 'react';
import { Droplet, MapPin, Phone, MapIcon as WhatsappIcon } from 'lucide-react';
import ProductTable from './components/ProductTable';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 md:py-6 shadow-lg">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Droplet className="h-6 w-6 md:h-8 md:w-8" />
            <h1 className="text-xl md:text-2xl font-bold">Help Clean</h1>
          </div>
          <a
            href="https://wa.me/5511946794327"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-green-500 hover:bg-green-600 px-3 py-1.5 md:px-4 md:py-2 rounded-full transition-colors text-sm md:text-base"
          >
            <WhatsappIcon className="h-4 w-4 md:h-5 md:w-5 mr-1.5 md:mr-2" />
            Fale Conosco
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-8 md:py-12 bg-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">Produtos de Limpeza de Alta Qualidade</h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8">Sua solução completa em produtos de limpeza no Tatuapé</p>
          <div className="px-4 md:px-8 max-w-4xl mx-auto">
            <img
              src="https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=1200&q=80"
              alt="Produtos de limpeza de alta qualidade"
              className="rounded-lg shadow-xl w-full h-auto object-cover max-h-[300px] md:max-h-[400px]"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:py-12">
        <ProductTable />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                Contato
              </h3>
              <p className="text-sm md:text-base">WhatsApp: (11) 94679-4327 - Rodrigo</p>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Endereço
              </h3>
              <p className="text-sm md:text-base">Rua Marechal Barbacena, 441</p>
              <p className="text-sm md:text-base">Tatuapé, São Paulo</p>
            </div>
          </div>
          <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-700 text-center text-xs md:text-sm">
            <p>&copy; 2024 Help Clean - Todos os direitos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;