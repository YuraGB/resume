import React from "react";
import { SectionHobbies } from './sectionHobbies';
import { SectionWork } from './SectionWork';
import { MainNavSection } from './MainNavSection';
import { SectionAbMe } from './SectionAbMe';
import PropTypes from 'prop-types';

export const MainBody = ({work, hobbies, aboutMe, dispatchWork, dispatchHobbies, dispatchAbMe, error}) => {

    function onClick (event) {
        event.preventDefault();

        if (!work.list && (event.target.getAttribute('data-block')==="#work")){
           return dispatchWork();
        }
        else if (!hobbies.list && (event.target.getAttribute('data-block')==="hobbies")){

           return dispatchHobbies();
        }
        else if (!!aboutMe.every && (event.target.getAttribute('data-block')==="plForFtr")){

            return dispatchAbMe();
        }
    }

   return (
        <article className="main">
            <MainNavSection onClick={onClick}/>
            <SectionHobbies hobbies={hobbies} err={error}/>
            <SectionAbMe aboutMe={aboutMe} err={error}/>
            <SectionWork work={work} err={error}/>
        </article>
   );
};

MainBody.propTypes = {
    work: PropTypes.array || PropTypes.object,
    hobbies: PropTypes.array,
    aboutMe: PropTypes.array,
    dispatchWork: PropTypes.func,
    dispatchHobbies: PropTypes.func,
    dispatchAbMe: PropTypes.func,
    error: PropTypes.array
};