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

var TOTP = require('lib/onceler/totp');

describe('TOTP', function() {
    it('should get value at an index', function() {
	var totp = new TOTP('IFAUCQKCIJBEE===');
	expect(totp.at(650269)).toBe(465467);
    });
    
    it('should get value for now', function() {
	var totp = new TOTP('IFAUCQKCIJBEE===');
	expect(totp.now()).toBeGreaterThan(0);
    });

    it('should verify', function() {
	var totp = new TOTP('IFAUCQKCIJBEE===');
        var x = totp.now();
	expect(totp.verify(x)).toBeTruthy();
    });
    
    it('should get value at an index of a specified digit size', function() {
	var totp = new TOTP('IFAUCQKCIJBEE===', 8);
	expect(totp.at(650269)).toBe(9465467);
    });
    
});
