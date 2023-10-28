import './App.css';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import myGif from "./assets/face-savoring-food_1f60b.gif";
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './screens/Home';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import Setting from './screens/Setting';
import FoodCategory from './screens/FoodCategory';
import CartProvider from './components/ContextReducer';
import Cart from './screens/Cart';
import AboutUs from './screens/AboutUs';
import Checkout from './screens/Checkout';
import Banner from './example/banner.jsx';
import Error404 from './screens/Error404';
import { useEffect, useState } from 'react';

export function handleSuccessToast({ name }) {
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
        <img src={myGif} alt="emoji" height={"40px"} width={"40px"} />
        <p>Yummy! <span style={{ fontWeight: 600, fontSize: "16px" }}>{name}</span> Added to Cart</p>
        <br />
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
      toastClassName: 'max-w-[360px]',
    }
  );
}


function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const [theme, setTheme] = useState(
    JSON.parse(window.localStorage.getItem("themeMode"))
  );

  window.onload = () => {
    console.log('search positon'/* , search_item.scrollIntoView({ behavior: 'smooth' }) */);
  }

  function scrollToTop() {
    const scrollY = window.scrollY;
    let topButtonElement = document.querySelector('#top-button');
    // console.log("🚀 ~ file: App.js:29 ~ scrollToTop ~ topButtonElement:", topButtonElement)
    if ((scrollY > 400 - 1 && topButtonElement === null)) {
      const topButton = document.createElement('button');
      topButton.classList.add('bg-emerald-600', 'z-50', 'rounded-full', 'text-xl', 'w-10', 'h-10', 'fixed', 'bottom-8', 'right-8', 'shadow-xl', 'animate-pulse', 'animate-bounce',);
      topButton.onclick = () => {
        document.querySelector('#root').scrollIntoView({ behavior: 'smooth' });
      }
      topButton.id = 'top-button'
      topButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="height:30px;margin:auto;color:white" className=" m-auto dark:text-zinc-900 text-white ">
        <path fillRule="evenodd" d="M11.47 4.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 6.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5zm.53 7.59l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 12.31z" clipRule="evenodd" />
      </svg>
    `
      document.body.appendChild(topButton)
    }
    if (scrollY < 400 - 1 && topButtonElement !== null) {
      topButtonElement.remove()
    }
  }

  useEffect(() => {
    scrollToTop()
    window.addEventListener("scroll", scrollToTop);
    return () => {
      window.removeEventListener('scroll', scrollToTop)
    }
  }, [])

  return (
    <CartProvider>
      <div id="theme-container" className={`${theme ? "dark" : ""} h-[100vh] w-[100vw] relative  `}>
        <div className="dark:bg-black ">
          <Router>
            <Routes>
              <Route path='/' element={<Navigate to="/home" replace />} />
              <Route path='/settings' element={<Setting />} />
              <Route path='/food_category' element={<FoodCategory />} />
              <Route path={'/home'} element={<Home />} />
              <Route path={'/about_us'} element={<AboutUs />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/signin' element={<SignIn />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='/banner' element={<Banner />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </Router>
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
          progressStyle={{ backgroundColor: '#07bc0c' }}
        />

      </div>

    </CartProvider>

  );
}

export default App;
