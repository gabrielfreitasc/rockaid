
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { UtensilsCrossed, ShoppingBasket, HeartHandshake, Shirt } from 'lucide-react'
import { CountUp } from '@/components/ui/count-up'

export function ActionsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const stats = [
    {
      icon: UtensilsCrossed,
      number: 10000,
      label: 'Refeições Servidas',
      description: 'Desde a primeira ação em julho de 2021',
      color: 'bg-[#E83908]'
    },
    {
      icon: ShoppingBasket,
      number: 500,
      label: 'Cestas Básicas',
      description: 'Distribuídas para famílias necessitadas',
      color: 'bg-[#E83908]'
    },
    {
      icon: HeartHandshake,
      number: 2000,
      label: 'Itens de Higiene',
      description: 'Combatendo a pobreza menstrual',
      color: 'bg-[#E83908]'
    },
    {
      icon: Shirt,
      number: 1500,
      label: 'Peças de Roupas',
      description: 'Roupas, calçados e itens essenciais',
      color: 'bg-[#E83908]'
    }
  ]

  return (
    <section id="acoes" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins mb-4">
            Nossas <span className="text-[#E83908]">Conquistas</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Cada número representa vidas transformadas, sorrisos compartilhados e esperança renovada. 
            Veja o impacto que conseguimos gerar juntos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="relative">
                <div className={`${stat.color} p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                  <stat.icon size={32} className="text-white" />
                </div>
                
                <div className="space-y-2">
                  <div className="text-4xl font-bold font-poppins text-[#E83908]">
                    {inView && <CountUp end={stat.number} duration={2} />}+
                  </div>
                  <h3 className="text-xl font-semibold font-poppins">
                    {stat.label}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {stat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Áreas de Atuação */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-semibold font-poppins text-center mb-12">
            Onde <span className="text-[#E83908]">Atuamos</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors duration-300">
              <h4 className="text-xl font-semibold font-poppins mb-3 text-[#E83908]">
                Assentamento Maná
              </h4>
              <p className="text-gray-300 text-sm">
                Uma das principais comunidades atendidas, onde realizamos distribuição regular de alimentos, 
                roupas e itens de primeira necessidade.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors duration-300">
              <h4 className="text-xl font-semibold font-poppins mb-3 text-[#E83908]">
                Assentamento Renascer
              </h4>
              <p className="text-gray-300 text-sm">
                Comunidade onde focamos especialmente no combate à pobreza menstrual e na distribuição 
                de fraldas para crianças e idosos.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
