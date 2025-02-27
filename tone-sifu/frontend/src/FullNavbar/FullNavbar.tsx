import NavButton from "./NavButton/NavButton";
import "./FullNavbar.css";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../LoginButton/LoginButton";

export default function FullNavbar({
  language,
  setLanguage,
  testState,
  setTestState,
  lessonState,
  setLessonState,
}) {
  const { isAuthenticated } = useAuth0();

  const handleDropdown = (e) => {
    setLanguage(e.target.value);
  };

  const resetTraining = () => {
    // Reset testState and lessonState
    setTestState(0);
    setLessonState(0);
  };

  return (
    <div className="navbar-container">
      {testState == 0 && lessonState == 0 && (
        <select
          className="language-dropdown"
          value={language}
          onChange={handleDropdown}
        >
          <option className="language-dropdown-option" value={"cmn"}>
            Mandarin
          </option>
          <option className="language-dropdown-option" value={"yue"}>
            Cantonese
          </option>
        </select>
      )}
      <NavButton
        resetTraining={resetTraining}
        destination="/lessons"
        title="Lessons"
      ></NavButton>
      <NavButton
        resetTraining={resetTraining}
        destination="/training"
        title="Training"
      ></NavButton>
      {/* Shows link to profile only if user is logged in */}
      {isAuthenticated && (
        <NavButton
          resetTraining={resetTraining}
          destination="/profile"
          title="Profile"
        ></NavButton>
      )}
      {/* Shows login button only if user is not logged in */}
      {!isAuthenticated && <LoginButton type="navbutton" />}
    </div>
  );
}
