import { useEffect } from 'react';
import ProjectList from '../../components/projectList/projectList';
import './project.css';


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const tg = window.Telegram.WebApp;

function Project() {

  useEffect(() => {
    tg.BackButton.show();
    tg.MainButton.setParams({
      text: "Transfer coins",
    });
  }, []);

  return (
    <div className="project-page">
      <ProjectList />
      <button>Добавить новый список</button>
    </div>)
}

export default Project