import React from "react";

import gord from "../../static/images/gord.png";
import ArtFrame from "./ArtFrame/ArtFrame";

const Content = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <ArtFrame source={gord} altText="gord" />
      </div>
    </div>
  );
};

export default Content;
