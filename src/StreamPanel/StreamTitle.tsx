import * as React from "react";

export interface Props {
  title: string;
}
export const StreamTitle = ({ title }: Props) => {
  return (
    <div className="">
      {title}{" "}
      <span style={{ color: "white", backgroundColor: "red" }}> LIVE </span>
    </div>
  );
};

export default StreamTitle;
