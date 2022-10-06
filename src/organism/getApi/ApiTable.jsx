import React from 'react'
import axios from "axios"
import { getuser } from '../../api/table';

export const ApiTable = async () => {
    try {
        // const {data}  = await getuser();
        // return data
        const data  = await getuser();
        return data.data
    } catch (error) {
        console.error(error);
    }
}

export const CountPage = async () => {
    try {
        const {data:{total_pages}}  = await getuser();
        console.log(total_pages);
        return total_pages
    } catch (error) {
        console.error(error);
    }
}

