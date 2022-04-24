# RESTAURANTS CHAINS

---

> ## method: GET
>
> ## endpoint: `/restaurantsChains`

Description: Get a list of all restaurants chains.
Permission needed: not needed.

Example response:

```
{
    "success": true,
    "data": [
        {
            "_id": "6262ee8cd9b14a1ff358cf5f",
            "name": "Buon Appetito",
            "manager": "Ania",
            "image": "logoImage-1650650764387.png",
            "__v": 0
        },
        {
            "_id": "6262eeb5d9b14a1ff358cf61",
            "name": "Sushi Time",
            "manager": "Adam",
            "image": "logoImage-1650650833109.png",
            "__v": 0
        },
        {
            "_id": "6262ef7045c9914b6232a93a",
            "name": "Chef",
            "manager": "Kamila",
            "image": "logoImage-1650650992777.jpeg",
            "__v": 0
        }
    ]
}
```

---

> ## method: GET
>
> ## endpoint: `/restaurantsChains/:id`

Description: Get restaurant chain by id.
Permission needed: not needed.

Example response:

```
{
    "success": true,
    "data": {
        "chain": {
            "_id": "6262ee8cd9b14a1ff358cf5f",
            "name": "Buon Appetito",
            "manager": "Ania",
            "image": "logoImage-1650650764387.png",
            "__v": 0
        }
    }
}
```

---

> ## method: POST
>
> ## endpoint: `/restaurantsChains`

Description: Add a restaurant chain.
Permission needed: not needed.

Example response:

```
{
    "success": true,
    "data": {
        "_id": "62658cb878c3abbd270340de",
        "name": "Vege",
        "manager": "Olga",
        "image": "logoImage-1650822328358.png",
        "__v": 0
    }
}
```

---

> ## method: PUT
>
> ## endpoint: `/restaurantsChains/:id`

Description: Update a restaurant chain.
Permission needed: not needed.

Example response:

```
{
    "success": true,
    "data": {
        "chain": {
            "_id": "6262ef7045c9914b6232a93a",
            "name": "Star Chef",
            "manager": "Kamil",
            "image": "logoImage-1650650992777.jpeg",
            "__v": 0
        }
    }
}
```

---

> ## method: DELETE
>
> ## endpoint: `/restaurantsChains/:id`

Description: Delete a restaurant chain by id.
Permission needed: not needed.

Example response:

```
{}
```
