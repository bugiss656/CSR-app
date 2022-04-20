# CSR project
## Description
CSR application for displaying list of countries and single country details. Data is fetched from GraphQL API: [https://countries.trevorblades.com](https://countries.trevorblades.com).

**Tech stack:** 
 - React 
 - Typescript
 - Apollo Client
 - React Router
 - react-select
 - create-react-app

## Details
Application has two routes:

 - `/` - fetching list of countries where single country is displayed as a card with country name and code. List is filterable by continent and search text.

 - `/:code` - fetching single country details: country name, code, emoji and languages. 