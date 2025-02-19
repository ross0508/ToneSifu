const ExpBar = ({ exp }) => {

    const level = Math.ceil(exp / 100)

    const expForNextLevel = 100

    const progress = (exp / expForNextLevel) * 100;

    return (
        <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span>Level {level}</span>
            <span>{Math.floor(progress)}%</span>
        </div>
        <div
            style={{
            height: '20px',
            width: '100%',
            backgroundColor: '#e0e0e0',
            borderRadius: '5px',
            overflow: 'hidden',
            }}
        >
            <div
            style={{
                height: '100%',
                width: `${progress}%`,
                backgroundColor: 'rgb(139, 0, 0)',
                transition: 'width 0.3s ease-in-out',
            }}
            />
        </div>
        </div>
    );
};

export default ExpBar;
