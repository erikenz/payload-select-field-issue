# Payload Select Field Issue

## Reproduction steps

1. Run `http://localhost:3000/my-route` or `http://localhost:3000/api/test?select[productType]=true&select[productTypeRadio]=true`
2. The response has a value for `productTypeRadio`, but `productType` returns `undefined`.
