import React from "react";
import { SectionHobbies } from './sectionHobbies';
import { SectionWork } from './SectionWork';
import { MainNavSection } from './MainNavSection';
import { SectionAbMe } from './SectionAbMe';

export const MainBody = ({work, hobbies, aboutMe, dispatchWork, dispatchHobbies, dispatchAbMe}) => {
    function onClick (event) {
        event.preventDefault();
        console.log(!!work.list, !!hobbies.list, !!aboutMe.every);

        if (!work.list && (event.target.getAttribute('data-block')==="#work")){
           return dispatchWork();
        }
        else if (!hobbies.list && (event.target.getAttribute('data-block')==="hobbies")){
            console.log("HEREEE");
           return dispatchHobbies();
        }
        else if (!!aboutMe.every && (event.target.getAttribute('data-block')==="plForFtr")){
            console.log( "plForFtr" );
            return dispatchAbMe();
        }
    }

   return (
        <article className='main'>
            <MainNavSection onClick={onClick}/>
            <SectionHobbies hobbies={hobbies}/>
            <SectionAbMe aboutMe={aboutMe}/>
            <SectionWork work={work}/>
        </article>
   );
};