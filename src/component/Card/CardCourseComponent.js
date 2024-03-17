import React from 'react';

export const CardCourse = () => {
  return (
    <div>
      <a href="#">
        <div className="border-0 bg-white shadow-md rounded-lg overflow-hidden">
          <div className="flex p-3">
            <div className="w-full  ">
              <img src="/image/course/fluter.png" className="w-32 h-32" alt="..." />
            </div>
            <div className="w-full  pl-2">
              <h6 className="text-lg font-semibold mb-1">Flutter Mobile Development</h6>
              <span className="mb-3 mr-2 inline-block bg-red-500 text-white px-2 py-1 rounded">20% Scholarship</span>
              <p className="text-sm leading-relaxed">Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.</p>
            </div>
            <div className="w-full pl-1 pb-0 mb-2 flex flex-col ">
              <p className="text-sm m-1 flex ">
                {/* <i className="fas fa-clock  mr-1"></i> */}
                <span className="mr-1">80</span>
                <span>hours</span>
              </p>
              <p className="text-sm m-1 ">
                {/* <i className="fas fa-layer-group "></i> */}
                <span>Medium</span>
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default CardCourse;
