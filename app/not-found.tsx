import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center">
      <div className="text-center">
        <h1
          className="text-8xl font-bold text-[#0D1B2A] mb-4"
          style={{ fontFamily: "var(--playfair-font)" }}
        >
          404
        </h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-[#0D1B2A] text-white rounded-lg hover:bg-[#1A2A3A] transition-colors font-medium"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
