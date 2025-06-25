import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Admin = () => {









const [name , setname] = useState();
const [prise, setprise] = useState();
const [img, setimg] = useState();
const [discription, setdiscription] = useState();


const handelAdmid = async () => {
    console.log(name,prise,img,discription)
    
   
if(name,prise,img,discription){

  let result = await fetch("http://localhost:5000/add-product",{
    method : 'post' ,
    body:JSON.stringify({name, prise, img, discription}),
    headers:{
        "Content-Type" : "application/json"
    }
        });
    result = await result.json();
    console.log(result)
    if(result){
        setname("")
        setprise("")
        setimg("")
        setdiscription("")
        alert("Data Add Successfully !")
    }
    } else{
      alert("please fill this details")
    }





    
}




  const phoneNumber = "7303909682"; 
  const message = "Hello! I want to chat with you.";
  const encodedMessage = encodeURIComponent(message);

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };



  

    



  return (
    <>


<div className=' flex h-screen items-center justify-center'>

   <div className="w-[400px]">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    </form>

    <h3 className="font-bold text-lg">Add<span className='text-pink-500'>Product</span></h3>

    <div className='mt-4 space-y-3'>
      <span>Name </span>
      <br/>
      <input type='text' placeholder='Enter your PhoneNo.' className='w-80 px-3 py-1 border outline-none rounded'
     value={name}
     onChange={(e)=>setname(e.target.value)}
     
      />
    </div>

    <div className='mt-4 space-y-3'>
      <span>Prise</span>
      <br/>
      <input type='text' placeholder='Enter your email' className='w-80 px-3 py-1 border outline-none rounded' 
      value={prise}
      onChange={(e)=>setprise(e.target.value)}
      />
    </div>

    <div className='mt-4 space-y-3'>
      <span>URL</span>
      <br/>
      <input type='text' placeholder='Enter your password' className='w-80 px-3 py-1 border outline-none rounded'
      value={img}
      onChange={(e)=>setimg(e.target.value)}
      />
    </div>
    <div className='mt-4 space-y-3'>
    <span>Discription</span>
    <textarea className='w-80 px-3 py-1 border outline-none rounded' placeholder="Massege"
    value={discription}
    onChange={(e)=>setdiscription(e.target.value)}
    ></textarea>

        </div>

    <div className='flex justify-around mt-4'>
      <button onClick={handelAdmid}  className='bg-pink-500 text-white px-6 py-1 hover:bg-pink-700 duration-200'>Add</button>
    
  
    </div>
   
  </div>
</div>


   </div>


<button
      onClick={handleClick}
      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
    >
      Chat on WhatsApp
    </button>




   </>
  )
}

export default Admin