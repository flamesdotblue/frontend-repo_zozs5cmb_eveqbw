import { UploadCloud, Search, ShieldCheck, MessageSquare, Bookmark, Star, Share2 } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: UploadCloud,
    title: "Upload & Categorize",
    desc: "Share PDFs, PPTs, images, and links categorized by department, subject, semester, and type.",
  },
  { icon: Search, title: "Search & Filter", desc: "Find materials fast with search and smart filters by tags, uploader, and faculty." },
  { icon: Bookmark, title: "Bookmarks", desc: "Save favorite resources to revisit later across devices." },
  { icon: MessageSquare, title: "Ask Doubts", desc: "Post academic questions and get help from peers and faculty." },
  { icon: Star, title: "Ratings & Feedback", desc: "Rate notes and leave constructive comments for quality control." },
  { icon: ShieldCheck, title: "Verified Uploads", desc: "Highlight faculty-verified materials for extra trust." },
  { icon: Share2, title: "Easy Sharing", desc: "Share via link or WhatsApp to help classmates quickly access resources." },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Core Features</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            A focused set of tools that make discovering and sharing study materials effortless.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-700">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-1 text-gray-600 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
