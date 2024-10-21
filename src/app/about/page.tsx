export default async function About() {
    await new Promise((resolve) => {
        setTimeout(resolve, 5000);
    });

    return (
        <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/bg.jpg)' }}>
            <main className="bg-black bg-opacity-50 rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-6 text-white">About This Project</h1>

                <h2 className="text-2xl font-semibold mt-4 underline text-white">Key Features:</h2>
                <ul className="list-disc list-inside mb-4 text-white">
                    <li><strong>Loading States:</strong> Visual feedback during data fetching.</li>
                    <li><strong>Error Handling:</strong> Graceful error management with error boundaries.</li>
                    <li><strong>Custom 404 Page:</strong> User-friendly guidance for missing pages.</li>
                    <li><strong>Responsive Design:</strong> Optimized for all devices.</li>
                    <li><strong>File-Based Routing:</strong> Seamless navigation between pages.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-4 underline text-white">Technologies Used:</h2>
                <ul className="list-disc list-inside mb-4 text-white">
                    <li>Next.js</li>
                    <li>React</li>
                    <li>Tailwind CSS</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-4 underline text-white">Conclusion:</h2>
                <p className="text-white">This project emphasizes modern web development practices and user experience.</p>
            </main>
        </div>
    );
}
