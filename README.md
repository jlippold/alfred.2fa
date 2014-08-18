#### What is this?

This is an alfred workflow that allows you to retrieve the one time password for sites that use two factor authentication. You set up the sites in alfred.app, then you can pull the one time password for the site at any time with alfred. The password is automatically copied to the clipboard. This can and should be used in conjunction with another 2fa method.

So far tested with `OpenVPN`, `Github`, `Amazon`

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
