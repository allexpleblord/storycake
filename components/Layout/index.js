import './style.scss'
import Nav from '../Nav'

const Layout = props => (
  <div className="page">
    {/* The Navigation */}
    <Nav />

    {/* Content in here */}
    <div>
      { props.children }
    </div>
  </div>
)

export default Layout
