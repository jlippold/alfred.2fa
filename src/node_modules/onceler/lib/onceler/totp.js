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

var util = require('util');
var OTP = require('./otp');

function TOTP(secret, digits, interval) {
    OTP.call(this, secret, digits);
    this.interval = interval || 30;
}

module.exports = TOTP;
util.inherits(TOTP, OTP);

function timeCode(x) {
    return Math.floor(x / this.interval);;
}

function now() {
    return this.at(Math.floor(new Date().getTime() / 1000));
}

function at(x) {
    return OTP.prototype.at.call(this, this.timeCode(x));
}

function verify(x) {
    return this.now() == x;
}

TOTP.prototype.at = at;
TOTP.prototype.now = now;
TOTP.prototype.timeCode = timeCode;
TOTP.prototype.verify = verify;
