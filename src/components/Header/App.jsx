import { toast, ToastContainer } from 'react-toastify';
import { FaCrown, FaInstagram, FaDiscord, FaGithub, FaGit } from 'react-icons/fa6';

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
            <a target='_blank' href="https://discord.com/channels/@me/1186786998292336701">
                <FaDiscord className='social__link'/>
            </a>

            <a target='_blank' href="https://github.com/krostdev/">
                <FaGithub className='social__link'/>
            </a>

            <a target='_blank' href="https://www.instagram.com/augustokauanp/">
                <FaInstagram className='social__link'/>
            </a>
        </div>
    </header>
  )
}

export default Header;