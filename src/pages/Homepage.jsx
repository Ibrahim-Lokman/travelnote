import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import AppNav from "../components/AppNav";

function Homepage() {
  return (
    <div>
      <PageNav />
      <AppNav />
      <h1>Homepage</h1>
      {/* Add a link to the Pricing page without reloading the page */}
      <Link to="/app">Go to app</Link>
    </div>
  );
}

export default Homepage;
