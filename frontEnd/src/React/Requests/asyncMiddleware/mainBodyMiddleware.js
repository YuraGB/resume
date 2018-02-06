
import { ActionCrPhoto } from '../../Actions/ActionCrHdrPhoto';
import { ActionCrWork } from '../../Actions/ActionCrWork';
import { ActionCrHobbies } from '../../Actions/ActionCrHobbies';
import { ActionCrAboutMe } from '../../Actions/ActionCrAbMe';
import { ActionCrError } from "../../Actions/ActionCrError";


export const mainBodyMiddleware = () => next => action => {
try {
    switch (action.type) {
        case "WORK": {
            fetch("/work")
                .then(response => response.json())
                .then(json => next(ActionCrWork(json.work)))
                .catch(() => next(ActionCrError()));
            break;
        }
        case "HOBBIES": {
            fetch("/hobbies")
                .then(response => response.json())
                .then(json => next(ActionCrHobbies(json.hobbies)))
                .catch(() => next(ActionCrError()));
            break;
        }
        case "PHOTO": {
            fetch("/photo")
                .then(response => response.json())
                .then(json => next(ActionCrPhoto(json)))
                .catch(() => next(ActionCrError()));
            break;
        }
        case "ABOUT_ME": {
            fetch("/aboutMe")
                .then(response => response.json())
                .then(json => next(ActionCrAboutMe(json.AboutMe)))
                .catch(() => next(ActionCrError()));
            break;
        }

        default: {
            return next(action);
        }
    }
} catch (e) {
    throw e;
}
};