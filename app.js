// GLOBAL APP SCRIPT - MOBILSECONDMEDAN
const TIM_ADMIN = [
    { name: "Wendy", phone: "6282361207557" },
    { name: "Ivan", phone: "6285173038781" },
    { name: "Bayu", phone: "6281246818167" },
    { name: "Erik", phone: "6281269317353" },
    { name: "Felix", phone: "6287786378284" }
];

// Dapatkan Admin WhatsApp secara acak/rotasi
function getRandomAdmin() {
    const randomIndex = Math.floor(Math.random() * TIM_ADMIN.length);
    return TIM_ADMIN[randomIndex];
}

// Format Angka ke Rupiah
function formatRupiah(number) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0
    }).format(number);
}

// Render Global Header
function renderHeader(activePage = "home") {
    const headerHtml = `
    <header class="glassmorphism sticky top-0 z-50 transition-all duration-300">
        <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="index.html" class="flex items-center gap-3 group">
                <!-- Logo Web SVG Premium (Geometric Shield/Luxury Car Monogram) -->
                <div class="relative w-11 h-11 bg-gradient-to-br from-yellow-300 via-brand-accent to-yellow-600 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-md shadow-brand-accent/20">
                    <svg class="w-6.5 h-6.5 text-slate-950" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
                        <path d="M12 2v20" />
                        <path d="M17 5L12 8.5L7 5" />
                        <circle cx="12" cy="13" r="3" fill="currentColor" fill-opacity="0.1" />
                    </svg>
                    <div class="absolute -inset-1.5 bg-yellow-400/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div>
                    <h1 class="text-md font-black tracking-widest text-white leading-none uppercase flex items-center gap-1.5">
                        MOBIL<span class="text-brand-accent">SECOND</span>MEDAN
                    </h1>
                    <p class="text-[9px] tracking-[0.25em] text-slate-400 font-bold uppercase mt-1">Cangkir Showroom</p>
                </div>
            </a>
            
            <!-- Desktop Navigation -->
            <nav class="hidden md:flex items-center gap-8 text-xs font-semibold tracking-wider uppercase">
                <a href="index.html" class="${activePage === "home" ? "text-brand-accent" : "text-slate-300 hover:text-white"} transition-colors relative py-2 group">
                    Home
                    <span class="absolute bottom-0 left-0 w-full h-0.5 bg-brand-accent scale-x-0 ${activePage === "home" ? "scale-x-100" : ""} group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </a>
                <a href="katalog.html" class="${activePage === "katalog" ? "text-brand-accent" : "text-slate-300 hover:text-white"} transition-colors relative py-2 group">
                    Katalog Mobil
                    <span class="absolute bottom-0 left-0 w-full h-0.5 bg-brand-accent scale-x-0 ${activePage === "katalog" ? "scale-x-100" : ""} group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </a>
                <a href="compare.html" class="${activePage === "compare" ? "text-brand-accent" : "text-slate-300 hover:text-white"} transition-colors relative py-2 group">
                    Bandingkan
                    <span class="absolute bottom-0 left-0 w-full h-0.5 bg-brand-accent scale-x-0 ${activePage === "compare" ? "scale-x-100" : ""} group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </a>
                <a href="index.html#lokasi" class="text-slate-300 hover:text-white transition-colors relative py-2 group">
                    Lokasi & COD
                    <span class="absolute bottom-0 left-0 w-full h-0.5 bg-brand-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </a>
            </nav>

            <!-- Mobile Menu Button -->
            <button id="mobile-menu-btn" class="md:hidden text-slate-300 focus:outline-none hover:text-white p-2">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
        </div>
        
        <!-- Mobile Dropdown Nav -->
        <div id="mobile-menu" class="hidden bg-slate-950 border-t border-slate-900 md:hidden animate-fade-in font-sans">
            <div class="px-6 py-4 flex flex-col gap-4 text-xs font-semibold tracking-wider uppercase">
                <a href="index.html" class="text-slate-300 hover:text-white py-1">Home</a>
                <a href="katalog.html" class="text-slate-300 hover:text-white py-1">Katalog Mobil</a>
                <a href="compare.html" class="text-slate-300 hover:text-white py-1">Bandingkan</a>
                <a href="index.html#lokasi" class="text-slate-300 hover:text-white py-1">Lokasi & COD</a>
            </div>
        </div>
    </header>
    `;
    const target = document.getElementById("header-container");
    if (target) {
        target.innerHTML = headerHtml;

        // Mobile menu toggle
        const menuBtn = document.getElementById("mobile-menu-btn");
        const mobileMenu = document.getElementById("mobile-menu");
        if (menuBtn && mobileMenu) {
            menuBtn.addEventListener("click", () => {
                mobileMenu.classList.toggle("hidden");
            });
        }
    }
}

// Render Global Footer
function renderFooter() {
    const footerHtml = `
    <footer class="bg-[#050811] text-slate-300 border-t border-slate-900 pt-20 pb-10 font-sans relative overflow-hidden">
        <!-- Radial light accent in footer -->
        <div class="absolute bottom-0 right-0 w-80 h-80 bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div class="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            <!-- Brand block -->
            <div class="space-y-6">
                <a href="index.html" class="flex items-center gap-3 group">
                    <div class="w-10 h-10 bg-gradient-to-br from-yellow-300 via-brand-accent to-yellow-600 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 shadow-md">
                        <svg class="w-5.5 h-5.5 text-slate-950" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                            <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
                            <path d="M12 2v20" />
                            <path d="M17 5L12 8.5L7 5" />
                        </svg>
                    </div>
                    <div>
                        <h4 class="text-md font-black tracking-widest text-white leading-none uppercase">
                            MOBIL<span class="text-brand-accent">SECOND</span>MEDAN
                        </h4>
                        <p class="text-[9px] tracking-[0.25em] text-slate-400 font-bold uppercase mt-1">Premium Showroom</p>
                    </div>
                </a>
                
                <p class="text-xs text-slate-400 leading-relaxed max-w-sm">
                    Showroom mobil bekas premium tepercaya di Kota Medan. Setiap unit yang kami tawarkan telah melewati pemeriksaan kelayakan fisik, kelistrikan, dokumen, dan siap bawa inspektur mekanik independen pilihan Anda.
                </p>
                
                <!-- Trust icons / badges -->
                <div class="flex items-center gap-4 pt-2">
                    <!-- Otospector Badge -->
                    <div class="flex items-center gap-2 border border-slate-800 bg-slate-900/50 px-3 py-1.5 rounded-lg text-[10px] text-slate-300">
                        <span class="w-2 h-2 rounded-full bg-brand-success"></span>
                        <span>Otospector Certified Partner</span>
                    </div>
                </div>
            </div>
            
            <!-- Contact list -->
            <div class="space-y-6">
                <h3 class="text-white font-bold tracking-widest uppercase text-xs">Hubungi Tim Marketing</h3>
                <ul class="flex flex-col gap-3.5 text-xs text-slate-400">
                    <li>
                        <a href="https://wa.me/6282361207557" target="_blank" class="hover:text-brand-accent transition-colors flex items-center gap-2.5">
                            <span class="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                            <span class="font-bold text-slate-200">Wendy:</span> 0823-6120-7557
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/6285173038781" target="_blank" class="hover:text-brand-accent transition-colors flex items-center gap-2.5">
                            <span class="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                            <span class="font-bold text-slate-200">Ivan:</span> 0851-7303-8781
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/6281246818167" target="_blank" class="hover:text-brand-accent transition-colors flex items-center gap-2.5">
                            <span class="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                            <span class="font-bold text-slate-200">Bayu:</span> 0812-4681-8167
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/6281269317353" target="_blank" class="hover:text-brand-accent transition-colors flex items-center gap-2.5">
                            <span class="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                            <span class="font-bold text-slate-200">Erik:</span> 0812-6931-7353
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/6287786378284" target="_blank" class="hover:text-brand-accent transition-colors flex items-center gap-2.5">
                            <span class="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                            <span class="font-bold text-slate-200">Felix:</span> 0877-8637-8284
                        </a>
                    </li>
                </ul>
            </div>
            
            <!-- Address and details -->
            <div class="space-y-6">
                <h3 class="text-white font-bold tracking-widest uppercase text-xs">Lokasi & Jam Kerja</h3>
                <p class="text-xs text-slate-400 leading-relaxed">
                    <strong class="text-slate-200">Showroom Cangkir Medan:</strong><br>
                    Jl. Cangkir No.24, Sei Putih Tengah, Kec. Medan Petisah, Kota Medan, Sumatera Utara 20113.
                </p>
                <div class="text-[11px] text-slate-500 space-y-1">
                    <p>• Senin - Sabtu (09.00 - 18.00 WIB)</p>
                    <p>• Minggu / Libur (Berdasarkan Janji Temu)</p>
                </div>
            </div>
        </div>
        
        <!-- Copyright Row with Hidden Access Link inside the divider dot -->
        <div class="max-w-6xl mx-auto px-4 mt-16 pt-8 border-t border-slate-900 text-center text-[10px] text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4 relative z-10">
            <span>
                &copy; ${new Date().getFullYear()} MOBILSECONDMEDAN. All rights reserved. Premium Showroom.
            </span>
            <div class="flex items-center gap-1.5 text-slate-600">
                <span>Medan, North Sumatra, ID</span>
                <span>&bull;</span>
                <!-- Hidden Admin portal link embedded cleanly -->
                <a href="admin.html" class="hover:text-slate-800 transition-colors select-none cursor-pointer px-1 text-[9px] font-bold text-slate-900" title="System portal">-</a>
            </div>
        </div>
    </footer>
    `;
    const target = document.getElementById("footer-container");
    if (target) {
        target.innerHTML = footerHtml;
    }
}

// Compare Manager
const COMPARE_KEY = "MSM_COMPARE_CARS";
const CompareManager = {
    get: function() {
        return JSON.parse(localStorage.getItem(COMPARE_KEY)) || [];
    },
    add: function(carId, carTitle, carPrice, carImage) {
        let list = this.get();
        if (list.some(item => item.id === carId)) return false;
        if (list.length >= 3) {
            alert("Maksimal perbandingan adalah 3 mobil!");
            return false;
        }
        list.push({ id: carId, title: carTitle, price: carPrice, image: carImage });
        localStorage.setItem(COMPARE_KEY, JSON.stringify(list));
        this.renderFloater();
        return true;
    },
    remove: function(carId) {
        let list = this.get();
        list = list.filter(item => item.id !== carId);
        localStorage.setItem(COMPARE_KEY, JSON.stringify(list));
        this.renderFloater();
    },
    clear: function() {
        localStorage.removeItem(COMPARE_KEY);
        this.renderFloater();
    },
    renderFloater: function() {
        const list = this.get();
        let floater = document.getElementById("compare-floater");
        
        if (list.length === 0) {
            if (floater) floater.remove();
            return;
        }
        
        if (!floater) {
            floater = document.createElement("div");
            floater.id = "compare-floater";
            floater.className = "fixed bottom-8 right-6 bg-[#0c1222]/95 border border-yellow-500/20 text-white p-4 rounded-xl shadow-2xl z-40 max-w-sm w-80 animate-fade-in font-sans backdrop-blur-md";
            document.body.appendChild(floater);
        }
        
        let itemsHtml = list.map(item => `
            <div class="flex items-center justify-between gap-3 bg-slate-950/80 p-2 rounded-lg border border-slate-800/80">
                <img src="${item.image}" alt="" class="w-12 h-9 object-cover rounded-md border border-slate-800">
                <div class="flex-1 min-w-0">
                    <h4 class="text-xs font-bold truncate text-slate-100">${item.title}</h4>
                    <p class="text-[10px] text-brand-accent font-extrabold">${formatRupiah(item.price)}</p>
                </div>
                <button onclick="CompareManager.remove('${item.id}')" class="text-slate-400 hover:text-red-400 text-xs font-bold px-1.5 transition-colors">✕</button>
            </div>
        `).join('');
        
        floater.innerHTML = `
            <div class="flex items-center justify-between mb-3 border-b border-slate-800/80 pb-2">
                <h3 class="text-xs font-bold flex items-center gap-1.5 text-white">
                    <svg class="w-4 h-4 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
                    Bandingkan (${list.length}/3)
                </h3>
                <button onclick="CompareManager.clear()" class="text-[10px] text-slate-400 hover:text-white font-medium transition-colors">Reset</button>
            </div>
            <div class="flex flex-col gap-2 mb-3">
                ${itemsHtml}
            </div>
            <a href="compare.html" class="block w-full bg-gradient-to-r from-yellow-500 via-brand-accent to-yellow-600 text-black text-center font-black text-xs py-2.5 rounded-lg hover:brightness-110 transition-all shadow-md">
                Bandingkan Sekarang
            </a>
        `;
    }
};

window.addEventListener("DOMContentLoaded", () => {
    CompareManager.renderFloater();
});
