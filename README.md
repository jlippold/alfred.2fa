#### What is this?

This is an alfred workflow that adds one time passwords (aka 2 factor auth) to Alfred.app

When you execute the app, it automatically copies the one time password to the clipboard.

So far tested with `OpenVPN` & `Github`

![pic](http://i.imgur.com/R9BFGgh.png)

![pic](http://i.imgur.com/wlkx0OR.png)

### How's it work

1. Install Node http://nodejs.org/download/
2. Install this workflow by clicking this https://github.com/jlippold/alfred.2fa/raw/master/2FA.alfredworkflow, then opening in finder.
3. Setup 2FA with some service (github, openVPN). Scan the barcode into your mobile app (authy, google authenticator) and note the secret key.
4. input the secret key into alfred.app `2f add someService secretKey`
5. call it anytime to get the one time password `2f someService`

### Usage

Add new

```
format:
2f add ServerName Secret

example:
2f add AmazonAWS ASDJKS34DHUY12
```

Get One Time Password

```
format:
2f ServerName

example:
2f AmazonAWS
```

Remove

```
format:
2f delete ServerName

example:
2f delete AmazonAWS
```


### Credits 

Alfred Feedback: https://github.com/lrrfantasy/alfred-feedback-xml-generation

OPT generation: https://www.npmjs.org/package/onceler

Icons: http://fortawesome.github.io/Font-Awesome/
