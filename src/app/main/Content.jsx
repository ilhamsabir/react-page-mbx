import React from "react";
import Builder from "../builder/Builder.jsx";
import Panel from "../panel/Panel.jsx";

class Content extends React.Component {
  render() {
      return (
        <section className="section">
            <div className="container container is-fullhd">
                <div className="columns">
                    <div className="column is-one-quarter main-panel">
                        <Panel />
                    </div>
                    <div className="column editor-panel">
                        <Builder  />
                    </div>
                </div>
            </div>
        </section>        
      );
  }
}

export default Content;
