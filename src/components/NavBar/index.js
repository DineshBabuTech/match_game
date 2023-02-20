import './index.css'

const NavBar = props => {
  const {score, timer} = props
  return (
    <li>
      <nav className="nav-cont">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
        />
        <div className="score-timer-cont">
          <p className="score">
            Score: <span className="timer">{score}</span>
          </p>
          <div className="timer-cont">
            <img
              className="timer-img"
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
            />
            <p className="timer">{timer} sec</p>
          </div>
        </div>
      </nav>
    </li>
  )
}

export default NavBar
