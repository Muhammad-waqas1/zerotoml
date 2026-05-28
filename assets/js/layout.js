
document.addEventListener("DOMContentLoaded", () => {
    // 1. Determine exactly where we are in the folder structure
    const pathDepth = window.location.pathname.split('/').filter(p => p && !p.endsWith('.html')).length;
    const isInLessonsSubfolder = window.location.pathname.includes('/lessons/');
    
    // Prefix for reaching files at the root level (index, about, practical)
    const rootPrefix = isInLessonsSubfolder ? "../" : "";
    
    // Prefix specifically for reaching files tucked inside the lessons folder
    const lessonPrefix = isInLessonsSubfolder ? "" : "lessons/";

    // 2. Detect if this is a lesson page (uses the mini-footer)
    const isLessonPage = document.getElementById("footer-mini-placeholder") !== null;

    // 3. Define Navbar Template
    const navbarHTML = `
    <nav id="navbar" class="fixed top-0 left-0 right-0 z-50">
        <div class="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <a href="${rootPrefix}index.html" class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm font-mono"
                        style="background:var(--sky);color:var(--bg-base)">ML</div>
                    <span class="font-display text-lg font-bold" style="color:var(--text-ink)">ZeroToML</span>
                </a>
                <div class="hidden md:flex items-center gap-1">
                    <a href="${rootPrefix}index.html" class="nav-link" id="nav-home">Home</a>
                    <a href="${lessonPrefix}01-ml-ecosystem.html" class="nav-link" id="nav-curriculum">Curriculum</a>
                    <a href="${rootPrefix}about.html" class="nav-link" id="nav-about">About</a>
                    <a href="${rootPrefix}pratical.html" class="nav-link" id="nav-practical">ML Lifecycle</a>
                    <a href="${rootPrefix}cheatsheet.html" class="nav-link" id="nav-cheatsheet">Cheat Sheet</a>
                    <a href="${rootPrefix}mlops.html" class="nav-link" id="nav-mlops">MLOps</a>
                    <a href="${rootPrefix}index.html#tools" class="nav-link">Tools</a>
                    <a href="https://github.com/Muhammad-waqas1/zerotoml" target="_blank" rel="noopener" class="nav-link">GitHub</a>
                </div>
                <div class="flex items-center gap-2">
                    <!-- Sidebar toggle button appears ONLY on lesson pages -->
                    ${isLessonPage ? `
                    <button id="sidebar-toggle" class="lg:hidden w-9 h-9 rounded-lg border flex items-center justify-center"
                        style="border-color:var(--border);color:var(--text-muted)" aria-label="Toggle curriculum sidebar">
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h10M4 18h7" />
                        </svg>
                    </button>
                    ` : ''}
                    
                    <button id="mobile-menu-btn" class="md:hidden w-9 h-9 rounded-lg border flex items-center justify-center"
                        style="border-color:var(--border);color:var(--text-muted)" aria-label="Open menu">
                        <svg id="hamburger-icon" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <svg id="close-icon" class="w-4 h-4 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div id="mobile-menu" class="hidden md:hidden px-4 py-3 flex flex-col gap-1">
            <a href="${rootPrefix}index.html" class="mobile-nav-link">Home</a>
            <a href="${lessonPrefix}01-ml-ecosystem.html" class="mobile-nav-link">Curriculum</a>
            <a href="${rootPrefix}about.html" class="mobile-nav-link">About</a>
            <a href="${rootPrefix}pratical.html" class="mobile-nav-link">ML Lifecycle</a>
            <a href="${rootPrefix}cheatsheet.html" class="mobile-nav-link">Cheat Sheet</a>
            <a href="${rootPrefix}mlops.html" class="mobile-nav-link">MLOps</a>
            <a href="https://github.com/Muhammad-waqas1/zerotoml" target="_blank" rel="noopener" class="mobile-nav-link">GitHub ↗</a>
        </div>
    </nav>
    `;

    // 4. Define Full Footer Template
    const footerHTML = `
    <footer class="border-t py-14 px-4" style="border-color:var(--border);background:var(--bg-surface)">
        <div class="max-w-6xl mx-auto">
            <div class="flex flex-col md:flex-row justify-between items-start gap-10">
                <div class="max-w-xs">
                    <a href="${rootPrefix}index.html" class="flex items-center gap-2 mb-3">
                        <div class="w-7 h-7 rounded-md flex items-center justify-center font-bold text-xs font-mono" style="background:var(--sky);color:var(--bg-base)">ML</div>
                        <span class="font-display font-bold text-lg" style="color:var(--text-ink)">ZeroToML</span>
                    </a>
                    <p class="text-sm font-serif leading-relaxed mb-4" style="color:var(--text-muted)">Free, open-source ML education — from Python setup to cloud deployment. Built with care by Muhammad Waqas.</p>
                    <a href="https://github.com/Muhammad-waqas1" target="_blank" rel="noopener" class="inline-flex items-center gap-2 text-xs font-mono hover:text-[var(--sky)] transition-colors" style="color:var(--text-dim)">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                        @Muhammad-waqas1
                    </a>
                </div>
                <div class="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
                    <div>
                        <h4 class="text-xs font-mono uppercase tracking-wider mb-4" style="color:var(--text-muted)">Start Here</h4>
                        <ul class="space-y-2 text-sm font-serif" style="color:var(--text-dim)">
                            <li><a href="${lessonPrefix}01-ml-ecosystem.html" class="hover:text-[var(--sky)] transition-colors">1.1 ML Ecosystem</a></li>
                            <li><a href="${lessonPrefix}01-numpy.html" class="hover:text-[var(--sky)] transition-colors">1.2 NumPy</a></li>
                            <li><a href="${lessonPrefix}01-pandas.html" class="hover:text-[var(--sky)] transition-colors">1.3 Pandas</a></li>
                            <li><a href="${lessonPrefix}01-eda.html" class="hover:text-[var(--sky)] transition-colors">1.4 EDA</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-xs font-mono uppercase tracking-wider mb-4" style="color:var(--text-muted)">Key Lessons</h4>
                        <ul class="space-y-2 text-sm font-serif" style="color:var(--text-dim)">
                            <li><a href="${lessonPrefix}04-regression.html" class="hover:text-[var(--sky)] transition-colors">4.1 Regression</a></li>
                            <li><a href="${lessonPrefix}04-ensemble.html" class="hover:text-[var(--sky)] transition-colors">4.5 Ensembles</a></li>
                            <li><a href="${lessonPrefix}07-architecture.html" class="hover:text-[var(--sky)] transition-colors">7.2 Neural Nets</a></li>
                            <li><a href="${lessonPrefix}09-cloud.html" class="hover:text-[var(--sky)] transition-colors">9.4 Deployment</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-xs font-mono uppercase tracking-wider mb-4" style="color:var(--text-muted)">References</h4>
                        <ul class="space-y-2 text-sm font-serif" style="color:var(--text-dim)">
                            <li><a href="${rootPrefix}pratical.html" class="hover:text-[var(--sky)] transition-colors">ML Lifecycle</a></li>
                            <li><a href="${rootPrefix}cheatsheet.html" class="hover:text-[var(--sky)] transition-colors">Cheat Sheet</a></li>
                            <li><a href="${rootPrefix}mlops.html" class="hover:text-[var(--sky)] transition-colors">MLOps Guide</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-xs font-mono uppercase tracking-wider mb-4" style="color:var(--text-muted)">Tools</h4>
                        <ul class="space-y-2 text-sm font-serif" style="color:var(--text-dim)">
                            <li><a href="https://Muhammad-waqas1.github.io/pyorbit-ide" target="_blank" rel="noopener" class="hover:text-[var(--sky)] transition-colors">PyOrbit IDE ↗</a></li>
                            <li><a href="https://Muhammad-waqas1.github.io/hyperplane-hero" target="_blank" rel="noopener" class="hover:text-[var(--sky)] transition-colors">Hyperplane Hero ↗</a></li>
                            <li><a href="https://Muhammad-waqas1.github.io/rich-text-markdown-converter" target="_blank" rel="noopener" class="hover:text-[var(--sky)] transition-colors">MD Converter ↗</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-xs font-mono uppercase tracking-wider mb-4" style="color:var(--text-muted)">Project</h4>
                        <ul class="space-y-2 text-sm font-serif" style="color:var(--text-dim)">
                            <li><a href="${rootPrefix}about.html" class="hover:text-[var(--sky)] transition-colors">About</a></li>
                            <li><a href="https://github.com/Muhammad-waqas1/zerotoml" target="_blank" rel="noopener" class="hover:text-[var(--sky)] transition-colors">GitHub</a></li>
                            <li><a href="https://github.com/Muhammad-waqas1/zerotoml/issues" target="_blank" rel="noopener" class="hover:text-[var(--sky)] transition-colors">Report Issue</a></li>
                            <li><a href="${rootPrefix}LICENSE" class="hover:text-[var(--sky)] transition-colors">MIT License</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="border-t mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs font-mono" style="border-color:var(--border);color:var(--text-dim)">
                <span>© 2025 ZeroToML — MIT Licensed · <a href="https://github.com/Muhammad-waqas1" target="_blank" rel="noopener" class="hover:text-[var(--sky)] transition-colors">Muhammad Waqas</a></span>
                <span>9 modules · 33 lessons · 3 tools · 3 reference guides · 100% free</span>
            </div>
        </div>
    </footer>
    `;

    // 5. Define Mini Footer Template
    const miniFooterHTML = `
    <footer class="border-t py-8 px-4 mt-8" style="border-color:var(--border)">
        <div class="max-w-[1400px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-xs font-mono" style="color:var(--text-dim)">
            <a href="${rootPrefix}index.html" class="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <div class="w-5 h-5 rounded flex items-center justify-center font-bold text-xs" style="background:var(--sky);color:var(--bg-base)">ML</div>
                ZeroToML
            </a>
            <span>© 2025 ZeroToML — MIT Licensed · <a href="https://github.com/Muhammad-waqas1" target="_blank" rel="noopener" class="hover:text-[var(--sky)] transition-colors">Muhammad Waqas</a></span>
            <a href="https://github.com/Muhammad-waqas1/zerotoml" target="_blank" rel="noopener" class="hover:text-[var(--sky)] transition-colors">GitHub ↗</a>
        </div>
    </footer>
    `;

    // 6. Inject into placeholders
    const navPlaceholder = document.getElementById("navbar-placeholder");
    const footerPlaceholder = document.getElementById("footer-placeholder");
    const miniFooterPlaceholder = document.getElementById("footer-mini-placeholder");

    if (navPlaceholder) navPlaceholder.outerHTML = navbarHTML;
    if (footerPlaceholder) footerPlaceholder.outerHTML = footerHTML;
    if (miniFooterPlaceholder) miniFooterPlaceholder.outerHTML = miniFooterHTML;

    // 7. Dynamic Active Link Highlighter
    const currentFile = window.location.pathname.split("/").pop() || "index.html";
    if (currentFile === "index.html") document.getElementById("nav-home")?.classList.add("active");
    else if (isInLessonsSubfolder) document.getElementById("nav-curriculum")?.classList.add("active");
    else if (currentFile === "about.html") document.getElementById("nav-about")?.classList.add("active");
    else if (currentFile === "pratical.html") document.getElementById("nav-practical")?.classList.add("active");
    else if (currentFile === "cheatsheet.html") document.getElementById("nav-cheatsheet")?.classList.add("active");
    else if (currentFile === "mlops.html") document.getElementById("nav-mlops")?.classList.add("active");

    // 8. Mobile Menu Toggler logic
    const menuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const hamburgerIcon = document.getElementById("hamburger-icon");
    const closeIcon = document.getElementById("close-icon");

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", () => {
            const isHidden = mobileMenu.classList.contains("hidden");
            if (isHidden) {
                mobileMenu.classList.remove("hidden");
                hamburgerIcon.classList.add("hidden");
                closeIcon.classList.remove("hidden");
            } else {
                mobileMenu.classList.add("hidden");
                hamburgerIcon.classList.remove("hidden");
                closeIcon.classList.add("hidden");
            }
        });
    }

    // 9. Sidebar Toggle Event Listener
    if (isLessonPage) {
        const sidebarToggleBtn = document.getElementById("sidebar-toggle");
        const lessonSidebar = document.getElementById("course-sidebar") || document.querySelector(".sidebar") || document.getElementById("sidebar"); 
        
        if (sidebarToggleBtn && lessonSidebar) {
            sidebarToggleBtn.addEventListener("click", () => {
                lessonSidebar.classList.toggle("-translate-x-full"); 
                lessonSidebar.classList.toggle("hidden");
            });
        }
    }
});