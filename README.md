# Erdal kulgu Libarary submission

Installation;
    npm install ../fractal-ems/erdalkulgu-library-submission

if it gives you dependency conflict, then run this
    npm install ../fractal-ems/erdalkulgu-library-submission --legacy-peer-deps

Importing the Code
```
    import { Button, GlobalThemeContext, GlobalThemeProvider } from '@erdalkulgu/erdalkulgu-library-submission'
```
Then wrap your component at the root level of your project
```
    // CSS Globally provided in the theme prop
    <GlobalThemeProvider theme={{ backgroundColor: '#00c'}}>
    // You can setTheme and access Theme values with GlobalThemeContext
      <GlobalThemeContext.Consumer>
        {({setTheme}: {setTheme: any}) => (
        // You can import Button from anywhere in your project
        // To read globally prvided theme, 
        // it needs to be wrapped with GlobalThemeProvider component 
          <Button label={"My first library!!"} onClick={ () => setTheme({ backgroundColor: '#000', textColor: '#fff' })}/>
        )}
        </GlobalThemeContext.Consumer>
    <div>
      </GlobalThemeProvider>
```
