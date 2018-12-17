import * as React from "react";

import "./StreamTitle.css";

export interface Props {
  title: string;
}
export const StreamTitle = ({ title }: Props) => {
  return (
    <>
      <div className="stream-header">
        <span className="stream-title"> {title}</span>

        <span className="stream-tag"> LIVE </span>
      </div>
    </>
  );
};

export default StreamTitle;
