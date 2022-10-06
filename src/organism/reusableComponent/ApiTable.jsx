import { useEffect } from "react";
import { getuser } from '../../api/table';



export const ApiTable = async () => {
    useEffect(() => {
        const getusers = async () =>{
            try {
        
                const {data}  = await getuser();
                // console.log(data);
                return (data)
            
            } catch (error) {
                console.error(error);
            }
        }
        getusers()
    
}, []);
}
