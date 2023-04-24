function App() {
    const [quotes, setQuotes] = React.useState([]);
    const [randomQuote, setRandomQuote] = React.useState("");
    const [color, setColor] = React.useState("#fff");

    React.useEffect (() => {
        async function fetchData() {
            const response = await fetch("https://type.fit/api/quotes");
            const data = await response.json();

            setQuotes(data);
            let randIndex = Math.floor(Math.random() * data.length);
            setRandomQuote(data[randIndex]);
        }
        fetchData();
    }, []);

    const getNewCode = () => {
        const colors = [
            '#F0F8FF',
            '#00FFFF',
            '#A52A2A',
            '#8A2BE2',
            '#DC143C',
            '#D2691E',
            '#FF8C00'
        ]
        let randIndex = Math.floor(Math.random() * quotes.length);
        let randColorIndex = Math.floor(Math.random() * colors.length);
            setRandomQuote(quotes[randIndex]);
            setColor(colors[randColorIndex]);
    }

    return (
        <div style={{backgroundColor: color, minHeight: "100vh"}} >
            <div className="container pt-5" >
                <div className="jumbotron">
                    <div className="card">
                        <div className="card=header">Inspirational Quotes</div>
                        <div className="card-body">
                            {randomQuote ? (
                                <>
                                <h5 className="card-title">- {randomQuote.author || "No author"}</h5>
                                <p className="card-body">&quot;{randomQuote.text}&quot;</p>
                                </>
                            ) : (
                                <h2>Loading</h2>
                            )}
                            <div className="row">
                                <button onClick={getNewCode} className="btn btn-primary nl-3">New Quote</button>
                                <a href="" className="btn btn-warning">
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                                <a href="" className="btn btn-danger">
                                    <i className="fa-brands fa-tumblr"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('app'));
