import "./Pages.css"
export default function Home(){
  return(
    <div className="Home">
      <h1>Welcome to My Page</h1>
      <p>This is my home page. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget velit turpis. Sed pharetra laoreet sapien, sit amet efficitur ipsum venenatis a. Nulla eget augue sed lorem tempor suscipit at id arcu.</p>
      <h2>My Interests</h2>
      <ul>
        <li>Reading</li>
        <li>Books</li>
        <li>Traveling</li>
      </ul>
      <h3>My Recent Projects</h3>
      <ol>
        <li>Created a personal website using React</li>
        <li>Built a CRUD application using Node.js and MongoDB</li>
        <li>Contributed to an open-source project on GitHub</li>
      </ol>
      
        
    </div>
  )
}
