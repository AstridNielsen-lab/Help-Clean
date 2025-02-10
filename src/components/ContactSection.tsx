import React from 'react';
import { MapPin, Phone } from 'lucide-react';

function ContactSection() {
  return (
    <section className="py-8 md:py-12 bg-white rounded-lg shadow-lg">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">Entre em Contato</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-3 md:mb-4">
              <Phone className="h-6 w-6 md:h-8 md:w-8 text-blue-500" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">WhatsApp</h3>
            <a
              href="https://wa.me/5511946794327"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-full transition-colors text-sm md:text-base"
            >
              Falar com Rodrigo
            </a>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-3 md:mb-4">
              <MapPin className="h-6 w-6 md:h-8 md:w-8 text-blue-500" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Endereço</h3>
            <p className="mb-3 md:mb-4 text-sm md:text-base">Rua Marechal Barbacena, 441<br />Tatuapé, São Paulo</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Rua+Marechal+Barbacena+441+Tatuapé+São+Paulo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-full transition-colors text-sm md:text-base"
            >
              Ver no Mapa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;