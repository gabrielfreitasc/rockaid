"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Calendar, MapPin } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    const element = document.getElementById("sobre");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 bg-gray-200">
        <Image
          src="/banner/3festival.png"
          alt="Pessoas ajudando em cozinha comunitária"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transformando vidas com a{" "}
            <span className="text-[#E83908]">força da solidariedade</span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Desde 2021, a RockAid combate a pobreza e leva esperança às
            comunidades mais vulneráveis de Uberlândia.
          </motion.p>

          {/* Próximo Evento */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-lg font-semibold font-poppins mb-4 text-[#E83908]">
              Próxima Ação Solidária
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <Calendar size={16} />
                <span>Sábado, 15 de Dezembro</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MapPin size={16} />
                <span>Assentamento Maná - Uberlândia</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              onClick={scrollToNext}
              className="bg-[#E83908] hover:bg-[#d12f00] text-white font-semibold px-8 py-3 rounded-md transition-colors text-lg"
            >
              Conheça Nosso Trabalho
            </Button>
            <Button
              onClick={() => {
                const element = document.getElementById("ajudar");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              variant="outline"
              className="border-white text-black hover:bg-white hover:border-[#E83908] border border-transparent font-semibold px-8 py-3 rounded-md transition-colors text-lg"
            >
              Como Ajudar
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <button
            onClick={scrollToNext}
            className="text-white hover:text-[#E83908] transition-colors animate-bounce"
          >
            <ChevronDown size={32} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
