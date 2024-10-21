import Link from 'next/link';

export default function JobsPage() {
  return (
    <main
      className="bg-cover bg-no-repeat h-screen bg-center text-white"
      style={{ backgroundImage: 'url(/images/bg.jpg)' }} // Update the image path as needed
    >
      <div className="flex items-center justify-center h-full bg-black bg-opacity-60 p-4 md:p-8">
        <div className="max-w-3xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Job Opportunities</h1>
          <p className="text-lg md:text-xl mb-6">
            Explore our latest job openings and take the next step in your career.
          </p>
          <div className="bg-white text-black rounded-lg shadow-lg p-6">
            <h2 className="font-semibold text-2xl mb-4">Available Positions</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Frontend Developer</strong> - Build and maintain user interfaces. 
                <Link href="/apply" className="text-blue-500 underline"> Apply Now</Link>
              </li>
              <li>
                <strong>Backend Developer</strong> - Work on server-side logic and APIs.
                <Link href="/apply" className="text-blue-500 underline"> Apply Now</Link>
              </li>
              <li>
                <strong>UI/UX Designer</strong> - Design user-friendly interfaces and experiences.
                <Link href="/apply" className="text-blue-500 underline"> Apply Now</Link>
              </li>
              <li>
                <strong>Project Manager</strong> - Oversee project development and team collaboration.
                <Link href="/apply" className="text-blue-500 underline"> Apply Now</Link>
              </li>
            </ul>
          </div>
          <div className="mt-6">
            <Link href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}







































// export default function Jobs () {
//     throw new Error ("job page not yet implemented");
    
//     return (
//         <div>

            

//             <h1> <p className="home-background text-black"> We connect talented individuals with exciting job opportunities in the tech industry. Our platform features a range of positions, from entry-level to experienced roles, across various sectors. Explore the latest job listings and take the next step in your career with us!
//             </p></h1>

//         </div>
//     )
// }