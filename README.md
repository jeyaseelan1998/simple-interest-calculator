# Simple Interest Calculator

Using this application you can get calculated the Simple Interest by providing Principal, interest rate (in %) and Time (in years).

[Deployed Link](https://simple-interest-calculator-1998.netlify.app)

## Installation

```
git clone https://github.com/jeyaseelan1998/simple-interest-calculator.git

yarn install OR npm install

yarn dev OR npm run dev
```

that's it.

## API

url =`https://sic-backend-42en.onrender.com/calculate`

```
{
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
}
```

The body data should be,

```
example data object 
-------------------

{
    principal: "1500",
    time: "5",
    interest: "1.2"
}
```

Response will be like,

```
Success:

{
    "simpleInterest": 15
}

Failure:

{
    "error": "All fields are required"
}
```