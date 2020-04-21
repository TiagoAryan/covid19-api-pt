# Covid19 API PT Wapper

An API wrapper to get information about the Covid19 from Portugal.

> wraps open API [DSSG Portugal / VOST REST API by dssg-pt](https://github.com/dssg-pt/Docker_COVID_API)

## Installation

Npm:

```bash
npm i covid19-api-pt
```

Yarn:

```bash
yarn add covid19-api-pt
```

## Usage

JavaScript:

```js
const { CovidPT } = require("covid19-api-pt");

const track = new CovidPT();
```

TypeScript:

```ts
import { CovidPT } from "covid19-api-pt";

const track = new CovidPT();
```

## Methods

### Status

```js
.status(); // For State of the API
```

### All

```js
.all(); // For Full Dataset
```

### Last Update

```js
.last(); // For Last Updated Entry
```

### Get Update

```js
.get('date'); // For Specific Date
```

```js
.get('date1', 'date2'); // For Specific Range of Dates
```

Thanks!
