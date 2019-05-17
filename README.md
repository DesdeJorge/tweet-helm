# tweet-helm

![](https://github.com/DesdeJorge/tweet-helm/blob/master/public/images/banner.png)

### Features

- Find and show tweets for a specific username, using Standar Search API.
- Auto-detect link and mentions in tweets and show that as links 
- Compatible with all major browsers (IE8+).

### Install Dependencies

`$ npm install express body-parser hbs twit --save `

### Run the project

`$ node index`

### Custom Configuration

If you need change the config of twitter app, you need change the config.js:

```javascript
module.exports = {
  consumer_key:         '<YOUR_KEY>',
  consumer_secret:      '<YOUR_SECRET>',
  access_token:         '<YOUR_ACT>',
  access_token_secret:  '<YOUR_ACTS>'
}
```
You can get the previous info creating your own twitter app in the next link <https://developer.twitter.com/en/apps>

### Test the project

Access to `<link>` : <http://localhost:8000>

You will see something like this:

![](https://github.com/DesdeJorge/tweet-helm/blob/master/public/images/example.png)
