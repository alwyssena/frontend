import './h.css'
const Header = () => (
  <nav className="nav-header" style={{backgroundColor:"purple"}}>
    <div className="nav-content ">
      <p className="text-3xl">Vedaz</p>
    
      <ul className="nav-menu flex flex-row  justify-end space-x-20 items-center flex-wrap n">
        <li>
          Home
        </li>
        <li>
          Astologers
        </li>
        <li>
          Horoscope
        </li>
        <li className="underline n">puja</li>
        <li>
            kundi
        </li>
        <li>love calculator</li>
        <li>compatibility</li>
      </ul>
    </div>
  </nav>
)

export default Header