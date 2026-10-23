import { Link } from 'react-router';
import { useFavorites } from '../context/FavoritesContext';

const CoinCard = ({ coin }) => {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.includes(coin.id);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(coin.id);
  };

  return (
    <Link to={`/coin/${coin.id}`}>
      <div className='coin-card'>
        <div className='coin-header'>
          <img src={coin.image} alt={coin.name} className='coin-image' />
          <div className='coin-info'>
            <h2>{coin.name}</h2>
            <p className='symbol'>{coin.symbol.toUpperCase()}</p>
          </div>
          <button
            className={`favorite-btn ${isFavorite ? 'active' : ''}`}
            onClick={handleFavoriteClick}
            title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            {isFavorite ? '★' : '☆'}
          </button>
        </div>
        <p>Price: ${coin.current_price.toLocaleString()}</p>
        <p
          className={
            coin.price_change_percentage_24h >= 0 ? 'positive' : 'negative'
          }
        >
          {coin.price_change_percentage_24h.toFixed(2)} %
        </p>
        <p>Market Cap: {coin.market_cap.toLocaleString()}</p>
      </div>
    </Link>
  );
};

export default CoinCard;
