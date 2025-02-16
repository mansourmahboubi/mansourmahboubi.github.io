// Retro Synthwave Color Palette
const bubbleColors = [
    '#FF2A6D', // Hot Pink
    '#05D9E8', // Cyan
    '#005678', // Deep Blue
    '#7700A6', // Purple
    '#FFC759', // Yellow
    '#00FF9F'  // Neon Green
];

function getRandomColor() {
    return bubbleColors[Math.floor(Math.random() * bubbleColors.length)];
}

function Bubble({ size, left, duration, color }) {
    const bubbleStyle = {
        width: `${size}px`,
        height: `${size}px`,
        left: `${left}px`,
        animationDuration: `${duration}s`,
        background: `linear-gradient(45deg, ${color}88, ${color}44)`,
        border: `1px solid ${color}aa`
    };

    return <div className="bubble" style={bubbleStyle}></div>;
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
            duration: Math.random() * 8 + 4,
            color: getRandomColor()
        };

        setBubbles(prevBubbles => [...prevBubbles, newBubble]);

        setTimeout(() => {
            setBubbles(prevBubbles => 
                prevBubbles.filter(bubble => bubble.id !== newBubble.id)
            );
        }, newBubble.duration * 1000);
    };

    React.useEffect(() => {
        const intervalId = setInterval(createBubble, 300);
        return () => clearInterval(intervalId);
    }, [isActive]);

    const toggleBubbles = () => {
        setIsActive(!isActive);
    };

    const clearAllBubbles = () => {
        setBubbles([]);
    };

    return (
        <div>
            <div className="controls">
                <button onClick={toggleBubbles}>
                    {isActive ? '✋ Stop Bubbles' : '▶️ Start Bubbles'}
                </button>
                <button onClick={clearAllBubbles}>🗑️ Clear All</button>
            </div>
            {bubbles.map(bubble => (
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
