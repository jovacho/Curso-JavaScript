import modalHtml from './render-modal.html?raw';
import './render-modal.css';
import { User } from '../../models/user';
import { getUsersById } from '../../use-cases/get-user-by-id';

let modal, form;
let loadedUser;

/**
 * 
 * @param {String|Number} id 
 */
export const showModal = async( id ) => {
    modal?.classList.remove('hide-modal');

    if ( !id ) return;
    const user = await getUsersById( id );

}

export const hideModal = () => {
    modal?.classList.add('hide-modal');
    form?.reset();
}

/**
 * 
 * @param {User} user 
 */
const setFormValues = ( user ) => {

}


/**
 * 
 * @param {HTMLDivElement} element 
 * @param {(userlike)=> Promise<void> } callback
 */
export const RenderModal = ( element, callback ) => {

    if ( modal ) return;

    modal = document.createElement('div');
    modal.innerHTML = modalHtml;
    modal.className = 'modal-container hide-modal';
    form = modal.querySelector('form');

    modal.addEventListener('click', (event) => {
        if ( event.target.className === 'modal-container' ) {
            hideModal();
        }
});

    form.addEventListener('submit', async(event) => {
        event.preventDefault();

        const formData = new FormData( form );
        const userLike = {};

        for ( const [key, value] of formData) {
            if ( key === 'balance' ){
                userLike[key] = +value;
                continue;
            }

            if ( key === 'isActive' ) {
                userLike[key] = (value === 'on') ? true : false;
                continue;
            }
            
            userLike[key] = value;

        }
        
        // console.log(userLike);
        await callback( userLike );

        hideModal();
        
        
    });


    element.append( modal );



}