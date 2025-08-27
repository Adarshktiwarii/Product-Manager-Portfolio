// Minimal interactions: loader, typing, theme + mobile menu toggles, scroll progress

(function () {
	// Loader hide
	window.addEventListener('load', function () {
		var loader = document.querySelector('.loader');
		if (loader) loader.classList.add('hidden');
	});

	// Typing effect for hero: Strategic [Consultant, Innovator, Advisor]
	document.addEventListener('DOMContentLoaded', function () {
		var typedNode = document.getElementById('typed-text');
		if (!typedNode) return;
		var words = ['Consultant', 'Innovator', 'Advisor'];
		var index = 0;
		var mode = 'type';
		var display = '';
		var target = words[index];

		function step() {
			if (mode === 'type') {
				display = target.slice(0, display.length + 1);
				if (display.length === target.length) {
					mode = 'hold';
					setTimeout(step, 1200);
					typedNode.textContent = display;
					return;
				}
			} else if (mode === 'delete') {
				display = display.slice(0, -1);
				if (display.length === 0) {
					index = (index + 1) % words.length;
					target = words[index];
					mode = 'type';
				}
			} else if (mode === 'hold') {
				mode = 'delete';
			}
			typedNode.textContent = display;
			setTimeout(step, mode === 'type' ? 80 : 40);
		}

		step();
	});

	// Theme toggle (persist to localStorage)
	(function initTheme() {
		var root = document.documentElement;
		var saved = localStorage.getItem('theme');
		if (saved === 'dark' || saved === 'light') {
			root.setAttribute('data-theme', saved);
		}
		function toggleTheme() {
			var current = root.getAttribute('data-theme') || 'light';
			var next = current === 'light' ? 'dark' : 'light';
			root.setAttribute('data-theme', next);
			localStorage.setItem('theme', next);
		}
		var themeToggle = document.getElementById('themeToggle');
		var mobileThemeToggle = document.getElementById('mobileThemeToggle');
		if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
		if (mobileThemeToggle) mobileThemeToggle.addEventListener('click', toggleTheme);
	})();

	// Mobile menu toggle
	(function initMobileMenu() {
		var toggle = document.getElementById('mobileMenuToggle');
		var closeBtn = document.getElementById('mobileMenuClose');
		var overlay = document.getElementById('mobileMenuOverlay');
		var panel = document.getElementById('mobileMenu');
		function open() {
			panel && panel.classList.add('active');
			overlay && overlay.classList.add('active');
			toggle && toggle.classList.add('active');
		}
		function close() {
			panel && panel.classList.remove('active');
			overlay && overlay.classList.remove('active');
			toggle && toggle.classList.remove('active');
		}
		if (toggle) toggle.addEventListener('click', open);
		if (closeBtn) closeBtn.addEventListener('click', close);
		if (overlay) overlay.addEventListener('click', close);
		document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
		// Close on nav link click
		Array.prototype.forEach.call(document.querySelectorAll('.mobile-nav-link'), function (a) {
			a.addEventListener('click', close);
		});
	})();

	// Scroll progress bar
	(function initScrollProgress() {
		var bar = document.getElementById('scroll-progress');
		if (!bar) return;
		function update() {
			var scrollTop = window.scrollY || document.documentElement.scrollTop;
			var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
			var progress = height > 0 ? (scrollTop / height) * 100 : 0;
			bar.style.width = progress + '%';
		}
		update();
		window.addEventListener('scroll', update, { passive: true });
		window.addEventListener('resize', update);
	})();
})();

