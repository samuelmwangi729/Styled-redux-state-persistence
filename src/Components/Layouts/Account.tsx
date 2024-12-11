import { Outlet } from "react-router-dom"
import Nav from "../Nav"

const Account:React.FC = () => {
    return (
        <div>
            <Nav />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Account
