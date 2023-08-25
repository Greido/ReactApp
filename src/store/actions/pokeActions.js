import axios from "axios"

export const getPokes = () =>{

    return async (dispatch) =>{

        const pageSize = 100;
        let offset = 0;
        let allPoke = [];


        try{
            while(true){
                const pokeUrl = `https://pokeapi.co/api/v2/pokemon?limit=${pageSize}&offset=${offset}`
                const response = await axios.get(pokeUrl)
                const datos = response.data.results
                
                if (datos.length===0){
                    break;
                }

                allPoke = allPoke.concat(datos);
                offset += pageSize;
                
                
            } 
            const fullData = await Promise.all(
                allPoke.map(async(poke)=>{
                    const response = await axios.get(poke.url);
                    return response.data
                })
                )
            dispatch({
                type:'GET_POKE_SUCCESS',
                payload:fullData,
            });

        } catch (error) {
            console.log(error)
        }

    }

}

