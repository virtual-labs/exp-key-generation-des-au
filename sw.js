importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"d4337ff16292cea2988829d88bb2a15b","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"c8ac711836366b48c7d73ae90b75d153","url":"assets/js/assessment_v2.js"},{"revision":"0c6c2d6c8bd1ff223774dc9689ee7788","url":"assets/js/assessment.js"},{"revision":"51392554bd6f04d452c6c2bf019e8812","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"1f9292f78f82f6a4e91d396cb4753ba8","url":"feedback.html"},{"revision":"97de4a3fb5c7378e7c89830b1690d68b","url":"index.html"},{"revision":"5bc6468fd2c456662f2210f957c58358","url":"performance-report.html"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"6291eaa5ed68c4e6a35090380fede8a6","url":"posttest.html"},{"revision":"1406426511cd6f94b0d11a8fe92571cb","url":"posttest.json"},{"revision":"31eaa8c76053be69535f936819bda7d4","url":"pretest.html"},{"revision":"d91d86b539f66b45fa9b147d6339b801","url":"pretest.json"},{"revision":"912de3345d5263f22e1b74962866c58b","url":"procedure.html"},{"revision":"a8d6b700b3b3a03556fa76640f7e32e1","url":"references.html"},{"revision":"c4a60a44e4d3b8672de47b1bd7fb0364","url":"simulation.html"},{"revision":"3307f7bcfdd957c5a44a2d1d3a706f8e","url":"simulation/asset-manifest.json"},{"revision":"32c98a7488a20909017a578b74087c85","url":"simulation/css/main.css"},{"revision":"16ce3cf1d491fb560c3476dacbcfed46","url":"simulation/index.html"},{"revision":"cbe21ee49f13dc9256c5e51e3bd11b8a","url":"simulation/js/main.js"},{"revision":"33dbdd0177549353eeeb785d02c294af","url":"simulation/logo192.png"},{"revision":"917515db74ea8d1aee6a246cfbcc0b45","url":"simulation/logo512.png"},{"revision":"d9d975cebe2ec20b6c652e1e4c12ccf0","url":"simulation/manifest.json"},{"revision":"e61f5b9db3131f58326fe93a72d30028","url":"simulation/static/css/main.089346c1.css"},{"revision":"7fe93c1574c733448409b48e3aaa4967","url":"simulation/static/css/main.5d00df72.css"},{"revision":"5ce4fb9dd0cc4e0e5585ab8e5a1b6693","url":"simulation/static/css/main.a92a257c.css"},{"revision":"198b41f86799cde5d347a53ad68b949b","url":"simulation/static/css/main.fd538b15.css"},{"revision":"6a4a2f8e8e298343b4724ddf533fd9b1","url":"simulation/static/js/787.36ba9dcd.chunk.js"},{"revision":"d52aad6d5d47c3503a084dd0a51b8520","url":"simulation/static/js/main.0fad40a5.js"},{"revision":"700bda8aeca9a4bd40d2d9cf6384f5e7","url":"simulation/static/js/main.224ba60a.js"},{"revision":"18faa99cfa1fdf861e96013328852ddd","url":"simulation/static/js/main.34d2e77c.js"},{"revision":"481fa6f96504fd5f497394b8a1b32b0a","url":"simulation/static/js/main.4d7ccb5c.js"},{"revision":"d6d8b08513e3d94246719cb8aa1ca283","url":"simulation/static/js/main.5c5e55de.js"},{"revision":"815cc843d7d414911bef69e682048cb8","url":"simulation/static/js/main.6d436cba.js"},{"revision":"d5a20b75a0ffa91537f7e387a4f75dc8","url":"simulation/static/js/main.6d8a2157.js"},{"revision":"b83f0158d08ab61dba94781af0f604b9","url":"simulation/static/js/main.8f065a9c.js"},{"revision":"a6cc65a3f8bf0b186876df3f6d5d78b4","url":"simulation/static/js/main.e68d9e72.js"},{"revision":"8aa3f560bfb536520edfcd7c752d72ee","url":"simulation/static/js/main.f61e21fb.js"},{"revision":"8015fbefb4e1b2278305e0f447536091","url":"simulation/static/js/main.f9dd7b0f.js"},{"revision":"7ce16f9cd8f22b57a7f8a8b6227c616a","url":"simulation/static/media/1.cd89cca1b45b0c97bd87.png"},{"revision":"2c69031d8e5e02fa88375c1a6d3d81fe","url":"simulation/static/media/2.0967f54ae6b39f0c307a.png"},{"revision":"aa4e5dfe24c96ce575ee031b7713e297","url":"simulation/static/media/3.14e9b2d8a5b994ea29c5.png"},{"revision":"33250789a62df7aca1e8dacddc1f9e3d","url":"theory.html"},{"revision":"21781993d3a3c0bf82890e2e8e805966","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );