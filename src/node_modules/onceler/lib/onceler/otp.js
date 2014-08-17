/*                                                                              
Copyright (c) 2011, Chris Umbel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights 
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

var crypto = require('crypto');
var base32 = require('thirty-two');

function longToBytes(x) {
    var bytes = new Buffer([0, 0, 0, 0, 0, 0, 0, 0]);

    for(var i = 7; i > 0; --i) {
        bytes[i] = x & 0xff;
        x = x >> 8;
    }

    return bytes.toString("binary");
}

function at(x) {
    var hmacEngine = crypto.createHmac('sha1', this.secret);
    hmacEngine.update(longToBytes(x));
    var hmac = new Buffer(hmacEngine.digest('binary'), 'binary');
    var offset = hmac[19] & 0xf;
    var code = (hmac[offset] & 0x7f) << 24 |
	(hmac[offset + 1] & 0xff) << 16 |
	(hmac[offset + 2] & 0xff) << 8 |
	(hmac[offset + 3] & 0xff);

    return code % Math.pow(10, this.digits);
}

function OTP(secret, digits) {
    this.secret = base32.decode(secret);	
    this.digits = digits || 6;
}

function verify(x) {
    return false;
}

OTP.longToBytes = longToBytes;
OTP.prototype.at = at;
OTP.prototype.verify = verify;

module.exports = OTP;
