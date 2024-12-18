import { createContext, useContext, useReducer, useRef } from "react"

import PropTypes from "prop-types";
PostProvider.propTypes = {
  children: PropTypes.any.isRequired, 
  };

  const initialState = {
    responsive:false,
    toggle:false
    }
const PostContext = createContext();
function PostProvider({children}) {
    function reducer(state, action){
        switch(action.type){
            case "responsive" : 
           return{
            ...state,
            responsive:action.payload
           }
            case "toggle" : 
           return{
            ...state,
            toggle:action.payload
           }
        }
    }
    const [{responsive, toggle}, dispatch] = useReducer(reducer, initialState)
    const section1 = useRef(null);
    const section2 = useRef(null);
    const section3 = useRef(null);
  return (
    <PostContext.Provider value={{
        responsive,
        toggle,
        dispatch,
        section1,
        section2,
        section3,
    }}>
{children}
    </PostContext.Provider>
  )
}

function useProvider(){
  const context = useContext(PostContext);
  if(context === undefined) throw new Error('PostContext was used outside the postProvider');
  return context
}

export  {PostProvider, useProvider}