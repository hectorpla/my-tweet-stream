import * as React from "react";
import { mockFetch } from "src/mock/mockFetch";
import { AppQuery } from "./constants";

export interface Error {
  message: string;
}

export interface State<TData> {
  loading: boolean;
  error: Error | null;
  data: TData | void;
}

export interface Props<TData> {
  query: AppQuery;
  children: (data: TData) => React.ReactNode;
}

/**
 * follow the pattern in Apollo React
 */
export class QueryComponent<TData> extends React.Component<
  Props<TData>,
  State<TData>
> {
  public state = {
    loading: true,
    error: null,
    data: undefined
  };

  public componentDidMount() {
    // TODO async to fetch data using props.query
    mockFetch(this.props.query).then(data =>
      this.setState({
        loading: false,
        data
      })
    );
  }

  public render() {
    if (this.state.loading) {
      return (
        <div style={defaultStyle}>
          <div style={{}} className="loader" />
        </div>
      );
    }
    if (this.state.error) {
      return (
        <div style={defaultStyle}>
          {" "}
          <div>Error: {this.state.error}</div>
        </div>
      );
    }
    if (!this.state.data) {
      return (
        <div style={defaultStyle}>
          {" "}
          <div>No data</div>
        </div>
      );
    }
    return this.props.children(this.state.data!);
  }
}

const defaultStyle: React.CSSProperties = {
  alignItems: "center",
  justifyContent: "center"
};
