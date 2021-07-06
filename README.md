# Oncora Full-Stack Challenge

## Requirements

- Linux, Mac, or Windows (via WSL - untested) computer
- Internet access
- [NodeJS >=14](https://nodejs.org/en/download/) installed (including npm)

## The Challenge

### Overview

Your task is to add a small feature to an existing application.
To respect your time, please only spend about 2 hours working on this challenge.

This repository contains scaffold code for a basic patient list app - 
a NodeJS/Express API with a SQLite database, and a React frontend.

### Feature

We would like you to add a "starring" feature to this app. This feature
should meet the following requirements:

1. A user should be able to "star" patients by clicking on a star icon 
   in the right-most column of the patient list. 
2. When a patient is starred, the icon should change to indicate the 
   update, that row should move to the top of the patient list.
3. When a patient is un-starred, the icon should change to indicate the
   update, and that row should move back down into the normal patient list.
4. The starred status of each patient should be saved to the 
   SQLite database so that it persists across page reloads. 

Other than: starred > not starred, the sort order of the patient list 
does not matter. It is not necessary to implement any sorting controls
on the columns of the table.

Feel free to change or delete any of the existing code, and remove
or install any additional third-party dependencies as desired!

### Criteria

#### In Scope

While evaluating your submission, we'll look at the following:

1. Functionality - does the starring feature work as described?
2. Resiliency - are failure conditions considered and handled appropriately?
3. Readability - is the code clear and readable?
4. Efficiency - does your solution make good use of compute resources?

#### Out of Scope

Since you'll only have about 2 hours, don't worry about the following:

1. Tests - normally we want to test a new feature like this thoroughly.
2. Documentation - normally we want to keep the OpenAPI spec (`api.yaml`)
   up-to-date, but you aren't required to for this challenge (unless you find it helpful).
3. Cross-Browser - normally we want to support legacy browsers like IE11,
   you should only care that your solution works in modern browsers.
4. Styling - as long as your solution looks decent, we won't nitpick styling/CSS.

### Submission

Please avoid directly forking this repo, but feel free to host your solution on 
GitHub, GitLab, BitBucket, or any other provider of your choice as a standalone repository.
Alternately, you may include an archive (.zip, .tar, etc.) containing your solution in an email.

In your submission email, please include an honest estimate of the total time you worked
on your solution. If you run out of time before you're completely satisfied with 
your solution, that's okay! Keep a list of things you wanted to finish or improve, 
and we'll discuss them together during the solution review.

## Development

### Start

```shell
./start.sh
```

### View

Frontend should open automatically: 
[http://localhost:3000/](http://localhost:3000/)

Interactive API documentation should be available at: 
[http://localhost:8000/docs/](http://localhost:8000/docs/) 

### Edit

Edit the `.ts` files in `/backend` and the `.tsx` files in `/frontend`.
Both servers will auto-reload when files are saved.

Project configurations are included for VSCode and PyCharm/WebStorm 
to help get you set up quickly, but use any editor you prefer.

### Database

The included SQLite database has one table: `patients`. 
The `patients` table has the following schema: 

```sql
CREATE TABLE IF NOT EXISTS patients (
    id INTEGER PRIMARY KEY,
    mrn TEXT NOT NULL,
    name TEXT NOT NULL,
    dob TEXT NOT NULL,
    starred INTEGER NOT NULL
)
```

Since SQLite does not have a dedicated `BOOLEAN` type, the "starred" status
is stored as an `INTEGER`: 0 = false = not starred, 1 = true = starred. 
Feel free to use this column to persist the "starred" state of a patient.

### Helpful Links / Hints

- [TypeScript](https://www.typescriptlang.org/docs/handbook/intro.html)
    - (opt-out of type-checking in an "emergency" with `any`)
- [Node: express](https://expressjs.com/en/api.html)
    - (feel free to use other web frameworks)
- [Node: better-sqlite3](https://github.com/JoshuaWise/better-sqlite3/blob/master/docs/api.md)
    - (feel free to use other sqlite drivers)
- [React: hooks](https://reactjs.org/docs/hooks-intro.html)
    - (feel free to use any other state management methods)
- [React: material-ui](https://material-ui.com/components/tables/)
    - (feel free to use any other UI libraries)

