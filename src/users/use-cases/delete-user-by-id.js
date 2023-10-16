import { User } from "../models/user";

/**
 * 
 * @param {String|Number} id 
 * @returns {Promise<User>}
 */
export const deleteUserById = async (id) => {

    const url = `${import.meta.env.VITE_BASE_URL}/users/${id}`

    const deleteResult = await fetch(url, { method: 'DELETE'});

    return true;
}