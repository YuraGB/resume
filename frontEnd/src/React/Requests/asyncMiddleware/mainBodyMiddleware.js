import React from 'react';
import { ActionCrPhoto } from '../../Actions/ActionCrHdrPhoto';
import { ActionCrWork } from '../../Actions/ActionCrWork';
import { ActionCrHobbies } from '../../Actions/ActionCrHobbies';
import { ActionCrAboutMe } from '../../Actions/ActionCrAbMe';


export const mainBodyMiddleware = store => next => action => {

    switch (action.type) {
        case "WORK": {
            fetch("/work")
                .then(response => response.json())
                .then(json => next(ActionCrWork(json.work)));
            break;
        }
        case "HOBBIES": {
            fetch("/hobbies")
                .then(response => response.json())
                .then(json =>  next(ActionCrHobbies(json.hobbies)));
            break;
        }
        case "PHOTO": {
            fetch("/photo")
                .then(response => response.json())
                .then(json => next(ActionCrPhoto(json)));
            break;
        }
        case "ABOUT_ME": {
            fetch("/aboutMe")
                .then(response => response.json())
                .then(json => next(ActionCrAboutMe(json)));
            break;
        }

        default: {
            return  next(action);
        }
    }
};