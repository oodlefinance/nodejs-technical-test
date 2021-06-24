# Oodle Car Finance = Node.js/GraphQL Technical Test

Congratulations! If you're looking at this you probably have an interview with Oodle!

![Great job](https://media.giphy.com/media/xHMIDAy1qkzNS/giphy.gif)

You have **2 hours** to complete the challenge. If you run out of time before you complete the task to your own satisfaction, just *stay calm and push your code*. We are mostly interested in how you approach the problem and what your priorities are during the time.

## Instructions

### The Project

This project is a rough representation of the types of GraphQL services we run at Oodle. Right now it's talking to an API: https://data.police.uk/docs/

You should be able to get the project started locally by running:
```shell
npm install
npm run dev
```

This API allows the user to query information about police forces around the UK, feel free to read up on it before you begin.

Additionally, feel free to add any other libraries or packages that you may feel you will need.

### The Scenario

We have a frontend project that is calling this service. They have a set of new requirements that we'll need to implement for them, in order of priority:

#### Requirement 1

When they make a `getPoliceForces` query, they'd also like to get the engagement methods for each force.

#### Requirement 2

When they make a `getPoliceForces` query, they'd like to see details of any stop and searches the force made that resulted in an arrest in the first month of this year.


### What are we looking for?
- Ability to interpret and integrate with a 3rd party API
- General GraphQL/Javascript competency
- Fetching and Handling Data Asynchronously
- Evidence of some testing

### More specifics
- You should fork this repo as it already has some of the boilerplate you'll need to get started.
- You don't have to deploy your code anywhere as we'll pull down the code and run it locally.

### Want more of a challenge or to go the extra mile?
If you find the above requirements easy to solve, feel free to challenge yourself to go beyond the spec!

Some ideas:
- If you know of any other APIs that might play nicely with this data, feel free to include them.
- Think you can elegantly handle the API usage limits? Give it a go!
- Calculate some helpful metadata for each force, such as; avg number of arrests per month, most common legislation cited, etc.

## Okay I did it. What now?
Send us the link to your repo. We'll take a look at it, and if we like what we see we'll invite you to discuss it during a technical interview.