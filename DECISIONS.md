# DECISIONS

This document clarifies the decisions made regarding product development throughout its lifecycle. Justifying these decisions facilitates understanding of past actions, thereby reducing the risks of unnecessary modifications or refactoring that can lead to regression and waste of time.

An additional motivation is to use it as a reminder and a foundation for further improvements. By knowing what we did in the past, but most importantly **WHY**, we can better organize our work for the future.

Finally, it serves as a complement to the `CHANGELOG.md` by offering a more **explanatory approach** to the evolution of the product, contrasting the more straightforward nature of the `CHANGELOG.md`.

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

### Why using static data?

- The question behind this question is actually why not using a database?
- There is no good or bad approach on over the subject of data source type
- The choice is more related to "what is the most straightforward" approach regarding the context
- As of this version, the website serves as a "public online resume"
  - In this context, data is most static than anything
  - A database is more suitable for synamic contexts, where data changes regularely, their nature is complex and their lifecycle unpredictable
- If the context changes the data source will change accordingly
  - For example, the section who is more likely to changes reguraly is "Portfolio"
- Additionally, if we decide to add features based on events, this will also likely motivates a change in approach
- Let us remember, the goal of a product is to create value to the user and should be built at the lower cost to preserve it scalability over time
