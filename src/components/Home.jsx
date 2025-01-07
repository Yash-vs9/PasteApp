import React, { useEffect, useState } from 'react'
import { useHref, useSearchParams } from 'react-router-dom';
// import { content } from '../../tailwind.config';
import { useDispatch, useSelector } from 'react-redux';
import { addToPastes, removeFromPastes, resetAllPastes } from '../redux/pasteSlice';
import { updateToPastes } from '../redux/pasteSlice';


const Home = () => {
    const[title,setTitle]=useState('');
    const dispatch=useDispatch();
    const[value,setValue]=useState('');
    const[searchParams,setSearchParams]=useSearchParams();
    const pasteId=searchParams.get('pasteId');
    const pastes=useSelector((state)=>state.paste.pastes);
    const currentPaste = pasteId
    ? pastes.find((paste) => paste.id === pasteId)
    : null;

  // Update title and content if editing an existing paste
  useEffect(() => {
    if (currentPaste) {
      setTitle(currentPaste.title);
      setValue(currentPaste.content);
    }
  }, [currentPaste]);
  

    function addPaste(){
        const paste={
            
            title: title,
            content:value,
            id: pasteId || (Math.random().toString(36).substring(2))
            
        }
        
        if(pasteId){
            console.log(title);
            
            dispatch(updateToPastes(paste));
            
        }
        else{
            dispatch(addToPastes(paste));
            
        }
        setTitle('');
        setValue('');
        
        
        
        

    }
    function reset(){
        dispatch(resetAllPastes());
    }
    // function remove(){
    //     const paste={
    //         title: title,
    //         content:value,
    //         id: pasteId || (Math.random().toString(36).substring(2))
    //     }
    //     dispatch(removeFromPastes(paste));
    // }
  return (
    <div className='mt-2'>
      <input className='rounded-2xl pl-2' type="text" placeholder='Enter Title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
      <button onClick={addPaste}>{pasteId ? "Update Paste" : "Create Paste"}</button>
      <br />
      
      <textarea name="" id="" className='w-80 p-8 mt-7 h-70 rounded-2xl' value={value} onChange={(e)=>setValue(e.target.value)}></textarea>
        <br />
        <button onClick={reset}>Reset</button>
        {/* <button onClick={remove}>Remove</button> */}
    </div>
  )
}

export default Home
