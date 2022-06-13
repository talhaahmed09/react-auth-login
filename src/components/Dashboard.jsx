import './dashboard.css'

const Dashboard = () => {
  return (
    <div className='wrapper'>
       <nav className="navbar">
      <div className="container">
        <div className="logo">Dashboard</div>
        <ul className="nav">
          <li>
            Home
          </li>
          <li>
            About
          </li>
          <li>
            Contact
          </li>
          <li >
            <img src="../../public/images/user-solid.svg" />
          </li>
        </ul>
      </div>
    </nav>
    <section>
      <div> </div>
    </section>
    </div>
  )
}

export default Dashboard