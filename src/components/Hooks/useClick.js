import { useState } from 'react';


export const useClick = (value = false) =>{
    const [active, setActive] = useState(value);

    function clicked(){
        setActive(!active)
    }

    return [active, clicked];
}
