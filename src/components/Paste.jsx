import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
// import { showPastes } from '../redux/pasteSlice';
const Paste = () => {
  // const dispatch=useDispatch();
  // function view() {
  //   dispatch(showPastes());
  // }
 
  const[searchParams,setSearchParams]=useSearchParams();
  const [searchTerm, setSearchTerm] = useState(""); 
  const pastes=useSelector((state)=>state.paste.pastes);
  const filterData=pastes.filter((paste)=>paste.title.toLowerCase().includes(searchTerm.toLowerCase()));
  return (
    <div>
      <div className='mt-6 text-3xl font-black '>All Pastes</div>
      <div>
        <div className=''><input className='rounded-xl h-10 mt-5'type="text" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} /></div>
        <br />
        <div>
        {
          filterData.map((paste)=>
            <div key={paste.id} className=' text-3xl font-bold border-s-violet-600border-solid border-2 border-sky-800  rounded-xl w-96 text-center  truncate m-7 p-4'>
              {paste.title}
              <div className='text-xs mt-5 truncate'>
                {paste.content}
              </div>
              <button  className='w-20 h-10 text-xs m-0 mt-4 p-0'><a href={`http://localhost:5173/?pasteId=${paste?.id}`}>View</a></button>
            </div>
          )
        }
        </div>
        
        
        
          
        
      </div>
    </div>
  )
}

export default Paste
