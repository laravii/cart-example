import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
:root {
  --white-primary: #ffffff;
  --white-secundary: #f2f2f2;
  --primary: #ffce00;
  --secundary: #c59e01;
  --terciary: #dbb002;
  --fourth: #30b54c;
  --fivety: #178ee2;
  --sixth: #ffd93b;
  --light-line: #f1f1f9;
  --dark-text: #737373;
  --light-text: #f0e7c8;
  --border-radius: 3px;
  --inputAndButtonHeight: 3rem;
  --font-family-principal: 'Raleway', sans-serif;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
@media (max-width: 1080px) {
  html {
    font-size: 87.5%;
  }
}
@media (max-width: 720px) {
  html {
    font-size: 93.75%;
  }
}
body,
input,
textarea,
button {
  font: 400 1rem var(--font-family-principal);
}
button {
  cursor: pointer;
}
a {
  color: inherit;
  text-decoration: none;
}
body {
  display: flex;
  flex-direction: column;
  background-color: var(--white-secundary);
}
`
