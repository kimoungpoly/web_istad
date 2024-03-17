import React from 'react';
import CardCourse from '../Card/CardCourseComponent';

const CourseCard = () => {
  const courses = [
    {
      id: 1,
      image: '/image/course/fluter.png',
      title: 'Flutter Mobile Development',
      description: 'iOS Development is designed for students to get started with design iOS App Concepts. This course will focus on languages syntax since basic levels and start to implement real user interfaces following with great user experiences and integrate others iOS features.',
      discount: '20% Discount',
      hours: '80',
      level: 'Beginner',
    },
    {
      id: 2,
      image: '/image/course/fluter.png',
      title: 'Flutter Mobile Development',
      description: 'iOS Development is designed for students to get started with design iOS App Concepts. This course will focus on languages syntax since basic levels and start to implement real user interfaces following with great user experiences and integrate others iOS features.',
      discount: '20% Discount',
      hours: '60',
      level: 'Beginner',
    },
    {
      id: 3,
      image: '/image/course/fluter.png',
      title: 'Flutter Mobile Development',
      description: 'iOS Development is designed for students to get started with design iOS App Concepts. This course will focus on languages syntax since basic levels and start to implement real user interfaces following with great user experiences and integrate others iOS features.',
      discount: '20% Discount',
      hours: '60',
      level: 'Beginner',
    },
    {
      id: 1,
      image: '/image/course/fluter.png',
      title: 'Flutter Mobile Development',
      description: 'iOS Development is designed for students to get started with design iOS App Concepts. This course will focus on languages syntax since basic levels and start to implement real user interfaces following with great user experiences and integrate others iOS features.',
      discount: '20% Discount',
      hours: '80',
      level: 'Beginner',
    },
    {
      id: 2,
      image: '/image/course/fluter.png',
      title: 'Flutter Mobile Development',
      description: 'iOS Development is designed for students to get started with design iOS App Concepts. This course will focus on languages syntax since basic levels and start to implement real user interfaces following with great user experiences and integrate others iOS features.',
      discount: '20% Discount',
      hours: '60',
      level: 'Beginner',
    },
    {
      id: 3,
      image: '/image/course/fluter.png',
      title: 'Flutter Mobile Development',
      description: 'iOS Development is designed for students to get started with design iOS App Concepts. This course will focus on languages syntax since basic levels and start to implement real user interfaces following with great user experiences and integrate others iOS features.',
      discount: '20% Discount',
      hours: '60',
      level: 'Beginner',
    },
    {
      id: 1,
      image: '/image/course/fluter.png',
      title: 'Flutter Mobile Development',
      description: 'iOS Development is designed for students to get started with design iOS App Concepts. This course will focus on languages syntax since basic levels and start to implement real user interfaces following with great user experiences and integrate others iOS features.',
      discount: '20% Discount',
      hours: '80',
      level: 'Beginner',
    },
    {
      id: 2,
      image: '/image/course/fluter.png',
      title: 'Flutter Mobile Development',
      description: 'iOS Development is designed for students to get started with design iOS App Concepts. This course will focus on languages syntax since basic levels and start to implement real user interfaces following with great user experiences and integrate others iOS features.',
      discount: '20% Discount',
      hours: '60',
      level: 'Beginner',
    },
    {
      id: 3,
      image: '/image/course/fluter.png',
      title: 'Flutter Mobile Development',
      description: 'iOS Development is designed for students to get started with design iOS App Concepts. This course will focus on languages syntax since basic levels and start to implement real user interfaces following with great user experiences and integrate others iOS features.',
      discount: '20% Discount',
      hours: '60',
      level: 'Beginner',
    },
    {
      id: 1,
      image: '/image/course/fluter.png',
      title: 'Flutter Mobile Development',
      description: 'iOS Development is designed for students to get started with design iOS App Concepts. This course will focus on languages syntax since basic levels and start to implement real user interfaces following with great user experiences and integrate others iOS features.',
      discount: '20% Discount',
      hours: '80',
      level: 'Beginner',
    },
    {
      id: 2,
      image: '/image/course/fluter.png',
      title: 'Flutter Mobile Development',
      description: 'iOS Development is designed for students to get started with design iOS App Concepts. This course will focus on languages syntax since basic levels and start to implement real user interfaces following with great user experiences and integrate others iOS features.',
      discount: '20% Discount',
      hours: '60',
      level: 'Beginner',
    },
    {
      id: 3,
      image: '/image/course/fluter.png',
      title: 'Flutter Mobile Development',
      description: 'iOS Development is designed for students to get started with design iOS App Concepts. This course will focus on languages syntax since basic levels and start to implement real user interfaces following with great user experiences and integrate others iOS features.',
      discount: '20% Discount',
      hours: '60',
      level: 'Beginner',
    },
    {
      id: 1,
      image: '/image/course/fluter.png',
      title: 'Flutter Mobile Development',
      description: 'iOS Development is designed for students to get started with design iOS App Concepts. This course will focus on languages syntax since basic levels and start to implement real user interfaces following with great user experiences and integrate others iOS features.',
      discount: '20% Discount',
      hours: '80',
      level: 'Beginner',
    },
    {
      id: 2,
      image: '/image/course/fluter.png',
      title: 'Flutter Mobile Development',
      description: 'iOS Development is designed for students to get started with design iOS App Concepts. This course will focus on languages syntax since basic levels and start to implement real user interfaces following with great user experiences and integrate others iOS features.',
      discount: '20% Discount',
      hours: '60',
      level: 'Beginner',
    },
  ];

  return (
    <>
      {courses.map(course => (
        <div key={course.id}>
          <CardCourse course={course} />
        </div>
      ))}
    </>
  );
};

export default CourseCard;
