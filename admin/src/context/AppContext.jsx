import { createContext, useState } from "react";


export const AppContext = createContext()

const AppContextProvider = (props)=>{

    const currencySymbol = '₹'
    const [loading, setLoading] = useState(false);
    const calculateAge = (dob) =>{
        const today = new Date()
        const birthDate = new Date(dob)

        let age = today.getFullYear() - birthDate.getFullYear()
        return age
    }

    const months = [' ','Jan', 'Feb', 'Mar','Apr', 'May', 'Jun', 'Jul','Aug','Sep', 'Oct','Nov','Dec']

    const slotDataFormate = (slotDate)=>{
      const dateArray = slotDate.split('_')
      return dateArray[0]+" " + months[Number(dateArray[1])] + " "+dateArray[2]
    }
    
    const value = {
        calculateAge,
        slotDataFormate,
        currencySymbol,
        loading,setLoading
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider