const JAR = require('selenium-server-standalone-jar').path;
const CROMEDRIVER = require('chromedriver').path;
const GECKODRIVER = require('geckodriver').path;

module.exports = {
  src_folders: ["tests"],
  output_folder: "reports",
  custom_commands_path: "",
  page_objects_path: "",
  custom_assertions_path: "",
  globals_path: "",
  live_output: true,
  parallel_process_delay: 10,
  disable_colors: false,
  test_workers: false,
  test_runner: {
    type: "mocha",
    options: {
      ui: "bdd",
      reporter: "list"
    }
  },
  retry_assertion_timeout: 2000,

  selenium: {
    start_process: true,
    server_path: JAR,
    log_path: "reports",
    host: "127.0.0.1",
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': CROMEDRIVER,
      'webdriver.firefox.profile': GECKODRIVER
    }
  },

  test_settings: {
    mocha_tests: {
      test_runner: {
        type: "mocha",
        options: {
          ui: "tdd",
          reporter: "list"
        }
      }
    },
    default: {
      launch_url: "http://localhost",
      selenium_host: "127.0.0.1",
      selenium_port: 4444,
      silent: true,
      disable_colors: false,
      screenshots: {
        enabled: false,
        path: ""
      },
      desiredCapabilities: {
        browserName: "firefox",
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    },

    chrome: {
      desiredCapabilities: {
        browserName: "chrome",
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: ["start-fullscreen"]
        }
      }
    }
  }
};


