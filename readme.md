## GraphQL Api
![alt text](http://blog.justdigital.com.br/wp-content/uploads/2018/07/1_EOMP0V69RZ5xChG5pRoFyA.png)
A simple GraphQL API that retrieves users on a `user.json` file.

## Routes

You can try these routes:

1 - `http://localhost:3000/user?query={user(id:${id}){id,name,age,knowledge{language,frameworks}}}`

2 - `http://localhost:3000/user?query={users{id,name,age,knowledge{language,frameworks}}}`
