import Link from 'next/link'
import './style.scss'

// Navigation links
const links = [
  { name: 'Explore', route: '/explore' },
  { name: 'Categories', route: '/categories' },
  { name: 'Submit', route: '/submit' }
]
const navLinks = (
  links.map(link => (
    <Link href={ link.route } key={ link.route }>
      <a className="nav-link">{ link.name }</a>
    </Link>
  ))
)

// Links to the right ( depend on whether user is logged in )
const accountLinks = (user) => {
  // If user is logged in return the account links
  if (Object.keys(user).length > 0) {
    return <div>user logged in</div>
  }

  // Else return log in and sign up links
  return (
    <React.Fragment>
      <Link href="/">
        <a className="nav-link">Log in</a>
      </Link>
      <Link href="/">
        <a className="nav-link nav-link--button">Sign up</a>
      </Link>
    </React.Fragment>
  )
}

const Nav = () => (
  <nav className="font-s">
    <Link href="/">
      <a className="nav-link nav-link--main">StoryCake</a>
    </Link>

    {/* All navigation links */}
    { navLinks }

    {/* Spacer between links */}
    <div style={{flexGrow: 1}}></div>
    
    {/* Pink graphic on the right */}
    <img className="nav-pink" src="/static/pink.svg" />

    {/* Account links ( depend on whether the user is logged in ) */}
    { accountLinks({}) }
  </nav>
)

export default Nav
