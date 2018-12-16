import * as React from "react";
import { User } from "src/common/types";
import OfficalAccountItem from "./OfficalAccountItem";

interface Props {
  accounts: User[];
}

export const OfficialAccountList = ({ accounts }: Props) => {
  return (
    <div className="accounts-frame">
      <p>Official accounts</p>
      {accounts.map(account => (
        <div>
          <OfficalAccountItem account={account} />
        </div>
      ))}
    </div>
  );
};

export default OfficialAccountList;
