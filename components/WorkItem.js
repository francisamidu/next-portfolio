"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var bs_1 = require("react-icons/bs");
var md_1 = require("react-icons/md");
var WorkItem = function (_a) {
    var item = _a.item;
    var image = item.image, title = item.title, github = item.github, url = item.url, tags = item.tags;
    var ref = (0, react_1.useRef)();
    var getWidth = function () {
        if (process === null || process === void 0 ? void 0 : process.browser) {
            return window.innerWidth;
        }
        return 0;
    };
    var _b = (0, react_1.useState)(getWidth()), width = _b[0], setWidth = _b[1];
    (0, react_1.useEffect)(function () {
        window.addEventListener("resize", function (event) {
            var _a, _b;
            setWidth(window.innerWidth);
            var target = event.target;
            var current = ref.current;
            var sibling = current === null || current === void 0 ? void 0 : current.previousSibling;
            if ((target === null || target === void 0 ? void 0 : target.innerWidth) < 640 && sibling) {
                (_a = sibling === null || sibling === void 0 ? void 0 : sibling.classList) === null || _a === void 0 ? void 0 : _a.add("hidden");
            }
            else {
                (_b = sibling === null || sibling === void 0 ? void 0 : sibling.classList) === null || _b === void 0 ? void 0 : _b.remove("hidden");
            }
        });
    }, [width]);
    return (<div className="work-item md:p-0 p-4 w-full mb-8 flex flex-col sm:flex-row justify-between">
      <div className="w-full sm:w-3/5 relative">
        <image_1["default"] src={image} height="400" width="480" layout="intrinsic" alt="Work image" className="w-full work-item-image"/>
      </div>
      <div className="content pl-4 ml-4 w-2/5 sm:w-full" ref={ref}>
        <h1 className="uppercase font-bold work-item-heading text-sm">
          Featured Project
        </h1>
        <h2 className="text-2xl text-white mt-2 work-title p-4 rounded-sm">
          {title}
        </h2>
        <div className="tags mt-8 flex flex-row items-center wrap">
          {tags === null || tags === void 0 ? void 0 : tags.map(function (tag) { return (<span className="text-sm text-white font-bold capitalize py-2 px-4 mr-2 tag" key={tag.id}>
              {tag.text}
            </span>); })}
        </div>
        <div className="pl-2 mt-4 flex flex-row work-links justify-between md:justify-start items-center">
          <a href={github} className="mr-4 text-white text-3xl">
            <bs_1.BsGithub />
          </a>
          <a href={url} className=" text-white text-3xl">
            <md_1.MdLink />
          </a>
        </div>
      </div>
    </div>);
};
exports["default"] = WorkItem;
