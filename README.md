## In order to use the TMDB_API_KEY environment variable

- Get an API key from www.themoviedb.org and save it as TMDB_API_KEY in local.env
- Rename local.env to .env

## Run docker compose for development

- docker compose -f docker-compose-dev.yml up --build

## Run docker compose for production

- docker compose up --build
