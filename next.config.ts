// next.config.js или next.config.mjs
const withNextIntl = require('next-intl/plugin')(
    './src/i18n/request.ts' // Путь к правильному файлу
);

module.exports = withNextIntl({
    // ваши настройки
});