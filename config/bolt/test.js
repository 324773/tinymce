configure({
  sources: [
    source('amd', 'ephox.robin.test', '../../src/test/js/module', mapper.hierarchical),
    source('amd', 'ephox.agar', '../../lib/test', mapper.flat),
    source('amd', 'ephox.wrap.JQuery', '../../lib/test', mapper.flat),
    source('amd', 'ephox.wrap.Json', '../../lib/test', mapper.flat)
  ]
});
