import { loadUsersByPage } from '../use-cases/load-users-by-page'

const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage = async() => {
    await loadUsersByPage ( state.currentPage + 1 );

}

const loadPreviousPage = async() => {
    throw new Error('No implementado');
    
}

const onUserChanged = () => {
    throw new Error('No implementado');

}

const realodPage = async() => {
    throw new Error('No implementado');

}

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    realodPage,

    getUsers: () => [...state.users],
    getCurrentPage: () => state.currentPage,
}