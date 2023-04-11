interface LevelDisplayProps {
  title?: string;
  level: number;
}

const LevelDisplay: React.FC<LevelDisplayProps> = ({ title, level }) => (
  <div>
    {title && <h4>{title}</h4>}
    <div className="complexity">
      {[1, 2, 3, 4, 5].map((num) => (
        <div
          key={num}
          style={{ backgroundColor: num <= level ? "#ff916a" : "#eee" }}
          className={`complexity__point complexity__point--${num}`}
        ></div>
      ))}
    </div>
  </div>
);

export default LevelDisplay;
