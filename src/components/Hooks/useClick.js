import { useState } from 'react';


export const useClick = (value = false) =>{
    const [clicked, setClicked] = useState(value);

    const openModal = () => setClicked(true)
    
    const closeModal = () => setClicked(false)

    return [clicked, openModal, closeModal];
}