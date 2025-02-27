export default function LessonCard({ name, description, setLessonState }) {
  const handleSelectLesson = () => {
    setLessonState(1);
  };

  return (
    <div className="lesson-card">
      <h1>{name}</h1>
      <p>{description}</p>
      <button onClick={handleSelectLesson}>Start</button>
    </div>
  );
}
