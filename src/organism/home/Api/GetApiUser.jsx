import { getuser } from "../../../api/table";


export const ApiTable = async () => {
    try {
        const data  = await getuser();
        return data.data
    } catch (error) {
        console.error(error);
    }
}