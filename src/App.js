import React, { Fragment } from "react";
import Provider from "./provider";
import Context from "./context";

const AgentBond = () => {
  return (
    <Context.Consumer>
      {(context) => (
        <Fragment>
          <h2>Agent Information</h2>
          <p>Mission: {context.data.mName}</p>
          <p>Acceptance Status: {context.data.accept}</p>
          <button onClick={context.isMissionAccepted}>Choose the agent</button>
        </Fragment>
      )}
    </Context.Consumer>
  );
};

const Agents = () => <AgentBond />;

const App = () => {
  return (
    <div>
      <h1>Context API test run</h1>
      <Provider>
        <Agents />
      </Provider>
    </div>
  );
};

export default App;
