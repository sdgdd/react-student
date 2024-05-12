import React from "react";

export default function Alter({ message = "暂无", type = "success" }) {
  return (
    <div>
      <div
        className={[
          "alert",
          "alert-dismissible",
          "fade",
          "show",
          "alert-" + type,
        ].join(" ")}
        role="alert"
      >
        <strong>{message}</strong>
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  );
}
