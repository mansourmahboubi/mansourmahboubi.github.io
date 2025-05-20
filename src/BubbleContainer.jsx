/* eslint-disable */
// Retro Synthwave Color Palette
const bubbleColors = [
  "#FF2A6D", // Hot Pink
  "#05D9E8", // Cyan
  "#005678", // Deep Blue
  "#7700A6", // Purple
  "#FFC759", // Yellow
  "#00FF9F", // Neon Green
];
const Skills = [
  "React",
  "TypeScript",
  "Python",
  "Azure",
  "AWS",
  "Docker",
  "Kubernetes",
  "Git",
  "GitHub",
  "Github Actions",
  "Linux",
  "CI/CD",
  "DevOps",
  "Cloud",
  "Cloud Native",
  "PostgreSQL",
  "FastAPI",
  "Django",
  "Fintech",
  "Finance",
  "Banking",
  "Investing",
  "Trading",
  "Investment",
  "Financial",
  "Financial Services",
  "Education",
  "Legal Tech",
  "Pandas",
  "Numpy",
  "React Native",
  "Terraform",
];
function getRandomColor() {
  return bubbleColors[Math.floor(Math.random() * bubbleColors.length)];
}

function Bubble({ size, left, duration, color }) {
  const randomSkill = Skills[Math.floor(Math.random() * Skills.length)];
  const [text, setText] = React.useState(randomSkill);
  const bubbleStyle = {
    width: `${size}px`,
    height: `${size}px`,
    left: `${left}px`,
    animationDuration: `${duration}s`,
    background: `linear-gradient(45deg, ${color}88, ${color}44)`,
    border: `1px solid ${color}aa`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  };

  // Determine text size class based on bubble size
  const getTextSizeClass = (size) => {
    if (size < 30) return "text-[8px]";
    if (size < 40) return "text-[10px]";
    if (size < 50) return "text-[12px]";
    if (size < 60) return "text-[14px]";
    return "text-[16px]";
  };

  return (
    <div className="bubble" style={bubbleStyle}>
      <span
        className={`${getTextSizeClass(size)} text-center px-0.5 leading-none`}
      >
        {text}
      </span>
    </div>
  );
}

function BubbleContainer() {
  const [bubbles, setBubbles] = React.useState([]);
  const [isActive, setIsActive] = React.useState(true);

  const createBubble = () => {
    if (!isActive) return;

    const newBubble = {
      id: Date.now(),
      size: Math.random() * 60 + 20,
      left: Math.random() * window.innerWidth,
      duration: Math.random() * 10 + 5,
      color: getRandomColor(),
    };

    setBubbles((prevBubbles) => [...prevBubbles, newBubble]);

    setTimeout(() => {
      setBubbles((prevBubbles) =>
        prevBubbles.filter((bubble) => bubble.id !== newBubble.id),
      );
    }, newBubble.duration * 1000);
  };

  React.useEffect(() => {
    const intervalId = setInterval(createBubble, 1 * 10 ** 3);
    return () => clearInterval(intervalId);
  }, [isActive]);

  const toggleBubbles = () => {
    setIsActive(!isActive);
  };

  const clearAllBubbles = () => {
    setBubbles([]);
  };

  return (
    <div className="absolute top-0 left-0 w-full" id="bubble-container">
      {/* <div className="controls">
        <button onClick={toggleBubbles}>
          {isActive ? "✋ Stop Bubbles" : "▶️ Start Bubbles"}
        </button>
        <button onClick={clearAllBubbles}>🗑️ Clear All</button>
      </div> */}
      {bubbles.map((bubble) => (
        <Bubble
          key={bubble.id}
          size={bubble.size}
          left={bubble.left}
          duration={bubble.duration}
          color={bubble.color}
        />
      ))}
    </div>
  );
}
