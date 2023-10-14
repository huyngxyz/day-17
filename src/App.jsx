import ToTopButton from "./components/toTopButton";
import Lenis from "@studio-freight/lenis";
import { useEffect, useState } from "react";

export default function App() {
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    const newLenis = new Lenis();
    setLenis(newLenis);

    function raf(time) {
      newLenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const scrollToAnchor = (anchor) => {
    lenis.scrollTo(anchor);
  };

  return (
    <div>
      <ToTopButton scrollAnchor={scrollToAnchor}/>
      <div
        id="hero"
        className="h-screen flex text-7xl font-bold tracking-tight items-center justify-center"
      >
        <h1>Hero section</h1>
      </div>
      <div className="h-screen flex text-7xl font-bold tracking-tight items-center justify-center">
        <h1>Scroll to top</h1>
      </div>
    </div>
  );
}
