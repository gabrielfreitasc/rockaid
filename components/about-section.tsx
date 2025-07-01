"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Heart, Sparkles } from "lucide-react";
import Image from "next/image";

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-black mb-4">
            Nossa <span className="text-[#E83908]">História</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            O que começou como uma conversa entre três amigos se transformou em
            uma força transformadora na comunidade de Uberlândia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-[#E83908] p-2 rounded-full flex-shrink-0">
                  <Sparkles size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold font-poppins text-black mb-2">
                    O Início (2021)
                  </h3>
                  <p className="text-gray-600">
                    Tudo começou com uma conversa entre três amigos que
                    compartilhavam o mesmo sonho: fazer a diferença na vida das
                    pessoas mais necessitadas. Em julho de 2021, realizamos
                    nossa primeira ação, servindo 146 refeições.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-[#E83908] p-2 rounded-full flex-shrink-0">
                  <Heart size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold font-poppins text-black mb-2">
                    Crescimento e Impacto
                  </h3>
                  <p className="text-gray-600">
                    Desde então, não paramos de crescer. Cada refeição servida,
                    cada cesta básica entregue e cada absorvente distribuído
                    representa uma vida tocada pela solidariedade e uma
                    esperança renovada.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-[#E83908] p-2 rounded-full flex-shrink-0">
                  <Users size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold font-poppins text-black mb-2">
                    Comunidade Atendida
                  </h3>
                  <p className="text-gray-600">
                    Focamos nossos esforços no Assentamento Maná e Assentamento
                    Renascer, em Uberlândia, onde distribuímos não apenas
                    alimentos, mas também roupas, calçados, fraldas e itens de
                    primeira necessidade.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/banner/colabore.jpg"
                alt="Três amigos planejando projeto de serviço comunitário"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#E83908] text-white p-4 rounded-lg shadow-lg">
              <p className="text-sm font-semibold">Desde 2021</p>
              <p className="text-xs">Transformando vidas</p>
            </div>
          </motion.div>
        </div>

        {/* Missão, Visão e Valores */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-[#E83908] p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Heart size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold font-poppins text-black mb-2">
              Missão
            </h3>
            <p className="text-gray-600 text-sm">
              Combater a pobreza e promover a dignidade humana através de ações
              solidárias diretas e eficazes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-[#E83908] p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Sparkles size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold font-poppins text-black mb-2">
              Visão
            </h3>
            <p className="text-gray-600 text-sm">
              Ser referência em transformação social, criando uma rede de
              solidariedade que inspire outras comunidades.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-[#E83908] p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Users size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-semibold font-poppins text-black mb-2">
              Valores
            </h3>
            <p className="text-gray-600 text-sm">
              Transparência, respeito, compromisso com a comunidade e a crença
              de que todos merecem dignidade.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
