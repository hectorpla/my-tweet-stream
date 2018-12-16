import * as React from "react";
import StreamPanel from "./StreamPanel/StreamPanel";
import { TweetsPanel } from "./TweetsPanel";

import "./StreamPage.css";

// TODO set router for this component
export const StreamPage = ({ match }: any) => {
  return (
    <div className="stream-page">
      <div className="page-section">
        <StreamPanel streamId={"mock"} />
      </div>

      <div className="page-section">
        <TweetsPanel />
      </div>
    </div>
  );
};

export default StreamPage;
