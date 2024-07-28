import React from "react";
import "./timeline.css";
const Timeline = () => {
  return (
    <div className="bo">
      <div className="hed">
        <h1 className="leader">Team leader</h1>
      </div>
      <div className="timeline-container">
        <section className="timeline-section">
          <div className="scrollable">
            <div className="line"></div>
            <div className="lineparent">
              <div className="vertical"></div>
              <div className="vertical"></div>
              <div className="vertical"></div>
              <div className="vertical"></div>
              <div className="vertical"></div>
              <div className="vertical"></div>
              <div className="vertical"></div>
              <div className="vertical"></div>
              <div className="vertical"></div>
              <div className="vertical"></div>
              <div className="vertical"></div>
              <div className="vertical"></div>
              <div className="vertical"></div>
              <div className="vertical"></div>
              <div className="vertical"></div>
              <div className="vertical"></div>
            </div>
            <div className="children">
              <div className="child">
                <div className="txt">Lorem, ipsum.</div>{" "}
              </div>
              <div className="child">lorem ipsum </div>
              <div className="child">lorem ipsum </div>
              <div className="child">lorem ipsum </div>
              <div className="child">lorem ipsum </div>
              <div className="child">lorem ipsum </div>
              <div className="child">lorem ipsum </div>
              <div className="child">lorem ipsum </div>
              <div className="child">lorem ipsum </div>
              <div className="child">lorem ipsum </div>
              <div className="child">lorem ipsum </div>
              <div className="child">lorem ipsum </div>
              <div className="child">lorem ipsum </div>
              <div className="child">lorem ipsum </div>
              <div className="child">lorem ipsum </div>
              <div className="child">lorem ipsum </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Timeline;
