import { CalendarCheck2, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const phases = [
  { title: "Planning & Setup", week: "Week 1", items: ["Finalize PRD", "Repo + Project config", "Initialize frontend, backend, DB"] },
  { title: "UI Design", week: "Week 2", items: ["Navbar, Search, Filters", "Notes grid", "Auth pages & Upload modal UI"] },
  { title: "Authentication", week: "Week 3", items: ["Google + Email login", "Protected routes"] },
  { title: "Notes CRUD", week: "Week 4", items: ["Upload form", "Fetch & display", "Preview/Download"] },
  { title: "Filters & Search", week: "Week 5", items: ["Full search bar", "Filter by subject/department/type"] },
  { title: "Community", week: "Week 6", items: ["Doubts Q&A", "Comments, ratings, bookmarks"] },
  { title: "Admin & Dashboard", week: "Week 7", items: ["Moderation tools", "Analytics & stats"] },
  { title: "Optimization & Testing", week: "Week 8", items: ["Responsiveness", "Error handling", "Security checks"] },
  { title: "Deployment", week: "Week 9", items: ["Deploy FE + BE", "Domain + env setup"] },
  { title: "Beta & Feedback", week: "Week 10", items: ["Internal testing", "Collect feedback", "Final polish"] },
];

export default function PhaseTimeline() {
  return (
    <section id="roadmap" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Phase-wise Development Roadmap</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            A clear schedule to take EduShare from idea to a polished, production-ready release.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-indigo-200 to-indigo-400" />
          <div className="space-y-8">
            {phases.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className={`relative sm:flex ${i % 2 ? "sm:flex-row-reverse" : ""} sm:items-center gap-6`}
              >
                <div className="sm:w-1/2">
                  <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-200">
                    <div className="flex items-center gap-2 text-indigo-700 font-medium">
                      <CalendarCheck2 className="h-5 w-5" /> {p.week}
                    </div>
                    <h3 className="mt-1 text-xl font-semibold text-gray-900">{p.title}</h3>
                    <ul className="mt-2 space-y-1 text-gray-600 text-sm">
                      {p.items.map((it) => (
                        <li key={it} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500" /> {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="hidden sm:block sm:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
