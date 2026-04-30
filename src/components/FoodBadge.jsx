import './FoodBadge.css'

export function FoodBadge({ label }) {
  return (
    <div className="food-badge">
      <span className="badge-text">{label}</span>
    </div>
  )
}
