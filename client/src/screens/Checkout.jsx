import React, {  useState } from "react";
import easyinvoice from "easyinvoice";
import { Link, useNavigate } from "react-router-dom";
import icons8BillIcon from "../assets/bill-paid.png";
import {
  useDispatchContext,
  useStateContext,
} from "../components/ContextReducer";
import CartModal from "../modal/CartModal";
import Cart from "../screens/Cart";
import { toast } from "react-toastify";
function Checkout() {
  const navigate = useNavigate();
  // const [order,setOrder]=useState({email:'',phone:'',address:'',items:''})
  const data = useStateContext();
  const dispatch = useDispatchContext();
  const [subTotal, setSubTotal] = useState(0);
  let subtotal = 0;

  const [cartView, setCartView] = useState(false);
  const loadCart = () => {
    setCartView(!cartView);
  };
  useState(() => {
    if (data !== []) {
      data.map((item) => {
        subtotal = subtotal + item.total;
      });
    }
    setSubTotal(subtotal);
  });

  const makePayment = async (e) => {
    e.preventDefault();
    const order_form = document.getElementById("order-form");
    if (order_form.checkValidity()){
      const total = document.getElementById("total").innerText;
      const res = await fetch(
        "https://foodiefrenzy.vercel.app/api/order/order-create",
        {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ amount: total }),
        }
      );
      const { id, amount, currency } = await res.json();
      const options = {
        key: "rzp_test_A0kVgihb52ODEI",
        amount: amount.toString(),
        currency,
        name: "FoodieFrenzy",
        description: "Payment for services",
        image: "https://iili.io/HN6D7Wl.png",
        order_id: id,
        handler: async function (response) {
          const address = `${document.getElementById("fullname").value} | ${document.getElementById("contact_no").value} | ${document.getElementById("billing-address").value}`;
          const accountEmail= window.localStorage.getItem("accountEmail").toString()
          const res = await fetch(
            "https://foodiefrenzy.vercel.app/api/order/verify",
            {
              method: "post",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({
                razorpay: response,
                orderData: {
                  address: address,
                  itemsOrdered: data,
                  accountEmail: accountEmail,
                },
              }),
            }
          );
          const message = await res.json();
          if (message.success) {
            downloadPDF();
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
                     src={icons8BillIcon}
                     alt="emoji"
                     height={"40px"}
                     width={"40px"}
                   />
                   <p>
                     Check your{" "}
                     <span style={{fontWeight: 600, fontSize: "16px" }}>
                       DOWNLOADS FOLDER
                     </span>{" "}
                     to see the{" "}
                     <span style={{fontWeight: 600, fontSize: "16px" }}>
                       INVOICE
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
            await dispatch({
              type: "DROP",
            });
            navigate("/home");
          }
        },
        prefill: {
          name: "ex. Manish Mahto",
          email: "ex. manishmahto@gmail.com",
          contact: "9000090000",
        },
        notes: {
          address: "FoodieFrenzy Thane- west",
        },
        theme: {
          color: "#10b981",
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    }
    else{
      order_form.reportValidity();
    }
  };
  const date = Date.now();    
  
  function downloadPDF() {
    const invoiceData = getInvoiceData();
    const fileName = `invoice_${date}.pdf`;
    easyinvoice.createInvoice(invoiceData, function (result) {
      easyinvoice.download(fileName, result.pdf);
    });
  }
  function getInvoiceData() {
    const fullName=document.getElementById("fullname").value
    
    const contactNo=document.getElementById("contact_no").value
     const currentDate = new Date().toLocaleDateString();
     const invoiceNumber = `${Date.now()}`;
    return {
      // "customize": {
      //     "template": "SGVsbG8gd29ybGQh" // Must be base64 encoded html. This example contains 'Hello World!' in base64
      // },
      images: {
        logo: "https://iili.io/HOBR02n.md.png",
        background: "https://iili.io/HOBA4gn.md.png",
      },
      sender: {
        company: "Foodifrenzye",
        address: "Old Mumbai-Pune Road, Kalwa",
        zip: "400605",
        city: "Thane",
        country: "India",
      },
      client: {
        company: fullName,
        address: window.localStorage.getItem("accountEmail").toString(),
        city: contactNo,
        zip:'Maharashtra',
        country: "India",
      },
      information: {
        number: invoiceNumber,
        date: currentDate.toString(),
        "due-date":'----'
      },
      products: data.map((item) => ({
        quantity: item.qty.toString(),
        description: item.name,
        "tax-rate": 6,
        price: item.price.toString(),
      })),

      "bottom-notice": "Thankyou for ordering",
      settings: {
        currency: "INR",
      },
      
      translate: {
        invoice: "INVOICE",
        number: "Number",
        date: "Date",
        //"due-date": "Due Date",
        subtotal: "Subtotal",
        products: "Products",
        quantity: "Quantity",
        price: "Price",
        "product-total": "Total",
        total: "Total",
        vat: "GST",
      },
    };
  }
  return (
    <form id="order-form" className="font-poppins h-[100vh] overflow-scroll">
      <div className="flex flex-col items-center border-b dark:border-zinc-600 py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32 ">
        <Link
          to="#"
          className="text-2xl font-bold text-emerald-500 italic font-serif"
        >
          Food Checkout
        </Link>
        <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
          <div className="relative">
            <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
              <Link
                to="/home"
                className="flex items-center space-x-3 text-left sm:space-x-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 dark:text-zinc-400"
                >
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>

                <span className="font-semibold text-zinc-900 dark:text-zinc-400">
                  home
                </span>
              </Link>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>

              <Link
                onClick={loadCart}
                className="flex  items-center space-x-3 text-left sm:space-x-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 dark:text-zinc-400"
                >
                  <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                </svg>
                <span className="font-semibold text-zinc-900 dark:text-zinc-400">
                  cart
                </span>
              </Link>
              {cartView && (
                <CartModal>
                  <Cart onClose={loadCart} />
                </CartModal>
              )}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 dark:text-zinc-100"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM9 7.5A.75.75 0 009 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 009 12h3.622a2.251 2.251 0 01-2.122 1.5H9a.75.75 0 00-.53 1.28l3 3a.75.75 0 101.06-1.06L10.8 14.988A3.752 3.752 0 0014.175 12H15a.75.75 0 000-1.5h-.825A3.733 3.733 0 0013.5 9H15a.75.75 0 000-1.5H9z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                  Checkout
                </span>
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 sm:gap-5 ">
        <div>
          <div className="px-4 pt-8">
            <p className="text-xl font-medium text-zinc-900 dark:text-zinc-100">
              Payment Details
            </p>
            <p className="text-gray-400 text-sm sm:text-base mb-8">
              Complete your order by providing your payment details.
            </p>
            <div>
              <label
                htmlFor=""
                className="text-base font-medium dark:text-gray-200"
              >
                {" "}
                First & Last name{" "}
              </label>
              <div className="mt-2.5 relative text-gray-400 focus-within:text-zinc-900 dark:focus-within:text-gray-100">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>

                <input
                  type="text"
                  name="name"
                  id="fullname"
                  required
                  title="Enter your full name"
                  placeholder="Enter your full name"
                  className="w-full rounded-md border dark:border-zinc-600 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-emerald-500 focus:ring-emerald-500 dark:focus:border-emerald-500 dark:focus:ring-emerald-500 text-zinc-900  bg-transparent dark:text-zinc-100 caret-emerald-600  "
                />
              </div>
            </div>

            <div className="">
              <label
                htmlFor="email"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Email
              </label>
              <div className="relative">
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-md border dark:border-zinc-600 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-emerald-500 focus:ring-emerald-500 dark:focus:border-emerald-500 dark:focus:ring-emerald-500  bg-transparent dark:text-zinc-100"
                  placeholder="your.email@gmail.com"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </div>
              </div>

              <label
                htmlFor="contact_no"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Contact Number
              </label>
              <div className="relative">
                <input
                  type="tel"
                  required
                  id="contact_no"
                  name="contact_no"
                  pattern="(\+91)?[6789]\d{9}"
                  maxlength="13"
                  title="Please enter a 10-digit Indian phone number, starting with +91 ex. +919876543299"
                  className="w-full rounded-md border dark:border-zinc-600 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-emerald-500 focus:ring-emerald-500 dark:focus:border-emerald-500 dark:focus:ring-emerald-500  bg-transparent dark:text-zinc-100"
                  placeholder="+919876543299"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 text-zinc-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
              </div>

              <label
                htmlFor="u_address"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Address
              </label>
              <div className="flex flex-col sm:flex-row">
                <div className="relative flex-shrink-0 w-full">
                  <textarea
                    required
                    id="billing-address"
                    name="u_address"
                    className="w-full rounded-md border dark:border-zinc-600 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-emerald-500 focus:ring-emerald-500 dark:focus:border-emerald-500 dark:focus:ring-emerald-500  bg-transparent dark:text-zinc-100"
                    placeholder="Enter your complete current address"
                  ></textarea>
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-zinc-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <label
                htmlFor="card-no"
                className="mt-4 mb-2 block text-sm font-medium text-zinc-900 dark:text-zinc-100"
              >
                Payment Type
              </label>
              <div className="flex py-2 items-center justify-start">
                <div className="grid w-full grid-cols-1 gap-2">
                  <div className="relative">
                    <input
                      className="peer hidden "
                      id="radio_1"
                      type="radio"
                      name="radio"
                      value="card"
                    />
                    <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white  peer-checked:border-emerald-500 dark:bg-zinc-900"></span>
                    <label
                      className="flex cursor-pointer flex-col rounded-lg border dark:border-zinc-600 p-4 peer-checked:border-2 peer-checked:border-emerald-700"
                      htmlFor="radio_1"
                    >
                      <span className="text-xs font-semibold uppercase text-zinc-900 dark:text-zinc-100 ">
                        Card
                      </span>
                      <span className="mt-2 text-xl font-bold text-zinc-900 dark:text-zinc-100">
                        Credit / Debit
                      </span>
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      className="peer w-full h-full hidden absolute"
                      id="radio_2"
                      type="radio"
                      name="radio"
                      value="upi"
                    />
                    <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-emerald-500 dark:bg-zinc-900"></span>
                    <label
                      className="flex cursor-pointer flex-col rounded-lg border dark:border-zinc-600 p-4 peer-checked:border-2 peer-checked:border-emerald-700"
                      htmlFor="radio_2"
                    >
                      <span className="text-xs font-semibold uppercase text-zinc-900 dark:text-zinc-100">
                        RazorPay
                      </span>
                      <span className="mt-2 text-xl font-bold text-zinc-900 dark:text-zinc-100">
                        NetBanking/ UPI/ Wallets
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- ============= -->  */}

        <div className="mt-10 px-4 pt-8 lg:mt-0">
          <p className="text-xl font-medium text-zinc-900 dark:text-zinc-100">
            Order Summary
          </p>
          <p className="text-gray-400">
            Check your items. And select a suitable payment method.
          </p>
          {/* <-----/ Card -------> */}
          {data !== [] &&
            data.map((item) => {
              return (
                <li
                  key={item._id}
                  className="flex  items-center space-x-2 py-6 text-left flex-row sm:space-x-5 sm:space-y-0"
                >
                  <div className="shrink-0">
                    <img
                      className="h-24 w-24 max-w-full rounded-lg p-1  object-cover border dark:border-zinc-600"
                      src={item.img}
                      alt=""
                    />
                  </div>

                  <div className="relative   flex flex-1 flex-col justify-between">
                    <div className="sm:col-gap-5  sm:grid sm:grid-cols-2">
                      <div className="pr-8 sm:pr-5 flex flex-col">
                        <p className="text-base font-semibold dark:text-gray-100 text-zinc-900">
                          {item.name}
                        </p>
                        <p className="mx-0  mb-0 text-sm text-gray-400">
                          {item.size}
                        </p>
                        <p className="mx-0  mb-0 text-sm text-gray-400">
                          ₹ {item.price}/{item.size}
                        </p>
                      </div>
                      <div className=" flex mt-1 items-center justify-between sm:mt-0  sm:items-start">
                        <p className="shrink-0 w-fit text-base  font-semibold text-zinc-900 dark:text-gray-100  order-2 sm:ml-8 ">
                          Rs{item.total}
                        </p>
                        <div className="order-1">
                          <div className="mx-auto flex  items-stretch text-gray-900">
                            <div className="flex w-full items-center justify-center dark:text-zinc-100 text-xs uppercase transition">
                              Qty: {item.qty}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                      <div className="flex rounded text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-100"></div>
                    </div>
                  </div>
                </li>
              );
            })}
          {/* <----- Card /-------> */}

          {/* <!-- Total --> */}
          <div className="mt-6 border-t border-b dark:border-zinc-600 py-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                Subtotal
              </p>
              <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                ₹ <span id="subtotal">{subTotal}</span>
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                Tax
              </p>
              <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                ₹ <sapn id="tax">{(subTotal * 6) / 100}</sapn>
              </p>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Total
            </p>
            <p className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
              ₹ <span id="total">{subTotal + (subTotal * 6) / 100}</span>
            </p>
          </div>
          <button
            onClick={makePayment}
            className="mt-4 mb-8 w-full flex flex-row items-center justify-center gap-2 hover:gap-5 transition-all rounded-md bg-emerald-500 px-6 py-3 font-medium active:opacity-75 text-zinc-100 z-50 "
          >
            Place Order{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
}

export default Checkout;
