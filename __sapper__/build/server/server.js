'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var sirv = _interopDefault(require('sirv'));
var polka = _interopDefault(require('polka'));
var compression = _interopDefault(require('compression'));
var fs = _interopDefault(require('fs'));
var path = _interopDefault(require('path'));
var Stream = _interopDefault(require('stream'));
var http = _interopDefault(require('http'));
var Url = _interopDefault(require('url'));
var https = _interopDefault(require('https'));
var zlib = _interopDefault(require('zlib'));

// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: 'What is Sapper?',
		slug: 'what-is-sapper',
		html: `
			<p>First, you have to know what <a href='https://svelte.dev'>Svelte</a> is. Svelte is a UI framework with a bold new idea: rather than providing a library that you write code with (like React or Vue, for example), it's a compiler that turns your components into highly optimized vanilla JavaScript. If you haven't already read the <a href='https://svelte.dev/blog/frameworks-without-the-framework'>introductory blog post</a>, you should!</p>

			<p>Sapper is a Next.js-style framework (<a href='blog/how-is-sapper-different-from-next'>more on that here</a>) built around Svelte. It makes it embarrassingly easy to create extremely high performance web apps. Out of the box, you get:</p>

			<ul>
				<li>Code-splitting, dynamic imports and hot module replacement, powered by webpack</li>
				<li>Server-side rendering (SSR) with client-side hydration</li>
				<li>Service worker for offline support, and all the PWA bells and whistles</li>
				<li>The nicest development experience you've ever had, or your money back</li>
			</ul>

			<p>It's implemented as Express middleware. Everything is set up and waiting for you to get started, but you keep complete control over the server, service worker, webpack config and everything else, so it's as flexible as you need it to be.</p>
		`
	},

	{
		title: 'How to use Sapper',
		slug: 'how-to-use-sapper',
		html: `
			<h2>Step one</h2>
			<p>Create a new project, using <a href='https://github.com/Rich-Harris/degit'>degit</a>:</p>

			<pre><code>npx degit "sveltejs/sapper-template#rollup" my-app
			cd my-app
			npm install # or yarn!
			npm run dev
			</code></pre>

			<h2>Step two</h2>
			<p>Go to <a href='http://localhost:3000'>localhost:3000</a>. Open <code>my-app</code> in your editor. Edit the files in the <code>src/routes</code> directory or add new ones.</p>

			<h2>Step three</h2>
			<p>...</p>

			<h2>Step four</h2>
			<p>Resist overdone joke formats.</p>
		`
	},

	{
		title: 'Why the name?',
		slug: 'why-the-name',
		html: `
			<p>In war, the soldiers who build bridges, repair roads, clear minefields and conduct demolitions — all under combat conditions — are known as <em>sappers</em>.</p>

			<p>For web developers, the stakes are generally lower than those for combat engineers. But we face our own hostile environment: underpowered devices, poor network connections, and the complexity inherent in front-end engineering. Sapper, which is short for <strong>S</strong>velte <strong>app</strong> mak<strong>er</strong>, is your courageous and dutiful ally.</p>
		`
	},

	{
		title: 'How is Sapper different from Next.js?',
		slug: 'how-is-sapper-different-from-next',
		html: `
			<p><a href='https://github.com/zeit/next.js'>Next.js</a> is a React framework from <a href='https://vercel.com/'>Vercel</a>, and is the inspiration for Sapper. There are a few notable differences, however:</p>

			<ul>
				<li>It's powered by <a href='https://svelte.dev'>Svelte</a> instead of React, so it's faster and your apps are smaller</li>
				<li>Instead of route masking, we encode route parameters in filenames. For example, the page you're looking at right now is <code>src/routes/blog/[slug].svelte</code></li>
				<li>As well as pages (Svelte components, which render on server or client), you can create <em>server routes</em> in your <code>routes</code> directory. These are just <code>.js</code> files that export functions corresponding to HTTP methods, and receive Express <code>request</code> and <code>response</code> objects as arguments. This makes it very easy to, for example, add a JSON API such as the one <a href='blog/how-is-sapper-different-from-next.json'>powering this very page</a></li>
				<li>Links are just <code>&lt;a&gt;</code> elements, rather than framework-specific <code>&lt;Link&gt;</code> components. That means, for example, that <a href='blog/how-can-i-get-involved'>this link right here</a>, despite being inside a blob of HTML, works with the router as you'd expect.</li>
			</ul>
		`
	},

	{
		title: 'How can I get involved?',
		slug: 'how-can-i-get-involved',
		html: `
			<p>We're so glad you asked! Come on over to the <a href='https://github.com/sveltejs/svelte'>Svelte</a> and <a href='https://github.com/sveltejs/sapper'>Sapper</a> repos, and join us in the <a href='https://svelte.dev/chat'>Discord chatroom</a>. Everyone is welcome, especially you!</p>
		`
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

const contents = JSON.stringify(posts.map(post => {
	return {
		title: post.title,
		slug: post.slug
	};
}));

function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}

var route_0 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	get: get
});

const lookup = new Map();
posts.forEach(post => {
	lookup.set(post.slug, JSON.stringify(post));
});

function get$1(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	const { slug } = req.params;

	if (lookup.has(slug)) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(lookup.get(slug));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}

var route_1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	get: get$1
});

function noop() { }
function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}
function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
function get_current_component() {
    if (!current_component)
        throw new Error(`Function called outside component initialization`);
    return current_component;
}
function afterUpdate(fn) {
    get_current_component().$$.after_update.push(fn);
}
function setContext(key, context) {
    get_current_component().$$.context.set(key, context);
}
const escaped = {
    '"': '&quot;',
    "'": '&#39;',
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
};
function escape(html) {
    return String(html).replace(/["'&<>]/g, match => escaped[match]);
}
function each(items, fn) {
    let str = '';
    for (let i = 0; i < items.length; i += 1) {
        str += fn(items[i], i);
    }
    return str;
}
const missing_component = {
    $$render: () => ''
};
function validate_component(component, name) {
    if (!component || !component.$$render) {
        if (name === 'svelte:component')
            name += ' this={...}';
        throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
    }
    return component;
}
let on_destroy;
function create_ssr_component(fn) {
    function $$render(result, props, bindings, slots) {
        const parent_component = current_component;
        const $$ = {
            on_destroy,
            context: new Map(parent_component ? parent_component.$$.context : []),
            // these will be immediately discarded
            on_mount: [],
            before_update: [],
            after_update: [],
            callbacks: blank_object()
        };
        set_current_component({ $$ });
        const html = fn(result, props, bindings, slots);
        set_current_component(parent_component);
        return html;
    }
    return {
        render: (props = {}, options = {}) => {
            on_destroy = [];
            const result = { title: '', head: '', css: new Set() };
            const html = $$render(result, props, {}, options);
            run_all(on_destroy);
            return {
                html,
                css: {
                    code: Array.from(result.css).map(css => css.code).join('\n'),
                    map: null // TODO
                },
                head: result.title + result.head
            };
        },
        $$render
    };
}
function add_attribute(name, value, boolean) {
    if (value == null || (boolean && !value))
        return '';
    return ` ${name}${value === true ? '' : `=${typeof value === 'string' ? JSON.stringify(escape(value)) : `"${value}"`}`}`;
}

/* src/components/SelfPortrait.svelte generated by Svelte v3.24.0 */

const css = {
	code: "@keyframes svelte-p4xb06-hideshow{0%{transform:translate(0px, 0px)}33%{transform:translate(0px, -1px)}66%{transform:translate(0px, 1px)}100%{transform:translate(0px, 0px)}}#path5803.svelte-p4xb06{fill:rgb(136, 136, 136) !important;stroke:rgb(136, 136, 136) !important}#path5805.svelte-p4xb06{animation:svelte-p4xb06-hideshow .5s ease infinite;fill:rgb(136, 136, 136) !important;stroke:rgb(136, 136, 136) !important}#path5807.svelte-p4xb06{animation:svelte-p4xb06-hideshow .5s linear infinite;fill:rgb(136, 136, 136) !important;stroke:rgb(136, 136, 136) !important}#path3456.svelte-p4xb06{stroke:rgb(164, 164, 164) !important;fill:#FDFAF8F0 !important}#path3452.svelte-p4xb06{stroke:rgb(164, 164, 164) !important;fill:#FDFAF8F0 !important}#path5829.svelte-p4xb06{stroke:rgb(164, 164, 164) !important}#path5719.svelte-p4xb06{fill:#FBFAF9F0 !important;stroke:rgb(164, 164, 164) !important}#path5929.svelte-p4xb06{fill:rgb(164, 164, 164) !important;stroke:rgb(164, 164, 164) !important}#path5721.svelte-p4xb06{fill:rgb(131, 131, 131) !important;stroke:rgb(164, 164, 164) !important}#path5831.svelte-p4xb06{stroke:rgb(164, 164, 164) !important}#path5735.svelte-p4xb06{fill:#FBFAF9F0 !important;stroke:rgb(164, 164, 164) !important}#path5737.svelte-p4xb06{fill:rgb(164, 164, 164) !important;stroke:rgb(164, 164, 164) !important}#path5809.svelte-p4xb06{fill:rgb(164, 164, 164) !important;stroke:rgb(164, 164, 164) !important}#path5927.svelte-p4xb06{fill:rgb(131, 131, 131) !important;stroke:rgb(164, 164, 164) !important}#path5739.svelte-p4xb06{fill:rgba(255, 199, 196, 0.063) !important;stroke:rgb(164, 164, 164) !important}#path5848.svelte-p4xb06{stroke:rgb(164, 164, 164) !important}#path5956.svelte-p4xb06{fill:rgb(164, 164, 164) !important;stroke:rgb(164, 164, 164) !important}#path5958.svelte-p4xb06{fill:rgb(164, 164, 164) !important;stroke:rgb(164, 164, 164) !important}#path5844.svelte-p4xb06{stroke:rgb(164, 164, 164) !important}#path5842.svelte-p4xb06{stroke:rgb(164, 164, 164) !important}#path5952.svelte-p4xb06{fill:rgba(213, 213, 213, 0.851) !important;stroke:rgb(164, 164, 164) !important}#path5763.svelte-p4xb06{fill:#FBFAF9F0 !important;stroke:rgb(164, 164, 164) !important}#path5792.svelte-p4xb06{fill:rgba(238, 238, 238, 0.502) !important;stroke:rgb(164, 164, 164) !important}#path5815.svelte-p4xb06{stroke:rgb(164, 164, 164) !important}#path5833.svelte-p4xb06{stroke:rgb(164, 164, 164) !important}#path5817.svelte-p4xb06{stroke:rgb(164, 164, 164) !important}#path5821.svelte-p4xb06{stroke:rgb(164, 164, 164) !important}#path3454.svelte-p4xb06{fill:#FDFAF8F0 !important;stroke:rgb(164, 164, 164) !important}#path5823.svelte-p4xb06{fill:#FDFAF8F0 !important;stroke:rgba(210, 210, 210, 0.502) !important}#path5825.svelte-p4xb06{stroke:rgba(218, 218, 218, 0.502) !important;fill:rgba(218, 218, 218, 0.502) !important}#path5827.svelte-p4xb06{stroke:rgba(206, 206, 206, 0.502) !important;fill:rgba(218, 218, 218, 0.502) !important}#path5950.svelte-p4xb06{fill:rgba(193, 193, 193, 0.251) !important;stroke:rgb(164, 164, 164) !important}",
	map: "{\"version\":3,\"file\":\"SelfPortrait.svelte\",\"sources\":[\"SelfPortrait.svelte\"],\"sourcesContent\":[\"<svg\\n  viewBox=\\\"0 0 341.68462 328.07979\\\"\\n  id=\\\"selfportrait-object\\\"\\n  version=\\\"1.1\\\"\\n  height=\\\"65px\\\">\\n  <defs\\n    id=\\\"defs4\\\" />\\n  <g\\n    id=\\\"layer3\\\"\\n    style=\\\"display:inline;opacity:0.656\\\"\\n    transform=\\\"translate(-191.56549,-106.24631)\\\">\\n  <path\\n      style=\\\"display:inline;fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke:#535353;stroke-width:0.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dash-array:none;stroke-opacity:1;\\\"\\n      d=\\\"m 302.54069,194.23762 c 0,0 -2.77792,-0.50508 -3.283,1.51523 -0.50507,2.0203 -0.25254,5.3033 -2.27284,11.36421 -2.02031,6.06092 1.76777,10.85914 1.76777,10.85914 0,0 0,3.283 0.75761,5.05076 0.75761,1.76777 1.01015,6.31346 3.78807,8.5863 2.77792,2.27284 1.26269,9.09137 7.57615,7.57614 6.31345,-1.51522 18.43528,-42.17386 -8.33376,-44.95178 z\\\"\\n      id=\\\"path3454\\\" />\\n  <path\\n      style=\\\"fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\\\"\\n      d=\\\"m 403.10347,307.3519 13.1434,3.92893 9.5,7.5 7.75,2.25 15,10.75 37,15 10.5,9.25 16.5,13.5 1.25,4.5 c 0,0 17.75,34 19,51.25 1.25,17.24999 -340.9018,3.04772 -340.9018,3.04772 l 12.72792,-50.91169 8.48528,-16.26345 c 0,0 12.82031,-14.25635 21.92031,-15.55635 9.8995,-1.41422 6.39192,-0.97048 9.8995,-1.41422 0,0 65.76093,-28.63939 72.12489,-34.64823 4.62725,-4.36904 -3.53553,4.24265 -3.53553,4.24265 l -4.94975,7.77817 c 0,0 7.77817,28.28427 15.55634,34.64823 7.77818,6.36396 17.67767,21.92031 28.28428,22.62742 10.6066,0.7071 15.55635,7.77817 35.35533,-8.48528 19.79899,-16.26346 23.33453,-29.69849 26.87006,-44.54773 3.53554,-14.84924 -12.72792,-21.2132 -12.72792,-21.2132 z\\\"\\n      id=\\\"path5950\\\" />\\n  <path\\n      style=\\\"display:inline;fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke:#535353;stroke-width:0.5;stroke-linecap:butt;stroke-linejomin:miter;stroke-miterlimit:4;stroke-dash-array:none;stroke-opacity:1;\\\"\\n      d=\\\"m 320.31938,265.35236 c 0,0 4.91746,34.52885 -8.68732,52.12387 -11.76447,15.21496 31.947,71.26856 53.53809,65.65992 14.03179,-3.645 41.24345,-8.64959 51.0127,-55.05332 2.51196,-11.93173 -14.64721,-21.2132 -14.64721,-21.2132 0,0 -5.05077,-11.11168 -3.53554,-39.39595 0.99979,-18.6628 -17.18531,3.43605 -39.18441,4.46279 -12.56741,0.58655 -38.49631,-6.58411 -38.49631,-6.58411 z\\\"\\n      id=\\\"path3452\\\" />\\n  <path\\n      style=\\\"display:inline;fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke:#9b9b9b;stroke-width:0.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\\\"\\n      d=\\\"m 424.76915,198.02569 c 0,0 5.03114,-1.39679 8.33376,7.82868 3.09059,8.63323 -0.67094,18.03021 -3.53554,22.72843 -7.49922,12.29948 -16.66752,17.67767 -19.1929,14.89975 -5.80838,-7.82868 -3.97472,-3.72176 -6.06092,3.43452 -3.61879,4.97823 3.03046,15.50584 -15.40482,31.66828 -11.86929,14.89975 -33.0825,19.44544 -33.0825,19.44544 0,0 -20.45558,0.75761 -30.05203,-16.41498 -3.83715,-6.82453 -1.66118,-4.56258 -6.56832,-14.01173 -2.32838,-4.48352 -4.62617,-11.69735 -4.62617,-11.69735 -1.66519,-7.96036 -4.96795,-24.04093 -6.73572,-36.66784 -1.01015,-11.36422 1.38896,-19.69798 1.38896,-19.69798 l 0.12627,-50.76016 42.17387,-20.45558 47.98224,9.3439 14.39468,29.54697 -1.76777,39.14341 c 0,0 9.59645,-11.11168 12.62691,-8.33376 z\\\"\\n      id=\\\"path3456\\\" />\\n  <path\\n      id=\\\"path5719\\\"\\n      style=\\\"display:inline;opacity:1;fill:none;stroke:#000000;stroke-width:0.5;stroke-miterlimit:4.19999981;stroke-dasharray:none;stroke-opacity:1\\\"\\n      d=\\\"m 383.54188,202.66595 c 0,0.91245 -0.28487,1.75837 -0.77053,2.45367 -2.60108,1.07732 -6.16373,0.53397 -6.23006,0.87147 -0.96381,-0.78665 -1.57921,-1.98403 -1.57921,-3.32514 0.15753,-0.96299 0.20918,-2.17591 0.93988,-2.33348 3.25573,-0.70207 7.53963,-1.56517 7.63992,2.33348 z m -16.1494,0.81456 c 0,0 2.94863,-0.7202 3.36022,-1.02194 2.39288,-1.75421 7.50789,-3.10352 11.52639,-2.55401 2.20053,0.30091 4.07226,1.17121 4.98814,2.85622 0.22797,0.41939 -1.66308,1.11271 -2.46837,1.54887 -2.59167,1.4037 -9.20072,1.87094 -13.32775,0.5623 -1.27147,-0.40317 -3.90734,-0.49491 -4.07863,-1.39144 z\\\" />\\n  <path\\n      style=\\\"fill:#3a3a3a;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\\\"\\n      d=\\\"m 375.82725,200.29854 6.01041,-0.53033 c -0.53184,0 2.69076,4.64546 1.23744,5.12652 0,0 -2.2542,0.92759 -3.70554,0.80418 -1.91931,-0.1632 -3.55042,-0.10356 -3.54231,-0.0971 0,0 -2.29809,-5.12653 0,-5.3033 z\\\"\\n      id=\\\"path5929\\\" />\\n  <circle\\n      style=\\\"display:inline;opacity:1;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.5;stroke-miterlimit:4.19999981;stroke-dasharray:none;stroke-opacity:1\\\"\\n      id=\\\"path5721\\\"\\n      cx=\\\"379.80472\\\"\\n      cy=\\\"202.8176\\\"\\n      r=\\\"2.147855\\\" />\\n  <path\\n      style=\\\"display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\\\"\\n      d=\\\"m 340.29514,203.92246 c 0,0 -7.90066,-7.05811 -15.37957,-6.45235 -6.23119,0.5047 -6.18622,2.35143 -6.36397,2.2981 0,0 3.88909,2.82842 5.65686,3.27036 8.81729,0.0677 10.72445,-0.79894 12.28598,-0.13258 2.03239,0.8673 3.27037,0.83969 3.27037,0.83969 z\\\"\\n      id=\\\"path5735\\\" />\\n  <path\\n      style=\\\"display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\\\"\\n      d=\\\"m 325.04815,197.5585 c 0,0 -3.2671,3.73849 0.97227,4.94974 3.71231,1.06067 5.83363,-0.83969 5.83363,-0.83969 l -0.26516,-2.87262 -6.36397,-1.28163 z\\\"\\n      id=\\\"path5737\\\" />\\n  <path\\n      style=\\\"display:inline;fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\\\"\\n      d=\\\"m 357.16085,233.63795 c 0,0 0.59099,-0.67992 1.74003,0.11557 1.14905,0.7955 2.25391,1.76777 3.18199,1.23744 0.92807,-0.53033 -0.79296,-3.04468 -2.87263,-2.96101 -2.06355,0.083 -7.59723,11.14626 -15.46796,-0.83969 -1.14733,-1.74721 -2.47298,-1.27887 -3.36982,-0.83316 -0.96376,0.47896 -1.45168,1.00919 -1.27056,1.05413 0.69825,0.17325 3.56586,-0.25444 5.33363,0.89461\\\"\\n      id=\\\"path5739\\\" />\\n  <path\\n      style=\\\"fill:#161616;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.1;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;stroke-miterlimit:4;stroke-dasharray:none\\\"\\n      d=\\\"m 337.99687,249.03083 c -1.08333,0 -2.16667,0 -3.25,0 -0.25,0 -0.52639,-0.11181 -0.75,0 -0.0745,0.0373 0.0589,0.19107 0,0.25 -0.0878,0.0877 -1.07732,-0.0863 -1.25,0 -0.10541,0.0527 -0.14459,0.19729 -0.25,0.25 -0.15713,0.0786 -0.84287,-0.0786 -1,0 -0.0745,0.0373 0.0373,0.17546 0,0.25 -0.0527,0.10541 -0.16667,0.16666 -0.25,0.25 -0.0833,0.0833 -0.14459,0.19729 -0.25,0.25 -0.0745,0.0373 -0.19108,-0.0589 -0.25,0 -0.0589,0.0589 0.0589,0.19107 0,0.25 -0.0589,0.0589 -0.19108,-0.0589 -0.25,0 -0.0589,0.0589 0.0589,0.19107 0,0.25 -0.16783,0.16783 -0.33217,-0.16784 -0.5,0 -0.11785,0.11785 0.16667,0.5 0,0.5 -0.0833,0 0,-0.33334 0,-0.25 0,0.16666 0.0745,0.35092 0,0.5 -0.33333,0.66666 -0.25,-0.75 -0.25,0.25 0,0.58629 0.0589,-0.11786 -0.25,0.5 -0.0373,0.0745 0.0373,0.17546 0,0.25 -0.0527,0.10541 -0.1973,0.14459 -0.25,0.25 -0.0229,0.0459 0.0183,0.75 0,0.75 -0.0833,0 0.0589,-0.30893 0,-0.25 -0.11943,0.11943 -0.35663,0.64337 -0.25,0.75 0.11785,0.11785 0.38215,-0.11786 0.5,0 0.0589,0.0589 -0.0589,0.19107 0,0.25 0.0589,0.0589 0.17546,-0.0373 0.25,0 0.10541,0.0527 0.14459,0.19729 0.25,0.25 0.14907,0.0745 0.34189,-0.0527 0.5,0 1.81085,0.60361 -0.39415,-0.0721 0.75,0.5 0.0745,0.0373 0.17546,-0.0373 0.25,0 0.10541,0.0527 0.14459,0.19729 0.25,0.25 0.0745,0.0373 0.19107,-0.0589 0.25,0 0.0589,0.0589 -0.0589,0.19107 0,0.25 0.0589,0.0589 0.16667,0 0.25,0 0.0833,0.0833 0.18463,0.15194 0.25,0.25 0.10336,0.15504 0.19107,0.32322 0.25,0.5 0.10345,0.31035 -0.20523,0.27238 0.25,0.5 0.26667,0.13333 0.23333,-0.13334 0.5,0 0.10541,0.0527 0.14459,0.19729 0.25,0.25 0.0745,0.0373 0.16667,0 0.25,0 0.0833,0.0833 0.14459,0.19729 0.25,0.25 0.14907,0.0745 0.38215,-0.11786 0.5,0 0.0589,0.0589 -0.0589,0.19107 0,0.25 0.0589,0.0589 0.17094,-0.0264 0.25,0 0.17678,0.0589 0.33333,0.16666 0.5,0.25 0.16667,0.0833 0.34022,0.15413 0.5,0.25 0.4639,0.27834 1.38714,0.94761 1.75,1.25 2.16264,1.8022 -0.92109,-0.53073 1,0.75 0.0981,0.0654 0.14459,0.19729 0.25,0.25 0.0745,0.0373 0.16667,0 0.25,0 0.25,0 0.5,0 0.75,0 1.08333,0 2.16667,0 3.25,0 0.33333,0 0.66667,0 1,0 0.16667,0 0.33333,0 0.5,0 0.0833,0 0.19107,-0.0589 0.25,0 0.0589,0.0589 -0.0589,0.19107 0,0.25 0.0589,0.0589 0.16667,0 0.25,0 0.25,0 0.5,0 0.75,0 0.91667,0 1.83333,0 2.75,0 0.33333,0 0.6712,0.0548 1,0 0.33892,-0.0565 0.65986,-0.20141 1,-0.25 0.24749,-0.0354 0.50251,0.0354 0.75,0 2.4574,-0.35106 -0.62075,-0.25 2.25,-0.25 1.75,0 3.5,0 5.25,0 0.58333,0 1.16667,0 1.75,0 0.16667,0 0.33333,0 0.5,0 0.0833,0 0.17094,0.0264 0.25,0 0.17678,-0.0589 0.32322,-0.19108 0.5,-0.25 0.0791,-0.0264 0.16915,0.0202 0.25,0 0.25565,-0.0639 0.49434,-0.18609 0.75,-0.25 0.0808,-0.0202 0.19107,0.0589 0.25,0 0.0589,-0.0589 -0.0589,-0.19108 0,-0.25 0.0589,-0.0589 0.16667,0 0.25,0 0.16667,0 0.33333,0 0.5,0 0.91667,0 1.83333,0 2.75,0 0.0665,0 0.72936,0.0413 0.75,0 0.0745,-0.14908 -0.0527,-0.34189 0,-0.5 0.16583,-0.49749 0.23333,-0.11667 0.5,-0.25 0.10541,-0.0527 0.14459,-0.1973 0.25,-0.25 0.0745,-0.0373 0.19107,0.0589 0.25,0 0.0589,-0.0589 -0.0589,-0.19108 0,-0.25 0.0589,-0.0589 0.17546,0.0373 0.25,0 1.04044,-0.52022 -0.26726,0.0173 0.25,-0.5 0.0589,-0.0589 0.17546,0.0373 0.25,0 0.10541,-0.0527 0.14459,-0.1973 0.25,-0.25 0.14907,-0.0745 0.35093,0.0745 0.5,0 1.14415,-0.57208 -1.06085,0.10361 0.75,-0.5 0.0791,-0.0264 0.19107,0.0589 0.25,0 0.0589,-0.0589 -0.0373,-0.17547 0,-0.25 0.0527,-0.10541 0.19729,-0.14459 0.25,-0.25 0.13333,-0.26667 -0.13333,-0.23334 0,-0.5 0.0527,-0.10541 0.19729,-0.14459 0.25,-0.25 0.0373,-0.0745 -0.0589,-0.19108 0,-0.25 0.0589,-0.0589 0.19107,0.0589 0.25,0 0.0589,-0.0589 -0.0373,-0.17547 0,-0.25 0.0527,-0.10541 0.19729,-0.14459 0.25,-0.25 0.0373,-0.0745 -0.0589,-0.19108 0,-0.25 0.0589,-0.0589 0.19107,0.0589 0.25,0 0.0589,-0.0589 -0.0589,-0.19108 0,-0.25 0.11785,-0.11786 0.34189,0.0527 0.5,0 0.17678,-0.0589 0.32322,-0.19108 0.5,-0.25 0.32912,-0.10971 0.52928,0.19144 0.75,-0.25 0.22222,-0.44445 -0.13889,-0.13889 -0.25,-0.25 -0.0589,-0.0589 0.0589,-0.19108 0,-0.25 -0.0589,-0.0589 -0.17546,0.0373 -0.25,0 -0.21082,-0.10541 -0.28918,-0.39459 -0.5,-0.5 -0.0745,-0.0373 -0.17546,0.0373 -0.25,0 -0.10541,-0.0527 -0.15194,-0.18463 -0.25,-0.25 -0.15504,-0.10337 -0.36824,-0.11824 -0.5,-0.25 -0.0589,-0.0589 0.0589,-0.19108 0,-0.25 -0.0589,-0.0589 -0.19108,0.0589 -0.25,0 -0.0589,-0.0589 0.0589,-0.19108 0,-0.25 -0.11785,-0.11786 -0.35093,0.0745 -0.5,0 -0.10541,-0.0527 -0.14459,-0.1973 -0.25,-0.25 -0.0745,-0.0373 -0.17546,0.0373 -0.25,0 -0.10541,-0.0527 -0.14459,-0.1973 -0.25,-0.25 -0.14647,-0.0732 -1.06578,0.0461 -1.25,0 -0.18078,-0.0452 -0.32322,-0.19108 -0.5,-0.25 -0.32596,-0.10866 -0.66963,-0.15561 -1,-0.25 -0.25338,-0.0724 -0.5,-0.16667 -0.75,-0.25 -0.25,-0.0833 -0.52403,-0.11442 -0.75,-0.25 -0.20211,-0.12127 -0.28918,-0.39459 -0.5,-0.5 -0.14907,-0.0745 -0.34189,0.0527 -0.5,0 -0.1118,-0.0373 -0.14459,-0.1973 -0.25,-0.25 -0.14907,-0.0745 -0.38215,0.11785 -0.5,0 -0.0589,-0.0589 0.0589,-0.19108 0,-0.25 -0.0589,-0.0589 -0.16667,0 -0.25,0 -0.0833,0 -0.16667,0 -0.25,0 -0.41667,0 -0.83333,0 -1.25,0 -3.25,0 -6.5,0 -9.75,0 -2.91667,0 -5.83333,0 -8.75,0 -1.08333,0 -2.16667,0 -3.25,0 -0.33333,0 -0.66667,0 -1,0 -0.25,0 -0.5034,0.0411 -0.75,0 -0.41914,-0.0699 -0.83333,-0.16667 -1.25,-0.25 z\\\"\\n      id=\\\"path5952\\\" />\\n  <path\\n      style=\\\"fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\\\"\\n      d=\\\"m 371.1875,251.98721 c 0,0 0.1875,2.6875 -0.1875,3.25 -0.375,0.5625 -2.375,-0.0625 -2.5,-0.5625 -0.125,-0.5 -0.0625,1.5 -1.25,2.125 -1.1875,0.625 -2,-1.5625 -2,-1.5625 0,0 -0.5625,2.875 -2.25,2.5625 -1.6875,-0.3125 -2.1875,-1 -2.1875,-1 l -0.4375,-1.25 c 0,0 -0.6875,3.1875 -2.0625,2.6875 -1.375,-0.5 -2.4375,-0.1875 -2.875,-2.25 -0.4375,-2.0625 -0.5625,1.5 -0.5625,1.5 0,0 -5.1875,-0.0625 -5.6875,-0.6875 -0.5,-0.625 -0.3125,-1.3125 -0.3125,-1.3125 l -0.4375,1.3125 c 0,0 -4.75,0.3125 -5.1875,-0.75 -0.4375,-1.0625 -0.3125,-1.625 -0.3125,-1.625 l -0.4375,1.75 c 0,0 -2.0625,0.5 -2.9375,-1.4375 -0.875,-1.9375 -0.125,1.125 -0.125,1.125 0,0 -1.5625,0.6875 -2,-0.125 -0.4375,-0.8125 -0.75,-1.5625 -0.75,-1.5625 0,0 -1.875,-1.3125 -2.0625,-2.375 -0.1875,-1.0625 13.85095,-0.39461 13.85095,-0.39461 7.85323,0.18024 14.76784,-1.39611 22.71155,0.58211 z\\\"\\n      id=\\\"path5763\\\" />\\n  <path\\n      style=\\\"fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\\\"\\n      d=\\\"m 374.125,252.61221 c 0.69963,0.41978 -15.10409,-5.11245 -16.8125,-6.375 -0.81823,-0.60469 -2.6875,-0.1875 -2.6875,-0.1875 0,0 -4.375,1.6875 -5.4375,1.5 -1.0625,-0.1875 -1.83233,1.66412 -7,-2.5 -0.48666,-0.39215 -11.84804,2.6201 -13.75,7.375 -1,2.5 1.5625,0.625 1.5625,0.625 0,0 0.875,-2.5625 2.625,-2.5625 1.75,0 14.75,0.5625 15.875,0.875 1.125,0.3125 18.625,-0.3125 21.75,0.4375 3.125,0.75 3.375,1.4375 3.375,1.4375 0,0 -1,1.5 -2.0625,2.0625 -1.0625,0.5625 -6.6875,2.375 -8.875,2.6875 -2.1875,0.3125 -13.9375,0.3125 -14.75,0.375 -0.8125,0.0625 -4.625,1.1875 -8.375,-0.0625 -3.75,-1.25 -7.8125,-3.8125 -8.75,-4.3125 -0.9375,-0.5 -2.125,0.5625 -2.125,0.5625 0,0 0.75,-0.1875 1.5625,-0.1875 0.8125,0 7.3125,10 11.4375,10.9375 4.125,0.9375 9,1.75 15.5,-0.1875 6.5,-1.9375 10.3125,-4.5 13.25,-6.9375 2.9375,-2.4375 3.6875,-5.5625 3.6875,-5.5625 z\\\"\\n      id=\\\"path5792\\\" />\\n  <path\\n      style=\\\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1.52499998;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\\\"\\n      d=\\\"m 408.375,202.11221 1.25,1.75 -1.25,-0.625 0.5,1.375 -0.625,0 0.5,1.375 -1.25,0.125 1,1.625 0.25,-1 0.625,1.375 -1.25,0.625 1.375,1.75 0.125,-1 0.875,1.125 -1.25,0.125 1.25,2.375 0.375,1.375 0.125,0.625 0.875,-3 0.125,2.375 1,-3.75 0.125,1.125 1.25,-3.5 0,2 1.125,-3.875 0.125,1.875 0.625,-5.125 0.625,2.875 0.75,-5.5 0.75,2 0.625,-2.75 0.5,1.75 1.125,-4 0.25,2.625 1.5,-1.25 2.5,-1 -0.75,-3.75 1.125,1.25 -1.125,-3.125 1.25,1 -1.125,-3.625 2,2.375 -0.75,-6.375 1.125,2.625 -0.75,-4.5 1.5,1.75 -1.75,-5.5 1.625,0.625 -1.25,-4.875 1.125,0.75 -2,-6.375 2,1.875 -2.75,-5.75 2.25,2.25 -1.5,-5.625 1.5,1.5 -1.375,-3.75 1.875,2.125 -2.75,-5.625 2.625,2.25 -2.25,-4.5 2.125,1.5 -2.125,-3.875 2.125,1.125 -2.625,-4 3.875,3.125 -3.75,-6 2,0.625 -3.125,-3.875 2,0.5 -1.875,-3.5 1.625,0.25 -1.625,-3.875 -0.625,1.5 -1,-3 -1.375,1.5 -3,-3.125 -3.25,-4.5 0.375,2.625 -3.5,-4.625 0.625,2.25 -3.875,-4.75 -0.375,1.75 -3,-3.625 -0.375,1.75 -2.125,-3.375 0.25,2.25 -2.875,-4.5 -1,1 -3.625,-3.5 1.375,2.5 -4.625,-4.25 1.125,2.375 -3.375,-2.875 0.75,2 -3.125,-3.25 1,1.625 -2.875,-3.375 1.375,3 -2.375,-2.75 -2,-0.75 0.75,1.625 -2.375,-2.5 -4.125,-1.625 -2,0 3,1.125 -0.25,2.25 -3.5,-2.625 1.25,1.75 -2.875,-2.25 -0.5,2.125 -2.875,-2.625 -4.625,-1.125 2.5,1.625 -5.625,-0.875 2.625,2.125 -4.5,-1.25 2.125,2 -6,-2 2.75,2.25 -2.875,-1 0.5,1.5 -3.5,-1.625 1.125,2.125 -4,-0.875 1.625,1.625 -5.875,-0.5 1.875,1.5 -6.375,-0.25 3.75,1.75 -6.25,-0.625 -4.125,0.5 3.625,0.875 -5.75,-0.25 1.625,1.625 -2.375,0.125 0.75,1 -3.875,0 2.25,1.375 -3.75,0 1.5,1.125 -3.5,0.125 2,1.375 -3.375,1.375 2.5,0.125 -5.125,1.125 2.5,0.25 -3.375,1.375 3.25,0.25 -4.75,1.375 3.25,0.875 -5.5,-0.375 1.125,1.5 -3.75,0.5 -1.375,2.625 2.25,-1.75 0.75,1.125 -2.75,1.25 -1.25,1.75 2.25,-0.875 -3,3.375 2.25,-0.5 -4.125,4.5 2.125,-0.75 -2.875,4.125 1.875,0.25 -3.5,1.625 1.25,0 -2.375,3.5 2.125,-1.125 -4.125,4.375 3.25,-1.75 -2.875,4.125 1.5,-1.25 -2.25,4.625 2.125,-2.125 -3.625,4.25 1.875,-0.75 -1.125,3.625 1.375,-1.375 -1.625,4.875 1.125,-1.375 -0.875,3.375 1.125,-0.875 -0.875,4 1.75,0 -1.5,3.625 1.25,-0.625 -1.375,4.375 1.625,-2 -1,4.5 1.25,-0.875 -0.5,5.375 1.25,-2.125 -0.875,3.5 0.875,-0.625 0.625,1.25 -0.5,3.375 1.375,-1.25 -1.5,3.375 1.25,-0.75 0,3.25 1.375,-1.25 -1.625,4 1.375,-0.625 -1.125,3.875 1.375,-1.125 -0.25,2.875 0.875,-1.25 0,3.375 1.25,-6.75 1,-3.375 -0.25,-14.625 c 0,0 -0.38388,-13.83731 0.11612,-16.83731 0.22841,-1.37048 0.41992,-3.42336 0.56058,-5.24915 0.16725,-2.17091 1.32326,-6.67242 1.32326,-6.67242 l 1.74209,-2.39809 1.57346,3.21809 1.25374,-4.4424 0.95991,3.8324 c 2.04411,1.39169 -3.27416,-23.57977 4.71812,-0.77468 l 1.94145,3.08161 0.92962,-4.17067 1.72259,6.10347 1.16219,-6.33847 1.59848,6.0116 2.67638,-5.50508 2.46286,2.6589 3.37124,-3.19625 2.63338,2.59721 2.8503,-4.68805 c 6.20964,2.74575 1.20519,-6.59939 8.0223,2.40363 l 2.78374,-0.37388 c 1.54729,0.71082 2.61617,-7.80305 4.64245,-0.86534 l 3.01491,2.43407 4.49535,-2.7942 -1.00482,4.1201 3.91819,-4.12968 0.0778,4.91894 c 1.86231,-0.26724 3.05081,-8.19221 3.81916,-0.80173 l 6.51003,-8.29278 -1.71331,7.30334 5.16272,-5.33956 -2.34862,5.46075 4.97838,-5.97649 -1.73083,5.72581 4.78034,-6.69319 -1.03841,4.66959 5.95476,-5.85981 -1.90573,6.16102 c 2.28016,-0.74003 4.71712,-6.03779 8.25469,-3.63431 0.28273,1.77056 1.17061,-3.08679 2.14216,-1.56048 1.01451,1.59381 2.08829,9.57306 1.1153,11.53279 -1.39005,2.79974 -1.7925,-4.01355 -0.1437,8.2574 0.12885,0.95893 1.98496,7.57435 1.98496,7.57435 2.14522,2.36754 3.64747,4.60481 4.63372,7.23447 1.0037,2.67618 0.59936,7.78673 0.97746,10.87266 0.36896,3.01139 -0.74758,5.21412 -2.17468,9.53909\\\"\\n      id=\\\"path5803\\\" />\\n  <path\\n      style=\\\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\\\"\\n      d=\\\"m 382.89832,191.10615 3.18198,0.53033 -2.12132,-0.17678 4.41942,1.23744 -1.94455,-1.32583 c 1.76777,0.20624 2.41568,2.27892 5.30331,0.61872 l -1.94455,1.41421 3.35876,-0.61871 2.2981,0.44194 1.23743,0.17677 -0.88388,0.53033 2.12132,0 -1.76777,0.53033 2.65165,0.88389 1.76777,-0.53033 -2.2981,-2.12132 0.88389,-0.35356 -4.77297,-1.94454 2.65165,0.17678 -4.06587,-1.76777 -0.53033,0.70711 -5.03813,-2.38649 -1.06066,0.70711 -2.38649,-1.5026 -1.41421,0.0884 -2.12132,0.26517 -1.85616,-0.26516 -2.56326,-0.0884 -1.23743,0.35355 -1.76777,0.53033 -1.5026,-0.0884 -3.88909,-0.26516 1.85615,1.06066 -5.21491,-0.26516 0.79549,0.26516 -3.88908,0.88388 3.53553,0.35355 -3.8007,2.47488 3.35876,-0.26516 3.27036,-0.70711 0.35356,0.44194 -3.18197,0.26516 -1.32584,0.97227 5.3917,-0.35355 4.41941,-0.88388 3.18198,-0.70711 3.18198,-0.70711 -6.54073,1.94455 8.3085,-1.41422 -1.59099,1.23744 z\\\"\\n      id=\\\"path5805\\\" />\\n  <path\\n      style=\\\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\\\"\\n      d=\\\"m 338.88092,190.39904 -5.65685,-4.24264 -0.7955,-0.44194 c 1.11959,1.00173 -3.09359,-0.0884 -3.09359,-0.0884 l -2.47487,-0.88388 -2.74004,0.0884 -4.68458,0.53034 -0.0884,0.0884 -2.38647,0.0884 -4.06587,1.85616 3.71231,-0.35356 -5.3033,2.2981 2.2981,-0.35355 -3.27037,1.67938 0.61872,-0.0884 -1.67938,1.5026 2.38648,-0.26517 -0.0884,0.17678 2.56326,-0.70711 2.74003,-1.23743 0.44195,0.7071 3.44714,-1.94454 0.44194,0.88388 2.38649,-1.06066 4.68458,-0.17677 -4.24264,-0.17678 7.42462,1.41421 -2.38648,1e-5 6.09879,0.17677 z\\\"\\n      id=\\\"path5807\\\" />\\n  <path\\n      style=\\\"fill:#2e2e2e;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\\\"\\n      d=\\\"m 333.22407,199.59143 -0.53033,3.35876 c 0,0 -5.83363,1.41421 -7.95495,-0.35356 -2.12132,-1.76776 -1.50261,-5.12652 -1.50261,-5.12652 l 8.57368,1.23744 -0.35356,1.76776 -1.59099,-1.23743 -2.82842,-0.88389 c 0,0 -2.65166,1.23744 -0.70711,3.00521 1.94454,1.76776 5.3033,-0.35356 5.3033,-0.35356 z\\\"\\n      id=\\\"path5809\\\" />\\n  <path\\n      style=\\\"fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\\\"\\n      d=\\\"m 370.1704,232.29512 c 0,0 0,0 7.60139,7.95495 0.83972,0.87877 0,0 3.75742,7.10488 0.21545,0.40739 0.30845,0.67329 0.30845,0.67329 0,0 1.41421,4.41942 -0.17678,9.19239 -1.59099,4.77297 -1.41421,3.53554 -1.41421,3.53554 l 0,0.88388\\\"\\n      id=\\\"path5815\\\" />\\n  <path\\n      style=\\\"fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\\\"\\n      d=\\\"m 335.52217,227.52215 c 0,0 -3.88909,0.35355 -10.78338,15.20279\\\"\\n      id=\\\"path5817\\\" />\\n  <path\\n      style=\\\"display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\\\"\\n      d=\\\"m 307.2379,216.03166 c 0,0 -1.32583,4.06587 0.26516,5.65686 1.59099,1.59099 1.32583,5.12652 1.32583,5.12652 l -1.76777,-3.71231 -2.2981,-0.17678 c 0,0 -3.35876,-6.71751 -1.06066,-9.01561\\\"\\n      id=\\\"path5821\\\" />\\n  <path\\n      style=\\\"display:inline;fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\\\"\\n      d=\\\"m 303.17203,206.48572 -2.47487,6.36396 c 0,0 -0.88389,7.42462 1.23743,11.13693 2.12133,3.71231 -2.65165,-6.0104 -2.65165,-6.0104 l -1.59099,-10.07628 c 0,0 1.23744,-3.53553 1.59099,-4.77297 0.35356,-1.23743 0.17678,-6.36396 1.06066,-6.36396 0.88389,0 3.18198,1.41422 3.18198,2.82843\\\"\\n      id=\\\"path5823\\\" />\\n  <path\\n      style=\\\"display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\\\"\\n      d=\\\"m 417.90011,211.43547 -1.94455,3.71231 c 0,0 4.41942,8.3085 0.17678,10.78338 -4.24264,2.47487 -5.65685,5.48007 -3.53553,4.59619 2.12132,-0.88388 4.94974,-4.59619 5.65685,-4.59619\\\"\\n      id=\\\"path5825\\\" />\\n  <path\\n      style=\\\"display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\\\"\\n      d=\\\"m 422.4963,202.0663 c 0,0 9.61922,-2.559 9.54594,13.61181 -0.021,4.64361 -2.45988,3.93859 -2.45988,3.93859 -0.6039,9.10214 -7.96994,13.20875 -7.96994,13.20875 0,0 6.36396,-4.24264 6.54073,-13.61181 0.17678,-9.36916 2.12133,-13.96536 -5.65685,-17.14734\\\"\\n      id=\\\"path5827\\\" />\\n  <path\\n      style=\\\"display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\\\"\\n      d=\\\"m 391.75,200.48721 c 0,0 -5.875,-13.875 -25,0.25\\\"\\n      id=\\\"path5829\\\" />\\n  <path\\n      style=\\\"display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\\\"\\n      d=\\\"m 316.375,195.48721 c 0,0 11.875,-10.875 25,6.125\\\"\\n      id=\\\"path5831\\\" />\\n  <path\\n      style=\\\"display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\\\"\\n      d=\\\"m 377,250.61221 c 0,0 2.25,3 1,6.25\\\"\\n      id=\\\"path5833\\\" />\\n  <path\\n      style=\\\"fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\\\"\\n      d=\\\"m 342.15129,223.98661 c 0.0399,0.005 -10.65802,1.66257 -5.27684,8.39347 0.338,0.42278 4.79981,0.86218 4.79981,0.86218\\\"\\n      id=\\\"path5842\\\" />\\n  <path\\n      style=\\\"fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\\\"\\n      d=\\\"m 364.51354,226.80984 c 0,0 6.18719,9.28598 -1.85615,9.1092\\\"\\n      id=\\\"path5844\\\" />\\n  <path\\n      style=\\\"display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.60000002;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\\\"\\n      d=\\\"m 332.5,189.86221 c 0,0 16.25,7 12.25,17\\\"\\n      id=\\\"path5848\\\" />\\n  <ellipse\\n      style=\\\"display:inline;opacity:0;fill:none;stroke:#000000;stroke-width:0.30000001;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\\\"\\n      id=\\\"path5697\\\"\\n      cx=\\\"379.46429\\\"\\n      cy=\\\"203.6122\\\"\\n      rx=\\\"1.0714285\\\"\\n      ry=\\\"3.75\\\" />\\n  <ellipse\\n      style=\\\"display:inline;opacity:0;fill:none;stroke:#000000;stroke-width:0.1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\\\"\\n      id=\\\"path5699\\\"\\n      cx=\\\"380.55804\\\"\\n      cy=\\\"202.71935\\\"\\n      rx=\\\"2.4330356\\\"\\n      ry=\\\"1.875\\\" />\\n  <ellipse\\n      style=\\\"display:inline;opacity:0;fill:none;stroke:#000000;stroke-width:0.1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\\\"\\n      id=\\\"path5701\\\"\\n      cx=\\\"379.2634\\\"\\n      cy=\\\"202.71935\\\"\\n      rx=\\\"1.8973215\\\"\\n      ry=\\\"1.4732143\\\" />\\n  <ellipse\\n      style=\\\"display:inline;opacity:0;fill:none;stroke:#000000;stroke-width:0.1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\\\"\\n      id=\\\"path5703\\\"\\n      cx=\\\"391.74106\\\"\\n      cy=\\\"208.1881\\\"\\n      rx=\\\"1.9196428\\\"\\n      ry=\\\"1.6294643\\\" />\\n  <path\\n      style=\\\"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\\\"\\n      d=\\\"m 328.80465,198.53077 -1.06066,-1.06066 -1.94454,0 c 0,0 -0.53033,5.3033 2.2981,4.41942 2.82842,-0.88389 4.59619,-1.94455 4.59619,-1.94455 l -4.59619,-2.47487 0,0\\\"\\n      id=\\\"path5927\\\" />\\n  <path\\n      transform=\\\"translate(296.49688,106.24631)\\\"\\n      style=\\\"fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.69999999;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\\\"\\n      d=\\\"m 61.739253,126.6998 c 0.01738,0.071 -0.415139,0.0308 -0.441942,0.0442 -0.01318,0.007 -0.01042,0.0338 0,0.0442 0.02083,0.0208 0.06044,-0.009 0.08839,0 0.03125,0.0104 0.05714,0.0338 0.08839,0.0442 0.02795,0.009 0.06755,-0.0208 0.08839,0 0.01042,0.0104 -0.01042,0.0338 0,0.0442 0.01042,0.0104 0.03102,-0.007 0.04419,0 0.03727,0.0186 0.04886,0.0752 0.08839,0.0884 0.0083,0.003 0.259693,0.002 0.265165,0 0.03125,-0.0104 0.05714,-0.0338 0.08839,-0.0442 0.02795,-0.009 0.05893,0 0.08839,0 0.07366,0 0.147314,0 0.220971,0 0.07366,0 0.147314,0 0.220971,0 0.01473,0 0.02946,0 0.04419,0 0.01473,0 0.03241,-0.009 0.04419,0 0.01279,0.01 0.234711,0.24994 0.265165,0.26517 0.07823,0.0391 0.0151,-0.0657 0.08839,0.0442 0.117851,0.17678 -0.04419,0.0147 0.132582,0.13258 0.01733,0.0116 0.02443,0.0376 0.04419,0.0442 0.02795,0.009 0.06044,-0.009 0.08839,0 0.03953,0.0132 0.05112,0.0697 0.08839,0.0884 0.01318,0.007 0.03102,-0.007 0.04419,0 0.01863,0.009 0.02556,0.0349 0.04419,0.0442 0.01318,0.007 0.04419,-0.0147 0.04419,0 0,0.0208 -0.02398,0.0391 -0.04419,0.0442 -0.04287,0.0107 -0.08839,0 -0.132582,0 -0.04419,0 -0.08899,0.007 -0.132583,0 -0.04791,-0.008 -0.172883,-0.0563 -0.22097,-0.0884 -0.01036,-0.007 -0.05465,-0.0779 -0.08839,-0.0442 -0.03251,0.0325 0.03556,0.0798 0.04419,0.0884 0.0442,0.0442 0.08839,0.0884 0.132583,0.13258 0.01473,0.0147 0.02686,0.0326 0.04419,0.0442 0.101616,0.0677 0.119355,0.0206 0.220971,0.0884 0.03985,0.0266 0.150993,0.16819 0.176777,0.17678 0.02795,0.009 0.06044,-0.009 0.08839,0 0.03953,0.0132 0.05112,0.0698 0.08839,0.0884 0.02635,0.0132 0.06755,-0.0208 0.08839,0 0.02329,0.0233 0.0209,0.0651 0.04419,0.0884 0.01355,0.0136 0.207313,-0.0137 0.220971,0 0.01042,0.0104 -0.01042,0.0338 0,0.0442 0.02083,0.0208 0.06204,-0.0132 0.08839,0 0.01863,0.009 0.02556,0.0349 0.04419,0.0442 0.01318,0.007 0.03378,-0.0104 0.04419,0 0.01042,0.0104 -0.01042,0.0338 0,0.0442 0.01042,0.0104 0.03102,-0.007 0.0442,0 0.09429,0.0472 -0.0059,0.0412 0.08839,0.0884 0.01318,0.007 0.03102,-0.007 0.04419,0 0.01863,0.009 0.02946,0.0295 0.04419,0.0442 0.01473,0.0147 0.03488,0.0256 0.04419,0.0442 0.0066,0.0132 -0.01042,0.0338 0,0.0442 0.01042,0.0104 0.03102,-0.007 0.0442,0 0.01863,0.009 0.03488,0.0256 0.04419,0.0442 0.0066,0.0132 -0.01318,0.0376 0,0.0442 0.02635,0.0132 0.06204,-0.0132 0.08839,0 0.01318,0.007 -0.01042,0.0338 0,0.0442 0.01042,0.0104 0.02946,0 0.04419,0 0.01473,0 0.02946,0 0.0442,0 0.103643,0 -0.02083,-0.0104 0.08839,0.0442 0.0038,0.002 0.173009,0.002 0.176777,0 0.08302,-0.0415 0.07379,-0.16218 0.132582,-0.22097 0.02329,-0.0233 0.06098,-0.0259 0.08839,-0.0442 0.01873,-0.0125 0.12344,-0.11429 0.132583,-0.13258 0.0066,-0.0132 -0.01042,-0.0338 0,-0.0442 0.01042,-0.0104 0.03378,0.0104 0.04419,0 0.0035,-0.004 0,-0.18619 0,-0.22097 0,-0.17265 0.01318,-0.005 -0.04419,-0.17678 -0.0047,-0.014 0.01042,-0.0338 0,-0.0442 -0.02329,-0.0233 -0.06098,-0.0259 -0.08839,-0.0442 -0.0608,-0.0405 -0.04545,-0.0682 -0.08839,-0.13258 -0.01156,-0.0173 -0.02946,-0.0295 -0.04419,-0.0442 -0.01473,-0.0147 -0.02946,-0.0295 -0.04419,-0.0442 -0.02946,-0.0147 -0.0651,-0.0209 -0.08839,-0.0442 -0.02329,-0.0233 -0.02443,-0.062 -0.0442,-0.0884 -0.05,-0.0667 -0.126776,-0.11011 -0.176776,-0.17678 -0.01976,-0.0264 -0.02443,-0.062 -0.04419,-0.0884 -0.025,-0.0333 -0.06236,-0.0558 -0.08839,-0.0884 -0.223002,-0.27875 0.03664,-0.008 -0.176777,-0.22097 -0.02946,-0.0295 -0.05893,-0.0589 -0.08839,-0.0884 -0.01473,-0.0147 -0.02556,-0.0349 -0.04419,-0.0442 -0.04419,-0.0147 -0.08839,-0.0295 -0.132583,-0.0442 -0.01473,-0.0147 -0.02556,-0.0349 -0.04419,-0.0442 -0.04167,-0.0208 -0.09264,-0.0202 -0.132582,-0.0442 -0.03573,-0.0214 -0.05112,-0.0698 -0.08839,-0.0884 -0.25868,-0.12934 -0.09536,0.0248 -0.265165,-0.0884 -0.04023,-0.0268 -0.09341,-0.113 -0.132582,-0.13258 -0.01318,-0.007 -0.03102,0.007 -0.04419,0 -0.03376,-0.0169 -0.102657,-0.12261 -0.132583,-0.13258 -0.02795,-0.009 -0.06044,0.009 -0.08839,0 -0.01976,-0.007 -0.02946,-0.0295 -0.04419,-0.0442 -0.01473,-0.0147 -0.03488,-0.0256 -0.0442,-0.0442 -0.0066,-0.0132 0.01042,-0.0338 0,-0.0442 -0.172478,-0.17247 -0.02373,0.0102 -0.132582,-0.0442 -0.01863,-0.009 -0.02556,-0.0349 -0.04419,-0.0442 -0.01318,-0.007 -0.03022,0.005 -0.04419,0 -0.03125,-0.0104 -0.05714,-0.0338 -0.08839,-0.0442 -0.02573,-0.009 -0.234756,0 -0.265165,0 -0.01473,0 -0.02946,0 -0.04419,0 -0.01473,0 -0.03378,-0.0104 -0.04419,0 -0.01042,0.0104 0.01042,0.0338 0,0.0442 -0.01042,0.0104 -0.03378,-0.0104 -0.04419,0 -0.02083,0.0208 0.01318,0.062 0,0.0884 -0.0093,0.0186 -0.03488,0.0256 -0.04419,0.0442 -0.0066,0.0132 0.0066,0.031 0,0.0442 -0.03479,0.0696 -0.111007,0.17165 -0.176776,0.22097 -0.02635,0.0198 -0.05893,0.0295 -0.08839,0.0442 -0.101564,0.0508 -0.05545,0.0442 -0.132582,0.0442 -0.03742,0 -0.153018,-0.008 -0.176777,0 -0.01976,0.007 -0.02556,0.0349 -0.04419,0.0442 -0.01318,0.007 -0.03102,-0.007 -0.04419,0 -0.01863,0.009 -0.02556,0.0349 -0.04419,0.0442 -0.01318,0.007 -0.04419,-0.0147 -0.04419,0 0,0.0751 0.08926,0.16088 0.04419,0.22097 0.02258,0.17123 -0.167856,-0.0973 -0.220971,-0.0442 -0.01042,0.0104 0.01042,0.0338 0,0.0442 -0.01042,0.0104 -0.03378,-0.0104 -0.04419,0 -0.01042,0.0104 0.01042,0.0338 0,0.0442 -0.01042,0.0104 -0.03761,-0.0132 -0.04419,0 -0.01318,0.0264 0.01318,0.062 0,0.0884 -0.0066,0.0132 -0.03378,-0.0104 -0.0442,0 -0.01042,0.0104 0.0066,0.031 0,0.0442 -0.0273,0.0546 -0.04267,0.0442 -0.08839,0.0442 -0.01473,0 -0.05893,0 -0.04419,0 0.117851,0 0.235702,0 0.353553,0 0.02946,0 0.05893,0 0.08839,0 0.02946,0 0.0598,0.007 0.08839,0 0.03196,-0.008 0.05643,-0.0362 0.08839,-0.0442 0.04288,-0.0107 0.08839,0 0.132583,0 0.08839,0 0.176776,0 0.265165,0 0.04162,0 0.19583,-0.008 0.220971,0 0.08535,0.0284 0.01545,0.0751 0.04419,0.13258 0.0066,0.0132 0.03378,-0.0104 0.04419,0 0.01042,0.0104 0,0.0295 0,0.0442 0,0.0147 0.0066,0.031 0,0.0442 -0.0093,0.0186 -0.02443,0.0376 -0.04419,0.0442 -0.04193,0.014 -0.08839,0 -0.132583,0 -0.05559,0 -0.197133,0.0273 -0.220971,-0.0442 -0.0093,-0.028 0,-0.0589 0,-0.0884 0,-0.0884 0,-0.17678 0,-0.26517 0,-0.0884 0,-0.17677 0,-0.26516 0,-0.0295 0,-0.0589 0,-0.0884 0,-0.0147 -0.0066,-0.031 0,-0.0442 0.0093,-0.0186 0.03488,-0.0256 0.0442,-0.0442 0.06759,-0.13518 -0.255969,0.10055 0.132582,-0.13258 0.02825,-0.017 0.0651,-0.0209 0.08839,-0.0442 0.02329,-0.0233 0.01679,-0.0701 0.04419,-0.0884 0.02451,-0.0164 0.05981,0.007 0.08839,0 0.03196,-0.008 0.05714,-0.0338 0.08839,-0.0442 0.0057,-0.002 0.128923,-0.002 0.132583,0 0.08586,0.0429 0.04419,0.14479 0.04419,0.22097 0,0.0737 -0.0067,0.14762 0,0.22098 0.05388,0.59269 0.04419,-0.002 0.04419,0.44194 0,0.11785 0,0.2357 0,0.35355 0,0.0147 -0.01042,0.0338 0,0.0442 0.01042,0.0104 0.03378,0.0104 0.04419,0 0.01042,-0.0104 -0.0047,-0.0302 0,-0.0442 0.01042,-0.0312 0.02946,-0.0589 0.0442,-0.0884 0.01473,-0.0295 0.02725,-0.0601 0.04419,-0.0884 0.06225,-0.10375 0.09217,-0.11995 0.132582,-0.22097 0.0173,-0.0433 0.0329,-0.0874 0.04419,-0.13258 0.0036,-0.0143 -0.0047,-0.0582 0,-0.0442 0.179387,0.53816 -0.01792,-0.0454 0.0442,0.26516 0.04598,0.22991 0.02946,0.0442 0.08839,0.22097 0.0093,0.028 -0.02083,0.0676 0,0.0884 0.03111,0.0311 0.08175,-0.0336 0.08839,-0.0442 0.06295,-0.10072 0.123662,-0.20313 0.176777,-0.30936 0.106954,-0.21391 0.139272,-0.3731 0.265165,-0.57453 0.02208,-0.0353 0.06975,-0.0511 0.08839,-0.0884 0.01318,-0.0264 -0.01318,-0.062 0,-0.0884 0.0066,-0.0132 0.02946,0 0.0442,0 0.01473,0 0.04062,-0.0143 0.04419,0 0.01429,0.0572 0,0.11785 0,0.17677 0,0.10312 0,0.20624 0,0.30936 0,0.0442 0,0.0884 0,0.13258 0,0.0295 -0.0093,0.0604 0,0.0884 0.07376,0.22128 0.0098,-0.0737 0.08839,0.0442 0.06283,0.0942 0.04419,0.2052 0.04419,0.30936 0,0.10312 0,0.20624 0,0.30936 0,0.0295 0,0.0589 0,0.0884 0,0.0147 0,0.0589 0,0.0442 0,-0.0884 0,-0.17678 0,-0.26517 0,-0.0147 0,-0.0295 0,-0.0442 0,-0.0147 0.01042,-0.0338 0,-0.0442 -2.34e-4,-2.3e-4 -0.131105,3.7e-4 -0.132582,0 -0.03196,-0.008 -0.05893,-0.0295 -0.08839,-0.0442 -0.04419,0 -0.08899,0.007 -0.132582,0 -0.04595,-0.008 -0.09092,-0.0234 -0.132583,-0.0442 -0.0317,-0.0159 -0.06948,-0.10092 -0.08839,-0.0442 -0.03872,0.11616 0.06765,0.32171 0.08839,0.39775 0.01976,0.0725 0.02443,0.1485 0.04419,0.22097 0.02451,0.0899 0.05567,0.17793 0.08839,0.26517 0.01157,0.0308 0.0209,0.0651 0.04419,0.0884 0.02329,0.0233 0.0651,0.0209 0.08839,0.0442 0.01042,0.0104 -0.01042,0.0338 0,0.0442 0.01042,0.0104 0.03378,0.0104 0.0442,0 0.01042,-0.0104 -0.0047,-0.0302 0,-0.0442 0.01042,-0.0312 0.02725,-0.0601 0.04419,-0.0884 0.08362,-0.13938 0.0727,-0.11689 0.176776,-0.22097 0.01473,-0.0147 0.02686,-0.0326 0.0442,-0.0442 0.02741,-0.0183 0.06098,-0.0259 0.08839,-0.0442 0.08086,-0.0539 0.0044,-0.0563 0.132582,-0.0884 0.04288,-0.0107 0.08839,0 0.132583,0 0.07366,0 0.147314,0 0.220971,0 0.01473,0 0.03378,-0.0104 0.04419,0 0.01042,0.0104 -0.0066,0.031 0,0.0442 0.0093,0.0186 0.03914,0.024 0.04419,0.0442 0.01429,0.0572 0,0.11785 0,0.17678 0,0.0147 0,0.0295 0,0.0442 0,0.0147 0.01318,0.0376 0,0.0442 -0.02635,0.0132 -0.05892,0 -0.08839,0 -0.07236,0 -0.08839,-0.016 -0.08839,-0.0884\\\"\\n      id=\\\"path5956\\\" />\\n  <path\\n      transform=\\\"translate(296.49688,106.24631)\\\"\\n      style=\\\"fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.60000002;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\\\"\\n      d=\\\"m 45.873544,124.22493 c -0.265165,0 -0.53033,0 -0.795495,0 -0.03074,0 -0.204989,0.008 -0.220971,0 -0.01863,-0.009 -0.02556,-0.0349 -0.04419,-0.0442 -0.0099,-0.005 -0.166275,0 -0.176777,0 -0.08839,0 -0.176776,0 -0.265165,0 -0.07366,0 -0.147313,0 -0.22097,0 -0.02946,0 -0.06044,-0.009 -0.08839,0 -0.137944,0.046 0.01473,0.0295 -0.04419,0.0884 -0.01042,0.0104 -0.04419,0.0147 -0.04419,0 0,-0.004 0.241174,0.005 0.265165,0 0.232018,-0.0464 0.06401,-0.0132 0.176777,-0.0884 0.0082,-0.005 0.173944,-0.0855 0.176776,-0.0884 0.02329,-0.0233 0.0209,-0.0651 0.04419,-0.0884 0.111631,-0.11163 0.05095,-0.017 0.132583,-0.0442 0.320117,-0.1067 -0.06968,0.0127 0.132583,-0.0884 0.01143,-0.006 0.23384,0 0.265165,0 0.02946,0 0.05893,0 0.08839,0 0.01473,0 0.05892,0 0.04419,0 -0.02946,0 -0.0595,-0.006 -0.08839,0 -0.05134,0.0103 -0.170464,0.0547 -0.220971,0.0884 -0.07218,0.0481 -0.01814,0.0655 -0.132583,0.0884 -0.337141,0 0.03486,-0.0198 -0.220971,0.0442 -0.04287,0.0107 -0.09066,-0.014 -0.132582,0 -0.03125,0.0104 -0.05714,0.0338 -0.08839,0.0442 -0.02795,0.009 -0.05893,0 -0.08839,0 -0.03613,0 -0.28696,-0.007 -0.309359,0 -0.01976,0.007 -0.02556,0.0349 -0.04419,0.0442 -0.01318,0.007 -0.03378,-0.0104 -0.04419,0 -0.01042,0.0104 0.0066,0.031 0,0.0442 -0.146574,0.14657 0.02083,-0.0417 -0.04419,0.0884 -0.0093,0.0186 -0.02946,0.0295 -0.0442,0.0442 -0.01473,0.0147 -0.02556,0.0349 -0.04419,0.0442 -0.01318,0.007 -0.03761,-0.0132 -0.04419,0 -0.01318,0.0264 0.01318,0.062 0,0.0884 -0.0066,0.0132 -0.03102,-0.007 -0.04419,0 -0.01863,0.009 -0.02686,0.0326 -0.04419,0.0442 -0.02741,0.0183 -0.0651,0.0209 -0.08839,0.0442 -0.01042,0.0104 0.0066,0.031 0,0.0442 -0.0093,0.0186 -0.03488,0.0256 -0.04419,0.0442 -0.0066,0.0132 0.0066,0.031 0,0.0442 -0.02023,0.0404 -0.100286,0.0776 -0.132582,0.0884 -0.01398,0.005 -0.03102,-0.007 -0.0442,0 -0.01863,0.009 -0.02556,0.0349 -0.04419,0.0442 -0.01318,0.007 -0.03102,-0.007 -0.04419,0 -0.01863,0.009 -0.02556,0.0349 -0.04419,0.0442 -0.108848,0.0544 0.0399,-0.12828 -0.132583,0.0442 -0.01042,0.0104 0.01042,0.0338 0,0.0442 -0.01042,0.0104 -0.03102,-0.007 -0.04419,0 -0.01863,0.009 -0.02556,0.0349 -0.04419,0.0442 -0.01318,0.007 -0.03378,-0.0104 -0.04419,0 -0.01042,0.0104 -0.01042,0.0338 0,0.0442 0.02031,0.0203 0.100757,-0.023 0.132582,-0.0442 0.01733,-0.0115 0.02686,-0.0326 0.04419,-0.0442 0.02741,-0.0183 0.05609,-0.0377 0.08839,-0.0442 0.018,-0.004 0.248512,0.008 0.265165,0 0.01863,-0.009 0.02556,-0.0349 0.04419,-0.0442 0.01318,-0.007 0.02946,0 0.04419,0 0.01473,0 0.02946,0 0.04419,0 0.103644,0 -0.02083,0.0104 0.08839,-0.0442 0.01162,-0.006 0.153666,0 0.176777,0 0.04282,0 0.238813,-0.009 0.265165,0 0.03125,0.0104 0.05893,0.0295 0.08839,0.0442 0.02946,0.0147 0.06098,0.0259 0.08839,0.0442 0.01733,0.0116 0.02443,0.0376 0.04419,0.0442 0.02795,0.009 0.05893,0 0.08839,0 0.02946,0 0.05893,0 0.08839,0 0.220971,0 0.441942,0 0.662913,0 0.07366,0 0.147314,0 0.220971,0 0.02946,0 0.06044,-0.009 0.08839,0 0.274318,0.0914 -0.14688,-0.004 0.220971,0.0884 0.02858,0.007 0.06204,-0.0132 0.08839,0 0.01863,0.009 0.02556,0.0349 0.04419,0.0442 0.01345,0.007 0.11268,0 0.132583,0 0.10312,0 0.206239,0 0.309359,0 0.01623,0 0.174998,-0.002 0.176777,0 0.01042,0.0104 -0.01318,0.0376 0,0.0442 0.03953,0.0198 0.08839,0 0.132582,0 0.01747,0 0.202097,-0.009 0.220971,0 0.01863,0.009 0.02556,0.0349 0.04419,0.0442 0.01318,0.007 0.03378,-0.0104 0.0442,0 0.01042,0.0104 -0.01042,0.0338 0,0.0442 0.0221,0.0221 0.110485,-0.0221 0.132582,0 0.05893,0.0589 -0.07366,0.0442 0.04419,0.0442 0.01473,0 0.02946,0 0.04419,0 0.01473,0 0.03378,-0.0104 0.0442,0 0.01042,0.0104 -0.01042,0.0338 0,0.0442 0.01042,0.0104 0.04419,-0.0147 0.04419,0 0,0.0147 -0.03378,0.0104 -0.04419,0 -0.02329,-0.0233 -0.02592,-0.061 -0.0442,-0.0884 -0.01156,-0.0173 -0.02946,-0.0295 -0.04419,-0.0442 -0.01473,-0.0147 -0.02686,-0.0326 -0.04419,-0.0442 -0.02741,-0.0183 -0.06098,-0.0259 -0.08839,-0.0442 -0.02143,-0.0143 -0.206686,-0.19954 -0.220971,-0.22097 -0.01827,-0.0274 -0.02592,-0.061 -0.04419,-0.0884 -0.01156,-0.0173 -0.02946,-0.0295 -0.0442,-0.0442 -0.01473,-0.0147 -0.02556,-0.0349 -0.04419,-0.0442 -0.01318,-0.007 -0.03378,0.0104 -0.04419,0 -0.01042,-0.0104 0.0047,-0.0302 0,-0.0442 -0.01042,-0.0312 -0.0209,-0.0651 -0.04419,-0.0884 -0.01042,-0.0104 -0.03022,0.005 -0.04419,0 -0.03125,-0.0104 -0.0651,-0.0209 -0.08839,-0.0442 -0.01042,-0.0104 0.0066,-0.031 0,-0.0442 -0.02652,-0.053 -0.106066,-0.0795 -0.132582,-0.13258 -0.0066,-0.0132 0.01042,-0.0338 0,-0.0442 -0.01042,-0.0104 -0.03102,0.007 -0.04419,0 -0.01863,-0.009 -0.02946,-0.0295 -0.04419,-0.0442 -0.01473,-0.0147 -0.03488,-0.0256 -0.0442,-0.0442 -0.0066,-0.0132 0.0066,-0.031 0,-0.0442 -0.0093,-0.0186 -0.03488,-0.0256 -0.04419,-0.0442 -0.0066,-0.0132 0.01042,-0.0338 0,-0.0442 -0.02329,-0.0233 -0.0651,-0.0209 -0.08839,-0.0442 -0.01042,-0.0104 0.01042,-0.0338 0,-0.0442 -0.01042,-0.0104 -0.03102,0.007 -0.04419,0 -0.01863,-0.009 -0.02946,-0.0295 -0.04419,-0.0442 -0.02946,0 -0.06044,0.009 -0.08839,0 -0.01976,-0.007 -0.02556,-0.0349 -0.04419,-0.0442 -0.02343,-0.0117 -0.190906,0.01 -0.220971,0 -0.01976,-0.007 -0.02556,-0.0349 -0.04419,-0.0442 -0.02635,-0.0132 -0.06204,0.0132 -0.08839,0 -0.03727,-0.0186 -0.04886,-0.0752 -0.08839,-0.0884 -0.0029,-9.6e-4 -0.218068,-9.6e-4 -0.220971,0 -0.06789,0.0226 -0.03424,0.0965 -0.08839,0.13259 -0.0088,0.006 -0.19091,0 -0.220971,0 -0.01473,0 -0.03378,-0.0104 -0.04419,0 -0.004,0.004 -0.0023,0.13145 0,0.13258 0.02635,0.0132 0.06044,-0.009 0.08839,0 0.03953,0.0132 0.05112,0.0697 0.08839,0.0884 0.01318,0.007 0.02946,0 0.04419,0 0.02946,0.0147 0.06098,0.0259 0.08839,0.0442 0.01733,0.0116 0.03488,0.0256 0.04419,0.0442 0.0066,0.0132 -0.01226,0.036 0,0.0442 0.03876,0.0258 0.09092,0.0234 0.132583,0.0442 0.01863,0.009 0.02556,0.0349 0.04419,0.0442 0.01318,0.007 0.02946,0 0.04419,0 0.01473,0.0147 0.02556,0.0349 0.04419,0.0442 0.02635,0.0132 0.06044,-0.009 0.08839,0 0.03125,0.0104 0.05714,0.0338 0.08839,0.0442 0.01398,0.005 0.02946,0 0.04419,0 0.02946,0 0.05933,-0.005 0.08839,0 0.05991,0.01 0.118374,0.0275 0.176776,0.0442 0.04479,0.0128 0.0869,0.0351 0.132583,0.0442 0.02889,0.006 0.06044,-0.009 0.08839,0 0.01976,0.007 0.02556,0.0349 0.04419,0.0442 0.01318,0.007 0.05849,-0.004 0.0442,0 -0.07287,0.0182 -0.146228,0.0367 -0.220971,0.0442 -0.07329,0.007 -0.147314,0 -0.220971,0 -0.08839,0 -0.176777,0 -0.265165,0 -0.10312,0 -0.20624,0 -0.309359,0 -0.0442,0 -0.08873,0.005 -0.132583,0 -0.07454,-0.009 -0.146435,-0.0349 -0.220971,-0.0442 -0.04385,-0.005 -0.08925,0.009 -0.132582,0 -0.0323,-0.006 -0.05609,-0.0377 -0.08839,-0.0442 -7.28e-4,-1.5e-4 -0.29652,-0.004 -0.309359,0 -0.03125,0.0104 -0.06098,0.0259 -0.08839,0.0442 -0.146574,0.14657 0.04167,-0.0208 -0.08839,0.0442 -0.01863,0.009 -0.04419,0.065 -0.04419,0.0442 0,-0.13309 0.320708,-0.24591 0.397748,-0.26517 0.221451,-0.0554 0.438555,-0.0442 0.662912,-0.0442 0.05893,0 0.117852,0 0.176777,0 0.01473,0 0.03761,-0.0132 0.04419,0 0.01768,0.0353 -0.01768,0.0972 0,0.13258 0.0093,0.0186 0.02946,0.0295 0.04419,0.0442 0.0773,0.0773 0.157299,0.10561 0.265165,0.13258 0.01429,0.004 0.03102,-0.007 0.0442,0 0.01863,0.009 0.02946,0.0295 0.04419,0.0442 0.01473,0.0147 0.05893,0.0295 0.04419,0.0442 -0.01473,0.0147 -0.06153,-0.0326 -0.04419,-0.0442 0.05054,-0.0337 0.119154,-0.025 0.176777,-0.0442 0.03125,-0.0104 0.05893,-0.0295 0.08839,-0.0442\\\"\\n      id=\\\"path5958\\\" />\\n  </g>\\n  <path\\n    style=\\\"fill:#ffffff;fill-rule:evenodd;stroke:#ffffff;stroke-width:0.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;fill-opacity:1;stroke-miterlimit:4;stroke-dasharray:none\\\"\\n    d=\\\"m 190.3885,95.61845 c 0.6491,-0.387994 -0.77329,0.640927 -0.53033,0.883883 0.0417,0.04167 0.13511,-0.04167 0.17678,0 0.0417,0.04167 -0.0264,0.124072 0,0.176777 0.0373,0.07454 0.11785,0.117851 0.17677,0.176777 0.25665,0.256644 0.19137,0.176776 0.53033,0.176776 0.11785,0 0.24815,0.05271 0.35356,0 0.0527,-0.02635 -0.0417,-0.13511 0,-0.176776 0.0833,-0.08333 0.27022,0.08333 0.35355,0 0.0417,-0.04167 0,-0.117851 0,-0.176777 0,-0.05893 0,-0.117851 0,-0.176777 0,-0.05892 0,-0.117851 0,-0.176776 0,-0.05893 0.0264,-0.124072 0,-0.176777 -0.0373,-0.07454 -0.11785,-0.117851 -0.17678,-0.176777 -0.34857,-0.348573 -0.0959,-0.156565 -0.88388,-0.353553 z\\\"\\n    id=\\\"path6021\\\" />\\n\\n</svg>\\n\\n<style>\\n@keyframes hideshow {\\n\\n  0% { transform: translate(0px, 0px); }\\n  33% { transform: translate(0px, -1px); }\\n  66% {transform: translate(0px, 1px);}\\n  100% { transform: translate(0px, 0px); }\\n} \\n\\n/*hair*/\\n#path5803{\\n\\tfill: rgb(136, 136, 136) !important;\\n\\tstroke: rgb(136, 136, 136) !important;\\n}\\n\\n/*eyebrow*/\\n#path5805 {\\n\\tanimation: hideshow .5s ease infinite;\\n\\tfill: rgb(136, 136, 136) !important;\\n\\tstroke: rgb(136, 136, 136) !important;\\n}\\n/*eyebrow*/\\n#path5807 {\\n\\tanimation: hideshow .5s linear infinite;\\n\\tfill: rgb(136, 136, 136) !important;\\n\\tstroke: rgb(136, 136, 136) !important;\\n}\\n/*face*/\\n#path3456{\\n\\tstroke: rgb(164, 164, 164) !important;\\n\\tfill: #FDFAF8F0 !important;\\n}\\n\\n/*neck*/\\n#path3452{\\n\\tstroke: rgb(164, 164, 164) !important;\\n\\tfill: #FDFAF8F0 !important;\\n\\n}\\n\\n/*right eye lid */\\n#path5829{\\n\\tstroke: rgb(164, 164, 164) !important;\\n}\\n/*right eye a*/\\n#path5719{\\n\\tfill: #FBFAF9F0 !important;\\n\\tstroke: rgb(164, 164, 164) !important;\\n}\\n/*right eye b*/\\n#path5929{\\n\\tfill: rgb(164, 164, 164) !important;\\n\\tstroke: rgb(164, 164, 164) !important;\\n}\\n/*right eye c*/\\n#path5721{\\n\\tfill: rgb(131, 131, 131) !important;\\n\\tstroke: rgb(164, 164, 164) !important;\\n}\\n\\n/*left eye lid*/\\n#path5831{\\n\\tstroke: rgb(164, 164, 164) !important;\\n}\\n/*left eye a */\\n#path5735{\\n\\tfill: #FBFAF9F0 !important;\\n\\tstroke: rgb(164, 164, 164) !important;\\n}\\n/*left eye b */\\n#path5737{\\n\\tfill: rgb(164, 164, 164) !important;\\n\\tstroke: rgb(164, 164, 164) !important;\\n}\\n/*left eye c*/\\n#path5809{\\n\\tfill: rgb(164, 164, 164) !important;\\n\\tstroke: rgb(164, 164, 164) !important;\\n}\\n/*left eye iris d*/\\n#path5927{\\n\\tfill: rgb(131, 131, 131) !important;\\n\\tstroke: rgb(164, 164, 164) !important;\\n}\\n\\n/*nose tip*/\\n#path5739{\\n\\tfill: rgba(255, 199, 196, 0.063) !important;\\n\\tstroke: rgb(164, 164, 164) !important;\\n}\\n/*nose ridge*/\\n#path5848{\\n\\tstroke: rgb(164, 164, 164) !important;\\n}\\n/*nose hole right*/\\n#path5956{\\n\\tfill: rgb(164, 164, 164) !important;\\n\\tstroke: rgb(164, 164, 164) !important;\\n}\\n/*nose hole left*/\\n#path5958{\\n\\tfill: rgb(164, 164, 164) !important;\\n\\tstroke: rgb(164, 164, 164) !important;\\t\\n}\\n/*nostril right*/\\n#path5844 {\\n\\tstroke: rgb(164, 164, 164) !important;\\n}\\n/*nostril left*/\\n#path5842 {\\n\\tstroke: rgb(164, 164, 164) !important;\\n}\\n/*mouth hole*/\\n#path5952{\\n\\tfill: rgba(213, 213, 213, 0.851) !important;\\n\\tstroke: rgb(164, 164, 164) !important;\\n}\\n/*teeth*/\\n#path5763{\\n\\tfill: #FBFAF9F0 !important;\\n\\tstroke: rgb(164, 164, 164) !important;\\n}\\n/*mouth lips*/\\n#path5792{\\n\\tfill: rgba(238, 238, 238, 0.502) !important;\\n\\tstroke: rgb(164, 164, 164) !important;\\n}\\n\\n/*cheek right*/\\n#path5815{\\n\\tstroke: rgb(164, 164, 164) !important;\\t\\n}\\n\\n/*cheek right detail*/\\n#path5833{\\n\\tstroke: rgb(164, 164, 164) !important;\\t\\n}\\n\\n/*cheek left */\\n#path5817{\\n\\tstroke: rgb(164, 164, 164) !important;\\t\\n}\\n\\n/*ear left inner*/\\n#path5821{\\n\\tstroke: rgb(164, 164, 164) !important;\\t\\n}\\n\\n/*ear left outer a*/\\n#path3454{\\n\\tfill: #FDFAF8F0 !important;\\n\\tstroke: rgb(164, 164, 164) !important;\\t\\n}\\n\\n/*ear left outer b*/\\n#path5823{\\n\\tfill: #FDFAF8F0 !important;\\n\\tstroke: rgba(210, 210, 210, 0.502) !important;\\n}\\n\\n/*ear right inner*/\\n#path5825{\\n\\tstroke: rgba(218, 218, 218, 0.502) !important;\\n\\tfill: rgba(218, 218, 218, 0.502) !important;\\t\\n}\\n\\n/*ear right detail*/\\n#path5827{\\n\\tstroke: rgba(206, 206, 206, 0.502) !important;\\n\\tfill: rgba(218, 218, 218, 0.502) !important;\\t\\n}\\n\\n\\n/*shirt*/\\n#path5950 {\\n\\tfill: rgba(193, 193, 193, 0.251) !important;\\n\\tstroke: rgb(164, 164, 164) !important;\\n\\n}\\n\\n#path5950:hover{\\n\\t/*fill: pink !important;*/\\n\\t/*cursor: help !important;*/\\n}\\n</style>\"],\"names\":[],\"mappings\":\"AAoLA,WAAW,sBAAS,CAAC,AAEnB,EAAE,AAAC,CAAC,AAAC,SAAS,CAAE,UAAU,GAAG,CAAC,CAAC,GAAG,CAAC,AAAE,CAAC,AACtC,GAAG,AAAC,CAAC,AAAC,SAAS,CAAE,UAAU,GAAG,CAAC,CAAC,IAAI,CAAC,AAAE,CAAC,AACxC,GAAG,AAAC,CAAC,SAAS,CAAE,UAAU,GAAG,CAAC,CAAC,GAAG,CAAC,AAAC,CAAC,AACrC,IAAI,AAAC,CAAC,AAAC,SAAS,CAAE,UAAU,GAAG,CAAC,CAAC,GAAG,CAAC,AAAE,CAAC,AAC1C,CAAC,AAGD,uBAAS,CAAC,AACT,IAAI,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,UAAU,CACnC,MAAM,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,UAAU,AACtC,CAAC,AAGD,SAAS,cAAC,CAAC,AACV,SAAS,CAAE,sBAAQ,CAAC,GAAG,CAAC,IAAI,CAAC,QAAQ,CACrC,IAAI,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,UAAU,CACnC,MAAM,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,UAAU,AACtC,CAAC,AAED,SAAS,cAAC,CAAC,AACV,SAAS,CAAE,sBAAQ,CAAC,GAAG,CAAC,MAAM,CAAC,QAAQ,CACvC,IAAI,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,UAAU,CACnC,MAAM,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,UAAU,AACtC,CAAC,AAED,uBAAS,CAAC,AACT,MAAM,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,UAAU,CACrC,IAAI,CAAE,SAAS,CAAC,UAAU,AAC3B,CAAC,AAGD,uBAAS,CAAC,AACT,MAAM,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,UAAU,CACrC,IAAI,CAAE,SAAS,CAAC,UAAU,AAE3B,CAAC,AAGD,uBAAS,CAAC,AACT,MAAM,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,UAAU,AACtC,CAAC,AAED,uBAAS,CAAC,AACT,IAAI,CAAE,SAAS,CAAC,UAAU,CAC1B,MAAM,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,UAAU,AACtC,CAAC,AAED,uBAAS,CAAC,AACT,IAAI,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,UAAU,CACnC,MAAM,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,UAAU,AACtC,CAAC,AAED,uBAAS,CAAC,AACT,IAAI,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,UAAU,CACnC,MAAM,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,UAAU,AACtC,CAAC,AAGD,uBAAS,CAAC,AACT,MAAM,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,UAAU,AACtC,CAAC,AAED,uBAAS,CAAC,AACT,IAAI,CAAE,SAAS,CAAC,UAAU,CAC1B,MAAM,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,UAAU,AACtC,CAAC,AAED,uBAAS,CAAC,AACT,IAAI,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,UAAU,CACnC,MAAM,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,UAAU,AACtC,CAAC,AAED,uBAAS,CAAC,AACT,IAAI,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,UAAU,CACnC,MAAM,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,UAAU,AACtC,CAAC,AAED,uBAAS,CAAC,AACT,IAAI,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,UAAU,CACnC,MAAM,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,UAAU,AACtC,CAAC,AAGD,uBAAS,CAAC,AACT,IAAI,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,KAAK,CAAC,CAAC,UAAU,CAC3C,MAAM,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,UAAU,AACtC,CAAC,AAED,uBAAS,CAAC,AACT,MAAM,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,UAAU,AACtC,CAAC,AAED,uBAAS,CAAC,AACT,IAAI,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,UAAU,CACnC,MAAM,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,UAAU,AACtC,CAAC,AAED,uBAAS,CAAC,AACT,IAAI,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,UAAU,CACnC,MAAM,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,UAAU,AACtC,CAAC,AAED,SAAS,cAAC,CAAC,AACV,MAAM,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,UAAU,AACtC,CAAC,AAED,SAAS,cAAC,CAAC,AACV,MAAM,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,UAAU,AACtC,CAAC,AAED,uBAAS,CAAC,AACT,IAAI,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,KAAK,CAAC,CAAC,UAAU,CAC3C,MAAM,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,UAAU,AACtC,CAAC,AAED,uBAAS,CAAC,AACT,IAAI,CAAE,SAAS,CAAC,UAAU,CAC1B,MAAM,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,UAAU,AACtC,CAAC,AAED,uBAAS,CAAC,AACT,IAAI,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,KAAK,CAAC,CAAC,UAAU,CAC3C,MAAM,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,UAAU,AACtC,CAAC,AAGD,uBAAS,CAAC,AACT,MAAM,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,UAAU,AACtC,CAAC,AAGD,uBAAS,CAAC,AACT,MAAM,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,UAAU,AACtC,CAAC,AAGD,uBAAS,CAAC,AACT,MAAM,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,UAAU,AACtC,CAAC,AAGD,uBAAS,CAAC,AACT,MAAM,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,UAAU,AACtC,CAAC,AAGD,uBAAS,CAAC,AACT,IAAI,CAAE,SAAS,CAAC,UAAU,CAC1B,MAAM,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,UAAU,AACtC,CAAC,AAGD,uBAAS,CAAC,AACT,IAAI,CAAE,SAAS,CAAC,UAAU,CAC1B,MAAM,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,KAAK,CAAC,CAAC,UAAU,AAC9C,CAAC,AAGD,uBAAS,CAAC,AACT,MAAM,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,KAAK,CAAC,CAAC,UAAU,CAC7C,IAAI,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,KAAK,CAAC,CAAC,UAAU,AAC5C,CAAC,AAGD,uBAAS,CAAC,AACT,MAAM,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,KAAK,CAAC,CAAC,UAAU,CAC7C,IAAI,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,KAAK,CAAC,CAAC,UAAU,AAC5C,CAAC,AAID,SAAS,cAAC,CAAC,AACV,IAAI,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,KAAK,CAAC,CAAC,UAAU,CAC3C,MAAM,CAAE,IAAI,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,UAAU,AAEtC,CAAC\"}"
};

const SelfPortrait = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	$$result.css.add(css);
	return `<svg viewBox="${"0 0 341.68462 328.07979"}" id="${"selfportrait-object"}" version="${"1.1"}" height="${"65px"}"><defs id="${"defs4"}"></defs><g id="${"layer3"}" style="${"display:inline;opacity:0.656"}" transform="${"translate(-191.56549,-106.24631)"}"><path style="${"display:inline;fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke:#535353;stroke-width:0.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dash-array:none;stroke-opacity:1;"}" d="${"m 302.54069,194.23762 c 0,0 -2.77792,-0.50508 -3.283,1.51523 -0.50507,2.0203 -0.25254,5.3033 -2.27284,11.36421 -2.02031,6.06092 1.76777,10.85914 1.76777,10.85914 0,0 0,3.283 0.75761,5.05076 0.75761,1.76777 1.01015,6.31346 3.78807,8.5863 2.77792,2.27284 1.26269,9.09137 7.57615,7.57614 6.31345,-1.51522 18.43528,-42.17386 -8.33376,-44.95178 z"}" id="${"path3454"}" class="${"svelte-p4xb06"}"></path><path style="${"fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"}" d="${"m 403.10347,307.3519 13.1434,3.92893 9.5,7.5 7.75,2.25 15,10.75 37,15 10.5,9.25 16.5,13.5 1.25,4.5 c 0,0 17.75,34 19,51.25 1.25,17.24999 -340.9018,3.04772 -340.9018,3.04772 l 12.72792,-50.91169 8.48528,-16.26345 c 0,0 12.82031,-14.25635 21.92031,-15.55635 9.8995,-1.41422 6.39192,-0.97048 9.8995,-1.41422 0,0 65.76093,-28.63939 72.12489,-34.64823 4.62725,-4.36904 -3.53553,4.24265 -3.53553,4.24265 l -4.94975,7.77817 c 0,0 7.77817,28.28427 15.55634,34.64823 7.77818,6.36396 17.67767,21.92031 28.28428,22.62742 10.6066,0.7071 15.55635,7.77817 35.35533,-8.48528 19.79899,-16.26346 23.33453,-29.69849 26.87006,-44.54773 3.53554,-14.84924 -12.72792,-21.2132 -12.72792,-21.2132 z"}" id="${"path5950"}" class="${"svelte-p4xb06"}"></path><path style="${"display:inline;fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke:#535353;stroke-width:0.5;stroke-linecap:butt;stroke-linejomin:miter;stroke-miterlimit:4;stroke-dash-array:none;stroke-opacity:1;"}" d="${"m 320.31938,265.35236 c 0,0 4.91746,34.52885 -8.68732,52.12387 -11.76447,15.21496 31.947,71.26856 53.53809,65.65992 14.03179,-3.645 41.24345,-8.64959 51.0127,-55.05332 2.51196,-11.93173 -14.64721,-21.2132 -14.64721,-21.2132 0,0 -5.05077,-11.11168 -3.53554,-39.39595 0.99979,-18.6628 -17.18531,3.43605 -39.18441,4.46279 -12.56741,0.58655 -38.49631,-6.58411 -38.49631,-6.58411 z"}" id="${"path3452"}" class="${"svelte-p4xb06"}"></path><path style="${"display:inline;fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke:#9b9b9b;stroke-width:0.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"}" d="${"m 424.76915,198.02569 c 0,0 5.03114,-1.39679 8.33376,7.82868 3.09059,8.63323 -0.67094,18.03021 -3.53554,22.72843 -7.49922,12.29948 -16.66752,17.67767 -19.1929,14.89975 -5.80838,-7.82868 -3.97472,-3.72176 -6.06092,3.43452 -3.61879,4.97823 3.03046,15.50584 -15.40482,31.66828 -11.86929,14.89975 -33.0825,19.44544 -33.0825,19.44544 0,0 -20.45558,0.75761 -30.05203,-16.41498 -3.83715,-6.82453 -1.66118,-4.56258 -6.56832,-14.01173 -2.32838,-4.48352 -4.62617,-11.69735 -4.62617,-11.69735 -1.66519,-7.96036 -4.96795,-24.04093 -6.73572,-36.66784 -1.01015,-11.36422 1.38896,-19.69798 1.38896,-19.69798 l 0.12627,-50.76016 42.17387,-20.45558 47.98224,9.3439 14.39468,29.54697 -1.76777,39.14341 c 0,0 9.59645,-11.11168 12.62691,-8.33376 z"}" id="${"path3456"}" class="${"svelte-p4xb06"}"></path><path id="${"path5719"}" style="${"display:inline;opacity:1;fill:none;stroke:#000000;stroke-width:0.5;stroke-miterlimit:4.19999981;stroke-dasharray:none;stroke-opacity:1"}" d="${"m 383.54188,202.66595 c 0,0.91245 -0.28487,1.75837 -0.77053,2.45367 -2.60108,1.07732 -6.16373,0.53397 -6.23006,0.87147 -0.96381,-0.78665 -1.57921,-1.98403 -1.57921,-3.32514 0.15753,-0.96299 0.20918,-2.17591 0.93988,-2.33348 3.25573,-0.70207 7.53963,-1.56517 7.63992,2.33348 z m -16.1494,0.81456 c 0,0 2.94863,-0.7202 3.36022,-1.02194 2.39288,-1.75421 7.50789,-3.10352 11.52639,-2.55401 2.20053,0.30091 4.07226,1.17121 4.98814,2.85622 0.22797,0.41939 -1.66308,1.11271 -2.46837,1.54887 -2.59167,1.4037 -9.20072,1.87094 -13.32775,0.5623 -1.27147,-0.40317 -3.90734,-0.49491 -4.07863,-1.39144 z"}" class="${"svelte-p4xb06"}"></path><path style="${"fill:#3a3a3a;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"}" d="${"m 375.82725,200.29854 6.01041,-0.53033 c -0.53184,0 2.69076,4.64546 1.23744,5.12652 0,0 -2.2542,0.92759 -3.70554,0.80418 -1.91931,-0.1632 -3.55042,-0.10356 -3.54231,-0.0971 0,0 -2.29809,-5.12653 0,-5.3033 z"}" id="${"path5929"}" class="${"svelte-p4xb06"}"></path><circle style="${"display:inline;opacity:1;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:0.5;stroke-miterlimit:4.19999981;stroke-dasharray:none;stroke-opacity:1"}" id="${"path5721"}" cx="${"379.80472"}" cy="${"202.8176"}" r="${"2.147855"}" class="${"svelte-p4xb06"}"></circle><path style="${"display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"}" d="${"m 340.29514,203.92246 c 0,0 -7.90066,-7.05811 -15.37957,-6.45235 -6.23119,0.5047 -6.18622,2.35143 -6.36397,2.2981 0,0 3.88909,2.82842 5.65686,3.27036 8.81729,0.0677 10.72445,-0.79894 12.28598,-0.13258 2.03239,0.8673 3.27037,0.83969 3.27037,0.83969 z"}" id="${"path5735"}" class="${"svelte-p4xb06"}"></path><path style="${"display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"}" d="${"m 325.04815,197.5585 c 0,0 -3.2671,3.73849 0.97227,4.94974 3.71231,1.06067 5.83363,-0.83969 5.83363,-0.83969 l -0.26516,-2.87262 -6.36397,-1.28163 z"}" id="${"path5737"}" class="${"svelte-p4xb06"}"></path><path style="${"display:inline;fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"}" d="${"m 357.16085,233.63795 c 0,0 0.59099,-0.67992 1.74003,0.11557 1.14905,0.7955 2.25391,1.76777 3.18199,1.23744 0.92807,-0.53033 -0.79296,-3.04468 -2.87263,-2.96101 -2.06355,0.083 -7.59723,11.14626 -15.46796,-0.83969 -1.14733,-1.74721 -2.47298,-1.27887 -3.36982,-0.83316 -0.96376,0.47896 -1.45168,1.00919 -1.27056,1.05413 0.69825,0.17325 3.56586,-0.25444 5.33363,0.89461"}" id="${"path5739"}" class="${"svelte-p4xb06"}"></path><path style="${"fill:#161616;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.1;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;stroke-miterlimit:4;stroke-dasharray:none"}" d="${"m 337.99687,249.03083 c -1.08333,0 -2.16667,0 -3.25,0 -0.25,0 -0.52639,-0.11181 -0.75,0 -0.0745,0.0373 0.0589,0.19107 0,0.25 -0.0878,0.0877 -1.07732,-0.0863 -1.25,0 -0.10541,0.0527 -0.14459,0.19729 -0.25,0.25 -0.15713,0.0786 -0.84287,-0.0786 -1,0 -0.0745,0.0373 0.0373,0.17546 0,0.25 -0.0527,0.10541 -0.16667,0.16666 -0.25,0.25 -0.0833,0.0833 -0.14459,0.19729 -0.25,0.25 -0.0745,0.0373 -0.19108,-0.0589 -0.25,0 -0.0589,0.0589 0.0589,0.19107 0,0.25 -0.0589,0.0589 -0.19108,-0.0589 -0.25,0 -0.0589,0.0589 0.0589,0.19107 0,0.25 -0.16783,0.16783 -0.33217,-0.16784 -0.5,0 -0.11785,0.11785 0.16667,0.5 0,0.5 -0.0833,0 0,-0.33334 0,-0.25 0,0.16666 0.0745,0.35092 0,0.5 -0.33333,0.66666 -0.25,-0.75 -0.25,0.25 0,0.58629 0.0589,-0.11786 -0.25,0.5 -0.0373,0.0745 0.0373,0.17546 0,0.25 -0.0527,0.10541 -0.1973,0.14459 -0.25,0.25 -0.0229,0.0459 0.0183,0.75 0,0.75 -0.0833,0 0.0589,-0.30893 0,-0.25 -0.11943,0.11943 -0.35663,0.64337 -0.25,0.75 0.11785,0.11785 0.38215,-0.11786 0.5,0 0.0589,0.0589 -0.0589,0.19107 0,0.25 0.0589,0.0589 0.17546,-0.0373 0.25,0 0.10541,0.0527 0.14459,0.19729 0.25,0.25 0.14907,0.0745 0.34189,-0.0527 0.5,0 1.81085,0.60361 -0.39415,-0.0721 0.75,0.5 0.0745,0.0373 0.17546,-0.0373 0.25,0 0.10541,0.0527 0.14459,0.19729 0.25,0.25 0.0745,0.0373 0.19107,-0.0589 0.25,0 0.0589,0.0589 -0.0589,0.19107 0,0.25 0.0589,0.0589 0.16667,0 0.25,0 0.0833,0.0833 0.18463,0.15194 0.25,0.25 0.10336,0.15504 0.19107,0.32322 0.25,0.5 0.10345,0.31035 -0.20523,0.27238 0.25,0.5 0.26667,0.13333 0.23333,-0.13334 0.5,0 0.10541,0.0527 0.14459,0.19729 0.25,0.25 0.0745,0.0373 0.16667,0 0.25,0 0.0833,0.0833 0.14459,0.19729 0.25,0.25 0.14907,0.0745 0.38215,-0.11786 0.5,0 0.0589,0.0589 -0.0589,0.19107 0,0.25 0.0589,0.0589 0.17094,-0.0264 0.25,0 0.17678,0.0589 0.33333,0.16666 0.5,0.25 0.16667,0.0833 0.34022,0.15413 0.5,0.25 0.4639,0.27834 1.38714,0.94761 1.75,1.25 2.16264,1.8022 -0.92109,-0.53073 1,0.75 0.0981,0.0654 0.14459,0.19729 0.25,0.25 0.0745,0.0373 0.16667,0 0.25,0 0.25,0 0.5,0 0.75,0 1.08333,0 2.16667,0 3.25,0 0.33333,0 0.66667,0 1,0 0.16667,0 0.33333,0 0.5,0 0.0833,0 0.19107,-0.0589 0.25,0 0.0589,0.0589 -0.0589,0.19107 0,0.25 0.0589,0.0589 0.16667,0 0.25,0 0.25,0 0.5,0 0.75,0 0.91667,0 1.83333,0 2.75,0 0.33333,0 0.6712,0.0548 1,0 0.33892,-0.0565 0.65986,-0.20141 1,-0.25 0.24749,-0.0354 0.50251,0.0354 0.75,0 2.4574,-0.35106 -0.62075,-0.25 2.25,-0.25 1.75,0 3.5,0 5.25,0 0.58333,0 1.16667,0 1.75,0 0.16667,0 0.33333,0 0.5,0 0.0833,0 0.17094,0.0264 0.25,0 0.17678,-0.0589 0.32322,-0.19108 0.5,-0.25 0.0791,-0.0264 0.16915,0.0202 0.25,0 0.25565,-0.0639 0.49434,-0.18609 0.75,-0.25 0.0808,-0.0202 0.19107,0.0589 0.25,0 0.0589,-0.0589 -0.0589,-0.19108 0,-0.25 0.0589,-0.0589 0.16667,0 0.25,0 0.16667,0 0.33333,0 0.5,0 0.91667,0 1.83333,0 2.75,0 0.0665,0 0.72936,0.0413 0.75,0 0.0745,-0.14908 -0.0527,-0.34189 0,-0.5 0.16583,-0.49749 0.23333,-0.11667 0.5,-0.25 0.10541,-0.0527 0.14459,-0.1973 0.25,-0.25 0.0745,-0.0373 0.19107,0.0589 0.25,0 0.0589,-0.0589 -0.0589,-0.19108 0,-0.25 0.0589,-0.0589 0.17546,0.0373 0.25,0 1.04044,-0.52022 -0.26726,0.0173 0.25,-0.5 0.0589,-0.0589 0.17546,0.0373 0.25,0 0.10541,-0.0527 0.14459,-0.1973 0.25,-0.25 0.14907,-0.0745 0.35093,0.0745 0.5,0 1.14415,-0.57208 -1.06085,0.10361 0.75,-0.5 0.0791,-0.0264 0.19107,0.0589 0.25,0 0.0589,-0.0589 -0.0373,-0.17547 0,-0.25 0.0527,-0.10541 0.19729,-0.14459 0.25,-0.25 0.13333,-0.26667 -0.13333,-0.23334 0,-0.5 0.0527,-0.10541 0.19729,-0.14459 0.25,-0.25 0.0373,-0.0745 -0.0589,-0.19108 0,-0.25 0.0589,-0.0589 0.19107,0.0589 0.25,0 0.0589,-0.0589 -0.0373,-0.17547 0,-0.25 0.0527,-0.10541 0.19729,-0.14459 0.25,-0.25 0.0373,-0.0745 -0.0589,-0.19108 0,-0.25 0.0589,-0.0589 0.19107,0.0589 0.25,0 0.0589,-0.0589 -0.0589,-0.19108 0,-0.25 0.11785,-0.11786 0.34189,0.0527 0.5,0 0.17678,-0.0589 0.32322,-0.19108 0.5,-0.25 0.32912,-0.10971 0.52928,0.19144 0.75,-0.25 0.22222,-0.44445 -0.13889,-0.13889 -0.25,-0.25 -0.0589,-0.0589 0.0589,-0.19108 0,-0.25 -0.0589,-0.0589 -0.17546,0.0373 -0.25,0 -0.21082,-0.10541 -0.28918,-0.39459 -0.5,-0.5 -0.0745,-0.0373 -0.17546,0.0373 -0.25,0 -0.10541,-0.0527 -0.15194,-0.18463 -0.25,-0.25 -0.15504,-0.10337 -0.36824,-0.11824 -0.5,-0.25 -0.0589,-0.0589 0.0589,-0.19108 0,-0.25 -0.0589,-0.0589 -0.19108,0.0589 -0.25,0 -0.0589,-0.0589 0.0589,-0.19108 0,-0.25 -0.11785,-0.11786 -0.35093,0.0745 -0.5,0 -0.10541,-0.0527 -0.14459,-0.1973 -0.25,-0.25 -0.0745,-0.0373 -0.17546,0.0373 -0.25,0 -0.10541,-0.0527 -0.14459,-0.1973 -0.25,-0.25 -0.14647,-0.0732 -1.06578,0.0461 -1.25,0 -0.18078,-0.0452 -0.32322,-0.19108 -0.5,-0.25 -0.32596,-0.10866 -0.66963,-0.15561 -1,-0.25 -0.25338,-0.0724 -0.5,-0.16667 -0.75,-0.25 -0.25,-0.0833 -0.52403,-0.11442 -0.75,-0.25 -0.20211,-0.12127 -0.28918,-0.39459 -0.5,-0.5 -0.14907,-0.0745 -0.34189,0.0527 -0.5,0 -0.1118,-0.0373 -0.14459,-0.1973 -0.25,-0.25 -0.14907,-0.0745 -0.38215,0.11785 -0.5,0 -0.0589,-0.0589 0.0589,-0.19108 0,-0.25 -0.0589,-0.0589 -0.16667,0 -0.25,0 -0.0833,0 -0.16667,0 -0.25,0 -0.41667,0 -0.83333,0 -1.25,0 -3.25,0 -6.5,0 -9.75,0 -2.91667,0 -5.83333,0 -8.75,0 -1.08333,0 -2.16667,0 -3.25,0 -0.33333,0 -0.66667,0 -1,0 -0.25,0 -0.5034,0.0411 -0.75,0 -0.41914,-0.0699 -0.83333,-0.16667 -1.25,-0.25 z"}" id="${"path5952"}" class="${"svelte-p4xb06"}"></path><path style="${"fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"}" d="${"m 371.1875,251.98721 c 0,0 0.1875,2.6875 -0.1875,3.25 -0.375,0.5625 -2.375,-0.0625 -2.5,-0.5625 -0.125,-0.5 -0.0625,1.5 -1.25,2.125 -1.1875,0.625 -2,-1.5625 -2,-1.5625 0,0 -0.5625,2.875 -2.25,2.5625 -1.6875,-0.3125 -2.1875,-1 -2.1875,-1 l -0.4375,-1.25 c 0,0 -0.6875,3.1875 -2.0625,2.6875 -1.375,-0.5 -2.4375,-0.1875 -2.875,-2.25 -0.4375,-2.0625 -0.5625,1.5 -0.5625,1.5 0,0 -5.1875,-0.0625 -5.6875,-0.6875 -0.5,-0.625 -0.3125,-1.3125 -0.3125,-1.3125 l -0.4375,1.3125 c 0,0 -4.75,0.3125 -5.1875,-0.75 -0.4375,-1.0625 -0.3125,-1.625 -0.3125,-1.625 l -0.4375,1.75 c 0,0 -2.0625,0.5 -2.9375,-1.4375 -0.875,-1.9375 -0.125,1.125 -0.125,1.125 0,0 -1.5625,0.6875 -2,-0.125 -0.4375,-0.8125 -0.75,-1.5625 -0.75,-1.5625 0,0 -1.875,-1.3125 -2.0625,-2.375 -0.1875,-1.0625 13.85095,-0.39461 13.85095,-0.39461 7.85323,0.18024 14.76784,-1.39611 22.71155,0.58211 z"}" id="${"path5763"}" class="${"svelte-p4xb06"}"></path><path style="${"fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"}" d="${"m 374.125,252.61221 c 0.69963,0.41978 -15.10409,-5.11245 -16.8125,-6.375 -0.81823,-0.60469 -2.6875,-0.1875 -2.6875,-0.1875 0,0 -4.375,1.6875 -5.4375,1.5 -1.0625,-0.1875 -1.83233,1.66412 -7,-2.5 -0.48666,-0.39215 -11.84804,2.6201 -13.75,7.375 -1,2.5 1.5625,0.625 1.5625,0.625 0,0 0.875,-2.5625 2.625,-2.5625 1.75,0 14.75,0.5625 15.875,0.875 1.125,0.3125 18.625,-0.3125 21.75,0.4375 3.125,0.75 3.375,1.4375 3.375,1.4375 0,0 -1,1.5 -2.0625,2.0625 -1.0625,0.5625 -6.6875,2.375 -8.875,2.6875 -2.1875,0.3125 -13.9375,0.3125 -14.75,0.375 -0.8125,0.0625 -4.625,1.1875 -8.375,-0.0625 -3.75,-1.25 -7.8125,-3.8125 -8.75,-4.3125 -0.9375,-0.5 -2.125,0.5625 -2.125,0.5625 0,0 0.75,-0.1875 1.5625,-0.1875 0.8125,0 7.3125,10 11.4375,10.9375 4.125,0.9375 9,1.75 15.5,-0.1875 6.5,-1.9375 10.3125,-4.5 13.25,-6.9375 2.9375,-2.4375 3.6875,-5.5625 3.6875,-5.5625 z"}" id="${"path5792"}" class="${"svelte-p4xb06"}"></path><path style="${"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1.52499998;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"}" d="${"m 408.375,202.11221 1.25,1.75 -1.25,-0.625 0.5,1.375 -0.625,0 0.5,1.375 -1.25,0.125 1,1.625 0.25,-1 0.625,1.375 -1.25,0.625 1.375,1.75 0.125,-1 0.875,1.125 -1.25,0.125 1.25,2.375 0.375,1.375 0.125,0.625 0.875,-3 0.125,2.375 1,-3.75 0.125,1.125 1.25,-3.5 0,2 1.125,-3.875 0.125,1.875 0.625,-5.125 0.625,2.875 0.75,-5.5 0.75,2 0.625,-2.75 0.5,1.75 1.125,-4 0.25,2.625 1.5,-1.25 2.5,-1 -0.75,-3.75 1.125,1.25 -1.125,-3.125 1.25,1 -1.125,-3.625 2,2.375 -0.75,-6.375 1.125,2.625 -0.75,-4.5 1.5,1.75 -1.75,-5.5 1.625,0.625 -1.25,-4.875 1.125,0.75 -2,-6.375 2,1.875 -2.75,-5.75 2.25,2.25 -1.5,-5.625 1.5,1.5 -1.375,-3.75 1.875,2.125 -2.75,-5.625 2.625,2.25 -2.25,-4.5 2.125,1.5 -2.125,-3.875 2.125,1.125 -2.625,-4 3.875,3.125 -3.75,-6 2,0.625 -3.125,-3.875 2,0.5 -1.875,-3.5 1.625,0.25 -1.625,-3.875 -0.625,1.5 -1,-3 -1.375,1.5 -3,-3.125 -3.25,-4.5 0.375,2.625 -3.5,-4.625 0.625,2.25 -3.875,-4.75 -0.375,1.75 -3,-3.625 -0.375,1.75 -2.125,-3.375 0.25,2.25 -2.875,-4.5 -1,1 -3.625,-3.5 1.375,2.5 -4.625,-4.25 1.125,2.375 -3.375,-2.875 0.75,2 -3.125,-3.25 1,1.625 -2.875,-3.375 1.375,3 -2.375,-2.75 -2,-0.75 0.75,1.625 -2.375,-2.5 -4.125,-1.625 -2,0 3,1.125 -0.25,2.25 -3.5,-2.625 1.25,1.75 -2.875,-2.25 -0.5,2.125 -2.875,-2.625 -4.625,-1.125 2.5,1.625 -5.625,-0.875 2.625,2.125 -4.5,-1.25 2.125,2 -6,-2 2.75,2.25 -2.875,-1 0.5,1.5 -3.5,-1.625 1.125,2.125 -4,-0.875 1.625,1.625 -5.875,-0.5 1.875,1.5 -6.375,-0.25 3.75,1.75 -6.25,-0.625 -4.125,0.5 3.625,0.875 -5.75,-0.25 1.625,1.625 -2.375,0.125 0.75,1 -3.875,0 2.25,1.375 -3.75,0 1.5,1.125 -3.5,0.125 2,1.375 -3.375,1.375 2.5,0.125 -5.125,1.125 2.5,0.25 -3.375,1.375 3.25,0.25 -4.75,1.375 3.25,0.875 -5.5,-0.375 1.125,1.5 -3.75,0.5 -1.375,2.625 2.25,-1.75 0.75,1.125 -2.75,1.25 -1.25,1.75 2.25,-0.875 -3,3.375 2.25,-0.5 -4.125,4.5 2.125,-0.75 -2.875,4.125 1.875,0.25 -3.5,1.625 1.25,0 -2.375,3.5 2.125,-1.125 -4.125,4.375 3.25,-1.75 -2.875,4.125 1.5,-1.25 -2.25,4.625 2.125,-2.125 -3.625,4.25 1.875,-0.75 -1.125,3.625 1.375,-1.375 -1.625,4.875 1.125,-1.375 -0.875,3.375 1.125,-0.875 -0.875,4 1.75,0 -1.5,3.625 1.25,-0.625 -1.375,4.375 1.625,-2 -1,4.5 1.25,-0.875 -0.5,5.375 1.25,-2.125 -0.875,3.5 0.875,-0.625 0.625,1.25 -0.5,3.375 1.375,-1.25 -1.5,3.375 1.25,-0.75 0,3.25 1.375,-1.25 -1.625,4 1.375,-0.625 -1.125,3.875 1.375,-1.125 -0.25,2.875 0.875,-1.25 0,3.375 1.25,-6.75 1,-3.375 -0.25,-14.625 c 0,0 -0.38388,-13.83731 0.11612,-16.83731 0.22841,-1.37048 0.41992,-3.42336 0.56058,-5.24915 0.16725,-2.17091 1.32326,-6.67242 1.32326,-6.67242 l 1.74209,-2.39809 1.57346,3.21809 1.25374,-4.4424 0.95991,3.8324 c 2.04411,1.39169 -3.27416,-23.57977 4.71812,-0.77468 l 1.94145,3.08161 0.92962,-4.17067 1.72259,6.10347 1.16219,-6.33847 1.59848,6.0116 2.67638,-5.50508 2.46286,2.6589 3.37124,-3.19625 2.63338,2.59721 2.8503,-4.68805 c 6.20964,2.74575 1.20519,-6.59939 8.0223,2.40363 l 2.78374,-0.37388 c 1.54729,0.71082 2.61617,-7.80305 4.64245,-0.86534 l 3.01491,2.43407 4.49535,-2.7942 -1.00482,4.1201 3.91819,-4.12968 0.0778,4.91894 c 1.86231,-0.26724 3.05081,-8.19221 3.81916,-0.80173 l 6.51003,-8.29278 -1.71331,7.30334 5.16272,-5.33956 -2.34862,5.46075 4.97838,-5.97649 -1.73083,5.72581 4.78034,-6.69319 -1.03841,4.66959 5.95476,-5.85981 -1.90573,6.16102 c 2.28016,-0.74003 4.71712,-6.03779 8.25469,-3.63431 0.28273,1.77056 1.17061,-3.08679 2.14216,-1.56048 1.01451,1.59381 2.08829,9.57306 1.1153,11.53279 -1.39005,2.79974 -1.7925,-4.01355 -0.1437,8.2574 0.12885,0.95893 1.98496,7.57435 1.98496,7.57435 2.14522,2.36754 3.64747,4.60481 4.63372,7.23447 1.0037,2.67618 0.59936,7.78673 0.97746,10.87266 0.36896,3.01139 -0.74758,5.21412 -2.17468,9.53909"}" id="${"path5803"}" class="${"svelte-p4xb06"}"></path><path style="${"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"}" d="${"m 382.89832,191.10615 3.18198,0.53033 -2.12132,-0.17678 4.41942,1.23744 -1.94455,-1.32583 c 1.76777,0.20624 2.41568,2.27892 5.30331,0.61872 l -1.94455,1.41421 3.35876,-0.61871 2.2981,0.44194 1.23743,0.17677 -0.88388,0.53033 2.12132,0 -1.76777,0.53033 2.65165,0.88389 1.76777,-0.53033 -2.2981,-2.12132 0.88389,-0.35356 -4.77297,-1.94454 2.65165,0.17678 -4.06587,-1.76777 -0.53033,0.70711 -5.03813,-2.38649 -1.06066,0.70711 -2.38649,-1.5026 -1.41421,0.0884 -2.12132,0.26517 -1.85616,-0.26516 -2.56326,-0.0884 -1.23743,0.35355 -1.76777,0.53033 -1.5026,-0.0884 -3.88909,-0.26516 1.85615,1.06066 -5.21491,-0.26516 0.79549,0.26516 -3.88908,0.88388 3.53553,0.35355 -3.8007,2.47488 3.35876,-0.26516 3.27036,-0.70711 0.35356,0.44194 -3.18197,0.26516 -1.32584,0.97227 5.3917,-0.35355 4.41941,-0.88388 3.18198,-0.70711 3.18198,-0.70711 -6.54073,1.94455 8.3085,-1.41422 -1.59099,1.23744 z"}" id="${"path5805"}" class="${"svelte-p4xb06"}"></path><path style="${"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"}" d="${"m 338.88092,190.39904 -5.65685,-4.24264 -0.7955,-0.44194 c 1.11959,1.00173 -3.09359,-0.0884 -3.09359,-0.0884 l -2.47487,-0.88388 -2.74004,0.0884 -4.68458,0.53034 -0.0884,0.0884 -2.38647,0.0884 -4.06587,1.85616 3.71231,-0.35356 -5.3033,2.2981 2.2981,-0.35355 -3.27037,1.67938 0.61872,-0.0884 -1.67938,1.5026 2.38648,-0.26517 -0.0884,0.17678 2.56326,-0.70711 2.74003,-1.23743 0.44195,0.7071 3.44714,-1.94454 0.44194,0.88388 2.38649,-1.06066 4.68458,-0.17677 -4.24264,-0.17678 7.42462,1.41421 -2.38648,1e-5 6.09879,0.17677 z"}" id="${"path5807"}" class="${"svelte-p4xb06"}"></path><path style="${"fill:#2e2e2e;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"}" d="${"m 333.22407,199.59143 -0.53033,3.35876 c 0,0 -5.83363,1.41421 -7.95495,-0.35356 -2.12132,-1.76776 -1.50261,-5.12652 -1.50261,-5.12652 l 8.57368,1.23744 -0.35356,1.76776 -1.59099,-1.23743 -2.82842,-0.88389 c 0,0 -2.65166,1.23744 -0.70711,3.00521 1.94454,1.76776 5.3033,-0.35356 5.3033,-0.35356 z"}" id="${"path5809"}" class="${"svelte-p4xb06"}"></path><path style="${"fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"}" d="${"m 370.1704,232.29512 c 0,0 0,0 7.60139,7.95495 0.83972,0.87877 0,0 3.75742,7.10488 0.21545,0.40739 0.30845,0.67329 0.30845,0.67329 0,0 1.41421,4.41942 -0.17678,9.19239 -1.59099,4.77297 -1.41421,3.53554 -1.41421,3.53554 l 0,0.88388"}" id="${"path5815"}" class="${"svelte-p4xb06"}"></path><path style="${"fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"}" d="${"m 335.52217,227.52215 c 0,0 -3.88909,0.35355 -10.78338,15.20279"}" id="${"path5817"}" class="${"svelte-p4xb06"}"></path><path style="${"display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"}" d="${"m 307.2379,216.03166 c 0,0 -1.32583,4.06587 0.26516,5.65686 1.59099,1.59099 1.32583,5.12652 1.32583,5.12652 l -1.76777,-3.71231 -2.2981,-0.17678 c 0,0 -3.35876,-6.71751 -1.06066,-9.01561"}" id="${"path5821"}" class="${"svelte-p4xb06"}"></path><path style="${"display:inline;fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"}" d="${"m 303.17203,206.48572 -2.47487,6.36396 c 0,0 -0.88389,7.42462 1.23743,11.13693 2.12133,3.71231 -2.65165,-6.0104 -2.65165,-6.0104 l -1.59099,-10.07628 c 0,0 1.23744,-3.53553 1.59099,-4.77297 0.35356,-1.23743 0.17678,-6.36396 1.06066,-6.36396 0.88389,0 3.18198,1.41422 3.18198,2.82843"}" id="${"path5823"}" class="${"svelte-p4xb06"}"></path><path style="${"display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"}" d="${"m 417.90011,211.43547 -1.94455,3.71231 c 0,0 4.41942,8.3085 0.17678,10.78338 -4.24264,2.47487 -5.65685,5.48007 -3.53553,4.59619 2.12132,-0.88388 4.94974,-4.59619 5.65685,-4.59619"}" id="${"path5825"}" class="${"svelte-p4xb06"}"></path><path style="${"display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"}" d="${"m 422.4963,202.0663 c 0,0 9.61922,-2.559 9.54594,13.61181 -0.021,4.64361 -2.45988,3.93859 -2.45988,3.93859 -0.6039,9.10214 -7.96994,13.20875 -7.96994,13.20875 0,0 6.36396,-4.24264 6.54073,-13.61181 0.17678,-9.36916 2.12133,-13.96536 -5.65685,-17.14734"}" id="${"path5827"}" class="${"svelte-p4xb06"}"></path><path style="${"display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"}" d="${"m 391.75,200.48721 c 0,0 -5.875,-13.875 -25,0.25"}" id="${"path5829"}" class="${"svelte-p4xb06"}"></path><path style="${"display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"}" d="${"m 316.375,195.48721 c 0,0 11.875,-10.875 25,6.125"}" id="${"path5831"}" class="${"svelte-p4xb06"}"></path><path style="${"display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"}" d="${"m 377,250.61221 c 0,0 2.25,3 1,6.25"}" id="${"path5833"}" class="${"svelte-p4xb06"}"></path><path style="${"fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"}" d="${"m 342.15129,223.98661 c 0.0399,0.005 -10.65802,1.66257 -5.27684,8.39347 0.338,0.42278 4.79981,0.86218 4.79981,0.86218"}" id="${"path5842"}" class="${"svelte-p4xb06"}"></path><path style="${"fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.2;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"}" d="${"m 364.51354,226.80984 c 0,0 6.18719,9.28598 -1.85615,9.1092"}" id="${"path5844"}" class="${"svelte-p4xb06"}"></path><path style="${"display:inline;fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.60000002;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"}" d="${"m 332.5,189.86221 c 0,0 16.25,7 12.25,17"}" id="${"path5848"}" class="${"svelte-p4xb06"}"></path><ellipse style="${"display:inline;opacity:0;fill:none;stroke:#000000;stroke-width:0.30000001;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"}" id="${"path5697"}" cx="${"379.46429"}" cy="${"203.6122"}" rx="${"1.0714285"}" ry="${"3.75"}"></ellipse><ellipse style="${"display:inline;opacity:0;fill:none;stroke:#000000;stroke-width:0.1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"}" id="${"path5699"}" cx="${"380.55804"}" cy="${"202.71935"}" rx="${"2.4330356"}" ry="${"1.875"}"></ellipse><ellipse style="${"display:inline;opacity:0;fill:none;stroke:#000000;stroke-width:0.1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"}" id="${"path5701"}" cx="${"379.2634"}" cy="${"202.71935"}" rx="${"1.8973215"}" ry="${"1.4732143"}"></ellipse><ellipse style="${"display:inline;opacity:0;fill:none;stroke:#000000;stroke-width:0.1;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"}" id="${"path5703"}" cx="${"391.74106"}" cy="${"208.1881"}" rx="${"1.9196428"}" ry="${"1.6294643"}"></ellipse><path style="${"fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:#000000;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"}" d="${"m 328.80465,198.53077 -1.06066,-1.06066 -1.94454,0 c 0,0 -0.53033,5.3033 2.2981,4.41942 2.82842,-0.88389 4.59619,-1.94455 4.59619,-1.94455 l -4.59619,-2.47487 0,0"}" id="${"path5927"}" class="${"svelte-p4xb06"}"></path><path transform="${"translate(296.49688,106.24631)"}" style="${"fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.69999999;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"}" d="${"m 61.739253,126.6998 c 0.01738,0.071 -0.415139,0.0308 -0.441942,0.0442 -0.01318,0.007 -0.01042,0.0338 0,0.0442 0.02083,0.0208 0.06044,-0.009 0.08839,0 0.03125,0.0104 0.05714,0.0338 0.08839,0.0442 0.02795,0.009 0.06755,-0.0208 0.08839,0 0.01042,0.0104 -0.01042,0.0338 0,0.0442 0.01042,0.0104 0.03102,-0.007 0.04419,0 0.03727,0.0186 0.04886,0.0752 0.08839,0.0884 0.0083,0.003 0.259693,0.002 0.265165,0 0.03125,-0.0104 0.05714,-0.0338 0.08839,-0.0442 0.02795,-0.009 0.05893,0 0.08839,0 0.07366,0 0.147314,0 0.220971,0 0.07366,0 0.147314,0 0.220971,0 0.01473,0 0.02946,0 0.04419,0 0.01473,0 0.03241,-0.009 0.04419,0 0.01279,0.01 0.234711,0.24994 0.265165,0.26517 0.07823,0.0391 0.0151,-0.0657 0.08839,0.0442 0.117851,0.17678 -0.04419,0.0147 0.132582,0.13258 0.01733,0.0116 0.02443,0.0376 0.04419,0.0442 0.02795,0.009 0.06044,-0.009 0.08839,0 0.03953,0.0132 0.05112,0.0697 0.08839,0.0884 0.01318,0.007 0.03102,-0.007 0.04419,0 0.01863,0.009 0.02556,0.0349 0.04419,0.0442 0.01318,0.007 0.04419,-0.0147 0.04419,0 0,0.0208 -0.02398,0.0391 -0.04419,0.0442 -0.04287,0.0107 -0.08839,0 -0.132582,0 -0.04419,0 -0.08899,0.007 -0.132583,0 -0.04791,-0.008 -0.172883,-0.0563 -0.22097,-0.0884 -0.01036,-0.007 -0.05465,-0.0779 -0.08839,-0.0442 -0.03251,0.0325 0.03556,0.0798 0.04419,0.0884 0.0442,0.0442 0.08839,0.0884 0.132583,0.13258 0.01473,0.0147 0.02686,0.0326 0.04419,0.0442 0.101616,0.0677 0.119355,0.0206 0.220971,0.0884 0.03985,0.0266 0.150993,0.16819 0.176777,0.17678 0.02795,0.009 0.06044,-0.009 0.08839,0 0.03953,0.0132 0.05112,0.0698 0.08839,0.0884 0.02635,0.0132 0.06755,-0.0208 0.08839,0 0.02329,0.0233 0.0209,0.0651 0.04419,0.0884 0.01355,0.0136 0.207313,-0.0137 0.220971,0 0.01042,0.0104 -0.01042,0.0338 0,0.0442 0.02083,0.0208 0.06204,-0.0132 0.08839,0 0.01863,0.009 0.02556,0.0349 0.04419,0.0442 0.01318,0.007 0.03378,-0.0104 0.04419,0 0.01042,0.0104 -0.01042,0.0338 0,0.0442 0.01042,0.0104 0.03102,-0.007 0.0442,0 0.09429,0.0472 -0.0059,0.0412 0.08839,0.0884 0.01318,0.007 0.03102,-0.007 0.04419,0 0.01863,0.009 0.02946,0.0295 0.04419,0.0442 0.01473,0.0147 0.03488,0.0256 0.04419,0.0442 0.0066,0.0132 -0.01042,0.0338 0,0.0442 0.01042,0.0104 0.03102,-0.007 0.0442,0 0.01863,0.009 0.03488,0.0256 0.04419,0.0442 0.0066,0.0132 -0.01318,0.0376 0,0.0442 0.02635,0.0132 0.06204,-0.0132 0.08839,0 0.01318,0.007 -0.01042,0.0338 0,0.0442 0.01042,0.0104 0.02946,0 0.04419,0 0.01473,0 0.02946,0 0.0442,0 0.103643,0 -0.02083,-0.0104 0.08839,0.0442 0.0038,0.002 0.173009,0.002 0.176777,0 0.08302,-0.0415 0.07379,-0.16218 0.132582,-0.22097 0.02329,-0.0233 0.06098,-0.0259 0.08839,-0.0442 0.01873,-0.0125 0.12344,-0.11429 0.132583,-0.13258 0.0066,-0.0132 -0.01042,-0.0338 0,-0.0442 0.01042,-0.0104 0.03378,0.0104 0.04419,0 0.0035,-0.004 0,-0.18619 0,-0.22097 0,-0.17265 0.01318,-0.005 -0.04419,-0.17678 -0.0047,-0.014 0.01042,-0.0338 0,-0.0442 -0.02329,-0.0233 -0.06098,-0.0259 -0.08839,-0.0442 -0.0608,-0.0405 -0.04545,-0.0682 -0.08839,-0.13258 -0.01156,-0.0173 -0.02946,-0.0295 -0.04419,-0.0442 -0.01473,-0.0147 -0.02946,-0.0295 -0.04419,-0.0442 -0.02946,-0.0147 -0.0651,-0.0209 -0.08839,-0.0442 -0.02329,-0.0233 -0.02443,-0.062 -0.0442,-0.0884 -0.05,-0.0667 -0.126776,-0.11011 -0.176776,-0.17678 -0.01976,-0.0264 -0.02443,-0.062 -0.04419,-0.0884 -0.025,-0.0333 -0.06236,-0.0558 -0.08839,-0.0884 -0.223002,-0.27875 0.03664,-0.008 -0.176777,-0.22097 -0.02946,-0.0295 -0.05893,-0.0589 -0.08839,-0.0884 -0.01473,-0.0147 -0.02556,-0.0349 -0.04419,-0.0442 -0.04419,-0.0147 -0.08839,-0.0295 -0.132583,-0.0442 -0.01473,-0.0147 -0.02556,-0.0349 -0.04419,-0.0442 -0.04167,-0.0208 -0.09264,-0.0202 -0.132582,-0.0442 -0.03573,-0.0214 -0.05112,-0.0698 -0.08839,-0.0884 -0.25868,-0.12934 -0.09536,0.0248 -0.265165,-0.0884 -0.04023,-0.0268 -0.09341,-0.113 -0.132582,-0.13258 -0.01318,-0.007 -0.03102,0.007 -0.04419,0 -0.03376,-0.0169 -0.102657,-0.12261 -0.132583,-0.13258 -0.02795,-0.009 -0.06044,0.009 -0.08839,0 -0.01976,-0.007 -0.02946,-0.0295 -0.04419,-0.0442 -0.01473,-0.0147 -0.03488,-0.0256 -0.0442,-0.0442 -0.0066,-0.0132 0.01042,-0.0338 0,-0.0442 -0.172478,-0.17247 -0.02373,0.0102 -0.132582,-0.0442 -0.01863,-0.009 -0.02556,-0.0349 -0.04419,-0.0442 -0.01318,-0.007 -0.03022,0.005 -0.04419,0 -0.03125,-0.0104 -0.05714,-0.0338 -0.08839,-0.0442 -0.02573,-0.009 -0.234756,0 -0.265165,0 -0.01473,0 -0.02946,0 -0.04419,0 -0.01473,0 -0.03378,-0.0104 -0.04419,0 -0.01042,0.0104 0.01042,0.0338 0,0.0442 -0.01042,0.0104 -0.03378,-0.0104 -0.04419,0 -0.02083,0.0208 0.01318,0.062 0,0.0884 -0.0093,0.0186 -0.03488,0.0256 -0.04419,0.0442 -0.0066,0.0132 0.0066,0.031 0,0.0442 -0.03479,0.0696 -0.111007,0.17165 -0.176776,0.22097 -0.02635,0.0198 -0.05893,0.0295 -0.08839,0.0442 -0.101564,0.0508 -0.05545,0.0442 -0.132582,0.0442 -0.03742,0 -0.153018,-0.008 -0.176777,0 -0.01976,0.007 -0.02556,0.0349 -0.04419,0.0442 -0.01318,0.007 -0.03102,-0.007 -0.04419,0 -0.01863,0.009 -0.02556,0.0349 -0.04419,0.0442 -0.01318,0.007 -0.04419,-0.0147 -0.04419,0 0,0.0751 0.08926,0.16088 0.04419,0.22097 0.02258,0.17123 -0.167856,-0.0973 -0.220971,-0.0442 -0.01042,0.0104 0.01042,0.0338 0,0.0442 -0.01042,0.0104 -0.03378,-0.0104 -0.04419,0 -0.01042,0.0104 0.01042,0.0338 0,0.0442 -0.01042,0.0104 -0.03761,-0.0132 -0.04419,0 -0.01318,0.0264 0.01318,0.062 0,0.0884 -0.0066,0.0132 -0.03378,-0.0104 -0.0442,0 -0.01042,0.0104 0.0066,0.031 0,0.0442 -0.0273,0.0546 -0.04267,0.0442 -0.08839,0.0442 -0.01473,0 -0.05893,0 -0.04419,0 0.117851,0 0.235702,0 0.353553,0 0.02946,0 0.05893,0 0.08839,0 0.02946,0 0.0598,0.007 0.08839,0 0.03196,-0.008 0.05643,-0.0362 0.08839,-0.0442 0.04288,-0.0107 0.08839,0 0.132583,0 0.08839,0 0.176776,0 0.265165,0 0.04162,0 0.19583,-0.008 0.220971,0 0.08535,0.0284 0.01545,0.0751 0.04419,0.13258 0.0066,0.0132 0.03378,-0.0104 0.04419,0 0.01042,0.0104 0,0.0295 0,0.0442 0,0.0147 0.0066,0.031 0,0.0442 -0.0093,0.0186 -0.02443,0.0376 -0.04419,0.0442 -0.04193,0.014 -0.08839,0 -0.132583,0 -0.05559,0 -0.197133,0.0273 -0.220971,-0.0442 -0.0093,-0.028 0,-0.0589 0,-0.0884 0,-0.0884 0,-0.17678 0,-0.26517 0,-0.0884 0,-0.17677 0,-0.26516 0,-0.0295 0,-0.0589 0,-0.0884 0,-0.0147 -0.0066,-0.031 0,-0.0442 0.0093,-0.0186 0.03488,-0.0256 0.0442,-0.0442 0.06759,-0.13518 -0.255969,0.10055 0.132582,-0.13258 0.02825,-0.017 0.0651,-0.0209 0.08839,-0.0442 0.02329,-0.0233 0.01679,-0.0701 0.04419,-0.0884 0.02451,-0.0164 0.05981,0.007 0.08839,0 0.03196,-0.008 0.05714,-0.0338 0.08839,-0.0442 0.0057,-0.002 0.128923,-0.002 0.132583,0 0.08586,0.0429 0.04419,0.14479 0.04419,0.22097 0,0.0737 -0.0067,0.14762 0,0.22098 0.05388,0.59269 0.04419,-0.002 0.04419,0.44194 0,0.11785 0,0.2357 0,0.35355 0,0.0147 -0.01042,0.0338 0,0.0442 0.01042,0.0104 0.03378,0.0104 0.04419,0 0.01042,-0.0104 -0.0047,-0.0302 0,-0.0442 0.01042,-0.0312 0.02946,-0.0589 0.0442,-0.0884 0.01473,-0.0295 0.02725,-0.0601 0.04419,-0.0884 0.06225,-0.10375 0.09217,-0.11995 0.132582,-0.22097 0.0173,-0.0433 0.0329,-0.0874 0.04419,-0.13258 0.0036,-0.0143 -0.0047,-0.0582 0,-0.0442 0.179387,0.53816 -0.01792,-0.0454 0.0442,0.26516 0.04598,0.22991 0.02946,0.0442 0.08839,0.22097 0.0093,0.028 -0.02083,0.0676 0,0.0884 0.03111,0.0311 0.08175,-0.0336 0.08839,-0.0442 0.06295,-0.10072 0.123662,-0.20313 0.176777,-0.30936 0.106954,-0.21391 0.139272,-0.3731 0.265165,-0.57453 0.02208,-0.0353 0.06975,-0.0511 0.08839,-0.0884 0.01318,-0.0264 -0.01318,-0.062 0,-0.0884 0.0066,-0.0132 0.02946,0 0.0442,0 0.01473,0 0.04062,-0.0143 0.04419,0 0.01429,0.0572 0,0.11785 0,0.17677 0,0.10312 0,0.20624 0,0.30936 0,0.0442 0,0.0884 0,0.13258 0,0.0295 -0.0093,0.0604 0,0.0884 0.07376,0.22128 0.0098,-0.0737 0.08839,0.0442 0.06283,0.0942 0.04419,0.2052 0.04419,0.30936 0,0.10312 0,0.20624 0,0.30936 0,0.0295 0,0.0589 0,0.0884 0,0.0147 0,0.0589 0,0.0442 0,-0.0884 0,-0.17678 0,-0.26517 0,-0.0147 0,-0.0295 0,-0.0442 0,-0.0147 0.01042,-0.0338 0,-0.0442 -2.34e-4,-2.3e-4 -0.131105,3.7e-4 -0.132582,0 -0.03196,-0.008 -0.05893,-0.0295 -0.08839,-0.0442 -0.04419,0 -0.08899,0.007 -0.132582,0 -0.04595,-0.008 -0.09092,-0.0234 -0.132583,-0.0442 -0.0317,-0.0159 -0.06948,-0.10092 -0.08839,-0.0442 -0.03872,0.11616 0.06765,0.32171 0.08839,0.39775 0.01976,0.0725 0.02443,0.1485 0.04419,0.22097 0.02451,0.0899 0.05567,0.17793 0.08839,0.26517 0.01157,0.0308 0.0209,0.0651 0.04419,0.0884 0.02329,0.0233 0.0651,0.0209 0.08839,0.0442 0.01042,0.0104 -0.01042,0.0338 0,0.0442 0.01042,0.0104 0.03378,0.0104 0.0442,0 0.01042,-0.0104 -0.0047,-0.0302 0,-0.0442 0.01042,-0.0312 0.02725,-0.0601 0.04419,-0.0884 0.08362,-0.13938 0.0727,-0.11689 0.176776,-0.22097 0.01473,-0.0147 0.02686,-0.0326 0.0442,-0.0442 0.02741,-0.0183 0.06098,-0.0259 0.08839,-0.0442 0.08086,-0.0539 0.0044,-0.0563 0.132582,-0.0884 0.04288,-0.0107 0.08839,0 0.132583,0 0.07366,0 0.147314,0 0.220971,0 0.01473,0 0.03378,-0.0104 0.04419,0 0.01042,0.0104 -0.0066,0.031 0,0.0442 0.0093,0.0186 0.03914,0.024 0.04419,0.0442 0.01429,0.0572 0,0.11785 0,0.17678 0,0.0147 0,0.0295 0,0.0442 0,0.0147 0.01318,0.0376 0,0.0442 -0.02635,0.0132 -0.05892,0 -0.08839,0 -0.07236,0 -0.08839,-0.016 -0.08839,-0.0884"}" id="${"path5956"}" class="${"svelte-p4xb06"}"></path><path transform="${"translate(296.49688,106.24631)"}" style="${"fill:none;fill-rule:evenodd;stroke:#000000;stroke-width:0.60000002;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"}" d="${"m 45.873544,124.22493 c -0.265165,0 -0.53033,0 -0.795495,0 -0.03074,0 -0.204989,0.008 -0.220971,0 -0.01863,-0.009 -0.02556,-0.0349 -0.04419,-0.0442 -0.0099,-0.005 -0.166275,0 -0.176777,0 -0.08839,0 -0.176776,0 -0.265165,0 -0.07366,0 -0.147313,0 -0.22097,0 -0.02946,0 -0.06044,-0.009 -0.08839,0 -0.137944,0.046 0.01473,0.0295 -0.04419,0.0884 -0.01042,0.0104 -0.04419,0.0147 -0.04419,0 0,-0.004 0.241174,0.005 0.265165,0 0.232018,-0.0464 0.06401,-0.0132 0.176777,-0.0884 0.0082,-0.005 0.173944,-0.0855 0.176776,-0.0884 0.02329,-0.0233 0.0209,-0.0651 0.04419,-0.0884 0.111631,-0.11163 0.05095,-0.017 0.132583,-0.0442 0.320117,-0.1067 -0.06968,0.0127 0.132583,-0.0884 0.01143,-0.006 0.23384,0 0.265165,0 0.02946,0 0.05893,0 0.08839,0 0.01473,0 0.05892,0 0.04419,0 -0.02946,0 -0.0595,-0.006 -0.08839,0 -0.05134,0.0103 -0.170464,0.0547 -0.220971,0.0884 -0.07218,0.0481 -0.01814,0.0655 -0.132583,0.0884 -0.337141,0 0.03486,-0.0198 -0.220971,0.0442 -0.04287,0.0107 -0.09066,-0.014 -0.132582,0 -0.03125,0.0104 -0.05714,0.0338 -0.08839,0.0442 -0.02795,0.009 -0.05893,0 -0.08839,0 -0.03613,0 -0.28696,-0.007 -0.309359,0 -0.01976,0.007 -0.02556,0.0349 -0.04419,0.0442 -0.01318,0.007 -0.03378,-0.0104 -0.04419,0 -0.01042,0.0104 0.0066,0.031 0,0.0442 -0.146574,0.14657 0.02083,-0.0417 -0.04419,0.0884 -0.0093,0.0186 -0.02946,0.0295 -0.0442,0.0442 -0.01473,0.0147 -0.02556,0.0349 -0.04419,0.0442 -0.01318,0.007 -0.03761,-0.0132 -0.04419,0 -0.01318,0.0264 0.01318,0.062 0,0.0884 -0.0066,0.0132 -0.03102,-0.007 -0.04419,0 -0.01863,0.009 -0.02686,0.0326 -0.04419,0.0442 -0.02741,0.0183 -0.0651,0.0209 -0.08839,0.0442 -0.01042,0.0104 0.0066,0.031 0,0.0442 -0.0093,0.0186 -0.03488,0.0256 -0.04419,0.0442 -0.0066,0.0132 0.0066,0.031 0,0.0442 -0.02023,0.0404 -0.100286,0.0776 -0.132582,0.0884 -0.01398,0.005 -0.03102,-0.007 -0.0442,0 -0.01863,0.009 -0.02556,0.0349 -0.04419,0.0442 -0.01318,0.007 -0.03102,-0.007 -0.04419,0 -0.01863,0.009 -0.02556,0.0349 -0.04419,0.0442 -0.108848,0.0544 0.0399,-0.12828 -0.132583,0.0442 -0.01042,0.0104 0.01042,0.0338 0,0.0442 -0.01042,0.0104 -0.03102,-0.007 -0.04419,0 -0.01863,0.009 -0.02556,0.0349 -0.04419,0.0442 -0.01318,0.007 -0.03378,-0.0104 -0.04419,0 -0.01042,0.0104 -0.01042,0.0338 0,0.0442 0.02031,0.0203 0.100757,-0.023 0.132582,-0.0442 0.01733,-0.0115 0.02686,-0.0326 0.04419,-0.0442 0.02741,-0.0183 0.05609,-0.0377 0.08839,-0.0442 0.018,-0.004 0.248512,0.008 0.265165,0 0.01863,-0.009 0.02556,-0.0349 0.04419,-0.0442 0.01318,-0.007 0.02946,0 0.04419,0 0.01473,0 0.02946,0 0.04419,0 0.103644,0 -0.02083,0.0104 0.08839,-0.0442 0.01162,-0.006 0.153666,0 0.176777,0 0.04282,0 0.238813,-0.009 0.265165,0 0.03125,0.0104 0.05893,0.0295 0.08839,0.0442 0.02946,0.0147 0.06098,0.0259 0.08839,0.0442 0.01733,0.0116 0.02443,0.0376 0.04419,0.0442 0.02795,0.009 0.05893,0 0.08839,0 0.02946,0 0.05893,0 0.08839,0 0.220971,0 0.441942,0 0.662913,0 0.07366,0 0.147314,0 0.220971,0 0.02946,0 0.06044,-0.009 0.08839,0 0.274318,0.0914 -0.14688,-0.004 0.220971,0.0884 0.02858,0.007 0.06204,-0.0132 0.08839,0 0.01863,0.009 0.02556,0.0349 0.04419,0.0442 0.01345,0.007 0.11268,0 0.132583,0 0.10312,0 0.206239,0 0.309359,0 0.01623,0 0.174998,-0.002 0.176777,0 0.01042,0.0104 -0.01318,0.0376 0,0.0442 0.03953,0.0198 0.08839,0 0.132582,0 0.01747,0 0.202097,-0.009 0.220971,0 0.01863,0.009 0.02556,0.0349 0.04419,0.0442 0.01318,0.007 0.03378,-0.0104 0.0442,0 0.01042,0.0104 -0.01042,0.0338 0,0.0442 0.0221,0.0221 0.110485,-0.0221 0.132582,0 0.05893,0.0589 -0.07366,0.0442 0.04419,0.0442 0.01473,0 0.02946,0 0.04419,0 0.01473,0 0.03378,-0.0104 0.0442,0 0.01042,0.0104 -0.01042,0.0338 0,0.0442 0.01042,0.0104 0.04419,-0.0147 0.04419,0 0,0.0147 -0.03378,0.0104 -0.04419,0 -0.02329,-0.0233 -0.02592,-0.061 -0.0442,-0.0884 -0.01156,-0.0173 -0.02946,-0.0295 -0.04419,-0.0442 -0.01473,-0.0147 -0.02686,-0.0326 -0.04419,-0.0442 -0.02741,-0.0183 -0.06098,-0.0259 -0.08839,-0.0442 -0.02143,-0.0143 -0.206686,-0.19954 -0.220971,-0.22097 -0.01827,-0.0274 -0.02592,-0.061 -0.04419,-0.0884 -0.01156,-0.0173 -0.02946,-0.0295 -0.0442,-0.0442 -0.01473,-0.0147 -0.02556,-0.0349 -0.04419,-0.0442 -0.01318,-0.007 -0.03378,0.0104 -0.04419,0 -0.01042,-0.0104 0.0047,-0.0302 0,-0.0442 -0.01042,-0.0312 -0.0209,-0.0651 -0.04419,-0.0884 -0.01042,-0.0104 -0.03022,0.005 -0.04419,0 -0.03125,-0.0104 -0.0651,-0.0209 -0.08839,-0.0442 -0.01042,-0.0104 0.0066,-0.031 0,-0.0442 -0.02652,-0.053 -0.106066,-0.0795 -0.132582,-0.13258 -0.0066,-0.0132 0.01042,-0.0338 0,-0.0442 -0.01042,-0.0104 -0.03102,0.007 -0.04419,0 -0.01863,-0.009 -0.02946,-0.0295 -0.04419,-0.0442 -0.01473,-0.0147 -0.03488,-0.0256 -0.0442,-0.0442 -0.0066,-0.0132 0.0066,-0.031 0,-0.0442 -0.0093,-0.0186 -0.03488,-0.0256 -0.04419,-0.0442 -0.0066,-0.0132 0.01042,-0.0338 0,-0.0442 -0.02329,-0.0233 -0.0651,-0.0209 -0.08839,-0.0442 -0.01042,-0.0104 0.01042,-0.0338 0,-0.0442 -0.01042,-0.0104 -0.03102,0.007 -0.04419,0 -0.01863,-0.009 -0.02946,-0.0295 -0.04419,-0.0442 -0.02946,0 -0.06044,0.009 -0.08839,0 -0.01976,-0.007 -0.02556,-0.0349 -0.04419,-0.0442 -0.02343,-0.0117 -0.190906,0.01 -0.220971,0 -0.01976,-0.007 -0.02556,-0.0349 -0.04419,-0.0442 -0.02635,-0.0132 -0.06204,0.0132 -0.08839,0 -0.03727,-0.0186 -0.04886,-0.0752 -0.08839,-0.0884 -0.0029,-9.6e-4 -0.218068,-9.6e-4 -0.220971,0 -0.06789,0.0226 -0.03424,0.0965 -0.08839,0.13259 -0.0088,0.006 -0.19091,0 -0.220971,0 -0.01473,0 -0.03378,-0.0104 -0.04419,0 -0.004,0.004 -0.0023,0.13145 0,0.13258 0.02635,0.0132 0.06044,-0.009 0.08839,0 0.03953,0.0132 0.05112,0.0697 0.08839,0.0884 0.01318,0.007 0.02946,0 0.04419,0 0.02946,0.0147 0.06098,0.0259 0.08839,0.0442 0.01733,0.0116 0.03488,0.0256 0.04419,0.0442 0.0066,0.0132 -0.01226,0.036 0,0.0442 0.03876,0.0258 0.09092,0.0234 0.132583,0.0442 0.01863,0.009 0.02556,0.0349 0.04419,0.0442 0.01318,0.007 0.02946,0 0.04419,0 0.01473,0.0147 0.02556,0.0349 0.04419,0.0442 0.02635,0.0132 0.06044,-0.009 0.08839,0 0.03125,0.0104 0.05714,0.0338 0.08839,0.0442 0.01398,0.005 0.02946,0 0.04419,0 0.02946,0 0.05933,-0.005 0.08839,0 0.05991,0.01 0.118374,0.0275 0.176776,0.0442 0.04479,0.0128 0.0869,0.0351 0.132583,0.0442 0.02889,0.006 0.06044,-0.009 0.08839,0 0.01976,0.007 0.02556,0.0349 0.04419,0.0442 0.01318,0.007 0.05849,-0.004 0.0442,0 -0.07287,0.0182 -0.146228,0.0367 -0.220971,0.0442 -0.07329,0.007 -0.147314,0 -0.220971,0 -0.08839,0 -0.176777,0 -0.265165,0 -0.10312,0 -0.20624,0 -0.309359,0 -0.0442,0 -0.08873,0.005 -0.132583,0 -0.07454,-0.009 -0.146435,-0.0349 -0.220971,-0.0442 -0.04385,-0.005 -0.08925,0.009 -0.132582,0 -0.0323,-0.006 -0.05609,-0.0377 -0.08839,-0.0442 -7.28e-4,-1.5e-4 -0.29652,-0.004 -0.309359,0 -0.03125,0.0104 -0.06098,0.0259 -0.08839,0.0442 -0.146574,0.14657 0.04167,-0.0208 -0.08839,0.0442 -0.01863,0.009 -0.04419,0.065 -0.04419,0.0442 0,-0.13309 0.320708,-0.24591 0.397748,-0.26517 0.221451,-0.0554 0.438555,-0.0442 0.662912,-0.0442 0.05893,0 0.117852,0 0.176777,0 0.01473,0 0.03761,-0.0132 0.04419,0 0.01768,0.0353 -0.01768,0.0972 0,0.13258 0.0093,0.0186 0.02946,0.0295 0.04419,0.0442 0.0773,0.0773 0.157299,0.10561 0.265165,0.13258 0.01429,0.004 0.03102,-0.007 0.0442,0 0.01863,0.009 0.02946,0.0295 0.04419,0.0442 0.01473,0.0147 0.05893,0.0295 0.04419,0.0442 -0.01473,0.0147 -0.06153,-0.0326 -0.04419,-0.0442 0.05054,-0.0337 0.119154,-0.025 0.176777,-0.0442 0.03125,-0.0104 0.05893,-0.0295 0.08839,-0.0442"}" id="${"path5958"}" class="${"svelte-p4xb06"}"></path></g><path style="${"fill:#ffffff;fill-rule:evenodd;stroke:#ffffff;stroke-width:0.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;fill-opacity:1;stroke-miterlimit:4;stroke-dasharray:none"}" d="${"m 190.3885,95.61845 c 0.6491,-0.387994 -0.77329,0.640927 -0.53033,0.883883 0.0417,0.04167 0.13511,-0.04167 0.17678,0 0.0417,0.04167 -0.0264,0.124072 0,0.176777 0.0373,0.07454 0.11785,0.117851 0.17677,0.176777 0.25665,0.256644 0.19137,0.176776 0.53033,0.176776 0.11785,0 0.24815,0.05271 0.35356,0 0.0527,-0.02635 -0.0417,-0.13511 0,-0.176776 0.0833,-0.08333 0.27022,0.08333 0.35355,0 0.0417,-0.04167 0,-0.117851 0,-0.176777 0,-0.05893 0,-0.117851 0,-0.176777 0,-0.05892 0,-0.117851 0,-0.176776 0,-0.05893 0.0264,-0.124072 0,-0.176777 -0.0373,-0.07454 -0.11785,-0.117851 -0.17678,-0.176777 -0.34857,-0.348573 -0.0959,-0.156565 -0.88388,-0.353553 z"}" id="${"path6021"}"></path></svg>`;
});

/* src/components/AllisonTattoo.svelte generated by Svelte v3.24.0 */

const css$1 = {
	code: ".allison-tattoo-1.svelte-1qjlatf,.allison-tattoo-2.svelte-1qjlatf,.allison-tattoo-3.svelte-1qjlatf,.allison-tattoo-4.svelte-1qjlatf,.allison-tattoo-5.svelte-1qjlatf,.allison-tattoo-6.svelte-1qjlatf,.allison-tattoo-7.svelte-1qjlatf,.allison-tattoo-8.svelte-1qjlatf{fill:none;stroke-miterlimit:10}.allison-tattoo-1.svelte-1qjlatf,.allison-tattoo-3.svelte-1qjlatf,.allison-tattoo-5.svelte-1qjlatf,.allison-tattoo-6.svelte-1qjlatf,.allison-tattoo-7.svelte-1qjlatf,.allison-tattoo-8.svelte-1qjlatf{stroke:#231f20}.allison-tattoo-1.svelte-1qjlatf{stroke-width:0.25px}.allison-tattoo-2.svelte-1qjlatf{stroke:#bcbec0}.allison-tattoo-3.svelte-1qjlatf{stroke-width:0.12px}.allison-tattoo-4.svelte-1qjlatf{stroke:#6d6e71}.allison-tattoo-4.svelte-1qjlatf,.allison-tattoo-5.svelte-1qjlatf{stroke-width:0.5px}.allison-tattoo-6.svelte-1qjlatf{stroke-width:0.15px}.allison-tattoo-7.svelte-1qjlatf{stroke-width:0.35px}.allison-tattoo-8.svelte-1qjlatf{stroke-width:0.75px}.lady-hand.svelte-1qjlatf{animation:svelte-1qjlatf-shuffle .5s linear infinite}@keyframes svelte-1qjlatf-shuffle{0%{transform:translate(0px, 0px)}33%{transform:translate(-1px, 0px)}66%{transform:translate(1px, 0px)}100%{transform:translate(0px, 0px)}}",
	map: "{\"version\":3,\"file\":\"AllisonTattoo.svelte\",\"sources\":[\"AllisonTattoo.svelte\"],\"sourcesContent\":[\"\\n        <svg\\n\\n            viewBox=\\\"0 0 168.85 379.56\\\"\\n        >\\n            <g id=\\\"Layer_1\\\" data-name=\\\"Layer 1\\\">\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M106.1,59.8\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M106.59,45.48\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M107,48.55\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M99.33,45.11\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M97.56,45.76c.93-1.21-1.16.61-1.16.61s-5,3.14-3.21,10.67S100,59.55,99.82,60\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M82.31,61.11S76.45,57.21,70.87,64\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M81.56,61.67S75.69,60,72.7,63.06c-3.74,3.87-3,10.85.31,14a7.16,7.16,0,0,0,1.67,1.21\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M79.05,63.9c-.18-.88-.37.47-.37.47S73.75,81.11,82,79.62s11.44-2.69,14.23-.55a9,9,0,0,0,8,1.16c1.77-.56,2.19-1.72-2.79,5.91\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M87.8,52.09s-1.12-1.86-2.33,7.16,8.37,5.58,8.37,5.58,8-3.47,12.1.28c4.93,4.56.83,11.91,1,12.93\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M77.94,81.21c-5.94-4.13-7.49-10.84-5-14.61,2-3.07,6.21-3.47,7.07-3.53\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M88.22,51.58s-1.68-3.4-.93,6.37,7.95,5.35,7.95,5.35\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M102,46.18s.19-2,1.77.33-3.81,9.39-3.81,9.39\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M100.73,46.18s.17-1.4,1.07-.79,3.43,3.22-3.08,12.11\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M97.94,46s1.07-3.35,2,.19,4.79,2.7-2.6,13.39\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M96.17,59.21c5.49-7.21,3.07-10,3-12.56s-1.84,0-1.84,0\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M96.08,48s1.86-3.11,2-.32,1.35,5-3,11.07\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M95,50.28s1.49-4.42,1.53-.56.1,3.76-2.18,8.46\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M107.94,68c2.32-10.32-1.4-8.09-8.12-8.07-7.16,0-7.7-5-5.19-10.53s2.56-3.16,2.56-3.16\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M93.7,51.9s1.82-3.72,1.26-.46a17.41,17.41,0,0,1-1.35,4.93\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M99.94,55.9s-1.72,2.28,3.16.75,2.46-1.77,2.46-1.77c-1.86.23-.32,1.07,3.4,11.77,1.39,4-.93,7.86-.93,7.86\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M97.8,58.88s11.81-5.81,11.58,9.49c0,0,.18,2.28-1.91,6.51a98.9,98.9,0,0,1-4.79,9.21\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M94.87,47.62s-.28-2.65-1.68,1-3.53,12.56,1,11.3\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M93.19,48.6s-.74-1.67-1.53.19c0,.14.37-1.91-1.72,5.62s.55,11.35,8.74,7.35\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M91.19,50s-2-3.07-3.9,8\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M89,51s-.65-1.35-1.86,4\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M86.26,54.46s-2-2.14-1.81,5.91,3.77,8.74,10.18,6.18,15.35,3.26,12.79,8.79\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M84.45,57.21s-1.35-1.73-.51,4.93,2.93,6.37,5.21,6.23.93-.05,7.81-2.09,10.14,2.09,10.14,2.09c4.51,5-2.7,13.35-2.7,13.35,6.7-11.58.89-6.14.89-6.14-1.12.65-1.77,2-6.33-.42s-5.63-.42-10.47,0S78.91,78.79,78.73,70,80,63.67,80,63.67\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M83.61,60s-1.12-.61-1,4.6,4,5.68,7.21,4.84,11-3.72,14.6-1.16,4.56,4.41,2.23,9.16\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M82.59,62.18S81,60.41,81.05,66s3.44,7.07,9.91,4.7,10-3.12,12.46-.46c6.75,7.2-1.39,14.23-1.58,15.16-.63,3.17-.37-1.82-2.6-1.12s-7.63,3.49-11,.23-4-2.23-4.66-2.27S77.89,85.39,75.15,76s3.53-11.67,3.53-11.67\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M81.24,63.21S79.47,61.76,79.8,67s1,8.6,10.09,5.81,13.44-.47,14.23,4.1c.56,3.21-.79,6.55-3.67,11.07\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M95.24,63.3c15.63-8.14,15.35,12.37,10.28,16.65\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M99.77,45.55s.45-2.11,1.46,1.11.49,6.18-.85,9.67,2.68.82,4.92-.89-.09-1-.75-.7.28,3,1.83,5.42,3.24,8.29,2.2,11.88\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M104,48.15s4.64,1.15,1.36-2.83-4.12-1-4-.21\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M105.58,49.68s-2.38-2.13.24,3.14-.45-.28-.45-.28S102.33,46.72,105.58,49.68Z\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M100.66,45.39s.83,1,.76-2.23a22.19,22.19,0,0,0,0-3.35c-.27-2.63-1.23-1.67-1.23-1.67s.28-.56-1.26,1.67\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M101.4,39.81s2-.84.09,2.86\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M102,39.67s2.24-1.67-.56,3.49\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M102.61,39.39s3.21-.14.21,3.77\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M104,40.51s2.72-.07,1.39,2-.91,1.68-.91,1.68\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M105.4,42.53s2.56-.77,1.65.91a9.48,9.48,0,0,1-1.42,2.16\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M106.68,44.21s2.61-.07-.42,2.39\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M107.26,45.65s1.77,0-.3,2.9\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M97.29,41.48s2.55-5.67,2.93,3.4\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M96.35,42.46s1.68-3.3,2.42,2\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M94.31,41.9s3-1.58,2.46,4\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M95.7,43.86s-2.88-2.52-.41-2.24\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M95.1,44.51s1.21-2.56,1.3,1.86\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M94.49,45.53s.56-4,1,1.4\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M94,46.79s.14-3.63.7,0\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M94.82,44S91,40,95.61,41.76\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M94.4,44.79s-5.81-4.56-1-3.4\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M94,46.09s-6-4.79-2.51-4.23\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M93.61,47.39s-7.72-5.81-3.3-5.11\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M91.84,48.32s-9-7.35-3-5.58\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M90.59,49.53s-8.79-7.35-4-6.42\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M89.66,49.9s-9.77-7.16-4.37-5.62\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M88.4,51s-10-6.56-4.84-6.56\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M86.82,52.6s-11.35-6-4.88-7.39\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M85.19,54.32S73.84,48.09,79.94,47\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M84.54,56.28s-10-6.42-6.32-7.49\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M83.05,60.37S73,54.55,77.7,50.6\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M80.87,60.41S71,53.07,77.38,49.67\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M77.89,59.86s-6.37-7.17-2.65-7.12\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M77.19,59.16s-4.56.84-5.67,2.32\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M75.7,59.34s-4.51-4.93-1.76-5.25\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M75,58.6s-2.75.47-2.28,1.81\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M74.4,58.65s-1.67-2.37-1-2.28\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M74,58.83s-.51-.93-.32-.93\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M151.59,310.72\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M148.61,309.88\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M149.47,314.27\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M147.83,308.11\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-2\\\" d=\\\"M26.08,323.3s6.45-26,25.81-39.15a43.59,43.59,0,0,1,5.58-3.22\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-2\\\" d=\\\"M94.49,175.62S72.72,189.71,74,207.76a21.47,21.47,0,0,0,.64,4\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-2\\\" d=\\\"M74,207.76c0,8.37-.2,8.19-1.32,13.4,0,0-4,13.58-9.3,32.7s-2.51,14.68-11.44,30.29\\\" transform=\\\"translate(0 0)\\\" />\\n            </g>\\n            <g id=\\\"Layer_2\\\" data-name=\\\"Layer 2\\\" class=\\\"lady-hand\\\">\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M160.82,17.33a23.52,23.52,0,0,1,2.38-3c.4-.18,2.9-3.85,2.44-4.6a16,16,0,0,0-2.07-2.95c-.41-.2-.85-.18-1.21-.66s-2-.51-2-.51L158.67,5a1.07,1.07,0,0,0-.42,1.76,4.5,4.5,0,0,0,2.61,1.45l.4.09a7.56,7.56,0,0,0,1,2.31c.09.22-.26,0-.26,0s-.11,0-.55.48\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M164.59,12.56a36,36,0,0,1,2.46-2.71c.51-.37,1.14-4.86,1.56-5.76a3.63,3.63,0,0,0-.33-1.72,12,12,0,0,1,0-2c.09-.57-1.12-.15-1.3.05s-.57.11-.88,2.33-.42,1.5-.13,1.74c-.24-.2-1.32,2-1.5,3.28\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M168.28,2.37l.42-1a.48.48,0,0,0-.48-.66\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M166.06,2.59c-1.12,2-1,2.16-1,2.16s-.55.11-1.48,2\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M160.05,10.12A6.08,6.08,0,0,1,161.42,9\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M158,11.7a4,4,0,0,0-1.25,1.14,3,3,0,0,0-1.59.62,2.37,2.37,0,0,0-1.45.24,2.54,2.54,0,0,0-1.36.2\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M153.48,13.81a5.93,5.93,0,0,1,.86-1.34,7.93,7.93,0,0,0,.77-1.06\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M156.67,18.43s-.82-2,1.87-4.77a1.47,1.47,0,0,0,.26-.6\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M148.46,20.21c5.41-2.93,5.2-2.78,7.37-4.86\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-1\\\" d=\\\"M156.65,13.55a10.24,10.24,0,0,1-1.3,2.79\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-3\\\" d=\\\"M156.3,6.74s.93,1,1.71,0C157.9,6.5,156.3,6.74,156.3,6.74Z\\\" transform=\\\"translate(0 0)\\\" />\\n                <path class=\\\"allison-tattoo-3\\\" d=\\\"M160.65,5.7S158.88,5,158.74,5,158.47,6.58,160.65,5.7Z\\\" transform=\\\"translate(0 0)\\\" />\\n            </g>\\n            <g id=\\\"Layer_3\\\" data-name=\\\"Layer 3\\\">\\n            <path class=\\\"allison-tattoo-2\\\" d=\\\"M144.82,276.18s1.74,4.33,7.19-2.16\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-2\\\" d=\\\"M125.86,136.49c-.48-1.2-1-2.52-1.48-4\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-2\\\" d=\\\"M125.86,136.49a72.65,72.65,0,0,0,3,6.75,5.08,5.08,0,0,1-.21,3.52c-1.24,2.62-5.32,4-9.94,2.76\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-4\\\" d=\\\"M125.86,136.49\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-4\\\" d=\\\"M120.06,136.31\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-2\\\" d=\\\"M125.86,136.49a5.93,5.93,0,0,0,4.15-2.94,5.08,5.08,0,0,0,.21-3.52s-1.66,0-3.89-6.43\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-2\\\" d=\\\"M123.47,265.72s-3.52-.39-16.83-32.08\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-2\\\" d=\\\"M123.19,262.65A21.09,21.09,0,0,0,124.7,269a22.47,22.47,0,0,0,5.26,7.9\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-2\\\" d=\\\"M123.4,288.46A22.61,22.61,0,0,0,124.7,269\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-2\\\" d=\\\"M126.87,284.93s-8,6.6-8.7,23.38\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-2\\\" d=\\\"M147.7,281.39s8.38-8.93,3.91-19.53-4.84-5-8.56-20.84-9.49-31.07-15.16-39.63-3-9.3-3-9.3,2.89.37-2.51-11.44\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-2\\\" d=\\\"M142.05,310.93s3-13.54,5-23S149.7,279,149.7,279\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-2\\\" d=\\\"M70.22,282.79s.55,4.09,7.39.88\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-2\\\" d=\\\"M111.42,194.69a97.39,97.39,0,0,1-4.78,38.95,80.57,80.57,0,0,1-8.8,18.17c-11,16.91-8.62,12.65-13.16,21.3-1.74,3.33-1.86,4.09-2,5.49s-1.18,4.26-4.56,7.07c-6.7,5.58-5,4.4-7.18,8.09S68.86,303,54.12,319.9a68.43,68.43,0,0,1-4.79,5.17\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M112.14,377.55\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M113.14,367.75c-.2.52-.47,1.22-.76,2\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M113.14,367.75l0-.13c1-2.69,2.14-9.58,2.61-20.65s2.32-38.09,2.32-38.09\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-6\\\" d=\\\"M97.31,46.65\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-1\\\" d=\\\"M119.38,81.11\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-1\\\" d=\\\"M114.23,84c4.5-6.8,13-14,13-14s7.71-6.45,7.44-8.31\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-1\\\" d=\\\"M133.41,61.58\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-1\\\" d=\\\"M143,24.53\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-1\\\" d=\\\"M159.17,15.09a2.68,2.68,0,0,1-.11-2.07l.69.22s-1.83-.77-1.57-1.76c-1.25.7-3.36-.13-3.47-.2s-.62-1.58.26-1.36c1.49.37,1.82-.51,3.24-.62.55,0,.44-.2,1.47.55s2,1.45,2,1.45.63.11.44,1.68a41,41,0,0,1-1.87,5.78A9.59,9.59,0,0,0,159,19.91c-.7,1-.51.81-5.08,4.29a9.43,9.43,0,0,0-2.53,2.7,1,1,0,0,1-.78.59\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-1\\\" d=\\\"M156.44,9.74s2.42-4,.13-4.22c-1.52-.14-2.35,2.22-2.35,2.22s-.16-.24-2.16,2.68-1.47,1.92-1.47,1.92-4.29,4.17-4.77,8.51c-2.31,3-2.15,4.27-3.06,6.23,0,0-7.27,23.21-8.47,34.12-.56,2-4.71,6.76-4.71,6.76\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-1\\\" d=\\\"M151.79,25.17\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M119.8,112.93s-1.63-15.86,2.51-24.47\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-7\\\" d=\\\"M106.13,48.11s3.88,3.67,7.64,1.78c1.89-.42,1.47,3.14,1.47,3.14s.1,1,2.34-.31c.83-.28,1.57,2.37,1.57,2.37s-.46-1.05.34-1.22,2.06,2.34,1.92,2.41.81,1.36,1.75,1.11,6.9,2-3.87,14.86c-7.82,12.84-6.35,23.23-6.35,23.23s.3,7.35,7.25,18.21c.14,1,10.64,15.49,10.64,15.49s1.5,3.35-.38,5.58-2.51,2.72-2.58,3.28\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-7\\\" d=\\\"M126.19,150s.6.17,1.78-.8c2.55-1.92,2.16-7.37.66-9.6s-3.94-9.63-3.94-9.63\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-2\\\" d=\\\"M112.35,203.25s14.68-21,15.62-54\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-8\\\" d=\\\"M156.26,308.69l-1.46-37.53s-1.47-15.35-4.75-19.47-5-13.81-5-13.81-1-6.7-6.35-19.26c-12.35-23-12.84-30.21-12.84-30.21l2.51-39.76\\\" transform=\\\"translate(0 0)\\\" fill=\\\"none\\\"/>\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M153.61,308s1.21.16,1,.95-1.74-.21-1.7-.44,2.72-3.1,3.26.53-7.4,1-7.4,1-1.48-1.88,1.61-1.51c1,.09-.21.58-.21.58s-.58,0-.29-.13l.29-.12a.31.31,0,0,0-.47,0c-.25.25-.35.49-.17.55a1.7,1.7,0,0,0,1.9.31c1-.54-.47-1.68-.54-1.79a37.93,37.93,0,0,0-6.45.45c-1.19.35,1.08.74.62.67s-.14-.49-.14-.49,1.19-.66,1.37,1.53-7,.53-7,.53-1.46-1.78,2.2-1.47-1.92.7-1.05.46-1.63-.11-.34.31,5.65-.42,1.11-1.26-6.38,1.71-3.66,1.15-1.47-.34.1-.62,2,1-2,1.85-4.29-.91-3.21-1.36,1.5-.11.94.31-.91,1.08.35.17,0-1.32-3-1-5.58.45-2.86,1.15.25-.39.25-.39-1.36-.14.69-.14.81,2.8-3.21,2.55-5-2.23-2.65-2.34,1.26.46.28.21-.45.49.21.46,2.86-.49-.17-1.75-7.25.84-7.25.84-4.18,2.42-.6,1.67-.23-.46-.23-.46,5.48-1.12.65,1.49c-2.84.79-2.84.09-2.84.09\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-1\\\" d=\\\"M106.57,51.13s.42.55.86,1.27c.59,1,1.23,2.19,1,2.78-.59,1.36,0,.35.18-.11a3.15,3.15,0,0,0-.16-1.92c.1-.61.56-.52.56-.52a1,1,0,0,0-.87-1,2.42,2.42,0,0,0-.79,0C107.2,52.07,106.57,51.13,106.57,51.13Z\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-1\\\" d=\\\"M107.74,52s-.07.61.31.24.06-.57.06-.57a.72.72,0,0,0-.68.76C107.44,53.12,107.74,52,107.74,52Z\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M152.54,40\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-1\\\" d=\\\"M109.24,132.18s.21-2.83-5.28-6a29.8,29.8,0,0,0-2.95-1.49\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-1\\\" d=\\\"M95.36,101.27\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-1\\\" d=\\\"M96,100c-2.72,5.89-2.13,6.63-2.13,6.63-1.53-.63-4.74-1.19-12.63,8.51-1.46,1.81-1.14,2.28-4,4.09C74,121,60,131.33,55.42,133.86c-2.37,1.31-1.39-.24-4.74,3.39s-.19-.51-7.49,6.37a99.92,99.92,0,0,0-10.83,10.79c-7.19,7.77-9.84,10.91-10.12,10.91\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M90.63,106.55a7.85,7.85,0,0,1,5.17-6.32c2.32-1.07,11.62,2.93,17.21,18.91s13.67,10.12,3.55-9.63c-3.37-6.59-3.62-10.4-3.62-14\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M90,109.55\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M92.47,130.51\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M90,109.55\\\" transform=\\\"translate(0 0)\\\" />\\n            <line class=\\\"allison-tattoo-5\\\" x1=\\\"56.17\\\" y1=\\\"327.07\\\" x2=\\\"56.26\\\" y2=\\\"294.79\\\" />\\n            <line class=\\\"allison-tattoo-5\\\" x1=\\\"69.19\\\" y1=\\\"326.97\\\" x2=\\\"69.29\\\" y2=\\\"274.69\\\" />\\n            <line class=\\\"allison-tattoo-5\\\" x1=\\\"50.4\\\" y1=\\\"297.48\\\" x2=\\\"49.84\\\" y2=\\\"323.44\\\" />\\n            <line class=\\\"allison-tattoo-5\\\" x1=\\\"46.77\\\" y1=\\\"323.16\\\" x2=\\\"45.47\\\" y2=\\\"302.23\\\" />\\n            <line class=\\\"allison-tattoo-5\\\" x1=\\\"33.66\\\" y1=\\\"324\\\" x2=\\\"35.61\\\" y2=\\\"308.37\\\" />\\n            <line class=\\\"allison-tattoo-5\\\" x1=\\\"32.26\\\" y1=\\\"323.44\\\" x2=\\\"32.73\\\" y2=\\\"310.97\\\" />\\n            <line class=\\\"allison-tattoo-5\\\" x1=\\\"73.01\\\" y1=\\\"327.34\\\" x2=\\\"74.31\\\" y2=\\\"261.3\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M90.22,326.88s-2.61-83,1.11-103.16\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M94.68,326.88s-.37-93.4,1.77-104.56\\\" transform=\\\"translate(0 0)\\\" />\\n            <line class=\\\"allison-tattoo-5\\\" x1=\\\"113.84\\\" y1=\\\"311.16\\\" x2=\\\"114.03\\\" y2=\\\"236.55\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M124.82,310a497.72,497.72,0,0,1-2.79-58.6\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M126.49,309.67s-1.11-34.6-1.86-51.53\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M133.31,310\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M134.22,309.3s-2.61-34.23-1.77-40.28\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M136.17,309.86s.18-33.49-.75-39.35\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M143.15,309s-2.8-31.72-2.7-39.72\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M144.44,308.34s-.64-33.18-.83-38.3\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M152,309.11s-1.67-33.49-1.39-39.25\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M152.91,308.51s.19-27.31-.09-29.35\\\" transform=\\\"translate(0 0)\\\" />\\n            <line class=\\\"allison-tattoo-5\\\" x1=\\\"100.35\\\" y1=\\\"327.81\\\" x2=\\\"100.26\\\" y2=\\\"324.93\\\" />\\n            <line class=\\\"allison-tattoo-5\\\" x1=\\\"108.45\\\" y1=\\\"326.6\\\" x2=\\\"108.45\\\" y2=\\\"324.46\\\" />\\n            <line class=\\\"allison-tattoo-5\\\" x1=\\\"110.54\\\" y1=\\\"326.27\\\" x2=\\\"110.5\\\" y2=\\\"324.9\\\" />\\n            <line class=\\\"allison-tattoo-5\\\" x1=\\\"83.05\\\" y1=\\\"329.2\\\" x2=\\\"83.05\\\" y2=\\\"326.6\\\" />\\n            <line class=\\\"allison-tattoo-5\\\" x1=\\\"87.15\\\" y1=\\\"327.81\\\" x2=\\\"87.33\\\" y2=\\\"328.6\\\" />\\n            <line class=\\\"allison-tattoo-5\\\" x1=\\\"76.91\\\" y1=\\\"328.93\\\" x2=\\\"77.01\\\" y2=\\\"327.53\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M58.87,326.13v1c4.09-1.68.69.65.69.65-4.18.14-5.76-1.54,3.68-1.86s5.91,2.74,1.3,1.58c2,1.07,8.19-2.46-.42-.84-10.32,2.84,7.35,3.26,10.79,3.72s5.07-2.51,1.49-2.88c-4.42.79,3.63,1.54-.88,1.44-7.86-3.16,4.84-1.9,11.63-2.51s.46,3,.18,2.14c1.07-.28,2-.51-1.16-.88s-6.61,3.76,5.77,2.65,7.86-4.05,6.74-3.58c-.74-.61-4.09.83-.84,1s-.6.84-.6.84c-3-.79-5.35-3.91,7.53-3.77a15.92,15.92,0,0,1,5.73.07c4.08,1.13-1,5.3-1.35,3.51-1.81-4.09,1.5-1.84,1.48-1.9\\\" transform=\\\"translate(0 0)\\\" />\\n            <line class=\\\"allison-tattoo-5\\\" x1=\\\"54.59\\\" y1=\\\"322.23\\\" x2=\\\"54.87\\\" y2=\\\"324.65\\\" />\\n            <line class=\\\"allison-tattoo-5\\\" x1=\\\"38.96\\\" y1=\\\"325.76\\\" x2=\\\"39.05\\\" y2=\\\"322.97\\\" />\\n            <line class=\\\"allison-tattoo-5\\\" x1=\\\"27.05\\\" y1=\\\"324.83\\\" x2=\\\"27.33\\\" y2=\\\"323.16\\\" />\\n            <line class=\\\"allison-tattoo-5\\\" x1=\\\"24.17\\\" y1=\\\"324.65\\\" x2=\\\"24.17\\\" y2=\\\"324\\\" />\\n            <line class=\\\"allison-tattoo-5\\\" x1=\\\"96.45\\\" y1=\\\"327.16\\\" x2=\\\"96.73\\\" y2=\\\"325.3\\\" />\\n            <line class=\\\"allison-tattoo-5\\\" x1=\\\"78.4\\\" y1=\\\"328.83\\\" x2=\\\"78.22\\\" y2=\\\"326.69\\\" />\\n            <line class=\\\"allison-tattoo-5\\\" x1=\\\"74.96\\\" y1=\\\"327.81\\\" x2=\\\"75.24\\\" y2=\\\"326.6\\\" />\\n            <line class=\\\"allison-tattoo-5\\\" x1=\\\"112.96\\\" y1=\\\"312.46\\\" x2=\\\"112.45\\\" y2=\\\"311.25\\\" />\\n            <line class=\\\"allison-tattoo-5\\\" x1=\\\"121.56\\\" y1=\\\"310.97\\\" x2=\\\"121.47\\\" y2=\\\"308.46\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M117.47,310.6\\\" transform=\\\"translate(0 0)\\\" />\\n            <line class=\\\"allison-tattoo-5\\\" x1=\\\"146.29\\\" y1=\\\"310.05\\\" x2=\\\"146.4\\\" y2=\\\"308.09\\\" />\\n            <line class=\\\"allison-tattoo-5\\\" x1=\\\"148.35\\\" y1=\\\"309.39\\\" x2=\\\"148.35\\\" y2=\\\"307.9\\\" />\\n            <line class=\\\"allison-tattoo-5\\\" x1=\\\"154.61\\\" y1=\\\"308.95\\\" x2=\\\"154.77\\\" y2=\\\"307.44\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M132.73,310.6\\\" transform=\\\"translate(0 0)\\\" />\\n            <line class=\\\"allison-tattoo-5\\\" x1=\\\"132.54\\\" y1=\\\"309.62\\\" x2=\\\"132.89\\\" y2=\\\"310.74\\\" />\\n            <line class=\\\"allison-tattoo-5\\\" x1=\\\"139.26\\\" y1=\\\"308.41\\\" x2=\\\"138.96\\\" y2=\\\"310.07\\\" />\\n            <line class=\\\"allison-tattoo-5\\\" x1=\\\"145.06\\\" y1=\\\"309.01\\\" x2=\\\"145.31\\\" y2=\\\"308.58\\\" />\\n            <line class=\\\"allison-tattoo-5\\\" x1=\\\"129.75\\\" y1=\\\"310.46\\\" x2=\\\"129.75\\\" y2=\\\"309.11\\\" />\\n            <line class=\\\"allison-tattoo-5\\\" x1=\\\"131.7\\\" y1=\\\"310.41\\\" x2=\\\"131.56\\\" y2=\\\"309.02\\\" />\\n            <line class=\\\"allison-tattoo-5\\\" x1=\\\"117.7\\\" y1=\\\"311.11\\\" x2=\\\"117.42\\\" y2=\\\"309.11\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M142,311.16a216.59,216.59,0,0,1-5.58,21.95c-3.16,9.58-5,28.56,2.58,32.65,3.76,2,8.53,2.69,13.32,4.56\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M51.75,370.07s18.84,9.93-.19,9c-29.48-2-36.93-.19-36.93-.19s-9.28,3.06-4.28-7.63-1.48,3.85,2.14,2.8c4.19-1.23,40.8,2,31.59-1.05C53,374.13,51.75,370.07,51.75,370.07Z\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M54.58,323.66\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M55.33,322.32\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M26,323.44\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M115.05,356.65s-2.51,1.86,8.56,2S135,360.32,135,360.32s-1.79-6-.95-6.19c.51-.11-1.26-.53-4.11-.78a51.38,51.38,0,0,0-6.5-.15c-6.13.28-8.65-.46-8.27-1.2S115.05,356.65,115.05,356.65Z\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M115.42,349.67s-.65-2.05,6.8.65,10,3.35,10,3.35\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M134.49,359.81s1-1-1.48,14.23\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M138.05,365.13s.63,3.05-1.7,9.19\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M139.61,374s1.3-5.25.74-7.86\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M16.22,354.93c16.18,5.11,17.11,9.3,17.11,9.3s.47,3.25-.84,10\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M32.17,356.37s1.56-.44-14.26-6.58\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M24.17,352.27a102.64,102.64,0,0,1,11.25-3.95\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M15.52,357.86s3.9.46,6.51-.84\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M33.33,353.2c-1.49.56-4.14,1.49-4.14,1.49\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M35.7,365.86s2,3.18,1.19,8.48\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M37.38,366.88s1.95-.65,1.95,7.53\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-1\\\" d=\\\"M23.42,164.34a14,14,0,0,0-9.25,3.84c.32,0-2.75.42-3.44,1.77a11.52,11.52,0,0,0-2.89.7c-.42.23-2.6-1.21-4.74-.79s.28,1.44.28,1.44a4.52,4.52,0,0,0,2.14,1.16c1.25.88,1.67,1.16,3.11,1s2.93-.47,2.56-.19\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-1\\\" d=\\\"M3.38,171.3a8.12,8.12,0,0,0-1.58-.23c-.14.14-.1-.75-1.63-.38-.33.75,1.25,1.91,1.25,1.91l1.12,1.12a9.3,9.3,0,0,0,2.19,1.72c.93.46.51,1.25,6.56.7\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-1\\\" d=\\\"M10.91,178a9.51,9.51,0,0,1-3.25.61c-1.63.14-1.91-.19-3.26-1a9.36,9.36,0,0,1-3.07-3.58c-.65-1.21-.93-1.91-.51-2\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-1\\\" d=\\\"M1.75,174.83s-.74-.23.56,1.82.65.83,2.42,2,1.63,2.42,4.32,1.45c2.65-.52,4.93-.89,4.75-.89s4.23-2.07,4.09-2,10.3-8,10.49-8,7.25-5,12.63-8.79c0,0,12-8.82,17.24-16.15\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-1\\\" d=\\\"M3.69,170.43s.11-.6-1.15-.14c-.35.28.8.62.8.62C5.14,170.59,5,170.43,3.69,170.43Z\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-1\\\" d=\\\"M1.46,171.26s-1.12-.52-1-.17a.87.87,0,0,0,.7.8S1,171.3,1.46,171.26Z\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M11.33,372.93s6.14-25.12,14.7-49.49\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M51.56,370.37\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M51.56,370.55s-25.07-1.16-18.93-16.09c2.93-7.67,2.79-6.84,10-19s6.14-9.62,6.14-9.62\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M88.21,132.32\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M97.71,149.37c-4.42-7.23-4.89-18.79-6.1-24.07,0,0,3.63,17.11,9.21,25.67\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M112.73,326.23c-.38-12.65-1.49-81.63-1.68-108.84-.1-14.85,0-20.73-10.08-57.93\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M101,159.46c-.12-.41-.22-.81-.34-1.23-1.07-3.13-2-6.07-2.92-8.86\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M97.71,149.37a26.82,26.82,0,0,1,.31,4,21.22,21.22,0,0,0,.69,4.51\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M56.08,322.32c-8.19-1.49-5.77,2.05-5.77,2.05s4,.93,2.32-1-1.48.93-1.86.28.75-2.79,3.45-.09-5.4,2.33-5.4,2.33-5.49.46-6.51-1.59,2.88-.27,1.67-.55-.83.37.1.83,7.72-2.32-4.1-1.67c-7.25.4-6.93,1.39-5.6,2.1\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M21.52,325.87c.12.14,1.25-.11,1.25-.11s-.62.08-1.25.11\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M34.38,325a16.16,16.16,0,0,1,2.81.41c6,1.12-4.46,1.12-4.46,1.12s-9-.93-4.1-2.7,2.14.74,2.14.74,1.12-1.86-.83-.55.83.55,1.11,1.2,5.49-3.9-5-1.76c-7.78,2.32-6.1,2.51-4.51,2.43\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M91.7,145.58c.2,1,5.7,16.66,5.68,18C100,170.88,93,174.79,93,174.79,77.79,189.37,74.12,195,72.45,205.67a46.18,46.18,0,0,0-.09,7.44c.26,8.24-13,49.16-14.4,55.75a22.38,22.38,0,0,1-10,14.58c-5.21,3.53-19.25,15.42-28.11,41.72.95,5.81,6.72-2.56,3.09-.14-1.21.53-1.52.76-1.44.85\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M36.1,325.66a10.3,10.3,0,0,1-1.72-.68\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M36.1,325.66l.35.1-.35-.1\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M34.38,325c-.29.06,1.06.48,1.72.68\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M90.49,106.74c6.42-22.84,22.66,28.58,22.66,28.58,1.25,8,1.16,15.93-.61,20.3-3.09,5.15-7.41,6.1-11.57,3.84\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M87.89,127.16c.94,12.1,5.71,26.42,10.82,30.73\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-1\\\" d=\\\"M98,153.38c7.81,23.25-2.6,60.48-2.6,60.48\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-1\\\" d=\\\"M97.84,152.09s8.75,19.58,5.68,57\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-1\\\" d=\\\"M106.59,212s2.65-27.35-8.93-61.12\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-1\\\" d=\\\"M99.89,210s5.4-41.49-1.87-56.57\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M97.52,84.81a23.15,23.15,0,0,1-2,16.28\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-1\\\" d=\\\"M114,173.9s11.72,35.44,15.49,51.91\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-1\\\" d=\\\"M112.17,173.34s14.93,44.38,17,61.26\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-1\\\" d=\\\"M117.89,181.72s4,11.58,8.79,27.07\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-1\\\" d=\\\"M121,185.9s2,8.1,4.19,17.17\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-1\\\" d=\\\"M115.38,187.72s7.11,31.39,8.23,49.53\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-1\\\" d=\\\"M127,235s-4.61-23.58-10-44.37\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-1\\\" d=\\\"M113.7,190s6.56,25.12,7.26,49.53\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-1\\\" d=\\\"M113.29,191.9s4.74,27.21,4.46,47\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-1\\\" d=\\\"M115.38,243\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-1\\\" d=\\\"M134.68,61.67\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-1\\\" d=\\\"M132.73,65.21\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-1\\\" d=\\\"M146.88,58.6\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-1\\\" d=\\\"M148.91,39.18\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-1\\\" d=\\\"M150.59,27.49s-1-.28-2.28,9.09c-.05.35-.21,1.92-.45,4.16\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-1\\\" d=\\\"M142.66,72.25s-.44.62-1.34,1.69\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-1\\\" d=\\\"M141.32,73.94a97.84,97.84,0,0,1-16,14.75\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-1\\\" d=\\\"M125.15,88.79l.12-.1\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-1\\\" d=\\\"M146.12,58.6c-.25,2.33-.48,4.35-.65,5.73s-.94,3-1.08,4.19c-.36,3-1.35,3.81-2,4.46l-1,1\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-1\\\" d=\\\"M125.27,88.69a30.66,30.66,0,0,0-5.61,11.49\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-1\\\" d=\\\"M127.8,86.08a16.79,16.79,0,0,0-2.53,2.61\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-1\\\" d=\\\"M141.32,73.94\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-1\\\" d=\\\"M146.88,58.6\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-1\\\" d=\\\"M146.12,59.81\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-1\\\" d=\\\"M146,59.11c1.76-4.07,2-15.5,1.91-18.37\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-1\\\" d=\\\"M148.87,38.51c0,.08,0,.31,0,.67\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M152.75,370.07s18.84,9.93-.19,9c-29.48-2-36.93-.19-36.93-.19s-9.28,3.06-4.28-7.63-1.48,3.85,2.14,2.8c4.19-1.23,40.8,2,31.59-1.05C154,374.13,152.75,370.07,152.75,370.07Z\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-1\\\" d=\\\"M101.56,124.86s-4.65-2.72-11.44.9c-4.73,2.53-5.68,4.08-12.74,8.19-3.08,1.79-5.51,3-12,6.14A23.89,23.89,0,0,0,57.29,146\\\" transform=\\\"translate(0 0)\\\" />\\n            <path class=\\\"allison-tattoo-5\\\" d=\\\"M92,104.88\\\" transform=\\\"translate(0 0)\\\" />\\n        </g>\\n        </svg>\\n\\n<style>\\n\\n.allison-tattoo-1,\\n.allison-tattoo-2,\\n.allison-tattoo-3,\\n.allison-tattoo-4,\\n.allison-tattoo-5,\\n.allison-tattoo-6,\\n.allison-tattoo-7,\\n.allison-tattoo-8 {\\n\\t\\tfill: none;\\n\\t\\tstroke-miterlimit: 10;\\n}\\n\\n.allison-tattoo-1,\\n.allison-tattoo-3,\\n.allison-tattoo-5,\\n.allison-tattoo-6,\\n.allison-tattoo-7,\\n.allison-tattoo-8 {\\n\\t\\tstroke: #231f20;\\n}\\n\\n.allison-tattoo-1 {\\n\\t\\tstroke-width: 0.25px;\\n}\\n\\n.allison-tattoo-2 {\\n\\t\\tstroke: #bcbec0;\\n}\\n\\n.allison-tattoo-3 {\\n\\t\\tstroke-width: 0.12px;\\n}\\n\\n.allison-tattoo-4 {\\n\\t\\tstroke: #6d6e71;\\n}\\n\\n.allison-tattoo-4,\\n.allison-tattoo-5 {\\n\\t\\tstroke-width: 0.5px;\\n}\\n\\n.allison-tattoo-6 {\\n\\t\\tstroke-width: 0.15px;\\n}\\n\\n.allison-tattoo-7 {\\n\\t\\tstroke-width: 0.35px;\\n}\\n\\n.allison-tattoo-8 {\\n\\t\\tstroke-width: 0.75px;\\n}\\n\\n.lady-hand {\\n\\tanimation: shuffle .5s linear infinite;\\t\\n}\\n\\n@keyframes shuffle {\\n  0% { transform: translate(0px, 0px); }\\n  33% { transform: translate(-1px, 0px); }\\n  66% {transform: translate(1px, 0px);}\\n  100% { transform: translate(0px, 0px); }\\n} \\n</style>\\n\"],\"names\":[],\"mappings\":\"AAsQA,gCAAiB,CACjB,gCAAiB,CACjB,gCAAiB,CACjB,gCAAiB,CACjB,gCAAiB,CACjB,gCAAiB,CACjB,gCAAiB,CACjB,iBAAiB,eAAC,CAAC,AACjB,IAAI,CAAE,IAAI,CACV,iBAAiB,CAAE,EAAE,AACvB,CAAC,AAED,gCAAiB,CACjB,gCAAiB,CACjB,gCAAiB,CACjB,gCAAiB,CACjB,gCAAiB,CACjB,iBAAiB,eAAC,CAAC,AACjB,MAAM,CAAE,OAAO,AACjB,CAAC,AAED,iBAAiB,eAAC,CAAC,AACjB,YAAY,CAAE,MAAM,AACtB,CAAC,AAED,iBAAiB,eAAC,CAAC,AACjB,MAAM,CAAE,OAAO,AACjB,CAAC,AAED,iBAAiB,eAAC,CAAC,AACjB,YAAY,CAAE,MAAM,AACtB,CAAC,AAED,iBAAiB,eAAC,CAAC,AACjB,MAAM,CAAE,OAAO,AACjB,CAAC,AAED,gCAAiB,CACjB,iBAAiB,eAAC,CAAC,AACjB,YAAY,CAAE,KAAK,AACrB,CAAC,AAED,iBAAiB,eAAC,CAAC,AACjB,YAAY,CAAE,MAAM,AACtB,CAAC,AAED,iBAAiB,eAAC,CAAC,AACjB,YAAY,CAAE,MAAM,AACtB,CAAC,AAED,iBAAiB,eAAC,CAAC,AACjB,YAAY,CAAE,MAAM,AACtB,CAAC,AAED,UAAU,eAAC,CAAC,AACX,SAAS,CAAE,sBAAO,CAAC,GAAG,CAAC,MAAM,CAAC,QAAQ,AACvC,CAAC,AAED,WAAW,sBAAQ,CAAC,AAClB,EAAE,AAAC,CAAC,AAAC,SAAS,CAAE,UAAU,GAAG,CAAC,CAAC,GAAG,CAAC,AAAE,CAAC,AACtC,GAAG,AAAC,CAAC,AAAC,SAAS,CAAE,UAAU,IAAI,CAAC,CAAC,GAAG,CAAC,AAAE,CAAC,AACxC,GAAG,AAAC,CAAC,SAAS,CAAE,UAAU,GAAG,CAAC,CAAC,GAAG,CAAC,AAAC,CAAC,AACrC,IAAI,AAAC,CAAC,AAAC,SAAS,CAAE,UAAU,GAAG,CAAC,CAAC,GAAG,CAAC,AAAE,CAAC,AAC1C,CAAC\"}"
};

const AllisonTattoo = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	$$result.css.add(css$1);
	return `<svg viewBox="${"0 0 168.85 379.56"}"><g id="${"Layer_1"}" data-name="${"Layer 1"}"><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M106.1,59.8"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M106.59,45.48"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M107,48.55"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M99.33,45.11"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M97.56,45.76c.93-1.21-1.16.61-1.16.61s-5,3.14-3.21,10.67S100,59.55,99.82,60"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M82.31,61.11S76.45,57.21,70.87,64"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M81.56,61.67S75.69,60,72.7,63.06c-3.74,3.87-3,10.85.31,14a7.16,7.16,0,0,0,1.67,1.21"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M79.05,63.9c-.18-.88-.37.47-.37.47S73.75,81.11,82,79.62s11.44-2.69,14.23-.55a9,9,0,0,0,8,1.16c1.77-.56,2.19-1.72-2.79,5.91"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M87.8,52.09s-1.12-1.86-2.33,7.16,8.37,5.58,8.37,5.58,8-3.47,12.1.28c4.93,4.56.83,11.91,1,12.93"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M77.94,81.21c-5.94-4.13-7.49-10.84-5-14.61,2-3.07,6.21-3.47,7.07-3.53"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M88.22,51.58s-1.68-3.4-.93,6.37,7.95,5.35,7.95,5.35"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M102,46.18s.19-2,1.77.33-3.81,9.39-3.81,9.39"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M100.73,46.18s.17-1.4,1.07-.79,3.43,3.22-3.08,12.11"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M97.94,46s1.07-3.35,2,.19,4.79,2.7-2.6,13.39"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M96.17,59.21c5.49-7.21,3.07-10,3-12.56s-1.84,0-1.84,0"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M96.08,48s1.86-3.11,2-.32,1.35,5-3,11.07"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M95,50.28s1.49-4.42,1.53-.56.1,3.76-2.18,8.46"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M107.94,68c2.32-10.32-1.4-8.09-8.12-8.07-7.16,0-7.7-5-5.19-10.53s2.56-3.16,2.56-3.16"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M93.7,51.9s1.82-3.72,1.26-.46a17.41,17.41,0,0,1-1.35,4.93"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M99.94,55.9s-1.72,2.28,3.16.75,2.46-1.77,2.46-1.77c-1.86.23-.32,1.07,3.4,11.77,1.39,4-.93,7.86-.93,7.86"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M97.8,58.88s11.81-5.81,11.58,9.49c0,0,.18,2.28-1.91,6.51a98.9,98.9,0,0,1-4.79,9.21"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M94.87,47.62s-.28-2.65-1.68,1-3.53,12.56,1,11.3"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M93.19,48.6s-.74-1.67-1.53.19c0,.14.37-1.91-1.72,5.62s.55,11.35,8.74,7.35"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M91.19,50s-2-3.07-3.9,8"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M89,51s-.65-1.35-1.86,4"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M86.26,54.46s-2-2.14-1.81,5.91,3.77,8.74,10.18,6.18,15.35,3.26,12.79,8.79"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M84.45,57.21s-1.35-1.73-.51,4.93,2.93,6.37,5.21,6.23.93-.05,7.81-2.09,10.14,2.09,10.14,2.09c4.51,5-2.7,13.35-2.7,13.35,6.7-11.58.89-6.14.89-6.14-1.12.65-1.77,2-6.33-.42s-5.63-.42-10.47,0S78.91,78.79,78.73,70,80,63.67,80,63.67"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M83.61,60s-1.12-.61-1,4.6,4,5.68,7.21,4.84,11-3.72,14.6-1.16,4.56,4.41,2.23,9.16"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M82.59,62.18S81,60.41,81.05,66s3.44,7.07,9.91,4.7,10-3.12,12.46-.46c6.75,7.2-1.39,14.23-1.58,15.16-.63,3.17-.37-1.82-2.6-1.12s-7.63,3.49-11,.23-4-2.23-4.66-2.27S77.89,85.39,75.15,76s3.53-11.67,3.53-11.67"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M81.24,63.21S79.47,61.76,79.8,67s1,8.6,10.09,5.81,13.44-.47,14.23,4.1c.56,3.21-.79,6.55-3.67,11.07"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M95.24,63.3c15.63-8.14,15.35,12.37,10.28,16.65"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M99.77,45.55s.45-2.11,1.46,1.11.49,6.18-.85,9.67,2.68.82,4.92-.89-.09-1-.75-.7.28,3,1.83,5.42,3.24,8.29,2.2,11.88"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M104,48.15s4.64,1.15,1.36-2.83-4.12-1-4-.21"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M105.58,49.68s-2.38-2.13.24,3.14-.45-.28-.45-.28S102.33,46.72,105.58,49.68Z"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M100.66,45.39s.83,1,.76-2.23a22.19,22.19,0,0,0,0-3.35c-.27-2.63-1.23-1.67-1.23-1.67s.28-.56-1.26,1.67"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M101.4,39.81s2-.84.09,2.86"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M102,39.67s2.24-1.67-.56,3.49"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M102.61,39.39s3.21-.14.21,3.77"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M104,40.51s2.72-.07,1.39,2-.91,1.68-.91,1.68"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M105.4,42.53s2.56-.77,1.65.91a9.48,9.48,0,0,1-1.42,2.16"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M106.68,44.21s2.61-.07-.42,2.39"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M107.26,45.65s1.77,0-.3,2.9"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M97.29,41.48s2.55-5.67,2.93,3.4"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M96.35,42.46s1.68-3.3,2.42,2"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M94.31,41.9s3-1.58,2.46,4"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M95.7,43.86s-2.88-2.52-.41-2.24"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M95.1,44.51s1.21-2.56,1.3,1.86"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M94.49,45.53s.56-4,1,1.4"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M94,46.79s.14-3.63.7,0"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M94.82,44S91,40,95.61,41.76"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M94.4,44.79s-5.81-4.56-1-3.4"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M94,46.09s-6-4.79-2.51-4.23"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M93.61,47.39s-7.72-5.81-3.3-5.11"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M91.84,48.32s-9-7.35-3-5.58"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M90.59,49.53s-8.79-7.35-4-6.42"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M89.66,49.9s-9.77-7.16-4.37-5.62"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M88.4,51s-10-6.56-4.84-6.56"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M86.82,52.6s-11.35-6-4.88-7.39"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M85.19,54.32S73.84,48.09,79.94,47"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M84.54,56.28s-10-6.42-6.32-7.49"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M83.05,60.37S73,54.55,77.7,50.6"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M80.87,60.41S71,53.07,77.38,49.67"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M77.89,59.86s-6.37-7.17-2.65-7.12"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M77.19,59.16s-4.56.84-5.67,2.32"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M75.7,59.34s-4.51-4.93-1.76-5.25"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M75,58.6s-2.75.47-2.28,1.81"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M74.4,58.65s-1.67-2.37-1-2.28"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M74,58.83s-.51-.93-.32-.93"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M151.59,310.72"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M148.61,309.88"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M149.47,314.27"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M147.83,308.11"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-2 svelte-1qjlatf"}" d="${"M26.08,323.3s6.45-26,25.81-39.15a43.59,43.59,0,0,1,5.58-3.22"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-2 svelte-1qjlatf"}" d="${"M94.49,175.62S72.72,189.71,74,207.76a21.47,21.47,0,0,0,.64,4"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-2 svelte-1qjlatf"}" d="${"M74,207.76c0,8.37-.2,8.19-1.32,13.4,0,0-4,13.58-9.3,32.7s-2.51,14.68-11.44,30.29"}" transform="${"translate(0 0)"}"></path></g><g id="${"Layer_2"}" data-name="${"Layer 2"}" class="${"lady-hand svelte-1qjlatf"}"><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M160.82,17.33a23.52,23.52,0,0,1,2.38-3c.4-.18,2.9-3.85,2.44-4.6a16,16,0,0,0-2.07-2.95c-.41-.2-.85-.18-1.21-.66s-2-.51-2-.51L158.67,5a1.07,1.07,0,0,0-.42,1.76,4.5,4.5,0,0,0,2.61,1.45l.4.09a7.56,7.56,0,0,0,1,2.31c.09.22-.26,0-.26,0s-.11,0-.55.48"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M164.59,12.56a36,36,0,0,1,2.46-2.71c.51-.37,1.14-4.86,1.56-5.76a3.63,3.63,0,0,0-.33-1.72,12,12,0,0,1,0-2c.09-.57-1.12-.15-1.3.05s-.57.11-.88,2.33-.42,1.5-.13,1.74c-.24-.2-1.32,2-1.5,3.28"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M168.28,2.37l.42-1a.48.48,0,0,0-.48-.66"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M166.06,2.59c-1.12,2-1,2.16-1,2.16s-.55.11-1.48,2"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M160.05,10.12A6.08,6.08,0,0,1,161.42,9"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M158,11.7a4,4,0,0,0-1.25,1.14,3,3,0,0,0-1.59.62,2.37,2.37,0,0,0-1.45.24,2.54,2.54,0,0,0-1.36.2"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M153.48,13.81a5.93,5.93,0,0,1,.86-1.34,7.93,7.93,0,0,0,.77-1.06"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M156.67,18.43s-.82-2,1.87-4.77a1.47,1.47,0,0,0,.26-.6"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M148.46,20.21c5.41-2.93,5.2-2.78,7.37-4.86"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M156.65,13.55a10.24,10.24,0,0,1-1.3,2.79"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-3 svelte-1qjlatf"}" d="${"M156.3,6.74s.93,1,1.71,0C157.9,6.5,156.3,6.74,156.3,6.74Z"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-3 svelte-1qjlatf"}" d="${"M160.65,5.7S158.88,5,158.74,5,158.47,6.58,160.65,5.7Z"}" transform="${"translate(0 0)"}"></path></g><g id="${"Layer_3"}" data-name="${"Layer 3"}"><path class="${"allison-tattoo-2 svelte-1qjlatf"}" d="${"M144.82,276.18s1.74,4.33,7.19-2.16"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-2 svelte-1qjlatf"}" d="${"M125.86,136.49c-.48-1.2-1-2.52-1.48-4"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-2 svelte-1qjlatf"}" d="${"M125.86,136.49a72.65,72.65,0,0,0,3,6.75,5.08,5.08,0,0,1-.21,3.52c-1.24,2.62-5.32,4-9.94,2.76"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-4 svelte-1qjlatf"}" d="${"M125.86,136.49"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-4 svelte-1qjlatf"}" d="${"M120.06,136.31"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-2 svelte-1qjlatf"}" d="${"M125.86,136.49a5.93,5.93,0,0,0,4.15-2.94,5.08,5.08,0,0,0,.21-3.52s-1.66,0-3.89-6.43"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-2 svelte-1qjlatf"}" d="${"M123.47,265.72s-3.52-.39-16.83-32.08"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-2 svelte-1qjlatf"}" d="${"M123.19,262.65A21.09,21.09,0,0,0,124.7,269a22.47,22.47,0,0,0,5.26,7.9"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-2 svelte-1qjlatf"}" d="${"M123.4,288.46A22.61,22.61,0,0,0,124.7,269"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-2 svelte-1qjlatf"}" d="${"M126.87,284.93s-8,6.6-8.7,23.38"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-2 svelte-1qjlatf"}" d="${"M147.7,281.39s8.38-8.93,3.91-19.53-4.84-5-8.56-20.84-9.49-31.07-15.16-39.63-3-9.3-3-9.3,2.89.37-2.51-11.44"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-2 svelte-1qjlatf"}" d="${"M142.05,310.93s3-13.54,5-23S149.7,279,149.7,279"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-2 svelte-1qjlatf"}" d="${"M70.22,282.79s.55,4.09,7.39.88"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-2 svelte-1qjlatf"}" d="${"M111.42,194.69a97.39,97.39,0,0,1-4.78,38.95,80.57,80.57,0,0,1-8.8,18.17c-11,16.91-8.62,12.65-13.16,21.3-1.74,3.33-1.86,4.09-2,5.49s-1.18,4.26-4.56,7.07c-6.7,5.58-5,4.4-7.18,8.09S68.86,303,54.12,319.9a68.43,68.43,0,0,1-4.79,5.17"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M112.14,377.55"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M113.14,367.75c-.2.52-.47,1.22-.76,2"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M113.14,367.75l0-.13c1-2.69,2.14-9.58,2.61-20.65s2.32-38.09,2.32-38.09"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-6 svelte-1qjlatf"}" d="${"M97.31,46.65"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M119.38,81.11"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M114.23,84c4.5-6.8,13-14,13-14s7.71-6.45,7.44-8.31"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M133.41,61.58"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M143,24.53"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M159.17,15.09a2.68,2.68,0,0,1-.11-2.07l.69.22s-1.83-.77-1.57-1.76c-1.25.7-3.36-.13-3.47-.2s-.62-1.58.26-1.36c1.49.37,1.82-.51,3.24-.62.55,0,.44-.2,1.47.55s2,1.45,2,1.45.63.11.44,1.68a41,41,0,0,1-1.87,5.78A9.59,9.59,0,0,0,159,19.91c-.7,1-.51.81-5.08,4.29a9.43,9.43,0,0,0-2.53,2.7,1,1,0,0,1-.78.59"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M156.44,9.74s2.42-4,.13-4.22c-1.52-.14-2.35,2.22-2.35,2.22s-.16-.24-2.16,2.68-1.47,1.92-1.47,1.92-4.29,4.17-4.77,8.51c-2.31,3-2.15,4.27-3.06,6.23,0,0-7.27,23.21-8.47,34.12-.56,2-4.71,6.76-4.71,6.76"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M151.79,25.17"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M119.8,112.93s-1.63-15.86,2.51-24.47"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-7 svelte-1qjlatf"}" d="${"M106.13,48.11s3.88,3.67,7.64,1.78c1.89-.42,1.47,3.14,1.47,3.14s.1,1,2.34-.31c.83-.28,1.57,2.37,1.57,2.37s-.46-1.05.34-1.22,2.06,2.34,1.92,2.41.81,1.36,1.75,1.11,6.9,2-3.87,14.86c-7.82,12.84-6.35,23.23-6.35,23.23s.3,7.35,7.25,18.21c.14,1,10.64,15.49,10.64,15.49s1.5,3.35-.38,5.58-2.51,2.72-2.58,3.28"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-7 svelte-1qjlatf"}" d="${"M126.19,150s.6.17,1.78-.8c2.55-1.92,2.16-7.37.66-9.6s-3.94-9.63-3.94-9.63"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-2 svelte-1qjlatf"}" d="${"M112.35,203.25s14.68-21,15.62-54"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-8 svelte-1qjlatf"}" d="${"M156.26,308.69l-1.46-37.53s-1.47-15.35-4.75-19.47-5-13.81-5-13.81-1-6.7-6.35-19.26c-12.35-23-12.84-30.21-12.84-30.21l2.51-39.76"}" transform="${"translate(0 0)"}" fill="${"none"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M153.61,308s1.21.16,1,.95-1.74-.21-1.7-.44,2.72-3.1,3.26.53-7.4,1-7.4,1-1.48-1.88,1.61-1.51c1,.09-.21.58-.21.58s-.58,0-.29-.13l.29-.12a.31.31,0,0,0-.47,0c-.25.25-.35.49-.17.55a1.7,1.7,0,0,0,1.9.31c1-.54-.47-1.68-.54-1.79a37.93,37.93,0,0,0-6.45.45c-1.19.35,1.08.74.62.67s-.14-.49-.14-.49,1.19-.66,1.37,1.53-7,.53-7,.53-1.46-1.78,2.2-1.47-1.92.7-1.05.46-1.63-.11-.34.31,5.65-.42,1.11-1.26-6.38,1.71-3.66,1.15-1.47-.34.1-.62,2,1-2,1.85-4.29-.91-3.21-1.36,1.5-.11.94.31-.91,1.08.35.17,0-1.32-3-1-5.58.45-2.86,1.15.25-.39.25-.39-1.36-.14.69-.14.81,2.8-3.21,2.55-5-2.23-2.65-2.34,1.26.46.28.21-.45.49.21.46,2.86-.49-.17-1.75-7.25.84-7.25.84-4.18,2.42-.6,1.67-.23-.46-.23-.46,5.48-1.12.65,1.49c-2.84.79-2.84.09-2.84.09"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M106.57,51.13s.42.55.86,1.27c.59,1,1.23,2.19,1,2.78-.59,1.36,0,.35.18-.11a3.15,3.15,0,0,0-.16-1.92c.1-.61.56-.52.56-.52a1,1,0,0,0-.87-1,2.42,2.42,0,0,0-.79,0C107.2,52.07,106.57,51.13,106.57,51.13Z"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M107.74,52s-.07.61.31.24.06-.57.06-.57a.72.72,0,0,0-.68.76C107.44,53.12,107.74,52,107.74,52Z"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M152.54,40"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M109.24,132.18s.21-2.83-5.28-6a29.8,29.8,0,0,0-2.95-1.49"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M95.36,101.27"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M96,100c-2.72,5.89-2.13,6.63-2.13,6.63-1.53-.63-4.74-1.19-12.63,8.51-1.46,1.81-1.14,2.28-4,4.09C74,121,60,131.33,55.42,133.86c-2.37,1.31-1.39-.24-4.74,3.39s-.19-.51-7.49,6.37a99.92,99.92,0,0,0-10.83,10.79c-7.19,7.77-9.84,10.91-10.12,10.91"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M90.63,106.55a7.85,7.85,0,0,1,5.17-6.32c2.32-1.07,11.62,2.93,17.21,18.91s13.67,10.12,3.55-9.63c-3.37-6.59-3.62-10.4-3.62-14"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M90,109.55"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M92.47,130.51"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M90,109.55"}" transform="${"translate(0 0)"}"></path><line class="${"allison-tattoo-5 svelte-1qjlatf"}" x1="${"56.17"}" y1="${"327.07"}" x2="${"56.26"}" y2="${"294.79"}"></line><line class="${"allison-tattoo-5 svelte-1qjlatf"}" x1="${"69.19"}" y1="${"326.97"}" x2="${"69.29"}" y2="${"274.69"}"></line><line class="${"allison-tattoo-5 svelte-1qjlatf"}" x1="${"50.4"}" y1="${"297.48"}" x2="${"49.84"}" y2="${"323.44"}"></line><line class="${"allison-tattoo-5 svelte-1qjlatf"}" x1="${"46.77"}" y1="${"323.16"}" x2="${"45.47"}" y2="${"302.23"}"></line><line class="${"allison-tattoo-5 svelte-1qjlatf"}" x1="${"33.66"}" y1="${"324"}" x2="${"35.61"}" y2="${"308.37"}"></line><line class="${"allison-tattoo-5 svelte-1qjlatf"}" x1="${"32.26"}" y1="${"323.44"}" x2="${"32.73"}" y2="${"310.97"}"></line><line class="${"allison-tattoo-5 svelte-1qjlatf"}" x1="${"73.01"}" y1="${"327.34"}" x2="${"74.31"}" y2="${"261.3"}"></line><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M90.22,326.88s-2.61-83,1.11-103.16"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M94.68,326.88s-.37-93.4,1.77-104.56"}" transform="${"translate(0 0)"}"></path><line class="${"allison-tattoo-5 svelte-1qjlatf"}" x1="${"113.84"}" y1="${"311.16"}" x2="${"114.03"}" y2="${"236.55"}"></line><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M124.82,310a497.72,497.72,0,0,1-2.79-58.6"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M126.49,309.67s-1.11-34.6-1.86-51.53"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M133.31,310"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M134.22,309.3s-2.61-34.23-1.77-40.28"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M136.17,309.86s.18-33.49-.75-39.35"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M143.15,309s-2.8-31.72-2.7-39.72"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M144.44,308.34s-.64-33.18-.83-38.3"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M152,309.11s-1.67-33.49-1.39-39.25"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M152.91,308.51s.19-27.31-.09-29.35"}" transform="${"translate(0 0)"}"></path><line class="${"allison-tattoo-5 svelte-1qjlatf"}" x1="${"100.35"}" y1="${"327.81"}" x2="${"100.26"}" y2="${"324.93"}"></line><line class="${"allison-tattoo-5 svelte-1qjlatf"}" x1="${"108.45"}" y1="${"326.6"}" x2="${"108.45"}" y2="${"324.46"}"></line><line class="${"allison-tattoo-5 svelte-1qjlatf"}" x1="${"110.54"}" y1="${"326.27"}" x2="${"110.5"}" y2="${"324.9"}"></line><line class="${"allison-tattoo-5 svelte-1qjlatf"}" x1="${"83.05"}" y1="${"329.2"}" x2="${"83.05"}" y2="${"326.6"}"></line><line class="${"allison-tattoo-5 svelte-1qjlatf"}" x1="${"87.15"}" y1="${"327.81"}" x2="${"87.33"}" y2="${"328.6"}"></line><line class="${"allison-tattoo-5 svelte-1qjlatf"}" x1="${"76.91"}" y1="${"328.93"}" x2="${"77.01"}" y2="${"327.53"}"></line><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M58.87,326.13v1c4.09-1.68.69.65.69.65-4.18.14-5.76-1.54,3.68-1.86s5.91,2.74,1.3,1.58c2,1.07,8.19-2.46-.42-.84-10.32,2.84,7.35,3.26,10.79,3.72s5.07-2.51,1.49-2.88c-4.42.79,3.63,1.54-.88,1.44-7.86-3.16,4.84-1.9,11.63-2.51s.46,3,.18,2.14c1.07-.28,2-.51-1.16-.88s-6.61,3.76,5.77,2.65,7.86-4.05,6.74-3.58c-.74-.61-4.09.83-.84,1s-.6.84-.6.84c-3-.79-5.35-3.91,7.53-3.77a15.92,15.92,0,0,1,5.73.07c4.08,1.13-1,5.3-1.35,3.51-1.81-4.09,1.5-1.84,1.48-1.9"}" transform="${"translate(0 0)"}"></path><line class="${"allison-tattoo-5 svelte-1qjlatf"}" x1="${"54.59"}" y1="${"322.23"}" x2="${"54.87"}" y2="${"324.65"}"></line><line class="${"allison-tattoo-5 svelte-1qjlatf"}" x1="${"38.96"}" y1="${"325.76"}" x2="${"39.05"}" y2="${"322.97"}"></line><line class="${"allison-tattoo-5 svelte-1qjlatf"}" x1="${"27.05"}" y1="${"324.83"}" x2="${"27.33"}" y2="${"323.16"}"></line><line class="${"allison-tattoo-5 svelte-1qjlatf"}" x1="${"24.17"}" y1="${"324.65"}" x2="${"24.17"}" y2="${"324"}"></line><line class="${"allison-tattoo-5 svelte-1qjlatf"}" x1="${"96.45"}" y1="${"327.16"}" x2="${"96.73"}" y2="${"325.3"}"></line><line class="${"allison-tattoo-5 svelte-1qjlatf"}" x1="${"78.4"}" y1="${"328.83"}" x2="${"78.22"}" y2="${"326.69"}"></line><line class="${"allison-tattoo-5 svelte-1qjlatf"}" x1="${"74.96"}" y1="${"327.81"}" x2="${"75.24"}" y2="${"326.6"}"></line><line class="${"allison-tattoo-5 svelte-1qjlatf"}" x1="${"112.96"}" y1="${"312.46"}" x2="${"112.45"}" y2="${"311.25"}"></line><line class="${"allison-tattoo-5 svelte-1qjlatf"}" x1="${"121.56"}" y1="${"310.97"}" x2="${"121.47"}" y2="${"308.46"}"></line><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M117.47,310.6"}" transform="${"translate(0 0)"}"></path><line class="${"allison-tattoo-5 svelte-1qjlatf"}" x1="${"146.29"}" y1="${"310.05"}" x2="${"146.4"}" y2="${"308.09"}"></line><line class="${"allison-tattoo-5 svelte-1qjlatf"}" x1="${"148.35"}" y1="${"309.39"}" x2="${"148.35"}" y2="${"307.9"}"></line><line class="${"allison-tattoo-5 svelte-1qjlatf"}" x1="${"154.61"}" y1="${"308.95"}" x2="${"154.77"}" y2="${"307.44"}"></line><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M132.73,310.6"}" transform="${"translate(0 0)"}"></path><line class="${"allison-tattoo-5 svelte-1qjlatf"}" x1="${"132.54"}" y1="${"309.62"}" x2="${"132.89"}" y2="${"310.74"}"></line><line class="${"allison-tattoo-5 svelte-1qjlatf"}" x1="${"139.26"}" y1="${"308.41"}" x2="${"138.96"}" y2="${"310.07"}"></line><line class="${"allison-tattoo-5 svelte-1qjlatf"}" x1="${"145.06"}" y1="${"309.01"}" x2="${"145.31"}" y2="${"308.58"}"></line><line class="${"allison-tattoo-5 svelte-1qjlatf"}" x1="${"129.75"}" y1="${"310.46"}" x2="${"129.75"}" y2="${"309.11"}"></line><line class="${"allison-tattoo-5 svelte-1qjlatf"}" x1="${"131.7"}" y1="${"310.41"}" x2="${"131.56"}" y2="${"309.02"}"></line><line class="${"allison-tattoo-5 svelte-1qjlatf"}" x1="${"117.7"}" y1="${"311.11"}" x2="${"117.42"}" y2="${"309.11"}"></line><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M142,311.16a216.59,216.59,0,0,1-5.58,21.95c-3.16,9.58-5,28.56,2.58,32.65,3.76,2,8.53,2.69,13.32,4.56"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M51.75,370.07s18.84,9.93-.19,9c-29.48-2-36.93-.19-36.93-.19s-9.28,3.06-4.28-7.63-1.48,3.85,2.14,2.8c4.19-1.23,40.8,2,31.59-1.05C53,374.13,51.75,370.07,51.75,370.07Z"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M54.58,323.66"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M55.33,322.32"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M26,323.44"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M115.05,356.65s-2.51,1.86,8.56,2S135,360.32,135,360.32s-1.79-6-.95-6.19c.51-.11-1.26-.53-4.11-.78a51.38,51.38,0,0,0-6.5-.15c-6.13.28-8.65-.46-8.27-1.2S115.05,356.65,115.05,356.65Z"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M115.42,349.67s-.65-2.05,6.8.65,10,3.35,10,3.35"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M134.49,359.81s1-1-1.48,14.23"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M138.05,365.13s.63,3.05-1.7,9.19"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M139.61,374s1.3-5.25.74-7.86"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M16.22,354.93c16.18,5.11,17.11,9.3,17.11,9.3s.47,3.25-.84,10"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M32.17,356.37s1.56-.44-14.26-6.58"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M24.17,352.27a102.64,102.64,0,0,1,11.25-3.95"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M15.52,357.86s3.9.46,6.51-.84"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M33.33,353.2c-1.49.56-4.14,1.49-4.14,1.49"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M35.7,365.86s2,3.18,1.19,8.48"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M37.38,366.88s1.95-.65,1.95,7.53"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M23.42,164.34a14,14,0,0,0-9.25,3.84c.32,0-2.75.42-3.44,1.77a11.52,11.52,0,0,0-2.89.7c-.42.23-2.6-1.21-4.74-.79s.28,1.44.28,1.44a4.52,4.52,0,0,0,2.14,1.16c1.25.88,1.67,1.16,3.11,1s2.93-.47,2.56-.19"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M3.38,171.3a8.12,8.12,0,0,0-1.58-.23c-.14.14-.1-.75-1.63-.38-.33.75,1.25,1.91,1.25,1.91l1.12,1.12a9.3,9.3,0,0,0,2.19,1.72c.93.46.51,1.25,6.56.7"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M10.91,178a9.51,9.51,0,0,1-3.25.61c-1.63.14-1.91-.19-3.26-1a9.36,9.36,0,0,1-3.07-3.58c-.65-1.21-.93-1.91-.51-2"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M1.75,174.83s-.74-.23.56,1.82.65.83,2.42,2,1.63,2.42,4.32,1.45c2.65-.52,4.93-.89,4.75-.89s4.23-2.07,4.09-2,10.3-8,10.49-8,7.25-5,12.63-8.79c0,0,12-8.82,17.24-16.15"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M3.69,170.43s.11-.6-1.15-.14c-.35.28.8.62.8.62C5.14,170.59,5,170.43,3.69,170.43Z"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M1.46,171.26s-1.12-.52-1-.17a.87.87,0,0,0,.7.8S1,171.3,1.46,171.26Z"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M11.33,372.93s6.14-25.12,14.7-49.49"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M51.56,370.37"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M51.56,370.55s-25.07-1.16-18.93-16.09c2.93-7.67,2.79-6.84,10-19s6.14-9.62,6.14-9.62"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M88.21,132.32"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M97.71,149.37c-4.42-7.23-4.89-18.79-6.1-24.07,0,0,3.63,17.11,9.21,25.67"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M112.73,326.23c-.38-12.65-1.49-81.63-1.68-108.84-.1-14.85,0-20.73-10.08-57.93"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M101,159.46c-.12-.41-.22-.81-.34-1.23-1.07-3.13-2-6.07-2.92-8.86"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M97.71,149.37a26.82,26.82,0,0,1,.31,4,21.22,21.22,0,0,0,.69,4.51"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M56.08,322.32c-8.19-1.49-5.77,2.05-5.77,2.05s4,.93,2.32-1-1.48.93-1.86.28.75-2.79,3.45-.09-5.4,2.33-5.4,2.33-5.49.46-6.51-1.59,2.88-.27,1.67-.55-.83.37.1.83,7.72-2.32-4.1-1.67c-7.25.4-6.93,1.39-5.6,2.1"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M21.52,325.87c.12.14,1.25-.11,1.25-.11s-.62.08-1.25.11"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M34.38,325a16.16,16.16,0,0,1,2.81.41c6,1.12-4.46,1.12-4.46,1.12s-9-.93-4.1-2.7,2.14.74,2.14.74,1.12-1.86-.83-.55.83.55,1.11,1.2,5.49-3.9-5-1.76c-7.78,2.32-6.1,2.51-4.51,2.43"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M91.7,145.58c.2,1,5.7,16.66,5.68,18C100,170.88,93,174.79,93,174.79,77.79,189.37,74.12,195,72.45,205.67a46.18,46.18,0,0,0-.09,7.44c.26,8.24-13,49.16-14.4,55.75a22.38,22.38,0,0,1-10,14.58c-5.21,3.53-19.25,15.42-28.11,41.72.95,5.81,6.72-2.56,3.09-.14-1.21.53-1.52.76-1.44.85"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M36.1,325.66a10.3,10.3,0,0,1-1.72-.68"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M36.1,325.66l.35.1-.35-.1"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M34.38,325c-.29.06,1.06.48,1.72.68"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M90.49,106.74c6.42-22.84,22.66,28.58,22.66,28.58,1.25,8,1.16,15.93-.61,20.3-3.09,5.15-7.41,6.1-11.57,3.84"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M87.89,127.16c.94,12.1,5.71,26.42,10.82,30.73"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M98,153.38c7.81,23.25-2.6,60.48-2.6,60.48"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M97.84,152.09s8.75,19.58,5.68,57"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M106.59,212s2.65-27.35-8.93-61.12"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M99.89,210s5.4-41.49-1.87-56.57"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M97.52,84.81a23.15,23.15,0,0,1-2,16.28"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M114,173.9s11.72,35.44,15.49,51.91"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M112.17,173.34s14.93,44.38,17,61.26"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M117.89,181.72s4,11.58,8.79,27.07"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M121,185.9s2,8.1,4.19,17.17"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M115.38,187.72s7.11,31.39,8.23,49.53"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M127,235s-4.61-23.58-10-44.37"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M113.7,190s6.56,25.12,7.26,49.53"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M113.29,191.9s4.74,27.21,4.46,47"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M115.38,243"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M134.68,61.67"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M132.73,65.21"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M146.88,58.6"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M148.91,39.18"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M150.59,27.49s-1-.28-2.28,9.09c-.05.35-.21,1.92-.45,4.16"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M142.66,72.25s-.44.62-1.34,1.69"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M141.32,73.94a97.84,97.84,0,0,1-16,14.75"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M125.15,88.79l.12-.1"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M146.12,58.6c-.25,2.33-.48,4.35-.65,5.73s-.94,3-1.08,4.19c-.36,3-1.35,3.81-2,4.46l-1,1"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M125.27,88.69a30.66,30.66,0,0,0-5.61,11.49"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M127.8,86.08a16.79,16.79,0,0,0-2.53,2.61"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M141.32,73.94"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M146.88,58.6"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M146.12,59.81"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M146,59.11c1.76-4.07,2-15.5,1.91-18.37"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M148.87,38.51c0,.08,0,.31,0,.67"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M152.75,370.07s18.84,9.93-.19,9c-29.48-2-36.93-.19-36.93-.19s-9.28,3.06-4.28-7.63-1.48,3.85,2.14,2.8c4.19-1.23,40.8,2,31.59-1.05C154,374.13,152.75,370.07,152.75,370.07Z"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-1 svelte-1qjlatf"}" d="${"M101.56,124.86s-4.65-2.72-11.44.9c-4.73,2.53-5.68,4.08-12.74,8.19-3.08,1.79-5.51,3-12,6.14A23.89,23.89,0,0,0,57.29,146"}" transform="${"translate(0 0)"}"></path><path class="${"allison-tattoo-5 svelte-1qjlatf"}" d="${"M92,104.88"}" transform="${"translate(0 0)"}"></path></g></svg>`;
});

/* src/routes/index.svelte generated by Svelte v3.24.0 */

const css$2 = {
	code: "@font-face{font-family:'ComputerModern';src:url('./fonts/ComputerModern/Serif/cmunrm.ttf')}#bodycenter.svelte-1pgmu3c{margin:0 auto;padding:10%}@media(max-width: 850px){#bodycenter.svelte-1pgmu3c{padding:3%}}@media(max-width: 640px){#bodycenter.svelte-1pgmu3c{padding:1%}}#inner-wrapper.svelte-1pgmu3c{border-radius:3px;border:1px dotted #eaeaea}#heading.svelte-1pgmu3c{display:grid;grid-template-columns:1fr 4fr 1fr;grid-template-rows:auto;grid-template-areas:\"header-left-margin header-center header-right-margin\";width:100%;background-color:#F4F0EE59;background-image:linear-gradient(90deg, transparent 16.5%, rgba(253, 65, 55, 0.281) 16.85%, rgba(253, 65, 55, 0.192) 16.5%, transparent 16.85%),\n\t\tlinear-gradient(90deg, transparent 82.65%, #FD42371A 83.1%, #FD42371A 82.65%, transparent 83.1%);background-size:100% 1.7em}.header-right-margin.svelte-1pgmu3c{grid-area:header-right-margin;align-self:center;justify-self:center}.header-left-margin.svelte-1pgmu3c{grid-area:header-left-margin;justify-self:center;display:flex;align-items:flex-end;padding:20%}.header-center.svelte-1pgmu3c{grid-area:header-center;justify-self:center;display:flex;align-items:flex-end}#body.svelte-1pgmu3c{background-color:#F4F0EE59;background-image:linear-gradient(90deg, transparent 16.5%, rgba(253, 65, 55, 0.281) 16.85%, rgba(253, 65, 55, 0.192) 16.5%, transparent 16.85%),\n\t\tlinear-gradient(90deg, transparent 82.65%, #FD42371A 83.1%, #FD42371A 82.65%, transparent 83.1%),\n\t\tlinear-gradient(rgba(88, 215, 229, 0.103) .15em, transparent .15em);background-size:100% 3%}#paper.svelte-1pgmu3c{display:grid;grid-template-columns:1fr 4fr 1fr;grid-template-rows:auto;grid-template-areas:\"body-left-margin body body-right-margin\"\n    \"footer-left-margin footer-center footer-right-margin\"}.body-left-margin.svelte-1pgmu3c{grid-area:body-left-margin;margin-top:1.5vw}.line-spaced.svelte-1pgmu3c{font-size:1.38vw}.diagonal-text.svelte-1pgmu3c{transform:rotate(315deg);transform-origin:75% 75%;line-height:0.75em;margin:1em 0;text-align:right}.body.svelte-1pgmu3c{grid-area:body;padding:3.2% 0 5% 0}#signature.svelte-1pgmu3c{font-size:0.5em;text-align:center;color:grey}tr>.svelte-1pgmu3c:nth-child(3){display:none}a.svelte-1pgmu3c,a.svelte-1pgmu3c:link,a.svelte-1pgmu3c:visited{color:black;text-decoration:none;box-shadow:inset 0 -4px 0 #b4e7f8;white-space:pre-line}.allison-tattoo-container.svelte-1pgmu3c{line-height:0;display:grid;grid-template-columns:auto auto auto auto auto auto auto auto;grid-template-rows:auto;grid-template-areas:\"header header header header\"\n    \"main main . sidebar\"\n    \"footer footer footer footer\"}",
	map: "{\"version\":3,\"file\":\"index.svelte\",\"sources\":[\"index.svelte\"],\"sourcesContent\":[\"<script>\\n\\timport SelfPortrait from '../components/SelfPortrait.svelte'\\n\\timport AllisonTattoo from '../components/AllisonTattoo.svelte'\\n</script>\\n\\n<svelte:head>\\n\\t<title>Jess Tucker - Full Stack Web Developer</title>\\n</svelte:head>\\n\\n<div id=\\\"bodycenter\\\">\\n        <div id=\\\"outer-wrapper\\\">\\n          <div id=\\\"inner-wrapper\\\">\\n            <div id=\\\"heading\\\">\\n            <div class=\\\"header-left-margin\\\">\\n              <SelfPortrait />\\n            </div>\\n            <div class=\\\"header-center\\\">\\n            </div>\\n            <div class=\\\"header-right-margin\\\">\\n\\n                  <div id=\\\"signature\\\">\\n                      <div>Jess Tucker</div>\\n\\t\\t\\t\\t\\t\\t<div>The Miles Davis of Solitaire </div>\\n\\t\\t\\t\\t\\t\\t<div>The Kurt Cobain of Web Development</div>\\n                      <div>Web Developer</div>\\n                      <!-- <div>{createDate()}</div> -->\\n                  </div>\\n\\n            </div>\\n              \\n            </div>\\n            <div id=\\\"body\\\">\\n              <div id=\\\"body-content-wrapper\\\">\\n                <div id=\\\"paper\\\">\\n                <div class=\\\"body-left-margin\\\">\\n                  \\n                    <div>\\n                      \\n                    \\n                      <div class=\\\"diagonal-text line-spaced\\\">\\n                        <!-- <Link to=\\\"/resume\\\">cv</Link> -->\\n                      </div>\\n                      <div class=\\\"diagonal-text line-spaced\\\">\\n                        art\\n                      </div>\\n                      <div class=\\\"diagonal-text line-spaced\\\">\\n                        <a href=\\\"https://github.com/jesstucker\\\">code</a>\\n                      </div>\\n                      <div class=\\\"diagonal-text line-spaced\\\">\\n                        <a href=\\\"https://soundcloud.com/jeff-ff\\\">techno</a>\\n                      </div>\\n                      </div>\\n                  \\n                </div>\\n                  <div class=\\\"stuff body\\\">\\n                    <div class=\\\"allison-tattoo-container\\\">\\n                      <AllisonTattoo class={'svg-mirror'}/>\\n                      <AllisonTattoo />   \\n                      <AllisonTattoo class={'svg-mirror'}/>   \\n                      <AllisonTattoo />  \\n                      <AllisonTattoo class={'svg-mirror'}/>   \\n                      <AllisonTattoo />  \\n                      <AllisonTattoo class={'svg-mirror'}/>   \\n                      <AllisonTattoo />   \\n                    </div>\\n                    <div class=\\\"allison-tattoo-container\\\">\\n                      <AllisonTattoo />\\n                      <AllisonTattoo class={'svg-mirror'}/>\\n                      <AllisonTattoo />   \\n                      <AllisonTattoo class={'svg-mirror'}/>   \\n                      <AllisonTattoo />  \\n                      <AllisonTattoo class={'svg-mirror'}/>   \\n                      <AllisonTattoo />  \\n                      <AllisonTattoo class={'svg-mirror'}/>      \\n                    </div>\\n                    <div class=\\\"allison-tattoo-container\\\">\\n                      <AllisonTattoo class={'svg-mirror'}/>\\n                      <AllisonTattoo />   \\n                      <AllisonTattoo class={'svg-mirror'}/>   \\n                      <AllisonTattoo />  \\n                      <AllisonTattoo class={'svg-mirror'}/>   \\n                      <AllisonTattoo />  \\n                      <AllisonTattoo class={'svg-mirror'}/>  \\n                      <AllisonTattoo />    \\n                    </div>\\n                    <div class=\\\"allison-tattoo-container\\\">\\n                      <AllisonTattoo />\\n                      <AllisonTattoo class={'svg-mirror'}/>\\n                      <AllisonTattoo />   \\n                      <AllisonTattoo class={'svg-mirror'}/>   \\n                      <AllisonTattoo />  \\n                      <AllisonTattoo class={'svg-mirror'}/>   \\n                      <AllisonTattoo />  \\n                      <AllisonTattoo class={'svg-mirror'}/>      \\n                    </div>\\n\\n                  </div>\\n              </div>\\n            </div>\\n          </div>\\n        </div>\\n      </div>\\n    </div>\\n\\n<style>\\n\\t@font-face {\\n\\tfont-family: 'ComputerModern';\\n\\tsrc: url('./fonts/ComputerModern/Serif/cmunrm.ttf');\\n}\\nbody{\\n\\tfont-family: 'ComputerModern';\\n}\\n\\n#bodycenter {\\n\\tmargin: 0 auto;\\n\\tpadding: 10%;\\n}\\n@media (max-width: 850px) {\\n\\t#bodycenter {\\n\\t\\tpadding: 3%;\\n\\t} \\n}\\n\\n@media (max-width: 640px) {\\n\\t#bodycenter {\\n\\t\\tpadding: 1%;\\n\\t} \\n}\\n\\n#inner-wrapper{\\n\\tborder-radius: 3px;\\n\\tborder: 1px dotted #eaeaea;\\n}\\n#heading {\\n\\tdisplay: grid;\\n  grid-template-columns: 1fr 4fr 1fr;\\n  grid-template-rows: auto;\\n  grid-template-areas: \\n    \\\"header-left-margin header-center header-right-margin\\\";\\n\\twidth: 100%;\\n\\tbackground-color: #F4F0EE59;\\n\\tbackground-image: \\n\\t\\tlinear-gradient(90deg, transparent 16.5%, rgba(253, 65, 55, 0.281) 16.85%, rgba(253, 65, 55, 0.192) 16.5%, transparent 16.85%),\\n\\t\\tlinear-gradient(90deg, transparent 82.65%, #FD42371A 83.1%, #FD42371A 82.65%, transparent 83.1%);\\n\\t\\t/*linear-gradient(#58D7E540 .2em, transparent .2em);*/\\n\\t\\tbackground-size: 100% 1.7em;\\n}\\n\\n.header-right-margin {\\n\\tgrid-area: header-right-margin;\\n\\talign-self: center;\\n\\tjustify-self: center;\\n}\\n\\n.header-left-margin {\\n\\tgrid-area: header-left-margin;\\n\\tjustify-self: center;\\n\\tdisplay: flex;\\n\\talign-items: flex-end;\\n\\tpadding: 20%;\\n\\n}\\n\\n.header-center {\\n\\tgrid-area: header-center;\\n\\tjustify-self: center;\\n\\tdisplay: flex;\\n\\talign-items: flex-end;\\n}\\n\\n#body {\\n\\tbackground-color: #F4F0EE59; \\n\\tbackground-image: \\n\\t\\tlinear-gradient(90deg, transparent 16.5%, rgba(253, 65, 55, 0.281) 16.85%, rgba(253, 65, 55, 0.192) 16.5%, transparent 16.85%),\\n\\t\\tlinear-gradient(90deg, transparent 82.65%, #FD42371A 83.1%, #FD42371A 82.65%, transparent 83.1%),\\n\\t\\tlinear-gradient(rgba(88, 215, 229, 0.103) .15em, transparent .15em);\\n\\t\\tbackground-size: 100% 3%;\\n\\n}\\n\\n#paper{\\n\\tdisplay: grid;\\n  grid-template-columns: 1fr 4fr 1fr;\\n  grid-template-rows: auto;\\n  grid-template-areas: \\n    \\\"body-left-margin body body-right-margin\\\"\\n    \\\"footer-left-margin footer-center footer-right-margin\\\";\\n}\\n\\n.body-left-margin{\\n\\tgrid-area: body-left-margin;\\n\\tmargin-top: 1.5vw;\\n}\\n.enumerated {\\n\\tline-height: 1.437em;\\n\\tmargin: 0.03em 0.3em 0.03em 0;\\n\\ttext-align: right;\\n}\\n\\n.line-spaced {\\n\\tfont-size: 1.38vw;\\n}\\n.diagonal-text {\\n\\ttransform: rotate(315deg);\\n\\ttransform-origin: 75% 75%;\\n\\tline-height: 0.75em;\\n\\tmargin: 1em 0;\\n\\ttext-align: right;\\n}\\n.body-right-margin{\\n\\tgrid-area: body-right-margin;\\n\\tbackground-color: pink;\\n}\\n.body{\\n\\tgrid-area: body;\\n\\tpadding: 3.2% 0 5% 0;\\n}\\n\\n#signature {\\n\\tfont-size: 0.5em;\\n\\ttext-align: center;\\n\\tcolor: grey;\\n}\\n\\n\\n#selfportrait {\\n  \\t/*width:100%;*/\\n  \\ttext-align: middle;\\n}\\n#selfportrait-object {\\n  \\twidth:100%;\\n}\\n\\n\\n#lunch {\\n\\tdisplay:block;\\n/*\\tfloat:right;\\n\\twidth: 37%;*/\\n\\tclear: both;\\n}\\n\\n #lunch > a {\\n \\tbox-shadow: none;\\n }\\n\\n\\n#rightside {\\n\\tfloat: right;\\n\\twidth:60%;\\n}\\n\\nul {\\n\\tmargin:0; \\n\\tpadding:0; \\n\\tlist-style:none; \\n}\\n\\ntable {\\n\\tborder-width: 1px;\\n\\tborder-style: solid;\\n\\tborder-color: rgba(0, 0, 0, 0.3);\\n}\\nth {\\n\\tcursor:pointer;\\n\\ttext-align: left;\\n\\tborder-bottom: 1px solid rgba(0, 0, 0, 0.3);\\n}\\n\\ntd {\\n\\tborder-bottom: 1px solid rgba(0, 0, 0, 0.05);\\t\\n}\\ntr > *:nth-child(3) {\\n    display: none;\\n}\\n\\n\\n\\n\\n\\n\\n\\n\\n\\na, a:link, a:visited {\\n\\tcolor:black;\\n\\ttext-decoration: none;\\n/*\\tborder-bottom: 3px solid #b4e7f8;*/\\n\\tbox-shadow: inset 0 -4px 0 #b4e7f8;\\n\\twhite-space: pre-line;\\n \\n}\\n\\n#skills {\\n\\twidth: 100%;\\n\\tdisplay: inline-table;\\n}\\n#skills tr {\\n\\tline-height: 15%;\\n}\\n\\n\\n/* .stuff{\\n\\tline-height: 1.7em;\\n} */\\n\\n.index-card-container{\\n\\tposition: relative;\\n\\twidth: 100%;\\n}\\n\\n.index-card-container:before{\\n\\tcontent: \\\"\\\";\\n\\tdisplay: block;\\n\\tpadding-top: 60%; \\t/* initial ratio of 1:1*/\\n}\\n\\n.index-card { \\n\\tborder: 1px dotted lightgrey;\\n\\tposition: absolute;\\n\\ttop: 0;\\n\\tleft: 0;\\n\\tbottom: 0;\\n\\tright: 0;\\n\\toverflow: hidden;\\n}\\n.index-card-content{\\n\\tposition: relative;\\n\\theight: 100%;\\n\\tfont-size: 100%;\\n}\\n.index-card-header{\\n\\t/*position: relative;*/\\n\\tbackground-color: #FBFAF9F0;\\n\\tbackground-image: \\n\\t\\tlinear-gradient(0deg, transparent 64%, #FCA9A4F0 67%, #FCA9A4F0 67%, transparent 64%);\\n\\t\\tbackground-size: 100% 200%;\\n\\theight:25%;\\n\\tfont-size: 1vw\\n}\\n.index-card-body{\\n\\t/*position: relative;*/\\n\\tbackground-color: #FBFAF9F0;\\n\\tbackground-image: \\n\\t\\tlinear-gradient(#58D7E5F0 2%, transparent 15%);\\n\\t\\tbackground-size: 100% 11.5%;\\n\\theight:75%;\\n\\tfont-size: .5vw;\\n\\tline-height: .70em;\\n}\\n.tiny-table{\\n\\tdisplay: inline-block;\\n\\t/*width: 25%;*/\\n\\tmin-height: 33%;\\n\\tmin-width: 25%;\\n\\tmax-width: 30%;\\n\\tborder: 1px dotted lightgrey;\\n\\t/*height: 43%;*/\\n\\toverflow: hidden;\\n\\tvertical-align: top;\\n}\\n\\n.resume_container{\\n\\tdisplay: grid;\\n  grid-template-columns: auto auto auto auto;\\n  grid-template-rows: auto;\\n  grid-template-areas: \\n    \\\"header header header header\\\"\\n    \\\"main main . sidebar\\\"\\n    \\\"footer footer footer footer\\\";\\n}\\n.resume_item {\\n\\tgrid-column-start: 10px;\\n  grid-column-end: 10px;\\n  grid-row-start: 10px;\\n  grid-row-end: 10px;\\n}\\n.allison-tattoo-container{\\n\\tline-height: 0;\\n\\tdisplay: grid;\\n  grid-template-columns: auto auto auto auto auto auto auto auto;\\n  grid-template-rows: auto;\\n  grid-template-areas: \\n    \\\"header header header header\\\"\\n    \\\"main main . sidebar\\\"\\n    \\\"footer footer footer footer\\\";\\n}\\n\\n\\n.svg-mirror {\\n\\ttransform: scale(-1,1);\\n}\\n\\n\\n.lady-hand {\\n\\tanimation: shuffle .5s linear infinite;\\t\\n}\\n</style>\"],\"names\":[],\"mappings\":\"AAyGC,UAAU,AAAC,CAAC,AACZ,WAAW,CAAE,gBAAgB,CAC7B,GAAG,CAAE,IAAI,yCAAyC,CAAC,AACpD,CAAC,AAKD,WAAW,eAAC,CAAC,AACZ,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,OAAO,CAAE,GAAG,AACb,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAC1B,WAAW,eAAC,CAAC,AACZ,OAAO,CAAE,EAAE,AACZ,CAAC,AACF,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAC1B,WAAW,eAAC,CAAC,AACZ,OAAO,CAAE,EAAE,AACZ,CAAC,AACF,CAAC,AAED,6BAAc,CAAC,AACd,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,GAAG,CAAC,MAAM,CAAC,OAAO,AAC3B,CAAC,AACD,QAAQ,eAAC,CAAC,AACT,OAAO,CAAE,IAAI,CACZ,qBAAqB,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAClC,kBAAkB,CAAE,IAAI,CACxB,mBAAmB,CACjB,sDAAsD,CACzD,KAAK,CAAE,IAAI,CACX,gBAAgB,CAAE,SAAS,CAC3B,gBAAgB,CACf,gBAAgB,KAAK,CAAC,CAAC,WAAW,CAAC,KAAK,CAAC,CAAC,KAAK,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,KAAK,CAAC,CAAC,MAAM,CAAC,CAAC,KAAK,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,KAAK,CAAC,CAAC,KAAK,CAAC,CAAC,WAAW,CAAC,MAAM,CAAC,CAAC;EAC/H,gBAAgB,KAAK,CAAC,CAAC,WAAW,CAAC,MAAM,CAAC,CAAC,SAAS,CAAC,KAAK,CAAC,CAAC,SAAS,CAAC,MAAM,CAAC,CAAC,WAAW,CAAC,KAAK,CAAC,CAEhG,eAAe,CAAE,IAAI,CAAC,KAAK,AAC7B,CAAC,AAED,oBAAoB,eAAC,CAAC,AACrB,SAAS,CAAE,mBAAmB,CAC9B,UAAU,CAAE,MAAM,CAClB,YAAY,CAAE,MAAM,AACrB,CAAC,AAED,mBAAmB,eAAC,CAAC,AACpB,SAAS,CAAE,kBAAkB,CAC7B,YAAY,CAAE,MAAM,CACpB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,QAAQ,CACrB,OAAO,CAAE,GAAG,AAEb,CAAC,AAED,cAAc,eAAC,CAAC,AACf,SAAS,CAAE,aAAa,CACxB,YAAY,CAAE,MAAM,CACpB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,QAAQ,AACtB,CAAC,AAED,KAAK,eAAC,CAAC,AACN,gBAAgB,CAAE,SAAS,CAC3B,gBAAgB,CACf,gBAAgB,KAAK,CAAC,CAAC,WAAW,CAAC,KAAK,CAAC,CAAC,KAAK,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,KAAK,CAAC,CAAC,MAAM,CAAC,CAAC,KAAK,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,KAAK,CAAC,CAAC,KAAK,CAAC,CAAC,WAAW,CAAC,MAAM,CAAC,CAAC;EAC/H,gBAAgB,KAAK,CAAC,CAAC,WAAW,CAAC,MAAM,CAAC,CAAC,SAAS,CAAC,KAAK,CAAC,CAAC,SAAS,CAAC,MAAM,CAAC,CAAC,WAAW,CAAC,KAAK,CAAC,CAAC;EACjG,gBAAgB,KAAK,EAAE,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,KAAK,CAAC,CAAC,KAAK,CAAC,CAAC,WAAW,CAAC,KAAK,CAAC,CACnE,eAAe,CAAE,IAAI,CAAC,EAAE,AAE1B,CAAC,AAED,qBAAM,CAAC,AACN,OAAO,CAAE,IAAI,CACZ,qBAAqB,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAClC,kBAAkB,CAAE,IAAI,CACxB,mBAAmB,CACjB,yCAAyC;IACzC,sDAAsD,AAC1D,CAAC,AAED,gCAAiB,CAAC,AACjB,SAAS,CAAE,gBAAgB,CAC3B,UAAU,CAAE,KAAK,AAClB,CAAC,AAOD,YAAY,eAAC,CAAC,AACb,SAAS,CAAE,MAAM,AAClB,CAAC,AACD,cAAc,eAAC,CAAC,AACf,SAAS,CAAE,OAAO,MAAM,CAAC,CACzB,gBAAgB,CAAE,GAAG,CAAC,GAAG,CACzB,WAAW,CAAE,MAAM,CACnB,MAAM,CAAE,GAAG,CAAC,CAAC,CACb,UAAU,CAAE,KAAK,AAClB,CAAC,AAKD,oBAAK,CAAC,AACL,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,AACrB,CAAC,AAED,UAAU,eAAC,CAAC,AACX,SAAS,CAAE,KAAK,CAChB,UAAU,CAAE,MAAM,CAClB,KAAK,CAAE,IAAI,AACZ,CAAC,AAiDD,EAAE,CAAG,eAAC,WAAW,CAAC,CAAC,AAAC,CAAC,AACjB,OAAO,CAAE,IAAI,AACjB,CAAC,AAUD,gBAAC,CAAE,gBAAC,KAAK,CAAE,gBAAC,QAAQ,AAAC,CAAC,AACrB,MAAM,KAAK,CACX,eAAe,CAAE,IAAI,CAErB,UAAU,CAAE,KAAK,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,OAAO,CAClC,WAAW,CAAE,QAAQ,AAEtB,CAAC,AAsFD,wCAAyB,CAAC,AACzB,WAAW,CAAE,CAAC,CACd,OAAO,CAAE,IAAI,CACZ,qBAAqB,CAAE,IAAI,CAAC,IAAI,CAAC,IAAI,CAAC,IAAI,CAAC,IAAI,CAAC,IAAI,CAAC,IAAI,CAAC,IAAI,CAC9D,kBAAkB,CAAE,IAAI,CACxB,mBAAmB,CACjB,6BAA6B;IAC7B,qBAAqB;IACrB,6BAA6B,AACjC,CAAC\"}"
};

const Routes = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	$$result.css.add(css$2);

	return `${($$result.head += `${($$result.title = `<title>Jess Tucker - Full Stack Web Developer</title>`, "")}`, "")}

<div id="${"bodycenter"}" class="${"svelte-1pgmu3c"}"><div id="${"outer-wrapper"}"><div id="${"inner-wrapper"}" class="${"svelte-1pgmu3c"}"><div id="${"heading"}" class="${"svelte-1pgmu3c"}"><div class="${"header-left-margin svelte-1pgmu3c"}">${validate_component(SelfPortrait, "SelfPortrait").$$render($$result, {}, {}, {})}</div>
            <div class="${"header-center svelte-1pgmu3c"}"></div>
            <div class="${"header-right-margin svelte-1pgmu3c"}"><div id="${"signature"}" class="${"svelte-1pgmu3c"}"><div>Jess Tucker</div>
						<div>The Miles Davis of Solitaire </div>
						<div>The Kurt Cobain of Web Development</div>
                      <div>Web Developer</div>
                      </div></div></div>
            <div id="${"body"}" class="${"svelte-1pgmu3c"}"><div id="${"body-content-wrapper"}"><div id="${"paper"}" class="${"svelte-1pgmu3c"}"><div class="${"body-left-margin svelte-1pgmu3c"}"><div><div class="${"diagonal-text line-spaced svelte-1pgmu3c"}"></div>
                      <div class="${"diagonal-text line-spaced svelte-1pgmu3c"}">art
                      </div>
                      <div class="${"diagonal-text line-spaced svelte-1pgmu3c"}"><a href="${"https://github.com/jesstucker"}" class="${"svelte-1pgmu3c"}">code</a></div>
                      <div class="${"diagonal-text line-spaced svelte-1pgmu3c"}"><a href="${"https://soundcloud.com/jeff-ff"}" class="${"svelte-1pgmu3c"}">techno</a></div></div></div>
                  <div class="${"stuff body svelte-1pgmu3c"}"><div class="${"allison-tattoo-container svelte-1pgmu3c"}">${validate_component(AllisonTattoo, "AllisonTattoo").$$render($$result, { class: "svg-mirror" }, {}, {})}
                      ${validate_component(AllisonTattoo, "AllisonTattoo").$$render($$result, {}, {}, {})}   
                      ${validate_component(AllisonTattoo, "AllisonTattoo").$$render($$result, { class: "svg-mirror" }, {}, {})}   
                      ${validate_component(AllisonTattoo, "AllisonTattoo").$$render($$result, {}, {}, {})}  
                      ${validate_component(AllisonTattoo, "AllisonTattoo").$$render($$result, { class: "svg-mirror" }, {}, {})}   
                      ${validate_component(AllisonTattoo, "AllisonTattoo").$$render($$result, {}, {}, {})}  
                      ${validate_component(AllisonTattoo, "AllisonTattoo").$$render($$result, { class: "svg-mirror" }, {}, {})}   
                      ${validate_component(AllisonTattoo, "AllisonTattoo").$$render($$result, {}, {}, {})}</div>
                    <div class="${"allison-tattoo-container svelte-1pgmu3c"}">${validate_component(AllisonTattoo, "AllisonTattoo").$$render($$result, {}, {}, {})}
                      ${validate_component(AllisonTattoo, "AllisonTattoo").$$render($$result, { class: "svg-mirror" }, {}, {})}
                      ${validate_component(AllisonTattoo, "AllisonTattoo").$$render($$result, {}, {}, {})}   
                      ${validate_component(AllisonTattoo, "AllisonTattoo").$$render($$result, { class: "svg-mirror" }, {}, {})}   
                      ${validate_component(AllisonTattoo, "AllisonTattoo").$$render($$result, {}, {}, {})}  
                      ${validate_component(AllisonTattoo, "AllisonTattoo").$$render($$result, { class: "svg-mirror" }, {}, {})}   
                      ${validate_component(AllisonTattoo, "AllisonTattoo").$$render($$result, {}, {}, {})}  
                      ${validate_component(AllisonTattoo, "AllisonTattoo").$$render($$result, { class: "svg-mirror" }, {}, {})}</div>
                    <div class="${"allison-tattoo-container svelte-1pgmu3c"}">${validate_component(AllisonTattoo, "AllisonTattoo").$$render($$result, { class: "svg-mirror" }, {}, {})}
                      ${validate_component(AllisonTattoo, "AllisonTattoo").$$render($$result, {}, {}, {})}   
                      ${validate_component(AllisonTattoo, "AllisonTattoo").$$render($$result, { class: "svg-mirror" }, {}, {})}   
                      ${validate_component(AllisonTattoo, "AllisonTattoo").$$render($$result, {}, {}, {})}  
                      ${validate_component(AllisonTattoo, "AllisonTattoo").$$render($$result, { class: "svg-mirror" }, {}, {})}   
                      ${validate_component(AllisonTattoo, "AllisonTattoo").$$render($$result, {}, {}, {})}  
                      ${validate_component(AllisonTattoo, "AllisonTattoo").$$render($$result, { class: "svg-mirror" }, {}, {})}  
                      ${validate_component(AllisonTattoo, "AllisonTattoo").$$render($$result, {}, {}, {})}</div>
                    <div class="${"allison-tattoo-container svelte-1pgmu3c"}">${validate_component(AllisonTattoo, "AllisonTattoo").$$render($$result, {}, {}, {})}
                      ${validate_component(AllisonTattoo, "AllisonTattoo").$$render($$result, { class: "svg-mirror" }, {}, {})}
                      ${validate_component(AllisonTattoo, "AllisonTattoo").$$render($$result, {}, {}, {})}   
                      ${validate_component(AllisonTattoo, "AllisonTattoo").$$render($$result, { class: "svg-mirror" }, {}, {})}   
                      ${validate_component(AllisonTattoo, "AllisonTattoo").$$render($$result, {}, {}, {})}  
                      ${validate_component(AllisonTattoo, "AllisonTattoo").$$render($$result, { class: "svg-mirror" }, {}, {})}   
                      ${validate_component(AllisonTattoo, "AllisonTattoo").$$render($$result, {}, {}, {})}  
                      ${validate_component(AllisonTattoo, "AllisonTattoo").$$render($$result, { class: "svg-mirror" }, {}, {})}</div></div></div></div></div></div></div>
    </div>`;
});

/* src/routes/about.svelte generated by Svelte v3.24.0 */

const About = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	return `${($$result.head += `${($$result.title = `<title>About</title>`, "")}`, "")}

<h1>About this site</h1>

<p>This is the &#39;about&#39; page. There&#39;s not much here.</p>`;
});

/* src/routes/blog/index.svelte generated by Svelte v3.24.0 */

const css$3 = {
	code: "ul.svelte-1frg2tf{margin:0 0 1em 0;line-height:1.5}",
	map: "{\"version\":3,\"file\":\"index.svelte\",\"sources\":[\"index.svelte\"],\"sourcesContent\":[\"<script context=\\\"module\\\">\\n\\texport function preload({ params, query }) {\\n\\t\\treturn this.fetch(`blog.json`).then(r => r.json()).then(posts => {\\n\\t\\t\\treturn { posts };\\n\\t\\t});\\n\\t}\\n</script>\\n\\n<script>\\n\\texport let posts;\\n</script>\\n\\n<style>\\n\\tul {\\n\\t\\tmargin: 0 0 1em 0;\\n\\t\\tline-height: 1.5;\\n\\t}\\n</style>\\n\\n<svelte:head>\\n\\t<title>Blog</title>\\n</svelte:head>\\n\\n<h1>Recent posts</h1>\\n\\n<ul>\\n\\t{#each posts as post}\\n\\t\\t<!-- we're using the non-standard `rel=prefetch` attribute to\\n\\t\\t\\t\\ttell Sapper to load the data for the page as soon as\\n\\t\\t\\t\\tthe user hovers over the link or taps it, instead of\\n\\t\\t\\t\\twaiting for the 'click' event -->\\n\\t\\t<li><a rel='prefetch' href='blog/{post.slug}'>{post.title}</a></li>\\n\\t{/each}\\n</ul>\"],\"names\":[],\"mappings\":\"AAaC,EAAE,eAAC,CAAC,AACH,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CACjB,WAAW,CAAE,GAAG,AACjB,CAAC\"}"
};

function preload({ params, query }) {
	return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
		return { posts };
	});
}

const Blog = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { posts } = $$props;
	if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0) $$bindings.posts(posts);
	$$result.css.add(css$3);

	return `${($$result.head += `${($$result.title = `<title>Blog</title>`, "")}`, "")}

<h1>Recent posts</h1>

<ul class="${"svelte-1frg2tf"}">${each(posts, post => `
		<li><a rel="${"prefetch"}" href="${"blog/" + escape(post.slug)}">${escape(post.title)}</a></li>`)}</ul>`;
});

/* src/routes/blog/[slug].svelte generated by Svelte v3.24.0 */

const css$4 = {
	code: ".content.svelte-gnxal1 h2{font-size:1.4em;font-weight:500}.content.svelte-gnxal1 pre{background-color:#f9f9f9;box-shadow:inset 1px 1px 5px rgba(0,0,0,0.05);padding:0.5em;border-radius:2px;overflow-x:auto}.content.svelte-gnxal1 pre code{background-color:transparent;padding:0}.content.svelte-gnxal1 ul{line-height:1.5}.content.svelte-gnxal1 li{margin:0 0 0.5em 0}",
	map: "{\"version\":3,\"file\":\"[slug].svelte\",\"sources\":[\"[slug].svelte\"],\"sourcesContent\":[\"<script context=\\\"module\\\">\\n\\texport async function preload({ params, query }) {\\n\\t\\t// the `slug` parameter is available because\\n\\t\\t// this file is called [slug].svelte\\n\\t\\tconst res = await this.fetch(`blog/${params.slug}.json`);\\n\\t\\tconst data = await res.json();\\n\\n\\t\\tif (res.status === 200) {\\n\\t\\t\\treturn { post: data };\\n\\t\\t} else {\\n\\t\\t\\tthis.error(res.status, data.message);\\n\\t\\t}\\n\\t}\\n</script>\\n\\n<script>\\n\\texport let post;\\n</script>\\n\\n<style>\\n\\t/*\\n\\t\\tBy default, CSS is locally scoped to the component,\\n\\t\\tand any unused styles are dead-code-eliminated.\\n\\t\\tIn this page, Svelte can't know which elements are\\n\\t\\tgoing to appear inside the {{{post.html}}} block,\\n\\t\\tso we have to use the :global(...) modifier to target\\n\\t\\tall elements inside .content\\n\\t*/\\n\\t.content :global(h2) {\\n\\t\\tfont-size: 1.4em;\\n\\t\\tfont-weight: 500;\\n\\t}\\n\\n\\t.content :global(pre) {\\n\\t\\tbackground-color: #f9f9f9;\\n\\t\\tbox-shadow: inset 1px 1px 5px rgba(0,0,0,0.05);\\n\\t\\tpadding: 0.5em;\\n\\t\\tborder-radius: 2px;\\n\\t\\toverflow-x: auto;\\n\\t}\\n\\n\\t.content :global(pre) :global(code) {\\n\\t\\tbackground-color: transparent;\\n\\t\\tpadding: 0;\\n\\t}\\n\\n\\t.content :global(ul) {\\n\\t\\tline-height: 1.5;\\n\\t}\\n\\n\\t.content :global(li) {\\n\\t\\tmargin: 0 0 0.5em 0;\\n\\t}\\n</style>\\n\\n<svelte:head>\\n\\t<title>{post.title}</title>\\n</svelte:head>\\n\\n<h1>{post.title}</h1>\\n\\n<div class='content'>\\n\\t{@html post.html}\\n</div>\\n\"],\"names\":[],\"mappings\":\"AA4BC,sBAAQ,CAAC,AAAQ,EAAE,AAAE,CAAC,AACrB,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,GAAG,AACjB,CAAC,AAED,sBAAQ,CAAC,AAAQ,GAAG,AAAE,CAAC,AACtB,gBAAgB,CAAE,OAAO,CACzB,UAAU,CAAE,KAAK,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAC9C,OAAO,CAAE,KAAK,CACd,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,IAAI,AACjB,CAAC,AAED,sBAAQ,CAAC,AAAQ,GAAG,AAAC,CAAC,AAAQ,IAAI,AAAE,CAAC,AACpC,gBAAgB,CAAE,WAAW,CAC7B,OAAO,CAAE,CAAC,AACX,CAAC,AAED,sBAAQ,CAAC,AAAQ,EAAE,AAAE,CAAC,AACrB,WAAW,CAAE,GAAG,AACjB,CAAC,AAED,sBAAQ,CAAC,AAAQ,EAAE,AAAE,CAAC,AACrB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,AACpB,CAAC\"}"
};

async function preload$1({ params, query }) {
	// the `slug` parameter is available because
	// this file is called [slug].svelte
	const res = await this.fetch(`blog/${params.slug}.json`);

	const data = await res.json();

	if (res.status === 200) {
		return { post: data };
	} else {
		this.error(res.status, data.message);
	}
}

const U5Bslugu5D = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { post } = $$props;
	if ($$props.post === void 0 && $$bindings.post && post !== void 0) $$bindings.post(post);
	$$result.css.add(css$4);

	return `${($$result.head += `${($$result.title = `<title>${escape(post.title)}</title>`, "")}`, "")}

<h1>${escape(post.title)}</h1>

<div class="${"content svelte-gnxal1"}">${post.html}</div>`;
});

/* src/components/Nav.svelte generated by Svelte v3.24.0 */

const css$5 = {
	code: "nav.svelte-1dbd5up{border-bottom:1px solid rgba(255,62,0,0.1);font-weight:300;padding:0 1em}ul.svelte-1dbd5up{margin:0;padding:0}ul.svelte-1dbd5up::after{content:'';display:block;clear:both}li.svelte-1dbd5up{display:block;float:left}[aria-current].svelte-1dbd5up{position:relative;display:inline-block}[aria-current].svelte-1dbd5up::after{position:absolute;content:'';width:calc(100% - 1em);height:2px;background-color:rgb(255,62,0);display:block;bottom:-1px}a.svelte-1dbd5up{text-decoration:none;padding:1em 0.5em;display:block}",
	map: "{\"version\":3,\"file\":\"Nav.svelte\",\"sources\":[\"Nav.svelte\"],\"sourcesContent\":[\"<script>\\n\\texport let segment;\\n</script>\\n\\n<style>\\n\\tnav {\\n\\t\\tborder-bottom: 1px solid rgba(255,62,0,0.1);\\n\\t\\tfont-weight: 300;\\n\\t\\tpadding: 0 1em;\\n\\t}\\n\\n\\tul {\\n\\t\\tmargin: 0;\\n\\t\\tpadding: 0;\\n\\t}\\n\\n\\t/* clearfix */\\n\\tul::after {\\n\\t\\tcontent: '';\\n\\t\\tdisplay: block;\\n\\t\\tclear: both;\\n\\t}\\n\\n\\tli {\\n\\t\\tdisplay: block;\\n\\t\\tfloat: left;\\n\\t}\\n\\n\\t[aria-current] {\\n\\t\\tposition: relative;\\n\\t\\tdisplay: inline-block;\\n\\t}\\n\\n\\t[aria-current]::after {\\n\\t\\tposition: absolute;\\n\\t\\tcontent: '';\\n\\t\\twidth: calc(100% - 1em);\\n\\t\\theight: 2px;\\n\\t\\tbackground-color: rgb(255,62,0);\\n\\t\\tdisplay: block;\\n\\t\\tbottom: -1px;\\n\\t}\\n\\n\\ta {\\n\\t\\ttext-decoration: none;\\n\\t\\tpadding: 1em 0.5em;\\n\\t\\tdisplay: block;\\n\\t}\\n</style>\\n\\n<nav>\\n\\t<ul>\\n\\t\\t<li><a aria-current=\\\"{segment === undefined ? 'page' : undefined}\\\" href=\\\".\\\">home</a></li>\\n\\t\\t<li><a aria-current=\\\"{segment === 'about' ? 'page' : undefined}\\\" href=\\\"about\\\">about</a></li>\\n\\n\\t\\t<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches\\n\\t\\t     the blog data when we hover over the link or tap it on a touchscreen -->\\n\\t\\t<li><a rel=prefetch aria-current=\\\"{segment === 'blog' ? 'page' : undefined}\\\" href=\\\"blog\\\">blog</a></li>\\n\\t</ul>\\n</nav>\\n\"],\"names\":[],\"mappings\":\"AAKC,GAAG,eAAC,CAAC,AACJ,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,GAAG,CAAC,EAAE,CAAC,CAAC,CAAC,GAAG,CAAC,CAC3C,WAAW,CAAE,GAAG,CAChB,OAAO,CAAE,CAAC,CAAC,GAAG,AACf,CAAC,AAED,EAAE,eAAC,CAAC,AACH,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,AACX,CAAC,AAGD,iBAAE,OAAO,AAAC,CAAC,AACV,OAAO,CAAE,EAAE,CACX,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,IAAI,AACZ,CAAC,AAED,EAAE,eAAC,CAAC,AACH,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,IAAI,AACZ,CAAC,AAED,CAAC,YAAY,CAAC,eAAC,CAAC,AACf,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,YAAY,AACtB,CAAC,AAED,CAAC,YAAY,gBAAC,OAAO,AAAC,CAAC,AACtB,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,EAAE,CACX,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,GAAG,CAAC,CACvB,MAAM,CAAE,GAAG,CACX,gBAAgB,CAAE,IAAI,GAAG,CAAC,EAAE,CAAC,CAAC,CAAC,CAC/B,OAAO,CAAE,KAAK,CACd,MAAM,CAAE,IAAI,AACb,CAAC,AAED,CAAC,eAAC,CAAC,AACF,eAAe,CAAE,IAAI,CACrB,OAAO,CAAE,GAAG,CAAC,KAAK,CAClB,OAAO,CAAE,KAAK,AACf,CAAC\"}"
};

const Nav = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { segment } = $$props;
	if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0) $$bindings.segment(segment);
	$$result.css.add(css$5);

	return `<nav class="${"svelte-1dbd5up"}"><ul class="${"svelte-1dbd5up"}"><li class="${"svelte-1dbd5up"}"><a${add_attribute("aria-current", segment === undefined ? "page" : undefined, 0)} href="${"."}" class="${"svelte-1dbd5up"}">home</a></li>
		<li class="${"svelte-1dbd5up"}"><a${add_attribute("aria-current", segment === "about" ? "page" : undefined, 0)} href="${"about"}" class="${"svelte-1dbd5up"}">about</a></li>

		
		<li class="${"svelte-1dbd5up"}"><a rel="${"prefetch"}"${add_attribute("aria-current", segment === "blog" ? "page" : undefined, 0)} href="${"blog"}" class="${"svelte-1dbd5up"}">blog</a></li></ul></nav>`;
});

/* src/routes/_layout.svelte generated by Svelte v3.24.0 */

const css$6 = {
	code: "main.svelte-1uhnsl8{position:relative;max-width:56em;background-color:white;padding:2em;margin:0 auto;box-sizing:border-box}",
	map: "{\"version\":3,\"file\":\"_layout.svelte\",\"sources\":[\"_layout.svelte\"],\"sourcesContent\":[\"<script>\\n\\timport Nav from '../components/Nav.svelte';\\n\\n\\texport let segment;\\n</script>\\n\\n<style>\\n\\tmain {\\n\\t\\tposition: relative;\\n\\t\\tmax-width: 56em;\\n\\t\\tbackground-color: white;\\n\\t\\tpadding: 2em;\\n\\t\\tmargin: 0 auto;\\n\\t\\tbox-sizing: border-box;\\n\\t}\\n</style>\\n\\n<Nav {segment}/>\\n\\n<main>\\n\\t<slot></slot>\\n</main>\"],\"names\":[],\"mappings\":\"AAOC,IAAI,eAAC,CAAC,AACL,QAAQ,CAAE,QAAQ,CAClB,SAAS,CAAE,IAAI,CACf,gBAAgB,CAAE,KAAK,CACvB,OAAO,CAAE,GAAG,CACZ,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,UAAU,CAAE,UAAU,AACvB,CAAC\"}"
};

const Layout = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { segment } = $$props;
	if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0) $$bindings.segment(segment);
	$$result.css.add(css$6);

	return `${validate_component(Nav, "Nav").$$render($$result, { segment }, {}, {})}

<main class="${"svelte-1uhnsl8"}">${$$slots.default ? $$slots.default({}) : ``}</main>`;
});

/* src/routes/_error.svelte generated by Svelte v3.24.0 */

const css$7 = {
	code: "h1.svelte-8od9u6,p.svelte-8od9u6{margin:0 auto}h1.svelte-8od9u6{font-size:2.8em;font-weight:700;margin:0 0 0.5em 0}p.svelte-8od9u6{margin:1em auto}@media(min-width: 480px){h1.svelte-8od9u6{font-size:4em}}",
	map: "{\"version\":3,\"file\":\"_error.svelte\",\"sources\":[\"_error.svelte\"],\"sourcesContent\":[\"<script>\\n\\texport let status;\\n\\texport let error;\\n\\n\\tconst dev = undefined === 'development';\\n</script>\\n\\n<style>\\n\\th1, p {\\n\\t\\tmargin: 0 auto;\\n\\t}\\n\\n\\th1 {\\n\\t\\tfont-size: 2.8em;\\n\\t\\tfont-weight: 700;\\n\\t\\tmargin: 0 0 0.5em 0;\\n\\t}\\n\\n\\tp {\\n\\t\\tmargin: 1em auto;\\n\\t}\\n\\n\\t@media (min-width: 480px) {\\n\\t\\th1 {\\n\\t\\t\\tfont-size: 4em;\\n\\t\\t}\\n\\t}\\n</style>\\n\\n<svelte:head>\\n\\t<title>{status}</title>\\n</svelte:head>\\n\\n<h1>{status}</h1>\\n\\n<p>{error.message}</p>\\n\\n{#if dev && error.stack}\\n\\t<pre>{error.stack}</pre>\\n{/if}\\n\"],\"names\":[],\"mappings\":\"AAQC,gBAAE,CAAE,CAAC,cAAC,CAAC,AACN,MAAM,CAAE,CAAC,CAAC,IAAI,AACf,CAAC,AAED,EAAE,cAAC,CAAC,AACH,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,AACpB,CAAC,AAED,CAAC,cAAC,CAAC,AACF,MAAM,CAAE,GAAG,CAAC,IAAI,AACjB,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAC1B,EAAE,cAAC,CAAC,AACH,SAAS,CAAE,GAAG,AACf,CAAC,AACF,CAAC\"}"
};

const Error$1 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { status } = $$props;
	let { error } = $$props;
	if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
	if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
	$$result.css.add(css$7);

	return `${($$result.head += `${($$result.title = `<title>${escape(status)}</title>`, "")}`, "")}

<h1 class="${"svelte-8od9u6"}">${escape(status)}</h1>

<p class="${"svelte-8od9u6"}">${escape(error.message)}</p>

${ ``}`;
});

// This file is generated by Sapper — do not edit it!

const d = decodeURIComponent;

const manifest = {
	server_routes: [
		{
			// blog/index.json.js
			pattern: /^\/blog\.json$/,
			handlers: route_0,
			params: () => ({})
		},

		{
			// blog/[slug].json.js
			pattern: /^\/blog\/([^\/]+?)\.json$/,
			handlers: route_1,
			params: match => ({ slug: d(match[1]) })
		}
	],

	pages: [
		{
			// index.svelte
			pattern: /^\/$/,
			parts: [
				{ name: "index", file: "index.svelte", component: Routes }
			]
		},

		{
			// about.svelte
			pattern: /^\/about\/?$/,
			parts: [
				{ name: "about", file: "about.svelte", component: About }
			]
		},

		{
			// blog/index.svelte
			pattern: /^\/blog\/?$/,
			parts: [
				{ name: "blog", file: "blog/index.svelte", component: Blog, preload: preload }
			]
		},

		{
			// blog/[slug].svelte
			pattern: /^\/blog\/([^\/]+?)\/?$/,
			parts: [
				null,
				{ name: "blog_$slug", file: "blog/[slug].svelte", component: U5Bslugu5D, preload: preload$1, params: match => ({ slug: d(match[1]) }) }
			]
		}
	],

	root: Layout,
	root_preload: () => {},
	error: Error$1
};

const build_dir = "__sapper__/build";

const subscriber_queue = [];
/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
 */
function writable(value, start = noop) {
    let stop;
    const subscribers = [];
    function set(new_value) {
        if (safe_not_equal(value, new_value)) {
            value = new_value;
            if (stop) { // store is ready
                const run_queue = !subscriber_queue.length;
                for (let i = 0; i < subscribers.length; i += 1) {
                    const s = subscribers[i];
                    s[1]();
                    subscriber_queue.push(s, value);
                }
                if (run_queue) {
                    for (let i = 0; i < subscriber_queue.length; i += 2) {
                        subscriber_queue[i][0](subscriber_queue[i + 1]);
                    }
                    subscriber_queue.length = 0;
                }
            }
        }
    }
    function update(fn) {
        set(fn(value));
    }
    function subscribe(run, invalidate = noop) {
        const subscriber = [run, invalidate];
        subscribers.push(subscriber);
        if (subscribers.length === 1) {
            stop = start(set) || noop;
        }
        run(value);
        return () => {
            const index = subscribers.indexOf(subscriber);
            if (index !== -1) {
                subscribers.splice(index, 1);
            }
            if (subscribers.length === 0) {
                stop();
                stop = null;
            }
        };
    }
    return { set, update, subscribe };
}

const CONTEXT_KEY = {};

/* src/node_modules/@sapper/internal/App.svelte generated by Svelte v3.24.0 */

const App = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { stores } = $$props;
	let { error } = $$props;
	let { status } = $$props;
	let { segments } = $$props;
	let { level0 } = $$props;
	let { level1 = null } = $$props;
	let { notify } = $$props;
	afterUpdate(notify);
	setContext(CONTEXT_KEY, stores);
	if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0) $$bindings.stores(stores);
	if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
	if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
	if ($$props.segments === void 0 && $$bindings.segments && segments !== void 0) $$bindings.segments(segments);
	if ($$props.level0 === void 0 && $$bindings.level0 && level0 !== void 0) $$bindings.level0(level0);
	if ($$props.level1 === void 0 && $$bindings.level1 && level1 !== void 0) $$bindings.level1(level1);
	if ($$props.notify === void 0 && $$bindings.notify && notify !== void 0) $$bindings.notify(notify);

	return `


${validate_component(Layout, "Layout").$$render($$result, Object.assign({ segment: segments[0] }, level0.props), {}, {
		default: () => `${error
		? `${validate_component(Error$1, "Error").$$render($$result, { error, status }, {}, {})}`
		: `${validate_component(level1.component || missing_component, "svelte:component").$$render($$result, Object.assign(level1.props), {}, {})}`}`
	})}`;
});

/**
 * @param typeMap [Object] Map of MIME type -> Array[extensions]
 * @param ...
 */
function Mime() {
  this._types = Object.create(null);
  this._extensions = Object.create(null);

  for (var i = 0; i < arguments.length; i++) {
    this.define(arguments[i]);
  }

  this.define = this.define.bind(this);
  this.getType = this.getType.bind(this);
  this.getExtension = this.getExtension.bind(this);
}

/**
 * Define mimetype -> extension mappings.  Each key is a mime-type that maps
 * to an array of extensions associated with the type.  The first extension is
 * used as the default extension for the type.
 *
 * e.g. mime.define({'audio/ogg', ['oga', 'ogg', 'spx']});
 *
 * If a type declares an extension that has already been defined, an error will
 * be thrown.  To suppress this error and force the extension to be associated
 * with the new type, pass `force`=true.  Alternatively, you may prefix the
 * extension with "*" to map the type to extension, without mapping the
 * extension to the type.
 *
 * e.g. mime.define({'audio/wav', ['wav']}, {'audio/x-wav', ['*wav']});
 *
 *
 * @param map (Object) type definitions
 * @param force (Boolean) if true, force overriding of existing definitions
 */
Mime.prototype.define = function(typeMap, force) {
  for (var type in typeMap) {
    var extensions = typeMap[type].map(function(t) {return t.toLowerCase()});
    type = type.toLowerCase();

    for (var i = 0; i < extensions.length; i++) {
      var ext = extensions[i];

      // '*' prefix = not the preferred type for this extension.  So fixup the
      // extension, and skip it.
      if (ext[0] == '*') {
        continue;
      }

      if (!force && (ext in this._types)) {
        throw new Error(
          'Attempt to change mapping for "' + ext +
          '" extension from "' + this._types[ext] + '" to "' + type +
          '". Pass `force=true` to allow this, otherwise remove "' + ext +
          '" from the list of extensions for "' + type + '".'
        );
      }

      this._types[ext] = type;
    }

    // Use first extension as default
    if (force || !this._extensions[type]) {
      var ext = extensions[0];
      this._extensions[type] = (ext[0] != '*') ? ext : ext.substr(1);
    }
  }
};

/**
 * Lookup a mime type based on extension
 */
Mime.prototype.getType = function(path) {
  path = String(path);
  var last = path.replace(/^.*[/\\]/, '').toLowerCase();
  var ext = last.replace(/^.*\./, '').toLowerCase();

  var hasPath = last.length < path.length;
  var hasDot = ext.length < last.length - 1;

  return (hasDot || !hasPath) && this._types[ext] || null;
};

/**
 * Return file extension associated with a mime type
 */
Mime.prototype.getExtension = function(type) {
  type = /^\s*([^;\s]*)/.test(type) && RegExp.$1;
  return type && this._extensions[type.toLowerCase()] || null;
};

var Mime_1 = Mime;

var standard = {"application/andrew-inset":["ez"],"application/applixware":["aw"],"application/atom+xml":["atom"],"application/atomcat+xml":["atomcat"],"application/atomsvc+xml":["atomsvc"],"application/bdoc":["bdoc"],"application/ccxml+xml":["ccxml"],"application/cdmi-capability":["cdmia"],"application/cdmi-container":["cdmic"],"application/cdmi-domain":["cdmid"],"application/cdmi-object":["cdmio"],"application/cdmi-queue":["cdmiq"],"application/cu-seeme":["cu"],"application/dash+xml":["mpd"],"application/davmount+xml":["davmount"],"application/docbook+xml":["dbk"],"application/dssc+der":["dssc"],"application/dssc+xml":["xdssc"],"application/ecmascript":["ecma","es"],"application/emma+xml":["emma"],"application/epub+zip":["epub"],"application/exi":["exi"],"application/font-tdpfr":["pfr"],"application/geo+json":["geojson"],"application/gml+xml":["gml"],"application/gpx+xml":["gpx"],"application/gxf":["gxf"],"application/gzip":["gz"],"application/hjson":["hjson"],"application/hyperstudio":["stk"],"application/inkml+xml":["ink","inkml"],"application/ipfix":["ipfix"],"application/java-archive":["jar","war","ear"],"application/java-serialized-object":["ser"],"application/java-vm":["class"],"application/javascript":["js","mjs"],"application/json":["json","map"],"application/json5":["json5"],"application/jsonml+json":["jsonml"],"application/ld+json":["jsonld"],"application/lost+xml":["lostxml"],"application/mac-binhex40":["hqx"],"application/mac-compactpro":["cpt"],"application/mads+xml":["mads"],"application/manifest+json":["webmanifest"],"application/marc":["mrc"],"application/marcxml+xml":["mrcx"],"application/mathematica":["ma","nb","mb"],"application/mathml+xml":["mathml"],"application/mbox":["mbox"],"application/mediaservercontrol+xml":["mscml"],"application/metalink+xml":["metalink"],"application/metalink4+xml":["meta4"],"application/mets+xml":["mets"],"application/mods+xml":["mods"],"application/mp21":["m21","mp21"],"application/mp4":["mp4s","m4p"],"application/msword":["doc","dot"],"application/mxf":["mxf"],"application/n-quads":["nq"],"application/n-triples":["nt"],"application/octet-stream":["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp","msm","buffer"],"application/oda":["oda"],"application/oebps-package+xml":["opf"],"application/ogg":["ogx"],"application/omdoc+xml":["omdoc"],"application/onenote":["onetoc","onetoc2","onetmp","onepkg"],"application/oxps":["oxps"],"application/patch-ops-error+xml":["xer"],"application/pdf":["pdf"],"application/pgp-encrypted":["pgp"],"application/pgp-signature":["asc","sig"],"application/pics-rules":["prf"],"application/pkcs10":["p10"],"application/pkcs7-mime":["p7m","p7c"],"application/pkcs7-signature":["p7s"],"application/pkcs8":["p8"],"application/pkix-attr-cert":["ac"],"application/pkix-cert":["cer"],"application/pkix-crl":["crl"],"application/pkix-pkipath":["pkipath"],"application/pkixcmp":["pki"],"application/pls+xml":["pls"],"application/postscript":["ai","eps","ps"],"application/pskc+xml":["pskcxml"],"application/raml+yaml":["raml"],"application/rdf+xml":["rdf","owl"],"application/reginfo+xml":["rif"],"application/relax-ng-compact-syntax":["rnc"],"application/resource-lists+xml":["rl"],"application/resource-lists-diff+xml":["rld"],"application/rls-services+xml":["rs"],"application/rpki-ghostbusters":["gbr"],"application/rpki-manifest":["mft"],"application/rpki-roa":["roa"],"application/rsd+xml":["rsd"],"application/rss+xml":["rss"],"application/rtf":["rtf"],"application/sbml+xml":["sbml"],"application/scvp-cv-request":["scq"],"application/scvp-cv-response":["scs"],"application/scvp-vp-request":["spq"],"application/scvp-vp-response":["spp"],"application/sdp":["sdp"],"application/set-payment-initiation":["setpay"],"application/set-registration-initiation":["setreg"],"application/shf+xml":["shf"],"application/sieve":["siv","sieve"],"application/smil+xml":["smi","smil"],"application/sparql-query":["rq"],"application/sparql-results+xml":["srx"],"application/srgs":["gram"],"application/srgs+xml":["grxml"],"application/sru+xml":["sru"],"application/ssdl+xml":["ssdl"],"application/ssml+xml":["ssml"],"application/tei+xml":["tei","teicorpus"],"application/thraud+xml":["tfi"],"application/timestamped-data":["tsd"],"application/voicexml+xml":["vxml"],"application/wasm":["wasm"],"application/widget":["wgt"],"application/winhlp":["hlp"],"application/wsdl+xml":["wsdl"],"application/wspolicy+xml":["wspolicy"],"application/xaml+xml":["xaml"],"application/xcap-diff+xml":["xdf"],"application/xenc+xml":["xenc"],"application/xhtml+xml":["xhtml","xht"],"application/xml":["xml","xsl","xsd","rng"],"application/xml-dtd":["dtd"],"application/xop+xml":["xop"],"application/xproc+xml":["xpl"],"application/xslt+xml":["xslt"],"application/xspf+xml":["xspf"],"application/xv+xml":["mxml","xhvml","xvml","xvm"],"application/yang":["yang"],"application/yin+xml":["yin"],"application/zip":["zip"],"audio/3gpp":["*3gpp"],"audio/adpcm":["adp"],"audio/basic":["au","snd"],"audio/midi":["mid","midi","kar","rmi"],"audio/mp3":["*mp3"],"audio/mp4":["m4a","mp4a"],"audio/mpeg":["mpga","mp2","mp2a","mp3","m2a","m3a"],"audio/ogg":["oga","ogg","spx"],"audio/s3m":["s3m"],"audio/silk":["sil"],"audio/wav":["wav"],"audio/wave":["*wav"],"audio/webm":["weba"],"audio/xm":["xm"],"font/collection":["ttc"],"font/otf":["otf"],"font/ttf":["ttf"],"font/woff":["woff"],"font/woff2":["woff2"],"image/aces":["exr"],"image/apng":["apng"],"image/bmp":["bmp"],"image/cgm":["cgm"],"image/dicom-rle":["drle"],"image/emf":["emf"],"image/fits":["fits"],"image/g3fax":["g3"],"image/gif":["gif"],"image/heic":["heic"],"image/heic-sequence":["heics"],"image/heif":["heif"],"image/heif-sequence":["heifs"],"image/ief":["ief"],"image/jls":["jls"],"image/jp2":["jp2","jpg2"],"image/jpeg":["jpeg","jpg","jpe"],"image/jpm":["jpm"],"image/jpx":["jpx","jpf"],"image/jxr":["jxr"],"image/ktx":["ktx"],"image/png":["png"],"image/sgi":["sgi"],"image/svg+xml":["svg","svgz"],"image/t38":["t38"],"image/tiff":["tif","tiff"],"image/tiff-fx":["tfx"],"image/webp":["webp"],"image/wmf":["wmf"],"message/disposition-notification":["disposition-notification"],"message/global":["u8msg"],"message/global-delivery-status":["u8dsn"],"message/global-disposition-notification":["u8mdn"],"message/global-headers":["u8hdr"],"message/rfc822":["eml","mime"],"model/3mf":["3mf"],"model/gltf+json":["gltf"],"model/gltf-binary":["glb"],"model/iges":["igs","iges"],"model/mesh":["msh","mesh","silo"],"model/stl":["stl"],"model/vrml":["wrl","vrml"],"model/x3d+binary":["*x3db","x3dbz"],"model/x3d+fastinfoset":["x3db"],"model/x3d+vrml":["*x3dv","x3dvz"],"model/x3d+xml":["x3d","x3dz"],"model/x3d-vrml":["x3dv"],"text/cache-manifest":["appcache","manifest"],"text/calendar":["ics","ifb"],"text/coffeescript":["coffee","litcoffee"],"text/css":["css"],"text/csv":["csv"],"text/html":["html","htm","shtml"],"text/jade":["jade"],"text/jsx":["jsx"],"text/less":["less"],"text/markdown":["markdown","md"],"text/mathml":["mml"],"text/mdx":["mdx"],"text/n3":["n3"],"text/plain":["txt","text","conf","def","list","log","in","ini"],"text/richtext":["rtx"],"text/rtf":["*rtf"],"text/sgml":["sgml","sgm"],"text/shex":["shex"],"text/slim":["slim","slm"],"text/stylus":["stylus","styl"],"text/tab-separated-values":["tsv"],"text/troff":["t","tr","roff","man","me","ms"],"text/turtle":["ttl"],"text/uri-list":["uri","uris","urls"],"text/vcard":["vcard"],"text/vtt":["vtt"],"text/xml":["*xml"],"text/yaml":["yaml","yml"],"video/3gpp":["3gp","3gpp"],"video/3gpp2":["3g2"],"video/h261":["h261"],"video/h263":["h263"],"video/h264":["h264"],"video/jpeg":["jpgv"],"video/jpm":["*jpm","jpgm"],"video/mj2":["mj2","mjp2"],"video/mp2t":["ts"],"video/mp4":["mp4","mp4v","mpg4"],"video/mpeg":["mpeg","mpg","mpe","m1v","m2v"],"video/ogg":["ogv"],"video/quicktime":["qt","mov"],"video/webm":["webm"]};

var lite = new Mime_1(standard);

function get_server_route_handler(routes) {
	async function handle_route(route, req, res, next) {
		req.params = route.params(route.pattern.exec(req.path));

		const method = req.method.toLowerCase();
		// 'delete' cannot be exported from a module because it is a keyword,
		// so check for 'del' instead
		const method_export = method === 'delete' ? 'del' : method;
		const handle_method = route.handlers[method_export];
		if (handle_method) {
			if (process.env.SAPPER_EXPORT) {
				const { write, end, setHeader } = res;
				const chunks = [];
				const headers = {};

				// intercept data so that it can be exported
				res.write = function(chunk) {
					chunks.push(Buffer.from(chunk));
					write.apply(res, arguments);
				};

				res.setHeader = function(name, value) {
					headers[name.toLowerCase()] = value;
					setHeader.apply(res, arguments);
				};

				res.end = function(chunk) {
					if (chunk) chunks.push(Buffer.from(chunk));
					end.apply(res, arguments);

					process.send({
						__sapper__: true,
						event: 'file',
						url: req.url,
						method: req.method,
						status: res.statusCode,
						type: headers['content-type'],
						body: Buffer.concat(chunks).toString()
					});
				};
			}

			const handle_next = (err) => {
				if (err) {
					res.statusCode = 500;
					res.end(err.message);
				} else {
					process.nextTick(next);
				}
			};

			try {
				await handle_method(req, res, handle_next);
			} catch (err) {
				console.error(err);
				handle_next(err);
			}
		} else {
			// no matching handler for method
			process.nextTick(next);
		}
	}

	return function find_route(req, res, next) {
		for (const route of routes) {
			if (route.pattern.test(req.path)) {
				handle_route(route, req, res, next);
				return;
			}
		}

		next();
	};
}

/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

/**
 * Module exports.
 * @public
 */

var parse_1 = parse;
var serialize_1 = serialize;

/**
 * Module variables.
 * @private
 */

var decode = decodeURIComponent;
var encode = encodeURIComponent;
var pairSplitRegExp = /; */;

/**
 * RegExp to match field-content in RFC 7230 sec 3.2
 *
 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
 * field-vchar   = VCHAR / obs-text
 * obs-text      = %x80-FF
 */

var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */

function parse(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }

  var obj = {};
  var opt = options || {};
  var pairs = str.split(pairSplitRegExp);
  var dec = opt.decode || decode;

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    var eq_idx = pair.indexOf('=');

    // skip things that don't look like key=value
    if (eq_idx < 0) {
      continue;
    }

    var key = pair.substr(0, eq_idx).trim();
    var val = pair.substr(++eq_idx, pair.length).trim();

    // quoted values
    if ('"' == val[0]) {
      val = val.slice(1, -1);
    }

    // only assign once
    if (undefined == obj[key]) {
      obj[key] = tryDecode(val, dec);
    }
  }

  return obj;
}

/**
 * Serialize data into a cookie header.
 *
 * Serialize the a name value pair into a cookie string suitable for
 * http headers. An optional options object specified cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 *
 * @param {string} name
 * @param {string} val
 * @param {object} [options]
 * @return {string}
 * @public
 */

function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;

  if (typeof enc !== 'function') {
    throw new TypeError('option encode is invalid');
  }

  if (!fieldContentRegExp.test(name)) {
    throw new TypeError('argument name is invalid');
  }

  var value = enc(val);

  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError('argument val is invalid');
  }

  var str = name + '=' + value;

  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;
    if (isNaN(maxAge)) throw new Error('maxAge should be a Number');
    str += '; Max-Age=' + Math.floor(maxAge);
  }

  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError('option domain is invalid');
    }

    str += '; Domain=' + opt.domain;
  }

  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError('option path is invalid');
    }

    str += '; Path=' + opt.path;
  }

  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== 'function') {
      throw new TypeError('option expires is invalid');
    }

    str += '; Expires=' + opt.expires.toUTCString();
  }

  if (opt.httpOnly) {
    str += '; HttpOnly';
  }

  if (opt.secure) {
    str += '; Secure';
  }

  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === 'string'
      ? opt.sameSite.toLowerCase() : opt.sameSite;

    switch (sameSite) {
      case true:
        str += '; SameSite=Strict';
        break;
      case 'lax':
        str += '; SameSite=Lax';
        break;
      case 'strict':
        str += '; SameSite=Strict';
        break;
      case 'none':
        str += '; SameSite=None';
        break;
      default:
        throw new TypeError('option sameSite is invalid');
    }
  }

  return str;
}

/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */

function tryDecode(str, decode) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}

var cookie = {
	parse: parse_1,
	serialize: serialize_1
};

var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$';
var unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped$1 = {
    '<': '\\u003C',
    '>': '\\u003E',
    '/': '\\u002F',
    '\\': '\\\\',
    '\b': '\\b',
    '\f': '\\f',
    '\n': '\\n',
    '\r': '\\r',
    '\t': '\\t',
    '\0': '\\0',
    '\u2028': '\\u2028',
    '\u2029': '\\u2029'
};
var objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function devalue(value) {
    var counts = new Map();
    function walk(thing) {
        if (typeof thing === 'function') {
            throw new Error("Cannot stringify a function");
        }
        if (counts.has(thing)) {
            counts.set(thing, counts.get(thing) + 1);
            return;
        }
        counts.set(thing, 1);
        if (!isPrimitive(thing)) {
            var type = getType(thing);
            switch (type) {
                case 'Number':
                case 'String':
                case 'Boolean':
                case 'Date':
                case 'RegExp':
                    return;
                case 'Array':
                    thing.forEach(walk);
                    break;
                case 'Set':
                case 'Map':
                    Array.from(thing).forEach(walk);
                    break;
                default:
                    var proto = Object.getPrototypeOf(thing);
                    if (proto !== Object.prototype &&
                        proto !== null &&
                        Object.getOwnPropertyNames(proto).sort().join('\0') !== objectProtoOwnPropertyNames) {
                        throw new Error("Cannot stringify arbitrary non-POJOs");
                    }
                    if (Object.getOwnPropertySymbols(thing).length > 0) {
                        throw new Error("Cannot stringify POJOs with symbolic keys");
                    }
                    Object.keys(thing).forEach(function (key) { return walk(thing[key]); });
            }
        }
    }
    walk(value);
    var names = new Map();
    Array.from(counts)
        .filter(function (entry) { return entry[1] > 1; })
        .sort(function (a, b) { return b[1] - a[1]; })
        .forEach(function (entry, i) {
        names.set(entry[0], getName(i));
    });
    function stringify(thing) {
        if (names.has(thing)) {
            return names.get(thing);
        }
        if (isPrimitive(thing)) {
            return stringifyPrimitive(thing);
        }
        var type = getType(thing);
        switch (type) {
            case 'Number':
            case 'String':
            case 'Boolean':
                return "Object(" + stringify(thing.valueOf()) + ")";
            case 'RegExp':
                return thing.toString();
            case 'Date':
                return "new Date(" + thing.getTime() + ")";
            case 'Array':
                var members = thing.map(function (v, i) { return i in thing ? stringify(v) : ''; });
                var tail = thing.length === 0 || (thing.length - 1 in thing) ? '' : ',';
                return "[" + members.join(',') + tail + "]";
            case 'Set':
            case 'Map':
                return "new " + type + "([" + Array.from(thing).map(stringify).join(',') + "])";
            default:
                var obj = "{" + Object.keys(thing).map(function (key) { return safeKey(key) + ":" + stringify(thing[key]); }).join(',') + "}";
                var proto = Object.getPrototypeOf(thing);
                if (proto === null) {
                    return Object.keys(thing).length > 0
                        ? "Object.assign(Object.create(null)," + obj + ")"
                        : "Object.create(null)";
                }
                return obj;
        }
    }
    var str = stringify(value);
    if (names.size) {
        var params_1 = [];
        var statements_1 = [];
        var values_1 = [];
        names.forEach(function (name, thing) {
            params_1.push(name);
            if (isPrimitive(thing)) {
                values_1.push(stringifyPrimitive(thing));
                return;
            }
            var type = getType(thing);
            switch (type) {
                case 'Number':
                case 'String':
                case 'Boolean':
                    values_1.push("Object(" + stringify(thing.valueOf()) + ")");
                    break;
                case 'RegExp':
                    values_1.push(thing.toString());
                    break;
                case 'Date':
                    values_1.push("new Date(" + thing.getTime() + ")");
                    break;
                case 'Array':
                    values_1.push("Array(" + thing.length + ")");
                    thing.forEach(function (v, i) {
                        statements_1.push(name + "[" + i + "]=" + stringify(v));
                    });
                    break;
                case 'Set':
                    values_1.push("new Set");
                    statements_1.push(name + "." + Array.from(thing).map(function (v) { return "add(" + stringify(v) + ")"; }).join('.'));
                    break;
                case 'Map':
                    values_1.push("new Map");
                    statements_1.push(name + "." + Array.from(thing).map(function (_a) {
                        var k = _a[0], v = _a[1];
                        return "set(" + stringify(k) + ", " + stringify(v) + ")";
                    }).join('.'));
                    break;
                default:
                    values_1.push(Object.getPrototypeOf(thing) === null ? 'Object.create(null)' : '{}');
                    Object.keys(thing).forEach(function (key) {
                        statements_1.push("" + name + safeProp(key) + "=" + stringify(thing[key]));
                    });
            }
        });
        statements_1.push("return " + str);
        return "(function(" + params_1.join(',') + "){" + statements_1.join(';') + "}(" + values_1.join(',') + "))";
    }
    else {
        return str;
    }
}
function getName(num) {
    var name = '';
    do {
        name = chars[num % chars.length] + name;
        num = ~~(num / chars.length) - 1;
    } while (num >= 0);
    return reserved.test(name) ? name + "_" : name;
}
function isPrimitive(thing) {
    return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
    if (typeof thing === 'string')
        return stringifyString(thing);
    if (thing === void 0)
        return 'void 0';
    if (thing === 0 && 1 / thing < 0)
        return '-0';
    var str = String(thing);
    if (typeof thing === 'number')
        return str.replace(/^(-)?0\./, '$1.');
    return str;
}
function getType(thing) {
    return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
    return escaped$1[c] || c;
}
function escapeUnsafeChars(str) {
    return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key) {
    return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
}
function safeProp(key) {
    return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? "." + key : "[" + escapeUnsafeChars(JSON.stringify(key)) + "]";
}
function stringifyString(str) {
    var result = '"';
    for (var i = 0; i < str.length; i += 1) {
        var char = str.charAt(i);
        var code = char.charCodeAt(0);
        if (char === '"') {
            result += '\\"';
        }
        else if (char in escaped$1) {
            result += escaped$1[char];
        }
        else if (code >= 0xd800 && code <= 0xdfff) {
            var next = str.charCodeAt(i + 1);
            // If this is the beginning of a [high, low] surrogate pair,
            // add the next two characters, otherwise escape
            if (code <= 0xdbff && (next >= 0xdc00 && next <= 0xdfff)) {
                result += char + str[++i];
            }
            else {
                result += "\\u" + code.toString(16).toUpperCase();
            }
        }
        else {
            result += char;
        }
    }
    result += '"';
    return result;
}

// Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js

// fix for "Readable" isn't a named export issue
const Readable = Stream.Readable;

const BUFFER = Symbol('buffer');
const TYPE = Symbol('type');

class Blob {
	constructor() {
		this[TYPE] = '';

		const blobParts = arguments[0];
		const options = arguments[1];

		const buffers = [];
		let size = 0;

		if (blobParts) {
			const a = blobParts;
			const length = Number(a.length);
			for (let i = 0; i < length; i++) {
				const element = a[i];
				let buffer;
				if (element instanceof Buffer) {
					buffer = element;
				} else if (ArrayBuffer.isView(element)) {
					buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
				} else if (element instanceof ArrayBuffer) {
					buffer = Buffer.from(element);
				} else if (element instanceof Blob) {
					buffer = element[BUFFER];
				} else {
					buffer = Buffer.from(typeof element === 'string' ? element : String(element));
				}
				size += buffer.length;
				buffers.push(buffer);
			}
		}

		this[BUFFER] = Buffer.concat(buffers);

		let type = options && options.type !== undefined && String(options.type).toLowerCase();
		if (type && !/[^\u0020-\u007E]/.test(type)) {
			this[TYPE] = type;
		}
	}
	get size() {
		return this[BUFFER].length;
	}
	get type() {
		return this[TYPE];
	}
	text() {
		return Promise.resolve(this[BUFFER].toString());
	}
	arrayBuffer() {
		const buf = this[BUFFER];
		const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		return Promise.resolve(ab);
	}
	stream() {
		const readable = new Readable();
		readable._read = function () {};
		readable.push(this[BUFFER]);
		readable.push(null);
		return readable;
	}
	toString() {
		return '[object Blob]';
	}
	slice() {
		const size = this.size;

		const start = arguments[0];
		const end = arguments[1];
		let relativeStart, relativeEnd;
		if (start === undefined) {
			relativeStart = 0;
		} else if (start < 0) {
			relativeStart = Math.max(size + start, 0);
		} else {
			relativeStart = Math.min(start, size);
		}
		if (end === undefined) {
			relativeEnd = size;
		} else if (end < 0) {
			relativeEnd = Math.max(size + end, 0);
		} else {
			relativeEnd = Math.min(end, size);
		}
		const span = Math.max(relativeEnd - relativeStart, 0);

		const buffer = this[BUFFER];
		const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
		const blob = new Blob([], { type: arguments[2] });
		blob[BUFFER] = slicedBuffer;
		return blob;
	}
}

Object.defineProperties(Blob.prototype, {
	size: { enumerable: true },
	type: { enumerable: true },
	slice: { enumerable: true }
});

Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
	value: 'Blob',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * fetch-error.js
 *
 * FetchError interface for operational errors
 */

/**
 * Create FetchError instance
 *
 * @param   String      message      Error message for human
 * @param   String      type         Error type for machine
 * @param   String      systemError  For Node.js system error
 * @return  FetchError
 */
function FetchError(message, type, systemError) {
  Error.call(this, message);

  this.message = message;
  this.type = type;

  // when err.type is `system`, err.code contains system error code
  if (systemError) {
    this.code = this.errno = systemError.code;
  }

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

FetchError.prototype = Object.create(Error.prototype);
FetchError.prototype.constructor = FetchError;
FetchError.prototype.name = 'FetchError';

let convert;
try {
	convert = require('encoding').convert;
} catch (e) {}

const INTERNALS = Symbol('Body internals');

// fix an issue where "PassThrough" isn't a named export for node <10
const PassThrough = Stream.PassThrough;

/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
function Body(body) {
	var _this = this;

	var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	    _ref$size = _ref.size;

	let size = _ref$size === undefined ? 0 : _ref$size;
	var _ref$timeout = _ref.timeout;
	let timeout = _ref$timeout === undefined ? 0 : _ref$timeout;

	if (body == null) {
		// body is undefined or null
		body = null;
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		body = Buffer.from(body.toString());
	} else if (isBlob(body)) ; else if (Buffer.isBuffer(body)) ; else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		body = Buffer.from(body);
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
	} else if (body instanceof Stream) ; else {
		// none of the above
		// coerce to string then buffer
		body = Buffer.from(String(body));
	}
	this[INTERNALS] = {
		body,
		disturbed: false,
		error: null
	};
	this.size = size;
	this.timeout = timeout;

	if (body instanceof Stream) {
		body.on('error', function (err) {
			const error = err.name === 'AbortError' ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, 'system', err);
			_this[INTERNALS].error = error;
		});
	}
}

Body.prototype = {
	get body() {
		return this[INTERNALS].body;
	},

	get bodyUsed() {
		return this[INTERNALS].disturbed;
	},

	/**
  * Decode response as ArrayBuffer
  *
  * @return  Promise
  */
	arrayBuffer() {
		return consumeBody.call(this).then(function (buf) {
			return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		});
	},

	/**
  * Return raw response as Blob
  *
  * @return Promise
  */
	blob() {
		let ct = this.headers && this.headers.get('content-type') || '';
		return consumeBody.call(this).then(function (buf) {
			return Object.assign(
			// Prevent copying
			new Blob([], {
				type: ct.toLowerCase()
			}), {
				[BUFFER]: buf
			});
		});
	},

	/**
  * Decode response as json
  *
  * @return  Promise
  */
	json() {
		var _this2 = this;

		return consumeBody.call(this).then(function (buffer) {
			try {
				return JSON.parse(buffer.toString());
			} catch (err) {
				return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, 'invalid-json'));
			}
		});
	},

	/**
  * Decode response as text
  *
  * @return  Promise
  */
	text() {
		return consumeBody.call(this).then(function (buffer) {
			return buffer.toString();
		});
	},

	/**
  * Decode response as buffer (non-spec api)
  *
  * @return  Promise
  */
	buffer() {
		return consumeBody.call(this);
	},

	/**
  * Decode response as text, while automatically detecting the encoding and
  * trying to decode to UTF-8 (non-spec api)
  *
  * @return  Promise
  */
	textConverted() {
		var _this3 = this;

		return consumeBody.call(this).then(function (buffer) {
			return convertBody(buffer, _this3.headers);
		});
	}
};

// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
	body: { enumerable: true },
	bodyUsed: { enumerable: true },
	arrayBuffer: { enumerable: true },
	blob: { enumerable: true },
	json: { enumerable: true },
	text: { enumerable: true }
});

Body.mixIn = function (proto) {
	for (const name of Object.getOwnPropertyNames(Body.prototype)) {
		// istanbul ignore else: future proof
		if (!(name in proto)) {
			const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
			Object.defineProperty(proto, name, desc);
		}
	}
};

/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return  Promise
 */
function consumeBody() {
	var _this4 = this;

	if (this[INTERNALS].disturbed) {
		return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
	}

	this[INTERNALS].disturbed = true;

	if (this[INTERNALS].error) {
		return Body.Promise.reject(this[INTERNALS].error);
	}

	let body = this.body;

	// body is null
	if (body === null) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is blob
	if (isBlob(body)) {
		body = body.stream();
	}

	// body is buffer
	if (Buffer.isBuffer(body)) {
		return Body.Promise.resolve(body);
	}

	// istanbul ignore if: should never happen
	if (!(body instanceof Stream)) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is stream
	// get ready to actually consume the body
	let accum = [];
	let accumBytes = 0;
	let abort = false;

	return new Body.Promise(function (resolve, reject) {
		let resTimeout;

		// allow timeout on slow response body
		if (_this4.timeout) {
			resTimeout = setTimeout(function () {
				abort = true;
				reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, 'body-timeout'));
			}, _this4.timeout);
		}

		// handle stream errors
		body.on('error', function (err) {
			if (err.name === 'AbortError') {
				// if the request was aborted, reject with this Error
				abort = true;
				reject(err);
			} else {
				// other errors, such as incorrect content-encoding
				reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, 'system', err));
			}
		});

		body.on('data', function (chunk) {
			if (abort || chunk === null) {
				return;
			}

			if (_this4.size && accumBytes + chunk.length > _this4.size) {
				abort = true;
				reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, 'max-size'));
				return;
			}

			accumBytes += chunk.length;
			accum.push(chunk);
		});

		body.on('end', function () {
			if (abort) {
				return;
			}

			clearTimeout(resTimeout);

			try {
				resolve(Buffer.concat(accum, accumBytes));
			} catch (err) {
				// handle streams that have accumulated too much data (issue #414)
				reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, 'system', err));
			}
		});
	});
}

/**
 * Detect buffer encoding and convert to target encoding
 * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
 *
 * @param   Buffer  buffer    Incoming buffer
 * @param   String  encoding  Target encoding
 * @return  String
 */
function convertBody(buffer, headers) {
	if (typeof convert !== 'function') {
		throw new Error('The package `encoding` must be installed to use the textConverted() function');
	}

	const ct = headers.get('content-type');
	let charset = 'utf-8';
	let res, str;

	// header
	if (ct) {
		res = /charset=([^;]*)/i.exec(ct);
	}

	// no charset in content type, peek at response body for at most 1024 bytes
	str = buffer.slice(0, 1024).toString();

	// html5
	if (!res && str) {
		res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
	}

	// html4
	if (!res && str) {
		res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);

		if (res) {
			res = /charset=(.*)/i.exec(res.pop());
		}
	}

	// xml
	if (!res && str) {
		res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
	}

	// found charset
	if (res) {
		charset = res.pop();

		// prevent decode issues when sites use incorrect encoding
		// ref: https://hsivonen.fi/encoding-menu/
		if (charset === 'gb2312' || charset === 'gbk') {
			charset = 'gb18030';
		}
	}

	// turn raw buffers into a single utf-8 buffer
	return convert(buffer, 'UTF-8', charset).toString();
}

/**
 * Detect a URLSearchParams object
 * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
 *
 * @param   Object  obj     Object to detect by type or brand
 * @return  String
 */
function isURLSearchParams(obj) {
	// Duck-typing as a necessary condition.
	if (typeof obj !== 'object' || typeof obj.append !== 'function' || typeof obj.delete !== 'function' || typeof obj.get !== 'function' || typeof obj.getAll !== 'function' || typeof obj.has !== 'function' || typeof obj.set !== 'function') {
		return false;
	}

	// Brand-checking and more duck-typing as optional condition.
	return obj.constructor.name === 'URLSearchParams' || Object.prototype.toString.call(obj) === '[object URLSearchParams]' || typeof obj.sort === 'function';
}

/**
 * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
 * @param  {*} obj
 * @return {boolean}
 */
function isBlob(obj) {
	return typeof obj === 'object' && typeof obj.arrayBuffer === 'function' && typeof obj.type === 'string' && typeof obj.stream === 'function' && typeof obj.constructor === 'function' && typeof obj.constructor.name === 'string' && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
}

/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed  instance  Response or Request instance
 * @return  Mixed
 */
function clone(instance) {
	let p1, p2;
	let body = instance.body;

	// don't allow cloning a used body
	if (instance.bodyUsed) {
		throw new Error('cannot clone body after it is used');
	}

	// check that body is a stream and not form-data object
	// note: we can't clone the form-data object without having it as a dependency
	if (body instanceof Stream && typeof body.getBoundary !== 'function') {
		// tee instance body
		p1 = new PassThrough();
		p2 = new PassThrough();
		body.pipe(p1);
		body.pipe(p2);
		// set instance body to teed body and return the other teed body
		instance[INTERNALS].body = p1;
		body = p2;
	}

	return body;
}

/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param   Mixed  instance  Any options.body input
 */
function extractContentType(body) {
	if (body === null) {
		// body is null
		return null;
	} else if (typeof body === 'string') {
		// body is string
		return 'text/plain;charset=UTF-8';
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		return 'application/x-www-form-urlencoded;charset=UTF-8';
	} else if (isBlob(body)) {
		// body is blob
		return body.type || null;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return null;
	} else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		return null;
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		return null;
	} else if (typeof body.getBoundary === 'function') {
		// detect form data input from form-data module
		return `multipart/form-data;boundary=${body.getBoundary()}`;
	} else if (body instanceof Stream) {
		// body is stream
		// can't really do much about this
		return null;
	} else {
		// Body constructor defaults other things to string
		return 'text/plain;charset=UTF-8';
	}
}

/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param   Body    instance   Instance of Body
 * @return  Number?            Number of bytes, or null if not possible
 */
function getTotalBytes(instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		return 0;
	} else if (isBlob(body)) {
		return body.size;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return body.length;
	} else if (body && typeof body.getLengthSync === 'function') {
		// detect form data input from form-data module
		if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x
		body.hasKnownLength && body.hasKnownLength()) {
			// 2.x
			return body.getLengthSync();
		}
		return null;
	} else {
		// body is stream
		return null;
	}
}

/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param   Body    instance   Instance of Body
 * @return  Void
 */
function writeToStream(dest, instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		dest.end();
	} else if (isBlob(body)) {
		body.stream().pipe(dest);
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		dest.write(body);
		dest.end();
	} else {
		// body is stream
		body.pipe(dest);
	}
}

// expose Promise
Body.Promise = global.Promise;

/**
 * headers.js
 *
 * Headers class offers convenient helpers
 */

const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;

function validateName(name) {
	name = `${name}`;
	if (invalidTokenRegex.test(name) || name === '') {
		throw new TypeError(`${name} is not a legal HTTP header name`);
	}
}

function validateValue(value) {
	value = `${value}`;
	if (invalidHeaderCharRegex.test(value)) {
		throw new TypeError(`${value} is not a legal HTTP header value`);
	}
}

/**
 * Find the key in the map object given a header name.
 *
 * Returns undefined if not found.
 *
 * @param   String  name  Header name
 * @return  String|Undefined
 */
function find(map, name) {
	name = name.toLowerCase();
	for (const key in map) {
		if (key.toLowerCase() === name) {
			return key;
		}
	}
	return undefined;
}

const MAP = Symbol('map');
class Headers {
	/**
  * Headers class
  *
  * @param   Object  headers  Response headers
  * @return  Void
  */
	constructor() {
		let init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

		this[MAP] = Object.create(null);

		if (init instanceof Headers) {
			const rawHeaders = init.raw();
			const headerNames = Object.keys(rawHeaders);

			for (const headerName of headerNames) {
				for (const value of rawHeaders[headerName]) {
					this.append(headerName, value);
				}
			}

			return;
		}

		// We don't worry about converting prop to ByteString here as append()
		// will handle it.
		if (init == null) ; else if (typeof init === 'object') {
			const method = init[Symbol.iterator];
			if (method != null) {
				if (typeof method !== 'function') {
					throw new TypeError('Header pairs must be iterable');
				}

				// sequence<sequence<ByteString>>
				// Note: per spec we have to first exhaust the lists then process them
				const pairs = [];
				for (const pair of init) {
					if (typeof pair !== 'object' || typeof pair[Symbol.iterator] !== 'function') {
						throw new TypeError('Each header pair must be iterable');
					}
					pairs.push(Array.from(pair));
				}

				for (const pair of pairs) {
					if (pair.length !== 2) {
						throw new TypeError('Each header pair must be a name/value tuple');
					}
					this.append(pair[0], pair[1]);
				}
			} else {
				// record<ByteString, ByteString>
				for (const key of Object.keys(init)) {
					const value = init[key];
					this.append(key, value);
				}
			}
		} else {
			throw new TypeError('Provided initializer must be an object');
		}
	}

	/**
  * Return combined header value given name
  *
  * @param   String  name  Header name
  * @return  Mixed
  */
	get(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key === undefined) {
			return null;
		}

		return this[MAP][key].join(', ');
	}

	/**
  * Iterate over all headers
  *
  * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
  * @param   Boolean   thisArg   `this` context for callback function
  * @return  Void
  */
	forEach(callback) {
		let thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

		let pairs = getHeaders(this);
		let i = 0;
		while (i < pairs.length) {
			var _pairs$i = pairs[i];
			const name = _pairs$i[0],
			      value = _pairs$i[1];

			callback.call(thisArg, value, name, this);
			pairs = getHeaders(this);
			i++;
		}
	}

	/**
  * Overwrite header values given name
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	set(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		this[MAP][key !== undefined ? key : name] = [value];
	}

	/**
  * Append a value onto existing header
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	append(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			this[MAP][key].push(value);
		} else {
			this[MAP][name] = [value];
		}
	}

	/**
  * Check for header name existence
  *
  * @param   String   name  Header name
  * @return  Boolean
  */
	has(name) {
		name = `${name}`;
		validateName(name);
		return find(this[MAP], name) !== undefined;
	}

	/**
  * Delete all header values given name
  *
  * @param   String  name  Header name
  * @return  Void
  */
	delete(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			delete this[MAP][key];
		}
	}

	/**
  * Return raw headers (non-spec api)
  *
  * @return  Object
  */
	raw() {
		return this[MAP];
	}

	/**
  * Get an iterator on keys.
  *
  * @return  Iterator
  */
	keys() {
		return createHeadersIterator(this, 'key');
	}

	/**
  * Get an iterator on values.
  *
  * @return  Iterator
  */
	values() {
		return createHeadersIterator(this, 'value');
	}

	/**
  * Get an iterator on entries.
  *
  * This is the default iterator of the Headers object.
  *
  * @return  Iterator
  */
	[Symbol.iterator]() {
		return createHeadersIterator(this, 'key+value');
	}
}
Headers.prototype.entries = Headers.prototype[Symbol.iterator];

Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
	value: 'Headers',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Headers.prototype, {
	get: { enumerable: true },
	forEach: { enumerable: true },
	set: { enumerable: true },
	append: { enumerable: true },
	has: { enumerable: true },
	delete: { enumerable: true },
	keys: { enumerable: true },
	values: { enumerable: true },
	entries: { enumerable: true }
});

function getHeaders(headers) {
	let kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';

	const keys = Object.keys(headers[MAP]).sort();
	return keys.map(kind === 'key' ? function (k) {
		return k.toLowerCase();
	} : kind === 'value' ? function (k) {
		return headers[MAP][k].join(', ');
	} : function (k) {
		return [k.toLowerCase(), headers[MAP][k].join(', ')];
	});
}

const INTERNAL = Symbol('internal');

function createHeadersIterator(target, kind) {
	const iterator = Object.create(HeadersIteratorPrototype);
	iterator[INTERNAL] = {
		target,
		kind,
		index: 0
	};
	return iterator;
}

const HeadersIteratorPrototype = Object.setPrototypeOf({
	next() {
		// istanbul ignore if
		if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
			throw new TypeError('Value of `this` is not a HeadersIterator');
		}

		var _INTERNAL = this[INTERNAL];
		const target = _INTERNAL.target,
		      kind = _INTERNAL.kind,
		      index = _INTERNAL.index;

		const values = getHeaders(target, kind);
		const len = values.length;
		if (index >= len) {
			return {
				value: undefined,
				done: true
			};
		}

		this[INTERNAL].index = index + 1;

		return {
			value: values[index],
			done: false
		};
	}
}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));

Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
	value: 'HeadersIterator',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * Export the Headers object in a form that Node.js can consume.
 *
 * @param   Headers  headers
 * @return  Object
 */
function exportNodeCompatibleHeaders(headers) {
	const obj = Object.assign({ __proto__: null }, headers[MAP]);

	// http.request() only supports string as Host header. This hack makes
	// specifying custom Host header possible.
	const hostHeaderKey = find(headers[MAP], 'Host');
	if (hostHeaderKey !== undefined) {
		obj[hostHeaderKey] = obj[hostHeaderKey][0];
	}

	return obj;
}

/**
 * Create a Headers object from an object of headers, ignoring those that do
 * not conform to HTTP grammar productions.
 *
 * @param   Object  obj  Object of headers
 * @return  Headers
 */
function createHeadersLenient(obj) {
	const headers = new Headers();
	for (const name of Object.keys(obj)) {
		if (invalidTokenRegex.test(name)) {
			continue;
		}
		if (Array.isArray(obj[name])) {
			for (const val of obj[name]) {
				if (invalidHeaderCharRegex.test(val)) {
					continue;
				}
				if (headers[MAP][name] === undefined) {
					headers[MAP][name] = [val];
				} else {
					headers[MAP][name].push(val);
				}
			}
		} else if (!invalidHeaderCharRegex.test(obj[name])) {
			headers[MAP][name] = [obj[name]];
		}
	}
	return headers;
}

const INTERNALS$1 = Symbol('Response internals');

// fix an issue where "STATUS_CODES" aren't a named export for node <10
const STATUS_CODES = http.STATUS_CODES;

/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
class Response {
	constructor() {
		let body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
		let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		Body.call(this, body, opts);

		const status = opts.status || 200;
		const headers = new Headers(opts.headers);

		if (body != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(body);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		this[INTERNALS$1] = {
			url: opts.url,
			status,
			statusText: opts.statusText || STATUS_CODES[status],
			headers,
			counter: opts.counter
		};
	}

	get url() {
		return this[INTERNALS$1].url || '';
	}

	get status() {
		return this[INTERNALS$1].status;
	}

	/**
  * Convenience property representing if the request ended normally
  */
	get ok() {
		return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
	}

	get redirected() {
		return this[INTERNALS$1].counter > 0;
	}

	get statusText() {
		return this[INTERNALS$1].statusText;
	}

	get headers() {
		return this[INTERNALS$1].headers;
	}

	/**
  * Clone this response
  *
  * @return  Response
  */
	clone() {
		return new Response(clone(this), {
			url: this.url,
			status: this.status,
			statusText: this.statusText,
			headers: this.headers,
			ok: this.ok,
			redirected: this.redirected
		});
	}
}

Body.mixIn(Response.prototype);

Object.defineProperties(Response.prototype, {
	url: { enumerable: true },
	status: { enumerable: true },
	ok: { enumerable: true },
	redirected: { enumerable: true },
	statusText: { enumerable: true },
	headers: { enumerable: true },
	clone: { enumerable: true }
});

Object.defineProperty(Response.prototype, Symbol.toStringTag, {
	value: 'Response',
	writable: false,
	enumerable: false,
	configurable: true
});

const INTERNALS$2 = Symbol('Request internals');

// fix an issue where "format", "parse" aren't a named export for node <10
const parse_url = Url.parse;
const format_url = Url.format;

const streamDestructionSupported = 'destroy' in Stream.Readable.prototype;

/**
 * Check if a value is an instance of Request.
 *
 * @param   Mixed   input
 * @return  Boolean
 */
function isRequest(input) {
	return typeof input === 'object' && typeof input[INTERNALS$2] === 'object';
}

function isAbortSignal(signal) {
	const proto = signal && typeof signal === 'object' && Object.getPrototypeOf(signal);
	return !!(proto && proto.constructor.name === 'AbortSignal');
}

/**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */
class Request {
	constructor(input) {
		let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		let parsedURL;

		// normalize input
		if (!isRequest(input)) {
			if (input && input.href) {
				// in order to support Node.js' Url objects; though WHATWG's URL objects
				// will fall into this branch also (since their `toString()` will return
				// `href` property anyway)
				parsedURL = parse_url(input.href);
			} else {
				// coerce input to a string before attempting to parse
				parsedURL = parse_url(`${input}`);
			}
			input = {};
		} else {
			parsedURL = parse_url(input.url);
		}

		let method = init.method || input.method || 'GET';
		method = method.toUpperCase();

		if ((init.body != null || isRequest(input) && input.body !== null) && (method === 'GET' || method === 'HEAD')) {
			throw new TypeError('Request with GET/HEAD method cannot have body');
		}

		let inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;

		Body.call(this, inputBody, {
			timeout: init.timeout || input.timeout || 0,
			size: init.size || input.size || 0
		});

		const headers = new Headers(init.headers || input.headers || {});

		if (inputBody != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(inputBody);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		let signal = isRequest(input) ? input.signal : null;
		if ('signal' in init) signal = init.signal;

		if (signal != null && !isAbortSignal(signal)) {
			throw new TypeError('Expected signal to be an instanceof AbortSignal');
		}

		this[INTERNALS$2] = {
			method,
			redirect: init.redirect || input.redirect || 'follow',
			headers,
			parsedURL,
			signal
		};

		// node-fetch-only options
		this.follow = init.follow !== undefined ? init.follow : input.follow !== undefined ? input.follow : 20;
		this.compress = init.compress !== undefined ? init.compress : input.compress !== undefined ? input.compress : true;
		this.counter = init.counter || input.counter || 0;
		this.agent = init.agent || input.agent;
	}

	get method() {
		return this[INTERNALS$2].method;
	}

	get url() {
		return format_url(this[INTERNALS$2].parsedURL);
	}

	get headers() {
		return this[INTERNALS$2].headers;
	}

	get redirect() {
		return this[INTERNALS$2].redirect;
	}

	get signal() {
		return this[INTERNALS$2].signal;
	}

	/**
  * Clone this request
  *
  * @return  Request
  */
	clone() {
		return new Request(this);
	}
}

Body.mixIn(Request.prototype);

Object.defineProperty(Request.prototype, Symbol.toStringTag, {
	value: 'Request',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Request.prototype, {
	method: { enumerable: true },
	url: { enumerable: true },
	headers: { enumerable: true },
	redirect: { enumerable: true },
	clone: { enumerable: true },
	signal: { enumerable: true }
});

/**
 * Convert a Request to Node.js http request options.
 *
 * @param   Request  A Request instance
 * @return  Object   The options object to be passed to http.request
 */
function getNodeRequestOptions(request) {
	const parsedURL = request[INTERNALS$2].parsedURL;
	const headers = new Headers(request[INTERNALS$2].headers);

	// fetch step 1.3
	if (!headers.has('Accept')) {
		headers.set('Accept', '*/*');
	}

	// Basic fetch
	if (!parsedURL.protocol || !parsedURL.hostname) {
		throw new TypeError('Only absolute URLs are supported');
	}

	if (!/^https?:$/.test(parsedURL.protocol)) {
		throw new TypeError('Only HTTP(S) protocols are supported');
	}

	if (request.signal && request.body instanceof Stream.Readable && !streamDestructionSupported) {
		throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');
	}

	// HTTP-network-or-cache fetch steps 2.4-2.7
	let contentLengthValue = null;
	if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
		contentLengthValue = '0';
	}
	if (request.body != null) {
		const totalBytes = getTotalBytes(request);
		if (typeof totalBytes === 'number') {
			contentLengthValue = String(totalBytes);
		}
	}
	if (contentLengthValue) {
		headers.set('Content-Length', contentLengthValue);
	}

	// HTTP-network-or-cache fetch step 2.11
	if (!headers.has('User-Agent')) {
		headers.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
	}

	// HTTP-network-or-cache fetch step 2.15
	if (request.compress && !headers.has('Accept-Encoding')) {
		headers.set('Accept-Encoding', 'gzip,deflate');
	}

	let agent = request.agent;
	if (typeof agent === 'function') {
		agent = agent(parsedURL);
	}

	if (!headers.has('Connection') && !agent) {
		headers.set('Connection', 'close');
	}

	// HTTP-network fetch step 4.2
	// chunked encoding is handled by Node.js

	return Object.assign({}, parsedURL, {
		method: request.method,
		headers: exportNodeCompatibleHeaders(headers),
		agent
	});
}

/**
 * abort-error.js
 *
 * AbortError interface for cancelled requests
 */

/**
 * Create AbortError instance
 *
 * @param   String      message      Error message for human
 * @return  AbortError
 */
function AbortError(message) {
  Error.call(this, message);

  this.type = 'aborted';
  this.message = message;

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

AbortError.prototype = Object.create(Error.prototype);
AbortError.prototype.constructor = AbortError;
AbortError.prototype.name = 'AbortError';

// fix an issue where "PassThrough", "resolve" aren't a named export for node <10
const PassThrough$1 = Stream.PassThrough;
const resolve_url = Url.resolve;

/**
 * Fetch function
 *
 * @param   Mixed    url   Absolute url or Request instance
 * @param   Object   opts  Fetch options
 * @return  Promise
 */
function fetch(url, opts) {

	// allow custom promise
	if (!fetch.Promise) {
		throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
	}

	Body.Promise = fetch.Promise;

	// wrap http.request into fetch
	return new fetch.Promise(function (resolve, reject) {
		// build request object
		const request = new Request(url, opts);
		const options = getNodeRequestOptions(request);

		const send = (options.protocol === 'https:' ? https : http).request;
		const signal = request.signal;

		let response = null;

		const abort = function abort() {
			let error = new AbortError('The user aborted a request.');
			reject(error);
			if (request.body && request.body instanceof Stream.Readable) {
				request.body.destroy(error);
			}
			if (!response || !response.body) return;
			response.body.emit('error', error);
		};

		if (signal && signal.aborted) {
			abort();
			return;
		}

		const abortAndFinalize = function abortAndFinalize() {
			abort();
			finalize();
		};

		// send request
		const req = send(options);
		let reqTimeout;

		if (signal) {
			signal.addEventListener('abort', abortAndFinalize);
		}

		function finalize() {
			req.abort();
			if (signal) signal.removeEventListener('abort', abortAndFinalize);
			clearTimeout(reqTimeout);
		}

		if (request.timeout) {
			req.once('socket', function (socket) {
				reqTimeout = setTimeout(function () {
					reject(new FetchError(`network timeout at: ${request.url}`, 'request-timeout'));
					finalize();
				}, request.timeout);
			});
		}

		req.on('error', function (err) {
			reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
			finalize();
		});

		req.on('response', function (res) {
			clearTimeout(reqTimeout);

			const headers = createHeadersLenient(res.headers);

			// HTTP fetch step 5
			if (fetch.isRedirect(res.statusCode)) {
				// HTTP fetch step 5.2
				const location = headers.get('Location');

				// HTTP fetch step 5.3
				const locationURL = location === null ? null : resolve_url(request.url, location);

				// HTTP fetch step 5.5
				switch (request.redirect) {
					case 'error':
						reject(new FetchError(`redirect mode is set to error: ${request.url}`, 'no-redirect'));
						finalize();
						return;
					case 'manual':
						// node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
						if (locationURL !== null) {
							// handle corrupted header
							try {
								headers.set('Location', locationURL);
							} catch (err) {
								// istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
								reject(err);
							}
						}
						break;
					case 'follow':
						// HTTP-redirect fetch step 2
						if (locationURL === null) {
							break;
						}

						// HTTP-redirect fetch step 5
						if (request.counter >= request.follow) {
							reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 6 (counter increment)
						// Create a new Request object.
						const requestOpts = {
							headers: new Headers(request.headers),
							follow: request.follow,
							counter: request.counter + 1,
							agent: request.agent,
							compress: request.compress,
							method: request.method,
							body: request.body,
							signal: request.signal,
							timeout: request.timeout
						};

						// HTTP-redirect fetch step 9
						if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
							reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 11
						if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === 'POST') {
							requestOpts.method = 'GET';
							requestOpts.body = undefined;
							requestOpts.headers.delete('content-length');
						}

						// HTTP-redirect fetch step 15
						resolve(fetch(new Request(locationURL, requestOpts)));
						finalize();
						return;
				}
			}

			// prepare response
			res.once('end', function () {
				if (signal) signal.removeEventListener('abort', abortAndFinalize);
			});
			let body = res.pipe(new PassThrough$1());

			const response_options = {
				url: request.url,
				status: res.statusCode,
				statusText: res.statusMessage,
				headers: headers,
				size: request.size,
				timeout: request.timeout,
				counter: request.counter
			};

			// HTTP-network fetch step 12.1.1.3
			const codings = headers.get('Content-Encoding');

			// HTTP-network fetch step 12.1.1.4: handle content codings

			// in following scenarios we ignore compression support
			// 1. compression support is disabled
			// 2. HEAD request
			// 3. no Content-Encoding header
			// 4. no content response (204)
			// 5. content not modified response (304)
			if (!request.compress || request.method === 'HEAD' || codings === null || res.statusCode === 204 || res.statusCode === 304) {
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// For Node v6+
			// Be less strict when decoding compressed responses, since sometimes
			// servers send slightly invalid responses that are still accepted
			// by common browsers.
			// Always using Z_SYNC_FLUSH is what cURL does.
			const zlibOptions = {
				flush: zlib.Z_SYNC_FLUSH,
				finishFlush: zlib.Z_SYNC_FLUSH
			};

			// for gzip
			if (codings == 'gzip' || codings == 'x-gzip') {
				body = body.pipe(zlib.createGunzip(zlibOptions));
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// for deflate
			if (codings == 'deflate' || codings == 'x-deflate') {
				// handle the infamous raw deflate response from old servers
				// a hack for old IIS and Apache servers
				const raw = res.pipe(new PassThrough$1());
				raw.once('data', function (chunk) {
					// see http://stackoverflow.com/questions/37519828
					if ((chunk[0] & 0x0F) === 0x08) {
						body = body.pipe(zlib.createInflate());
					} else {
						body = body.pipe(zlib.createInflateRaw());
					}
					response = new Response(body, response_options);
					resolve(response);
				});
				return;
			}

			// for br
			if (codings == 'br' && typeof zlib.createBrotliDecompress === 'function') {
				body = body.pipe(zlib.createBrotliDecompress());
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// otherwise, use response as-is
			response = new Response(body, response_options);
			resolve(response);
		});

		writeToStream(req, request);
	});
}
/**
 * Redirect code matching
 *
 * @param   Number   code  Status code
 * @return  Boolean
 */
fetch.isRedirect = function (code) {
	return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
};

// expose Promise
fetch.Promise = global.Promise;

function get_page_handler(
	manifest,
	session_getter
) {
	const get_build_info =  (assets => () => assets)(JSON.parse(fs.readFileSync(path.join(build_dir, 'build.json'), 'utf-8')));

	const template =  (str => () => str)(read_template(build_dir));

	const has_service_worker = fs.existsSync(path.join(build_dir, 'service-worker.js'));

	const { server_routes, pages } = manifest;
	const error_route = manifest.error;

	function bail(req, res, err) {
		console.error(err);

		const message =  'Internal server error';

		res.statusCode = 500;
		res.end(`<pre>${message}</pre>`);
	}

	function handle_error(req, res, statusCode, error) {
		handle_page({
			pattern: null,
			parts: [
				{ name: null, component: error_route }
			]
		}, req, res, statusCode, error || new Error('Unknown error in preload function'));
	}

	async function handle_page(page, req, res, status = 200, error = null) {
		const is_service_worker_index = req.path === '/service-worker-index.html';
		const build_info




 = get_build_info();

		res.setHeader('Content-Type', 'text/html');
		res.setHeader('Cache-Control',  'max-age=600');

		// preload main.js and current route
		// TODO detect other stuff we can preload? images, CSS, fonts?
		let preloaded_chunks = Array.isArray(build_info.assets.main) ? build_info.assets.main : [build_info.assets.main];
		if (!error && !is_service_worker_index) {
			page.parts.forEach(part => {
				if (!part) return;

				// using concat because it could be a string or an array. thanks webpack!
				preloaded_chunks = preloaded_chunks.concat(build_info.assets[part.name]);
			});
		}

		if (build_info.bundler === 'rollup') {
			// TODO add dependencies and CSS
			const link = preloaded_chunks
				.filter(file => file && !file.match(/\.map$/))
				.map(file => `<${req.baseUrl}/client/${file}>;rel="modulepreload"`)
				.join(', ');

			res.setHeader('Link', link);
		} else {
			const link = preloaded_chunks
				.filter(file => file && !file.match(/\.map$/))
				.map((file) => {
					const as = /\.css$/.test(file) ? 'style' : 'script';
					return `<${req.baseUrl}/client/${file}>;rel="preload";as="${as}"`;
				})
				.join(', ');

			res.setHeader('Link', link);
		}

		let session;
		try {
			session = await session_getter(req, res);
		} catch (err) {
			return bail(req, res, err);
		}

		let redirect;
		let preload_error;

		const preload_context = {
			redirect: (statusCode, location) => {
				if (redirect && (redirect.statusCode !== statusCode || redirect.location !== location)) {
					throw new Error(`Conflicting redirects`);
				}
				location = location.replace(/^\//g, ''); // leading slash (only)
				redirect = { statusCode, location };
			},
			error: (statusCode, message) => {
				preload_error = { statusCode, message };
			},
			fetch: (url, opts) => {
				const parsed = new Url.URL(url, `http://127.0.0.1:${process.env.PORT}${req.baseUrl ? req.baseUrl + '/' :''}`);

				opts = Object.assign({}, opts);

				const include_credentials = (
					opts.credentials === 'include' ||
					opts.credentials !== 'omit' && parsed.origin === `http://127.0.0.1:${process.env.PORT}`
				);

				if (include_credentials) {
					opts.headers = Object.assign({}, opts.headers);

					const cookies = Object.assign(
						{},
						cookie.parse(req.headers.cookie || ''),
						cookie.parse(opts.headers.cookie || '')
					);

					const set_cookie = res.getHeader('Set-Cookie');
					(Array.isArray(set_cookie) ? set_cookie : [set_cookie]).forEach(str => {
						const match = /([^=]+)=([^;]+)/.exec(str);
						if (match) cookies[match[1]] = match[2];
					});

					const str = Object.keys(cookies)
						.map(key => `${key}=${cookies[key]}`)
						.join('; ');

					opts.headers.cookie = str;

					if (!opts.headers.authorization && req.headers.authorization) {
						opts.headers.authorization = req.headers.authorization;
					}
				}

				return fetch(parsed.href, opts);
			}
		};

		let preloaded;
		let match;
		let params;

		try {
			const root_preloaded = manifest.root_preload
				? manifest.root_preload.call(preload_context, {
					host: req.headers.host,
					path: req.path,
					query: req.query,
					params: {}
				}, session)
				: {};

			match = error ? null : page.pattern.exec(req.path);


			let toPreload = [root_preloaded];
			if (!is_service_worker_index) {
				toPreload = toPreload.concat(page.parts.map(part => {
					if (!part) return null;

					// the deepest level is used below, to initialise the store
					params = part.params ? part.params(match) : {};

					return part.preload
						? part.preload.call(preload_context, {
							host: req.headers.host,
							path: req.path,
							query: req.query,
							params
						}, session)
						: {};
				}));
			}

			preloaded = await Promise.all(toPreload);
		} catch (err) {
			if (error) {
				return bail(req, res, err)
			}

			preload_error = { statusCode: 500, message: err };
			preloaded = []; // appease TypeScript
		}

		try {
			if (redirect) {
				const location = Url.resolve((req.baseUrl || '') + '/', redirect.location);

				res.statusCode = redirect.statusCode;
				res.setHeader('Location', location);
				res.end();

				return;
			}

			if (preload_error) {
				handle_error(req, res, preload_error.statusCode, preload_error.message);
				return;
			}

			const segments = req.path.split('/').filter(Boolean);

			// TODO make this less confusing
			const layout_segments = [segments[0]];
			let l = 1;

			page.parts.forEach((part, i) => {
				layout_segments[l] = segments[i + 1];
				if (!part) return null;
				l++;
			});

			const props = {
				stores: {
					page: {
						subscribe: writable({
							host: req.headers.host,
							path: req.path,
							query: req.query,
							params
						}).subscribe
					},
					preloading: {
						subscribe: writable(null).subscribe
					},
					session: writable(session)
				},
				segments: layout_segments,
				status: error ? status : 200,
				error: error ? error instanceof Error ? error : { message: error } : null,
				level0: {
					props: preloaded[0]
				},
				level1: {
					segment: segments[0],
					props: {}
				}
			};

			if (!is_service_worker_index) {
				let l = 1;
				for (let i = 0; i < page.parts.length; i += 1) {
					const part = page.parts[i];
					if (!part) continue;

					props[`level${l++}`] = {
						component: part.component,
						props: preloaded[i + 1] || {},
						segment: segments[i]
					};
				}
			}

			const { html, head, css } = App.render(props);

			const serialized = {
				preloaded: `[${preloaded.map(data => try_serialize(data)).join(',')}]`,
				session: session && try_serialize(session, err => {
					throw new Error(`Failed to serialize session data: ${err.message}`);
				}),
				error: error && serialize_error(props.error)
			};

			let script = `__SAPPER__={${[
				error && `error:${serialized.error},status:${status}`,
				`baseUrl:"${req.baseUrl}"`,
				serialized.preloaded && `preloaded:${serialized.preloaded}`,
				serialized.session && `session:${serialized.session}`
			].filter(Boolean).join(',')}};`;

			if (has_service_worker) {
				script += `if('serviceWorker' in navigator)navigator.serviceWorker.register('${req.baseUrl}/service-worker.js');`;
			}

			const file = [].concat(build_info.assets.main).filter(file => file && /\.js$/.test(file))[0];
			const main = `${req.baseUrl}/client/${file}`;

			if (build_info.bundler === 'rollup') {
				if (build_info.legacy_assets) {
					const legacy_main = `${req.baseUrl}/client/legacy/${build_info.legacy_assets.main}`;
					script += `(function(){try{eval("async function x(){}");var main="${main}"}catch(e){main="${legacy_main}"};var s=document.createElement("script");try{new Function("if(0)import('')")();s.src=main;s.type="module";s.crossOrigin="use-credentials";}catch(e){s.src="${req.baseUrl}/client/shimport@${build_info.shimport}.js";s.setAttribute("data-main",main);}document.head.appendChild(s);}());`;
				} else {
					script += `var s=document.createElement("script");try{new Function("if(0)import('')")();s.src="${main}";s.type="module";s.crossOrigin="use-credentials";}catch(e){s.src="${req.baseUrl}/client/shimport@${build_info.shimport}.js";s.setAttribute("data-main","${main}")}document.head.appendChild(s)`;
				}
			} else {
				script += `</script><script src="${main}">`;
			}

			let styles;

			// TODO make this consistent across apps
			// TODO embed build_info in placeholder.ts
			if (build_info.css && build_info.css.main) {
				const css_chunks = new Set();
				if (build_info.css.main) css_chunks.add(build_info.css.main);
				page.parts.forEach(part => {
					if (!part) return;
					const css_chunks_for_part = build_info.css.chunks[part.file];

					if (css_chunks_for_part) {
						css_chunks_for_part.forEach(file => {
							css_chunks.add(file);
						});
					}
				});

				styles = Array.from(css_chunks)
					.map(href => `<link rel="stylesheet" href="client/${href}">`)
					.join('');
			} else {
				styles = (css && css.code ? `<style>${css.code}</style>` : '');
			}

			// users can set a CSP nonce using res.locals.nonce
			const nonce_attr = (res.locals && res.locals.nonce) ? ` nonce="${res.locals.nonce}"` : '';

			const body = template()
				.replace('%sapper.base%', () => `<base href="${req.baseUrl}/">`)
				.replace('%sapper.scripts%', () => `<script${nonce_attr}>${script}</script>`)
				.replace('%sapper.html%', () => html)
				.replace('%sapper.head%', () => `<noscript id='sapper-head-start'></noscript>${head}<noscript id='sapper-head-end'></noscript>`)
				.replace('%sapper.styles%', () => styles);

			res.statusCode = status;
			res.end(body);
		} catch(err) {
			if (error) {
				bail(req, res, err);
			} else {
				handle_error(req, res, 500, err);
			}
		}
	}

	return function find_route(req, res, next) {
		if (req.path === '/service-worker-index.html') {
			const homePage = pages.find(page => page.pattern.test('/'));
			handle_page(homePage, req, res);
			return;
		}

		for (const page of pages) {
			if (page.pattern.test(req.path)) {
				handle_page(page, req, res);
				return;
			}
		}

		handle_error(req, res, 404, 'Not found');
	};
}

function read_template(dir = build_dir) {
	return fs.readFileSync(`${dir}/template.html`, 'utf-8');
}

function try_serialize(data, fail) {
	try {
		return devalue(data);
	} catch (err) {
		if (fail) fail(err);
		return null;
	}
}

// Ensure we return something truthy so the client will not re-render the page over the error
function serialize_error(error) {
	if (!error) return null;
	let serialized = try_serialize(error);
	if (!serialized) {
		const { name, message, stack } = error ;
		serialized = try_serialize({ name, message, stack });
	}
	if (!serialized) {
		serialized = '{}';
	}
	return serialized;
}

function middleware(opts


 = {}) {
	const { session, ignore } = opts;

	let emitted_basepath = false;

	return compose_handlers(ignore, [
		(req, res, next) => {
			if (req.baseUrl === undefined) {
				let { originalUrl } = req;
				if (req.url === '/' && originalUrl[originalUrl.length - 1] !== '/') {
					originalUrl += '/';
				}

				req.baseUrl = originalUrl
					? originalUrl.slice(0, -req.url.length)
					: '';
			}

			if (!emitted_basepath && process.send) {
				process.send({
					__sapper__: true,
					event: 'basepath',
					basepath: req.baseUrl
				});

				emitted_basepath = true;
			}

			if (req.path === undefined) {
				req.path = req.url.replace(/\?.*/, '');
			}

			next();
		},

		fs.existsSync(path.join(build_dir, 'service-worker.js')) && serve({
			pathname: '/service-worker.js',
			cache_control: 'no-cache, no-store, must-revalidate'
		}),

		fs.existsSync(path.join(build_dir, 'service-worker.js.map')) && serve({
			pathname: '/service-worker.js.map',
			cache_control: 'no-cache, no-store, must-revalidate'
		}),

		serve({
			prefix: '/client/',
			cache_control:  'max-age=31536000, immutable'
		}),

		get_server_route_handler(manifest.server_routes),

		get_page_handler(manifest, session || noop$1)
	].filter(Boolean));
}

function compose_handlers(ignore, handlers) {
	const total = handlers.length;

	function nth_handler(n, req, res, next) {
		if (n >= total) {
			return next();
		}

		handlers[n](req, res, () => nth_handler(n+1, req, res, next));
	}

	return !ignore
		? (req, res, next) => nth_handler(0, req, res, next)
		: (req, res, next) => {
			if (should_ignore(req.path, ignore)) {
				next();
			} else {
				nth_handler(0, req, res, next);
			}
		};
}

function should_ignore(uri, val) {
	if (Array.isArray(val)) return val.some(x => should_ignore(uri, x));
	if (val instanceof RegExp) return val.test(uri);
	if (typeof val === 'function') return val(uri);
	return uri.startsWith(val.charCodeAt(0) === 47 ? val : `/${val}`);
}

function serve({ prefix, pathname, cache_control }



) {
	const filter = pathname
		? (req) => req.path === pathname
		: (req) => req.path.startsWith(prefix);

	const cache = new Map();

	const read =  (file) => (cache.has(file) ? cache : cache.set(file, fs.readFileSync(path.join(build_dir, file)))).get(file);

	return (req, res, next) => {
		if (filter(req)) {
			const type = lite.getType(req.path);

			try {
				const file = path.posix.normalize(decodeURIComponent(req.path));
				const data = read(file);

				res.setHeader('Content-Type', type);
				res.setHeader('Cache-Control', cache_control);
				res.end(data);
			} catch (err) {
				res.statusCode = 404;
				res.end('not found');
			}
		} else {
			next();
		}
	};
}

function noop$1(){}

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
