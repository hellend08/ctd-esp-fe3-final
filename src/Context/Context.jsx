import axios from 'axios';
import React, { createContext, useState, useContext, useEffect, useReducer } from 'react'

const CardStates = createContext();

const localSFavs = JSON.parse(localStorage.getItem("favs")) || []

const reducer = (state, action) => {
    switch (action.type) {
        case "GET_CARDS":
            return {...state, cards: action.payload};
        case "ADD_FAVS":
            return {...state, favs: [...state.favs, action.payload]};
        case "REMOVE_FAVS":
            return {...state, favs: state.favs.filter((fav) => fav.id !== action.payload.id),}
        case "TOGGLE_THEME": 
            return {...state, theme: state.theme === "light" ? "dark" : "light",};
    }
}

const inicialState = {
    favs: localSFavs,
    cards: [],
    theme: "light"
}

const Context = ({children}) => {
    const [state, dispatch] = useReducer(reducer, inicialState);

    const url = "https://jsonplaceholder.typicode.com/users";

    // const toggleTheme = () => {
    //     dispatch((prev) => (prev === "light" ? "dark" : "light"));
    // };

    useEffect(() => {
        document.body.className = state.theme;
    }, [state.theme]);

    useEffect(() => {
        localStorage.setItem("favs", JSON.stringify(state.favs));
    }, [state.favs]);

    useEffect(() => {
        axios(url).then((res) => {
            dispatch({type: "GET_CARDS", payload: res.data})
            // setCards(res.data);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <CardStates.Provider value={{ state, dispatch }}>
            {children}
        </CardStates.Provider>
    )
}
export default Context;

// eslint-disable-next-line react-refresh/only-export-components
export const useCardStates = () => useContext(CardStates);
