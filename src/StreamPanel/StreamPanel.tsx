import * as React from "react";
import { QueryComponent } from "src/common/QueryComponent";
import { StreamInfo } from "src/common/types";
import OfficialAccountList from "./OfficialAccountList";
import StreamTitle from "./StreamTitle";

import "./StreamPanel.css";

export interface Props {
  streamId: string;
}

export const StreamPanel = ({ streamId }: Props) => {
  return (
    <div className="row">
      Stream
      <QueryComponent query={{ type: "stream", arg: streamId }}>
        {(data: StreamInfo) => {
          return (
            <div className="row stream-frame">
              <StreamTitle title={data.title} />
              <video src="https://youtu.be/AJ8QZvJxYyc" />
              <OfficialAccountList accounts={data.officialAccounts} />
            </div>
          );
        }}
      </QueryComponent>
    </div>
  );
};

export default StreamPanel;
