import {createSlice, PayloadAction } from  "@reduxjs/toolkit"

interface SideNav {
  buttonDisplay: string;
}

const initialState : SideNav ={
  buttonDisplay: "",
}

const sideNavSlice = createSlice({
  name: "sideNav",
  initialState,
  reducers:{
    setButtonDisplay:(state, action : PayloadAction<string>) =>{
      state.buttonDisplay = action.payload;
    }
  }
})

export const {setButtonDisplay} = sideNavSlice.actions

export default sideNavSlice.reducer
