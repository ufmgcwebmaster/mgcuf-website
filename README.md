# UF MGC Website

A website created using Next.js for the Multicultural Greek Council at the University of Florida.

## Updation

### Basic Info

- Welcome! If you're reading this, you're probably the new webmaster.
- Clone the repo to make changes. Deploy on Vercel.
- If you accidentally break something, just copy code from the repo this was forked from.

### Executive Board and Directors

- Add the relevant pictures to `public/images/eboard` and `public/images/directors` (must be `.jpg`, `.jpeg`, or `.png`). 
- Head to `src/pages/our-team.js`.
- Edit the variable `year` as needed.
- Edit the nested lists `directorData` and `eboardData` using the following format:
```
[
	file name (with proper extension!),
	full name,
	pronouns,
	position,
	email
]
```

### Organizations

- This part is pretty similar to the previous section.
- Add the relevant pictures to `public/images/orgs` (must be `.jpg`, `.jpeg`, or `.png`). 
- Head to `src/pages/organizations.js`.
- Edit the nested list `orgData` using the following format:
```
[
	file name (with proper extension!),
	organization name,
	chapter,
	founding year,
	pillars,
	motto,
	colors,
	instagram handle,
	website
]
```
- Note: `founding year` and every parameter after is optional. If not provided, enter an empty string (`""`).

### Gallery

- Simply add the pictures to `public/images/gallery`

#

_Created by Rithik Raja of Beta Chi Theta, FA22._