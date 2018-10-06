MOCHA  					= ./node_modules/.bin/mocha
MOCHA_PHANTOMJS = ./node_modules/.bin/mocha-phantomjs
SUPERVISOR			= ./node_modules/.bin/supervisor

MOCHA_FLAGS = \
	--reporter spec

PHANTOMJS_FLAGS = \
	--debug=yes

SUPERVISOR_FLAGS = \
	--watch etc,lib		\
	--extensions js,json

boot:
	$(SUPERVISOR) $(SUPERVISOR_FLAGS) lib

test: \
	test-lib \
	test-bin \
	test-app

test-lib:
	$(MOCHA) $(MOCHA_FLAGS) \
		opt/test/lib/static	\
		opt/test/lib/routes

test-bin:
	$(MOCHA) $(MOCHA_FLAGS) \
		opt/test/bin/models

test-app: test-app-pre
	$(MOCHA_PHANTOMJS) $(MOCHA_FLAGS) \
		opt/test/app/index.html

test-app-pre:
	@cmd/engine build opt/test/app/index.js > opt/test/app/build.js

data-create:
	cmd/models create product --file opt/models/product

data-remove:
	cmd/models remove order
	cmd/models remove product

.PHONY: test
