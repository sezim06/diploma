// import "./Pages.css";
// // import video from "../assets/video.mp4";

// export default function Home() {
//   return (
//     <div className="Home">
//       <div className="text-block">
//         <a href="https://youtu.be/KwXyVh1zIhM">
//           <h1>Welcome to My Page</h1>
//         </a>
//         <p>
//           This is my home page. Here you will find the best books, novels,
//           recipes, crime books and thrillers.
//         </p>
//         <a href="https://youtu.be/KwXyVh1zIhM">
//           <h1>My Interests</h1>
//         </a>

//         <ul>
//           <a href="https://youtu.be/5wvgJePdZ7s">
//             <li>Reading</li>
//           </a>
//           <a href="https://youtu.be/jxcMRkqaQdw">
//             <li>Books</li>
//           </a>
//           <a href="https://youtu.be/TcgqDs-95Uw">
//             <li>Traveling</li>
//           </a>
//         </ul>
//         <a href="https://youtu.be/KwXyVh1zIhM">
//           <h1>My Favorite Books</h1>
//         </a>
//         <ul>
//           <li>The Great Gatsby by F. Scott Fitzgerald</li>
//           <li>To Kill a Mockingbird by Harper Lee</li>
//           <li>Pride and Prejudice by Jane Austen</li>
//         </ul>
//       </div>
   
//       {/* <video widt5="400" height="300" controls>
//           <source src={video} type="video/mp4" />
//         </video> */}

//     </div>
//   );
// }



import React, { useState } from 'react';
import './Pages.css';

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'https://i.pinimg.com/564x/fa/10/d7/fa10d7d0f9497985caf610e37cef9cad.jpg',
    'https://i.pinimg.com/564x/d3/32/04/d3320482fe80b45d530392a9f1d72532.jpg',
    'https://i.pinimg.com/564x/81/5f/ef/815fef5d95ef3e44a268e6bf11b3d992.jpg',
    'https://i.pinimg.com/564x/f2/34/f5/f234f5766cbe5203b95847c2332f52c2.jpg',
    'https://i.pinimg.com/564x/82/9a/3f/829a3f1bbf624a8dfabc039760d8b367.jpg', // Replace this URL with the URL of the next image
    // Add other image URLs as needed
  ];

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleScroll = (event) => {
    const delta = Math.sign(event.deltaY);
    if (delta > 0) {
      // Scroll down, go to the next image or loop back to the first image
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else if (delta < 0) {
      // Scroll up, go to the previous image or loop back to the last image
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="Home" onWheel={handleScroll}>
      <div className="slider-container">
        {images.map((image, index) => (
          <img
            key={index}
            className={`slider-image ${index === currentImageIndex ? 'active-in-home' : ''}`}
            src={image}
            alt="background"
          />
        ))}
        <button className="arrow prev" onClick={goToPreviousImage}>
          &lt;
        </button>
        <button className="arrow next" onClick={goToNextImage}>
          &gt;
        </button>
      </div>
      <div className="div-of-dots">
        {images.map((image, index) => (
          <button
            key={index}
            className={`dot ${index === currentImageIndex ? 'active-in-home' : ''}`}
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
