import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { AiFillStar } from 'react-icons/ai'
import { MagnifyingGlass } from 'react-loader-spinner';
import { Link } from 'react-router-dom'

const Shows = () => {

  const [TrendingMovies, setTrendingMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
      axios.get('https:api.themoviedb.org/3/tv/popular?api_key=4985a084b07afd132b4316ba30d8a6fd')
        .then(resp => resp.data
        ).then((data) => {
          setTrendingMovies(data.results)
          // setIsLoading(false)
        })

        .catch(err => console.log(err, "err in fetching"))
    }, 1500)
  }, [])




  return (
    <>
      {isLoading ?
        <div className='flex justify-center item-center my-24 py-24 h-100vh'><MagnifyingGlass
          visible={true}
          height="100"
          width="100"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{ marginLeft: "100px" }}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor='#c0efff'
          color='#e15b64'
        /></div>
        :
        <section className="text-white body-font">
          <div className="container px-5 pt-10 pb-14 mx-auto">
            <h1 className='text-xl mb-4'> Popular Shows</h1>

            <div className="flex flex-wrap m-4">
              {TrendingMovies.map((data) => {
                return (
                  <>
                    <div className="card shadow-lg p-2 lg:w-1/5 transition ease-in-out   hover:-translate-y-1 hover:scale-105 duration-500 " key={data.id}>
                      <Link to={`movie/${data.id}`} key={data.id}>
                        <div className="h-full bg-gray-900 bg-opacity-75 px-4 pt-6 pb-10 rounded-lg overflow-hidden text-center relative">
                          <img src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} className='h-70 w-50 justify-center rounded-lg ' alt='movie poster' />
                          <h1 className="tracking-widest text-s title-font font-medium text-gray-400 mb-1">{data.original_title}</h1>
                          <h2 className="title-font tracking-widest text-xs font-medium text-gray-400 mb-3">Release :{data.release_date}</h2>

                          <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                            <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                              <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>{Math.ceil(data.popularity)}&nbsp;M
                            </span>
                            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                              <AiFillStar className='text-yellow-400 text-s' />{Math.ceil(data.vote_average)}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </>
                )
              })}



            </div>
          </div>
        </section>
      }
    </>



  )
}


export default Shows
