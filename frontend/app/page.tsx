"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">

      <Navbar />

      <div className="absolute inset-0">

        <div className="absolute left-20 top-20 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />

        <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

      </div>

      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center">

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-7xl font-bold"
        >
          <span className="gradient-text">
            MockMate
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 max-w-2xl text-center text-xl text-zinc-400"
        >
          AI-powered interview preparation platform with
          resume analysis, gap detection, adaptive
          questions, scoring and analytics.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex gap-4"
        >
          <button className="rounded-xl bg-purple-600 px-6 py-3 font-medium hover:bg-purple-700">
            Start Analysis
          </button>

          <button className="glass rounded-xl px-6 py-3">
            View Demo
          </button>
        </motion.div>

      </section>

    </main>
  );
}