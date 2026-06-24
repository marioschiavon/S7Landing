"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { BarChart3, BrainCircuit, Code2 } from "lucide-react";

const VIEW_W = 1200;
const VIEW_H = 800;

type Hub = {
  id: string;
  x: number;
  y: number;
  label: string;
  icon: typeof Code2;
};

const hubs: Hub[] = [
  { id: "software", x: 150, y: 130, label: "Software", icon: Code2 },
  { id: "ia", x: 480, y: 730, label: "Inteligência Artificial", icon: BrainCircuit },
  { id: "negocios", x: 1050, y: 130, label: "Negócios", icon: BarChart3 },
];

const satellites = [
  { id: "s1", x: 90, y: 420, r: 4, parent: "software" },
  { id: "s2", x: 320, y: 110, r: 3, parent: "software" },
  { id: "s3", x: 470, y: 640, r: 4, parent: "ia" },
  { id: "s4", x: 760, y: 610, r: 3, parent: "ia" },
  { id: "s5", x: 1100, y: 410, r: 4, parent: "negocios" },
  { id: "s6", x: 880, y: 80, r: 3, parent: "negocios" },
  { id: "s7", x: 40, y: 150, r: 2.5, parent: "software" },
  { id: "s8", x: 1140, y: 130, r: 2.5, parent: "negocios" },
];

const hubMap = Object.fromEntries(hubs.map((h) => [h.id, h]));

function pct(value: number, total: number) {
  return `${(value / total) * 100}%`;
}

export function HeroNetworkBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const springX = useSpring(mvX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mvY, { stiffness: 40, damping: 20 });
  const translateX = useTransform(springX, [-0.5, 0.5], [-18, 18]);
  const translateY = useTransform(springY, [-0.5, 0.5], [-14, 14]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const el = ref.current;
    if (!el) return;

    const handleMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      mvX.set((e.clientX - rect.left) / rect.width - 0.5);
      mvY.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, [mvX, mvY, prefersReducedMotion]);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <motion.div
        style={
          prefersReducedMotion ? undefined : { x: translateX, y: translateY }
        }
        className="absolute inset-0"
      >
        <svg
          viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
          className="mask-fade-edges h-full w-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="edge-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1E8FE0" />
              <stop offset="100%" stopColor="#79C342" />
            </linearGradient>
          </defs>

          {/* hub-to-hub primary connections */}
          {[
            [hubMap.software, hubMap.ia],
            [hubMap.ia, hubMap.negocios],
            [hubMap.negocios, hubMap.software],
          ].map(([a, b], i) => (
            <path
              key={`${a.id}-${b.id}`}
              d={`M${a.x},${a.y} Q${(a.x + b.x) / 2},${(a.y + b.y) / 2 + (i % 2 === 0 ? 60 : -60)} ${b.x},${b.y}`}
              fill="none"
              stroke="url(#edge-grad)"
              strokeWidth={1.5}
              strokeOpacity={0.45}
              strokeDasharray="6 10"
              className={prefersReducedMotion ? undefined : "animate-[dash_5s_linear_infinite]"}
            />
          ))}

          {/* hub-to-satellite connections */}
          {satellites.map((s) => {
            const parent = hubMap[s.parent];
            return (
              <line
                key={s.id}
                x1={parent.x}
                y1={parent.y}
                x2={s.x}
                y2={s.y}
                stroke="#ffffff"
                strokeOpacity={0.08}
                strokeWidth={1}
              />
            );
          })}

          {/* satellite nodes */}
          {satellites.map((s) => (
            <circle
              key={s.id}
              cx={s.x}
              cy={s.y}
              r={s.r}
              fill="#ffffff"
              fillOpacity={0.35}
            />
          ))}

          {/* hub nodes */}
          {hubs.map((h) => (
            <circle
              key={h.id}
              cx={h.x}
              cy={h.y}
              r={5}
              fill="#ffffff"
              className={prefersReducedMotion ? undefined : "animate-pulse-soft"}
            />
          ))}
        </svg>

        {hubs.map((h, i) => {
          const Icon = h.icon;
          return (
            <div
              key={h.id}
              className={`absolute hidden -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full border border-white/10 bg-base-dark/60 px-3.5 py-2 backdrop-blur-md sm:flex ${
                prefersReducedMotion
                  ? ""
                  : i % 2 === 0
                    ? "animate-float"
                    : "animate-float-slow"
              }`}
              style={{ left: pct(h.x, VIEW_W), top: pct(h.y, VIEW_H) }}
            >
              <Icon size={14} className="text-accent-blue" />
              <span className="whitespace-nowrap font-mono text-[11px] uppercase tracking-wide text-white/70">
                {h.label}
              </span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
