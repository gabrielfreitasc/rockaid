"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart } from "lucide-react";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-20% 0px -20% 0px",
      }
    );

    const sections = ["home", "sobre", "acoes", "ajudar", "contato"];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="p-1 fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-sm border-b border-black shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("home")}
              className="text-xl font-bold font-poppins text-black hover:text-[#E83908] transition-colors"
            >
              <Image
                src="/logo.png"
                alt="RockAid"
                width={100}
                height={100}
                className="brightness-0 invert"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className={`relative font-medium transition-colors ${
                activeSection === "home"
                  ? "text-[#E83908]"
                  : "text-white hover:text-[#E83908]"
              }`}
            >
              Home
              {activeSection === "home" && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#E83908]"></div>
              )}
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className={`relative font-medium transition-colors ${
                activeSection === "sobre"
                  ? "text-[#E83908]"
                  : "text-white hover:text-[#E83908]"
              }`}
            >
              Sobre Nós
              {activeSection === "sobre" && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#E83908]"></div>
              )}
            </button>
            <button
              onClick={() => scrollToSection("acoes")}
              className={`relative font-medium transition-colors ${
                activeSection === "acoes"
                  ? "text-[#E83908]"
                  : "text-white hover:text-[#E83908]"
              }`}
            >
              Nossas Ações
              {activeSection === "acoes" && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#E83908]"></div>
              )}
            </button>
            <button
              onClick={() => scrollToSection("ajudar")}
              className={`relative font-medium transition-colors ${
                activeSection === "ajudar"
                  ? "text-[#E83908]"
                  : "text-white hover:text-[#E83908]"
              }`}
            >
              Como Ajudar
              {activeSection === "ajudar" && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#E83908]"></div>
              )}
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className={`relative font-medium transition-colors ${
                activeSection === "contato"
                  ? "text-[#E83908]"
                  : "text-white hover:text-[#E83908]"
              }`}
            >
              Contato
              {activeSection === "contato" && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#E83908]"></div>
              )}
            </button>
          </nav>

          {/* Shopping Cart and CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() =>
                window.open(
                  "https://rockaid2.lojavirtualnuvem.com.br/",
                  "_blank"
                )
              }
              className="text-white hover:text-[#E83908] transition-colors p-2 rounded-md hover:bg-white/10"
              title="Acessar Loja"
            >
              <ShoppingCart size={24} />
            </button>
            <Button
              onClick={() => scrollToSection("ajudar")}
              className="bg-[#E83908] hover:bg-[#d12f00] text-white font-semibold px-6 py-2 rounded-md transition-colors"
            >
              QUERO DOAR
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[#E83908] transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-black">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("home")}
                className={`block w-full text-left px-3 py-2 relative font-medium transition-colors ${
                  activeSection === "home"
                    ? "text-[#E83908]"
                    : "text-white hover:text-[#E83908]"
                }`}
              >
                Home
                {activeSection === "home" && (
                  <div className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#E83908]"></div>
                )}
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className={`block w-full text-left px-3 py-2 relative font-medium transition-colors ${
                  activeSection === "sobre"
                    ? "text-[#E83908]"
                    : "text-white hover:text-[#E83908]"
                }`}
              >
                Sobre Nós
                {activeSection === "sobre" && (
                  <div className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#E83908]"></div>
                )}
              </button>
              <button
                onClick={() => scrollToSection("acoes")}
                className={`block w-full text-left px-3 py-2 relative font-medium transition-colors ${
                  activeSection === "acoes"
                    ? "text-[#E83908]"
                    : "text-white hover:text-[#E83908]"
                }`}
              >
                Nossas Ações
                {activeSection === "acoes" && (
                  <div className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#E83908]"></div>
                )}
              </button>
              <button
                onClick={() => scrollToSection("ajudar")}
                className={`block w-full text-left px-3 py-2 relative font-medium transition-colors ${
                  activeSection === "ajudar"
                    ? "text-[#E83908]"
                    : "text-white hover:text-[#E83908]"
                }`}
              >
                Como Ajudar
                {activeSection === "ajudar" && (
                  <div className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#E83908]"></div>
                )}
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className={`block w-full text-left px-3 py-2 relative font-medium transition-colors ${
                  activeSection === "contato"
                    ? "text-[#E83908]"
                    : "text-white hover:text-[#E83908]"
                }`}
              >
                Contato
                {activeSection === "contato" && (
                  <div className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#E83908]"></div>
                )}
              </button>
              <div className="px-3 py-2 space-y-2">
                <button
                  onClick={() =>
                    window.open(
                      "https://rockaid2.lojavirtualnuvem.com.br/",
                      "_blank"
                    )
                  }
                  className="w-full flex items-center justify-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 rounded-md transition-colors"
                >
                  <ShoppingCart size={20} />
                  <span>ACESSAR LOJA</span>
                </button>
                <Button
                  onClick={() => scrollToSection("ajudar")}
                  className="w-full bg-[#E83908] hover:bg-[#d12f00] text-white font-semibold py-2 rounded-md transition-colors"
                >
                  QUERO DOAR
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
