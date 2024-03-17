import React from 'react';

const Footer = () => {
  return (
    <footer className="pt-3 text-center  bg-blue-900 text-white ">
      <div className="container  ">
        <div className="flex justify-evenly pb-8">
          <div className="flex flex-col justify-start ">
            <img src="/image/img.png" alt="CSTAD" style={{ width: '100px', height: '100px' }} className="img-fluid img-md-fluid" />
            <p className="text-start text-sm mt-3 pb-2">Start your IT career with </p>
            <p className="text-start text-sm">CSTAD</p>
          </div>
          <div className="text-start">
            <p className=" font-bold pb-4 ">Learn More</p>
            <ul className=" ">
              <li><a href="">Course</a></li>
              <li><a href="">IT News</a></li>
              <li><a href="">Job Opportunity</a></li>
              <li><a href="">Privacy Policy</a></li>
              <li><a href="">FAQ</a></li>
            </ul>
          </div>

          <div className="text-start">
            <p className="pb-4">Contact Us</p>
            <ul className="">
              <li>(+855) 95-990-910</li>
              <li>(+855) 93-990-910</li>
              <li><a href="https://t.me/istadkh" target="_blank" rel="noopener noreferrer"><i className="fab fa-telegram i-style text-white pr-1"></i>Telegram</a></li>
              <li><a href="https://www.youtube.com/channel/UCUaq9S8Gu4zteE-x77JT-kA" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube i-style text-white pr-1"></i>Youtube</a></li>
            </ul>
          </div>
          <div className='text-start '>
            <p className="pb-4">Follow Us</p>
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fistad.co&tabs&width=255&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=536767018150991" width="255" height="130" style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          </div>
        </div>
        <hr className="border-solid border-white opacity-50 mx-10 " />
        <p className="pb-5 pt-2">
          &copy; <span>2024</span> Center of Science and Technology Advanced Development | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
