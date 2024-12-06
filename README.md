This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

This is a Next.js project bootstrapped with create-next-app.

Getting Started First, run the development server:

npm run dev Open http://localhost:3000 with your browser to see the result.

## Tech Task

On the Beach Frontend Software Engineer code test Tip: Read these instructions carefully! There's important details in here to help you produce a great test. If in doubt, trust whatever is written over how the example image looks.

You're expected to spend around an evening on this test, probably around 2-5 hours. Don't go overboard - when you've done enough work, stop and document in the Readme what else you would do if you had more time (though do look at the “Things we’re looking for” section below - this is a clue as to what we’re really interested in seeing - bonus points for explaining roughly how you’d achieve each point!)

You can use AI to help you with the test, but bear in mind we’ll be asking questions about your code at the interview stage so make sure you understand what it’s all doing.

If anything isn’t clear, please reach out to us with your questions. We’re happy to help.

What we want to see

Produce a HTML, CSS and JavaScript representation of the given design.png below with the following features:

Sort the results by price (this should be the default) Sort the results by star rating and highlight when active Sort the results alphabetically by hotel name and highlight when active Ability to toggle expanded hotel description

How you’ll build it

You must consume the data from this file asynchronously https://static.onthebeach.co.uk/fe-code-test/data.json (you'll find the hotel images you need in there) You can find the background image here https://static.onthebeach.co.uk/fe-code-test/background.png We are looking for a client side solution, there should be no server logic involved. Imagine this will be a component added to a large website Feel free to use JavaScript libraries or frameworks You may use things like CSS Preprocessors and JavaScript build tools, but if you do please include the dependencies/source files Feel free to source your own icons - emojis are fine too! 🔤 💵 ⭐️ 🔽 🔼 Some colours, to save you hunting around for them

Dark blue: #17317F Yellow: #FEDC07 Grey: #CCC Things we’re looking for

We’re not just looking for technical ability - we also want to gain an insight into your thought process.

Some form of testing - we'd particularly like to see component testing using a tool such as Testing Library or a suitable alternative Small Git commits with clear messages Semantic HTML Modular and responsive CSS Error/warning free JavaScript Clean flow of state throughout the application We’d love to see comments in the code or the Readme explaining your thought process/where you might have struggled with this test (especially if you’re applying for a junior position)

# Completed Project

## Technology Used

- 🐻 **Zustand**: State management library for React.
- 📅 **Date-fns**: Utility library for working with dates.
- 🃏 **Jest**: Testing framework.
- 🌐 **Next.js**: React framework for server-rendered applications.
- ⚛️ **React**: JavaScript library for building user interfaces.
- 🛠️ **TypeScript**: Typed superset of JavaScript for safer and scalable development.
- ⌨️ **Quicktype**: Code generator for model classes and serializers.

## View Deployment

🚀 https://otb-tech-task.vercel.app/

## What I'd Improve

### Tests

- 🧪 **Unit Tests**:  
  I’d aim to include a unit test for every utility, component, and store I created. To streamline this, I’d introduce:

  - A `setup()` function with an `options` parameter:
    - For mocking hooks, functions, etc.
  - A `props` option:
    - For mocking various types of props.

  This approach would reduce the need to repeatedly call the `render()` method from Jest.

- 🧪 **E2E/Automation Tests**:  
  I’d introduce 🎭**Playwright** for end-to-end (E2E) and automation testing. To ensure robustness throughout the development process, I’d:

  - Integrate Playwright into the CI/CD pipeline for every environment.
  - Ensure no changes are deployed without being thoroughly tested.

  This approach would significantly reduce the likelihood of bugs making it to production.