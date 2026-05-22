"use client";

import React, { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { 
  ArrowRight, 
  Code2, 
  Headset, 
  Zap, 
  ShieldCheck, 
  BarChart3, 
  Layers, 
  Sparkles,
  ChevronRight,
  Terminal,
  Server
} from "lucide-react";

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

// 3D Parallax Component
const Interactive3DHero = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div 
      className="w-full h-[500px] flex items-center justify-center perspective-1000 relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full max-w-lg aspect-square flex items-center justify-center"
      >
        {/* Abstract 3D S7 Shield Representation */}
        
        {/* Base layer - Dark panel */}
        <div className="absolute w-[80%] h-[80%] rounded-3xl glass border-white/5 shadow-2xl translate-z-10 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
          <div className="w-full h-full bg-gradient-to-br from-black/80 to-transparent"></div>
        </div>

        {/* Middle layer - Blue glowing element */}
        <div className="absolute w-[60%] h-[60%] rounded-2xl bg-gradient-to-tr from-blue-600/20 to-blue-400/40 border border-blue-500/30 backdrop-blur-md translate-z-30 flex flex-col justify-between p-6">
           <Terminal size={32} className="text-blue-400 opacity-80" />
           <div className="space-y-2">
             <div className="h-2 w-1/2 bg-blue-400/50 rounded-full"></div>
             <div className="h-2 w-3/4 bg-blue-400/30 rounded-full"></div>
           </div>
        </div>

        {/* Top layer - Green accent element */}
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-2xl bg-gradient-to-bl from-lime-500/30 to-lime-400/10 border border-lime-400/40 backdrop-blur-xl translate-z-50 shadow-[0_0_30px_rgba(132,204,22,0.3)] flex items-end p-4">
           <div className="w-full space-y-2">
             <div className="flex justify-between items-end">
               <div className="h-8 w-2 bg-lime-400/80 rounded-t-sm"></div>
               <div className="h-12 w-2 bg-lime-400/80 rounded-t-sm"></div>
               <div className="h-6 w-2 bg-lime-400/80 rounded-t-sm"></div>
               <div className="h-16 w-2 bg-lime-400/80 rounded-t-sm shadow-[0_0_10px_rgba(132,204,22,0.8)]"></div>
             </div>
           </div>
        </div>

        {/* Floating text element */}
        <div className="absolute bottom-[10%] left-[10%] glass px-6 py-3 rounded-full border-white/20 translate-z-50 flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-lime-400 animate-pulse"></div>
          <span className="text-sm font-bold text-white tracking-wider">SYSTEM ACTIVE</span>
        </div>

      </motion.div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#060606] text-white overflow-hidden selection:bg-lime-500/30 font-sans">
      
      {/* AMBIENT LIGHTING */}
      <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="ambient-glow glow-blue top-0 left-0 -translate-x-1/3 -translate-y-1/3 opacity-20"></div>
        <div className="ambient-glow glow-green bottom-0 right-0 translate-x-1/3 translate-y-1/3 opacity-15"></div>
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 glass border-b-0 border-white/5 py-5 px-6 md:px-12 flex justify-between items-center transition-all duration-300">
        <div className="flex items-center gap-3">
          <img src="/s7-logo.jpg" alt="S7 Logo" className="w-10 h-10 rounded-lg shadow-lg object-cover border border-white/10" />
          <span className="font-extrabold tracking-widest text-lg hidden sm:block">S7 TECH</span>
        </div>
        <div className="hidden md:flex gap-10 text-sm font-bold text-gray-400 uppercase tracking-widest">
          <a href="#solucoes" className="hover:text-white transition-colors">Soluções</a>
          <a href="#produtos" className="hover:text-white transition-colors">Produtos</a>
          <a href="#metodologia" className="hover:text-white transition-colors">Metodologia</a>
        </div>
        <button className="px-6 py-3 rounded-full bg-white text-black text-sm font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.2)]">
          Falar com um Sócio
        </button>
      </nav>

      <main className="relative z-10 pt-40 pb-24 px-6 md:px-12 max-w-[90rem] mx-auto space-y-40">
        
        {/* HERO SECTION - Outcome Focused & 3D Interactive */}
        <section className="min-h-[85vh] grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 z-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-lime-500/30 text-sm font-medium text-lime-400"
            >
              <Code2 size={16} />
              <span>Software Development Agency</span>
            </motion.div>
            
            {/* SNAPTECH STYLE MASSIVE HEADLINE */}
            <motion.h1 
              initial="hidden" animate="visible" variants={fadeIn}
              className="text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter leading-[0.95] text-white"
            >
              Desenvolvemos <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">
                softwares que
              </span> <br/>
              <span className="text-gradient-accent">escalam negócios.</span>
            </motion.h1>
            
            <motion.p 
              initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 max-w-lg font-medium leading-relaxed"
            >
              Arquiteturas limpas, automação B2B e tecnologia proprietária. 
              Somos o braço técnico que transforma sua visão em operações ultra-eficientes.
            </motion.p>
            
            <motion.div 
              initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-5 pt-4"
            >
              <a href="#contato" className="px-8 py-5 rounded-full bg-lime-400 text-black font-extrabold flex items-center justify-center gap-2 hover:bg-lime-300 transition-colors shadow-[0_0_30px_rgba(132,204,22,0.3)]">
                Agendar Consultoria Técnica <ArrowRight size={18} />
              </a>
              <a href="#produtos" className="px-8 py-5 rounded-full glass border border-white/10 text-white font-bold hover:bg-white/5 transition-colors flex items-center justify-center">
                Ver Nossos Produtos
              </a>
            </motion.div>
            
            {/* Social Proof Bar */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1 }}
              className="pt-12 flex items-center gap-6"
            >
              <div className="flex -space-x-4">
                <div className="w-10 h-10 rounded-full border-2 border-black bg-gray-800"></div>
                <div className="w-10 h-10 rounded-full border-2 border-black bg-gray-700"></div>
                <div className="w-10 h-10 rounded-full border-2 border-black bg-gray-600"></div>
              </div>
              <p className="text-sm text-gray-500 font-medium">Tecnologia por trás de <strong className="text-white">milhões</strong> de interações diárias.</p>
            </motion.div>
          </div>
          
          <div className="hidden lg:flex justify-end relative z-0">
            <Interactive3DHero />
          </div>
        </section>

        {/* PROBLEM / SOLUTION (Asymmetrical Layout) */}
        <section id="metodologia" className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
            className="lg:col-span-5 space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Por que a maioria dos softwares falham?
            </h2>
            <p className="text-xl text-gray-400">
              Débito técnico, arquiteturas monolíticas engessadas e falta de suporte especializado destroem a escala de grandes ideias.
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="lg:col-span-7 grid sm:grid-cols-2 gap-6"
          >
            <motion.div variants={fadeIn} className="glass p-8 rounded-3xl border-l-4 border-l-blue-500 hover:-translate-y-2 transition-transform duration-300">
              <Server className="text-blue-400 mb-6" size={36} />
              <h3 className="text-2xl font-bold mb-3">Cloud-Native</h3>
              <p className="text-gray-400">Desenvolvemos infraestruturas elásticas focadas em performance e disponibilidade de 99.9%.</p>
            </motion.div>
            <motion.div variants={fadeIn} className="glass p-8 rounded-3xl border-l-4 border-l-lime-500 hover:-translate-y-2 transition-transform duration-300 sm:mt-12">
              <Layers className="text-lime-400 mb-6" size={36} />
              <h3 className="text-2xl font-bold mb-3">Código Limpo</h3>
              <p className="text-gray-400">Padrões globais de arquitetura de software para garantir que o projeto nunca fique legado.</p>
            </motion.div>
          </motion.div>
        </section>

        {/* PROPRIETARY TECHNOLOGY SECTION */}
        <section id="produtos" className="space-y-20">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-black">Nossa Tecnologia.</h2>
            <p className="text-xl text-gray-400">
              Não somos apenas uma agência. Nós construímos e utilizamos nossas próprias ferramentas de automação e gestão para escalar operações B2B.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Hook7 Card */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="glass p-10 md:p-14 rounded-[2.5rem] relative overflow-hidden group border border-white/5 hover:border-blue-500/30 transition-colors"
            >
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 group-hover:bg-blue-500/20 transition-all duration-700"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 bg-blue-500/20 border border-blue-500/40 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-md">
                  <Zap className="text-blue-400" size={32} />
                </div>
                <h3 className="text-4xl font-black mb-4">Hook7</h3>
                <p className="text-lg text-gray-400 mb-8 max-w-md flex-grow">
                  A API de WhatsApp não oficial mais rápida do mercado. Construída para automação extrema, fluxos complexos e integração imediata com seus sistemas internos.
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-blue-400 font-bold uppercase tracking-wider hover:gap-4 transition-all">
                  Explorar Documentação <ChevronRight size={20} />
                </a>
              </div>
            </motion.div>

            {/* Desk7 Card */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="glass p-10 md:p-14 rounded-[2.5rem] relative overflow-hidden group border border-white/5 hover:border-lime-500/30 transition-colors"
            >
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lime-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 group-hover:bg-lime-500/20 transition-all duration-700"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 bg-lime-500/20 border border-lime-500/40 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-md">
                  <Headset className="text-lime-400" size={32} />
                </div>
                <h3 className="text-4xl font-black mb-4">Desk7</h3>
                <p className="text-lg text-gray-400 mb-8 max-w-md flex-grow">
                  Terceirização premium de suporte técnico (N1 e N2) B2B. Fornecemos a equipe, a tecnologia e os processos para empresas de software que não querem se preocupar com atendimento.
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-lime-400 font-bold uppercase tracking-wider hover:gap-4 transition-all">
                  Terceirizar Suporte <ChevronRight size={20} />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FINAL CTA (Urgency & Contrast) */}
        <section className="relative rounded-[3rem] overflow-hidden bg-white text-black p-12 md:p-24 text-center">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" style={{ filter: 'invert(1)' }}></div>
          <div className="relative z-10 space-y-10 max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
              A arquitetura perfeita para o seu próximo grande salto.
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 font-medium">
              Não construímos apenas software. Damos vida à sua visão com escala empresarial.
            </p>
            <div className="pt-8">
              <button className="px-12 py-6 rounded-full bg-black text-white font-black text-xl hover:scale-105 transition-transform shadow-2xl flex items-center gap-3 mx-auto">
                Agendar Reunião Técnica <ArrowRight size={24} />
              </button>
            </div>
            <p className="text-sm text-gray-500 font-bold uppercase tracking-widest pt-4">Vagas limitadas para novos projetos neste trimestre</p>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 pt-20 pb-10 px-6 md:px-12 bg-[#030303]">
        <div className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/s7-logo.jpg" alt="S7 Logo" className="w-8 h-8 rounded-md object-cover border border-white/20" />
              <span className="font-black text-white tracking-widest text-xl">S7 TECH</span>
            </div>
            <p className="text-gray-400 max-w-md text-lg">
              Fábrica de software de alta performance e desenvolvedora de ecossistemas digitais escaláveis.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Produtos</h4>
            <ul className="space-y-4 font-medium text-gray-500">
              <li><a href="#" className="hover:text-lime-400 transition-colors">Hook7 API</a></li>
              <li><a href="#" className="hover:text-lime-400 transition-colors">Desk7 Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Contato</h4>
            <ul className="space-y-4 font-medium text-gray-500">
              <li><a href="#" className="hover:text-blue-400 transition-colors">hello@s7tech.com</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Trabalhe Conosco</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-[90rem] mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-gray-600 font-medium">
          <p>&copy; {new Date().getFullYear()} S7 Technology. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
