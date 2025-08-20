//"use client";
import { OrbitingCircles } from "~/components/common/Circles";
import React, { useEffect, useRef, useState } from "react";
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
  guitar: () => (
    <div
      style={{
        width: "50px",
        height: "50px",
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
  openai: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
    </svg>
  ),
  programming: () => (
    <div
      style={{
        width: "70px",
        height: "70px",
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
  W_LOGO: () => (
    <div
      style={{
        width: "130px",
        height: "80px",
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
  badminton: () => (
    <div
      style={{
        width: "50px",
        height: "50px",


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
  lc50days: () => (
    <div
      style={{
        width: "50px",
        height: "50px",
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
};
