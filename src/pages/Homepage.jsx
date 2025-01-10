import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <h1>Homepage</h1>

      {/* Add a link to the Pricing page without reloading the page */}
      <Link to="/pricing">Pricing</Link>
    </div>
  );
}

export default Homepage;
