import { FaInstagram, FaDiscord } from 'react-icons/fa6';
import { IoMailOutline } from "react-icons/io5";

import { MessageBuilder, Webhook } from 'discord-webhook-node';
import { useState, useEffect } from 'react';

import { toast, ToastContainer } from 'react-toastify';

import './App.css';

function Contato() {

    const notify = () => toast("Mensagem enviada com sucesso", {
        type: "success"
    })

    const error = () => toast("Todos os campos devem estar preenchidos!", {
        type: "error"
    })

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [assunto, setAssunto] = useState('');
    const [msg, setMsg] = useState('');

    const sendWebhook = () => {
        const hook = new Webhook("https://discord.com/api/webhooks/1405220318578086018/jetW-fpKfDcTSGxI7y6UrmJVpkgxNdC7kY73madZf7cIA3WrI8qk-gl1SXCKWe7U7VWP")
        hook.setUsername('KroST | Formulário Recebido')

        if (!nome) return error();
        if (!assunto) return error();
        if (!email) return error();
        if (!msg) return error();

        const embed = new MessageBuilder()
            .setTitle(`Nome: ${nome}`)
            .addField('Email:', `${email}`, true)
            .addField('Assunto:', `${assunto}`, true)
            .addField(`Mensagem:`, `${msg}`)
            .setTimestamp();

        hook.send(embed).then(() => {
            setNome("")
            setAssunto("")
            setEmail("")
            setMsg("")

            notify()
        })
    }

    return (
        <section className="contact__section">
            <ToastContainer />
            <h1 className="contact__title">
                Contato
            </h1>

            <div className="contact__card">
                <div className="contact_left">
                    <span className="contact_subtitle">
                        Formulário de contato
                    </span>

                    <span className="contact_info">
                        Ao enviar este formulário, você será respondido em até 24 horas, caso queira formas de entrar em contato mais rápido, utilize redes sociais como <a href="">instagram</a>, e outros localizados nos icones abaixo.
                    </span>

                    <div className="contact_links">
                        <a target='_blank' href="https://discord.com/channels/@me/1186786998292336701">
                            <FaDiscord className='social__link' style={{ fontSize: 37 }} />
                        </a>

                        <a target='_blank' href="mailto:augustokauanp@gmail.com">
                            <IoMailOutline className='social__link' style={{ fontSize: 36 }} />
                        </a>

                        <a target='_blank' href="https://www.instagram.com/augustokauanp/">
                            <FaInstagram className='social__link' style={{ fontSize: 36 }} />
                        </a>
                    </div>

                </div>

                <div className="contact_right">
                    <div className="contact_form" action="/" method="post">

                        <div className="row side-by-side">
                            <div className="input_group">
                                <label htmlFor="nome">Nome</label>
                                <input onChange={(e) => { setNome(e.target.value) }} value={nome} className="contact_input" type="text" name="nome" id="nome" placeholder="Seu nome..." />
                            </div>

                            <div className="input_group">
                                <label htmlFor="email">E-mail</label>
                                <input onChange={(e) => { setEmail(e.target.value) }} value={email} className="contact_input" type="text" name="email" id="email" placeholder="exemplo@dominio.com" />
                            </div>
                        </div>

                        <div className="input_group">
                            <label htmlFor="assunto">Assunto</label>
                            <input onChange={(e) => { setAssunto(e.target.value) }} value={assunto} className="contact_input" type="text" name="assunto" id="assunto" placeholder="Do que se trata a mensagem?" />
                        </div>

                        <div className="input_group">
                            <label htmlFor="mensagem">Mensagem</label>
                            <textarea onChange={(e) => { setMsg(e.target.value) }} value={msg} className="contact_input contact_textarea" name="mensagem" id="mensagem" placeholder="O você tem em mente?" />
                        </div>

                        <button className='input_submit' onClick={sendWebhook}>Enviar Formulário</button>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contato;