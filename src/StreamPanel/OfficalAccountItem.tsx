import * as React from "react";
import { User } from "src/common/types";

import "../common/common.css";
import "./OfficalAccountItem.css";

export interface Props {
  account: User;
}
export const OfficalAccountItem = ({ account }: Props) => {
  return (
    <div className="col s6 m6 flex-row official-account-item">
      <img src={account.imageUrl} alt="img" className="account-image" />
      {account.name}
      <i className="material-icons icon">done_all</i> {"  "} @
      {account.displayId}
    </div>
  );
};

export default OfficalAccountItem;
