nightwatch_config = {
    selenium : {
      "start_process" : false,
      "host" : "hub-cloud.browserstack.com",
      "port" : 80
    },

    test_settings: {
      default: {
        desiredCapabilities: {
          'browserstack.user': 'Valentin Bonamy',
          'browserstack.key': 'yAPbfqqtpsuvQ9ruQr9U',
          'browser': 'chrome',
          'name': 'Bstack-[Nightwatch] Test'
        }
      }
    }
  };

  // Code to copy seleniumhost/port into test settings
  for(var i in nightwatch_config.test_settings){
    var config = nightwatch_config.test_settings[i];
    config['selenium_host'] = nightwatch_config.selenium.host;
    config['selenium_port'] = nightwatch_config.selenium.port;
  }

  module.exports = nightwatch_config;
