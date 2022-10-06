

import service from '../api/instance'


export const getuser = (page) =>{
    const url = `/api/users?page=${page}`;
    return service.get(url)
}

export const creat = (item) =>{
    const url = "/api/users"
    return service.post(url, item)
}