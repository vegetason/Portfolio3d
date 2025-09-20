import { ToastContainer } from "react-toastify"

const ToastContainer = () => {
  return (
<ToastContainer 
  position="top-right"
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  className="!top-2 !right-2 sm:!top-4 sm:!right-4 lg:!top-6 lg:!right-6 !left-2 sm:!left-auto !max-w-[calc(100vw-1rem)] sm:!max-w-md"
  toastClassName="!text-sm sm:!text-base !p-3 sm:!p-4 !rounded-lg !max-w-full !break-words"
/>
  )
}

export default ToastContainer
