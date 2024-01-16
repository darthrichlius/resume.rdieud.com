# DECISIONS

## VERSIONS

### [Beta v0.1.0]

#### Why Use Separate CSS Files When There Is Only One Page?

- Currently, the website consists of only one page, and navigation is achieved using anchors.
- In this setup, using a single file might seem sufficient.
- However, using separate files makes sense for the following reasons:
  1.  It makes our code easier to read and organize.
  2.  Future iterations will introduce page navigation.

#### Why Make `global.css` an Exclusive Import Style File?

- This setup solves the caveats of using the CSS directive `@import`.
- As the Tailwind documentation states:

```
  One important thing to note about postcss-import is that it strictly adheres to the CSS spec and disallows @import statements anywhere except at the very top of a file.
```

- Therefore, one solution is to "Use separate files for imports and actual CSS"

#### Why Use `@import` Anyway?

- Because the application makes use of custom utility classes.
- This configuration would have worked normally without any trouble if we had only one file.
- Tailwind's approach is to use as minimal a style file as possible; therefore, using an approach with several files leads to unstable code where some classes are not recognized.
- The solution is to use `@import` along with the `postcss-import` plugin.
