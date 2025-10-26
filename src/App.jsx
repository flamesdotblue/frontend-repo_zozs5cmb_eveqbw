import { useCallback } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureGrid from "./components/FeatureGrid";
import PhaseTimeline from "./components/PhaseTimeline";

function App() {
  const handleDownload = useCallback(() => {
    // Simple, reliable way to generate a shareable PDF: use the browser's print-to-PDF
    window.print();
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar onDownload={handleDownload} />
      <main>
        <Hero onDownload={handleDownload} />
        <FeatureGrid />
        <section id="metrics" className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold tracking-tight">Success Metrics</h2>
              <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                We’ll track engagement and quality to ensure EduShare drives real academic impact.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-gray-500">Uploads / Downloads</p>
                <p className="mt-2 text-3xl font-bold">10K+</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-gray-500">Daily Active Users</p>
                <p className="mt-2 text-3xl font-bold">1K+</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-gray-500">Search Accuracy</p>
                <p className="mt-2 text-3xl font-bold">>95%</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <p className="text-sm text-gray-500">User Satisfaction</p>
                <p className="mt-2 text-3xl font-bold">4.7/5</p>
              </div>
            </div>
          </div>
        </section>
        <PhaseTimeline />
      </main>
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} EduShare PRD • Built for fast sharing and collaboration.
        </div>
      </footer>
    </div>
  );
}

export default App;
