// CONFIGURASI SUPABASE & DB LAYER - MOBILSECONDMEDAN
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_x-6siGxMwoVG3Buolx2hBA_WzV0yJUJ";
const SUPABASE_SECRET_KEY = "sb_secret_LkA5vZzgImp1cEtH2vYNYQ_p6wZUTyF";

// Silakan ubah URL di bawah ini dengan URL Project Supabase Anda (bisa didapatkan di Settings > API di Dashboard Supabase)
let SUPABASE_URL = localStorage.getItem("MSM_SUPABASE_URL") || "https://xtqnofdbfxaknachrwdg.supabase.co";

let supabase = null;
let dbMode = "Local Storage (Fallback) 💾";

// Inisialisasi Supabase Client jika URL valid
if (typeof supabasejs !== "undefined" && SUPABASE_URL && !SUPABASE_URL.includes("your-project-ref")) {
    try {
        supabase = supabasejs.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
        dbMode = "Supabase Cloud ⚡";
    } catch (e) {
        console.warn("Gagal menginisialisasi Supabase, menggunakan LocalStorage fallback.", e);
    }
}

// ==========================================
// DUMMY SEED DATA UNTUK LOCALSTORAGE FALLBACK
// ==========================================
const DEFAULT_CARS = [
    {
        id: "1",
        title: "Toyota Avanza Veloz 1.5 AT 2019",
        price: 175000000,
        year: 2019,
        transmission: "Matik",
        fuel_type: "Bensin",
        mileage: 45000,
        condition_type: "Bekas",
        status: "Tersedia",
        description: "Toyota Avanza Veloz facelift tahun 2019 transmisi otomatis (A/T) dengan kondisi super istimewa. Unit tangan pertama dari baru, servis record resmi Toyota Medan, AC double blower dingin membeku. Bodi mulus bebas dempul, kaki-kaki kokoh senyap khas Veloz. Surat lengkap, pajak panjang, siap pakai dalam dan luar kota!",
        tax_expiration: "Oktober 2026",
        engine_cc: 1500,
        passenger_capacity: 7,
        color: "Putih Metalik",
        images: [
            "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&q=80&w=800"
        ],
        created_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
        id: "2",
        title: "Toyota Innova Reborn 2.4 G Diesel AT 2018",
        price: 295000000,
        year: 2018,
        transmission: "Matik",
        fuel_type: "Diesel",
        mileage: 60000,
        condition_type: "Bekas",
        status: "Booking",
        description: "Innova Reborn G Diesel 2.4 A/T 2018. Mesin diesel 2GD-FTV legendaris yang sangat bertenaga dan irit bahan bakar. Interior original bersih dan wangi, rawatan rutin bengkel resmi. Transmisi matik sangat responsif. Kelistrikan dan sensor normal tanpa kendala. Sangat cocok sebagai mobil keluarga berkelas di Medan.",
        tax_expiration: "November 2026",
        engine_cc: 2400,
        passenger_capacity: 7,
        color: "Hitam Metalik",
        images: [
            "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800"
        ],
        created_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
        id: "3",
        title: "Honda Brio RS 1.2 AT 2020",
        price: 145000000,
        year: 2020,
        transmission: "Matik",
        fuel_type: "Bensin",
        mileage: 30000,
        condition_type: "Bekas",
        status: "Tersedia",
        description: "Honda Brio RS tipe tertinggi tahun 2020. Tampilan sporty dengan velg two-tone original RS, interior jahitan orange khas RS, head unit touchscreen modern. Mesin i-VTEC 1.2L lincah, sangat irit BBM dan mudah diparkir di kemacetan kota Medan. Surat-surat aman terjamin lengkap.",
        tax_expiration: "Desember 2026",
        engine_cc: 1200,
        passenger_capacity: 5,
        color: "Orange Phoenix",
        images: [
            "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=800"
        ],
        created_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
        id: "4",
        title: "Mitsubishi Xpander Ultimate 1.5 AT 2019",
        price: 215000000,
        year: 2019,
        transmission: "Matik",
        fuel_type: "Bensin",
        mileage: 50000,
        condition_type: "Bekas",
        status: "Terjual",
        description: "Mitsubishi Xpander Ultimate A/T 2019 warna silver metalik. Fitur keselamatan lengkap (Active Stability Control, Hill Start Assist), interior bernuansa beige yang mewah dengan panel kayu. Jok dilapis kulit sintetis rapi, ban tebal, cat original bawaan pabrik. Istimewa dan siap COD wilayah Medan.",
        tax_expiration: "Maret 2027",
        engine_cc: 1500,
        passenger_capacity: 7,
        color: "Silver Metalik",
        images: [
            "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&q=80&w=800"
        ],
        created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
        id: "5",
        title: "Wuling Confero S 1.5 C MT 2019",
        price: 105000000,
        year: 2019,
        transmission: "Manual",
        fuel_type: "Bensin",
        mileage: 55000,
        condition_type: "Bekas",
        status: "Tersedia",
        description: "Wuling Confero S 1.5 C 2019 manual, kabin lapang dengan kapasitas 8 penumpang. AC double blower dingin merata, suspensi empuk untuk perjalanan keluarga. Tampilan gagah dengan aksen hitam di bumper dan overfender. Kualitas terjaga, servis rutin berkala, siap bawa pulang langsung ke rumah Anda.",
        tax_expiration: "Agustus 2026",
        engine_cc: 1500,
        passenger_capacity: 8,
        color: "Merah Burgundy",
        images: [
            "images/owner.png",
            "https://images.unsplash.com/photo-1581540222194-0def2dda95d8?auto=format&fit=crop&q=80&w=800"
        ],
        created_at: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString()
    }
];

const DEFAULT_COMMENTS = [
    { id: "c1", car_id: "1", sender_name: "Andi Saputra", comment_text: "Masih bisa nego tipis ga gan buat Avanzanya? Nanti saya bawa mekanik kesana.", is_approved: true, created_at: new Date().toISOString() },
    { id: "c2", car_id: "1", sender_name: "Budi Siregar", comment_text: "Pajak hidup atau mati ya bos?", is_approved: true, created_at: new Date().toISOString() }
];

const DEFAULT_MESSAGES = [
    { id: "m1", car_id: "1", sender_name: "Hendra Wijaya", sender_phone: "081260607070", message_content: "Tanya unit Avanza Veloz 2018, apakah hari Sabtu showroom Cangkir buka untuk test drive?", is_read: false, created_at: new Date().toISOString() }
];

// Inisialisasi Database Lokal
function initLocalDb() {
    if (!localStorage.getItem("MSM_CARS")) {
        localStorage.setItem("MSM_CARS", JSON.stringify(DEFAULT_CARS));
    }
    if (!localStorage.getItem("MSM_COMMENTS")) {
        localStorage.setItem("MSM_COMMENTS", JSON.stringify(DEFAULT_COMMENTS));
    }
    if (!localStorage.getItem("MSM_MESSAGES")) {
        localStorage.setItem("MSM_MESSAGES", JSON.stringify(DEFAULT_MESSAGES));
    }
}
initLocalDb();

// ==========================================
// DB LAYER API IMPLEMENTATION (DENGAN FALLBACK)
// ==========================================
const DB = {
    getMode: function() {
        return dbMode;
    },
    setSupabaseUrl: function(url) {
        localStorage.setItem("MSM_SUPABASE_URL", url);
        window.location.reload();
    },
    resetToLocal: function() {
        localStorage.removeItem("MSM_SUPABASE_URL");
        window.location.reload();
    },

    // ---------------- MOBIL ----------------
    getCars: async function() {
        if (supabase) {
            const { data, error } = await supabase.from("cars").select("*, car_images(*)");
            if (!error) return data;
            console.error("Supabase Error, fallback to LocalStorage", error);
        }
        return JSON.parse(localStorage.getItem("MSM_CARS"));
    },

    getCarById: async function(id) {
        if (supabase) {
            const { data, error } = await supabase.from("cars").select("*, car_images(*)").eq("id", id).single();
            if (!error) return data;
            console.error("Supabase Error, fallback to LocalStorage", error);
        }
        const cars = JSON.parse(localStorage.getItem("MSM_CARS"));
        return cars.find(c => c.id === id || String(c.id) === String(id)) || null;
    },

    addCar: async function(carData) {
        if (supabase) {
            const { data: car, error } = await supabase.from("cars").insert([carData]).select().single();
            if (!error) return car;
            console.error("Supabase Error", error);
            throw error;
        }
        const cars = JSON.parse(localStorage.getItem("MSM_CARS"));
        const newCar = {
            id: String(Date.now()),
            created_at: new Date().toISOString(),
            ...carData
        };
        cars.unshift(newCar);
        localStorage.setItem("MSM_CARS", JSON.stringify(cars));
        return newCar;
    },

    updateCar: async function(id, carData) {
        if (supabase) {
            const { data, error } = await supabase.from("cars").update(carData).eq("id", id).select().single();
            if (!error) return data;
            console.error("Supabase Error", error);
            throw error;
        }
        const cars = JSON.parse(localStorage.getItem("MSM_CARS"));
        const index = cars.findIndex(c => c.id === id || String(c.id) === String(id));
        if (index !== -1) {
            cars[index] = { ...cars[index], ...carData };
            localStorage.setItem("MSM_CARS", JSON.stringify(cars));
            return cars[index];
        }
        throw new Error("Mobil tidak ditemukan");
    },

    deleteCar: async function(id) {
        if (supabase) {
            const { error } = await supabase.from("cars").delete().eq("id", id);
            if (!error) return true;
            console.error("Supabase Error", error);
            throw error;
        }
        let cars = JSON.parse(localStorage.getItem("MSM_CARS"));
        cars = cars.filter(c => c.id !== id && String(c.id) !== String(id));
        localStorage.setItem("MSM_CARS", JSON.stringify(cars));
        return true;
    },

    // ---------------- KOMENTAR ----------------
    getComments: async function(carId) {
        if (supabase) {
            const { data, error } = await supabase.from("comments").select("*").eq("car_id", carId).eq("is_approved", true);
            if (!error) return data;
            console.error("Supabase Error, fallback to LocalStorage", error);
        }
        const comments = JSON.parse(localStorage.getItem("MSM_COMMENTS"));
        return comments.filter(c => (c.car_id === carId || String(c.car_id) === String(carId)) && c.is_approved);
    },

    getAllCommentsAdmin: async function() {
        if (supabase) {
            const { data, error } = await supabase.from("comments").select("*, cars(title)");
            if (!error) return data;
            console.error("Supabase Error, fallback to LocalStorage", error);
        }
        const comments = JSON.parse(localStorage.getItem("MSM_COMMENTS"));
        const cars = JSON.parse(localStorage.getItem("MSM_CARS"));
        return comments.map(c => {
            const car = cars.find(item => String(item.id) === String(c.car_id));
            return { ...c, cars: { title: car ? car.title : "Mobil Dihapus" } };
        });
    },

    addComment: async function(carId, senderName, commentText) {
        const commentObj = {
            car_id: carId,
            sender_name: senderName,
            comment_text: commentText,
            is_approved: true
        };
        if (supabase) {
            const { data, error } = await supabase.from("comments").insert([commentObj]).select().single();
            if (!error) return data;
            console.error("Supabase Error", error);
            throw error;
        }
        const comments = JSON.parse(localStorage.getItem("MSM_COMMENTS"));
        const newComment = {
            id: "c_" + Date.now(),
            created_at: new Date().toISOString(),
            ...commentObj
        };
        comments.unshift(newComment);
        localStorage.setItem("MSM_COMMENTS", JSON.stringify(comments));
        return newComment;
    },

    deleteComment: async function(id) {
        if (supabase) {
            const { error } = await supabase.from("comments").delete().eq("id", id);
            if (!error) return true;
            console.error("Supabase Error", error);
            throw error;
        }
        let comments = JSON.parse(localStorage.getItem("MSM_COMMENTS"));
        comments = comments.filter(c => c.id !== id && String(c.id) !== String(id));
        localStorage.setItem("MSM_COMMENTS", JSON.stringify(comments));
        return true;
    },

    // ---------------- PESAN PRIVAT ----------------
    getMessages: async function() {
        if (supabase) {
            const { data, error } = await supabase.from("private_messages").select("*, cars(title)").order("created_at", { ascending: false });
            if (!error) return data;
            console.error("Supabase Error, fallback to LocalStorage", error);
        }
        const messages = JSON.parse(localStorage.getItem("MSM_MESSAGES"));
        const cars = JSON.parse(localStorage.getItem("MSM_CARS"));
        return messages.map(m => {
            const car = cars.find(item => String(item.id) === String(m.car_id));
            return { ...m, cars: car ? { title: car.title } : null };
        }).sort((a,b) => new Date(b.created_at) - new Date(a.created_at));
    },

    addMessage: async function(carId, senderName, senderPhone, messageContent) {
        const messageObj = {
            car_id: carId || null,
            sender_name: senderName,
            sender_phone: senderPhone,
            message_content: messageContent,
            is_read: false
        };
        if (supabase) {
            const { data, error } = await supabase.from("private_messages").insert([messageObj]).select().single();
            if (!error) return data;
            console.error("Supabase Error", error);
            throw error;
        }
        const messages = JSON.parse(localStorage.getItem("MSM_MESSAGES"));
        const newMessage = {
            id: "m_" + Date.now(),
            created_at: new Date().toISOString(),
            ...messageObj
        };
        messages.unshift(newMessage);
        localStorage.setItem("MSM_MESSAGES", JSON.stringify(messages));
        return newMessage;
    },

    markMessageRead: async function(id) {
        if (supabase) {
            const { data, error } = await supabase.from("private_messages").update({ is_read: true }).eq("id", id).select().single();
            if (!error) return data;
            console.error("Supabase Error", error);
            throw error;
        }
        const messages = JSON.parse(localStorage.getItem("MSM_MESSAGES"));
        const index = messages.findIndex(m => m.id === id || String(m.id) === String(id));
        if (index !== -1) {
            messages[index].is_read = true;
            localStorage.setItem("MSM_MESSAGES", JSON.stringify(messages));
            return messages[index];
        }
        return null;
    }
};
