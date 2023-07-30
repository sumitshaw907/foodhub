import { useContext } from "react";
import userContext from "../utils/userContext";
import foodPic from "../assets/Photo.png";
import userPic from "../assets/user.jpg";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";

const About = () => {
  const { user, setUser } = useContext(userContext);
  return (
    <div className=" mt-32">
      <div className="flex flex-col-reverse md:flex-row  mx-16 justify-between">
        <div className="flex flex-col w-full  md:w-3/5">
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4 md:mt-28 mb-7 ">
            <p className="text-4xl md:text-8xl font-bold text-[#3F4255]">
              Sumit
            </p>
            <div className="flex  gap-1 md:flex-col justify-center">
              <p className="text-4xl md:text-5xl font-bold text-[#9093A6]">
                Kumar
              </p>
              <p className="text-4xl md:text-5xl font-bold text-[#9093A6]">
                Shaw:)
              </p>
            </div>
          </div>
          <p className="text-md text-center md:text-left w-[100%] text-[#909090]">
            I'm currently learning web devlopment, I have created this App using ReactJs.
          </p>

          <div className="flex justify-center md:justify-start gap-5 my-4 ">
            <a
              href="https://www.linkedin.com/in/sumit-kumar-shaw-328372244"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin className="text-5xl text-[#0A66C2] hover:cursor-pointer hover:scale-95 duration-200" />
            </a>
            <a
              href="https://github.com/sumitshaw907"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub className="text-5xl hover:cursor-pointer hover:scale-95 duration-200" />
            </a>
            <a
              href="https://auth.geeksforgeeks.org/user/sumitkumaav9r/practice"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGeeksforgeeks className="text-5xl text-green-600 hover:cursor-pointer hover:scale-95 duration-200" />
            </a>
            <a
              href="https://leetcode.com/sumitkumarshaw907/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLeetcode className="text-5xl text-red-500 hover:cursor-pointer hover:scale-95 duration-200" />
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center ">
          <img
            alt="myimage"
            src={userPic}
            className="w-[300px] rounded-full border-dotted border-8 "
          />
        </div>
      </div>
    </div>
  );
};

export default About;
