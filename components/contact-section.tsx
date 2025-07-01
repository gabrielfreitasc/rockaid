
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Instagram, MapPin, Clock } from 'lucide-react'

export function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const contacts = [
    {
      icon: Mail,
      title: 'Email Geral',
      description: 'Para dúvidas e informações',
      info: 'contato@rockaid.org',
      action: 'mailto:contato@rockaid.org'
    },
    {
      icon: Mail,
      title: 'Email para Doações',
      description: 'Chave PIX e doações',
      info: 'rockaidudi@gmail.com',
      action: 'mailto:rockaidudi@gmail.com'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      description: 'Acompanhe nossas ações',
      info: '@rockaidudi',
      action: 'https://instagram.com/rockaidudi'
    },
    {
      icon: MapPin,
      title: 'Localização',
      description: 'Onde atuamos',
      info: 'Uberlândia - MG',
      action: null
    }
  ]

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-poppins text-black mb-4">
            Entre em <span className="text-[#E83908]">Contato</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Estamos aqui para esclarecer suas dúvidas, receber suas sugestões ou te ajudar a fazer parte 
            desta rede de solidariedade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card 
                className={`h-full hover:shadow-lg transition-all duration-300 ${
                  contact.action ? 'cursor-pointer hover:scale-105' : ''
                }`}
                onClick={() => {
                  if (contact.action) {
                    if (contact.action.startsWith('http')) {
                      window.open(contact.action, '_blank')
                    } else {
                      window.location.href = contact.action
                    }
                  }
                }}
              >
                <CardHeader className="text-center">
                  <div className="bg-[#E83908] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <contact.icon size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-lg font-poppins">{contact.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {contact.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-semibold text-[#E83908]">{contact.info}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Informações Adicionais */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <div className="bg-[#E83908] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock size={24} className="text-white" />
              </div>
              <CardTitle className="text-xl font-poppins">Horário de Atendimento</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-gray-800">Email e Redes Sociais</p>
                  <p className="text-gray-600">Respondemos dentro de 24 horas</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Ações Presenciais</p>
                  <p className="text-gray-600">Aos sábados, conforme cronograma</p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <strong className="text-black">Associação Rock Aid</strong> - CNPJ em processo de regularização
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Organização sem fins lucrativos dedicada ao combate à pobreza e à transformação social
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
