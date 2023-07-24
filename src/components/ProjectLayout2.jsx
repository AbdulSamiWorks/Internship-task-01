import React from "react";

const ProjectLayout2 = ({title,url,desc}) => {
  return (
    <>
      <section className="flex mt-20 mb-20 flex-wrap">
      <div className="mt-10 ml-10">
            <img src={url} className="rounded-3xl rounded-3xl origin-bottom rotate-2" alt="" />
        </div>
        <div className="w-[40rem] mt-40 ml-20">
          <center>
            <h1 className="text-4xl font-bold mb-7">{title}</h1>
            <p className="text-normal text-xl  p-3 ">{
              desc
            }
            </p>
          </center>
          <span className="ml-10 mt-10 text-yellow-500">Read more...</span>
        </div>
        <div>
        </div>
       
      </section>
    </>
  );
};

export default ProjectLayout2;
