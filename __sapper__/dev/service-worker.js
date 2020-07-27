(function () {
	'use strict';

	// This file is generated by Sapper — do not edit it!
	const timestamp = 1595861199188;

	const files = [
		"service-worker-index.html",
		".DS_Store",
		"favicon.png",
		"fonts/ComputerModern/Bright/OFL-FAQ.txt",
		"fonts/ComputerModern/Bright/OFL.txt",
		"fonts/ComputerModern/Bright/README.txt",
		"fonts/ComputerModern/Bright/cmun-bright.css",
		"fonts/ComputerModern/Bright/cmunbbx.eot",
		"fonts/ComputerModern/Bright/cmunbbx.ttf",
		"fonts/ComputerModern/Bright/cmunbbx.woff",
		"fonts/ComputerModern/Bright/cmunbmo.eot",
		"fonts/ComputerModern/Bright/cmunbmo.ttf",
		"fonts/ComputerModern/Bright/cmunbmo.woff",
		"fonts/ComputerModern/Bright/cmunbmr.eot",
		"fonts/ComputerModern/Bright/cmunbmr.ttf",
		"fonts/ComputerModern/Bright/cmunbmr.woff",
		"fonts/ComputerModern/Bright/cmunbxo.eot",
		"fonts/ComputerModern/Bright/cmunbxo.ttf",
		"fonts/ComputerModern/Bright/cmunbxo.woff",
		"fonts/ComputerModern/Bright Semibold/OFL-FAQ.txt",
		"fonts/ComputerModern/Bright Semibold/OFL.txt",
		"fonts/ComputerModern/Bright Semibold/README.txt",
		"fonts/ComputerModern/Bright Semibold/cmun-bright-semibold.css",
		"fonts/ComputerModern/Bright Semibold/cmunbso.eot",
		"fonts/ComputerModern/Bright Semibold/cmunbso.svg",
		"fonts/ComputerModern/Bright Semibold/cmunbso.ttf",
		"fonts/ComputerModern/Bright Semibold/cmunbso.woff",
		"fonts/ComputerModern/Bright Semibold/cmunbsr.eot",
		"fonts/ComputerModern/Bright Semibold/cmunbsr.svg",
		"fonts/ComputerModern/Bright Semibold/cmunbsr.ttf",
		"fonts/ComputerModern/Bright Semibold/cmunbsr.woff",
		"fonts/ComputerModern/Classical Serif Italic/OFL-FAQ.txt",
		"fonts/ComputerModern/Classical Serif Italic/OFL.txt",
		"fonts/ComputerModern/Classical Serif Italic/README.txt",
		"fonts/ComputerModern/Classical Serif Italic/cmun-classical-serif-italic.css",
		"fonts/ComputerModern/Classical Serif Italic/cmunci.eot",
		"fonts/ComputerModern/Classical Serif Italic/cmunci.svg",
		"fonts/ComputerModern/Classical Serif Italic/cmunci.ttf",
		"fonts/ComputerModern/Classical Serif Italic/cmunci.woff",
		"fonts/ComputerModern/Concrete/OFL-FAQ.txt",
		"fonts/ComputerModern/Concrete/OFL.txt",
		"fonts/ComputerModern/Concrete/README.txt",
		"fonts/ComputerModern/Concrete/cmun-concrete.css",
		"fonts/ComputerModern/Concrete/cmunobi.eot",
		"fonts/ComputerModern/Concrete/cmunobi.svg",
		"fonts/ComputerModern/Concrete/cmunobi.ttf",
		"fonts/ComputerModern/Concrete/cmunobi.woff",
		"fonts/ComputerModern/Concrete/cmunobx.eot",
		"fonts/ComputerModern/Concrete/cmunobx.svg",
		"fonts/ComputerModern/Concrete/cmunobx.ttf",
		"fonts/ComputerModern/Concrete/cmunobx.woff",
		"fonts/ComputerModern/Concrete/cmunorm.eot",
		"fonts/ComputerModern/Concrete/cmunorm.svg",
		"fonts/ComputerModern/Concrete/cmunorm.ttf",
		"fonts/ComputerModern/Concrete/cmunorm.woff",
		"fonts/ComputerModern/Concrete/cmunoti.eot",
		"fonts/ComputerModern/Concrete/cmunoti.svg",
		"fonts/ComputerModern/Concrete/cmunoti.ttf",
		"fonts/ComputerModern/Concrete/cmunoti.woff",
		"fonts/ComputerModern/OFL-FAQ.txt",
		"fonts/ComputerModern/OFL.txt",
		"fonts/ComputerModern/README.txt",
		"fonts/ComputerModern/Sans/OFL-FAQ.txt",
		"fonts/ComputerModern/Sans/OFL.txt",
		"fonts/ComputerModern/Sans/README.txt",
		"fonts/ComputerModern/Sans/cmun-sans.css",
		"fonts/ComputerModern/Sans/cmunsi.eot",
		"fonts/ComputerModern/Sans/cmunsi.svg",
		"fonts/ComputerModern/Sans/cmunsi.ttf",
		"fonts/ComputerModern/Sans/cmunsi.woff",
		"fonts/ComputerModern/Sans/cmunso.eot",
		"fonts/ComputerModern/Sans/cmunso.svg",
		"fonts/ComputerModern/Sans/cmunso.ttf",
		"fonts/ComputerModern/Sans/cmunso.woff",
		"fonts/ComputerModern/Sans/cmunss.eot",
		"fonts/ComputerModern/Sans/cmunss.svg",
		"fonts/ComputerModern/Sans/cmunss.ttf",
		"fonts/ComputerModern/Sans/cmunss.woff",
		"fonts/ComputerModern/Sans/cmunsx.eot",
		"fonts/ComputerModern/Sans/cmunsx.svg",
		"fonts/ComputerModern/Sans/cmunsx.ttf",
		"fonts/ComputerModern/Sans/cmunsx.woff",
		"fonts/ComputerModern/Sans Demi-Condensed/OFL-FAQ.txt",
		"fonts/ComputerModern/Sans Demi-Condensed/OFL.txt",
		"fonts/ComputerModern/Sans Demi-Condensed/README.txt",
		"fonts/ComputerModern/Sans Demi-Condensed/cmun-sans-demicondensed.css",
		"fonts/ComputerModern/Sans Demi-Condensed/cmunssdc.eot",
		"fonts/ComputerModern/Sans Demi-Condensed/cmunssdc.svg",
		"fonts/ComputerModern/Sans Demi-Condensed/cmunssdc.ttf",
		"fonts/ComputerModern/Sans Demi-Condensed/cmunssdc.woff",
		"fonts/ComputerModern/Serif/OFL-FAQ.txt",
		"fonts/ComputerModern/Serif/OFL.txt",
		"fonts/ComputerModern/Serif/README.txt",
		"fonts/ComputerModern/Serif/cmun-serif.css",
		"fonts/ComputerModern/Serif/cmunbi.eot",
		"fonts/ComputerModern/Serif/cmunbi.svg",
		"fonts/ComputerModern/Serif/cmunbi.ttf",
		"fonts/ComputerModern/Serif/cmunbi.woff",
		"fonts/ComputerModern/Serif/cmunbx.eot",
		"fonts/ComputerModern/Serif/cmunbx.svg",
		"fonts/ComputerModern/Serif/cmunbx.ttf",
		"fonts/ComputerModern/Serif/cmunbx.woff",
		"fonts/ComputerModern/Serif/cmunrm.eot",
		"fonts/ComputerModern/Serif/cmunrm.svg",
		"fonts/ComputerModern/Serif/cmunrm.ttf",
		"fonts/ComputerModern/Serif/cmunrm.woff",
		"fonts/ComputerModern/Serif/cmunti.eot",
		"fonts/ComputerModern/Serif/cmunti.svg",
		"fonts/ComputerModern/Serif/cmunti.ttf",
		"fonts/ComputerModern/Serif/cmunti.woff",
		"fonts/ComputerModern/Serif Slanted/OFL-FAQ.txt",
		"fonts/ComputerModern/Serif Slanted/OFL.txt",
		"fonts/ComputerModern/Serif Slanted/README.txt",
		"fonts/ComputerModern/Serif Slanted/cmun-serif-slanted.css",
		"fonts/ComputerModern/Serif Slanted/cmunbl.eot",
		"fonts/ComputerModern/Serif Slanted/cmunbl.svg",
		"fonts/ComputerModern/Serif Slanted/cmunbl.ttf",
		"fonts/ComputerModern/Serif Slanted/cmunbl.woff",
		"fonts/ComputerModern/Serif Slanted/cmunsl.eot",
		"fonts/ComputerModern/Serif Slanted/cmunsl.svg",
		"fonts/ComputerModern/Serif Slanted/cmunsl.ttf",
		"fonts/ComputerModern/Serif Slanted/cmunsl.woff",
		"fonts/ComputerModern/Typewriter/OFL-FAQ.txt",
		"fonts/ComputerModern/Typewriter/OFL.txt",
		"fonts/ComputerModern/Typewriter/README.txt",
		"fonts/ComputerModern/Typewriter/cmun-typewriter.css",
		"fonts/ComputerModern/Typewriter/cmunit.eot",
		"fonts/ComputerModern/Typewriter/cmunit.svg",
		"fonts/ComputerModern/Typewriter/cmunit.ttf",
		"fonts/ComputerModern/Typewriter/cmunit.woff",
		"fonts/ComputerModern/Typewriter/cmuntb.eot",
		"fonts/ComputerModern/Typewriter/cmuntb.svg",
		"fonts/ComputerModern/Typewriter/cmuntb.ttf",
		"fonts/ComputerModern/Typewriter/cmuntb.woff",
		"fonts/ComputerModern/Typewriter/cmuntt.eot",
		"fonts/ComputerModern/Typewriter/cmuntt.svg",
		"fonts/ComputerModern/Typewriter/cmuntt.ttf",
		"fonts/ComputerModern/Typewriter/cmuntt.woff",
		"fonts/ComputerModern/Typewriter/cmuntx.eot",
		"fonts/ComputerModern/Typewriter/cmuntx.svg",
		"fonts/ComputerModern/Typewriter/cmuntx.ttf",
		"fonts/ComputerModern/Typewriter/cmuntx.woff",
		"fonts/ComputerModern/Typewriter Variable/OFL-FAQ.txt",
		"fonts/ComputerModern/Typewriter Variable/OFL.txt",
		"fonts/ComputerModern/Typewriter Variable/README.txt",
		"fonts/ComputerModern/Typewriter Variable/cmun-typewriter-variable.css",
		"fonts/ComputerModern/Typewriter Variable/cmunvi.eot",
		"fonts/ComputerModern/Typewriter Variable/cmunvi.svg",
		"fonts/ComputerModern/Typewriter Variable/cmunvi.ttf",
		"fonts/ComputerModern/Typewriter Variable/cmunvi.woff",
		"fonts/ComputerModern/Typewriter Variable/cmunvt.eot",
		"fonts/ComputerModern/Typewriter Variable/cmunvt.svg",
		"fonts/ComputerModern/Typewriter Variable/cmunvt.ttf",
		"fonts/ComputerModern/Typewriter Variable/cmunvt.woff",
		"fonts/ComputerModern/TypewriterLight/OFL-FAQ.txt",
		"fonts/ComputerModern/TypewriterLight/OFL.txt",
		"fonts/ComputerModern/TypewriterLight/README.txt",
		"fonts/ComputerModern/TypewriterLight/cmun-typewriter-light.css",
		"fonts/ComputerModern/TypewriterLight/cmunbtl.eot",
		"fonts/ComputerModern/TypewriterLight/cmunbtl.svg",
		"fonts/ComputerModern/TypewriterLight/cmunbtl.ttf",
		"fonts/ComputerModern/TypewriterLight/cmunbtl.woff",
		"fonts/ComputerModern/TypewriterLight/cmunbto.eot",
		"fonts/ComputerModern/TypewriterLight/cmunbto.svg",
		"fonts/ComputerModern/TypewriterLight/cmunbto.ttf",
		"fonts/ComputerModern/TypewriterLight/cmunbto.woff",
		"fonts/ComputerModern/Upright Italic/OFL-FAQ.txt",
		"fonts/ComputerModern/Upright Italic/OFL.txt",
		"fonts/ComputerModern/Upright Italic/README.txt",
		"fonts/ComputerModern/Upright Italic/cmun-upright-italic.css",
		"fonts/ComputerModern/Upright Italic/cmunui.eot",
		"fonts/ComputerModern/Upright Italic/cmunui.svg",
		"fonts/ComputerModern/Upright Italic/cmunui.ttf",
		"fonts/ComputerModern/Upright Italic/cmunui.woff",
		"fonts/ComputerModern/generator_config.txt",
		"fonts/LeonSans/.DS_Store",
		"fonts/LeonSans/AUTHORS.txt",
		"fonts/LeonSans/CONTRIBUTING.md",
		"fonts/LeonSans/CONTRIBUTORS.txt",
		"fonts/LeonSans/LICENSE.txt",
		"fonts/LeonSans/LeonSans-Bold.otf",
		"fonts/LeonSans/LeonSans-Light.otf",
		"fonts/LeonSans/LeonSans-Medium.otf",
		"fonts/LeonSans/LeonSans-Regular.otf",
		"fonts/LeonSans/LeonSans-Thin.otf",
		"fonts/LeonSans/OFL.txt",
		"fonts/LeonSans/README.md",
		"global.css",
		"manifest.json",
		"techno/;3-317235075.mp3",
		"techno/Trash87-860552299.mp3",
		"techno/Trash88-860552695.mp3",
		"techno/Trash89-860553478.mp3",
		"techno/Trash90-860553964.mp3",
		"techno/TrashB-565141353.mp3",
		"techno/musicList.json"
	];

	const shell = [
		"client/client.ee8bea6e.js",
		"client/index.f4dfd49a.js",
		"client/resume.0542584e.js",
		"client/about.afd49450.js",
		"client/index.b7b4ac87.js",
		"client/[slug].5bdff73d.js",
		"client/sapper-dev-client.1e7a4a5e.js"
	];

	const ASSETS = `cache${timestamp}`;

	// `shell` is an array of all the files generated by the bundler,
	// `files` is an array of everything in the `static` directory
	const to_cache = shell.concat(files);
	const cached = new Set(to_cache);

	self.addEventListener('install', event => {
		event.waitUntil(
			caches
				.open(ASSETS)
				.then(cache => cache.addAll(to_cache))
				.then(() => {
					self.skipWaiting();
				})
		);
	});

	self.addEventListener('activate', event => {
		event.waitUntil(
			caches.keys().then(async keys => {
				// delete old caches
				for (const key of keys) {
					if (key !== ASSETS) await caches.delete(key);
				}

				self.clients.claim();
			})
		);
	});

	self.addEventListener('fetch', event => {
		if (event.request.method !== 'GET' || event.request.headers.has('range')) return;

		const url = new URL(event.request.url);

		// don't try to handle e.g. data: URIs
		if (!url.protocol.startsWith('http')) return;

		// ignore dev server requests
		if (url.hostname === self.location.hostname && url.port !== self.location.port) return;

		// always serve static files and bundler-generated assets from cache
		if (url.host === self.location.host && cached.has(url.pathname)) {
			event.respondWith(caches.match(event.request));
			return;
		}

		// for pages, you might want to serve a shell `service-worker-index.html` file,
		// which Sapper has generated for you. It's not right for every
		// app, but if it's right for yours then uncomment this section
		/*
		if (url.origin === self.origin && routes.find(route => route.pattern.test(url.pathname))) {
			event.respondWith(caches.match('/service-worker-index.html'));
			return;
		}
		*/

		if (event.request.cache === 'only-if-cached') return;

		// for everything else, try the network first, falling back to
		// cache if the user is offline. (If the pages never change, you
		// might prefer a cache-first approach to a network-first one.)
		event.respondWith(
			caches
				.open(`offline${timestamp}`)
				.then(async cache => {
					try {
						const response = await fetch(event.request);
						cache.put(event.request, response.clone());
						return response;
					} catch(err) {
						const response = await cache.match(event.request);
						if (response) return response;

						throw err;
					}
				})
		);
	});

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS13b3JrZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9zZXJ2aWNlLXdvcmtlci5qcyIsIi4uLy4uL3NyYy9zZXJ2aWNlLXdvcmtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgZ2VuZXJhdGVkIGJ5IFNhcHBlciDigJQgZG8gbm90IGVkaXQgaXQhXG5leHBvcnQgY29uc3QgdGltZXN0YW1wID0gMTU5NTg2MTE5OTE4ODtcblxuZXhwb3J0IGNvbnN0IGZpbGVzID0gW1xuXHRcInNlcnZpY2Utd29ya2VyLWluZGV4Lmh0bWxcIixcblx0XCIuRFNfU3RvcmVcIixcblx0XCJmYXZpY29uLnBuZ1wiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL0JyaWdodC9PRkwtRkFRLnR4dFwiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL0JyaWdodC9PRkwudHh0XCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vQnJpZ2h0L1JFQURNRS50eHRcIixcblx0XCJmb250cy9Db21wdXRlck1vZGVybi9CcmlnaHQvY211bi1icmlnaHQuY3NzXCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vQnJpZ2h0L2NtdW5iYnguZW90XCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vQnJpZ2h0L2NtdW5iYngudHRmXCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vQnJpZ2h0L2NtdW5iYngud29mZlwiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL0JyaWdodC9jbXVuYm1vLmVvdFwiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL0JyaWdodC9jbXVuYm1vLnR0ZlwiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL0JyaWdodC9jbXVuYm1vLndvZmZcIixcblx0XCJmb250cy9Db21wdXRlck1vZGVybi9CcmlnaHQvY211bmJtci5lb3RcIixcblx0XCJmb250cy9Db21wdXRlck1vZGVybi9CcmlnaHQvY211bmJtci50dGZcIixcblx0XCJmb250cy9Db21wdXRlck1vZGVybi9CcmlnaHQvY211bmJtci53b2ZmXCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vQnJpZ2h0L2NtdW5ieG8uZW90XCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vQnJpZ2h0L2NtdW5ieG8udHRmXCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vQnJpZ2h0L2NtdW5ieG8ud29mZlwiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL0JyaWdodCBTZW1pYm9sZC9PRkwtRkFRLnR4dFwiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL0JyaWdodCBTZW1pYm9sZC9PRkwudHh0XCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vQnJpZ2h0IFNlbWlib2xkL1JFQURNRS50eHRcIixcblx0XCJmb250cy9Db21wdXRlck1vZGVybi9CcmlnaHQgU2VtaWJvbGQvY211bi1icmlnaHQtc2VtaWJvbGQuY3NzXCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vQnJpZ2h0IFNlbWlib2xkL2NtdW5ic28uZW90XCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vQnJpZ2h0IFNlbWlib2xkL2NtdW5ic28uc3ZnXCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vQnJpZ2h0IFNlbWlib2xkL2NtdW5ic28udHRmXCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vQnJpZ2h0IFNlbWlib2xkL2NtdW5ic28ud29mZlwiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL0JyaWdodCBTZW1pYm9sZC9jbXVuYnNyLmVvdFwiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL0JyaWdodCBTZW1pYm9sZC9jbXVuYnNyLnN2Z1wiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL0JyaWdodCBTZW1pYm9sZC9jbXVuYnNyLnR0ZlwiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL0JyaWdodCBTZW1pYm9sZC9jbXVuYnNyLndvZmZcIixcblx0XCJmb250cy9Db21wdXRlck1vZGVybi9DbGFzc2ljYWwgU2VyaWYgSXRhbGljL09GTC1GQVEudHh0XCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vQ2xhc3NpY2FsIFNlcmlmIEl0YWxpYy9PRkwudHh0XCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vQ2xhc3NpY2FsIFNlcmlmIEl0YWxpYy9SRUFETUUudHh0XCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vQ2xhc3NpY2FsIFNlcmlmIEl0YWxpYy9jbXVuLWNsYXNzaWNhbC1zZXJpZi1pdGFsaWMuY3NzXCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vQ2xhc3NpY2FsIFNlcmlmIEl0YWxpYy9jbXVuY2kuZW90XCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vQ2xhc3NpY2FsIFNlcmlmIEl0YWxpYy9jbXVuY2kuc3ZnXCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vQ2xhc3NpY2FsIFNlcmlmIEl0YWxpYy9jbXVuY2kudHRmXCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vQ2xhc3NpY2FsIFNlcmlmIEl0YWxpYy9jbXVuY2kud29mZlwiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL0NvbmNyZXRlL09GTC1GQVEudHh0XCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vQ29uY3JldGUvT0ZMLnR4dFwiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL0NvbmNyZXRlL1JFQURNRS50eHRcIixcblx0XCJmb250cy9Db21wdXRlck1vZGVybi9Db25jcmV0ZS9jbXVuLWNvbmNyZXRlLmNzc1wiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL0NvbmNyZXRlL2NtdW5vYmkuZW90XCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vQ29uY3JldGUvY211bm9iaS5zdmdcIixcblx0XCJmb250cy9Db21wdXRlck1vZGVybi9Db25jcmV0ZS9jbXVub2JpLnR0ZlwiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL0NvbmNyZXRlL2NtdW5vYmkud29mZlwiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL0NvbmNyZXRlL2NtdW5vYnguZW90XCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vQ29uY3JldGUvY211bm9ieC5zdmdcIixcblx0XCJmb250cy9Db21wdXRlck1vZGVybi9Db25jcmV0ZS9jbXVub2J4LnR0ZlwiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL0NvbmNyZXRlL2NtdW5vYngud29mZlwiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL0NvbmNyZXRlL2NtdW5vcm0uZW90XCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vQ29uY3JldGUvY211bm9ybS5zdmdcIixcblx0XCJmb250cy9Db21wdXRlck1vZGVybi9Db25jcmV0ZS9jbXVub3JtLnR0ZlwiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL0NvbmNyZXRlL2NtdW5vcm0ud29mZlwiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL0NvbmNyZXRlL2NtdW5vdGkuZW90XCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vQ29uY3JldGUvY211bm90aS5zdmdcIixcblx0XCJmb250cy9Db21wdXRlck1vZGVybi9Db25jcmV0ZS9jbXVub3RpLnR0ZlwiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL0NvbmNyZXRlL2NtdW5vdGkud29mZlwiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL09GTC1GQVEudHh0XCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vT0ZMLnR4dFwiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL1JFQURNRS50eHRcIixcblx0XCJmb250cy9Db21wdXRlck1vZGVybi9TYW5zL09GTC1GQVEudHh0XCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vU2Fucy9PRkwudHh0XCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vU2Fucy9SRUFETUUudHh0XCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vU2Fucy9jbXVuLXNhbnMuY3NzXCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vU2Fucy9jbXVuc2kuZW90XCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vU2Fucy9jbXVuc2kuc3ZnXCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vU2Fucy9jbXVuc2kudHRmXCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vU2Fucy9jbXVuc2kud29mZlwiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL1NhbnMvY211bnNvLmVvdFwiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL1NhbnMvY211bnNvLnN2Z1wiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL1NhbnMvY211bnNvLnR0ZlwiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL1NhbnMvY211bnNvLndvZmZcIixcblx0XCJmb250cy9Db21wdXRlck1vZGVybi9TYW5zL2NtdW5zcy5lb3RcIixcblx0XCJmb250cy9Db21wdXRlck1vZGVybi9TYW5zL2NtdW5zcy5zdmdcIixcblx0XCJmb250cy9Db21wdXRlck1vZGVybi9TYW5zL2NtdW5zcy50dGZcIixcblx0XCJmb250cy9Db21wdXRlck1vZGVybi9TYW5zL2NtdW5zcy53b2ZmXCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vU2Fucy9jbXVuc3guZW90XCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vU2Fucy9jbXVuc3guc3ZnXCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vU2Fucy9jbXVuc3gudHRmXCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vU2Fucy9jbXVuc3gud29mZlwiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL1NhbnMgRGVtaS1Db25kZW5zZWQvT0ZMLUZBUS50eHRcIixcblx0XCJmb250cy9Db21wdXRlck1vZGVybi9TYW5zIERlbWktQ29uZGVuc2VkL09GTC50eHRcIixcblx0XCJmb250cy9Db21wdXRlck1vZGVybi9TYW5zIERlbWktQ29uZGVuc2VkL1JFQURNRS50eHRcIixcblx0XCJmb250cy9Db21wdXRlck1vZGVybi9TYW5zIERlbWktQ29uZGVuc2VkL2NtdW4tc2Fucy1kZW1pY29uZGVuc2VkLmNzc1wiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL1NhbnMgRGVtaS1Db25kZW5zZWQvY211bnNzZGMuZW90XCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vU2FucyBEZW1pLUNvbmRlbnNlZC9jbXVuc3NkYy5zdmdcIixcblx0XCJmb250cy9Db21wdXRlck1vZGVybi9TYW5zIERlbWktQ29uZGVuc2VkL2NtdW5zc2RjLnR0ZlwiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL1NhbnMgRGVtaS1Db25kZW5zZWQvY211bnNzZGMud29mZlwiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL1NlcmlmL09GTC1GQVEudHh0XCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vU2VyaWYvT0ZMLnR4dFwiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL1NlcmlmL1JFQURNRS50eHRcIixcblx0XCJmb250cy9Db21wdXRlck1vZGVybi9TZXJpZi9jbXVuLXNlcmlmLmNzc1wiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL1NlcmlmL2NtdW5iaS5lb3RcIixcblx0XCJmb250cy9Db21wdXRlck1vZGVybi9TZXJpZi9jbXVuYmkuc3ZnXCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vU2VyaWYvY211bmJpLnR0ZlwiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL1NlcmlmL2NtdW5iaS53b2ZmXCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vU2VyaWYvY211bmJ4LmVvdFwiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL1NlcmlmL2NtdW5ieC5zdmdcIixcblx0XCJmb250cy9Db21wdXRlck1vZGVybi9TZXJpZi9jbXVuYngudHRmXCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vU2VyaWYvY211bmJ4LndvZmZcIixcblx0XCJmb250cy9Db21wdXRlck1vZGVybi9TZXJpZi9jbXVucm0uZW90XCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vU2VyaWYvY211bnJtLnN2Z1wiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL1NlcmlmL2NtdW5ybS50dGZcIixcblx0XCJmb250cy9Db21wdXRlck1vZGVybi9TZXJpZi9jbXVucm0ud29mZlwiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL1NlcmlmL2NtdW50aS5lb3RcIixcblx0XCJmb250cy9Db21wdXRlck1vZGVybi9TZXJpZi9jbXVudGkuc3ZnXCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vU2VyaWYvY211bnRpLnR0ZlwiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL1NlcmlmL2NtdW50aS53b2ZmXCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vU2VyaWYgU2xhbnRlZC9PRkwtRkFRLnR4dFwiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL1NlcmlmIFNsYW50ZWQvT0ZMLnR4dFwiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL1NlcmlmIFNsYW50ZWQvUkVBRE1FLnR4dFwiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL1NlcmlmIFNsYW50ZWQvY211bi1zZXJpZi1zbGFudGVkLmNzc1wiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL1NlcmlmIFNsYW50ZWQvY211bmJsLmVvdFwiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL1NlcmlmIFNsYW50ZWQvY211bmJsLnN2Z1wiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL1NlcmlmIFNsYW50ZWQvY211bmJsLnR0ZlwiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL1NlcmlmIFNsYW50ZWQvY211bmJsLndvZmZcIixcblx0XCJmb250cy9Db21wdXRlck1vZGVybi9TZXJpZiBTbGFudGVkL2NtdW5zbC5lb3RcIixcblx0XCJmb250cy9Db21wdXRlck1vZGVybi9TZXJpZiBTbGFudGVkL2NtdW5zbC5zdmdcIixcblx0XCJmb250cy9Db21wdXRlck1vZGVybi9TZXJpZiBTbGFudGVkL2NtdW5zbC50dGZcIixcblx0XCJmb250cy9Db21wdXRlck1vZGVybi9TZXJpZiBTbGFudGVkL2NtdW5zbC53b2ZmXCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vVHlwZXdyaXRlci9PRkwtRkFRLnR4dFwiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL1R5cGV3cml0ZXIvT0ZMLnR4dFwiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL1R5cGV3cml0ZXIvUkVBRE1FLnR4dFwiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL1R5cGV3cml0ZXIvY211bi10eXBld3JpdGVyLmNzc1wiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL1R5cGV3cml0ZXIvY211bml0LmVvdFwiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL1R5cGV3cml0ZXIvY211bml0LnN2Z1wiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL1R5cGV3cml0ZXIvY211bml0LnR0ZlwiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL1R5cGV3cml0ZXIvY211bml0LndvZmZcIixcblx0XCJmb250cy9Db21wdXRlck1vZGVybi9UeXBld3JpdGVyL2NtdW50Yi5lb3RcIixcblx0XCJmb250cy9Db21wdXRlck1vZGVybi9UeXBld3JpdGVyL2NtdW50Yi5zdmdcIixcblx0XCJmb250cy9Db21wdXRlck1vZGVybi9UeXBld3JpdGVyL2NtdW50Yi50dGZcIixcblx0XCJmb250cy9Db21wdXRlck1vZGVybi9UeXBld3JpdGVyL2NtdW50Yi53b2ZmXCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vVHlwZXdyaXRlci9jbXVudHQuZW90XCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vVHlwZXdyaXRlci9jbXVudHQuc3ZnXCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vVHlwZXdyaXRlci9jbXVudHQudHRmXCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vVHlwZXdyaXRlci9jbXVudHQud29mZlwiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL1R5cGV3cml0ZXIvY211bnR4LmVvdFwiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL1R5cGV3cml0ZXIvY211bnR4LnN2Z1wiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL1R5cGV3cml0ZXIvY211bnR4LnR0ZlwiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL1R5cGV3cml0ZXIvY211bnR4LndvZmZcIixcblx0XCJmb250cy9Db21wdXRlck1vZGVybi9UeXBld3JpdGVyIFZhcmlhYmxlL09GTC1GQVEudHh0XCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vVHlwZXdyaXRlciBWYXJpYWJsZS9PRkwudHh0XCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vVHlwZXdyaXRlciBWYXJpYWJsZS9SRUFETUUudHh0XCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vVHlwZXdyaXRlciBWYXJpYWJsZS9jbXVuLXR5cGV3cml0ZXItdmFyaWFibGUuY3NzXCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vVHlwZXdyaXRlciBWYXJpYWJsZS9jbXVudmkuZW90XCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vVHlwZXdyaXRlciBWYXJpYWJsZS9jbXVudmkuc3ZnXCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vVHlwZXdyaXRlciBWYXJpYWJsZS9jbXVudmkudHRmXCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vVHlwZXdyaXRlciBWYXJpYWJsZS9jbXVudmkud29mZlwiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL1R5cGV3cml0ZXIgVmFyaWFibGUvY211bnZ0LmVvdFwiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL1R5cGV3cml0ZXIgVmFyaWFibGUvY211bnZ0LnN2Z1wiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL1R5cGV3cml0ZXIgVmFyaWFibGUvY211bnZ0LnR0ZlwiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL1R5cGV3cml0ZXIgVmFyaWFibGUvY211bnZ0LndvZmZcIixcblx0XCJmb250cy9Db21wdXRlck1vZGVybi9UeXBld3JpdGVyTGlnaHQvT0ZMLUZBUS50eHRcIixcblx0XCJmb250cy9Db21wdXRlck1vZGVybi9UeXBld3JpdGVyTGlnaHQvT0ZMLnR4dFwiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL1R5cGV3cml0ZXJMaWdodC9SRUFETUUudHh0XCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vVHlwZXdyaXRlckxpZ2h0L2NtdW4tdHlwZXdyaXRlci1saWdodC5jc3NcIixcblx0XCJmb250cy9Db21wdXRlck1vZGVybi9UeXBld3JpdGVyTGlnaHQvY211bmJ0bC5lb3RcIixcblx0XCJmb250cy9Db21wdXRlck1vZGVybi9UeXBld3JpdGVyTGlnaHQvY211bmJ0bC5zdmdcIixcblx0XCJmb250cy9Db21wdXRlck1vZGVybi9UeXBld3JpdGVyTGlnaHQvY211bmJ0bC50dGZcIixcblx0XCJmb250cy9Db21wdXRlck1vZGVybi9UeXBld3JpdGVyTGlnaHQvY211bmJ0bC53b2ZmXCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vVHlwZXdyaXRlckxpZ2h0L2NtdW5idG8uZW90XCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vVHlwZXdyaXRlckxpZ2h0L2NtdW5idG8uc3ZnXCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vVHlwZXdyaXRlckxpZ2h0L2NtdW5idG8udHRmXCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vVHlwZXdyaXRlckxpZ2h0L2NtdW5idG8ud29mZlwiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL1VwcmlnaHQgSXRhbGljL09GTC1GQVEudHh0XCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vVXByaWdodCBJdGFsaWMvT0ZMLnR4dFwiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL1VwcmlnaHQgSXRhbGljL1JFQURNRS50eHRcIixcblx0XCJmb250cy9Db21wdXRlck1vZGVybi9VcHJpZ2h0IEl0YWxpYy9jbXVuLXVwcmlnaHQtaXRhbGljLmNzc1wiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL1VwcmlnaHQgSXRhbGljL2NtdW51aS5lb3RcIixcblx0XCJmb250cy9Db21wdXRlck1vZGVybi9VcHJpZ2h0IEl0YWxpYy9jbXVudWkuc3ZnXCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vVXByaWdodCBJdGFsaWMvY211bnVpLnR0ZlwiLFxuXHRcImZvbnRzL0NvbXB1dGVyTW9kZXJuL1VwcmlnaHQgSXRhbGljL2NtdW51aS53b2ZmXCIsXG5cdFwiZm9udHMvQ29tcHV0ZXJNb2Rlcm4vZ2VuZXJhdG9yX2NvbmZpZy50eHRcIixcblx0XCJmb250cy9MZW9uU2Fucy8uRFNfU3RvcmVcIixcblx0XCJmb250cy9MZW9uU2Fucy9BVVRIT1JTLnR4dFwiLFxuXHRcImZvbnRzL0xlb25TYW5zL0NPTlRSSUJVVElORy5tZFwiLFxuXHRcImZvbnRzL0xlb25TYW5zL0NPTlRSSUJVVE9SUy50eHRcIixcblx0XCJmb250cy9MZW9uU2Fucy9MSUNFTlNFLnR4dFwiLFxuXHRcImZvbnRzL0xlb25TYW5zL0xlb25TYW5zLUJvbGQub3RmXCIsXG5cdFwiZm9udHMvTGVvblNhbnMvTGVvblNhbnMtTGlnaHQub3RmXCIsXG5cdFwiZm9udHMvTGVvblNhbnMvTGVvblNhbnMtTWVkaXVtLm90ZlwiLFxuXHRcImZvbnRzL0xlb25TYW5zL0xlb25TYW5zLVJlZ3VsYXIub3RmXCIsXG5cdFwiZm9udHMvTGVvblNhbnMvTGVvblNhbnMtVGhpbi5vdGZcIixcblx0XCJmb250cy9MZW9uU2Fucy9PRkwudHh0XCIsXG5cdFwiZm9udHMvTGVvblNhbnMvUkVBRE1FLm1kXCIsXG5cdFwiZ2xvYmFsLmNzc1wiLFxuXHRcIm1hbmlmZXN0Lmpzb25cIixcblx0XCJ0ZWNobm8vOzMtMzE3MjM1MDc1Lm1wM1wiLFxuXHRcInRlY2huby9UcmFzaDg3LTg2MDU1MjI5OS5tcDNcIixcblx0XCJ0ZWNobm8vVHJhc2g4OC04NjA1NTI2OTUubXAzXCIsXG5cdFwidGVjaG5vL1RyYXNoODktODYwNTUzNDc4Lm1wM1wiLFxuXHRcInRlY2huby9UcmFzaDkwLTg2MDU1Mzk2NC5tcDNcIixcblx0XCJ0ZWNobm8vVHJhc2hCLTU2NTE0MTM1My5tcDNcIixcblx0XCJ0ZWNobm8vbXVzaWNMaXN0Lmpzb25cIlxuXTtcbmV4cG9ydCB7IGZpbGVzIGFzIGFzc2V0cyB9OyAvLyBsZWdhY3lcblxuZXhwb3J0IGNvbnN0IHNoZWxsID0gW1xuXHRcImNsaWVudC9jbGllbnQuZWU4YmVhNmUuanNcIixcblx0XCJjbGllbnQvaW5kZXguZjRkZmQ0OWEuanNcIixcblx0XCJjbGllbnQvcmVzdW1lLjA1NDI1ODRlLmpzXCIsXG5cdFwiY2xpZW50L2Fib3V0LmFmZDQ5NDUwLmpzXCIsXG5cdFwiY2xpZW50L2luZGV4LmI3YjRhYzg3LmpzXCIsXG5cdFwiY2xpZW50L1tzbHVnXS41YmRmZjczZC5qc1wiLFxuXHRcImNsaWVudC9zYXBwZXItZGV2LWNsaWVudC4xZTdhNGE1ZS5qc1wiXG5dO1xuXG5leHBvcnQgY29uc3Qgcm91dGVzID0gW1xuXHR7IHBhdHRlcm46IC9eXFwvJC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL3Jlc3VtZVxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvYWJvdXRcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2Jsb2dcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2Jsb2dcXC8oW15cXC9dKz8pXFwvPyQvIH1cbl07IiwiaW1wb3J0IHsgdGltZXN0YW1wLCBmaWxlcywgc2hlbGwsIHJvdXRlcyB9IGZyb20gJ0BzYXBwZXIvc2VydmljZS13b3JrZXInO1xuXG5jb25zdCBBU1NFVFMgPSBgY2FjaGUke3RpbWVzdGFtcH1gO1xuXG4vLyBgc2hlbGxgIGlzIGFuIGFycmF5IG9mIGFsbCB0aGUgZmlsZXMgZ2VuZXJhdGVkIGJ5IHRoZSBidW5kbGVyLFxuLy8gYGZpbGVzYCBpcyBhbiBhcnJheSBvZiBldmVyeXRoaW5nIGluIHRoZSBgc3RhdGljYCBkaXJlY3RvcnlcbmNvbnN0IHRvX2NhY2hlID0gc2hlbGwuY29uY2F0KGZpbGVzKTtcbmNvbnN0IGNhY2hlZCA9IG5ldyBTZXQodG9fY2FjaGUpO1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2luc3RhbGwnLCBldmVudCA9PiB7XG5cdGV2ZW50LndhaXRVbnRpbChcblx0XHRjYWNoZXNcblx0XHRcdC5vcGVuKEFTU0VUUylcblx0XHRcdC50aGVuKGNhY2hlID0+IGNhY2hlLmFkZEFsbCh0b19jYWNoZSkpXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdHNlbGYuc2tpcFdhaXRpbmcoKTtcblx0XHRcdH0pXG5cdCk7XG59KTtcblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdhY3RpdmF0ZScsIGV2ZW50ID0+IHtcblx0ZXZlbnQud2FpdFVudGlsKFxuXHRcdGNhY2hlcy5rZXlzKCkudGhlbihhc3luYyBrZXlzID0+IHtcblx0XHRcdC8vIGRlbGV0ZSBvbGQgY2FjaGVzXG5cdFx0XHRmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG5cdFx0XHRcdGlmIChrZXkgIT09IEFTU0VUUykgYXdhaXQgY2FjaGVzLmRlbGV0ZShrZXkpO1xuXHRcdFx0fVxuXG5cdFx0XHRzZWxmLmNsaWVudHMuY2xhaW0oKTtcblx0XHR9KVxuXHQpO1xufSk7XG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignZmV0Y2gnLCBldmVudCA9PiB7XG5cdGlmIChldmVudC5yZXF1ZXN0Lm1ldGhvZCAhPT0gJ0dFVCcgfHwgZXZlbnQucmVxdWVzdC5oZWFkZXJzLmhhcygncmFuZ2UnKSkgcmV0dXJuO1xuXG5cdGNvbnN0IHVybCA9IG5ldyBVUkwoZXZlbnQucmVxdWVzdC51cmwpO1xuXG5cdC8vIGRvbid0IHRyeSB0byBoYW5kbGUgZS5nLiBkYXRhOiBVUklzXG5cdGlmICghdXJsLnByb3RvY29sLnN0YXJ0c1dpdGgoJ2h0dHAnKSkgcmV0dXJuO1xuXG5cdC8vIGlnbm9yZSBkZXYgc2VydmVyIHJlcXVlc3RzXG5cdGlmICh1cmwuaG9zdG5hbWUgPT09IHNlbGYubG9jYXRpb24uaG9zdG5hbWUgJiYgdXJsLnBvcnQgIT09IHNlbGYubG9jYXRpb24ucG9ydCkgcmV0dXJuO1xuXG5cdC8vIGFsd2F5cyBzZXJ2ZSBzdGF0aWMgZmlsZXMgYW5kIGJ1bmRsZXItZ2VuZXJhdGVkIGFzc2V0cyBmcm9tIGNhY2hlXG5cdGlmICh1cmwuaG9zdCA9PT0gc2VsZi5sb2NhdGlvbi5ob3N0ICYmIGNhY2hlZC5oYXModXJsLnBhdGhuYW1lKSkge1xuXHRcdGV2ZW50LnJlc3BvbmRXaXRoKGNhY2hlcy5tYXRjaChldmVudC5yZXF1ZXN0KSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gZm9yIHBhZ2VzLCB5b3UgbWlnaHQgd2FudCB0byBzZXJ2ZSBhIHNoZWxsIGBzZXJ2aWNlLXdvcmtlci1pbmRleC5odG1sYCBmaWxlLFxuXHQvLyB3aGljaCBTYXBwZXIgaGFzIGdlbmVyYXRlZCBmb3IgeW91LiBJdCdzIG5vdCByaWdodCBmb3IgZXZlcnlcblx0Ly8gYXBwLCBidXQgaWYgaXQncyByaWdodCBmb3IgeW91cnMgdGhlbiB1bmNvbW1lbnQgdGhpcyBzZWN0aW9uXG5cdC8qXG5cdGlmICh1cmwub3JpZ2luID09PSBzZWxmLm9yaWdpbiAmJiByb3V0ZXMuZmluZChyb3V0ZSA9PiByb3V0ZS5wYXR0ZXJuLnRlc3QodXJsLnBhdGhuYW1lKSkpIHtcblx0XHRldmVudC5yZXNwb25kV2l0aChjYWNoZXMubWF0Y2goJy9zZXJ2aWNlLXdvcmtlci1pbmRleC5odG1sJykpO1xuXHRcdHJldHVybjtcblx0fVxuXHQqL1xuXG5cdGlmIChldmVudC5yZXF1ZXN0LmNhY2hlID09PSAnb25seS1pZi1jYWNoZWQnKSByZXR1cm47XG5cblx0Ly8gZm9yIGV2ZXJ5dGhpbmcgZWxzZSwgdHJ5IHRoZSBuZXR3b3JrIGZpcnN0LCBmYWxsaW5nIGJhY2sgdG9cblx0Ly8gY2FjaGUgaWYgdGhlIHVzZXIgaXMgb2ZmbGluZS4gKElmIHRoZSBwYWdlcyBuZXZlciBjaGFuZ2UsIHlvdVxuXHQvLyBtaWdodCBwcmVmZXIgYSBjYWNoZS1maXJzdCBhcHByb2FjaCB0byBhIG5ldHdvcmstZmlyc3Qgb25lLilcblx0ZXZlbnQucmVzcG9uZFdpdGgoXG5cdFx0Y2FjaGVzXG5cdFx0XHQub3Blbihgb2ZmbGluZSR7dGltZXN0YW1wfWApXG5cdFx0XHQudGhlbihhc3luYyBjYWNoZSA9PiB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChldmVudC5yZXF1ZXN0KTtcblx0XHRcdFx0XHRjYWNoZS5wdXQoZXZlbnQucmVxdWVzdCwgcmVzcG9uc2UuY2xvbmUoKSk7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlO1xuXHRcdFx0XHR9IGNhdGNoKGVycikge1xuXHRcdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY2FjaGUubWF0Y2goZXZlbnQucmVxdWVzdCk7XG5cdFx0XHRcdFx0aWYgKHJlc3BvbnNlKSByZXR1cm4gcmVzcG9uc2U7XG5cblx0XHRcdFx0XHR0aHJvdyBlcnI7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdCk7XG59KTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Q0FBQTtDQUNPLE1BQU0sU0FBUyxHQUFHLGFBQWEsQ0FBQztBQUN2QztDQUNPLE1BQU0sS0FBSyxHQUFHO0NBQ3JCLENBQUMsMkJBQTJCO0NBQzVCLENBQUMsV0FBVztDQUNaLENBQUMsYUFBYTtDQUNkLENBQUMseUNBQXlDO0NBQzFDLENBQUMscUNBQXFDO0NBQ3RDLENBQUMsd0NBQXdDO0NBQ3pDLENBQUMsNkNBQTZDO0NBQzlDLENBQUMseUNBQXlDO0NBQzFDLENBQUMseUNBQXlDO0NBQzFDLENBQUMsMENBQTBDO0NBQzNDLENBQUMseUNBQXlDO0NBQzFDLENBQUMseUNBQXlDO0NBQzFDLENBQUMsMENBQTBDO0NBQzNDLENBQUMseUNBQXlDO0NBQzFDLENBQUMseUNBQXlDO0NBQzFDLENBQUMsMENBQTBDO0NBQzNDLENBQUMseUNBQXlDO0NBQzFDLENBQUMseUNBQXlDO0NBQzFDLENBQUMsMENBQTBDO0NBQzNDLENBQUMsa0RBQWtEO0NBQ25ELENBQUMsOENBQThDO0NBQy9DLENBQUMsaURBQWlEO0NBQ2xELENBQUMsK0RBQStEO0NBQ2hFLENBQUMsa0RBQWtEO0NBQ25ELENBQUMsa0RBQWtEO0NBQ25ELENBQUMsa0RBQWtEO0NBQ25ELENBQUMsbURBQW1EO0NBQ3BELENBQUMsa0RBQWtEO0NBQ25ELENBQUMsa0RBQWtEO0NBQ25ELENBQUMsa0RBQWtEO0NBQ25ELENBQUMsbURBQW1EO0NBQ3BELENBQUMseURBQXlEO0NBQzFELENBQUMscURBQXFEO0NBQ3RELENBQUMsd0RBQXdEO0NBQ3pELENBQUMsNkVBQTZFO0NBQzlFLENBQUMsd0RBQXdEO0NBQ3pELENBQUMsd0RBQXdEO0NBQ3pELENBQUMsd0RBQXdEO0NBQ3pELENBQUMseURBQXlEO0NBQzFELENBQUMsMkNBQTJDO0NBQzVDLENBQUMsdUNBQXVDO0NBQ3hDLENBQUMsMENBQTBDO0NBQzNDLENBQUMsaURBQWlEO0NBQ2xELENBQUMsMkNBQTJDO0NBQzVDLENBQUMsMkNBQTJDO0NBQzVDLENBQUMsMkNBQTJDO0NBQzVDLENBQUMsNENBQTRDO0NBQzdDLENBQUMsMkNBQTJDO0NBQzVDLENBQUMsMkNBQTJDO0NBQzVDLENBQUMsMkNBQTJDO0NBQzVDLENBQUMsNENBQTRDO0NBQzdDLENBQUMsMkNBQTJDO0NBQzVDLENBQUMsMkNBQTJDO0NBQzVDLENBQUMsMkNBQTJDO0NBQzVDLENBQUMsNENBQTRDO0NBQzdDLENBQUMsMkNBQTJDO0NBQzVDLENBQUMsMkNBQTJDO0NBQzVDLENBQUMsMkNBQTJDO0NBQzVDLENBQUMsNENBQTRDO0NBQzdDLENBQUMsa0NBQWtDO0NBQ25DLENBQUMsOEJBQThCO0NBQy9CLENBQUMsaUNBQWlDO0NBQ2xDLENBQUMsdUNBQXVDO0NBQ3hDLENBQUMsbUNBQW1DO0NBQ3BDLENBQUMsc0NBQXNDO0NBQ3ZDLENBQUMseUNBQXlDO0NBQzFDLENBQUMsc0NBQXNDO0NBQ3ZDLENBQUMsc0NBQXNDO0NBQ3ZDLENBQUMsc0NBQXNDO0NBQ3ZDLENBQUMsdUNBQXVDO0NBQ3hDLENBQUMsc0NBQXNDO0NBQ3ZDLENBQUMsc0NBQXNDO0NBQ3ZDLENBQUMsc0NBQXNDO0NBQ3ZDLENBQUMsdUNBQXVDO0NBQ3hDLENBQUMsc0NBQXNDO0NBQ3ZDLENBQUMsc0NBQXNDO0NBQ3ZDLENBQUMsc0NBQXNDO0NBQ3ZDLENBQUMsdUNBQXVDO0NBQ3hDLENBQUMsc0NBQXNDO0NBQ3ZDLENBQUMsc0NBQXNDO0NBQ3ZDLENBQUMsc0NBQXNDO0NBQ3ZDLENBQUMsdUNBQXVDO0NBQ3hDLENBQUMsc0RBQXNEO0NBQ3ZELENBQUMsa0RBQWtEO0NBQ25ELENBQUMscURBQXFEO0NBQ3RELENBQUMsc0VBQXNFO0NBQ3ZFLENBQUMsdURBQXVEO0NBQ3hELENBQUMsdURBQXVEO0NBQ3hELENBQUMsdURBQXVEO0NBQ3hELENBQUMsd0RBQXdEO0NBQ3pELENBQUMsd0NBQXdDO0NBQ3pDLENBQUMsb0NBQW9DO0NBQ3JDLENBQUMsdUNBQXVDO0NBQ3hDLENBQUMsMkNBQTJDO0NBQzVDLENBQUMsdUNBQXVDO0NBQ3hDLENBQUMsdUNBQXVDO0NBQ3hDLENBQUMsdUNBQXVDO0NBQ3hDLENBQUMsd0NBQXdDO0NBQ3pDLENBQUMsdUNBQXVDO0NBQ3hDLENBQUMsdUNBQXVDO0NBQ3hDLENBQUMsdUNBQXVDO0NBQ3hDLENBQUMsd0NBQXdDO0NBQ3pDLENBQUMsdUNBQXVDO0NBQ3hDLENBQUMsdUNBQXVDO0NBQ3hDLENBQUMsdUNBQXVDO0NBQ3hDLENBQUMsd0NBQXdDO0NBQ3pDLENBQUMsdUNBQXVDO0NBQ3hDLENBQUMsdUNBQXVDO0NBQ3hDLENBQUMsdUNBQXVDO0NBQ3hDLENBQUMsd0NBQXdDO0NBQ3pDLENBQUMsZ0RBQWdEO0NBQ2pELENBQUMsNENBQTRDO0NBQzdDLENBQUMsK0NBQStDO0NBQ2hELENBQUMsMkRBQTJEO0NBQzVELENBQUMsK0NBQStDO0NBQ2hELENBQUMsK0NBQStDO0NBQ2hELENBQUMsK0NBQStDO0NBQ2hELENBQUMsZ0RBQWdEO0NBQ2pELENBQUMsK0NBQStDO0NBQ2hELENBQUMsK0NBQStDO0NBQ2hELENBQUMsK0NBQStDO0NBQ2hELENBQUMsZ0RBQWdEO0NBQ2pELENBQUMsNkNBQTZDO0NBQzlDLENBQUMseUNBQXlDO0NBQzFDLENBQUMsNENBQTRDO0NBQzdDLENBQUMscURBQXFEO0NBQ3RELENBQUMsNENBQTRDO0NBQzdDLENBQUMsNENBQTRDO0NBQzdDLENBQUMsNENBQTRDO0NBQzdDLENBQUMsNkNBQTZDO0NBQzlDLENBQUMsNENBQTRDO0NBQzdDLENBQUMsNENBQTRDO0NBQzdDLENBQUMsNENBQTRDO0NBQzdDLENBQUMsNkNBQTZDO0NBQzlDLENBQUMsNENBQTRDO0NBQzdDLENBQUMsNENBQTRDO0NBQzdDLENBQUMsNENBQTRDO0NBQzdDLENBQUMsNkNBQTZDO0NBQzlDLENBQUMsNENBQTRDO0NBQzdDLENBQUMsNENBQTRDO0NBQzdDLENBQUMsNENBQTRDO0NBQzdDLENBQUMsNkNBQTZDO0NBQzlDLENBQUMsc0RBQXNEO0NBQ3ZELENBQUMsa0RBQWtEO0NBQ25ELENBQUMscURBQXFEO0NBQ3RELENBQUMsdUVBQXVFO0NBQ3hFLENBQUMscURBQXFEO0NBQ3RELENBQUMscURBQXFEO0NBQ3RELENBQUMscURBQXFEO0NBQ3RELENBQUMsc0RBQXNEO0NBQ3ZELENBQUMscURBQXFEO0NBQ3RELENBQUMscURBQXFEO0NBQ3RELENBQUMscURBQXFEO0NBQ3RELENBQUMsc0RBQXNEO0NBQ3ZELENBQUMsa0RBQWtEO0NBQ25ELENBQUMsOENBQThDO0NBQy9DLENBQUMsaURBQWlEO0NBQ2xELENBQUMsZ0VBQWdFO0NBQ2pFLENBQUMsa0RBQWtEO0NBQ25ELENBQUMsa0RBQWtEO0NBQ25ELENB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
