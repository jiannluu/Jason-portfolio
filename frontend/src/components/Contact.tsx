import React, { useRef } from 'react'
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5'
import { IconContext } from 'react-icons'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Contact = (): JSX.Element => {
  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: any): void => {
    e.preventDefault()

    const currentForm = form.current
    // this prevents sending emails if there is no form.
    // in case currentForm cannot possibly ever be null,
    // you could alert the user or throw an Error, here
    if (currentForm == null) return

    emailjs.sendForm(process.env.SERVICE_ID as string, process.env.TEMPLATE_ID as string, currentForm, process.env.PUBLIC_KEY as string)
      .then((result) => {
        console.log(result.text)
        console.log('message sent')
        toast.success('Message sent 👌 I will get back to you ASAP', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: 'light'
        })
        e.target.reset()
      }, (error) => {
        console.log(error.text)
        toast.error('Error! Try again later', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: 'light'
        })
      })
  }

  return (
        <div className="h-screen animate-color-gradient bg-white">
            {/* background blobs */}
            <div className="absolute w-screen h-screen">
                {/* delay each blob animation for better visuals */}
                <div className="absolute top-[30%] left-[32.5%] w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-background-blob"></div>
                <div className="absolute top-[30%] right-[32.5%] w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-background-blob animation-delay-2000"></div>
                <div className="absolute bottom-[25%] left-[40%] w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-background-blob animation-delay-4000"></div>
            </div>
            {/* flex row for any screen lower than 1024px */}
            <div className="w-screen h-screen flex flex-col lg:flex-row">
                <div className="mt-[11vh] lg:mt-0 lg:flex-1 flex flex-col justify-center items-center z-10">
                    <h1 className="text-[6vw] md:text-[1.5em] lg:text-[2em] text-[#162938] text-center font-semibold">Connect with me here!</h1>
                    {/* hide this text for mobile users */}
                    <h1 className="hidden lg:inline-block text-center mx-[10%] my-[2%]">Have some burning questions on your mind? Want a friend to chat with? Or maybe you just want to stop by and say hello. Please feel free to connect with me and send me a message!</h1>
                    <div className="flex flex-row">
                        <IconContext.Provider value={({ size: '3em' })}>
                            <a href="https://www.linkedin.com/in/jlu1932/" target="_blank" rel="noreferrer noopener" className="flex flex-col flex-1 justify-center items-center px-[5vw] py-[2vh] cursor-pointer hover:backdrop-blur-[20px] hover:shadow-[0_0_10px_rgba(0,0,0,0.5)] hover:rounded-[5px] hover:border-1 hover:border-solid hover:border-[rgba(255,255,255,0.5)]">
                                <IoLogoLinkedin className="tech-icons"/>
                                <h1 className="text-[2vh]">LinkedIn</h1>
                            </a>
                            <a href="https://github.com/jiannluu" target="_blank" rel="noreferrer noopener" className="flex flex-col flex-1 justify-center items-center px-[5vw] py-[2vh] cursor-pointer hover:backdrop-blur-[20px] hover:shadow-[0_0_10px_rgba(0,0,0,0.5)] hover:rounded-[5px] hover:border-1 hover:border-solid hover:border-[rgba(255,255,255,0.5)]">
                                <IoLogoGithub className="tech-icons"/>
                                <h1 className="text-[2vh]">GitHub</h1>
                            </a>
                        </IconContext.Provider>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <h1 className='text-[4vw] md:text-[1.5em] my-[2vh] lg:text-[2em] text-[#162938] text-center font-semibold'>OR</h1>
                </div>
                <div className="md:flex-1 flex justify-center items-center">
                    <div className='relative w-[75%] md:backdrop-blur-[20px] md:shadow-[0_0_20px_rgba(0,0,0,0.5)] md:rounded-[20px] md:border-2 md:border-solid md:border-[rgba(255,255,255,0.5)]'>
                        <form ref={form} onSubmit={sendEmail} className="w-[100%] p-[15px] md:p-[40px]">
                            <h1 className='text-[6vw] md:text-[1.5em] lg:text-[2em] text-[#162938] text-center font-semibold'>Send me an email!</h1>

                            <div className='formContainer-styling'>
                                <input type="text" id="name" name="user_name" className='formInput-styling z-10' required />
                                <label htmlFor="name" className='formLabel-styling'>Your Name</label>
                            </div>
                            <div className='formContainer-styling'>
                                <input type="text" id="email" name="user_email" required className='formInput-styling z-10'/>
                                <label htmlFor="email" className='formLabel-styling'>Email Address</label>
                            </div>
                            <div className='messageContainer-styling'>
                                <textarea id="message" name="message" rows={7} minLength={30} className='messageInput-styling z-10' placeholder="Share your thoughts or just say hello!" required />
                                <label htmlFor="message" className='messageLabel-styling'>Your message</label>
                            </div>
                            <button className="relative left-[35%] px-3 py-1 md:px-6 md:py-3 font-bold text-black group">
                                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-[#00b2df] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                                <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                                <span className="relative">Shoot it!</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            {/* message success and fail popup */}
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
                theme="light"
                />
        </div>
  )
}

export default Contact
