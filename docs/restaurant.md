# RESTAURANTS

---

> ## method: GET
>
> ## endpoint: `/restaurants`

Description: Get a list of all restaurants.
Permission needed: not needed.

Example response:

```
{
    "success": true,
    "data": [
        {
            "address": {
                "street": "Krakowska",
                "number": 5,
                "post_code": "04-218",
                "city": "Kraków"
            },
            "_id": "621fec95359e112aee795d52",
            "name": "Oke Poke",
            "phone": 785123653,
            "__v": 0
        },
        {
            "address": {
                "street": "Opolska",
                "number": 12,
                "post_code": "40-500",
                "city": "Wrocław"
            },
            "_id": "621fecdb359e112aee795d55",
            "name": "Margarita",
            "phone": 7853441234,
            "__v": 0
        }
}
```

---

> ## method: GET
>
> ## endpoint: `/restaurants/:id`

Description: Get restaurant by id.
Permission needed: not needed.

Example response:

```
{
    "success": true,
    "data": [
        {
            "address": {
                "street": "Krakowska",
                "number": 5,
                "post_code": "04-218",
                "city": "Kraków"
            },
            "_id": "621fec95359e112aee795d52",
            "name": "Oke Poke",
            "phone": 785123653,
            "__v": 0
        },
}
```

---

> ## method: POST
>
> ## endpoint: `/restaurants`

Description: Add a restaurant.
Permission needed: Admin.

Example response:

```
{
    "success": true,
    "data": [
        {
            "address": {
                "street": "Krakowska",
                "number": 5,
                "post_code": "04-218",
                "city": "Kraków"
            },
            "_id": "621fec95359e112aee795d52",
            "name": "Oke Poke",
            "phone": 785123653,
            "__v": 0
        },
}
```

---

> ## method: PUT
>
> ## endpoint: `/restaurant/:id`

Description: Update a restaurant.
Permission needed: Admin.

Example response:

```
{
    "success": true,
    "data": [
        {
            "address": {
                "street": "Krakowska 2",
                "number": 5,
                "post_code": "04-218",
                "city": "Kraków"
            },
            "_id": "621fec95359e112aee795d52",
            "name": "Oke Poke",
            "phone": 785123653,
            "__v": 0
        },
}
```

---

> ## method: DELETE
>
> ## endpoint: `/restaurant/:id`

Description: Delete a restaurant by id.
Permission needed: Admin.

Example response:

```
{}
```

> ## method: GET
>
> ## endpoint: `/restaurants/restaurantChain/:restaurantChainId`

Description: Get list of restaurants within restaurant chain.
Permission needed: not needed.

Example response:

```
{
    "success": true,
    "data": [
        {
            "address": {
                "street": "Krakowska",
                "number": 5,
                "post_code": "04-218",
                "city": "Kraków"
            },
            "_id": "621fec95359e112aee795d52",
            "name": "Oke Poke",
            "phone": 785123653,
            "__v": 0
        },
        {
            "address": {
                "street": "Opolska",
                "number": 12,
                "post_code": "40-500",
                "city": "Wrocław"
            },
            "_id": "621fecdb359e112aee795d55",
            "name": "Margarita",
            "phone": 7853441234,
            "__v": 0
        }
}
```
