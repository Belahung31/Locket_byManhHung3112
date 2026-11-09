/***********************************************
> deleteHeader by mahnhuwg07
***********************************************/

const version = 'V2.0.0';

const headersToStrip = [
  'x-revenuecat-etag',
  'if-none-match',
  'if-modified-since',
  'x-goog-if-none-match'
];

const modifiedHeaders = Object.assign({}, $request.headers);

for (const key of Object.keys(modifiedHeaders)) {
  if (headersToStrip.includes(key.toLowerCase())) {
    delete modifiedHeaders[key];
  }
}

$done({ headers: modifiedHeaders });
