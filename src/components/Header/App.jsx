import { toast, ToastContainer } from 'react-toastify';
import { FaCrown, FaInstagram, FaDiscord, FaGithub } from 'react-icons/fa6';

import './App.css';

function Header() {
    const notify = () => toast("Você encontrou o Easter Egg 🎉🎉", {
        style: {
            color: "#000",
            marginBottom: "7px",
            fontSize: "18px"
        }
    })

  return (
    <header>
        <div className="title">
            <ToastContainer/>
            <span onClick={notify} className="name__easteregg"><FaCrown /></span>
            <span>Augusto Kauan</span>
        </div>

        <div className="routes">
            <span className='routes__item'>Projetos</span>
            <span className='routes__item'>Contato</span>
        </div>

        <div className="social">
            <FaDiscord className='social__link'/>
            <FaGithub className='social__link'/>
            <FaInstagram className='social__link'/>
        </div>
    </header>
  )
}

export default Header;