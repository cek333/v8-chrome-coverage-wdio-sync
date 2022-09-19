# V8 Chrome Coverage

Experimental project to test extracting code coverage statistics from the v8 engine in Chrome.

## How It Works

Tests are run using the wdio framework. Using the wdio lifecycle hooks as well as the `@wdio/devtools-service`, we `startPreciseCoverage` at the beginning of a test suite, and `takePreciseCoverage` when a test suite is completed. The coverage data is written to the `.v8-coverage` directory.

On test completion, a script (`scripts/mergeAndResolveUrls.js`) is run to convert the `http` urls in the coverage files into file paths. A single json file with the resolved paths are written to `coverage/tmp/coverage.json`.

Next the `c8` tool is used to generate an `lcov` report. The coverage results can be viewed at `coverage/lcov-report/index.html`.

## Notable Dependencies
* node v12 (but node versions < v16 should also work. This is a requirement of the `@wdio/sync` module.)
* chrome 104. If you're using a different version of chrome you'll have to install the chromedriver module matching your chrome version.

## To Run
`npm run ci`: This will run the test and generate the report. (Previous test reports and coverage data will be deleted!!!)
