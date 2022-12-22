"use strict";
exports.__esModule = true;
var Button_1 = require("./Button");
var Contact = function () {
    return (<div className="pt-20 pb-8 px-8 text-center md:max-w-screen-md md:m-auto mt-8 flex flex-col items-center justify-center">
      <h1 className="capitalize text-white text-4xl font-bold">Get in touch</h1>
      <p className="text-gray-300 my-8">
        Am always on the lookout for great opportunities. Have an exciting
        project where you need some help? Kindly reach out and I will do my best
        to get back to you
      </p>
      <div className="md:w-1/4 w-2/4">
        <Button_1["default"] link="mailto:francisamidu124@gmail.com" text="Say Hello"/>
      </div>
      <div className="mt-20">
        <p>Designed & Developed with Love by Francis Amidu</p>
      </div>
    </div>);
};
exports["default"] = Contact;
