import React, { useEffect } from 'react'
import { useState } from 'react'
import { Card, FormField, Hero, Loader } from '../Components'
import { Transition } from '@headlessui/react'

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map((post) => <Card key={post._id} {...post} />)
  }

  return (
    <h2 className="col-span-4	 mt-5 font-bold text-xl uppercase text-stone-400 text-center">
      {title}
    </h2>
  )
}

const Home = () => {
  const [loading, setLoading] = useState(false)
  const [allPosts, setAllPosts] = useState(null)
  const [searchText, setSearchText] = useState(null)
  const [searchedResults, setSearchedResults] = useState(null)
  const [searchTimeout, setSerachTimeout] = useState(null)
  const [isShowing, setIsShowing] = useState(false)

  useEffect(() => {
    setIsShowing(true)
  }, [])

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      const apiUrl =
        import.meta.env.mode === 'production'
          ? import.meta.env.VITE_HOST
          : 'http://localhost:8080/api/v1/post'
      try {
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        if (response.ok) {
          const result = await response.json()
          setAllPosts(result.data.reverse())
        }
      } catch (error) {
        alert(error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const searchHandler = (e) => {
    clearTimeout(searchTimeout)
    setSearchText(e.target.value)

    setSerachTimeout(
      setTimeout(() => {
        const searchRes = allPosts.filter(
          (item) =>
            item.name.toLowerCase().includes(searchText.toLowerCase()) ||
            item.prompt.toLowerCase().includes(searchText.toLowerCase())
        )
        setSearchedResults(searchRes)
      }, 500)
    )
  }

  return (
    <>
      <Transition
        show={isShowing}
        enter="transition-opacity duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-700"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="bg-[#090C25]">
          <Hero className="" />
          <section className="relative max-w-7x1 mx-auto flex  flex-col items-center justify-center content-center">
            <div>
              <h1 className="   text-center text-white text-2xl">
                Community Showcase
              </h1>
            </div>

            <div className=" relative mt-6 	w-full  flex items-center content-center  flex-col  ">
              <div className="max-w-xl min-w-min w-96 relative">
                <FormField
                  className="relative"
                  type="text"
                  name="search"
                  placeholder="Search"
                  changeHandler={searchHandler}
                  value={searchText}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#fff"
                  className="w-6 h-6 absolute top-1/4 right-1 transform -translate-x-1/2 -translate-y-1
                "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
            </div>

            <div className="mt-16">
              {loading ? (
                <div className="flex justify-center items-center">
                  <Loader />
                </div>
              ) : (
                <>
                  {searchText && (
                    <h2 className="font-medium text-gray-400 mb-3	">
                      Showing results for{' '}
                      <span className="text-orange-300 text-bold">
                        {searchText}
                      </span>
                    </h2>
                  )}
                  <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3 max-w-7xl	p-2">
                    {searchText ? (
                      <>
                        <RenderCards
                          data={searchedResults}
                          title="No search result found"
                        />
                      </>
                    ) : (
                      <>
                        <RenderCards data={allPosts} title="No posts found" />
                      </>
                    )}
                  </div>
                </>
              )}
            </div>
          </section>
        </div>{' '}
      </Transition>
    </>
  )
}

export default Home
