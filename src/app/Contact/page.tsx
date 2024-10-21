export default function Contact() {
    return (
        <div 
            className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat" 
            style={{ backgroundImage: 'url(/images/bg.jpg)' }}
        >
            <div className="bg-black bg-opacity-60 rounded-lg shadow-lg p-8 max-w-md w-full">
                <h1 className="font-semibold text-3xl mb-4 text-white text-center">
                    <b><u>Contact Us:</u></b>
                </h1>
                <div className="text-justify font-arial text-white">
                    <h3 className="font-semibold text-lg">Address:</h3>
                    <p>1234 Example St.<br />
                    Suite 567<br />
                    Cityville, ST 12345</p>
                    
                    <br />

                    <h3 className="font-semibold text-lg">Phone:</h3>
                    <p>(123) 456-7890</p>

                    <br />

                    <h3 className="font-semibold text-lg">Email:</h3>
                    <p>info@example.com</p>

                    <br />

                    <h3 className="font-semibold text-lg">Follow Us:</h3>
                    <p>Facebook: facebook.com/example<br />
                    Twitter: twitter.com/example<br />
                    Instagram: instagram.com/example</p>
                </div>
            </div>
        </div>
    );
}
