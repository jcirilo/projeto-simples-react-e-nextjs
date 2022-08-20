import Header from '../src/components/Header';
import Clock from '../src/components/Clock';
import Counter from '../src/components/Counter';

export default function App () {
    return (
        <>
            <Header />

            <main>
                <Counter />
                <Clock />
            </main>
        </>
    )
}