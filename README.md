# A quick start React +TailwindCSS + Styled-Components + Twin-Macro template

An opinionated quick start [Create React App](https://github.com/facebook/create-react-app) (CRA) _template_ with configured **TailwindCSS**, **Styled-components**, **Twin.Macro**, **Craco** configuration.

## Usage

```bash
npx create-react-app [your-project-name] --template react-tailwind-anish
```

Or

```bash
yarn create react-app your-project-name --template react-tailwind-anish
```

`npx` command installs the most recent stable version of CRA from npm.

`--template` parameter points to this template, note that `cra-template-` prefix is omitted.

## Motivation

You know the pain. You start a new project from scratch and need to configure it again and again. It needs tailwind and craco configuration. I want to focus on building amazing projects and not spending hours configuring. That's why I've created this template. It's here for you to use.

## Available Scripts

In the project directory, you can run:

- `yarn start` - runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- `yarn test` - launches the test runner in the interactive watch mode.

- `yarn build` - builds the app for production to the `build` folder.

- `yarn eject` - exposes content of `react-script` package

Due to CRA template limitations (we can change only `scripts` and `dependencies` inside generated `package.json`) all configuration is done by adding config files where possible. Also no `devDependencies` for now, sorry.

## DevDependencies Configuration

For devDependencies you can remove the `autoprefixer`, `postcss`, `tailwindcss` from dependencies and paste it into the ***"devDependencies"*** object.
![Configuration for devDependencies](https://raw.githubusercontent.com/Anishpras/cra-template-react-tailwind/main/assets/carbon.png)

## Thank you

I hope this template will be helpful for you and you will love using it 🔥. 
