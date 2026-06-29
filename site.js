/* =====================================================================
   SHARED SIDEBAR  —  edit the name, nav, links, or icons here ONCE.
   Renders the rail on every page, so you never touch the seven HTML files.
   To use your own logo: drop a file named  logo.svg  (or change the
   src below to logo.png) next to these files. Until then a generated
   food/energy/water mark shows. Social links marked TODO are yours to fill.
   ===================================================================== */
(function () {
	'use strict';
	if (document.querySelector('.rail')) return;
	var PAGE = document.body.dataset.page || '';
	var IC = {
		home: "<path d='m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'/><path d='M9 22V12h6v10'/>",
		research: "<circle cx='18' cy='5' r='3'/><circle cx='6' cy='12' r='3'/><circle cx='18' cy='19' r='3'/><path d='m8.6 13.5 6.8 4M15.4 6.5 8.6 10.5'/>",
		ongoing: "<path d='M10 2v7.3M14 9.3V2M8.5 2h7'/><path d='M14 9.3a6.5 6.5 0 1 1-4 0'/><path d='M5.5 16h13'/>",
		publications: "<path d='M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z'/><path d='M14 2v5h5'/><path d='M16 13H8M16 17H8M10 9H8'/>",
		education: "<path d='M21.4 10.9a1 1 0 0 0 0-1.8L12.8 5.2a2 2 0 0 0-1.6 0L2.6 9.1a1 1 0 0 0 0 1.8l8.6 3.9a2 2 0 0 0 1.6 0z'/><path d='M22 10v6'/><path d='M6 12.5V16a6 3 0 0 0 12 0v-3.5'/>",
		funding: "<circle cx='12' cy='8' r='6'/><path d='m15.5 12.9 1.5 8.5-3.6-2.7a1 1 0 0 0-1.2 0L8.6 21.4l1.5-8.5'/>",
		blog: "<path d='M12 20h9'/><path d='M16.4 3.6a1 1 0 0 1 3 3L7.4 18.6a2 2 0 0 1-.9.5l-2.9.8.8-2.9a2 2 0 0 1 .5-.9z'/>",
		cv: "<path d='M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z'/><path d='M14 2v5h5'/><path d='M12 18v-6'/><path d='m9 15 3 3 3-3'/>",
		mail: "<rect width='20' height='16' x='2' y='4' rx='2'/><path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'/>",
		scholar: "<path d='M21.4 10.9a1 1 0 0 0 0-1.8L12.8 5.2a2 2 0 0 0-1.6 0L2.6 9.1a1 1 0 0 0 0 1.8l8.6 3.9a2 2 0 0 0 1.6 0z'/><path d='M22 10v6'/><path d='M6 12.5V16a6 3 0 0 0 12 0v-3.5'/>",
		github: "<path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5a5.07 5.07 0 0 0-1-3.5 4.7 4.7 0 0 0-.1-3.5s-1.1-.3-3.5 1.3a12 12 0 0 0-6 0C6.5 2.8 5.4 3.1 5.4 3.1a4.7 4.7 0 0 0-.1 3.5A5.07 5.07 0 0 0 4 10.1c0 3.5 3 5.5 6 5.5a4.8 4.8 0 0 0-1 3.4V22'/><path d='M9 18c-4.5 2-5-2-7-2'/>",
		linkedin: "<path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z'/><rect width='4' height='12' x='2' y='9'/><circle cx='4' cy='4' r='2'/>",
		researchgate: "<rect x='3' y='3' width='18' height='18' rx='4'/><path d='M9.2 16.5V8h3.3a2.3 2.3 0 0 1 0 4.6H9.7m3.3.2 2.4 3.7'/>"
	};
	var NAV = [
		['index.html', 'home', 'Home', 'home'],
		[
			'research-interests.html',
			'research',
			'Research Interests',
			'research'
		],
		[
			'ongoing-research.html',
			'ongoing',
			'Ongoing Research',
			'ongoing'
		],
		[
			'publications.html',
			'publications',
			'Publications',
			'publications'
		],
		[
			'education.html',
			'education',
			'Education &amp; Experience',
			'education'
		],
		['funding.html', 'funding', 'Funding', 'funding'],
		['blog.html', 'blog', 'Blog', 'blog']
	];
	var links = NAV.map(function (it) {
		var on = it[1] === PAGE ? ' is-active' : '';
		return (
			'<a href="' +
			it[0] +
			'" data-internal class="navlink' +
			on +
			'">' +
			"<span class='ic' aria-hidden='true'><svg viewBox='0 0 24 24'>" +
			IC[it[3]] +
			'</svg></span>' +
			'<span>' +
			it[2] +
			'</span></a>'
		);
	}).join('');
	function sIcon(n) {
		return "<svg viewBox='0 0 24 24'>" + IC[n] + '</svg>';
	}
	var rail =
		'' +
		'<button class="rail-toggle" aria-label="Toggle navigation" aria-expanded="false"><span></span></button>' +
		'<aside class="rail">' +
		'<div class="id-head">' +
		'<a class="id-logo" href="index.html" aria-label="Home"><img src="logo.png" alt="" onerror="this.remove()"></a>' +
		'<div class="id-name">Omolola Ogbolumani</div>' +
		'<p class="id-role">Senior Lecturer, Faculty of Engineering</p>' +
		'<p class="id-affil">University of Lagos · Schmidt AI in Science Fellow, UChicago (2026)</p>' +
		'</div>' +
		'<nav class="rail-nav" aria-label="Primary">' +
		links +
		'<a href="cv.pdf" target="_blank" class="navlink ext">' +
		"<span class='ic' aria-hidden='true'><svg viewBox='0 0 24 24'>" +
		IC.cv +
		'</svg></span><span>CV ↗</span></a>' +
		'</nav>' +
		'<div class="rail-foot">' +
		'<div class="sep"></div>' +
		'<div class="social-ic">' +
		'<a aria-label="Email" href="mailto:oogbolumani@unilag.edu.ng">' +
		sIcon('mail') +
		'</a>' +
		'<a aria-label="Google Scholar" href="https://scholar.google.com/citations?user=lLx9UJMAAAAJ&hl=en" target="_blank" rel="noopener">' +
		sIcon('scholar') +
		'</a>' +
		'<a aria-label="GitHub" href="https://github.com/Alarape2000" target="_blank" rel="noopener">' +
		sIcon('github') +
		'</a>' +
		'<a aria-label="LinkedIn" href="https://ng.linkedin.com/in/omolola-ogbolumani-phd-29b205ba" target="_blank" rel="noopener">' +
		sIcon('linkedin') +
		'</a>' +
		'<a aria-label="ResearchGate" href="#" data-todo title="Add your ResearchGate URL">' +
		sIcon('researchgate') +
		'</a>' +
		'</div>' +
		'<div class="social-tx">' +
		'<a href="https://aiscience.uchicago.edu/faculty-fellows/omolola-ogbolumani/" target="_blank" rel="noopener">UChicago</a>' +
		'<a href="https://engineering.unilag.edu.ng/?page_id=2508" target="_blank" rel="noopener">UNILAG</a>' +
		'</div>' +
		'</div>' +
		'</aside>';
	document.body.insertAdjacentHTML('afterbegin', rail);
})();

/* ============ ambient particle field (with domain bias + scroll wash) ============ */
(function () {
	'use strict';
	var canvas = document.getElementById('field');
	if (!canvas || !canvas.getContext) return;
	var ctx = canvas.getContext('2d');
	var PRM = matchMedia('(prefers-reduced-motion: reduce)').matches;
	var HOME = document.body.dataset.page === 'home';
	var COL = [
		[111, 191, 152],
		[79, 169, 203],
		[227, 172, 85]
	];
	var W = 0,
		H = 0,
		dpr = 1,
		parts = [],
		N = 0;
	window.__fweBias = window.__fweBias || [1, 1, 1];
	var mouse = { x: 0, y: 0, on: false },
		lastMove = -1e9,
		engage = 0,
		t0 = 0,
		running = false;
	var R = 205,
		LINK = 72;
	function rgba(c, a) {
		return (
			'rgba(' +
			c[0] +
			',' +
			c[1] +
			',' +
			c[2] +
			',' +
			a +
			')'
		);
	}
	function mix(a, b, k) {
		return [
			a[0] + (b[0] - a[0]) * k,
			a[1] + (b[1] - a[1]) * k,
			a[2] + (b[2] - a[2]) * k
		];
	}
	function resize() {
		dpr = Math.min(window.devicePixelRatio || 1, 2);
		W = innerWidth;
		H = innerHeight;
		canvas.width = W * dpr;
		canvas.height = H * dpr;
		ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		N = Math.round(
			Math.min(210, Math.max(90, (W * H) / 10800))
		);
		build();
	}
	function build() {
		parts = [];
		var s = 20260610 >>> 0;
		function r() {
			s = (s * 1664525 + 1013904223) >>> 0;
			return s / 4294967296;
		}
		for (var i = 0; i < N; i++)
			parts.push({
				x: r() * W,
				y: r() * H,
				vx: (r() - 0.5) * 0.2,
				vy: (r() - 0.5) * 0.2,
				d: i % 3,
				ph: r() * 6.283,
				sz: 1.4 + r() * 1.1
			});
	}
	function flow(x, y, t) {
		return (
			(Math.sin(x * 0.0016 + t * 0.0002) +
				Math.cos(y * 0.0019 - t * 0.00016) +
				Math.sin(
					(x + y) * 0.001 + t * 0.00011
				)) *
			Math.PI
		);
	}
	function contours(t) {
		ctx.lineWidth = 1;
		for (var L = 0; L < 5; L++) {
			ctx.strokeStyle =
				'rgba(233,240,241,' +
				(0.01 + L * 0.003) +
				')';
			ctx.beginPath();
			var yb = H * (0.14 + L * 0.18);
			for (var x = -20; x <= W + 20; x += 16) {
				var y =
					yb +
					Math.sin(
						x * 0.006 +
							L * 1.3 +
							t *
								0.00007
					) *
						22 +
					Math.cos(
						x * 0.013 -
							L +
							t *
								0.00005
					) *
						12;
				if (x === -20) ctx.moveTo(x, y);
				else ctx.lineTo(x, y);
			}
			ctx.stroke();
		}
	}
	function wash() {
		var b = window.__fweBias || [1, 1, 1];
		var s = b[0] + b[1] + b[2] || 1;
		var wc = [
			(COL[0][0] * b[0] +
				COL[1][0] * b[1] +
				COL[2][0] * b[2]) /
				s,
			(COL[0][1] * b[0] +
				COL[1][1] * b[1] +
				COL[2][1] * b[2]) /
				s,
			(COL[0][2] * b[0] +
				COL[1][2] * b[1] +
				COL[2][2] * b[2]) /
				s
		];
		var g = ctx.createRadialGradient(
			W * 0.42,
			H * 0.4,
			0,
			W * 0.42,
			H * 0.4,
			Math.max(W, H) * 0.72
		);
		g.addColorStop(0, rgba(wc, 0.085));
		g.addColorStop(1, 'rgba(0,0,0,0)');
		ctx.fillStyle = g;
		ctx.fillRect(0, 0, W, H);
	}
	function step(now) {
		if (!running) return;
		var t = now - t0;
		var active = mouse.on && now - lastMove < 1600;
		engage += ((active ? 1 : 0) - engage) * 0.06;
		if (engage < 0.001) engage = 0;
		ctx.clearRect(0, 0, W, H);
		if (!PRM) contours(t);
		if (HOME && !PRM) wash();
		var i, p;
		for (i = 0; i < parts.length; i++) {
			p = parts[i];
			var ang = flow(p.x, p.y, t);
			var fs = p.d === 1 ? 0.085 : 0.05;
			p.vx += Math.cos(ang) * fs;
			p.vy += Math.sin(ang) * fs;
			if (p.d === 0)
				p.vx +=
					Math.sin(t * 0.0009 + p.ph) *
					0.018;
			if (p.d === 2) {
				p.vx +=
					Math.sin(t * 0.004 + p.ph) *
					0.012;
				p.vy +=
					Math.cos(t * 0.005 + p.ph) *
					0.012;
			}
			if (engage > 0 && mouse.on) {
				var dx = p.x - mouse.x,
					dy = p.y - mouse.y,
					dist = Math.hypot(dx, dy);
				if (dist < R && dist > 0.5) {
					var inf =
						(1 - dist / R) *
						engage;
					p.vx +=
						(-dy / dist) *
							inf *
							0.55 +
						(dx / dist) *
							inf *
							0.12;
					p.vy +=
						(dx / dist) *
							inf *
							0.55 +
						(dy / dist) *
							inf *
							0.12;
				}
			}
			p.vx *= 0.93;
			p.vy *= 0.93;
			var sp = Math.hypot(p.vx, p.vy);
			if (sp > 1.7) {
				p.vx = (p.vx / sp) * 1.7;
				p.vy = (p.vy / sp) * 1.7;
			}
			p.x += p.vx;
			p.y += p.vy;
			if (p.x < -20) p.x = W + 20;
			else if (p.x > W + 20) p.x = -20;
			if (p.y < -20) p.y = H + 20;
			else if (p.y > H + 20) p.y = -20;
		}
		if (engage > 0.04 && mouse.on) {
			var act = [];
			for (i = 0; i < parts.length; i++) {
				p = parts[i];
				if (
					Math.hypot(
						p.x - mouse.x,
						p.y - mouse.y
					) <
					R + LINK
				)
					act.push(p);
			}
			for (i = 0; i < act.length; i++)
				for (
					var j = i + 1;
					j < act.length;
					j++
				) {
					var a = act[i],
						b = act[j],
						dd = Math.hypot(
							a.x - b.x,
							a.y - b.y
						);
					if (dd < LINK) {
						var mxp =
								(a.x +
									b.x) /
								2,
							myp =
								(a.y +
									b.y) /
								2,
							cd =
								Math.hypot(
									mxp -
										mouse.x,
									myp -
										mouse.y
								);
						if (cd < R) {
							var al =
								(1 -
									dd /
										LINK) *
								(1 -
									cd /
										R) *
								engage *
								0.7;
							if (
								al >
								0.01
							) {
								ctx.strokeStyle =
									rgba(
										mix(
											COL[
												a
													.d
											],
											COL[
												b
													.d
											],
											0.5
										),
										al
									);
								ctx.lineWidth = 0.8;
								ctx.beginPath();
								ctx.moveTo(
									a.x,
									a.y
								);
								ctx.lineTo(
									b.x,
									b.y
								);
								ctx.stroke();
							}
						}
					}
				}
		}
		var bias = window.__fweBias || [1, 1, 1];
		for (i = 0; i < parts.length; i++) {
			p = parts[i];
			var c = COL[p.d],
				near = 0;
			if (mouse.on) {
				var ddd = Math.hypot(
					p.x - mouse.x,
					p.y - mouse.y
				);
				if (ddd < R)
					near = (1 - ddd / R) * engage;
			}
			var pulse =
				p.d === 2
					? 0.78 +
						0.22 *
							Math.sin(
								t *
									0.003 +
									p.ph
							)
					: 1;
			var bf = bias[p.d] || 1;
			var rad =
				p.sz *
				pulse *
				(1 + near * 0.7) *
				(0.82 + bf * 0.22);
			ctx.shadowColor = rgba(c, 0.9);
			ctx.shadowBlur =
				(6 + near * 12) * (0.55 + 0.45 * bf);
			ctx.fillStyle = rgba(
				c,
				Math.min(1, (0.32 + near * 0.5) * bf)
			);
			ctx.beginPath();
			ctx.arc(p.x, p.y, rad, 0, 6.283);
			ctx.fill();
		}
		ctx.shadowBlur = 0;
		requestAnimationFrame(step);
	}
	function still() {
		ctx.clearRect(0, 0, W, H);
		contours(0);
		for (var i = 0; i < parts.length; i++) {
			var p = parts[i];
			ctx.fillStyle = rgba(COL[p.d], 0.5);
			ctx.beginPath();
			ctx.arc(p.x, p.y, p.sz, 0, 6.283);
			ctx.fill();
		}
	}
	addEventListener(
		'pointermove',
		function (e) {
			mouse.x = e.clientX;
			mouse.y = e.clientY;
			mouse.on = true;
			lastMove = performance.now();
		},
		{ passive: true }
	);
	addEventListener(
		'pointerdown',
		function (e) {
			mouse.x = e.clientX;
			mouse.y = e.clientY;
			mouse.on = true;
			lastMove = performance.now();
		},
		{ passive: true }
	);
	var rt;
	addEventListener('resize', function () {
		clearTimeout(rt);
		rt = setTimeout(function () {
			resize();
			if (PRM) still();
		}, 150);
	});
	resize();
	if (PRM) still();
	else {
		running = true;
		t0 = performance.now();
		requestAnimationFrame(step);
	}
})();

/* ============ scroll-narrative morph (home only) ============ */
(function () {
	'use strict';
	if (document.body.dataset.page !== 'home') return;
	var PRM = matchMedia('(prefers-reduced-motion: reduce)').matches;
	var spine = document.querySelectorAll('.spine .s');
	var AC = ['#6FBF98', '#4FA9CB', '#E3AC55', '#E9F0F1'];
	var K = [
		[0, [1.7, 0.6, 0.6]],
		[0.34, [0.6, 1.7, 0.6]],
		[0.66, [0.6, 0.6, 1.7]],
		[1, [1.18, 1.1, 1.04]]
	];
	var target = [1, 1, 1],
		cur = [1, 1, 1];
	function prog() {
		var m = document.documentElement.scrollHeight - innerHeight;
		return m > 0
			? Math.min(
					1,
					Math.max(
						0,
						(window.scrollY ||
							window.pageYOffset) /
							m
					)
				)
			: 0;
	}
	function upd() {
		var p = prog();
		var i = 0;
		while (i < K.length - 1 && p > K[i + 1][0]) i++;
		var a = K[i],
			b = K[Math.min(i + 1, K.length - 1)];
		var sp = b[0] - a[0] || 1,
			k = (p - a[0]) / sp;
		k = k < 0 ? 0 : k > 1 ? 1 : k;
		for (var d = 0; d < 3; d++)
			target[d] = a[1][d] + (b[1][d] - a[1][d]) * k;
		var z = p < 0.3 ? 0 : p < 0.62 ? 1 : p < 0.88 ? 2 : 3;
		if (spine.length)
			spine.forEach(function (s) {
				s.classList.toggle(
					'active',
					+s.dataset.z === z
				);
			});
		document.documentElement.style.setProperty(
			'--accent',
			AC[z]
		);
	}
	addEventListener('scroll', upd, { passive: true });
	addEventListener('resize', upd, { passive: true });
	upd();
	if (PRM) {
		window.__fweBias = target.slice();
		return;
	}
	(function ease() {
		for (var d = 0; d < 3; d++)
			cur[d] += (target[d] - cur[d]) * 0.06;
		window.__fweBias = cur;
		requestAnimationFrame(ease);
	})();
})();

/* ============ ternary trade-off ============ */
(function () {
	'use strict';
	var svg = document.getElementById('tri');
	if (!svg) return;
	var PRM = matchMedia('(prefers-reduced-motion: reduce)').matches;
	var V = [
		[180, 34],
		[38, 288],
		[322, 288]
	];
	var Hn = document.getElementById('tri-h');
	var dot = Hn.querySelector('.th-dot'),
		ring = Hn.querySelector('.th-ring');
	var pulls = [
		svg.querySelector('.pf'),
		svg.querySelector('.pw'),
		svg.querySelector('.pe')
	];
	var verdict = document.getElementById('verdict');
	var ro = document.getElementById('ro');
	var px = 180,
		py = 200,
		dragging = false,
		lastUser = -1e9,
		auto = true,
		ai = 0,
		at = 0;
	var names = ['Food', 'Water', 'Energy'];
	var presets = [
		[180, 90],
		[95, 250],
		[265, 250],
		[180, 200],
		[150, 150]
	];
	function bary(x, y) {
		var x1 = V[0][0],
			y1 = V[0][1],
			x2 = V[1][0],
			y2 = V[1][1],
			x3 = V[2][0],
			y3 = V[2][1];
		var det = (y2 - y3) * (x1 - x3) + (x3 - x2) * (y1 - y3);
		var a = ((y2 - y3) * (x - x3) + (x3 - x2) * (y - y3)) / det;
		var b = ((y3 - y1) * (x - x3) + (x1 - x3) * (y - y3)) / det;
		return [a, b, 1 - a - b];
	}
	function clampTri(x, y) {
		var w = bary(x, y);
		if (w[0] >= 0 && w[1] >= 0 && w[2] >= 0) return [x, y, w];
		w = w.map(function (v) {
			return Math.max(0, v);
		});
		var s = w[0] + w[1] + w[2];
		w = w.map(function (v) {
			return v / s;
		});
		return [
			w[0] * V[0][0] + w[1] * V[1][0] + w[2] * V[2][0],
			w[0] * V[0][1] + w[1] * V[1][1] + w[2] * V[2][1],
			w
		];
	}
	function pct(w) {
		var r = [
			Math.round(w[0] * 100),
			Math.round(w[1] * 100),
			Math.round(w[2] * 100)
		];
		var s = r[0] + r[1] + r[2];
		r[2] += 100 - s;
		return r;
	}
	function verdictText(w) {
		var p = pct(w),
			order = [0, 1, 2].sort(function (a, b) {
				return w[b] - w[a];
			});
		var hi = order[0],
			spread = w[order[0]] - w[order[2]];
		if (spread < 0.12)
			return '<b>Balanced.</b> No single system carries the plan, the rare case where nothing is being traded away.';
		return (
			'<b>Leaning ' +
			names[hi].toLowerCase() +
			' (' +
			p[hi] +
			'%).</b> That emphasis is paid for in ' +
			names[order[1]].toLowerCase() +
			' and ' +
			names[order[2]].toLowerCase() +
			'. The burden shifts, it does not disappear.'
		);
	}
	function render() {
		var r = clampTri(px, py);
		px = r[0];
		py = r[1];
		var w = r[2],
			p = pct(w);
		dot.setAttribute('cx', px);
		dot.setAttribute('cy', py);
		ring.setAttribute('cx', px);
		ring.setAttribute('cy', py);
		for (var i = 0; i < 3; i++) {
			pulls[i].setAttribute('x1', px);
			pulls[i].setAttribute('y1', py);
			pulls[i].setAttribute(
				'stroke-width',
				(0.6 + w[i] * 6).toFixed(2)
			);
			pulls[i].setAttribute(
				'stroke-opacity',
				(0.18 + w[i] * 0.6).toFixed(2)
			);
		}
		var keys = ['f', 'w', 'e'];
		for (i = 0; i < 3; i++) {
			var vEl = ro.querySelector(
					'[data-v="' + keys[i] + '"]'
				),
				bEl = ro.querySelector(
					'[data-b="' + keys[i] + '"]'
				);
			if (vEl) vEl.textContent = p[i] + '%';
			if (bEl) bEl.style.width = p[i] + '%';
		}
		verdict.innerHTML = verdictText(w);
		Hn.setAttribute(
			'aria-valuetext',
			'food ' +
				p[0] +
				', water ' +
				p[1] +
				', energy ' +
				p[2] +
				' percent'
		);
	}
	function toLocal(e) {
		var r = svg.getBoundingClientRect();
		return [
			((e.clientX - r.left) / r.width) * 360,
			((e.clientY - r.top) / r.height) * 322
		];
	}
	function setUser() {
		lastUser = performance.now();
		auto = false;
	}
	svg.addEventListener('pointerdown', function (e) {
		dragging = true;
		setUser();
		var l = toLocal(e);
		px = l[0];
		py = l[1];
		render();
		try {
			svg.setPointerCapture(e.pointerId);
		} catch (_) {}
	});
	svg.addEventListener('pointermove', function (e) {
		if (!dragging) return;
		var l = toLocal(e);
		px = l[0];
		py = l[1];
		render();
	});
	addEventListener('pointerup', function () {
		dragging = false;
	});
	Hn.addEventListener('keydown', function (e) {
		var s = 8,
			moved = true;
		if (e.key === 'ArrowUp') py -= s;
		else if (e.key === 'ArrowDown') py += s;
		else if (e.key === 'ArrowLeft') px -= s;
		else if (e.key === 'ArrowRight') px += s;
		else moved = false;
		if (moved) {
			e.preventDefault();
			setUser();
			render();
		}
	});
	render();
	if (!PRM) {
		setInterval(function () {
			if (performance.now() - lastUser < 6000) return;
			if (!auto) {
				auto = true;
				ai = 0;
			}
			var tg = presets[ai % presets.length];
			px += (tg[0] - px) * 0.08;
			py += (tg[1] - py) * 0.08;
			render();
			if (Math.hypot(tg[0] - px, tg[1] - py) < 2) {
				at++;
				if (at > 26) {
					at = 0;
					ai++;
				}
			}
		}, 33);
	}
})();

/* ============ nexus loop ============ */
(function () {
	'use strict';
	var fig = document.getElementById('loop');
	if (!fig) return;
	var PRM = matchMedia('(prefers-reduced-motion: reduce)').matches;
	var cap = document.getElementById('loop-cap');
	var caps = {
		sen: '<b>Sense.</b> IoT sensors and field data on food, energy, and water systems.',
		mod: '<b>Model.</b> A meta-model that links the three systems into one coupled picture.',
		opt: '<b>Optimize.</b> Multi-objective optimization across competing resource goals.',
		exp: '<b>Expert.</b> A human-in-the-loop step where domain expertise shapes the solution.',
		dep: '<b>Deploy.</b> Practical resource decisions, with outcomes fed back into the model.'
	};
	var nodes = fig.querySelectorAll('.loop-node');
	var pos = {};
	[].forEach.call(nodes, function (n) {
		var c = n.querySelector('circle');
		pos[n.getAttribute('data-k')] = [
			+c.getAttribute('cx'),
			+c.getAttribute('cy')
		];
	});
	var order = ['sen', 'mod', 'opt', 'exp', 'dep'];
	var arcG = document.getElementById('loop-arcs');
	for (var i = 0; i < order.length; i++) {
		var a = pos[order[i]],
			b = pos[order[(i + 1) % order.length]];
		var dx = b[0] - a[0],
			dy = b[1] - a[1],
			L = Math.hypot(dx, dy),
			ux = dx / L,
			uy = dy / L,
			r = 34;
		var x1 = a[0] + ux * r,
			y1 = a[1] + uy * r,
			x2 = b[0] - ux * r,
			y2 = b[1] - uy * r;
		var ah = 6,
			axp = x2 - ux * ah,
			ayp = y2 - uy * ah,
			nx = -uy,
			ny = ux;
		var pth = document.createElementNS(
			'http://www.w3.org/2000/svg',
			'path'
		);
		pth.setAttribute('class', 'loop-arc');
		pth.setAttribute('data-i', i);
		pth.setAttribute(
			'd',
			'M' +
				x1.toFixed(1) +
				' ' +
				y1.toFixed(1) +
				' L' +
				x2.toFixed(1) +
				' ' +
				y2.toFixed(1) +
				' M' +
				(axp + nx * ah).toFixed(1) +
				' ' +
				(ayp + ny * ah).toFixed(1) +
				' L' +
				x2.toFixed(1) +
				' ' +
				y2.toFixed(1) +
				' L' +
				(axp - nx * ah).toFixed(1) +
				' ' +
				(ayp - ny * ah).toFixed(1)
		);
		arcG.appendChild(pth);
	}
	var arcs = fig.querySelectorAll('.loop-arc');
	var lastUser = -1e9,
		userMode = false,
		ci = -1;
	function pick(n) {
		lastUser = performance.now();
		userMode = true;
		[].forEach.call(nodes, function (m) {
			m.classList.remove('cycle');
			m.classList.toggle('active', m === n);
		});
		cap.innerHTML = caps[n.getAttribute('data-k')] || '';
	}
	fig.addEventListener('click', function (e) {
		var n = e.target.closest && e.target.closest('.loop-node');
		if (n) pick(n);
	});
	fig.addEventListener('keydown', function (e) {
		if (e.key !== 'Enter' && e.key !== ' ') return;
		var n = e.target.closest && e.target.closest('.loop-node');
		if (n) {
			e.preventDefault();
			pick(n);
		}
	});
	if (!PRM) {
		setInterval(function () {
			if (performance.now() - lastUser < 6000) return;
			if (userMode) {
				userMode = false;
				ci = -1;
				[].forEach.call(nodes, function (m) {
					m.classList.remove('active');
				});
				cap.textContent = 'Click any stage.';
				return;
			}
			ci = (ci + 1) % nodes.length;
			[].forEach.call(nodes, function (m, idx) {
				m.classList.toggle('cycle', idx === ci);
			});
			[].forEach.call(arcs, function (a, idx) {
				a.classList.toggle('lit', idx === ci);
			});
		}, 1900);
	}
})();

/* ============ nav: active, mobile, reveal, page transitions ============ */
(function () {
	'use strict';
	var PRM = matchMedia('(prefers-reduced-motion: reduce)').matches;
	document.body.classList.add('js-anim');
	var rev = document.querySelectorAll('.reveal');
	if ('IntersectionObserver' in window && rev.length) {
		var io = new IntersectionObserver(
			function (es) {
				es.forEach(function (en) {
					if (en.isIntersecting) {
						en.target.classList.add(
							'in'
						);
						io.unobserve(
							en.target
						);
					}
				});
			},
			{ rootMargin: '0px 0px -8% 0px' }
		);
		rev.forEach(function (el) {
			io.observe(el);
		});
	} else {
		rev.forEach(function (el) {
			el.classList.add('in');
		});
	}
	var t = document.querySelector('.rail-toggle');
	if (t)
		t.addEventListener('click', function () {
			var open =
				document.body.classList.toggle(
					'nav-open'
				);
			t.setAttribute(
				'aria-expanded',
				open ? 'true' : 'false'
			);
		});
	document.querySelectorAll('.rail-nav a').forEach(function (a) {
		a.addEventListener('click', function () {
			document.body.classList.remove('nav-open');
		});
	});
	var order = [
		'index',
		'research-interests',
		'ongoing-research',
		'publications',
		'education',
		'funding',
		'blog'
	];
	function slug(href) {
		try {
			var u = new URL(href, location.href);
			var parts = u.pathname
				.replace(/\/+$/, '')
				.split('/');
			var f = parts.pop() || 'index';
			return f.replace(/\.html$/, '') || 'index';
		} catch (e) {
			return 'index';
		}
	}
	function rank(href) {
		var i = order.indexOf(slug(href));
		return i < 0 ? 9 : i;
	}
	var hasVT = 'onpagereveal' in window;
	if (hasVT) {
		addEventListener('pageswap', function (e) {
			if (!e.viewTransition) return;
			var to =
				e.activation &&
				e.activation.entry &&
				e.activation.entry.url;
			if (to) {
				e.viewTransition.types.add(
					rank(to) >=
						rank(location.href)
						? 'forwards'
						: 'backwards'
				);
			}
		});
		addEventListener('pagereveal', function (e) {
			if (!e.viewTransition) return;
			var from = document.referrer;
			e.viewTransition.types.add(
				from && rank(from) > rank(location.href)
					? 'backwards'
					: 'forwards'
			);
		});
	} else if (!PRM) {
		document.querySelectorAll('a[data-internal]').forEach(
			function (a) {
				a.addEventListener(
					'click',
					function (ev) {
						if (
							ev.metaKey ||
							ev.ctrlKey ||
							ev.shiftKey ||
							a.target ===
								'_blank'
						)
							return;
						var href =
							a.getAttribute(
								'href'
							);
						if (
							!href ||
							href.charAt(
								0
							) === '#'
						)
							return;
						ev.preventDefault();
						document.body.classList.add(
							'is-leaving'
						);
						setTimeout(
							function () {
								location.href =
									href;
							},
							200
						);
					}
				);
			}
		);
	}
})();
