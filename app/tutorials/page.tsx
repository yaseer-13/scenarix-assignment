import Link from "next/link";

export default function Tutorials() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Tutorials</h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Learn how to create amazing artwork with MagicMoments
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tutorials.map((tutorial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                    {tutorial.level}
                  </span>
                  <span className="ml-2 text-gray-600 dark:text-gray-300">
                    {tutorial.duration}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{tutorial.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {tutorial.description}
                </p>
                <Link
                  href={tutorial.link}
                  className="inline-flex items-center text-purple-600 hover:text-purple-700"
                >
                  Start Tutorial
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Want to learn more?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Check out our blog for the latest tips and tricks
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            Visit Blog
          </Link>
        </div>
      </div>
    </div>
  );
}

const tutorials = [
  {
    title: "Getting Started with MagicMoments",
    description:
      "Learn the basics of using our AI art generator and create your first masterpiece",
    level: "Beginner",
    duration: "15 min",
    link: "/tutorials/getting-started",
  },
  {
    title: "Advanced Prompt Engineering",
    description:
      "Master the art of writing effective prompts to get the best results",
    level: "Intermediate",
    duration: "30 min",
    link: "/tutorials/prompt-engineering",
  },
  {
    title: "Creating Custom Art Styles",
    description: "Learn how to develop and save your own unique art styles",
    level: "Advanced",
    duration: "45 min",
    link: "/tutorials/custom-styles",
  },
  {
    title: "Image Editing and Refinement",
    description: "Discover how to enhance and refine your AI-generated artwork",
    level: "Intermediate",
    duration: "25 min",
    link: "/tutorials/image-editing",
  },
];
