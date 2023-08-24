
const initialState = {
    pokedex:[],
};

const pokeReducer = (state =initialState,action) =>{
    switch(action.type){
        case 'GET_POKE_SUCCESS':
        return{
            ...state,
            pokedex:action.payload,
        };
        default:
            return state;
    }
};

export default pokeReducer ;