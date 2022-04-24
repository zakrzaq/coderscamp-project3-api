# RESERVATIONS

---

> ## method: GET
>
> ## endpoint: `/reservations`

Description: Get a list of all reservations.
Permission needed: not needed.

Example response:

```
{
    "success": true,
    "data": [
        {
            "booking": {
                "date": "2022-05-20",
                "hour": "19:00"
            },
            "customer": {
                "name": "Ania",
                "lastName": "K.",
                "phone": "123456789"
            },
            "_id": "6261927b9e00d8de98f0117d",
            "__v": 0
        },
        {
            "booking": {
                "date": "2022-05-17",
                "hour": "15:20"
            },
            "customer": {
                "name": "Weronika",
                "lastName": "P.",
                "phone": "987654321"
            },
            "_id": "626193069e00d8de98f01187",
            "__v": 0
        }
    ]
}
```

---

> ## method: GET
>
> ## endpoint: `/reservations/:id`

Description: Get reservations by id.
Permission needed: not needed.

Example response:

```
{
    "success": true,
    "data": {
        "reservation": {
            "booking": {
                "date": "2022-05-20",
                "hour": "19:00"
            },
            "customer": {
                "name": "Ania",
                "lastName": "K.",
                "phone": "123456789"
            },
            "_id": "6261927b9e00d8de98f0117d",
            "__v": 0
        }
    }
}
```

---

> ## method: POST
>
> ## endpoint: `/reservations`

Description: Add a reservation.
Permission needed: not needed.

Example response:

```
{
    "success": true,
    "data": {
        "_id": "6265909de1ac380db43d2fe3",
        "booking": {
            "date": "2022-05-31",
            "hour": "21:00"
        },
        "customer": {
            "name": "Tomek",
            "lastName": "B.",
            "phone": "546987321"
        },
        "__v": 0
    }
}
```

---

> ## method: PUT
>
> ## endpoint: `/reservations/:id`

Description: Update a reservation.
Permission needed: not needed.

Example response:

```
{
    "success": true,
    "data": {
        "reservation": {
            "booking": {
                "date": "2022-05-17",
                "hour": "15:20"
            },
            "customer": {
                "name": "Marta",
                "lastName": "G.",
                "phone": "987654321"
            },
            "_id": "626193069e00d8de98f01187",
            "__v": 0
        }
    }
}
```

---

> ## method: DELETE
>
> ## endpoint: `/reservations/:id`

Description: Delete a reservations by id.
Permission needed: not needed.

Example response:

```
{}
```
