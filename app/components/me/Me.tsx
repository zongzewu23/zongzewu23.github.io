//"use client";
import { OrbitingCircles } from "~/components/common/Circles";
import React, { useEffect } from "react";
import { useView } from "@/contexts/ViewContext";
import { cn } from "~/lib/utils";
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import "react-toastify/dist/ReactToastify.css";
import { CardContainer, CardBody, CardItem } from "~/components//common/3d-card";
import { VelocityScroll } from "../common/ScrollBasedVelocity";
import { FlipWords } from "../common/FlipWords";






export default function Me() {
  const words = ["Zongze Wu", "吴宗泽"];
 
  const { ref, inView } = useInView({
    threshold: 0.40,
    rootMargin: "-100px 0px",
  });

  const { setSectionInView } = useView();

  useEffect(() => {
    if (inView) setSectionInView("me");
  }, [inView, setSectionInView]);

  const innerCircles = [
    { icon: <Icons.badminton />, delay: 25, radius: 280 },
    { icon: <Icons.programming />, delay: 15, radius: 280 },
    { icon: <Icons.guitar />, delay: 10, radius: 280 },
  ];

  const outerCircles = [
    { icon: <Icons.W_LOGO />, delay: 15, radius: 330 },
    { icon: <Icons.wuCut />, delay: 10, radius: 330 },
    { icon: <Icons.lc50days />, delay: 20, radius: 330 },
  ];



  return (
    <section
      ref={ref}
      id="me"
      className="relative overflow-visible mt-12 sm:mt-16 md:mt-[50px] px-6 py-4 md:py-10 lg:py-12 flex flex-col lg:items-center lg:flex-row justify-between rounded-2xl"
    >
      <div className="relative flex h-[900px] w-full flex-col items-center justify-center overflow-visible rounded-lg bg-background md:shadow-orange-50">
        

        {innerCircles.map((circle, index) => (
          <OrbitingCircles
            key={index}
            className="size-[70px] border-none bg-transparent "
            duration={20}
            delay={circle.delay}
            radius={circle.radius}
          >
            {circle.icon}
          </OrbitingCircles>
        ))}

        {outerCircles.map((circle, index) => (
          <OrbitingCircles
            key={index}
            className=" size-[200px] border-none bg-transparent "
            duration={15}
            delay={circle.delay}
            radius={circle.radius}
          >
            {circle.icon}
          </OrbitingCircles>
        ))}


        <CardContainer
          containerClassName={cn(
            "mt-0",
            "w-[400px] h-[450px]",
            "ml-[20px]" ,
            "mt-[20px]" ,
            "flex items-start justify-start p-4 relative card-container" // 添加 card-container 类
          )}
        >
          <CardBody
            className={cn(
              "mt-0",
              "w-[350px] h-[400px] bg-[#DEB1CB]/90 shadow-lg rounded-lg",
              "flex items-start justify-start p-4 relative card-body" // 添加 card-body 类
            )}
          >
            <CardItem
              rotateX={5}
              rotateY={5}
              translateZ={60}
              className="text-left font-bold text-[#DFF8EB]"
            >
              My name is:
            </CardItem>




            <CardItem rotateX={5} rotateY={5} translateZ={60}>
              <div
                className="flex text-5xl font-bold font-kumbh relative z-10" // 设置 z-10
                style={{
                  position: "absolute", 
                  top: "70px", 
                  left: "-20px", 
                  //color: "#200714"
                  color: "#280003"
                }}
              
              >
              <FlipWords words={words} /> <br />
              </div>


            </CardItem>

            <VelocityScroll
              defaultVelocity={2.5} 
              numRows={3} 
              className="text-5xl md:text-4xl relative z-10" 
              style={{
                position: "absolute", 
                top: "250px", 
                left: "0px", 
              }}
            >
              Dub Programmer Badminton player guitar player
            </VelocityScroll>
          </CardBody>
        </CardContainer>

      </div>
    </section>
  );
}



const Icons = {
  wuCut: () => (
    <div
      style={{
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        overflow: "hidden",
        position: "relative", 
        zIndex: 50,
      }}
    >
      <img
        src="/WuCut.png"
        alt="Avatar"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  ),
  
  W_LOGO: () => (
    <div
      style={{
        width: "130px",
        height: "80px",
        position: "relative",
        zIndex: 50,          
      }}
    >
      <img
        src="/W-Logo_Purple_vector.svg"
        alt="Avatar"
        style={{
          width: "90%",
          height: "90%",
          objectFit: "cover",
        }}
      />
    </div>
  ),
  
  lc50days: () => (
    <div
      style={{
        width: "50px",
        height: "50px",
        position: "relative",  
        zIndex: 50,           
      }}
    >
      <img
        src="/lc50days.png"
        alt="Avatar"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  ),
  
  programming: () => (
    <div
      style={{
        width: "70px",
        height: "70px",
        position: "relative",  
        zIndex: 50,           
      }}
    >
      <img
        src="/computer.png"
        alt="Avatar"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  ),
  
  badminton: () => (
    <div
      style={{
        width: "50px",
        height: "50px",
        position: "relative",  
        zIndex: 50,           
      }}
    >
      <img
        src="/badminton.svg"
        alt="Avatar"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  ),
  
  guitar: () => (
    <div
      style={{
        width: "50px",
        height: "50px",
        position: "relative",  
        zIndex: 50,           
      }}
    >
      <img
        src="/guitar.svg"
        alt="Avatar"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  ),
};
