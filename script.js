// ================= DATA WEBSITES =================
const charactersData = [
    // --- 3★ Characters & Skins ---
    { id: "char-1", name: "Special Week (Base)", rarity: "3★", strategy: "Leader / Betwixt", image: "img2/speasil weeks.png", details: { pace: "Leader / Betwixt", ground: "Turf: A | Dirt: G", distance: "Short: F | Mile: C | Medium: A | Long: A", growth: "Stamina +20% / Guts +10%" } },
    { id: "char-1-alt", name: "Special Week (New Year)", rarity: "3★", strategy: "Leader / Betwixt", image: "img2/special weeks jp ann.png", details: { pace: "Leader / Betwixt", ground: "Turf: A | Dirt: G", distance: "Short: F | Mile: C | Medium: A | Long: A", growth: "Stamina +15% / Intelligence +15%" } },
    { id: "char-2", name: "Silence Suzuka", rarity: "3★", strategy: "Runner", image: "img2/silence sizuka.png", details: { pace: "Runner (Great Escape)", ground: "Turf: A | Dirt: E", distance: "Short: F | Mile: A | Medium: A | Long: E", growth: "Speed +20% / Intelligence +10%" } },
    { id: "char-3", name: "Tokai Teio (Base)", rarity: "3★", strategy: "Leader", image: "img2/tokai eio.png", details: { pace: "Leader", ground: "Turf: A | Dirt: G", distance: "Short: F | Mile: D | Medium: A | Long: B", growth: "Speed +10% / Stamina +10% / Power +10%" } },
    { id: "char-3-alt", name: "Tokai Teio (Beyond Horizon)", rarity: "3★", strategy: "Leader", image: "img2/tokai eio phoenix.png", details: { pace: "Leader", ground: "Turf: A | Dirt: G", distance: "Short: F | Mile: D | Medium: A | Long: B", growth: "Stamina +10% / Guts +20%" } },
    { id: "char-4", name: "Maruzensky (Base)", rarity: "3★", strategy: "Runner", image: "img2/maruzensky.png", details: { pace: "Runner", ground: "Turf: A | Dirt: D", distance: "Short: B | Mile: A | Medium: B | Long: C", growth: "Speed +10% / Intelligence +20%" } },
    { id: "char-4-alt", name: "Maruzensky (Swimsuit)", rarity: "3★", strategy: "Runner", image: "img2/maruzensky summer.png", details: { pace: "Runner", ground: "Turf: A | Dirt: D", distance: "Short: B | Mile: A | Medium: B | Long: C", growth: "Speed +15% / Intelligence +15%" } },
    { id: "char-5", name: "Oguri Cap (Base)", rarity: "3★", strategy: "Leader / Betwixt", image: "img2/oguriiiiii.png", details: { pace: "Leader / Betwixt", ground: "Turf: A | Dirt: B", distance: "Short: E | Mile: A | Medium: A | Long: B", growth: "Speed +10% / Power +20%" } },
    { id: "char-5-alt", name: "Oguri Cap (Christmas)", rarity: "3★", strategy: "Leader / Betwixt", image: "img2/oguri op.png", details: { pace: "Leader / Betwixt", ground: "Turf: A | Dirt: B", distance: "Short: E | Mile: A | Medium: A | Long: B", growth: "Stamina +15% / Guts +15%" } },
    { id: "char-6", name: "Taiki Shuttle (Base)", rarity: "3★", strategy: "Leader", image: "img2/taiki shutle.png", details: { pace: "Leader / Runner", ground: "Turf: A | Dirt: B", distance: "Short: A | Mile: A | Medium: E | Long: G", growth: "Speed +20% / Power +10%" } },
    { id: "char-6-alt", name: "Taiki Shuttle (camping)", rarity: "3★", strategy: "Leader", image: "img2/taiki shutle cmping.png", details: { pace: "Leader / Runner", ground: "Turf: A | Dirt: B", distance: "Short: A | Mile: A | Medium: E | Long: G", growth: "Power +15% / Guts +15%" } },
    { id: "char-7", name: "Mejiro McQueen (Base)", rarity: "3★", strategy: "Leader / Runner", image: "img2/mejiro mcqueen.png", details: { pace: "Runner / Leader", ground: "Turf: A | Dirt: G", distance: "Short: G | Mile: E | Medium: A | Long: A", growth: "Stamina +20% / Intelligence +10%" } },
    { id: "char-7-alt", name: "Mejiro McQueen (End of EMF)", rarity: "3★", strategy: "Leader", image: "img2/mejiro salto.png", details: { pace: "Leader", ground: "Turf: A | Dirt: G", distance: "Short: G | Mile: E | Medium: A | Long: A", growth: "Stamina +10% / Power +10% / Intelligence +10%" } },
    { id: "char-8", name: "Symboli Rudolf (Base)", rarity: "3★", strategy: "Leader / Betwixt", image: "img2/rudolf.png", details: { pace: "Leader / Betwixt / Chaser", ground: "Turf: A | Dirt: G", distance: "Short: E | Mile: C | Medium: A | Long: A", growth: "Stamina +20% / Intelligence +10%" } },
    { id: "char-8-alt", name: "Symboli Rudolf (festival)", rarity: "3★", strategy: "Leader / Betwixt", image: "img2/symboly vestival.png", details: { pace: "Leader / Betwixt", ground: "Turf: A | Dirt: G", distance: "Short: E | Mile: C | Medium: A | Long: A", growth: "Speed +15% / Guts +15%" } },
    { id: "char-9", name: "Rice Shower (Base)", rarity: "3★", strategy: "Leader", image: "img2/rice shower.png", details: { pace: "Leader", ground: "Turf: A | Dirt: G", distance: "Short: G | Mile: E | Medium: A | Long: A", growth: "Stamina +10% / Guts +20%" } },
    { id: "char-9-alt", name: "Rice Shower (Vampire)", rarity: "3★", strategy: "Leader", image: "img2/rice shower hallowen.png", details: { pace: "Leader", ground: "Turf: A | Dirt: G", distance: "Short: G | Mile: E | Medium: A | Long: A", growth: "Stamina +15% / Power +15%" } },
    { id: "char-21", name: "T.M. Opera O (Base)", rarity: "3★", strategy: "Leader", image: "img2/tm opera.png", details: { pace: "Leader", ground: "Turf: A | Dirt: G", distance: "Short: G | Mile: E | Medium: A | Long: A", growth: "Stamina +20% / Guts +10%" } },
    { id: "char-21-alt", name: "T.M. Opera O (New Year)", rarity: "3★", strategy: "Leader", image: "img2/tm opera new year.png", details: { pace: "Leader", ground: "Turf: A | Dirt: G", distance: "Short: G | Mile: E | Medium: A | Long: A", growth: "Speed +15% / Intelligence +15%" } },
    { id: "char-22", name: "Mihono Bourbon (Base)", rarity: "3★", strategy: "Runner", image: "img2/borbon.png", details: { pace: "Runner", ground: "Turf: A | Dirt: G", distance: "Short: G | Mile: C | Medium: A | Long: B", growth: "Stamina +20% / Power +10%" } },
    { id: "char-22-alt", name: "Mihono Bourbon (Valentine)", rarity: "3★", strategy: "Runner", image: "img2/borbon valentine.png", details: { pace: "Runner", ground: "Turf: A | Dirt: G", distance: "Short: G | Mile: C | Medium: A | Long: B", growth: "Stamina +10% / Power +10% / Intelligence +10%" } },
    { id: "char-23", name: "Biwa Hayahide", rarity: "3★", strategy: "Leader", image: "img2/biwa.png", details: { pace: "Leader", ground: "Turf: A | Dirt: F", distance: "Short: G | Mile: F | Medium: A | Long: A", growth: "Stamina +10% / Guts +10% / Intelligence +10%" } },
    { id: "char-24", name: "Biwa Hayahide (cristmas)", rarity: "3★", strategy: "Leader", image: "img2/biwa cristmas.png", details: { pace: "Runner / Leader", ground: "Turf: A | Dirt: G", distance: "Short: A | Mile: D | Medium: G | Long: G", growth: "Speed +10% / Power +20%" } },
    { id: "char-25", name: "Narita Taishin", rarity: "3★", strategy: "Chaser", image: "img2/narita taishin.png", details: { pace: "Chaser (End Runner)", ground: "Turf: A | Dirt: G", distance: "Short: G | Mile: D | Medium: A | Long: B", growth: "Speed +10% / Guts +20%" } },
    { id: "char-26", name: "Smart Falcon", rarity: "3★", strategy: "Runner", image: "img2/smart falcon.png", details: { pace: "Runner", ground: "Turf: E | Dirt: A", distance: "Short: B | Mile: A | Medium: B | Long: G", growth: "Speed +20% / Power +10%" } },
    { id: "char-27", name: "Narita Brian", rarity: "3★", strategy: "Leader / Betwixt", image: "img2/narita brian.png", details: { pace: "Leader / Betwixt", ground: "Turf: A | Dirt: G", distance: "Short: F | Mile: C | Medium: A | Long: A", growth: "Speed +10% / Stamina +20%" } },
    { id: "char-28", name: "Fuji Kiseki", rarity: "3★", strategy: "Leader", image: "img2/fujin kiseki.png", details: { pace: "Leader", ground: "Turf: A | Dirt: G", distance: "Short: A | Mile: A | Medium: C | Long: G", growth: "Power +20% / Intelligence +10%" } },
    { id: "char-29", name: "Mejiro Dober", rarity: "3★", strategy: "Betwixt", image: "img2/mejiro dober.png", details: { pace: "Betwixt", ground: "Turf: A | Dirt: G", distance: "Short: G | Mile: A | Medium: A | Long: E", growth: "Speed +10% / Intelligence +20%" } },
    { id: "char-30", name: "Tamamo Cross", rarity: "3★", strategy: "Chaser / Betwixt", image: "img2/tamago cross.png", details: { pace: "Betwixt / Chaser", ground: "Turf: A | Dirt: G", distance: "Short: F | Mile: B | Medium: A | Long: A", growth: "Stamina +20% / Power +10%" } },
    { id: "char-34", name: "Mayano Top Gun (Wedding)", rarity: "3★", strategy: "All Rounder", image: "img2/mayano wedding.png", details: { pace: "All Rounder", ground: "Turf: A | Dirt: E", distance: "Short: D | Mile: A | Medium: A | Long: A", growth: "Stamina +10% / Power +10% / Intelligence +10%" } },
    { id: "char-35", name: "Air Groove (Wedding)", rarity: "3★", strategy: "Leader / Betwixt", image: "img2/aairgroove wedding.png", details: { pace: "Leader / Betwixt", ground: "Turf: A | Dirt: G", distance: "Short: C | Mile: B | Medium: A | Long: E", growth: "Speed +10% / Power +10% / Guts +10%" } },
    { id: "char-36", name: "Gold Ship (Summer)", rarity: "3★", strategy: "Chaser", image: "img2/goldship summer.png", details: { pace: "Chaser", ground: "Turf: A | Dirt: G", distance: "Short: G | Mile: C | Medium: A | Long: A", growth: "Stamina +15% / Power +15%" } },
    { id: "char-37", name: "Mejiro McQueen (Summer)", rarity: "3★", strategy: "Betwixt", image: "img2/mejiro mcqueen summer.png", details: { pace: "Betwixt", ground: "Turf: A | Dirt: G", distance: "Short: G | Mile: A | Medium: A | Long: E", growth: "Stamina +15% / Intelligence +15%" } },
    { id: "char-38", name: "Seun Sky", rarity: "3★", strategy: "Runner", image: "img2/seiun sky salto.png", details: { pace: "Runner", ground: "Turf: A | Dirt: G", distance: "Short: G | Mile: C | Medium: A | Long: A", growth: "Stamina +20% / Intelligence +10%" } },
    { id: "char-39", name: "Seun Sky (ballroom)", rarity: "3★", strategy: "Leader", image: "img2/seiun sky ball room.png", details: { pace: "Runner / Leader", ground: "Turf: C | Dirt: A", distance: "Short: A | Mile: A | Medium: D | Long: G", growth: "Speed +10% / Power +20%" } },

    // --- 2★ Characters ---
    { id: "char-10", name: "Gold Ship", rarity: "2★", strategy: "Chaser", image: "img2/goldship.png", details: { pace: "Chaser (End / Pullpack)", ground: "Turf: A | Dirt: G", distance: "Short: G | Mile: C | Medium: A | Long: A", growth: "Stamina +20% / Power +10%" } },
    { id: "char-11", name: "Vodka", rarity: "2★", strategy: "Betwixt", image: "img2/vodka.png", details: { pace: "Leader / Betwixt", ground: "Turf: A | Dirt: G", distance: "Short: F | Mile: A | Medium: A | Long: F", growth: "Speed +10% / Power +20%" } },
    { id: "char-12", name: "Daiwa Scarlet", rarity: "2★", strategy: "Runner / Leader", image: "img2/daiwa scrlet.png", details: { pace: "Runner / Leader (Front / Pace)", ground: "Turf: A | Dirt: G", distance: "Short: F | Mile: A | Medium: A | Long: D", growth: "Speed +10% / Guts +20%" } },
    { id: "char-13", name: "Grass Wonder", rarity: "2★", strategy: "Leader / Betwixt", image: "img2/grass wonder.png", details: { pace: "Leader / Betwixt", ground: "Turf: A | Dirt: G", distance: "Short: G | Mile: A | Medium: A | Long: C", growth: "Speed +20% / Power +10%" } },
    { id: "char-14", name: "El Condor Pasa", rarity: "2★", strategy: "Leader / Runner", image: "img2/el condrrrrrrrrrrrrrrrrror.png", details: { pace: "Runner / Leader", ground: "Turf: A | Dirt: B", distance: "Short: F | Mile: A | Medium: A | Long: C", growth: "Speed +20% / Intelligence +10%" } },
    { id: "char-15", name: "Air Groove", rarity: "2★", strategy: "Leader / Betwixt", image: "img2/airgroove.png", details: { pace: "Leader / Betwixt", ground: "Turf: A | Dirt: G", distance: "Short: C | Mile: B | Medium: A | Long: E", growth: "Speed +10% / Power +20%" } },
    { id: "char-16", name: "Mayano Top Gun", rarity: "2★", strategy: "All Rounder", image: "img2/mayano top gun.png", details: { pace: "All Rounder (Runner/Leader/Betwixt/Chaser)", ground: "Turf: A | Dirt: E", distance: "Short: D | Mile: A | Medium: A | Long: A", growth: "Stamina +20% / Guts +10%" } },
    { id: "char-17", name: "Super Creek", rarity: "2★", strategy: "Leader", image: "img2/super creek.png", details: { pace: "Leader", ground: "Turf: A | Dirt: G", distance: "Short: G | Mile: E | Medium: A | Long: A", growth: "Stamina +10% / Intelligence +20%" } },
    { id: "char-18", name: "Mejiro Ryan", rarity: "2★", strategy: "Leader / Betwixt", image: "img2/mejiro ryan.png", details: { pace: "Leader / Betwixt", ground: "Turf: A | Dirt: G", distance: "Short: G | Mile: E | Medium: A | Long: B", growth: "Power +20% / Guts +10%" } },

    // --- 1★ Characters ---
    { id: "char-19", name: "Agnes Tachyon", rarity: "1★", strategy: "Leader", image: "img2/agnes.png", details: { pace: "Leader", ground: "Turf: A | Dirt: G", distance: "Short: G | Mile: D | Medium: A | Long: B", growth: "Speed +20% / Guts +10%" } },
    { id: "char-20", name: "Winning Ticket", rarity: "1★", strategy: "Leader / Betwixt", image: "img2/winning ticket.png", details: { pace: "Leader / Betwixt", ground: "Turf: A | Dirt: G", distance: "Short: G | Mile: D | Medium: A | Long: C", growth: "Stamina +10% / Power +20%" } },
    { id: "char-31", name: "Sakura Bakushin O", rarity: "1★", strategy: "Runner / Leader", image: "img2/sakura bakshin.png", details: { pace: "Runner / Leader (Front Runner)", ground: "Turf: A | Dirt: G", distance: "Short: A | Mile: B | Medium: G | Long: G", growth: "Speed +20% / Intelligence +10%" } },
    { id: "char-32", name: "Haru Urara", rarity: "1★", strategy: "Chaser / Betwixt", image: "img2/haru urara.png", details: { pace: "Betwixt / Chaser (End Runner)", ground: "Turf: G | Dirt: A", distance: "Short: A | Mile: B | Medium: G | Long: G", growth: "Stamina +10% / Power +20%" } },
    { id: "char-33", name: "Nice Nature", rarity: "1★", strategy: "Betwixt", image: "img2/nicenature.png", details: { pace: "Betwixt", ground: "Turf: A | Dirt: G", distance: "Short: G | Mile: C | Medium: A | Long: A", growth: "Power +10% / Intelligence +20%" } }
];

const supportCardsData = [
    // --- SSR Cards ---
    { id: "sup-1", name: "Kitasan Black (SSR)", type: "Speed", effect: "Excellent Hint Rate & Power Bonus", image: "img/kitasanhitam.png", effects_detail: { training: "15%", race: "10%", fan: "15%", hint: "60%", special: "Power Bonus +1 | Speed Bonus +1" } },
    { id: "sup-2", name: "Super Creek (SSR)", type: "Stamina", effect: "Maestro Healing Skill Gold", image: "img/supercreek.png", effects_detail: { training: "10%", race: "5%", fan: "10%", hint: "40%", special: "Stamina Bonus +1 | Initial Stamina +30" } },
    { id: "sup-3", name: "Fine Motion (SSR)", type: "Intelligence", effect: "High Training Bonus & Speed", image: "img/fine motion.png", effects_detail: { training: "20%", race: "10%", fan: "15%", hint: "30%", special: "Intelligence Bonus +2 | Friendship Bonus" } },
    { id: "sup-4", name: "El Condor Pasa (SSR)", type: "Power", effect: "All-round Stats Boost", image: "img/el condor.png", effects_detail: { training: "12%", race: "10%", fan: "10%", hint: "50%", special: "Speed Bonus +1 | Power Bonus +1" } },
    { id: "sup-6", name: "Riko Kashimoto (SSR)", type: "Friend", effect: "Energy & Motivation Support", image: "img/Riko Kashimoto.png", effects_detail: { training: "5%", race: "5%", fan: "10%", hint: "0%", special: "Energy Consumption Down 10% | Event Recovery" } },
    { id: "sup-7", name: "Tazuna Hayakawa (SSR)", type: "Friend", effect: "Focus & Outing Recovery", image: "img/tazuna.png", effects_detail: { training: "0%", race: "0%", fan: "0%", hint: "0%", special: "Energy Recovery Up | Outing Motivation Boost" } },
    { id: "sup-8", name: "Oguri Cap (SSR)", type: "Power", effect: "Clutch Groundwork & Acceleration", image: "img/oguri.png", effects_detail: { training: "15%", race: "5%", fan: "10%", hint: "50%", special: "Power Bonus +2 | Dirt Skill Hints" } },
    { id: "sup-9", name: "Vodka (SSR)", type: "Power", effect: "Restoration & Miles Skill", image: "img/vodka.png", effects_detail: { training: "10%", race: "10%", fan: "10%", hint: "40%", special: "Power Bonus +1 | Mile Skill Master" } },
    { id: "sup-10", name: "Mejiro McQueen (SSR)", type: "Stamina", effect: "Long Distance Cool Down", image: "img/mejiro.png", effects_detail: { training: "10%", race: "5%", fan: "10%", hint: "30%", special: "Stamina Bonus +1 | Initial Stamina Up" } },
    { id: "sup-11", name: "Seun Sky (SSR)", type: "Power", effect: "Runner Skill Lead Boost", image: "img/seiun sky.png", effects_detail: { training: "10%", race: "10%", fan: "5%", hint: "40%", special: "Runner Specific Stat Amplification" } },
    { id: "sup-12", name: "Biko Pegasus (SSR)", type: "Speed", effect: "High Multiplier Training", image: "img/biko pegasus.png", effects_detail: { training: "20%", race: "5%", fan: "10%", hint: "30%", special: "Training Effectiveness Peak" } },
    { id: "sup-13", name: "Twin Turbo (SSR)", type: "Speed", effect: "High Risk Runner Pace Break", image: "img/twin turbo.png", effects_detail: { training: "15%", race: "0%", fan: "5%", hint: "50%", special: "Initial Speed Up +40 | Great Escape" } },
    { id: "sup-21", name: "Mr. C.B. (SSR)", type: "Intelligence", effect: "Chaser Strategy Boost & Crit", image: "img/mr.c.b.png", effects_detail: { training: "15%", race: "10%", fan: "15%", hint: "60%", special: "Intelligence Bonus +1 | Chaser Skill Master" } },
    { id: "sup-22", name: "Maruzensky (SSR)", type: "Speed", effect: "Top Runner Stat Multiplier", image: "img/maruzensky.png", effects_detail: { training: "15%", race: "10%", fan: "10%", hint: "50%", special: "Runner Skill Bonus +2" } },
    { id: "sup-23", name: "Rice Shower (SSR)", type: "Power", effect: "Cool Down & Stamina Bonus", image: "img/rice shower.png", effects_detail: { training: "10%", race: "5%", fan: "10%", hint: "40%", special: "Stamina Bonus +1 | Power Bonus +1" } },

    // --- SR Cards ---
    { id: "sup-5", name: "Oguri Cap (SR)", type: "guts", effect: "Good F2P Card Stats", image: "img/oguri cup sr.png", effects_detail: { training: "10%", race: "5%", fan: "10%", hint: "30%", special: "Power Bonus +1" } },
    { id: "sup-14", name: "Marvelous Sunday (SR)", type: "Intelligence", effect: "Excellent Race Bonus", image: "img/marvelous.png", effects_detail: { training: "5%", race: "10%", fan: "15%", hint: "40%", special: "Initial Intelligence +20" } },
    { id: "sup-15", name: "Sweeps Tosho (SR)", type: "Speed", effect: "Free Stats Random Event", image: "img/sweep tosho.png", effects_detail: { training: "10%", race: "5%", fan: "5%", hint: "30%", special: "One-track Mind Skill Bonus" } },
    { id: "sup-16", name: "Eishin Flash (SR)", type: "Speed", effect: "Good Training Event & Closeness", image: "img/eishin.png", effects_detail: { training: "10%", race: "5%", fan: "5%", hint: "40%", special: "Initial Affection Boost" } },
    { id: "sup-17", name: "Mayano Top Gun (SR)", type: "Stamina", effect: "Early Game Stamina Keep", image: "img/mayano.png", effects_detail: { training: "8%", race: "5%", fan: "10%", hint: "30%", special: "Stamina Bonus +1" } },
    { id: "sup-18", name: "Mejiro Dober (SR)", type: "Intelligence", effect: "Betwixt Strategy Arena", image: "mejiro dober.png", effects_detail: { training: "10%", race: "5%", fan: "10%", hint: "40%", special: "Intelligence Bonus +1" } },
    { id: "sup-19", name: "Yukino Bijin (SR)", type: "Guts", effect: "Non-stop Girl Hint Utility", image: "img/yukino bijin.png", effects_detail: { training: "8%", race: "10%", fan: "5%", hint: "30%", special: "Guts Bonus +1" } },
    { id: "sup-20", name: "aoi kiryuin (SR)", type: "friend", effect: "Dirt Track Support Mode", image: "img/aoi kiryuin.png", effects_detail: { training: "10%", race: "5%", fan: "10%", hint: "40%", special: "Dirt Arena Stat Boost" } },
    { id: "sup-24", name: "Agnes Tachyon (SR)", type: "Intelligence", effect: "Medium Distance Support", image: "img/agnes.png", effects_detail: { training: "10%", race: "5%", fan: "5%", hint: "30%", special: "Medium Distance Mastery" } },
    { id: "sup-25", name: "King Halo (SR)", type: "Speed", effect: "High Inherit Rank Rate", image: "img/king halo.png", effects_detail: { training: "10%", race: "10%", fan: "5%", hint: "30%", special: "Inherit Multiplier Boost" } }
];

const tiers = [
    { grade: "S", colorClass: "tier-s" },
    { grade: "A", colorClass: "tier-a" },
    { grade: "B", colorClass: "tier-b" },
    { grade: "C", colorClass: "tier-c" },
    { grade: "D", colorClass: "tier-d" }
];


// =========================================================================
//  PENJELASAN FOTO / ICON LOKAL UNTUK DI TEMPEL DI WEB (UNTUK ANDA BACA)
// =========================================================================
// Fungsi dibawah ini (`getTypeIcon`) akan merender gambar lokal (.png) tepat di sebelah teks.
// Anda harus mendownload atau menyiapkan aset gambar icon di dalam folder "images/" Anda.
//
// Daftar Nama File Gambar Yang Harus Anda Siapkan Di Folder Anda:
// 1. "images/speed_icon.png"       -> Cari gambar icon sepatu lari / indikator kecepatan (Warna biru muda).
// 2. "images/stamina_icon.png"     -> Cari gambar icon jantung / hati / stamina (Warna merah).
// 3. "images/power_icon.png"       -> Cari gambar icon barbel / tinju / kekuatan otot (Warna orange).
// 4. "images/guts_icon.png"        -> Cari gambar icon api / semangat / daya juang (Warna kuning/emas).
// 5. "images/intelligence_icon.png"-> Cari gambar icon otak / buku / kepintaran cerdas (Warna hijau).
// 6. "images/friend_icon.png"      -> Cari gambar icon tameng / jabat tangan / teman grup (Warna ungu).
//
// Note: Jika gambar tidak ditemukan / belum Anda masukkan, sistem otomatis memunculkan teks "alt" nya saja.
// =========================================================================

function getTypeIcon(type) {
    const clearType = type.split('/')[0].trim().toLowerCase(); // Ambil kata pertama jika ada teks tipe ganda seperti Speed/Power
    
    switch(clearType) {
        case 'speed':
            return `<img src="img/speed.png" alt="[Speed]" class="type-icon-png">`;
        case 'stamina':
            return `<img src="img/stamina.png" alt="[Stamina]" class="type-icon-png">`;
        case 'power':
            return `<img src="img/power.png" alt="[Power]" class="type-icon-png">`;
        case 'guts':
            return `<img src="img/guts.png" alt="[Guts]" class="type-icon-png">`;
        case 'intelligence':
            return `<img src="img/wit.png" alt="[Intel]" class="type-icon-png">`;
        default:
            return `<img src="img/org senyum.png" alt="[Friend]" class="type-icon-png">`;
    }
}


// ================= SELEKTOR DOM =================
const dynamicContainer = document.getElementById('dynamicContainer');
const pageTitle = document.getElementById('pageTitle');
const searchHeader = document.getElementById('searchHeader');
const searchInput = document.getElementById('searchInput');

const menuCharacters = document.getElementById('menu-characters');
const menuSupport = document.getElementById('menu-support');
const menuTierChar = document.getElementById('menu-tier-char');
const menuTierSupport = document.getElementById('menu-tier-support');

const detailModal = document.getElementById('detailModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.querySelector('.close-modal');

let currentPage = "characters"; 
let activeDragInterval = null; 

// ================= FUNGSI RENDER HALAMAN LIST UTAMA =================
function renderCharacters(data) {
    dynamicContainer.innerHTML = `<div class="card-grid" id="charactersGrid"></div>`;
    const grid = document.getElementById('charactersGrid');
    
    if(data.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; color: #64748b; text-align: center;">Karakter tidak ditemukan...</p>`;
        return;
    }

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = "card click-effect";
        card.innerHTML = `
            <div class="card-img-placeholder">
                <img src="${item.image}" alt="${item.name}" class="char-photo" onerror="this.src='https://placehold.co/150?text=No+Image'">
                <span class="badge-tag">${item.rarity}</span>
            </div>
            <div class="card-info">
                <h3 class="card-title">${item.name}</h3>
                <p class="card-subtitle">${item.strategy}</p>
            </div>
        `;
        card.addEventListener('click', () => showCharacterDetail(item));
        grid.appendChild(card);
    });
}

function renderSupportCards(data) {
    dynamicContainer.innerHTML = `<div class="card-grid" id="supportGrid"></div>`;
    const grid = document.getElementById('supportGrid');

    if(data.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; color: #64748b; text-align: center;">Support card tidak ditemukan...</p>`;
        return;
    }

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = "card click-effect";
        card.innerHTML = `
            <div class="card-img-placeholder">
                <img src="${item.image}" alt="${item.name}" class="char-photo" onerror="this.src='https://placehold.co/150?text=No+Image'">
                <span class="badge-tag badge-blue">
                    ${getTypeIcon(item.type)} 
                    <span class="badge-text-inline">${item.type}</span>
                </span>
            </div>
            <div class="card-info">
                <h3 class="card-title">${item.name}</h3>
                <p class="card-subtitle" style="color: #34d399;">${item.effect}</p>
            </div>
        `;
        card.addEventListener('click', () => showSupportDetail(item));
        grid.appendChild(card);
    });
}

// ================= POP-UP DETAIL MODAL SYSTEM =================
function showCharacterDetail(char) {
    const d = char.details || { pace: "-", ground: "-", distance: "-", growth: "-" };
    modalBody.innerHTML = `
        <div class="modal-detail-wrapper">
            <img src="${char.image}" alt="${char.name}" class="modal-img" onerror="this.src='https://placehold.co/150?text=No+Image'">
            <div class="modal-info-side">
                <h2>${char.name} <span style="color:#f97316;">(${char.rarity})</span></h2>
                <hr style="border-color: #334155; margin: 12px 0;">
                <p><strong><i class="fa-solid fa-person-running"></i> Strategy Pace:</strong> ${d.pace}</p>
                <p><strong><i class="fa-solid fa-road"></i> Ground Aptitude:</strong> ${d.ground}</p>
                <p><strong><i class="fa-solid fa-route"></i> Distance Aptitude:</strong> ${d.distance}</p>
                <p><strong><i class="fa-solid fa-chart-line"></i> Growth Rate Bonus:</strong> ${d.growth}</p>
            </div>
        </div>
    `;
    detailModal.style.display = "block";
}

function showSupportDetail(card) {
    const e = card.effects_detail || { training: "-", race: "-", fan: "-", hint: "-", special: "-" };
    modalBody.innerHTML = `
        <div class="modal-detail-wrapper">
            <img src="${card.image}" alt="${card.name}" class="modal-img" onerror="this.src='https://placehold.co/150?text=No+Image'">
            <div class="modal-info-side">
                <h2 style="display:flex; align-items:center; gap:8px;">
                    ${card.name} 
                    <span class="badge-tag badge-blue" style="position:static; display:inline-flex; align-items:center; gap:4px; padding:4px 10px;">
                        ${getTypeIcon(card.type)} ${card.type}
                    </span>
                </h2>
                <h4 style="color:#34d399; margin: 5px 0 12px 0;">${card.effect}</h4>
                <hr style="border-color: #334155; margin: 12px 0;">
                <table class="effect-table">
                    <tr><th>Support Effect Bonus</th><th>Value / Keuntungan</th></tr>
                    <tr><td>Training Effectiveness</td><td>${e.training}</td></tr>
                    <tr><td>Race Pt / Stat Bonus</td><td>${e.race}</td></tr>
                    <tr><td>Fan Bonus Multiplier</td><td>${e.fan}</td></tr>
                    <tr><td>Hint Rate Up</td><td>${e.hint}</td></tr>
                    <tr><td>Special Support Perk</td><td>${e.special}</td></tr>
                </table>
            </div>
        </div>
    `;
    detailModal.style.display = "block";
}

closeModal.addEventListener('click', () => detailModal.style.display = "none");
window.addEventListener('click', (e) => { if (e.target === detailModal) detailModal.style.display = "none"; });

// ================= INTERACTIVE TIER LIST =================
function renderDragDropTier(type) {
    let htmlContent = `<div id="tierListWrapper">`;
    
    // Render Baris Tingkatan Tier S, A, B, C, D
    tiers.forEach(tier => {
        htmlContent += `
            <div class="tier-row">
                <div class="tier-label ${tier.colorClass}">${tier.grade}</div>
                <div class="tier-items" data-tier="${tier.grade}"></div>
            </div>
        `;
    });
    htmlContent += `</div>`;
    
    // Bagian Header Informasi Pool di bawah Baris Tier List Utama
    htmlContent += `
        <div class="pool-header-container">
            <h3 style="color: #fb923c;" id="poolHeading">Daftar Item Pilihan (Silakan Drag ke Atas / Klik untuk Detail):</h3>
            
            <div class="search-box tier-inline-search">
                <i class="fa-solid fa-magnifying-glass search-icon"></i>
                <input type="text" id="tierSearchInput" placeholder="Cari...">
            </div>
        </div>
        
        <div class="alphabet-shortcut" id="alphabetContainer"></div>
        <div class="card-grid" id="poolGrid"></div>
    `;
    
    dynamicContainer.innerHTML = htmlContent;
    
    // Inisialisasi Shortcut Abjad A-Z
    const alphabetContainer = document.getElementById('alphabetContainer');
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    alphabets.forEach(letter => {
        const btn = document.createElement('span');
        btn.className = "shortcut-letter";
        btn.innerText = letter;
        btn.addEventListener('click', () => {
            const targetCard = Array.from(document.querySelectorAll('#poolGrid .card')).find(c => {
                const title = c.querySelector('.card-title').innerText.trim().toUpperCase();
                return title.startsWith(letter);
            });
            if(targetCard) {
                targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                targetCard.style.borderColor = '#f97316';
                setTimeout(() => targetCard.style.borderColor = '#334155', 1500);
            }
        });
        alphabetContainer.appendChild(btn);
    });

    const poolGrid = document.getElementById('poolGrid');
    const dataSource = (type === 'char') ? charactersData : supportCardsData;

    // Fungsi Render Item Dalam Pool Cadangan
    function populatePool(filteredData) {
        poolGrid.innerHTML = "";
        if(filteredData.length === 0){
            poolGrid.innerHTML = `<p style="grid-column: 1/-1; color: #64748b; text-align: center; padding: 20px;">Item pencarian tidak ditemukan di pool...</p>`;
            return;
        }

        filteredData.forEach(item => {
            if (document.getElementById(item.id)) return;

            // Logika tag lencana: Jika karakter tampilkan raritinya, jika support card tampilkan FOTO icon + tipenya.
            const isChar = !!item.rarity;
            const badgeHTML = isChar ? item.rarity : `${getTypeIcon(item.type)} <span class="badge-text-inline">${item.type}</span>`;
            const badgeClass = isChar ? '' : 'badge-blue';
            
            const card = document.createElement('div');
            card.className = "card click-effect";
            card.id = item.id;
            card.draggable = true;
            card.innerHTML = `
                <div class="card-img-placeholder">
                    <img src="${item.image}" alt="${item.name}" class="char-photo" draggable="false" onerror="this.src='https://placehold.co/150?text=No+Image'">
                    <span class="badge-tag ${badgeClass}">${badgeHTML}</span>
                </div>
                <div class="card-info">
                    <h3 class="card-title">${item.name}</h3>
                </div>
            `;
            
            card.addEventListener('click', () => {
                if (!card.classList.contains('dragging')) {
                    if(type === 'char') showCharacterDetail(item);
                    else showSupportDetail(item);
                }
            });

            poolGrid.appendChild(card);
        });
        initDragAndDrop();
    }

    populatePool(dataSource);

    // Filter input box dinamis
    const tierSearchInput = document.getElementById('tierSearchInput');
    tierSearchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = dataSource.filter(item => item.name.toLowerCase().includes(query));
        populatePool(filtered);
    });
}

// ================= FITUR UTAMA AUTO-SCROLL SAAT DRAG & DROP =================
function handleAutoScroll(e) {
    const scrollThreshold = 100; 
    const scrollSpeed = 15; 
    
    if (e.clientY < scrollThreshold) {
        if (!activeDragInterval) {
            activeDragInterval = setInterval(() => { window.scrollBy(0, -scrollSpeed); }, 20);
        }
    } else if (window.innerHeight - e.clientY < scrollThreshold) {
        if (!activeDragInterval) {
            activeDragInterval = setInterval(() => { window.scrollBy(0, scrollSpeed); }, 20);
        }
    } else {
        clearInterval(activeDragInterval);
        activeDragInterval = null;
    }
}

function stopAutoScroll() {
    clearInterval(activeDragInterval);
    activeDragInterval = null;
}

function initDragAndDrop() {
    const cards = document.querySelectorAll('.card');
    const tierZones = document.querySelectorAll('.tier-items');
    const poolGrid = document.getElementById('poolGrid');

    cards.forEach(card => {
        card.addEventListener('dragstart', (e) => {
            card.classList.add('dragging');
            e.dataTransfer.setData('text/plain', card.id);
            document.addEventListener('dragover', handleAutoScroll);
        });
        card.addEventListener('dragend', () => {
            card.classList.remove('dragging');
            document.removeEventListener('dragover', handleAutoScroll);
            stopAutoScroll();
        });
    });

    tierZones.forEach(zone => {
        zone.addEventListener('dragover', (e) => { e.preventDefault(); zone.classList.add('drag-over'); });
        zone.addEventListener('dragleave', () => { zone.classList.remove('drag-over'); });
        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            zone.classList.remove('drag-over');
            const id = e.dataTransfer.getData('text/plain');
            const draggedElement = document.getElementById(id);
            if (draggedElement) zone.appendChild(draggedElement);
            stopAutoScroll();
        });
    });

    poolGrid.addEventListener('dragover', (e) => { e.preventDefault(); });
    poolGrid.addEventListener('drop', (e) => {
        e.preventDefault();
        const id = e.dataTransfer.getData('text/plain');
        const draggedElement = document.getElementById(id);
        if (draggedElement) poolGrid.appendChild(draggedElement);
        stopAutoScroll();
    });
}

// ================= NAVIGASI HALAMAN UTAMA =================
function switchPage(pageName) {
    currentPage = pageName;
    searchInput.value = ""; 
    stopAutoScroll();
    
    [menuCharacters, menuSupport, menuTierChar, menuTierSupport].forEach(menu => menu.classList.remove('active'));

    if (pageName === "characters") {
        menuCharacters.classList.add('active');
        pageTitle.innerText = "Characters List";
        searchHeader.style.display = "block"; 
        searchInput.placeholder = "Cari nama Umamusume...";
        renderCharacters(charactersData);
    } 
    else if (pageName === "support") {
        menuSupport.classList.add('active');
        pageTitle.innerText = "Support Cards List";
        searchHeader.style.display = "block"; 
        searchInput.placeholder = "Cari tipe/nama support card...";
        renderSupportCards(supportCardsData);
    } 
    else if (pageName === "tier-char") {
        menuTierChar.classList.add('active');
        pageTitle.innerText = "Interactive Tier List: Characters";
        searchHeader.style.display = "none"; 
        renderDragDropTier('char');
    }
    else if (pageName === "tier-support") {
        menuTierSupport.classList.add('active');
        pageTitle.innerText = "Interactive Tier List: Support Cards";
        searchHeader.style.display = "none"; 
        renderDragDropTier('support');
    }
}

menuCharacters.addEventListener('click', (e) => { e.preventDefault(); switchPage("characters"); });
menuSupport.addEventListener('click', (e) => { e.preventDefault(); switchPage("support"); });
menuTierChar.addEventListener('click', (e) => { e.preventDefault(); switchPage("tier-char"); });
menuTierSupport.addEventListener('click', (e) => { e.preventDefault(); switchPage("tier-support"); });

searchInput.addEventListener('input', (e) => {
    const keyword = e.target.value.toLowerCase();
    if (currentPage === "characters") {
        const filtered = charactersData.filter(uma => uma.name.toLowerCase().includes(keyword));
        renderCharacters(filtered);
    } else if (currentPage === "support") {
        const filtered = supportCardsData.filter(card => 
            card.name.toLowerCase().includes(keyword) || card.type.toLowerCase().includes(keyword)
        );
        renderSupportCards(filtered);
    }
});

switchPage("characters");
