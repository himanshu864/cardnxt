# cardnxt

Cardnxt clone

# Installation for hosting locally

1. Clone repository
2. cd into frontend/ and backend/ separately and run `npm i`
3. Create a `.env` file inside the backend folder with following content

```
PORT=3000               # could be any port, just be sure to whitelist
URI=mongodb+srv://***   # your mongoDB URI
SECRET_KEY=***          # any random secret key
```

4. cd into backend/ and run `npm run dev`.

```
server running successfully on PORT: 3000
Pinged your deployment. You successfully connected to MongoDB!
```

If this shows up. Everything is working correctly

5. cd into frontend/ and run `npm run dev` and open Local homepage by pressing `o`

## Routers

1. `/` : landing page
2. `/admin/login` : Login page for Admin

# Testing

Currently for admin page

```
Username: admin
Passowrd: ankit
```

But it's showing CORS error.

100$ to anyone who can fix that
