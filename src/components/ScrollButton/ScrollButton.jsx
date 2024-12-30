import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { ScrollToUpBtn } from "./ScrollButton.styled";

export const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollToUpBtn
      onClick={scrollToTop}
      style={{
        display: isVisible ? "block" : "none",
      }}
      title="Наверх"
    >
      <FaArrowUp />
    </ScrollToUpBtn>
  );
};
