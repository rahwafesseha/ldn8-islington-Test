import React from 'react'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>This is home page</h2>
      <Link to="/quiz">Go to the quiz page</Link>
      <div>
        <Link to="/teacher">Go to the teacher page</Link>
      </div>
    </div>
  );
  }

export default Home