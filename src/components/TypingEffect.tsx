import { useState, useEffect } from "react";

const roles = ["Python Developer", "DSA Enthusiast", "Problem Solver"];

const TypingEffect = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && displayed === role) {
      setTimeout(() => setIsDeleting(true), 1500);
      return;
    }
    if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayed(
        isDeleting ? role.substring(0, displayed.length - 1) : role.substring(0, displayed.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, currentRole]);

  return (
    <span className="text-xl md:text-2xl font-medium text-muted-foreground">
      {displayed}
      <span className="animate-pulse text-primary">|</span>
    </span>
  );
};

export default TypingEffect;
