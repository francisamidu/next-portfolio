import React from "react";

const Content = ({ Component }) => {
  return (
    <section className="content col-start-2 cols-end-3 min-w-screen w-full py-6 px-8">
      {Component}
    </section>
  );
};

export default Content;
