// Home.js
import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import CourseCard from "../component/Data/CardCourseData";
import SlideComponent from "../component/Slide/SlideComponent";
import CardContent from "../component/Data/DataCardContent";

export default function Home() {
    return (
        <main className=" container">
            <SlideComponent />
            <div className='mx-40'>
                <h2 className='font-bold mt-10'>COURSES</h2>
                <div className="my-4 grid grid-cols-2 gap-6">
                    <CourseCard />
                </div>
                <h2 className='font-bold mt-10'>USEFUL CONTENTS</h2>
                <CardContent/>
            </div>
        </main>
    );
}
