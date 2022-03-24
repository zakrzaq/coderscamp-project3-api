# Authentication

---

> ## method: POST
>
> ## endpoint: `/user/register`

Description: Register an user.
Permission needed: no needed.

Example request body:

```
{
    "username": "UsernameDemo",
    "name": "UserNameDemo",
    "surname": "UserSurnameDemo",
    "email": "userdemo@test.com",
    "password": "12345678",
    "repeat_password": "12345678"
}
```

Example response:

Response status: 200 OK:

```
{
    "user": "623c93f4afaccd0995de3b8c"
}
```

---

> ## method: POST
>
> ## endpoint: `/user/login`

Description: User log in.
Permission needed: no needed.

Example response:

Response status: 200 OK:

```
{
}
```

---

> ## method: POST
>
> ## endpoint: `/user/token`

Description: Operation to refresh access token.
Permission needed: no needed.

Example response:

Response status: 200 OK:

```
{
}
```

---

> ## method: POST
>
> ## endpoint: `/user/logout`

Description: Operation to logout an user.
Permission needed: no needed.

Example response:

Response status: 201 OK:

```
{}
```
