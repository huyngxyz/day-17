import { motion, useScroll, useSpring } from "framer-motion";
import { AiOutlineArrowUp } from "react-icons/ai";

export default function ToTopButton({ scrollAnchor }) {


  const { scrollYProgress } = useScroll({});
  const scale360 = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
  });


  return (
    <div>
      <a
        href="#hero"
        onClick={() => {
          scrollAnchor("#hero");
        }}
      >
        <div  className="fixed bottom-4 right-4 group">
          <figure className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:-translate-y-6 transition-all ease-in-out">
              <AiOutlineArrowUp size={32} fill="#000" />
            </div>
            <svg id="progress" width="132" height="132" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="30"
                pathLength="1"
                className="  stroke-neutral-400 fill-[#c1b4a0]"
              />
              <motion.circle
                cx="50"
                cy="50"
                r="30"
                pathLength="1"
                className="stroke stroke-[0.10rem] stroke-neutral-700 fill-none"
                style={{ pathLength: scale360 }}
              />
            </svg>
          </figure>
        </div>
      </a>
    </div>
  );
}
