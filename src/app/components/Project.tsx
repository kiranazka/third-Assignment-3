import React from 'react'
import Heading from './Heading';
import Card from './Card';


const data = [
    {
id:0,
title:"Todo List",
desc: " A React & Typescript based app for managing and organiztion",
img: "/image/todo.jpg" ,
tag: ["React","Node","CSS","Typescript"],
    },
    {
        id:1,
        title:"Calculator",
        img: "/image/calc.jpg",
        desc: " A React & Typescript based app for managing and organiztion",
        tag: ["React","Node","CSS","Typescript"],
     },
      {
          id:2,
          title:"Weather",
          desc: " A React & Typescript based app for managing and organiztion",
          img: "/Image/weather.jpg",
         tag: ["React","Node","CSS","Typescript"],
        },
        
        {
            id:3,
            title:"Table",
            desc: " A React & Typescript based app for managing and organiztion",
            img: "/Image/table.jpg",
           tag: ["React","Node","CSS","Typescript"],
        },  
        {
            id:4,
            title:"Curruncy converter",
            desc: " A React & Typescript based app for managing and organiztion",
            img: "/image/converter.jpg",
           tag: ["React","Node","CSS","Typescript"],
        }, 
        {
            id:5,
            title:"ATM",
            desc: " A React & Typescript based app for managing and organiztion",
            img: "/image/MT.jpg",
           tag: ["React","Node","CSS","Typescript"],
        }, 
       

];

const Project = () => {
    

  return (
    <div id='Project' className= "container pt-32">
        <Heading title='My Project'/>
        <div className='grid gap-10 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {data.map((el) => (<Card 
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tag}
            />))}
        </div>
    </div>                                                                                                                                                  
  )
}

export default Project;
