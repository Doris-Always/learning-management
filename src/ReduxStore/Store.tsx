import { configureStore } from "@reduxjs/toolkit";
import createCohortReducer from '@/ReduxStore/slice/CreateCohortFormSlice'
import { setupListeners } from "@reduxjs/toolkit/query";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import SideNavSlice from "./slice/SideNavSlice";


export const store = configureStore({

    reducer: {
        sideNavButton: SideNavSlice,
        createCohortReducer, 
    },
    
})
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>
export type appDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector  