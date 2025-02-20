const ExpBar = ({ exp }) => {
  let level = 1;
  if (exp != 0) {
    level = Math.ceil(exp / 100);
  }
  const expForNextLevel = 100;

  const progress = ((exp - (level - 1) * 100) / expForNextLevel) * 100;

  return (
    <div style={{ marginBottom: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "8px",
        }}
      >
        <span>Level {level}</span>
        <span>{Math.floor(progress)}%</span>
      </div>
      <div
        style={{
          height: "20px",
          width: "100%",
          backgroundColor: "#e0e0e0",
          borderRadius: "5px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            backgroundColor: "rgb(139, 0, 0)",
          }}
        />
      </div>
    </div>
  );
};

export default ExpBar;
