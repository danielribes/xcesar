/**
* app.js 
* Playing with VueJS with a simple CESAR CIPHER
* @author daniel@danielribes.com
* 
* The MIT License (MIT)
*
* Copyright (c) 2016 Daniel Ribes
*
* Permission is hereby granted, free of charge, to any person obtaining a copy of this software 
* and associated documentation files (the "Software"), to deal in the Software without restriction, 
* including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
* and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, 
* subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all copies or substantial
* portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
* LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO
* EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
* IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR
* THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

new Vue({
	el: '#events',
	data: {
		message: '',
		cipherMessage: '',
		key: ''
	},
	ready: function() {
	
	},
	methods: {
		cipherMachine: function() {
			
			var total = 26;
			var firstCode = 65;
			var lastCode = 90;
			var jump = this.key.charCodeAt() - firstCode;
			var CipherConfig = { lastCode: lastCode,
								 jump: jump,
								 backJump: total - jump
								};

			var arrOfChars = this.message.split('');
			this.cipherMessage = arrOfChars.map(
				function (currentValue){	
				theChar = currentValue.toUpperCase().charCodeAt();
				if( theChar != 32 )
				{
					newCode = theChar + this.jump;
					if ( newCode > this.lastCode ) 
					{
						newCode = theChar - this.backJump;
					} 
					return String.fromCharCode(newCode);
				} else {
					return ' ';
				}
			}, CipherConfig).join('');
		}
	}
});