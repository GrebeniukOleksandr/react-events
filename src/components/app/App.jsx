import { useState } from 'react'
const CustomButton = ( {message, children}) => {
    return (
        <button onClick={() => alert(message)}>
            {children}
        </button>
    )
}

export default function App() {

    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
        setClicks(clicks + 1);
    }
    return (
        <>
            <button onClick={handleClick}> Change me {clicks}</button>
            <CustomButton message="Playing music!">
                Play some music
            </CustomButton>
            <CustomButton message="Uploading your data!">
                Uploud data
            </CustomButton>
        </>
) };
