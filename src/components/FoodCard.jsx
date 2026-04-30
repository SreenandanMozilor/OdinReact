import './FoodCard.css'

export function FoodCard({ name, origin, description, emoji, rating }) {
  return (
    <div className="food-card">
      <div className="food-emoji">{emoji}</div>
      <div className="food-info">
        <h2 className="food-name">{name}</h2>
        <span className="food-origin">{origin}</span>
        <p className="food-desc">{description}</p>
        <div className="food-rating">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={i < rating ? 'star filled' : 'star'}>★</span>
          ))}
        </div>
      </div>
    </div>
  )
}
