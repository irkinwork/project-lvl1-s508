install:
	npm install
even:
	npx babel-node src/bin/brain-even.js
calc:
	npx babel-node src/bin/brain-calc.js
publish:
	npm publish --dry-run
lint:
	npx eslint src
build:
	npm run build