import React from 'react'

const GenderCheckBox = ({onCheckBOxChange,selectedGender}) => {
  return (
    <div className='flex'>
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer ${selectedGender ==="male"?"selected":""}`}>
                <span className='label-text '>Male</span>
            
            <input type="checkBox"className='checkbox border-slate-900'checked={selectedGender==='male'} onChange={()=>onCheckBOxChange("male")} />
            
            </label>
        </div>
        <div>
        <label className={`label gap-2 cursor-pointer ${selectedGender==="female"?"selected":""}`}>
                     <span className='label-text '>Female</span>
            
           <input type="checkBox"className='checkbox border-slate-900'checked={selectedGender==='female'} onChange={()=>onCheckBOxChange("female")} />
           </label>
        </div>
      
    </div>
  )
}

export default GenderCheckBox
