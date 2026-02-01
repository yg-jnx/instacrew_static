import { Link } from "react-router-dom";

interface LogoProps {
  variant?: "default" | "white" | "large" | "compact";
  className?: string;
}

export function Logo({ variant = "default", className = "" }: LogoProps) {
  const variantClasses = {
    default: "",
    white: "logo-text-white",
    large: "logo-text-large",
    compact: "logo-text-compact",
  };

  return (
    <Link 
      to="/" 
      className={`logo-text ${variantClasses[variant]} ${className}`}
      aria-label="InstaCrew Home"
    >
      <span className="logo-insta">Insta</span>
      <span className="logo-crew">Crew</span>
    </Link>
  );
}
