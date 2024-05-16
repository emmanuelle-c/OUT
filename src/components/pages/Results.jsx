import Modal from "../Modal";
import { useState } from "react";

function Results() {
    const [isOpen, setIsOpen] = useState(true);
  return (
  <>
  {isOpen &&
  < Modal setIsOpen={setIsOpen} />
  }
  <p>Results</p>
  </>);
}

export default Results;
