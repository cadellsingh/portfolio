import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import GlobalStyle from "./StylingAndThemes/globalStyles";
import Nav from "./components/nav";
import About from "./components/about";
import { useDarkMode } from "./StylingAndThemes/darkMode";
import { darkTheme, lightTheme } from "./StylingAndThemes/themes";
import { ParticleBackground } from "./StylingAndThemes/particles";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Footer from "./components/footer";

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const Layout = styled.div`
  width: 70%;
  margin: 0 auto;
  position: relative;
  min-height: 100vh;

  @media (max-width: 1055px) {
    width: 75%;
  }

  @media (max-width: 955px) {
    width: 85%;
  }
`;

const App = () => {
  const [theme, setTheme] = useDarkMode();

  const themeToggler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  const themeMode = theme === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <Container>
          <ParticleBackground />
          <Layout>
            <GlobalStyle />
            <Nav theme={theme} themeToggler={themeToggler} />
            <About />
            <Projects />
            <Skills />
            <Footer />
          </Layout>
        </Container>
      </>
    </ThemeProvider>
  );
};

export default App;
