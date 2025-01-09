const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-TW'],
  },
  localePath: path.resolve('./public/locales'),
};
