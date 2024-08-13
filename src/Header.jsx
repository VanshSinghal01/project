import React, { useState } from 'react';
import './App.css';
import logo from './Images/logo.png';
import img1 from "./feature-1.png"
import img2 from "./feature-2.png";
import img3 from "./feature-3.png";
import img4 from "./feature-4.png";
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const[visible, setvisible] = useState(false)
  const[visible1, setvisible1] = useState(false)
  const[visible2, setvisible2] = useState(false)
  const[visible3, setvisible3] = useState(false)
  const[visible4, setvisible4] = useState(false)
  const[visible5, setvisible5] = useState(false)

  const navigate = useNavigate();

  const show=()=>{
    setvisible(!visible)
  }
  const show1=()=>{
    setvisible1(!visible1)
  }
  const show2=()=>{
    setvisible2(!visible2)
  }
  const show3=()=>{
    setvisible3(!visible3)
  }
  const show4=()=>{
    setvisible4(!visible4)
  }
  const show5=()=>{
    setvisible5(!visible5)
  }
  const Sign=()=>{
    navigate("/signup")
  }
  return (
    <div>
      <div className="header">
        <nav>
          <div className="nav-content">
            <img src={logo} alt="Logo" className="logo" />
            <div className="language-and-signup">
              <select className="language-switch">
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
              </select>
              <button className="sign-up-button" onClick={Sign}>Sign up</button>
            </div>
          </div>
        </nav>
        <div className="content">
          <h1>Unlimited movies, TV shows, and more</h1>
          <h3>Watch anywhere. Cancel anytime.</h3>
          <p>Ready to watch? Enter your email to create or restart your membership.</p>
          <div className="signup">
            <input type="text" placeholder="Email Address" className="input" />
            <button onClick={() => alert('Get Started')}>Get Started</button>
          </div>
        </div>
      </div>

      <div className="feature">
        <div className="row">
          <div className="text">
            <h1>Enjoy on your TV</h1>
            <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
          </div>
          <div className="fear">
            <img src={img1} />
          </div>
        </div>
      </div>

      <div className="feature">
        <div className="ro1">
          <div className="fea1">
            <img src={img2} />
          </div>
          <div className="tex1">
            <h1>Download your shows to watch offline</h1>
            <p>Save your favourites easily and always have something to watch.</p>
          </div>
        </div>
      </div>
      <div className="feature">
        <div className="row">
          <div className="text">
            <h1>Watch everywhere</h1>
            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
          </div>
          <div className="fear">
            <img src={img3} />
          </div>
        </div>

      </div>
      <div className='feature'>
        <div className="ro1">
          <div className="fea1">
            <img src={img4} />
          </div>
          <div className="tex1">
            <h1>Create profiles for kids</h1>
            <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
          </div>
          <div className='drop-sign'>
          </div>
        </div>
      </div>
      <div className='feature'>
        <div className='tex2'>
          <h1>Frequently Asked Questions</h1>
        </div>
        <div>
        <button className='box-1' onClick={show}>What is Netflix? </button>
        { visible && <div className='boxhide'>
          <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. </p>
          <p>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
        </div>}
        </div>
        <div>
        <button className='box-2' onClick={show1}>How much dose Netflix Cost? </button>
        { visible1 && <div className='boxhide-1'>
          <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.</p>
        </div>}
        </div>
        <div>
        <button className='box-2' onClick={show2}>Where can i Watch? </button>
        { visible2 && <div className='boxhide'>
          <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
          </p>
         <p>You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>

          </div>}
        </div>
        <div>
        <button className='box-2' onClick={show3}>How do i cancle? </button>
        { visible3 && <div className='boxhide-1'>
          <p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
        </div>}
        </div>
        <div>
        <button className='box-2' onClick={show4}>What can i watch on Netflix? </button>
        { visible4 && <div className='boxhide-1'>
         <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
         </div>}
        </div>
        <div>
        <button className='box-2' onClick={show5}>Is Netflix good for kids? </button>
        { visible5 && <div className='boxhide'>
         <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.</p>
         <p>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
         </div>}
        </div>
        <div className="container-1">
          <p>Ready to watch? Enter your email to create or restart your membership.</p>
                <div className="signup">
                  <input type="text" placeholder="Email Address" className="input" />
                  <button onClick={() => alert('Get Started')}>Get Started</button>
                </div>
              </div>
      </div>

      <div className="footer">
        <div className="f2">
          <p>Question? Call 000-800-909-1645</p>
        </div>
        <div className="f1">
          <ul className="ull">
            <li>FAQ</li>
            <li>Help Center</li>
            <li>Term of Use</li>
            <li>Privacy</li>
          </ul>
          <ul className="ull">
            <li>Cookie Preference</li>
            <li>Corporate Information</li>
            <li>Investor Relation</li>
            <li>jobs</li>
          </ul>
          <ul className="ull">
            <li>Way To Watch</li>
            <li>Account</li>
            <li>Media Center</li>
            <li>Contact us</li>
          </ul>
          <ul className="ull">
            <li>Speed Test</li>
            <li>Legal Notice</li>
            <li>Only On Netflix</li>
          </ul>
        </div>
      </div>


    </div>


  );
}

export default Header;
