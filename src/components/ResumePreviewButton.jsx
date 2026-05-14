import resumePdf from "../assets/AniketPokale.pdf";

export default function ResumePreviewButton() {
  return (
    <a
      href={resumePdf}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-6 bottom-6 z-50 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-4 text-sm font-semibold text-white shadow-xl shadow-blue-500/20 transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
      aria-label="Preview Resume"
    >
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      Resume
    </a>
  );
}
