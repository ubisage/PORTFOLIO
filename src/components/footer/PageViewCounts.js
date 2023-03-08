import React, { useState, useEffect } from "react";

export const PageViewCounts = () => {

  const [users, setUser] = useState(null);


  useEffect(() => {
    (async () => {
      
      let response= await fetch("https://api.countapi.xyz/hit/ubiportfolio.com/69cdde4b-c367-48ff-8b13-f60346f2369c")
      if(response.status === 200){
        let count = await response.json();
        console.log(count)
        setUser(count.value)
      }
      
    })();
      return (count)=>{
        setUser(count)
      }
  },[])

 return (
    <div className="footer__page-view-count" >
      <i className="uil uil-eye"></i> {users} views.
    </div>
  );
};
