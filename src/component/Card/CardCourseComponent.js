import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const CardCourse = ({ course }) => {
  const { image, title, discount, description, hours, level } = course;

  return (
    <div  >
      <a href="#" >
        <div className="border-0 bg-white shadow-md rounded-lg overflow-hidden w-full" >
          <div className="grid grid-cols-4 p-5">
            <div className="">
              <img src={image} className="w-32 h-32" alt=""/>
            </div>
            <div className="pl-2 col-span-2">
              <h6 className="text-sm font-semibold mb-1">{title}</h6>
              {discount && (
                <span className="mb-3 mr-2 text-xs inline-block bg-red-500 text-white px-2 py-1 rounded">{discount}</span>
              )}
              <p className="text-sm line-clamp-2 leading-relaxed">{description}</p>
            </div>
            <div className="pl-1 pb-0 mb-2 flex flex-col">
              {hours && (
                <p className="text-sm m-1 flex items-center">
                  <FontAwesomeIcon icon={faClock} className="mr-1" />
                  <span className="mr-1">{hours}</span>
                  <span>hours</span>
                </p>
              )}
              {level && (
                <p className="text-sm m-1 flex items-center">
                  <FontAwesomeIcon icon={faLayerGroup} className="mr-1" />
                  <span>{level}</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default CardCourse;
