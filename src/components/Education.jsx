import React from 'react'

const Education = () => {
  const edu = [
    {
      id: 1,
      year: "2020 - 2024",
      title: "SRM Institute Of Science and Technology",
      place: "Chennai, Tamil Nadu",
      course:"B-Tech: Computer Science and Engineering",
      style: "shadow-yellow-500",
    },
    {
      id: 2,
      year: "2018 - 2020",
      title: "Narayana Juniour College",
      place: "Vijayawada, Andhra Pradesh",
      course:"CLASS XII: Andhra Pradesh Board of Intermediate Education",
      style: "shadow-yellow-500",
    },
    {
      id: 1,
      year: "2017 - 2018",
      title: "Ravindra Bharathi English Medium High School",
      place: "Eluru, Andhra Pradesh",
      course:"CLASS X: The Board of Secondary Education Of Andhra Pradesh",
      style: "shadow-yellow-500",
    },

  ];
  return (
    <div
      name="education"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Education
          </p>

        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {edu.map(({ id, year, title, place,course, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <p className="mt-4">{year}</p>
              <p className="mt-4">{title}</p>
              <p className="mt-4">{course}</p>

              <p className="mt-4">{place}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Education