import Link from 'next/link';

export default function Home() {
  return (
    <main
      className="bg-cover bg-no-repeat h-screen bg-center text-white"
      style={{ backgroundImage: 'url(/images/bg.jpg)' }}
    >
      <div className="flex items-center justify-center h-full bg-black bg-opacity-60 p-4 md:p-8">
        <div className="max-w-3xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to My Website</h1>
          <p className="text-lg md:text-xl mb-6">
            This is my assignment; you can check the details on my pages.
          </p>
          <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-4">
            <Link href="/about" className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded">
              About Me
            </Link>
            <Link href="/skills" className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded">
              My Skills
            </Link>
            <Link href="/jobs" className="bg-orange-500 hover:bg-orange-700 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded">
              Job Opportunities
            </Link>
            <Link href="/Contact" className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
