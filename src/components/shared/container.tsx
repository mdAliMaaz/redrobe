import React from 'react'
interface IContainerProps {
  children:React.ReactNode;
  size:string;
  className?:string;
}
const Container = ({children,size,className}:IContainerProps) => {
  return (
    <div className={`${className} w-full md:w-[90%] md:m-auto ${size === "sm" && "p-2 md:p-4"}  ${size === "lg" && "p-4 md:p-6"}`}>{children}</div>
  )
}

export default Container