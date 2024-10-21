export default function Skills() {
    return (
        <main className="bg-cover h-screen bg-center text-white" 
              style={{ backgroundImage: 'url(/images/bg.jpg)' }}>
            <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50 p-8">
                <h1 className="font-serif font-bold text-4xl mb-6">My Skills</h1>
                <ul className="list-disc list-inside text-lg">
                    <li className="mb-4">
                        <span className="font-semibold">Next.js:</span> A powerful React framework for building server-rendered applications.
                    </li>
                    <li className="mb-4">
                        <span className="font-semibold">React:</span> A JavaScript library for building user interfaces with reusable components.
                    </li>
                    <li className="mb-4">
                        <span className="font-semibold">Tailwind CSS:</span> A utility-first CSS framework for creating custom designs quickly.
                    </li>
                    <li className="mb-4">
                        <span className="font-semibold">TypeScript:</span> A superset of JavaScript that adds static types for better code quality.
                    </li>
                    <li className="mb-4">
                        <span className="font-semibold">JavaScript:</span> A versatile programming language for web development and beyond.
                    </li>
                    <li className="mb-4">
                        <span className="font-semibold">HTML:</span> The standard markup language for creating web pages.
                    </li>
                    <li className="mb-4">
                        <span className="font-semibold">CSS:</span> The stylesheet language used for describing the presentation of a document written in HTML.
                    </li>
                </ul>
            </div>
        </main>
    );
}
