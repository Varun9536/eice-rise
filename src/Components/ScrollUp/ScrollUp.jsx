



import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollUp = () => {
    const location = useLocation();

    useEffect(() => {
        // Scroll the window to the top
        console.log("Navigated to:", location.pathname);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

        // If your app has a scrollable container, scroll it instead
        const scrollableContainer = document.querySelector(".scrollable-container");
        if (scrollableContainer) {
            scrollableContainer.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }
    }, [location.pathname]); // Trigger on path change

    return null;
};

export default ScrollUp;
