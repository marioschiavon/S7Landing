"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { GlowOrb } from "@/components/ui/glow-orb";
import { HeroNetworkBackground } from "@/components/sections/hero-network-background";
import { siteConfig } from "@/lib/site-config";

const PREMIUM_EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: PREMIUM_EASE },
  }),
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100vh] items-center overflow-hidden pt-28 pb-20"
    >
      <div className="absolute inset-0 bg-dot-grid mask-fade-bottom opacity-40" />
      <GlowOrb variant="blue" className="-left-40 top-10 h-[28rem] w-[28rem] opacity-30" />
      <GlowOrb variant="green" className="-right-40 bottom-0 h-[30rem] w-[30rem] opacity-25" />
      <HeroNetworkBackground />

      <Container className="relative z-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
          >
            <Badge icon={<Sparkles size={14} className="text-accent-blue" />}>
              Software · Inteligência Artificial · Automação
            </Badge>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.08}
            variants={fadeUp}
            className="text-balance text-5xl font-bold leading-[1.08] tracking-tight text-white md:text-6xl"
          >
            Construímos software que
            <br />
            <span className="text-gradient-brand">transforma negócios.</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.16}
            variants={fadeUp}
            className="max-w-2xl text-lg leading-relaxed text-white/55 md:text-xl"
          >
            Desenvolvemos soluções digitais, automações inteligentes e
            produtos SaaS para empresas que querem crescer mais rápido.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.26}
            variants={fadeUp}
            className="flex flex-col gap-4 pt-2 sm:flex-row"
          >
            <Button href={siteConfig.cta.primary.href} variant="primary" size="lg">
              {siteConfig.cta.primary.label}
            </Button>
            <Button
              href={siteConfig.cta.secondary.href}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="lg"
              icon={false}
            >
              {siteConfig.cta.secondary.label}
            </Button>
          </motion.div>
        </div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute inset-x-0 bottom-8 hidden justify-center md:flex"
      >
        <div className="flex h-9 w-6 items-start justify-center rounded-full border border-white/15 p-1">
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-gradient-brand"
          />
        </div>
      </motion.div>
    </section>
  );
}
