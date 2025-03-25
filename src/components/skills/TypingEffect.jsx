import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingEffect = ({ items }) => {
    const el = useRef(null);
    const typed = useRef(null);
  
    useEffect(() => {
      if (el.current) {
        typed.current = new Typed(el.current, {
          strings: items,
          typeSpeed: 50,
          backSpeed: 30,
          loop: true,
          backDelay: 1500,
          startDelay: 300,
        });
      }
  
      return () => {
        typed.current?.destroy();
      };
    }, [items]);
  
    return <span ref={el} className="text-goldenYellow" />;
  };

export default TypingEffect