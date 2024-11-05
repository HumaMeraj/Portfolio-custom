import React from 'react'
import Image from 'next/image';

interface propsType {
    title:string;
    desc:string;
    img:string;
    tags:string[];
}


const Card : React.FC<propsType> = ({title, desc, img, tags }) => {
  return (
    <div className='border border-accent w-[200px] sm:w-[350px]'>
  <div>
    <Image className='w-[150px] sm:w-[150px] h-auto' 
    src={img}
    width={150}
    height={200}
    alt={title}
    
    />
  </div>

<div className='p-4 space-y-4'>
    <div className='text-4xl font-extralight'>{title}</div>
    <div>{desc}</div>
    <div>
        {tags.map((el) => (
            <div className='tags' key={el}>
         {el}
            </div>))}
    </div>
    </div>
    </div>
  )
}

export default Card