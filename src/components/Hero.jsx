import { Rocket, Star, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero({ onDownload }) {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-teal-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-medium text-indigo-700">
              <Rocket className="h-4 w-4" />
              PRD + Development Roadmap
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              EduShare – Student Notes & Resource Platform
            </h1>
            <p className="text-lg text-gray-600">
              A modern, minimal hub where students and faculty can upload, discover, and share academic resources — organized by subject, semester, department, and more.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-2.5 text-white font-medium shadow hover:bg-indigo-500"
              >
                Explore Features
              </a>
              <a
                href="#roadmap"
                className="inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-gray-900 font-medium shadow border border-gray-200 hover:bg-gray-50"
              >
                View Roadmap
              </a>
              <button
                onClick={onDownload}
                className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-2.5 text-white font-medium shadow hover:bg-gray-800"
              >
                Download PRD
              </button>
            </div>
            <div className="flex items-center gap-6 pt-4 text-gray-600">
              <div className="flex items-center gap-2"><Star className="h-5 w-5 text-yellow-500" /><span>Fast, clean UI</span></div>
              <div className="flex items-center gap-2"><Users className="h-5 w-5 text-indigo-600" /><span>Built for collaboration</span></div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl bg-white shadow-xl border border-gray-100 overflow-hidden">
              <div className="h-full w-full p-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 text-white p-4">
                  <p className="font-semibold">Upload Notes</p>
                  <p className="text-sm text-indigo-50">PDFs, PPTs, links</p>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white p-4">
                  <p className="font-semibold">Smart Filters</p>
                  <p className="text-sm text-emerald-50">Subject, semester</p>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 text-white p-4">
                  <p className="font-semibold">Community</p>
                  <p className="text-sm text-rose-50">Comments & doubts</p>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 text-white p-4">
                  <p className="font-semibold">Admin & Stats</p>
                  <p className="text-sm text-amber-50">Manage, track</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
