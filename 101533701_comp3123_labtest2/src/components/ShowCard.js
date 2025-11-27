import React from 'react';
import './ShowCard.css';

function ShowCard({ data }) {
  const stripHtml = (html) => {
    if (!html) return 'No description available.';
    const tmp = document.createElement('DIV');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  const getImageUrl = () => {
    return data.image?.medium || data.image?.original || 'https://via.placeholder.com/210x295?text=No+Image';
  };

  const getRating = () => {
    return data.rating?.average || 'N/A';
  };

  const getStatus = () => {
    return data.status || 'Unknown';
  };

  const getPremiered = () => {
    if (data.premiered) {
      return new Date(data.premiered).getFullYear();
    }
    return 'N/A';
  };

  return (
    <div className="show-card">
      <div className="show-image-container">
        <img src={getImageUrl()} alt={data.name} className="show-image" />
        <div className="show-rating">
          <span className="rating-icon">⭐</span>
          <span className="rating-value">{getRating()}</span>
        </div>
      </div>

      <div className="show-content">
        <h2 className="show-title">{data.name}</h2>

        <div className="show-meta">
          <span className="meta-item">
            <span className="meta-icon">📅</span>
            {getPremiered()}
          </span>
          <span className="meta-item">
            <span className="meta-icon">📺</span>
            {getStatus()}
          </span>
          {data.language && (
            <span className="meta-item">
              <span className="meta-icon">🌐</span>
              {data.language}
            </span>
          )}
        </div>

        <div className="show-genres">
          {data.genres?.map((genre, index) => (
            <span key={index} className="genre-tag">
              {genre}
            </span>
          ))}
        </div>

        <p className="show-summary">{stripHtml(data.summary)}</p>

        <div className="show-details">
          {data.network && (
            <div className="detail-row">
              <span className="detail-label">📡 Network:</span>
              <span className="detail-value">{data.network.name}</span>
            </div>
          )}

          {data.schedule?.days?.length > 0 && (
            <div className="detail-row">
              <span className="detail-label">🗓️ Schedule:</span>
              <span className="detail-value">
                {data.schedule.days.join(', ')} at {data.schedule.time || 'TBA'}
              </span>
            </div>
          )}

          {data.runtime && (
            <div className="detail-row">
              <span className="detail-label">⏱️ Runtime:</span>
              <span className="detail-value">{data.runtime} minutes</span>
            </div>
          )}

          {data.officialSite && (
            <div className="detail-row">
              <a
                href={data.officialSite}
                target="_blank"
                rel="noopener noreferrer"
                className="official-site-link"
              >
                🔗 Visit Official Site
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShowCard;
