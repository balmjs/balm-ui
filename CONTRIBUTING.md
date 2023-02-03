# Contributing to BalmUI

BalmUI is an open source project that accepts contributions from community members.

If you’ve never contributed to an open source project before, take a look at GitHub’s [Contributing to Open Source on GitHub](https://guides.github.com/activities/contributing-to-open-source/) to learn some of the basics.

Before submitting your contribution, please make sure to take a moment and read through the following guidelines:

- [Code of Conduct](CODE_OF_CONDUCT.md)
- [Issue Reporting Guidelines](#issue-reporting-guidelines)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Financial Contribution](#financial-contribution)

## Issue Reporting Guidelines

If you find a bug in the source code or a mistake in the documentation, you can help us by submitting an issue to the GitHub repository for that platform.

Even better: propose a fix with a pull request and link it to the issue!

## Pull Request Guidelines

- The `main` branch is just a snapshot of the latest stable release. All development should be done in dedicated branches. **Do not submit PRs against the `main` branch.**

- Checkout a topic branch from a base branch, e.g. `10.x-dev`, and merge back against that branch.

- If adding a new feature:

  - Add accompanying test case.
  - Provide a convincing reason to add this feature. Ideally, you should open a suggestion issue first and have it approved before working on it.

- If fixing a bug:

  - If you are resolving a special issue, add `(fix #xxxx[,#xxxx])` (#xxxx is the issue id) in your PR title for a better release log, e.g. `update entities encoding/decoding (fix #1024)`.
  - Provide a detailed description of the bug in the PR. Live demo preferred.
  - Add appropriate test coverage if applicable.

- It's OK to have multiple small commits as you work on the PR - GitHub can automatically squash them before merging.

- Make sure tests pass!

- Commit messages must follow the [commit message convention](https://www.conventionalcommits.org/).

- No need to worry about code style as long as you have installed the dev dependencies - modified files are automatically formatted with Prettier on commit.

## Development Setup

Install [Node.js® and npm](https://nodejs.org/en/download/) if they are not already on your machine.

> **Verify that you are running at least node `18`** by running `node -v` in a terminal/console window. Older versions maybe produce errors, but newer versions are fine.

The BalmUI depends on [BalmJS](https://balm.js.org/), so we need to install the `balm-core` globally.

```sh
npm install -g balm-core
# OR
yarn global add balm-core
```

After cloning the repo, run:

```sh
npm install
# OR
yarn
```

Checkout your branch, enjoy:

```sh
npm run dev
```

## Project Structure

```
project
├── config     // BalmJS config files. (In most cases you don't need to touch them)
├── docs       // BalmUI documentation and demos. (DEV)
│ ├── data     // mock data
│ ├── ...
│ ├── scripts
│ │ ├── docs     // API docs
│ │ ├── snippets // code snippets
│ │ ├── views    // official demos
│ │ └── ...
│ └── styles
├── examples   // BalmUI rumtime examples. (TEST)
├── scripts    // Build-related configuration files.
├─┬ src        // contains the source code, obviously.
│ ├── material-components-web // Stable mdc-web source code.
│ ├── material-icons          // Stable Material Icons fonts.
│ ├── scripts        // BalmUI core scripts (DEV)
│ │ ├── ...
│ │ ├── index.js     // Official Google Material Components entry.
│ │ ├── plus.js      // BalmJS Team Material Components entry.
│ │ └── next.js      // Experimental Material Components entry.
│ └── styles         // BalmUI core styles (DEV)
│   ├── ...
│   └── balm-ui.scss // BalmUI style entry.
├── test       // contains all tests. (TEST)
└── ...
```

- `docs/{styles,scripts}`: Contributing documentation
- `src/{styles,scripts}`: Contributing components
- `test`: Contributing tests

> `dist`, `components`, `directives`, `plugins` and `utils`: Note these directories are only updated when a release happens; they do not reflect the latest changes in development branches.

## Financial Contribution

As a pure community-driven project without major corporate backing, we also welcome financial contributions via OpenCollective.

- [Become a backer or sponsor on Patreon](https://www.patreon.com/balmjs)
- [Become a backer or sponsor on OpenCollective](https://opencollective.com/balmjs)
