import {configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtresSlice";



const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: filtersReducer
    }
});

export default store;