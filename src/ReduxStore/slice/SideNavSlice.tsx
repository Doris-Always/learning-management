import {createSlice, PayloadAction } from  "@reduxjs/toolkit"

// interface ButtonDisplay {
//   name: string;
//   icon: string;
// }
interface SideNav {
  buttonDisplay: string;
  // selectedItem: string | null;
}

const initialState : SideNav ={
  buttonDisplay: "cohorts",
  // selectedItem: null,
  
  
}



const sideNavSlice = createSlice({
  name: "sideNav",
  initialState,
  reducers:{
    setButtonDisplay:(state, action : PayloadAction<string>) =>{
      state.buttonDisplay = action.payload;

     
    }
    // setSelectedItem:(state,action: PayloadAction<string | null>)=>{
    //   state.selectedItem = action.payload;
    // }
  }
})

export const {setButtonDisplay} = sideNavSlice.actions

export default sideNavSlice.reducer
