import axios from "axios"

export const getPokes = () =>{

    return async (dispatch) =>{
        const pokeUrl = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'

        try{
            const response = await axios.get(pokeUrl)
            const datos = response.data.results
        
            dispatch({
                type:'GET_POKE_SUCCESS',
                payload:datos,
            });

        } catch (error) {
            console.log(error)
        }

    }

}

