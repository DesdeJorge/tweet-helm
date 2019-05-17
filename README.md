# tweet-helm

![](https://github.com/DesdeJorge/tweet-helm/blob/master/public/images/banner.png)

### Features

- Find and show tweets for a specific username, using Standar Search API.
- Auto-detect link and mentions in tweets and show that as links 
- Delete tweets one by one.
- Compatible with all major browsers (IE8+).

### Install Dependencies

`$ npm install express body-parser hbs twit --save `

### Run the project

`$ node index`

### Add Configuration

In config.js file you need add the following data:

```javascript
module.exports = {
  consumer_key:         '<YOUR_KEY>',
  consumer_secret:      '<YOUR_SECRET>',
  access_token:         '<YOUR_ACT>',
  access_token_secret:  '<YOUR_ACTS>'
}
```
You can get the prev info in the next link <https://developer.twitter.com/en/apps>

### Test the project

Access to `<link>` : <http://localhost:8000>
