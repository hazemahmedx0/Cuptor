import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { previewimg } from '../assets'
import { FormField, Loader } from '../Components'
import { getRandomPrompt } from '../utils'
import { Transition } from '@headlessui/react'

const CreatePost = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo:
      'https://www.shutterstock.com/image-illustration/3d-shiny-red-number-collection-260nw-120044458.jpg',
  })

  const [genImg, setGenImg] = useState(false)
  const [loading, setLoading] = useState(false)
  const [alt, setAlt] = useState(null)

  const submitHandler = async (e) => {
    e.preventDefault()

    if (form.prompt && form.photo) {
      setLoading(true)

      try {
        const response = await fetch('http://localhost:8080/api/v1/post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        })

        await response.json()
        navigate('/')
      } catch (error) {
        alert(error)
      } finally {
        setLoading(false)
      }
    } else {
      alert('Please enter a prompt and generate an image')
    }
  }

  const SurpiiseMeHandler = () => {
    const randomPrompt = getRandomPrompt(form.prompt)
    setForm({ ...form, prompt: randomPrompt })
  }
  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGenImg(true)
        setAlt(form.prompt)
        const response = await fetch('http://localhost:8080/api/v1/dalle', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt: form.prompt }),
        })
        const data = await response.json()
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` })
      } catch (error) {
        alert(error)
      } finally {
        setGenImg(false)
      }
    } else {
      alert('Please enter a prompt')
    }
  }

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    console.log(form)
  }

  const [isShowing, setIsShowing] = useState(false)

  useEffect(() => {
    setIsShowing(true)
  }, [])

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
        <section className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-24 pt-24 px-16 max-md:grid-cols-1 ">
            <div>
              <Link to="/" className=" text-gray-300 flex flex-row gap-1 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="rgb(209 213 219 / var(--tw-text-opacity))"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
                <span> home</span>
              </Link>
              <h1 className="   text-left text-white text-2xl">
                Unleash Your Creativity with AI
              </h1>
              <form className="mt-8 max-w-3xl" onSubmit={submitHandler}>
                <div className="flex flex-col gap-2">
                  <FormField
                    lableName="Your name"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={form.name}
                    changeHandler={changeHandler}
                  />
                  <FormField
                    lableName="Prompt"
                    type="text"
                    name="prompt"
                    placeholder="an astronaut lounging in a tropical resort in space, vaporwave"
                    value={form.prompt}
                    changeHandler={changeHandler}
                    isSurpiiseMe
                    SurpiiseMeHandler={SurpiiseMeHandler}
                  />
                </div>
                <div className=" flex flex-row flex-wrap content-between  justify-between basis-auto mt-5 ">
                  <div className="">
                    <button
                      type="button"
                      onClick={generateImage}
                      className="text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    >
                      {genImg ? 'Generating...' : 'Generate'}
                    </button>
                  </div>
                  <div className="">
                    <button
                      type="submit"
                      className=" text-white bg-[#6d28d9] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    >
                      {loading ? 'Sharing...' : 'Share with the community'}
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div>
              <div className="relative bg-[#7B61FF]/10 border-2 border-dashed border-[#664CEA] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 flex w-full	h-full justify-center items-center ">
                {form.photo ? (
                  <img
                    src={form.photo}
                    alt={alt}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <img
                    src={previewimg}
                    alt="preview"
                    className="w-9/12 h-9/12 object-contain opacity-40"
                  />
                )}

                {genImg && (
                  <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                    <Loader />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>{' '}
      </Transition>
    </>
  )
}

export default CreatePost
