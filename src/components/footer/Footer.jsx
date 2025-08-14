import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandFist } from "@fortawesome/free-solid-svg-icons";

export function Footer() {
  return (
    <footer className="flex justify-center items-center py-4 font-primary text-gray-700">
        <p className="text-primary font-semibold px-1 transition-colors duration-300 hover:text-dark">© 2023 Storz. All rights reserved.</p>
        <FontAwesomeIcon icon={faHandFist} className="text-red-600 mx-1 animate-pulse" />
    </footer>
  );
}