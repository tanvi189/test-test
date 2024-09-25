import React from 'react'

const page = () =>{
  return (
    <div>home page<figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/pic1.jpg" alt="" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “my name is Muhammad Tanveer,and I am the student of Genrative AI.”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
Muhammad Tanveer
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          Staff Genrative AI
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page