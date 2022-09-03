import Header from '../src/components/Header';
import Clock from '../src/components/Clock';
import Counter from '../src/components/Counter';
import Range from '../src/components/Range';

export default function App() {
    return (
        <div style={{
            fontFamily: 'Roboto, sans-serif',
        }}>
            <Header />

            <div style={{
                width: 'min(100% - 10%, 600px)',
                marginInline: 'auto',
            }}>
                    <main>
                        <p>
                            Try to add "/components" on URL!
                        </p>
                        <hr />
                        <Range />
                        <br/>
                        <Counter />
                        <br/>
                        <Clock />
                        <br/>
                    </main>
            </div>
        </div>
    )
}