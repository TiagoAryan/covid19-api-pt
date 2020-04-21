<div>
        <h1> Covid19 API PT Wapper </h1>
    <strong> <i>An API wrapper to get information about the Covid19 from Portugal.</i></strong>
    <br>
> wraps open API [DSSG Portugal / VOST REST API by dssg-pt](https://github.com/dssg-pt/Docker_COVID_API)
<hr>
</div>

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
.status();
```

### All

```js
.all();
```

### Last Update

```js
.last(); // for ALL.
```

### Get Update

```js
.get('date'); // For Specific Date
```

```js
.get('date1', 'date2'); // For Specific Range of Dates
```

Thanks!
