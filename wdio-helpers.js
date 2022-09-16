const fs     = require('fs');
const path   = require('path');
const url    = require('url');
const mkdirp = require('mkdirp');

const v8CoverageFolder = path.join(__dirname, '.v8-coverage');

const makeFolder = () => {
  if (!fs.existsSync(v8CoverageFolder)) {
    mkdirp.sync(v8CoverageFolder);
  }
};

/*
 * Various helpers for functionality common across our wdio configs
 */
module.exports = {

  startCoverage() {
    browser.cdp('Profiler', 'enable');

    /**
     * start test coverage profiler
     */
    browser.cdp('Profiler', 'startPreciseCoverage', {
      callCount : true,
      detailed  : true,
    });

    console.log('Coverage enabled');
  },

  dumpCoverage() {
    /**
     * capture test coverage
     */
    const c8coverage = browser.cdp('Profiler', 'takePreciseCoverage');
    if (c8coverage.result) {
      const coverage = c8coverage.result.filter((res) => res.url !== '')
      console.log(coverage)
    } else {
      console.log('*** NO COVERAGE DATA ***');
    }
    
    makeFolder();

    const filename = path.join(v8CoverageFolder, `coverage-${Date.now().toString()}.json`);
    //   const str = JSON.stringify(c8coverage, null, 2) + '\n'
    const str = JSON.stringify(c8coverage);
    fs.writeFileSync(filename, str, 'utf8');

    console.log(`writing coverage to ${filename}`);
    return browser.cdp('Profiler', 'stopPreciseCoverage');
  },

};
