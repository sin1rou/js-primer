// workbox init setting
importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js"
);
workbox.core.setCacheNameDetails({ prefix: "js-primer-v1" });
workbox.googleAnalytics.initialize();
// reload asap
workbox.skipWaiting();
workbox.clientsClaim();
// precache
workbox.precaching.precacheAndRoute([
  {
    "url": "appendix/links/index.html",
    "revision": "4b2919e72de5aa05c30ed75fec7183bd"
  },
  {
    "url": "basic/array/index.html",
    "revision": "9383679242ff569ab51d0a2b2e3c4ce2"
  },
  {
    "url": "basic/async/img/promise-chain.png",
    "revision": "e26f9e8ec157282aeb60810f23a52a6b"
  },
  {
    "url": "basic/async/img/then-rejected-promise.png",
    "revision": "c45405c987bb1a739850f71be6d010f0"
  },
  {
    "url": "basic/async/index.html",
    "revision": "841b9dd0f8ed8f307ed5ff09d3c253d1"
  },
  {
    "url": "basic/class/index.html",
    "revision": "0e95257588fcb5c9a9dbe6145438921f"
  },
  {
    "url": "basic/comments/index.html",
    "revision": "c0ea20f157ada5ce826c397b4166d0e1"
  },
  {
    "url": "basic/condition/index.html",
    "revision": "4c8c44f0f3030c6209f098731c987a18"
  },
  {
    "url": "basic/data-type/index.html",
    "revision": "5a04be424572c5a1bae7b3dd76e01fb8"
  },
  {
    "url": "basic/date/index.html",
    "revision": "8976d8c46c6e20a847481b5f4af7687f"
  },
  {
    "url": "basic/ecmascript/index.html",
    "revision": "01054b030d57c4df0172854bca1d1571"
  },
  {
    "url": "basic/error-try-catch/images/error.png",
    "revision": "dff0e4322cb06d42d699119b6f89428f"
  },
  {
    "url": "basic/error-try-catch/index.html",
    "revision": "26d7d4ebd1f272a77a266d2abbdc0c4f"
  },
  {
    "url": "basic/error-try-catch/src/error.html",
    "revision": "359cbe7900932fac79eb321c76e104b4"
  },
  {
    "url": "basic/function-declaration/index.html",
    "revision": "dc17b41d138da086c93665a7a135fe40"
  },
  {
    "url": "basic/function-scope/index.html",
    "revision": "bb2fa9fa96fc17b488fe69d376b3b942"
  },
  {
    "url": "basic/function-this/index.html",
    "revision": "53151a96dfbff0292d8b9ac144dff1de"
  },
  {
    "url": "basic/implicit-coercion/img/JavaScript-Equality-Table.png",
    "revision": "249e75cfe1f22458bfa9fe71480a6c0d"
  },
  {
    "url": "basic/implicit-coercion/index.html",
    "revision": "d896f8a69b39a8ae7673c79c429535d3"
  },
  {
    "url": "basic/index.html",
    "revision": "1282194f85f59240490ecd73dc9974bd"
  },
  {
    "url": "basic/introduction/img/javascript-ecmascript.png",
    "revision": "40a83bcf5b26783fc68b7caeb792d36d"
  },
  {
    "url": "basic/introduction/index.html",
    "revision": "940c0d85ae6acff0f86736b8127e42be"
  },
  {
    "url": "basic/json/index.html",
    "revision": "5667f540704eb4e162b468e31cc0df13"
  },
  {
    "url": "basic/loop/index.html",
    "revision": "a9060d3e1ad647ca53619626df0d4990"
  },
  {
    "url": "basic/loop/public/index.html",
    "revision": "226c5a5e385446f7b048d1b990a8f603"
  },
  {
    "url": "basic/map-and-set/index.html",
    "revision": "a109f77dc7c04876ed4ac08312cfb60d"
  },
  {
    "url": "basic/math/index.html",
    "revision": "04a94538e467985e3441fe4e6c13d3c0"
  },
  {
    "url": "basic/object/index.html",
    "revision": "0abb5298bc46f2142c37e7768120bde7"
  },
  {
    "url": "basic/operator/index.html",
    "revision": "cdf1439ec2b7b4a8faf4b8384c67af23"
  },
  {
    "url": "basic/other-parts/index.html",
    "revision": "1d31a031375e05cb5d5a9dd900b85e39"
  },
  {
    "url": "basic/prototype-object/img/object-prototype.png",
    "revision": "6bbe9c151a73ec89ed45606a0b42975f"
  },
  {
    "url": "basic/prototype-object/index.html",
    "revision": "719230d80e22ccb497d0008356605b6a"
  },
  {
    "url": "basic/read-eval-print/img/syntax-error.png",
    "revision": "889dfb7dec547bc8bde6fed9566d204f"
  },
  {
    "url": "basic/read-eval-print/img/web-console.png",
    "revision": "23eb78c09ad1d984cfa76270d8467b24"
  },
  {
    "url": "basic/read-eval-print/index.html",
    "revision": "5068d05a943d805624b6b689c72c8429"
  },
  {
    "url": "basic/read-eval-print/src/empty/index.html",
    "revision": "5a2a8b11dda21e4b54164d24dd751dc4"
  },
  {
    "url": "basic/read-eval-print/src/example/index.html",
    "revision": "e6feacbd6b95841d9be147d6d820014f"
  },
  {
    "url": "basic/read-eval-print/src/invalid/syntax-error-typo/index.html",
    "revision": "e6feacbd6b95841d9be147d6d820014f"
  },
  {
    "url": "basic/read-eval-print/src/invalid/syntax-error/index.html",
    "revision": "e6feacbd6b95841d9be147d6d820014f"
  },
  {
    "url": "basic/read-eval-print/src/runtime-error/index.html",
    "revision": "e6feacbd6b95841d9be147d6d820014f"
  },
  {
    "url": "basic/statement-expression/index.html",
    "revision": "fe1aef0be7bf1f356540ae615f4bc110"
  },
  {
    "url": "basic/string-unicode/img/codeunit-codepoint-table.png",
    "revision": "7d065a8e65d944b1898b9de5e8d1e07e"
  },
  {
    "url": "basic/string-unicode/img/emoji-codeunit-codepoint-table.png",
    "revision": "6665ae16a9f3b2bfee3d28930988f382"
  },
  {
    "url": "basic/string-unicode/img/extenal-code-and-internal-code.png",
    "revision": "81bdae3abbfa82c8a14ce1d961bab2e5"
  },
  {
    "url": "basic/string-unicode/index.html",
    "revision": "89542040f13818d61dc3037d7c00c4e2"
  },
  {
    "url": "basic/string/index.html",
    "revision": "af4452a4da06824718e5db2aa725acba"
  },
  {
    "url": "basic/variables/index.html",
    "revision": "454e40041dad4933bfda9e7d29fe4dce"
  },
  {
    "url": "basic/wrapper-object/index.html",
    "revision": "17f63f16ca1207a9c204c6c85ec7d9d7"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.eot",
    "revision": "25a32416abee198dd821b0b17a198a8f"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.svg",
    "revision": "d7c639084f684d66a1bc66855d193ed8"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.ttf",
    "revision": "1dc35d25e61d819a9c357074014867ab"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.woff",
    "revision": "c8ddf1e5e5bf3682bc7bebf30f394148"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.woff2",
    "revision": "e6cf7c6ec7c2d6f670ae9d762604cb0b"
  },
  {
    "url": "gitbook/fonts/fontawesome/FontAwesome.otf",
    "revision": "5dc41d8fe329a22fa1ee9225571c843e"
  },
  {
    "url": "gitbook/gitbook-plugin-anchors/plugin.css",
    "revision": "45deda85e7ceaacadb6a51c17248ad1c"
  },
  {
    "url": "gitbook/gitbook-plugin-fontsettings/fontsettings.js",
    "revision": "fab8f6412ce18bb367635b1bcae503ca"
  },
  {
    "url": "gitbook/gitbook-plugin-fontsettings/website.css",
    "revision": "056a6db3eef3553a78f3b7e02356b2e7"
  },
  {
    "url": "gitbook/gitbook-plugin-ga/plugin.js",
    "revision": "8b0d0bfffa07cfd2675fffb1b7b6e6f4"
  },
  {
    "url": "gitbook/gitbook-plugin-github-issue-feedback/plugin.js",
    "revision": "096a3a5838459d91e482dff2e1230c84"
  },
  {
    "url": "gitbook/gitbook-plugin-highlight/ebook.css",
    "revision": "fa203ae16ad9f01f4d20061fb9e7a6cc"
  },
  {
    "url": "gitbook/gitbook-plugin-highlight/website.css",
    "revision": "acce01e3e11cbd4b3882e7732d81f954"
  },
  {
    "url": "gitbook/gitbook-plugin-js-console/console-ui.js",
    "revision": "0ca768e48d364ee90d22664568902840"
  },
  {
    "url": "gitbook/gitbook-plugin-page-toc-button/plugin.css",
    "revision": "4e7efddf5df2ea927a186116ba2aee2b"
  },
  {
    "url": "gitbook/gitbook-plugin-page-toc-button/plugin.js",
    "revision": "834dad580dcb5926f3b090502550f60d"
  },
  {
    "url": "gitbook/gitbook-plugin-sharing/buttons.js",
    "revision": "e7c1c051d685b9e7530c1a6675e6b119"
  },
  {
    "url": "gitbook/gitbook.js",
    "revision": "e53bf9037b1d1c9810486ef4c5493624"
  },
  {
    "url": "gitbook/icons/favicon.ico",
    "revision": "4724b6e29e34167169d6d9e14b8c853f"
  },
  {
    "url": "gitbook/icons/icon-128x128.png",
    "revision": "b91df37069569bafccc6936d1b2e1352"
  },
  {
    "url": "gitbook/icons/icon-144x144.png",
    "revision": "e744cdec12fa24a28b40fde9b52d7695"
  },
  {
    "url": "gitbook/icons/icon-152x152.png",
    "revision": "77dac1368e193743d56106145e1c04a9"
  },
  {
    "url": "gitbook/icons/icon-192x192.png",
    "revision": "e3682439a02773056ce1bd46e6085555"
  },
  {
    "url": "gitbook/icons/icon-384x384.png",
    "revision": "2814afaf288c99d08c584b39234d3e39"
  },
  {
    "url": "gitbook/icons/icon-512x512.png",
    "revision": "fd7a37b059ccac4d7256226883672bce"
  },
  {
    "url": "gitbook/icons/icon-72x72.png",
    "revision": "406eb5ae0057f1f40b2abf9b17cd12a4"
  },
  {
    "url": "gitbook/icons/icon-96x96.png",
    "revision": "7529c23361ebe1eaba84a6cd042a9565"
  },
  {
    "url": "gitbook/images/apple-touch-icon-precomposed-152.png",
    "revision": "77dac1368e193743d56106145e1c04a9"
  },
  {
    "url": "gitbook/images/favicon.ico",
    "revision": "4724b6e29e34167169d6d9e14b8c853f"
  },
  {
    "url": "gitbook/style.css",
    "revision": "88a3a50e3559bc577c1be0de4fcc6c6d"
  },
  {
    "url": "gitbook/theme.js",
    "revision": "176e71ac3bf185b7f08e0f6cb919f1e8"
  },
  {
    "url": "index.html",
    "revision": "ad9d13d558e3355281a257374e639630"
  },
  {
    "url": "intro/feedback/index.html",
    "revision": "967da3b072577702e749f50f58970403"
  },
  {
    "url": "intro/index.html",
    "revision": "175f2b9365dbd38a249b21528ac802a7"
  },
  {
    "url": "intro/preparation/index.html",
    "revision": "90cf97b1501bd5ea98d19dee496f18d7"
  },
  {
    "url": "landing/css/style.css",
    "revision": "026290c57783f482c4226e004e2279e5"
  },
  {
    "url": "landing/img/cover.png",
    "revision": "fec746cff0a8b4a9fb4193d4af3d534f"
  },
  {
    "url": "landing/img/js-primer.png",
    "revision": "19d98be248101b2685bb2a74d510890f"
  },
  {
    "url": "landing/img/repo-actions-watch.png",
    "revision": "4b4cd63c1bad3861502d3127c2a2d0a2"
  },
  {
    "url": "landing/index.html",
    "revision": "1bf50123dd7fe8053c579742357ec970"
  },
  {
    "url": "use-case/ajaxapp/display/img/fig-1.png",
    "revision": "15072f06aa7fd4d5fbce148bc2db975f"
  },
  {
    "url": "use-case/ajaxapp/display/index.html",
    "revision": "d11e60abbda0938f23c3adc27ba6e48f"
  },
  {
    "url": "use-case/ajaxapp/display/src/index.html",
    "revision": "b89416cb1388482fc234c4bf894e0e83"
  },
  {
    "url": "use-case/ajaxapp/entrypoint/img/fig-1.png",
    "revision": "529c6091a9875e4151bbd301a9eeaeee"
  },
  {
    "url": "use-case/ajaxapp/entrypoint/index.html",
    "revision": "a1564f53429df7047f55fee400d1216c"
  },
  {
    "url": "use-case/ajaxapp/entrypoint/src/index.html",
    "revision": "59d564baee8b85ccee9e5e5eac419944"
  },
  {
    "url": "use-case/ajaxapp/index.html",
    "revision": "f70c0927552ec372bfed0a1e09b3d434"
  },
  {
    "url": "use-case/ajaxapp/promise/img/fig-1.png",
    "revision": "97b1897743ee44e2fd8a9315a7af15eb"
  },
  {
    "url": "use-case/ajaxapp/promise/index.html",
    "revision": "d5850a7972a251fad64ffb5bf2693151"
  },
  {
    "url": "use-case/ajaxapp/promise/src/index.html",
    "revision": "08f26d218b17fbc1aea4461f2a01df19"
  },
  {
    "url": "use-case/ajaxapp/src/index.html",
    "revision": "08f26d218b17fbc1aea4461f2a01df19"
  },
  {
    "url": "use-case/ajaxapp/xhr/img/fig-1.png",
    "revision": "30ae672fc36c3cf614eea13ea84dca42"
  },
  {
    "url": "use-case/ajaxapp/xhr/img/fig-2.png",
    "revision": "37814c55beb033fe5d7d40c0b45afe91"
  },
  {
    "url": "use-case/ajaxapp/xhr/index.html",
    "revision": "4e95724f0cd4d6509dcbdc203634abef"
  },
  {
    "url": "use-case/ajaxapp/xhr/src/index.html",
    "revision": "45577067ec45b8853a9b639641dd7dd5"
  },
  {
    "url": "use-case/index.html",
    "revision": "4852e869f641f0927a4483ca1f27a908"
  },
  {
    "url": "use-case/module/index.html",
    "revision": "efebe6752f0f57851237cf448fabcf8b"
  },
  {
    "url": "use-case/nodecli/argument-parse/index.html",
    "revision": "bebcb479d1a1a62296acc9ca295278ab"
  },
  {
    "url": "use-case/nodecli/helloworld/index.html",
    "revision": "e515618e4cb625809102b96c3e42ca9a"
  },
  {
    "url": "use-case/nodecli/index.html",
    "revision": "f7b82b84c476d1ce9e74b4868df27d67"
  },
  {
    "url": "use-case/nodecli/md-to-html/index.html",
    "revision": "616a75dc13c3b15692c83c9e13d7edc8"
  },
  {
    "url": "use-case/nodecli/read-file/index.html",
    "revision": "516996e8cd1f7a8a741617f49bcd1cfc"
  },
  {
    "url": "use-case/nodecli/refactor-and-unittest/index.html",
    "revision": "1c4a569a68a9cf29664ef444b9e51734"
  },
  {
    "url": "use-case/nodecli/refactor-and-unittest/src/test/fixtures/expected.html",
    "revision": "98b8e1ceac14ee8d5bd405fe8fc1b2bc"
  },
  {
    "url": "use-case/setup-local-env/index.html",
    "revision": "cf8bb98c36191b48cf17136483f2cfba"
  },
  {
    "url": "use-case/todoapp/app-structure/img/todo-html.png",
    "revision": "a7e248a9554bc7f79bc635b4c373ed9c"
  },
  {
    "url": "use-case/todoapp/app-structure/index.html",
    "revision": "c1f45b600c893b81243e024900bb7777"
  },
  {
    "url": "use-case/todoapp/app-structure/todo-html/index.html",
    "revision": "7982d73005aace941cf4c11764d8d601"
  },
  {
    "url": "use-case/todoapp/entrypoint/first-entry/index.html",
    "revision": "be5eee3981ec18c49a62181f3fa78987"
  },
  {
    "url": "use-case/todoapp/entrypoint/img/first-entry.png",
    "revision": "07fda3c2b654ee7b03f3ded0a58c1fff"
  },
  {
    "url": "use-case/todoapp/entrypoint/index.html",
    "revision": "f21660f4bdb44664aaab0b554c8c59f1"
  },
  {
    "url": "use-case/todoapp/entrypoint/module-entry/index.html",
    "revision": "be5eee3981ec18c49a62181f3fa78987"
  },
  {
    "url": "use-case/todoapp/entrypoint/module-scope/index.html",
    "revision": "363ad66f11327d4fbd4584c65dbcde65"
  },
  {
    "url": "use-case/todoapp/event-model/event-emitter/index.html",
    "revision": "4b6e0d6f957ffad0659f2076151c97ca"
  },
  {
    "url": "use-case/todoapp/event-model/index.html",
    "revision": "fe5fd0d07bd577e88949ca25cfdca29b"
  },
  {
    "url": "use-case/todoapp/final/create-view/index.html",
    "revision": "4b6e0d6f957ffad0659f2076151c97ca"
  },
  {
    "url": "use-case/todoapp/final/final/index.html",
    "revision": "9ffaa1daeb5dc9ad3021970002a5aa53"
  },
  {
    "url": "use-case/todoapp/final/index.html",
    "revision": "802a5705e46f027fcdd33130ff67414d"
  },
  {
    "url": "use-case/todoapp/final/more/index.html",
    "revision": "9ffaa1daeb5dc9ad3021970002a5aa53"
  },
  {
    "url": "use-case/todoapp/form-event/add-todo-item/index.html",
    "revision": "4b6e0d6f957ffad0659f2076151c97ca"
  },
  {
    "url": "use-case/todoapp/form-event/img/add-todo-item.png",
    "revision": "044faab6418bb0d5c4a50d43be55a0ac"
  },
  {
    "url": "use-case/todoapp/form-event/img/form-event.png",
    "revision": "a193d8abc60dcc1f78c117af7a23a946"
  },
  {
    "url": "use-case/todoapp/form-event/index.html",
    "revision": "f066dbbf7dc1577b44a917a9bf6b9382"
  },
  {
    "url": "use-case/todoapp/form-event/prevent-event/index.html",
    "revision": "4b6e0d6f957ffad0659f2076151c97ca"
  },
  {
    "url": "use-case/todoapp/index.html",
    "revision": "dafd9486f0bb0b400d5ed8fe78304bd3"
  },
  {
    "url": "use-case/todoapp/update-delete/add-checkbox/index.html",
    "revision": "4b6e0d6f957ffad0659f2076151c97ca"
  },
  {
    "url": "use-case/todoapp/update-delete/delete-feature/index.html",
    "revision": "4b6e0d6f957ffad0659f2076151c97ca"
  },
  {
    "url": "use-case/todoapp/update-delete/img/input-checkbox.png",
    "revision": "44920eba3f5737a49e9cc4c0893c44dd"
  },
  {
    "url": "use-case/todoapp/update-delete/index.html",
    "revision": "fd82d5e61e140a5577796861a3ad260c"
  },
  {
    "url": "use-case/todoapp/update-delete/input-checkbox/index.html",
    "revision": "9528b6b1e9c5c6c029843537ea4121f5"
  },
  {
    "url": "use-case/todoapp/update-delete/update-feature/index.html",
    "revision": "4b6e0d6f957ffad0659f2076151c97ca"
  }
]);