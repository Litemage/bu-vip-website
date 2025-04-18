# Bradley University Vertically Integrated Projects Website (ECE 398)

To build it:

Go and [install Node.js](https://nodejs.org/en/download) for your system, then run (after adding node and npm to path):

```
# Make sure you are in the repository directory
npm i
npm run dev
```

And then go to: [https://localhost:4321](https://localhost:4321) to view the website and make changes to source code.

# Important Info

There are two files that will be of interest to the general user: `src/contact.ts` and `src/projects.ts`. These two files contain the infromation for each project, this is where you can edit contact and project details.

**Blog**

To add a blog post, just make a new `.mdx` file in the `src/data/post` directory. Make sure to copy the header (between the "--- ... ---") to your file. This is called the "frontmatter" and is used to do most of the parsing. **HAVING THE FRONTMATTER IS REQUIRED**.