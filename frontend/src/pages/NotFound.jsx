import { Link } from "react-router-dom";
import Seo from "@/components/Seo";

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found | In & Out Smog Check"
        description="The page you’re looking for isn’t here. Head back to our home page for STAR-certified smog checks in Placentia, CA."
        path="/404"
      />
      <section className="page-hero">
        <h1>404 — Page Not Found</h1>
        <p className="lead">
          Looks like that page took a detour. Let’s get you back to a working
          page.
        </p>
        <Link to="/" className="primary" data-testid="notfound-home-btn">
          Back to Home
        </Link>
      </section>
    </>
  );
}
