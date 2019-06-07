##GraphQL Api
![alt text](http://www.impacta.com.br/blog/wp-content/uploads/2018/03/GraphQL_arthurMoro.jpg)
A simple GraphQL API that retrieves users on a `user.json` file.

##Routes

You can try these routes:

1 - `http://localhost:3000/user?query={user(id:${id}){id,name,age,knowledge{language,frameworks}}}`

2 - `http://localhost:3000/user?query={users{id,name,age,knowledge{language,frameworks}}}`
