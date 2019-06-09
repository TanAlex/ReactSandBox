# React Context Demo App

There are 2 ways to use context in sub component

## First way of doing things, use this.context and child component's contextType

1 create a file to createContext

**theme-context.js**

```js
export const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

export const ThemeContext = React.createContext(
  themes.dark // default value
);
```

2 Child component use contextType then it can use this.context to access context object

themed-button.js

```js
import { ThemeContext } from "./theme-context";

class ThemedButton extends React.Component {
  render() {
    let props = this.props;
    let theme = this.context;
    return <button {...props} style={{ backgroundColor: theme.background }} />;
  }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;
```

3 Wrap the child component in ThemeContext.Provider

```js
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark
      }));
    };
  }
  render() {
    return (
      <Page>
        <ThemeContext.Provider value={this.state.theme}>
          <ThemedButton onClick={this.toggleTheme}>Change Theme</ThemedButton>
        </ThemeContext.Provider>
        <Section>
          <ThemedButton />
        </Section>
      </Page>
    );
  }
}
```

## Second way of doing things use the ThemContext.Consumer

1 Create a file to createContext

theme-context.js

```js
// Make sure the shape of the default value passed to
// createContext matches the shape that the consumers expect!
export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {}
});
```

2 Create the consumer child component

Note: because the ThemContext is an object,

```js
{
  theme: themes.dark,
  toggleTheme: () => {},
}
```

you need to init the function wil an empty function

so the value Consumer use is

```js
({theme, toggeTheme}) => ( ... )
```

theme-toggler-button.js

```js
import { ThemeContext } from "./theme-context";

function ThemeTogglerButton() {
  // The Theme Toggler Button receives not only the theme
  // but also a toggleTheme function from the context
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <button
          onClick={toggleTheme}
          style={{ backgroundColor: theme.background }}
        >
          Toggle Theme
        </button>
      )}{" "}
      // This block has to be enclosed by {}
    </ThemeContext.Consumer>
  );
}

export default ThemeTogglerButton;
```

3 Wrap the child component with provider

```js
render() {
    // The entire state is passed to the provider
    return (
      <ThemeContext.Provider value={this.state}>
        <ThemeTogglerButton />
      </ThemeContext.Provider>
    );
  }

```
