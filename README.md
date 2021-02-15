# scope-string
create a random string suitable for css scoping eg. xvb0qh3

### usage

`npm i scope-string`

or 

`npm i -D scope-string`

```js
const scope = require('scope-string');
scope();
// xvb0qh3
```

with options

```js
const scope = require('scope-string');
scope({
	length: 10,			// default 7
	initial: "css-"		// default "x"
});
// css-rj39cq
```

###### notes:
1. The initial character(s) are included in the total string length.
2. The initial character (default "x") is needed because otherwise the first character might be a number, which would not be a valid css selector id or class.
3. At the default length of 7 (one initial character and 6 random) there are 36^6 combinations (approx 2.2 billion).

### Example of real world use

Since ~css~ everything in js is all the rage these days, you could quite easily configure your build to do something like this...


```js
const scope = require('scope-string');

const generateComponent = () => {
	const randomString = scope();
	return {
		html: `
			<section class="${randomString}">
				<div class="hero">...</div>
				<footer>
					<p>...</p>
					<span id="${randomString}-year"></span>
				</footer>
			</section>		
		`,		
		css: `
			.${randomString} .hero{
				display: flex;
				etc. etc;
			}
			.${randomString} footer{
				background: "red";
				margin: 20px;
			}
		`,
		js: `
			document.getElementById("${randomString}-year").textContent = new Date().getFullYear();
		`
	}
}
```

This is a very barebones simple example of how a scoping string could be used, but you probably get the general idea.