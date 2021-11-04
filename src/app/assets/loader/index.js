

import React, { useState } from "react";
import Loader from "react-loader-spinner";

const LoaderComponent = () => {
  const [spinnerLoading] = useState(true);

  return (
    <div style={{ textAlign: "center" }}>
      <br></br>
      <br></br>

      <Loader
        type="TailSpin"
        color="#D61B34"
        height={100}
        width={100}
        visible={spinnerLoading}
      />

      <br></br>
    </div>
  )
}

export default LoaderComponent;

