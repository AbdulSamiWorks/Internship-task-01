import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import ProjectLayout from "../components/ProjectLayout";
import ProjectLayout2 from "../components/ProjectLayout2";
import Grid from "../components/Grid";
import Footer from "../components/Footer";
import { BsBox } from "react-icons/bs";
import { IoLogoBuffer } from "react-icons/io";
import { BiLogoMediumOld,BiLogoGitlab } from "react-icons/bi";

const Home = () => {
  return (
    <div className="bg-[#232630] overflow-hidden">
      <div className="h-100% bg-[#25262a] text-[#FFFFFF]">
        <NavBar />
        <section>
          <div className="flex">
            <div className="w-50% ml-10">
              <h1 className="text-8xl mt-20 ">
                Hello
                <br />
                <strong>
                  {" "}
                  I'm Jessy <br /> Walter
                </strong>
              </h1>
              <p className="mt-5 font-normal text-xl mb-5">
                Since beginning my journey as a freelance designer nearby 7
                years ago, I 've done remote work for agencies, consulted for
                startup, and collaborated with talented people to create digital
                products.
              </p>
              <Button title={"Contact Me"} width={40} />
            </div>
            <div className="w-50% mr-20 w-full">
              <img
                src="https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/hero-img.png"
                alt="pic"
              
              />
            </div>
          </div>
        </section>
        <section className="bg-[#2D2E32]">
          <div className="flex">
            <div className="w-50% mt-24">
              <div class="group relative text-sm flex flex-wrap">
                <div>
                  <div class="aspect-h-1 aspect-w-1 flex flex-col items-center w-80 ml-12 bg-[#232630] h-80 w-80 mb-9  overflow-hidden rounded-lg bg-[#232630] group-hover:opacity-75 hover:bg-green-500">
                    <div className="w-24 h-24 mt-10 bg-[#2D2E32] rounded-full flex justify-center items-center hover:text-white">
                      <BsBox className="text-green-500 hover:text-white" />
                    </div>
                    <h1 className="-mb-3 text-3xl font-bold mt-5 mb-5 pl-5 pr-5 text-xl font-bold">
                      Product Design
                    </h1>
                    <p className="text mb-5 pl-5 pr-5 text-xl font-normal ">
                      <center>
                        The technological revolution is changing aspect
                      </center>
                    </p>
                  </div>
                  <div class="aspect-h-1 aspect-w-1 flex flex-col items-center w-80 ml-12 bg-[#232630] h-80 w-80 mb-9  overflow-hidden rounded-lg bg-[#232630] group-hover:opacity-75 hover:bg-green-500" >
                    <div className="w-24 h-24 mt-10 bg-[#2D2E32] rounded-full flex justify-center items-center hover:text-white">
                      <BiLogoGitlab className="text-green-500 hover:text-white" />
                    </div>
                    <h1 className="-mb-3 text-3xl font-bold mt-5 mb-5 pl-5 pr-5 text-xl font-bold">
                      Logo Design
                    </h1>
                    <p className="text mb-5 pl-5 pr-5 text-xl font-normal ">
                      <center>
                        The technological revolution is changing aspect
                      </center>
                    </p>
                  </div>
                </div>
                <div>
                  <div class="aspect-h-1 aspect-w-1 flex flex-col items-center w-80 ml-12 bg-[#232630] h-80 w-80 mb-9  overflow-hidden rounded-lg bg-[#232630] group-hover:opacity-75 hover:bg-green-500">
                    <div className="w-24 h-24 mt-10 bg-[#2D2E32] rounded-full flex justify-center items-center hover:text-white">
                      <BiLogoMediumOld className="text-green-500 hover:text-white" />
                    </div>
                    <h1 className="-mb-3 text-3xl font-bold mt-5 mb-5 pl-5 pr-5 text-xl font-bold">
                      Icon Design
                    </h1>
                    <p className="text mb-5 pl-5 pr-5 text-xl font-normal ">
                      <center>
                        The technological revolution is changing aspect
                      </center>
                    </p>
                  </div>
                  <div class="aspect-h-1 aspect-w-1 flex flex-col items-center w-80 ml-12 bg-[#232630] h-80 w-80 mb-9  overflow-hidden rounded-lg bg-[#232630] group-hover:opacity-75 hover:bg-green-500">
                    <div className="w-24 h-24 mt-10 bg-[#2D2E32] rounded-full flex justify-center items-center hover:text-white">
                      <IoLogoBuffer className="text-green-500 hover:text-white" />
                    </div>
                    <h1 className="-mb-3 text-3xl font-bold mt-5 mb-5 pl-5 pr-5 text-xl font-bold">
                      UI Design
                    </h1>
                    <p className="text mb-5 pl-5 pr-5 text-xl font-normal ">
                      <center>
                        The technological revolution is changing aspect
                      </center>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[40rem] ml-10">
              <center>
                <h2 className="text-4xl mt-60 ">
                  <strong>
                    Why Hire Me For Next
                    <br /> Project?
                  </strong>
                </h2>
                <p className="text-normal text-xl mb-10">
                  The technological revolution is changing aspect of our lives,
                  and the fabric of society itself. it's also changing the way
                  we learn and what we learn. Factual knowledge is less prized
                  when everything you ever need to know can be found on your
                  phone. There's no imperative to be an expert at doing
                  everything when you can.
                </p>
                <div className="ml-36">
                  <Button title={"Download Cv"} />
                </div>
              </center>
            </div>
          </div>
        </section>
        <section className="bg-[#2D2E32]">
          <ProjectLayout
            title={"Branding Nice Studio"}
            url={
              "https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/portfolio-1-img.jpg"
            }
            description={`The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.

`}
          />
          <ProjectLayout2 title={'Mobile Card App'} url={'https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/portfolio-2-img.jpg'} desc={`The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.`}/>{" "}
          <ProjectLayout
            title={"Resturant Landing Page"}
            url={
              "https://demo.phlox.pro/freelancer/wp-content/uploads/sites/272/2021/02/portfolio-3-img.jpg"
            }
            description={`The technological revolution is changing aspect of our lives, and the fabric of society itself. it's also changing the way we learn and what we learn. Factual knowledge is less prized when everything you ever need to know can be found on your phone. There's no imperative to be an expert at doing everything when you can.`}
          />
          <center className=" ml-20">
            <Button title={"View All"} width={"40"} />
          </center>
        </section>
        <section className="bg-[#2D2E32]">
          <Grid />
        
         <div className={`lg:bg-[#25262a] rounded-3xl w-90 mr-40 ml-40 mt-40 mb-20   `}>
            <div className="flex flex-col justify-center items-center pt-16 mt-20 ml-20  mr-20 ">
              <h1 className="text-5xl font-bold">Lets Work Together</h1>
              <p className="text-normal text-xl pt-10  mb-10">
                <center>
                  The technological revolution is changing aspect of our lives,
                  and the fabric of society itself. it's also changing the way
                  we learn and what we learn
                </center>
              </p>
              <div className=" flex justify-center items-center mb-10 ml-20">
                <Button title={"Contact Me"} />
              </div>
            </div>
          </div>
          
          <div className="bg-[#232630] p-10">
            <Footer />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
