import { Link,useNavigate } from 'react-router-dom';
import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React,{useState} from 'react';
import loginGif from '../assets/partying-face.gif'
function SignIn() {
    let navigate=useNavigate()
    const [credentials, setCredentials] = useState({email:'',password:''})
    async function handleSubmit(e){
        const userData={email:credentials.email,password:credentials.password}
        e.preventDefault()
        const form= await fetch("/new/signin",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(userData)  
        })
        const message=await form.json()
        if(message.message===true) {
          toast(
            () => (
              <div
                style={{
                  display: "flex",
                  padding: "0 10px",
                  gap: 10,
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <img
                  src={loginGif}
                  alt="emoji"
                  height={"40px"}
                  width={"40px"}
                />
                <p>
                  hi !{" "}
                  <span style={{fontWeight: 600, fontSize: "16px" }}>
                    {message.userFullName}
                  </span>{" "}, you are successfully signin.
                </p>
              </div>
            ),
            {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              toastClassName: "max-w-[360px]",
            }
          );
          localStorage.setItem("authToken",message.authToken)
          window.localStorage.setItem("accountEmail", credentials.email);
          window.localStorage.setItem("userFullName", message.userFullName);
          navigate('/home')
        }
        else{
          toast(
            () => (
              <div
                style={{
                  display: "flex",
                  padding: "0 10px",
                  gap: 24,
                  alignItems: "center",
                }}
              >
                <img
                  src="https://em-content.zobj.net/source/microsoft-teams/337/pensive-face_1f614.png"
                  alt="emoji"
                  height={"40px"}
                  width={"40px"}
                />
                <p>
                  Sorry, can't sign in, <br />
                  <span style={{fontWeight: 600, fontSize: "16px" }}>
                  invalid credentials
                  </span>
                </p>
              </div>
            ),
            {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              toastClassName: "max-w-[360px]",
              progressStyle: { backgroundColor: "#f1c40f" },
            }
          );
        }     
    }
    const handleInputChange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})  
    }
  return (
    <section className="h-[100vh] overflow-y-scroll">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        <div className="relative hidden sm:flex items-center px-4 pb-10 pt-60 sm:pb-16 justify-center lg:pb-24 bg-gray-50 sm:px-6 lg:px-8">
          <div className="absolute inset-0">
            <img
              className="object-cover w-full h-full"
              src="https://img5.goodfon.com/wallpaper/nbig/2/3f/makarony-bliudo-lapsha-temnyi-fon-eda-pomidory-skovoroda.jpg"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          <div className="relative">
            <div className=" max-w-sm md:max-w-xl xl:w-full xl:mx-auto mx-auto xl:pr-24 xl:max-w-xl">
              <h3 className="text-4xl font-bold text-white">
                Don't miss out on the{" "}
                <Link
                  to={"/home"}
                  className="font-serif italic text-emerald-500"
                >
                  foodiefrenzy
                </Link>{" "}
                fun - join us now!
              </h3>
              <ul className="grid  mt-10 grid-cols-2 gap-x-8 gap-y-4">
                <li className="flex items-center space-x-3">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-emerald-500 rounded-full">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-white">
                    {" "}
                    Personalization{" "}
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-emerald-500 rounded-full">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-white">
                    {" "}
                    Recipe search{" "}
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-emerald-500 rounded-full">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-white">
                    {" "}
                    Social features{" "}
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-emerald-500 rounded-full">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-white">
                    {" "}
                    Interactive elements{" "}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
          <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
            <Link
              to="/home"
              title="FoodieFrenzy"
              className=" rounded-md focus:outline-none active:opacity-60"
            >
              <svg
                viewBox="0 0 403 88"
                className="css-1j8o68f m-auto mb-10 fill-emerald-500 h-12 md:h-14  "
              >
                <defs id="SvgjsDefs1608"></defs>
                <g
                  id="SvgjsG1609"
                  featurekey="symbolContainer"
                  transform="matrix(1,0,0,1,0,0)"
                >
                  {" "}
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="nonzero"
                    d="             M0,0             H83             V88             H0,0             z             M4,4             v80             h75             v-80             z     "
                  ></path>
                </g>
                <g
                  id="SvgjsG1610"
                  featurekey="symbolFeature-0"
                  transform="matrix(1.272657036781311,0,0,1.272657036781311,10.183155845039796,12.317262960449973)"
                >
                  <g xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M44.104,11.163c0.779-0.705,0.704-1.413-0.15-2.119   c-4.348,0.819-31.488,11.599-32.084,13.682C22.578,18.858,33.359,15.03,44.104,11.163z"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M36.52,2.613c-0.484-3.271-4.054,0.521-6.617,2.082   c-2.642,2.043-4.833,3.531-7.547,5.578c-2.566,1.968-13.312,9.478-13.906,11.783L36.52,2.613z"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.671,26.926c2.752-1.076,2.381-4.869,7.548-2.936   c0.483,0.781,0,1.45-0.632,2.229c3.235-1.261,5.245-2.86,7.66,1.303c1.896-0.631,5.726,0.93,6.023-0.074   c-1.488-0.816-3.05-1.486-5.354-1.486c-0.744-0.707-1.523-1.376-2.305-2.083c-1.19-0.372-2.416-0.335-3.641,0.111   c-1.268-0.818-1.936-1.747-4.092-1.747c-2.12,0-2.791,0.929-4.017,1.747c-3.271,0-3.568,0.036-5.986,2.229   c-1.561,0.447-3.159,0.855-4.721,1.303c0.073,0.223,0.111,0.447,0.186,0.631c1.747-0.258,3.495-0.52,5.242-0.779   C15.214,24.995,20.048,23.582,18.671,26.926z"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.363,28.861c-0.224,8.625,5.279,16.691,11.079,19.816h16.917   c0.036-0.113,5.986-5.133,7.434-7.734c1.637-3.014,3.05-7.732,3.05-12.082H5.363z"
                    ></path>
                  </g>
                </g>
                <g
                  id="SvgjsG1611"
                  featurekey="nameFeature-0"
                  transform="matrix(1.1391252279281616,0,0,1.1391252279281616,101.17740085060106,9.021263940100443)"
                >
                  <path d="M12.12 8.8 l1.96 0 l0 5.68 l-0.36 0.04 c-0.6 0.08 -1.52 0.08 -2.4 0.24 c-0.92 0.16 -1.72 0.32 -2.12 0.6 c-0.68 0.48 -1.08 1.4 -1.08 2.24 l0 7 l4.68 0 l0 5.64 l-4.68 0 l0 9.76 l-6.52 0 l0 -21.52 c0 -2.32 0.16 -6.16 2.52 -7.84 c2.08 -1.44 5.6 -1.84 8 -1.84 z M16.04 28.36 c0 6.2 5.24 11.56 11.96 11.56 c6.68 0 11.92 -5.36 11.92 -11.56 c0 -6.16 -5.24 -11.52 -11.92 -11.52 c-6.72 0 -11.96 5.36 -11.96 11.52 z M33.519999999999996 28.36 c0 3 -2.32 5.52 -5.52 5.52 s-5.56 -2.56 -5.56 -5.52 c0 -2.92 2.36 -5.48 5.56 -5.48 s5.52 2.52 5.52 5.48 z M43.120000000000005 28.36 c0 6.2 5.24 11.56 11.96 11.56 c6.68 0 11.92 -5.36 11.92 -11.56 c0 -6.16 -5.24 -11.52 -11.92 -11.52 c-6.72 0 -11.96 5.36 -11.96 11.52 z M60.6 28.36 c0 3 -2.32 5.52 -5.52 5.52 s-5.56 -2.56 -5.56 -5.52 c0 -2.92 2.36 -5.48 5.56 -5.48 s5.52 2.52 5.52 5.48 z M69.36 28.36 c0 6.28 5.32 11.68 12.08 11.68 c2 0 3.88 -0.4 5.6 -1.24 l0 1.2 l6.48 0 l0 -0.36 c0 -3.76 0.04 -7.52 0.04 -11.28 c0 -6.36 -0.04 -12.76 -0.04 -19.12 l0 -0.4 l-6.36 0 l0 9.2 c-1.76 -0.88 -3.68 -1.32 -5.72 -1.32 c-6.76 0 -12.08 5.4 -12.08 11.64 z M85.44 32.32 c-1.08 1.08 -2.4 1.64 -4 1.64 c-3.16 0 -5.6 -2.64 -5.6 -5.6 c0 -2.92 2.44 -5.56 5.6 -5.56 c1.6 0 2.92 0.6 4 1.64 c0.8 0.8 1.6 2.2 1.6 3.24 l0 1.4 c0 1.04 -0.8 2.48 -1.6 3.24 z M96.76 12.399999999999999 c0 1.88 1.52 3.56 3.64 3.56 c2.08 0 3.68 -1.68 3.68 -3.56 c0 -1.84 -1.6 -3.64 -3.68 -3.64 c-2.12 0 -3.64 1.8 -3.64 3.64 z M97.16000000000001 16.84 l0 23.16 l6.48 0 l0 -23.16 l-6.48 0 z M105.6 28.36 c0 -6.16 5.24 -11.52 11.96 -11.52 c6.68 0 11.92 5.36 11.92 11.52 c0 0.84 -0.08 1.64 -0.24 2.4 l-16.68 0.04 c0.88 1.8 2.72 3.08 5 3.08 c1.56 0 2.96 -0.64 3.92 -1.6 l7.28 0 c-1.64 4.36 -6 7.64 -11.2 7.64 c-6.72 0 -11.96 -5.2 -11.96 -11.4 l0 -0.16 z M112.76 25.6 l-0.2 0.56 l10.12 0 l-0.32 -0.56 c-0.96 -1.6 -2.68 -2.72 -4.8 -2.72 s-3.88 1.12 -4.8 2.72 z M143.20000000000002 8.8 l1.96 0 l0 5.68 l-0.36 0.04 c-0.6 0.08 -1.52 0.08 -2.4 0.24 c-0.92 0.16 -1.72 0.32 -2.12 0.6 c-0.68 0.48 -1.08 1.4 -1.08 2.24 l0 7 l4.68 0 l0 5.64 l-4.68 0 l0 9.76 l-6.52 0 l0 -21.52 c0 -2.32 0.16 -6.16 2.52 -7.84 c2.08 -1.44 5.6 -1.84 8 -1.84 z M148.36 16.84 l0 23.16 l6.36 0 l0.08 -12.08 c0.04 -2.96 2.44 -5.44 5.6 -5.44 l1.68 0 l0.04 -6.08 l-1.72 0 c-1.96 0 -3.88 0.4 -5.6 1.28 l0 -0.84 l-6.44 0 z M163.24 28.36 c0 -6.16 5.24 -11.52 11.96 -11.52 c6.68 0 11.92 5.36 11.92 11.52 c0 0.84 -0.08 1.64 -0.24 2.4 l-16.68 0.04 c0.88 1.8 2.72 3.08 5 3.08 c1.56 0 2.96 -0.64 3.92 -1.6 l7.28 0 c-1.64 4.36 -6 7.64 -11.2 7.64 c-6.72 0 -11.96 -5.2 -11.96 -11.4 l0 -0.16 z M170.4 25.6 l-0.2 0.56 l10.12 0 l-0.32 -0.56 c-0.96 -1.6 -2.68 -2.72 -4.8 -2.72 s-3.88 1.12 -4.8 2.72 z M190.36 17.04 c0 7.52 -0.04 15.04 -0.04 22.6 l0 0.36 l6.48 0 l0 -11.84 c0 -2.88 2.52 -5.4 5.6 -5.4 c2.96 0 5.28 2.28 5.6 5 c0.04 0.4 0 0.84 0 1.24 l0.04 2.92 l0 8 l6.48 0.08 l0 -12.04 c0 -2.92 -1.48 -5.8 -3.6 -7.84 c-2.32 -2.24 -5.16 -3.44 -8.52 -3.44 c-2 0 -3.92 0.44 -5.68 1.32 l0 -1.2 l-6.36 0 l0 0.24 z M217.72000000000003 34.519999999999996 l0 5.44 l19.84 0 l0 -6.28 l-10.04 0 l10 -11.6 l0 -5.24 l-19.44 0 l0 6.28 l9.64 0 z M240.76000000000002 41.12 c0 6.24 5.32 11.64 12.08 11.64 c6.92 0 12.12 -5.28 12.12 -11.64 l0 -24.32 l-6.48 0 l0 11.64 c0 2.92 -2.52 5.44 -5.64 5.44 c-3.08 0 -5 -2.24 -5.56 -5.04 l-0.04 -12.04 l-6.48 0 l0 11.88 c0 6.08 5.68 11.28 12.08 11.28 c2.04 0 3.96 -0.44 5.68 -1.32 l-0.04 2.48 c-0.08 3.08 -2.28 5.56 -5.64 5.56 c-3.16 0 -5.6 -2.64 -5.6 -5.56 l0 -0.36 l-6.48 0 l0 0.36 z"></path>
                </g>
              </svg>
            </Link>
            <h2 className="text-3xl font-bold leading-tight dark:text-white sm:text-4xl">
              Sign in to <span className="text-emerald-500">Celebration</span>
            </h2>
            <p className="mt-2 text-base dark:text-gray-100">
              Don't have an account?{" "}
              <Link
                to="/signup"
                title=""
                className="font-medium text-emerald-500 transition-all duration-200 hover:text-emerald-600 focus:text-emerald-600 hover:underline"
              >
                Create a free account
              </Link>
            </p>

            <form method="POST" onSubmit={handleSubmit} className="mt-8">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium dark:text-gray-200"
                  >
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-2.5 relative text-gray-400 focus-within:text-zinc-900 dark:focus-within:text-gray-100">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                      </svg>
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={credentials.email}
                      onChange={handleInputChange}
                      placeholder="Enter email to get started"
                      className="block w-full py-4 pl-10 pr-4 text-zinc-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-transparent focus:outline-none focus:border-emerald-500 focus:bg-zinc-50 dark:focus:bg-zinc-900 caret-emerald-600 dark:border-zinc-600"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor=""
                      className="text-base font-medium dark:text-gray-200"
                    >
                      {" "}
                      Password{" "}
                    </label>
                    <Link
                      to="#"
                      title=""
                      className="text-sm font-medium text-emerald-500 transition-all duration-200 hover:text-emerald-600 focus:text-emerald-600 hover:underline"
                    >
                      {" "}
                      Forgot password?{" "}
                    </Link>
                  </div>
                  <div className="mt-2.5 relative text-gray-400 focus-within:text-zinc-900 dark:focus-within:text-gray-100">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                        />
                      </svg>
                    </div>

                    <input
                      type="password"
                      name="password"
                      value={credentials.password}
                      onChange={handleInputChange}
                      placeholder="Enter your password"
                      className="block w-full py-4 pl-10 pr-4 text-zinc-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-transparent focus:outline-none focus:border-emerald-500 focus:bg-zinc-50 dark:focus:bg-zinc-900 caret-emerald-600 dark:border-zinc-600"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-emerald-500 focus:outline-none hover:opacity-80 focus:opacity-80"
                  >
                    Log in
                  </button>
                </div>
              </div>
            </form>

            <div className="mt-3 space-y-3">
              <h1 className="text-zinc-700 dark:text-zinc-400 text-center">
                or
              </h1>
              <Link
                to={"/signup"}
                className="dark:border-zinc-600 active:opacity-80 relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold dark:text-gray-100 transition-all duration-200 bg-transparent border-2 border-gray-200 rounded-md dark:hover:bg-zinc-900 dark:focus:bg-zinc-900 dark:hover:text-gray-200 dark:focus:text-white hover:bg-zinc-200  focus:outline-none"
              >
                <div className="absolute inset-y-0 left-0 p-4"></div>
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        progressStyle={{ backgroundColor: "#07bc0c" }}
      />
    </section>
  );
}
export default SignIn