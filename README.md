#### What is this?

This is an alfred workflow that adds one time passwords (aka 2 factor auth) to Alfred

When you execute the app, it automatically copies the OTP to the clipboard.

So far only tested with `OpenVPN` 




### How's it work

1. Install Node http://nodejs.org/download/
2. Install this workflow. Save this and open it: https://github.com/jlippold/alfred.2fa/raw/master/2FA.alfredworkflow

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
2f remove ServerName

example:
2f remove AmazonAWS
```


### Credits 

Alfred Feedback: https://github.com/lrrfantasy/alfred-feedback-xml-generation

OPT generation: https://www.npmjs.org/package/onceler

Icons: http://fortawesome.github.io/Font-Awesome/