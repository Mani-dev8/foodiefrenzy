import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatchContext } from "../components/ContextReducer";
function Setting() {
  const [loggedIn,setLoggedIn]=useState(false)
  const dispatch = useDispatchContext();
  const [orderData, setOrderData] = useState([]);
  async function fetchData() {
    const res = await fetch("/order/order-data", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        accountEmail: window.localStorage.getItem("accountEmail"),
      }),
    });
    const data = await res.json();
    setOrderData(data);
  }
  React.useEffect(() => {
    fetchData();
    if (window.localStorage.getItem("authToken")!==null) {
      setLoggedIn(true);
    }
  }, []);
  const navigate = useNavigate();
  async function handleLogout() {
    await dispatch({
      type: "DROP",
    });
    localStorage.removeItem("authToken");
    navigate("/home");
  }
  return loggedIn ? (
    <div className=" font-poppins">
      <div className="mx-4 min-h-screen max-w-screen-xl sm:mx-8 xl:mx-auto pt-5">
        <div className="  ">
          <div className="flex flex-row items-center justify-between  border-b  dark:border-zinc-600 py-4 sm:flex-row  ">
            <h1 className="text-3xl md:text-4xl font-bold text-emerald-500 italic font-serif">
              Account
            </h1>
            <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
              <div className="relative">
                <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
                  <Link to="/home">
                    <div className="flex sm:hover:text-emerald-600  cursor-pointer text-gray-400  flex-row items-center justify-center">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                      </svg>
                      &nbsp;<span className="font-semibold mr-0.5">Home </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </Link>
                  <div className="flex flex-row text-emerald-500 items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    &nbsp;<span className="font-semibold">Settings</span>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 pt-3 sm:grid-cols-12">
          <div className="col-span-12 overflow-hidden rounded-xl  dark:text-white ">
            <div className="pt-4">
              <h1 className="py-2 text-2xl font-semibold ">Account details</h1>
            </div>
            <hr className="mt-4 mb-8 border-zinc-200 dark:border-zinc-600" />
            <p className="py-2 text-xl font-semibold">Full Name</p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <p className="text-gray-500">
                Your full name is{" "}
                <strong className="text-emerald-500">
                  {window.localStorage.getItem("userFullName")}
                </strong>
              </p>
            </div>
            <hr className="mt-4 mb-8 border-zinc-200 dark:border-zinc-600" />
            <p className="py-2 text-xl font-semibold">Email Address</p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <p className="text-gray-500">
                Your email address is{" "}
                <strong className="text-emerald-500">
                  {window.localStorage.getItem("accountEmail")}
                </strong>
              </p>
            </div>
            <button
              className="mt-14 rounded-lg bg-emerald-500  00 px-4 py-2.5 shadow-md shadow-emerald-700 hover:shadow-none hover:bg-emerald-600 text-white font-semibold"
              onClick={handleLogout}
            >
              Log Out
            </button>

            <hr className="mt-8 mb-8 border-zinc-200 dark:border-zinc-600" />

            <div className="amx-auto mb-10 overflow-hidden rounded-lg border border-zinc-600 ">
              <p className="mb-6  bg-emerald-500 text-white py-1 text-center text-lg font-medium">
                Order History
              </p>
              <table className="w-full">
                {orderData.length > 0 ? (
                  <>
                    <thead>
                      <tr className="border-b dark:border-zinc-600">
                        <th className="text-center font-semibold sm:text-base text-sm">
                          Date
                        </th>
                        <th className="text-center font-semibold sm:text-base text-sm">
                          Description
                        </th>
                        <th className="text-center font-semibold sm:text-base text-sm">
                          Amount
                        </th>
                        <th className="text-center font-semibold sm:text-base text-sm pl-2 pr-1">
                          Payment
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {orderData.map((item) => {
                        return (
                          <tr>
                            <td className="border-b dark:border-zinc-600 py-2 text-center sm:text-sm text-xs pl-1">
                              {item.orderDate.split("T")[0]}
                            </td>
                            <td className="border-b dark:border-zinc-600 py-2 divide-x-2 divide-gray-500 text-center sm:text-sm text-xs px-4">
                              {item.itemsOrdered.map((dish) => {
                                return <span>&nbsp;{dish.name + " "}</span>;
                              })}
                            </td>
                            <td className="border-b dark:border-zinc-600 py-2 text-center sm:text-sm text-xs">
                              ₹{" "}
                              {item.itemsOrdered.reduce(
                                (total, dish) =>
                                  Math.round(
                                    total + dish.total + dish.total * (6 / 100)
                                  ),
                                0
                              )}
                            </td>
                            <td className="border-b dark:border-zinc-600 py-2 text-center sm:text-sm text-xs pr-2">
                              <button className="sm:text-sm text-xs ">
                                Paid
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </>
                ) : (
                  <h1 className="text-sm text-center -mt-2 mb-2">
                    No Order Placed Till Now
                  </h1>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    navigate("/home")
  );
}

export default Setting;
