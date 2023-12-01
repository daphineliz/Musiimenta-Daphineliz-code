import { createContext, useReducer, useState } from "react";
import Alert from '@mui/material/Alert';

export const Cartcontext = createContext()
export const Context = (props) => {

    const [showAlert, setShowAlert] = useState(false); // State to manage the visibility of the alert

    const reducer = (state, action) => {
        switch (action.type) {
            case 'ADD':
                const tempstate = state.filter((item) => action.payload.id === item.id);

                if (tempstate.length > 0) {
                    setShowAlert(true);
                    return state
                } else {
                    setShowAlert(false);
                    return [...state, action.payload];
                }
            case 'INCREASE':

                const tempstate1 = state.map((menu) => {
                    if (menu.id === action.payload.id) {
                        return { ...menu, quantity: menu.quantity + 1 }
                    } else {
                        return menu
                    }
                }
                );
                return tempstate1;

            case 'DECREASE':

                const tempstate2 = state.map((menu) => {
                    if (menu.id === action.payload.id) {
                        return { ...menu, quantity: menu.quantity - 1 }
                    } else {
                        return menu
                    }
                }
                );
                return tempstate2;

            case 'REMOVE':
                const tempstate3 = state.filter(
                    (menu) => menu.id !== action.payload.id
                );




                return tempstate3;



            default: return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, [])

    const info = { state, dispatch }

    return (
        <Cartcontext.Provider value={info}>
            {showAlert && (
                <Alert severity="info" onClose={() => setShowAlert(false)}>
                    This item is already in the cart!
                </Alert>
            )}
            {props.children}
        </Cartcontext.Provider>
    );
};