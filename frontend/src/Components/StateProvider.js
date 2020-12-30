import React, {createContext, useContext, useReducer} from 'react';

// The data layer
export const StateContext = createContext();

// Wrap componets and build a provider
export const StateProvider = ({reducer, initialState, children}) =>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

// How to use it in a component
export const useStateValue = () => useContext(StateContext);
