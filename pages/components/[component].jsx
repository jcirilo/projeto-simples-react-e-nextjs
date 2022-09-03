import { useRouter } from "next/router";
import Clock from "../../src/components/Clock";
import Counter from "../../src/components/Counter";
import Header from "../../src/components/Header";
import Range from "../../src/components/Range";

export default function MyDinamic() {
    const route = useRouter();
    const { component } = route.query;
    
    const result = (() => {
        switch (component) {
            case 'counter':
                return <Counter />
            case 'clock':
                return <Clock />
            case 'range':
                return <Range />
            default:
                return <h1>Sorry! we do not have "{component}" yet</h1>
            }
    })();
    return (
        <div style={{
            fontFamily: 'Roboto, sans-serif',
            }}>
            <Header />
            <br />
            <div style={{
                width: 'min(100% - 10%, 600px)',
                marginInline: 'auto',
                }}>
                {result}
            </div>
        </div>
    )
}