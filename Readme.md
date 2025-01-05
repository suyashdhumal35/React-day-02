# Namaste react

...

# Parcel

- Dev build
- Local Server
- HHR - Hot Module Replacment
- uses file watching algo - written in C++
- Caching - Faster build
- image Optimization
- Minification
- Bundling
- Compresses (white space / comments)
- Consisting Hashing
- Code spliting
- Diffrential bundling - support older browsers
- Error Handling
- Https
- Tree Shaking - remove unused code
- Different dev and prod bundles

# Namaste Food web site

- Heaader
- - Logo
- - Nav Items
- Body
- - Search
- -RestaurentContainer
- -RestaurentCard
-       - Img
-       - Name of res, Star Rating , cuisine , delivery time
- Footer
- - Copyright
- - Links
- - Address
- - Contact

Two Type of Export / Import

-Default Export / Import

export default Component;
import Component from "path";

- Name Export / Import

export const Component ;
import {Component} from "path"

# React Hooks

(Normal jS utility functions)

- useState() - To Generate Superpowerful State Variaables in React
  const [Name, setName ] =
  Name = variable name
  setName = mostly given name similar to name for better practice

  - whenever a list variable updates/changes react will re-renders the variable

- useEffect()
