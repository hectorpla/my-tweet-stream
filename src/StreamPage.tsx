import * as React from "react";
import StreamPanel from "./StreamPanel/StreamPanel";
import { TweetsPanel } from "./TweetsPanel";

// TODO set router for this component
export const StreamPage = ({ match }: any) => {
  return (
    <div className="row">
      <div className="col s12 m6 l6">
        <StreamPanel streamId={"mock"} />
      </div>

      <div className="col s12 m6 l6">
        <TweetsPanel />
      </div>
    </div>
  );
};

export default StreamPage;
