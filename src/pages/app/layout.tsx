import { Children } from "react"
import Sidebar from "./components/sidebar";

const AppLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="grid grid-cols-[auto_1fr] max-w-screen h-[100vh]">
      <div><Sidebar/></div>
        {children}
    </div>


  )
}

export default AppLayout;