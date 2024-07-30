import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Section from './components/Section';
import Sidebar from './components/Sidebar';
import UseState from './components/UseState';
import { sectionProps } from './constants/json';
import { routes } from './constants/menuList';

console.log(sectionProps); //로그가 두번찍히는 이유는 리액트에서 1번, 브라우저에서 1번 읽기 때문이다.

console.log(routes);

const App = () => {
  return (
    <div className="App">
      {/* {routes.map((sidebar, idx) => (
        <Sidebar key={idx} />
      ))}

      <Header /> */}
      {/* <Section title="slider" color="lightblue" />
      <Section title="deep" color="aqua" /> */}

      {/* {sectionProps.map((section, idx) => (
        // <Section key={idx} section={section} />
        <Section
          key={idx}
          title={section.title}
          color={section.color}
          contents={section.contents}
          article={section.article}
        />
      ))} */}

      {/* <Footer /> */}
      <UseState />
    </div>
  );
};

export default App;
