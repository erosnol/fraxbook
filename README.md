# Fraxbook 

This is a simple social media app. Users can make, read, update, and delete a status.

Home Page layout 




Flow Chart for pages and components. (todos = status/statuses is this case)

[Flow chart](https://github.com/erosnol/fraxbook/tree/main/frax-book/frontend/components-tree.png)

### Demo

https://fraxbook.netlify.app

## Approach

First, coded a coin tracker API in separate repo and made sure it worked using AXIOS. Then, created a new MONGODB database and recreated a backend for the new front-end React app. Following previous repos as guidance, only changing the names and adding and connecting the API.


### Story

This is a Facebook clone, with the Frax.Finance community in mind. Frax is the first partially backed by collateral and partially algorithmic stable coin. More information on https://frax.finance/


### Unsolved Problems

- Bootstrap5 styling — had trouble learning and figuring out a new styling language in such small time period. 
- AXIOS API GET errors after netifly.app launch — got errors after website launched on netifly and editing the GET URL. Full CRUD was working correctly when before, on localhost. Still debugging.
- Styling was the only big issue, unfortuanely 


### Future development 

- Fix axios GET errors 
- Restyle components
- Add comment & like feautures to status component
- Add a Profile page that renders user information 
- Implement Frax analytics APIs or an introduction course to Frax.Finace
- Lastly, gather an audience 


## Technologies Used

### Front-end

- React
- Bootstrap@5
- Particles — https://particles.js.org/

### Back-end

- Node.js
- Express
- MONGODB
 
 link to backend repo https://github.com/erosnol/fb-backend


### Dependencies

|                    | Version |
| ------------------ | ------- |
| bcrypt             | 5.0.1   |
| cors               | 2.8.5   |
| dotenv             | 16.0.1  |
| express            | 4.18.1  |
| express-validator  | 6.14.1  |
| helmet             | 5.1.0   |
| jsonwebtoken       | 8.5.1   |
| mongoose           | 6.3.8   |
| morgan             | 1.10.0  |

### API Reference 
- CoinGecko Crypto coin tracker — https://www.coingecko.com/en/api/documentation
- Youtube tutorial and repo used to build coin API https://github.com/Sanjeev-Thiyagarajan/cryptocurrency-tracker https://www.youtube.com/watch?v=3m-3qnEXIUk&t=8376s

| GET coins                     | 
| ------------------------------|             
| /coins/markets                |
| /coins/list                   |
| /coins/{id}/market_chart      |
| /coins/{id}/market_chart/range|

