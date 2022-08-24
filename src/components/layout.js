import Alert from "../components/alert";
import Footer from "../components/footer";
import Meta from "../components/meta";
import Activities from "./activities";
import HomeContact from "./contact";
import SiteFooter from "./site-footer";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Activities />
      <HomeContact />
      <SiteFooter />
    </>
  );
}
