# 📚 User Registration & Login API Documentation

---

## 📌 User Registration

### Endpoint

```
POST /users/register
```

### Description

Register a new user in the system.  
Validates input, checks for existing users, hashes the password, creates the user, and returns a JWT token along with the user object.

### Request Body

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

- **fullname** (object, required)
  - **firstname** (string, required): At least 3 characters
  - **lastname** (string, required)
- **email** (string, required): Must be a valid email address
- **password** (string, required): At least 6 characters

### Success Response

**Status Code:** `201 Created`

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

### Error Responses

**Status Code:** `400 Bad Request`

- Validation Error:
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
- User Already Exists:
    ```json
    {
      "message": "User already exist"
    }
    ```

---

## 📌 User Login

### Endpoint

```
POST /users/login
```

### Description

Authenticate an existing user.  
Validates input, checks credentials, and returns a JWT token along with user information if successful.

### Request Body

```json
{
  "email": "johndoe@example.com",
  "password": "yourPassword123"
}
```

- **email** (string, required): Must be a valid email address
- **password** (string, required): At least 6 characters

### Success Response

**Status Code:** `200 OK`

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

### Error Responses

**Status Code:** `400 Bad Request`

- Validation Error:
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

**Status Code:** `401 Unauthorized`

- Invalid Credentials:
    ```json
    {
      "message": "Invalid email or password"
    }
    ```

---

## 📌 Get User Profile

### Endpoint

```
GET /users/profile
```

### Description

Retrieve the authenticated user's profile information.  
Requires a valid JWT token in the `Authorization` header.

### Headers

- `Authorization: Bearer <jwt_token>`

### Success Response

**Status Code:** `200 OK`

```json
{
  "_id": "user_id",
  "firstname": "John",
  "lastname": "Doe",
  "email": "johndoe@example.com"
  // ...other user fields
}
```

### Error Responses

**Status Code:** `401 Unauthorized`

```json
{
  "message": "Not authorized, token failed"
}
```

---

## 📌 Logout User

### Endpoint

```
GET /users/logout
```

### Description

Logs out the authenticated user by invalidating the JWT token.  
Requires a valid JWT token in the `Authorization` header.

### Headers

- `Authorization: Bearer <jwt_token>`

### Success Response

**Status Code:** `200 OK`

```json
{
  "message": "Logout successful"
}
```

### Error Responses

**Status Code:** `401 Unauthorized`

```json
{
  "message": "Not authorized, token failed"
}
```

---

## 📌 Captain Registration

### Endpoint

```
POST /captains/register
```

### Description

Register a new captain in the system.  
Validates input, checks for required fields, hashes the password, creates the captain, and returns the captain object (and optionally a JWT token if implemented).

### Request Body

```json
{
  "fullname": {
    "firstname": "Alex",
    "lastname": "Smith"
  },
  "email": "alexsmith@example.com",
  "password": "yourPassword123",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

- **fullname** (object, required)
  - **firstname** (string, required): At least 3 characters
  - **lastname** (string, required): At least 3 characters
- **email** (string, required): Must be a valid email address
- **password** (string, required): At least 6 characters
- **vehicle** (object, required)
  - **color** (string, required): At least 3 characters
  - **plate** (string, required): At least 3 characters
  - **capacity** (integer, required): Minimum value 1
  - **vehicleType** (string, required): Must be one of `"car"`, `"motorcycle"`, `"auto"`

### Success Response

**Status Code:** `201 Created`

```json
{
  "_id": "captain_id",
  "fullname": {
    "firstname": "Alex",
    "lastname": "Smith"
  },
  "email": "alexsmith@example.com",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
  // ...other captain fields
}
```

### Error Responses

**Status Code:** `400 Bad Request`

- Validation Error:
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

**Status Code:** `409 Conflict`

- Captain Already Exists:
    ```json
    {
      "message": "Captain already exist"
    }
    ```

---

## 🧑‍💻 Example Requests

### Login

```bash
curl -X POST http://localhost:3000/users/login \
-H "Content-Type: application/json" \
-d '{
  "email": "johndoe@example.com",
  "password": "yourPassword123"
}'
```

### Get Profile

```bash
curl -X GET http://localhost:3000/users/profile \
-H "Authorization: Bearer <jwt_token>"
```

### Logout

```bash
curl -X GET http://localhost:3000/users/logout \
-H "Authorization: Bearer <jwt_token>"
```

### Captain Registration

```bash
curl -X POST http://localhost:3000/captains/register \
-H "Content-Type: application/json" \
-d '{
  "fullname": { "firstname": "Alex", "lastname": "Smith" },
  "email": "alexsmith@example.com",
  "password": "yourPassword123",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}'
```