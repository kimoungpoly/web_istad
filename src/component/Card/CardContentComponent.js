// ContentCard.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const CardContent = ({ image, createdAt }) => {
    return (
        <div className="col-span-1 p-2">
            <a href="">
                <div className="border-none rounded-lg shadow-lg p-2 w-full">
                    <div className=" ">
                        <div>
                            <img src={image} className="w-full rounded-full" alt="recently news" />
                        </div>
                        <div>
                            <div className="flex justify-between">
                                <p className="event-category">
                                    <FontAwesomeIcon icon={faTag} className="i-style text-xs" />
                                    <span>Blog</span>
                                </p>
                                <p className="post-date">{createdAt}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default CardContent;
