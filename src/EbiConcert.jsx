function EbiConcert() {
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  React.useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      // Concert date: April 10, 2026 at 8:00 PM Paris time (CEST/CET)
      // Using UTC+2 for CEST (Central European Summer Time) in April
      const concertDate = new Date('2026-04-10T20:00:00+02:00').getTime();
      const difference = concertDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({
          days: days,
          hours: hours,
          minutes: minutes,
          seconds: seconds,
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    // Calculate immediately
    calculateTimeLeft();
    
    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    // Cleanup on unmount
    return () => clearInterval(timer);
  }, []);

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: '#fff',
    },
    header: {
      textAlign: 'center',
      marginBottom: '3rem',
    },
    title: {
      fontSize: '3rem',
      marginBottom: '1rem',
      fontWeight: 'bold',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
    },
    subtitle: {
      fontSize: '1.5rem',
      opacity: 0.9,
      marginBottom: '0.5rem',
    },
    date: {
      fontSize: '1.2rem',
      opacity: 0.8,
    },
    countdownContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '2rem',
      width: '100%',
      maxWidth: '900px',
      padding: '2rem',
    },
    timeBox: {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      backdropFilter: 'blur(10px)',
      borderRadius: '15px',
      padding: '2rem',
      textAlign: 'center',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
    },
    timeValue: {
      fontSize: '3.5rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
    },
    timeLabel: {
      fontSize: '1.2rem',
      opacity: 0.9,
      textTransform: 'uppercase',
      letterSpacing: '2px',
    },
  };

  const isExpired = timeLeft.days === 0 && timeLeft.hours === 0 && 
                    timeLeft.minutes === 0 && timeLeft.seconds === 0;

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Ebi Concert</h1>
        <p style={styles.subtitle}>Countdown to the Concert</p>
        <p style={styles.date}>April 10th, 2026 at 8:00 PM (Paris Time)</p>
      </header>
      
      {isExpired ? (
        <div style={{...styles.countdownContainer, gridTemplateColumns: '1fr'}}>
          <div style={styles.timeBox}>
            <div style={{...styles.timeValue, fontSize: '2.5rem'}}>
              The concert has started! 🎵
            </div>
          </div>
        </div>
      ) : (
        <div style={styles.countdownContainer}>
          <div style={styles.timeBox}>
            <div style={styles.timeValue}>{String(timeLeft.days).padStart(2, '0')}</div>
            <div style={styles.timeLabel}>Days</div>
          </div>
          <div style={styles.timeBox}>
            <div style={styles.timeValue}>{String(timeLeft.hours).padStart(2, '0')}</div>
            <div style={styles.timeLabel}>Hours</div>
          </div>
          <div style={styles.timeBox}>
            <div style={styles.timeValue}>{String(timeLeft.minutes).padStart(2, '0')}</div>
            <div style={styles.timeLabel}>Minutes</div>
          </div>
          <div style={styles.timeBox}>
            <div style={styles.timeValue}>{String(timeLeft.seconds).padStart(2, '0')}</div>
            <div style={styles.timeLabel}>Seconds</div>
          </div>
        </div>
      )}
    </div>
  );
}

