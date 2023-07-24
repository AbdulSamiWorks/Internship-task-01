import React from "react";

const ProjectLayout = ({ title, description, url }) => {
  return (
    <>
      <section className="flex pt-20 mb-20 flex-wrap">
        <div className="w-[40rem] mt-40">
          <center>
            <h1 className="text-4xl font-bold mb-7">{title}</h1>
            <p className="text-normal text-xl p-3 ml-5">{description}</p>
          </center>
          <span className="ml-10 mt-10 text-yellow-500">Read more...</span>
        </div>
        <div></div>

        <div className="lg:mt-10 ml-36 sm:flex items-center justify-center">
          <img
            src={url}
            className="rounded-3xl origin-bottom -rotate-2"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default ProjectLayout;
