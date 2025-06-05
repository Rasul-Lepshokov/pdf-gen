const https = require('https');

const url = 'https://fg-trondheim.marscloud.dev/pdf-page/giftcard/608be9c29984d900219cd4b5';

https.get(url, (res) => {
  const { statusCode } = res;
  const contentType = res.headers['content-type'];

  if (statusCode !== 200) {
    console.error(`❌ Ошибка: статус ${statusCode}`);
    process.exit(1);
  }

  if (!/^application\/pdf/.test(contentType)) {
    console.error(`❌ Ожидался PDF, но получили: ${contentType}`);
    process.exit(1);
  }

  console.log('✅ PDF доступен и корректен');
  process.exit(0);
}).on('error', (err) => {
  console.error(`❌ Ошибка запроса: ${err.message}`);
  process.exit(1);
});
