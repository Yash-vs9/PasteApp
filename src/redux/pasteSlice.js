import { createSlice } from '@reduxjs/toolkit'
import { toast } from "react-hot-toast"

const initialState = {
  pastes: localStorage.getItem('pastes')
  ? JSON.parse(localStorage.getItem('pastes'))
  : []
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state,action) => {
        const paste=action.payload;
        state.pastes.push(paste);
        localStorage.setItem('pastes',JSON.stringify(state.pastes));
        toast.success("Note Added Successfully")

    },
    updateToPastes: (state, action) => {
        const paste=action.payload;
        const index=state.pastes.findIndex((item)=> item.id===paste.id);
        if(index>=0){
            state.pastes[index]=paste;
            localStorage.setItem('pastes',JSON.stringify(state.pastes));
            toast.success("Note Updated Successfully")
        }
      },
    resetAllPastes: (state, action) => {
        state.pastes=[];
        localStorage.setItem('pastes',JSON.stringify(state.pastes));
        toast.success("Reset Successfully")

     
    },
    removeFromPastes: (state, action) => {
        const paste=action.payload;
        const index=state.pastes.findIndex((item)=>item.id===paste.id);
        state.pastes.splice(index,1);
        localStorage.setItem('pastes',JSON.stringify(state.pastes));
     
    },
    // showPastes:(state)=>{
    //   const paste=JSON.parse(localStorage.getItem('pastes'));
    //   for(let i=0;true;i++){
    //   const title=(paste[i].title);
    //   document.querySelector('.doc').innerHTML+=title+' , ';
    //   }

    // }
  },
})

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPastes, resetAllPastes ,removeFromPastes,} = pasteSlice.actions

export default pasteSlice.reducer
