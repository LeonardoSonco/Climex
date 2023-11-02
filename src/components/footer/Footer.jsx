import logo from "../../image/logoWhite.png";

import iconFace from "../../image/facebook.png";
import iconTwitter from "../../image/twitter.png";
import iconLinkedin from "../../image/linkedin.png";
import iconInstagram from "../../image/instagram.png";


import style from "./Footer.module.css"


export default function Footer() {
  return (
    <footer className="bg-black text-white">
     

     <div className={style.subscribe}>
        <div className="w-3/4 mx-auto">
        <h2 className="text-5xl font-semibold">Subscribe Our Newslatter For Weather Update</h2>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </div>
        <div className="flex justify-center">
        <form className="flex flex-col gap-4 w-2/4 px-5 py-8 justify-center bg-white bg-opacity-50 backdrop-blur-lg rounded-3xl ">
            <input type="text" placeholder="Email" className="bg-transparent border-b-2  focus:outline-none placeholder-white pb-2"/>
            <input type="text" placeholder="Phone" className="bg-transparent border-b-2 focus:outline-none placeholder-white pb-2"/>
            <button className="w-1/2 bg-gradient-to-t from-violet-800 to-violet-500 py-2 rounded-2xl">Submit</button>
        </form>
        </div>
       
     </div>

      <div className="w-1/4 mx-auto py-6">
        <img src={logo} alt="" />
      </div>

      <nav className="my-4">
        <ul className="flex justify-center gap-5 text-lg">
          <li>Home</li>
          <li>News</li>
          <li>Contact</li>
          <li>Offer</li>
        </ul>
      </nav>

      <div className="flex justify-between w-11/12 mx-auto border-t py-4 border-gray-600">
        <div>
          <span>© 2023 Climatex. All rights reserved</span>
        </div>
        <div className="flex gap-3 ">
          <img
            src={iconFace}
            className="w-8 bg-white rounded-2xl"
            alt="Icone que leva para o facebook da climatex."
          />
          <img
            src={iconInstagram}
            className="w-8 bg-white rounded-2xl"
            alt="Icone que leva para o instagram da climatex."
          />
          <img
            src={iconLinkedin}
            className="w-8 bg-white rounded-2xl"
            alt="Icone que leva para o linkedin da climatex."
          />
          <img
            src={iconTwitter}
            className="w-8 bg-white rounded-2xl"
            alt="Icone que leva para o twitter da climatex."
          />
        </div>
      </div>
    </footer>
  );
}
