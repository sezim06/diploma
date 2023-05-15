import "./Pages.css";
// import video from "../assets/video.mp4";


export default function Home() {
  return (
    <div className="Home">
      <div className="text-block">
        <a href="https://youtu.be/KwXyVh1zIhM">
          <h1>Welcome to My Page</h1>
        </a>
        <p>
          This is my home page. Here you will find the best books, novels,
          recipes, crime books and thrillers.
        </p>
        <a href="https://youtu.be/KwXyVh1zIhM">
          <h1>My Interests</h1>
        </a>

        <ul>
          <a href="https://youtu.be/5wvgJePdZ7s">
            <li>Reading</li>
          </a>
          <a href="https://youtu.be/jxcMRkqaQdw">
            <li>Books</li>
          </a>
          <a href="https://youtu.be/TcgqDs-95Uw">
            <li>Traveling</li>
          </a>
        </ul>
        <a href="https://youtu.be/KwXyVh1zIhM">
          <h1>My Favorite Books</h1>
        </a>
        <ul>
          <li>The Great Gatsby by F. Scott Fitzgerald</li>
          <li>To Kill a Mockingbird by Harper Lee</li>
          <li>Pride and Prejudice by Jane Austen</li>
        </ul>
      </div>
     
      {/* <video widt5="400" height="300" controls>
          <source src={video} type="video/mp4" />
        </video> */}

    </div>
  );
}
