
# The Tor Project

Client of an application which is able to get IPs list from two different sources, include an IP to be banned on the database, and get the same IPs list excluding the banned IPs

# Developper

- https://github.com/giualz
- https://br.linkedin.com/in/giulia-alzuguir
- https://www.instagram.com/giualz/
  
# Deployment



  
## Endpoints

```bash
(MAIN) localhost:3333/
```

```bash
(GET) /torlist/full
```

```bash
(POST) /torlist/addban
```

```bash
(GET) /torlist/bansout
```
## Run Locally

Clone the project

```bash
  git clone https://github.com/giualz/proof-project-front
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

  
## Documentation

[Documentation](https://linktodocumentation)

  
## Tech Stack

**Client:** React, Reactstrap, Bootstrap, Styled-components, Dotenv  and Axios

**Server:** Node, Express, Axios, Cors, Dotenv, Nodemon, PostgreSQL and Sequelize

  