"use strict";
exports.__esModule = true;
var react_1 = require("react");
var link_1 = require("next/link");
var Button = function (_a) {
    var link = _a.link, text = _a.text;
    var renderButton = link ? (<link_1["default"] href={link}>
      <a className="flex flex-row justify-center items-center main-btn py-2 h-12 leading-normal px-8 text-center text-white capitalize rounded-md">
        <span>{text}</span>
      </a>
    </link_1["default"]>) : (<button className="main-btn py-2 px-6 text-center text-white capitalize rounded-md">
      {text}
    </button>);
    return <>{renderButton}</>;
};
exports["default"] = Button;
