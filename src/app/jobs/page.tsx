// pages/404.js
import Link from 'next/link';
import Errorpage from '@/app/error'; // Import your Errorpage component

export default function Custom404() {
  return (
    <Errorpage /> // Render the Errorpage component directly
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