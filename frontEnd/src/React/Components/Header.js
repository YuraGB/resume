import React from "react";

export const Header = ({photo}) => {

        return(
    <article>
        <section className="foto">

        </section>
        <section className="header">
                <h1>{photo.header}</h1>
                <p> Target : <em>{photo.target}</em>
                        <br/>
                        <i>{photo.birthday}</i>
                </p>

                <address>Adress: {photo.Adress} <br/>
                         Phone: {photo.phone}</address>
        </section>
        <nav className="head_nav">
                <a href='mailto:vavelon5@mail.ru' className="mail"></a>
                <a href='https://github.com/YuraGB' target='_blank' className="git"></a>
                <a href='https://www.facebook.com/yura.gurianov' target='_blank' className="fb"></a>
                <a href='https://vk.com/gorr1985' target='_blank' className="vk"></a>
        </nav>
    </article>
);};