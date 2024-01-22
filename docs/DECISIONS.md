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

### Why Use Static Data?

- The underlying question is, why not use a database?
- **There is no inherently superior or inferior approach** regarding the choice of a data source type.
- The decision is more about **"what is the most straightforward" approach within the given context.**
  - In other words, **"Do we need a database?"**
  - **The answer is NO!**
- In its current version, the website functions as a "public online resume."
  - In this context, **data is primarily kept static.**
  - The information provided **does not change regularly.**
  - A database is more suitable for dynamic contexts where data changes regularly, has a complex nature, and an unpredictable lifecycle.
  - Using a database introduces constraints, necessitates additional tools, and, inevitably, adds technical debt.
- Naturally, if the context evolves, the data source will adapt accordingly.
  - For instance, the section most likely to change regularly is the "Portfolio."
- Moreover, if we decide to add features based on events, this would also likely warrant a change in approach.
- Let's remember, **the goal of a product is to create value** for the user and should be built at the lowest cost to preserve scalability over time.
  - **Code should never be an opportunity or an excuse to showcase skills by using unnecessary tech.**

### Why Necessary to Create a Static System with `Company Model`?

- Company data is utilized in several places.
- In this context, we aim to establish a single source of truth from which we can retrieve our data.
- We are essentially mimicking how a database approach would function but opting for static data.
- As a reminder, for this version, the use of a database was not chosen.
  - Our approach involves utilizing a **static model data** along with a **hook to easily retrieve our data**.

### What is the Difference Between "Map" and "Model"?

- A Model represents the "data," answering the **WHAT**.
- A Map represents the **HOW** data should be displayed, specifically the **order of appearance**.
- The component uses data to **RENDER** following the paradigm outlined in the Map, focusing on the Look & Feel.
- This approach aligns with what is commonly referred to as **"Object Mapping."**
- Yes, I understand that "Model" may introduce confusion if you think in terms of `MVC`, but take a breath and cut me some slack :)
