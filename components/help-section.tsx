
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CreditCard, Package, Users, Copy, Check } from 'lucide-react'
import { useState } from 'react'

export function HelpSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const [copied, setCopied] = useState(false)

  const copyPix = () => {
    navigator.clipboard.writeText('rockaidudi@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="ajudar" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-black mb-4">
            Como <span className="text-[#E83908]">Ajudar</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Existem várias formas de fazer parte desta transformação. Escolha a que mais combina com você 
            e ajude-nos a continuar mudando vidas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Doações em Dinheiro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="bg-[#E83908] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <CreditCard size={24} className="text-white" />
                </div>
                <CardTitle className="text-xl font-poppins">Doações em Dinheiro</CardTitle>
                <CardDescription>
                  Contribua financeiramente para maximizar nosso impacto
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-2">Chave PIX:</p>
                  <div className="flex items-center space-x-2">
                    <code className="text-sm font-mono bg-white p-2 rounded border flex-1">
                      rockaidudi@gmail.com
                    </code>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={copyPix}
                      className="flex items-center space-x-1"
                    >
                      {copied ? <Check size={16} /> : <Copy size={16} />}
                      <span className="sr-only">Copiar PIX</span>
                    </Button>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Suas doações nos ajudam a comprar alimentos frescos, itens de higiene e outros 
                  materiais essenciais para nossas ações.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Doações de Itens */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="bg-[#E83908] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Package size={24} className="text-white" />
                </div>
                <CardTitle className="text-xl font-poppins">Doações de Itens</CardTitle>
                <CardDescription>
                  Doe itens essenciais para as famílias necessitadas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Itens mais necessários:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Alimentos não perecíveis</li>
                    <li>• Produtos de higiene pessoal</li>
                    <li>• Absorventes e fraldas</li>
                    <li>• Roupas e calçados</li>
                    <li>• Materiais de limpeza</li>
                  </ul>
                </div>
                <Button
                  className="w-full bg-[#E83908] hover:bg-[#d12f00] text-white"
                  onClick={() => {
                    const element = document.getElementById('contato')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                >
                  Entre em Contato
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Seja Voluntário */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="bg-[#E83908] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users size={24} className="text-white" />
                </div>
                <CardTitle className="text-xl font-poppins">Seja Voluntário</CardTitle>
                <CardDescription>
                  Doe seu tempo e energia para fazer a diferença
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Como você pode ajudar:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Preparação de refeições</li>
                    <li>• Distribuição de cestas básicas</li>
                    <li>• Organização de eventos</li>
                    <li>• Divulgação das ações</li>
                    <li>• Captação de recursos</li>
                  </ul>
                </div>
                <Button
                  className="w-full bg-[#E83908] hover:bg-[#d12f00] text-white"
                  onClick={() => {
                    const element = document.getElementById('contato')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                >
                  Quero Ser Voluntário
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center bg-gray-50 p-8 rounded-lg"
        >
          <h3 className="text-2xl font-bold font-poppins text-black mb-4">
            Juntos Somos Mais Fortes
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Cada contribuição, por menor que seja, faz uma diferença significativa na vida de quem mais precisa. 
            Faça parte desta rede de solidariedade!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              className="bg-[#E83908] hover:bg-[#d12f00] text-white px-8 py-3 text-lg font-semibold"
              onClick={() => {
                const element = document.getElementById('contato')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              Entre em Contato
            </Button>
            <Button
              variant="outline"
              className="border-[#E83908] text-[#E83908] hover:bg-[#E83908] hover:text-white px-8 py-3 text-lg font-semibold"
              onClick={() => window.open('https://instagram.com/rockaidudi', '_blank')}
            >
              Siga no Instagram
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
