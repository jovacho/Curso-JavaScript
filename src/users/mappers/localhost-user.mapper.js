import { User } from "../models/user";

export const localhostUserToModel = ( localhostUser ) => {

/**
 * 
 * @param {Like<User>} localhostUser 
 * @returns {User}
 */

    const {
        avatar,
        balance,
        first_name,
        gender,
        id,
        isActive,
        last_name,
    } = localhostUser;

    return new User({
        avatar,
        balance,
        firstName: first_name,
        gender,
        id,
        isActive,
        lastName: last_name,
    });

}
