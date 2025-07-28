# User Registration Endpoint Documentation

## Endpoint

`POST /users/register`

---

## Description

This endpoint allows a new user to register.  
It validates the input, checks if the user already exists, hashes the password, creates the user, and returns a JWT token along with the user object.

---

## Required Data

Send a JSON object in the request body with the following structure:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "johndoe@example.com",
  "password": "yourPassword123"
}
```

- `fullname` (object): Required. Must include:
  - `firstname` (string): Required.
  - `lastname` (string): Required.
- `email` (string): Required. Must be a valid email address.
- `password` (string): Required.

---

## Status Codes and Responses

### 201 Created

Registration successful.

```json
{
  "token": "<jwt_token>",
  "user": {
    "_id": "user_id",
    "firstname": "John",
    "lastname": "Doe",
    "email": "johndoe@example.com"
    // ...other user fields
  }
}
```

---

### 400 Bad Request

Validation failed or user already exists.

**Validation Error Example:**
```json
{
  "errors": [
    {
      "msg": "Error message",
      "param": "field",
      "location": "body"
    }
  ]
}
```

**User Exists Example:**
```json
{
  "message": "User already exist"
}
```

---

## Example Request

```bash
curl -X POST http://localhost:3000/users/register \
-H "Content-Type: application/json" \
-d '{
  "fullname": { "firstname": "Jane", "lastname": "Smith" },
  "email": "janesmith@example.com",
  "password": "securePassword!"
}'
```