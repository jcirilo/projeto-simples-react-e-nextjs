function Header(props) {
    return (
        <header style={{
            borderBottom: 'solid 1px gray',
            margin: 0,
            width: '100%',
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                width: 'min(100%, 600px)',
                marginInline: 'auto',
            }}>
                <h1> Next.js App</h1>
                <small style={{marginLeft: '.4rem'}}> by <a style={{textDecoration: 'none', color: 'black'}} href="https://github.com/jcirilo/projeto-simples-react-e-nextjs" target="_blank">github.com/jcirilo</a></small>
            </div>
        </header>
    )
}

export default Header;