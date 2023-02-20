import React, { useState } from 'react'
import axios from 'axios'
import { AiFillStar } from 'react-icons/ai'

const Shows = () => {

  const [myshows, setmyShows] = useState([])

  axios.get('https:api.themoviedb.org/3/tv/popular?api_key=4985a084b07afd132b4316ba30d8a6fd')
    .then(resp => resp.data
    ).then((data) => {
      setmyShows(data.results)
      console.log(data, "data")
    })

    .catch(err => console.log(err, "err in fetching"))
  return (
    <>
      <section className="text-white body-font">
        <div className="container px-5 pt-10 pb-14 mx-auto">
          <h1 className='text-xl mb-4'> Popular Shows </h1>

          <div className="flex flex-wrap -m-4">
            {myshows.map((data) => {
              return (
                <div className="card shadow-lg p-2 lg:w-1/5" key={data.id}>
                  <div className="h-full bg-gray-900 bg-opacity-75 px-4 pt-8 pb-10 rounded-lg overflow-hidden text-center relative">
                    <img src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} className='h-70 w-50 justify-center rounded-lg ' />
                    <h1 className="tracking-widest text-s title-font font-medium text-gray-400 mb-1">{data.original_name}</h1>
                    <h2 className="title-font tracking-widest text-xs font-medium text-gray-400 mb-3">Release :{data.first_air_date}</h2>
                    {/* <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p> */}

                    <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                      <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>{Math.ceil(data.popularity)}&nbsp;M
                      </span>
                      {/* <h5>{data.id}</h5> */}
                      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        <AiFillStar className='text-yellow-400 text-s' />{data.vote_average}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}



          </div>
        </div>
      </section>
    </>
  )
}

export default Shows
