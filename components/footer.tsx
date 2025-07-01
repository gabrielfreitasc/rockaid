import { Instagram, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-poppins text-[#E83908]">
              RockAid
            </h3>
            <p className="text-gray-300 text-sm">
              Transformando vidas com a força da solidariedade desde 2021.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-poppins">
              Links Rápidos
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#sobre"
                  className="text-gray-300 hover:text-[#E83908] transition-colors"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#acoes"
                  className="text-gray-300 hover:text-[#E83908] transition-colors"
                >
                  Nossas Ações
                </a>
              </li>
              <li>
                <a
                  href="#ajudar"
                  className="text-gray-300 hover:text-[#E83908] transition-colors"
                >
                  Como Ajudar
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold font-poppins">Contato</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-[#E83908]" />
                <a
                  href="mailto:contato@rockaid.org"
                  className="text-gray-300 hover:text-[#E83908] transition-colors"
                >
                  contato@rockaid.org
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Instagram size={16} className="text-[#E83908]" />
                <a
                  href="https://instagram.com/rockaidudi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#E83908] transition-colors"
                >
                  @rockaidudi
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Linha Separadora e Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-300">
            <span>© 2025 Associação Rock Aid. Feito com</span>
            <Heart size={16} className="text-[#E83908] fill-current" />
            <span>para transformar vidas.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
