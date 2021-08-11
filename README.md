# McGill Management Frosh Website

Website developed for the [Management Undergraduate Society](http://www.mus.mcgill.ca) of McGill University for the entering class of 2021 frosh. 
## Technologies

This website is built on [Gatsby](https://www.gatsbyjs.org/), with [Tailwind CSS](https://tailwindcss.com/) for ease of styling. It was forked from the [TailwindPlay starter](https://gatsbyjs-starter-tailwindplay.appseed.us/).

The purchasing form is done via Typeform and Stripe. If you have more time to implement the payment processing for this site, I'd recommend doing something more "native" using Stripe directly and using Vercel or some other serverless forms provider. 

### Get started

Install Gatsby CLI:
```sh
yarn global add gatsby-cli
```
<br />

## Build your site
Use `gatsby build` to build your site for production.

<br />

## Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?s=https%3A%2F%2Fgithub.com%2Fkrubenok%2Fmcgill-management-frosh)

The [current website](https://musfrosh.com) is hosted at Vercel on their free plan. [Kyle Rubenok](https://github.com/krubenok) controls the vercel instance currently hosting this site, but feel free to deploy your own. 

I highly recommend Vercel for hosting this website since (at time of writing) their free plan is very generous. If this changes in future, [consider Netlify](https://www.netlify.com).

### Domains

The current domain for this project is https://musfrosh.com. If future developers for the MUS need access to this, please reach out to [Kyle Rubenok](https://github.com/krubenok).

The 2020 edition of this site is available in the `2020` branch or at https://2020.musfrosh.com

<br />

## Resources
* [Gatsby documentation](https://www.gatsbyjs.org/docs/)
* [Tailwind documentation](https://tailwindcss.com/docs/what-is-tailwind/)
* [Prettier documentation](https://prettier.io/docs/en/index.html)
* [ESLint documentation](https://eslint.org/docs/user-guide/configuring)

<br />

## Credits
* [The original starter](https://github.com/Oddstronaut/gatsby-starter-tailwind)
* [The design](https://www.tailwindtoolbox.com/templates/landing-page)
* [MUS Web Developer 2021, Kyle Rubenok](https://github.com/krubenok)