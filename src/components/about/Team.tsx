import React from 'react'

export  function TeamCard  () {
  const team = [
    {
      image: "/av1.png",
      title: "Tommy Hilfiger",
      desc: "Manager of the team",
    },
    {
      image: "/av1.png",
      title: "Emma Watson",
      desc: "Designer of the team",
    },
    {
      image: "/av1.png",
      title: "John Doe",
      desc: "Developer of the team",
    },
  ]

  return (
    <div className="w-full max-w-[1440px] mx-auto px-5 py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {team.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center gap-5 p-5 border-1 border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 "
          >
            <div className="flex items-center justify-center h-20 w-20  bg-primary/10 shadow-inner">
              <img src={item.image} alt={item.title} className="h-58 w-58 object-contain" />
            </div>

            <div>
              <h3 className="font-semibold text-xl ">{item.title}</h3>
              <p className="text-sm  mt-2">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

