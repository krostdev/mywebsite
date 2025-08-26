import { MdKeyboardDoubleArrowDown } from "react-icons/md";

import "./App.css";

function Description() {
    return (
        <section className="description_section">
            <div className="description__div">
                <h1 className="description__name">Augusto Kauan...</h1>
                <span className="description__desc">
                    Eu sou o <span style={{ color: "#ff775fff", fontWeight: "bold" }}>Augusto</span>, um jovem de 16 anos, trilhando seu caminho na carreira web...
                </span>

                <div className="description__buttons">
                    <a className="desc__button btn_project" href="/" target="_blank" rel="noopener noreferrer">Ver projetos</a>
                    <a className="desc__button btn_contact" href="/" target="_blank" rel="noopener noreferrer">Entrar em contato</a>
                </div>

                <MdKeyboardDoubleArrowDown className="description__arrowIcon" onClick={() => { window.location.href = "/" }}/>
            </div>
        </section>
    );
}

export default Description;
