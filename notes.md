# Running on Azure

So looks like we can get this working IF we do NOT set

```
"type": "module"
```

in the `package.json` file. We can still use es modules, we just need
to use `.mjs` or `.mts`. 

And somehow we are able to import an es module like `p-limit` and still
have the build succeed.