import { useState } from "react"


const useCheakoutData=()=>{

const [cheakoutData,setCheakoutData]=useState({'fPrice':0,'fShipping':0})

    return [cheakoutData,setCheakoutData]

}

export default useCheakoutData