import useSWR from 'swr';
import './style.css';

const fetcher = (...args) => fetch(...args).then((response) => response.json())

const Latest = () => {

const { data } = useSWR(
    "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15&pageSize=3",
    fetcher
);

    return (
        <div className="container-latest">
            <h1>Latest Deals <span role="img" aria-label="fire emoji"></span></h1>
            <div className="latest-container">
                {data && data.map((game, key) => {
                    return (
                    <div key={key} className="latest-card">
                        {game.title}
                        <img src={game.thumb} alt="latest-cover" />
                        <h3> Sale Price {game.salePrice}</h3>
                    </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Latest;