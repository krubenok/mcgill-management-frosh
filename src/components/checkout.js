import React from "react";
import { ReactTypeformEmbed } from "react-typeform-embed";

function Checkout(props) {
  return (
    <div className="Popup">
      <ReactTypeformEmbed popup={false} url={props.url} />
    </div>
  );
}

export default Checkout;
