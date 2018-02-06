import React from "react";
import PropTypes from 'prop-types';


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
                <a href='mailto:vavelon5@mail.ru' className="mail" rel="noopener noreferrer"></a>
                <a href='https://github.com/YuraGB' target='_blank' className="git" rel="noopener noreferrer"></a>
                <a href='https://www.facebook.com/yura.gurianov' target='_blank' className="fb" rel="noopener noreferrer"></a>
                <a href='https://vk.com/gorr1985' target='_blank' className="vk" rel="noopener noreferrer"></a>
        </nav>
    </article>
);
};

Header.propTypes = {
	photo: PropTypes.array
};