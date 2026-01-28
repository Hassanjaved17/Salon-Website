import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        show && (
            <button
                onClick={scrollTop}
                aria-label="Scroll to top"
                className={`fixed bottom-6 right-6 z-50 rounded-full bg-[#F6526D] p-3 text-white shadow-lg transition-all duration-300
  ${show ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"}
`}
            >
                <ArrowUp size={20} />
            </button>
        )
    );
};

export default ScrollToTop;
