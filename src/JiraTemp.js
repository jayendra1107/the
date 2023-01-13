import React, { useState } from "react";
import "./Jira.css";

const Jira = () => {
  const [bookStyle, setBookStyle] = useState({});
  const [prevBtnStyle, setPrevBtnStyle] = useState({});
  const [nextBtnStyle, setNextBtnStyle] = useState({});
  const [paper1Style, setPaper1Style] = useState({});
  const [paper2Style, setPaper2Style] = useState({});
  const [paper3Style, setPaper3Style] = useState({});
  const [paper1Class, setPaper1Class] = useState("paper");
  const [paper2Class, setPaper2Class] = useState("paper");
  const [paper3Class, setPaper3Class] = useState("paper");
  const [currentLocation, setCurrentLocation] = useState(1);
  const [numOfPapers, setNumberOfPapers] = useState(3);
  const [maxLocation, setMaxLocation] = useState(numOfPapers + 1);

  function openBook() {
    setBookStyle({ transform: "translateX(50%)" });
    setPrevBtnStyle({ transform: "translateX(-180px)" });
    setNextBtnStyle({ transform: "translateX(180px)" });
  }

  function closeBook(isAtBeginning) {
    if (isAtBeginning) {
      setBookStyle({ transform: "translateX(0%)" });
    } else {
      setBookStyle({ transform: "translateX(100%)" });
    }

    setPrevBtnStyle({ transform: "translateX(0px)" });
    setNextBtnStyle({ transform: "translateX(0px)" });
  }

  function goNextPage() {
    if (currentLocation < maxLocation) {
      switch (currentLocation) {
        case 1:
          openBook();
          setPaper1Class("paper flipped");
          setPaper1Style({ zIndex: "1" });
          break;
        case 2:
          setPaper2Class("paper flipped");
          setPaper2Style({ zIndex: "2" });
          break;
        case 3:
          setPaper3Class("paper flipped");
          setPaper3Style({ zIndex: "3" });
          closeBook(false);
          break;
        default:
          throw new Error("unkown state");
      }
      setCurrentLocation((prev) => prev + 1);
    }
  }

  function goPrevPage() {
    if (currentLocation > 1) {
      switch (currentLocation) {
        case 2:
          closeBook(true);
          setPaper1Class("paper");
          setPaper1Style({ zIndex: "3" });
          break;
        case 3:
          setPaper2Class("paper");
          setPaper2Style({ zIndex: "2" });
          break;
        case 4:
          openBook();
          setPaper3Class("paper");
          setPaper3Style({ zIndex: "1" });
          break;
        default:
          throw new Error("unkown state");
      }
      setCurrentLocation((prev) => prev - 1);
    }
  }

  return (
    <div className="book-container">
      <button id="prev-btn" style={prevBtnStyle} onClick={() => goPrevPage()}>
        {"<"}
      </button>

      <div id="book" className="book" style={bookStyle}>
        <div id="p1" className={paper1Class} style={paper1Style}>
          <div className="front">
            <div id="f1" className="front-content">
              <h1>Front 1</h1>
            </div>
          </div>
          <div className="back">
            <div id="b1" className="back-content">
              <h1>Back 1</h1>
            </div>
          </div>
        </div>
        <div id="p2" className={paper2Class} style={paper2Style}>
          <div className="front">
            <div id="f2" className="front-content">
              <h1>Front 2</h1>
            </div>
          </div>
          <div className="back">
            <div id="b2" className="back-content">
              <h1>Back 2</h1>
            </div>
          </div>
        </div>
        <div id="p3" className={paper3Class} style={paper3Style}>
          <div className="front">
            <div id="f3" className="front-content">
              <h1>Front 3</h1>
            </div>
          </div>
          <div className="back">
            <div id="b3" className="back-content">
              <h1>Back 3</h1>
            </div>
          </div>
        </div>
      </div>

      <button id="next-btn" style={nextBtnStyle} onClick={() => goNextPage()}>
        {">"}
      </button>
    </div>
  );
};

export default Jira;
