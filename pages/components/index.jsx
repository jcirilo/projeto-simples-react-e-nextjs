import { useEffect, useState } from "react";
import Header from "../../src/components/Header";

export default function Components() {
    
    const [componentName, setComponentName] = useState('');
    
    function sugestAComponentName(){
        const componentsName = ["clock","counter","range"]
        return componentsName[(Math.floor((Math.random() * (componentsName.length - 0))))];
    }
    
    useEffect(() => {
        setComponentName(sugestAComponentName());
    }, []);

    return (
        <div style={{
            fontFamily: 'Roboto, sans-serif',
        }}>
            <Header />
            <div style={{
                width: 'min(100% - 10%, 600px)',
                marginInline: 'auto',
            }}>
                <p>
                    Try to add "/{componentName}" on URL
                </p>
            </div>
        </div>
    )
}