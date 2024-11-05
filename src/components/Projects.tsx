import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data = [{
    id:0,
    title:"Static InterActive Resume",
    desc:"A TypeScript-based Interactive Resume built with HTML and CSS,allowing users to show thier skills dynamically.",
    img:"/project_01.jpg",
    tags:["HTML","Node","CSS","TypeScript"],
},

{
    id:1,
    title:"Countdown Timer",
    desc:"A Next.JS and TypeScript powered website to track time with an interactive countdown feature.",
    img:"/project_03.jpg",
    tags:["Next.Js","Node","CSS","TypeScript"],
},
{
id:2,
title:"E-Commerce Website",
desc:"A Powered Website based on Next.JS,TypeScript and TailwindCss features .",
img:"/project_04.jpg",
tags:["HTML","TailwindCSS","Node","Next.Js"],
},
{
id:3,
    title:"MyWeb",
    desc:"A Simple WebPage built with HTML and CSS,allowing users to show thier skills dynamically.",
    img:"/project_02.jpg",
    tags:["HTML","CSS","Node","TypeScript"],
},


];
const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
   <Heading title='My Projects' />
   <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-2 place-items-center height:150px width:200px'>
    {data.map((el) => (<Card 
      key={el.id}
      title={el.title}
      desc={el.desc}
      img={el.img}
      tags={el.tags}
      />)) }
   </div>
    </div>
  )

}

export default Projects