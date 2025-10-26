import { Book, Download } from "lucide-react";

export default function Navbar({ onDownload }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold text-gray-900">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
            <Book className="h-5 w-5" />
          </span>
          <span className="text-lg">EduShare</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="#roadmap" className="hover:text-gray-900">Roadmap</a>
          <a href="#metrics" className="hover:text-gray-900">Success Metrics</a>
        </nav>
        <button
          onClick={onDownload}
          className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          <Download className="h-4 w-4" />
          Download PRD (PDF)
        </button>
      </div>
    </header>
  );
}
