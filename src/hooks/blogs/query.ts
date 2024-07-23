import { useQuery } from "react-query"


export  const useUserdetail=()=>{
    return useQuery({
        queryKey:["userdetails"],
        queryFn:()=>getUserQuery(payload),
        refetchOnWindowFocus:false
    })
       
    }
    // /useer (uri) in payload

    // pathparams  /user/:id/bookmark in pathparamas id use for / and pages, contant, tilte use for ?

    // query not use in  formik
