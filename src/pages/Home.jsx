export default function Home() {
  return (
    <div className="flex flex-col items-center text-center py-12 px-4 md:px-8">
      {/* Hero Title */}
      <h1 className="text-5xl font-extrabold text-blue-600 mb-4">
        Welcome to My First React Project 🚀
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mb-6">
        This is a  front-end application for the Power Learn Project (PLP). It showcases modern React development with state management, API integration, and dark mode using Tailwind CSS.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        <a href="/tasks" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow transition">
          Explore Tasks
        </a>
        <a href="/posts" className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded shadow transition">
          View API Posts
        </a>
      </div>

      {/* Tech Stack Card */}
      <div className="mt-10 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 max-w-md w-full">
        <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Tech Stack</h2>
        <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
          <li>React (Hooks, Components)</li>
          <li>Vite (Fast build tool)</li>
          <li>Tailwind CSS (Responsive utility-first CSS)</li>
          <li>React Router (Multi-page support)</li>
          <li>Context API (Dark Mode Theme)</li>
          <li>API Integration (JSONPlaceholder)</li>
        </ul>
      </div>
    </div>
  );
}
