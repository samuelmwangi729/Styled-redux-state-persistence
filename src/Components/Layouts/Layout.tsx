import Nav from '../Nav'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'

const Layout: React.FC = () => {
    return (
        <div>
            <Nav />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout
