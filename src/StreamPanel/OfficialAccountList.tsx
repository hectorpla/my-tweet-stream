import * as React from "react";
import { User } from "src/common/types";
import OfficalAccountItem from "./OfficalAccountItem";

import "./OfficialAccountList.css";

interface Props {
  accounts: User[];
}

export const OfficialAccountList = ({ accounts }: Props) => {
  return (
    <div className="official-accounts-frame">
      <p>Official accounts</p>
      <div className="official-accounts-container">
        {accounts.map(account => (
          <div>
            <OfficalAccountItem account={account} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfficialAccountList;
