'use client'

import Link from 'next/link';
import { useEffect , useState } from 'react';
import { handleLogout } from "@/lib/action";
import { Button } from "@/components/ui/button"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

// const loadDataOnlyOnce = () => {
//   console.log("loadDataOnlyOnce");
//       fetch('/api/session')
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data);
//         // console.log("data", data)
//       })

//   return 'aaaa' ;
// };



export const AuthButton = () => {
  // const [data, setData] = useState(null);
  // // let data:any = 'aaaa';

  // useEffect(() => {
   
  //   fetch('/api/session')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       // console.log("data", data)
  //     })
  // }, [])

//   useEffect(() => {
//     let a:any = loadDataOnlyOnce(); // this will fire only on first render
//     setData(a);
// }, [loadDataOnlyOnce]);

const router = useRouter();
const { data } = useSession();

const user = data?.user;


  if(!user){

    return (
      <>
          <Link
            href={"/login"}
          >
            <Button variant="secondary">Log In</Button> 
          </Link>
      </>

    )
  }else{
    return (
      <>
      {user?.name}
          <Link
            href={"/dataupload"}
          >
            <Button variant="secondary">Data Mart</Button> 
          </Link>

      <form action={handleLogout}>
          <Button variant="secondary">Logout</Button>
          
      </form>
      </>
    )
  }

   


}

