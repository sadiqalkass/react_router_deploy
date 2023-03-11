import { Link } from "react-router-dom";

const Missing = () => {
  return (
        <main className="Missing">
          <h2>Page not Found</h2>
          <p>Well that's disapponting</p>
          <p>
            <Link to="/">Vist our Homepage</Link>
          </p>
        </main>
  )
}

export default Missing