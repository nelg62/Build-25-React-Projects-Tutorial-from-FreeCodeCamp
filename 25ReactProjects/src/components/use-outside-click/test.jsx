import { useRef, useState } from "react";
import useOutsideClick from ".";

export default function UseOnclickOutsideTest() {
  const ref = useRef();
  useOutsideClick(ref, () => setShowContent(false));

  const [showContent, setShowContent] = useState(false);

  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>This is random content</h1>
          <p>
            Please click outside of this to close this. it wont close if you
            click inside of the content
          </p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}
