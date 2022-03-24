# User

---

> ## method: GET
>
> ## endpoint: `/user`

Description: Get a list of all users.
Permission needed: Admin.

Example response:

```
{
    "success": true,
    "data": [
        {
            "_id": "622646957ff87750ae9a2dde",
            "username": "adminTest",
            "name": "adminName",
            "surname": "adminSurname",
            "email": "admin@test.com",
            "password": "[hashedPass]",
            "role": "admin",
            "date": "2022-03-07T17:53:25.569Z",
            "__v": 0
        },
        {
            "_id": "622646c6588259c5de432d1d",
            "username": "ownerTest",
            "name": "ownerName",
            "surname": "ownerSurname",
            "email": "owner@test.com",
            "password": "[hashedPass]",
            "role": "owner",
            "date": "2022-03-07T17:54:14.712Z",
            "__v": 0
        }
}
```

---

> ## method: GET
>
> ## endpoint: `/user/:id`

Description: Get user by id.
Permission needed: Admin.

Example response:

```
{
    "success": true,
    "data": {
        "user": {
            "_id": "622646c6588259c5de432d1d",
            "username": "ownerTest",
            "name": "ownerName",
            "surname": "ownerSurname",
            "email": "owner@test.com",
            "password": "[hashedPass]",
            "role": "owner",
            "date": "2022-03-07T17:54:14.712Z",
            "__v": 0
        }
    }
}
```

---

> ## method: PUT
>
> ## endpoint: `/user/:id`

Description: Get user by id.
Permission needed: logged in user.

Example response:

```
{
    "success": true,
    "data": {
        "user": {
            "_id": "622646c6588259c5de432d1d",
            "username": "ownerTest",
            "name": "ownerNameNew",
            "surname": "ownerSurname",
            "email": "owner@test.com",
            "password": "[hashedPass]",
            "role": "owner",
            "date": "2022-03-07T17:54:14.712Z",
            "__v": 0
        }
    }
}
```

---

> ## method: DELETE
>
> ## endpoint: `/user/:id`

Description: Delete user by id.
Permission needed: logged in user.

Example response:

```
{}
```
