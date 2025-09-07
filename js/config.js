const CONFIG = {
nama: "Shin Vollerei", // Nama Store
profil: "https://files.cloudkuimages.guru/images/ydhAUBkY.jpg", // Url Profil
banner: "https://files.cloudkuimages.guru/images/ARIkKcZP.jpg", // Url Banner 
tentang: "Shin Vollerei adalah toko online terpercaya yang telah melayani ribuan pelanggan sejak 2024. Kami menyediakan berbagai produk digital untuk kebutuhan sehari-hari dengan kualitas terbaik dan harga terjangkau.\n\nKomitmen kami adalah memberikan pengalaman berbelanja yang menyenangkan dengan pelayanan terbaik, produk original, dan garansi resmi untuk semua produk yang kami jual.",
alamat: "Isekai",
sosial_media: {
  email: "shinnxml74@gmail.com", // Email
  youtube: "-", // YouTube Username 
  tiktok: "-", // Tiktok Username 
  whatsapp: "62895371762070", // WhatsApp Number 
  telegram: "shintamvan" // Telegram Username
},
payment: {
  dana: "0895371762070", // Payment Dana
  gopay: "085641417033", // Payment Gopay 
  ovo: "0895371762070", // Payment Ovo 
  qris: "https://files.cloudkuimages.guru/images/e3sLC9zX.jpg" // Url Qris
},
telegram_api: {
  bot: "62828278:7678blablabla", // Token bot father
  chatid: "6118311111" // ID telegram
},
}

// Produk
const productsData = {
            "Hosting (Coming Soon)": [
              {
                "id": 1,
                "name": "Panel Pterodactyl",
                "icon": "fas fa-server",
                "description": "Panel Pterodactyl hosting bot/game dengan performa stabil dan harga terjangkau.",
                "variants": [
                  { "name": "1GB RAM", "price": 0 },
                  { "name": "2GB RAM", "price": 0 },
                  { "name": "3GB RAM", "price": 0 },
                  { "name": "4GB RAM", "price": 0 },
                  { "name": "5GB RAM", "price": 0 },
                  { "name": "6GB RAM", "price": 0 },
                  { "name": "7GB RAM", "price": 0 },
                  { "name": "8GB RAM", "price": 0 },
                  { "name": "9GB RAM", "price": 0 },
                  { "name": "10GB RAM", "price": 0 },
                  { "name": "Unlimited RAM", "price": 0 }
                ]
              },
              {
                "id": 2,
                "name": "VPS Kecil",
                "icon": "fas fa-microchip",
                "description": "Virtual Private Server murah untuk belajar dan project kecil.",
                "variants": [
                  { "name": "1 vCPU / 1GB RAM / 20GB SSD", "price": 0 },
                  { "name": "2 vCPU / 2GB RAM / 40GB SSD", "price": 0 }
                ]
              },
              {
                "id": 3,
                "name": "VPS Menengah",
                "icon": "fas fa-hdd",
                "description": "VPS menengah dengan performa cukup untuk website atau panel hosting.",
                "variants": [
                  { "name": "2 vCPU / 4GB RAM / 80GB SSD", "price": 0 },
                  { "name": "4 vCPU / 8GB RAM / 160GB SSD", "price": 0 }
                ]
              },
              {
                "id": 4,
                "name": "Dedicated Server",
                "icon": "fas fa-database",
                "description": "Server dedicated dengan performa tinggi, cocok untuk skala besar.",
                "variants": [
                  { "name": "8 vCPU / 32GB RAM / 500GB SSD", "price": 0 },
                  { "name": "16 vCPU / 64GB RAM / 1TB SSD", "price": 0 }
                ]
              },
              {
                "id": 5,
                "name": "Web Hosting",
                "icon": "fas fa-globe",
                "description": "Hosting website dengan panel cPanel / DirectAdmin, cocok untuk pemula.",
                "variants": [
                  { "name": "Starter (1GB Storage)", "price": 0 },
                  { "name": "Basic (5GB Storage)", "price": 0 },
                  { "name": "Pro (10GB Storage)", "price": 0 }
                ]
              }
            ],
            "Desain (Coming Soon)": [
                {
                    id: 6,
                    name: "Desain Logo",
                    icon: "fas fa-pen-nib",
                    description: "Jasa pembuatan logo dengan berbagai gaya desain. Cocok untuk brand, usaha, atau komunitas.",
                    variants: [
                        { name: "Logo Minimalis", price: 0 },
                        { name: "Logo Typography", price: 0 },
                        { name: "Logo Mascot", price: 0 },
                        { name: "Logo Vintage", price: 0 },
                        { name: "Logo Modern", price: 0 },
                        { name: "Request Custom", price: "Harga sesuai request" }
                    ]
                },
                {
                    id: 7,
                    name: "Desain Banner",
                    icon: "fas fa-image",
                    description: "Jasa pembuatan banner untuk promosi usaha, media sosial, atau event.",
                    variants: [
                        { name: "Banner Sosmed", price: 0 },
                        { name: "Banner Event", price: 0 },
                        { name: "Banner Promosi", price: 0 }
                    ]
                },
                {
                    id: 8,
                    name: "Desain Poster",
                    icon: "fas fa-scroll",
                    description: "Jasa desain poster kreatif untuk kebutuhan bisnis, acara, atau publikasi.",
                    variants: [
                        { name: "Poster A4", price: 0 },
                        { name: "Poster A3", price: 0 }
                    ]
                },
                {
                    id: 9,
                    name: "UI/UX Design",
                    icon: "fas fa-laptop-code",
                    description: "Jasa desain UI/UX untuk website atau aplikasi dengan tampilan modern dan user-friendly.",
                    variants: [
                        { name: "Landing Page", price: 0 },
                        { name: "Full Website", price: 0 },
                        { name: "Mobile App UI", price: 0 }
                    ]
                },
                {
                    id: 10,
                    name: "Desain Kartu Nama",
                    icon: "fas fa-id-card",
                    description: "Jasa desain kartu nama profesional untuk bisnis atau personal branding.",
                    variants: [
                        { name: "Basic", price: 0 },
                        { name: "Premium", price: 0 }
                    ]
                }
            ],
            "Produk Digital": [
                {
                    id: 11,
                    name: "E-Book",
                    icon: "fas fa-book",
                    description: "Koleksi e-book digital dengan berbagai topik menarik, mulai dari bisnis, programming, hingga hobi.",
                    variants: [
                        { name: "E-Book Bisnis", price: 0 },
                        { name: "E-Book Programming", price: 0 },
                        { name: "E-Book Random Pack", price: 0 }
                    ]
                },
                {
                    id: 12,
                    name: "Software & Tools",
                    icon: "fas fa-cogs",
                    description: "Software dan tools digital untuk menunjang pekerjaan maupun kebutuhan kreatif.",
                    variants: [
                        { name: "Software Editing", price: 0 },
                        { name: "Software Utility", price: 0 },
                        { name: "Tools Random Pack", price: 0 }
                    ]
                },
                {
                    id: 13,
                    name: "Lisensi & Key",
                    icon: "fas fa-key",
                    description: "Produk lisensi resmi dan serial key untuk software pilihan.",
                    variants: [
                        { name: "Windows Key", price: 0 },
                        { name: "Office Key", price: 0 },
                        { name: "Antivirus Key", price: 0 }
                    ]
                },
                {
                    id: 14,
                    name: "Template Digital",
                    icon: "fas fa-file-alt",
                    description: "Template digital untuk desain, presentasi, website, dan media sosial.",
                    variants: [
                        { name: "Template PowerPoint", price: 0 },
                        { name: "Template Website", price: 0 },
                        { name: "Template Sosmed", price: 0 }
                    ]
                },
                {
                    id: 15,
                    name: "Akun Premium",
                    icon: "fas fa-user-circle",
                    description: "Berbagai akun premium dengan harga terjangkau, cocok untuk hiburan dan produktivitas.",
                    variants: [
                        { name: "Alight Motion (1 Tahun Private)", price: 20000 },
                        { name: "Alight Motion (1 Tahun Sharing)", price: 10000 },
                        { name: "Bstation (1 Bulan Sharing)", price: 10000 },
                        { name: "Bstation Premium (3 Bulan Sharing)", price: 18000 },
                        { name: "Bstation (1 Tahun Sharing)", price: 25000 },
                        { name: "Bstation (1 Bulan Private)", price: 30000 },
                        { name: "Bstation (1 Tahun Private)", price: 180000 },
                        { name: "Capcut (1 Bulan Sharing)", price: 13000 },
                        { name: "Capcut (1 Minggu Private)", price: 8000 },
                        { name: "Capcut (1 Bulan Private)", price: 25000 },
                        { name: "ChatGpt (1 Bulan Sharing)", price: 35000 },
                        { name: "ChatGpt (1 Bulan Bulan Invite)", price: 50000 },
                       { name: "Crunchyroll (1 Bulan Sharing)", price: 20000 },
                        { name: "Crunchyroll (1 Bulan Private)", price: 25000 },
                         { name: "Wetv (1 Bulan Sharing)", price: 10000 },
                         { name: "Wetv (1 Bulan Private)", price: 28000 },
                         { name: "Apple Music (1 Bulan Invite)", price: 10000 },
                         { name: "Apple Music (1 Bulan Famhead)", price: 15000 },
                         { name: "Disney (1 Bulan Sharing 6u)", price: 25000 },
                         { name: "Disney (1 Bulan Sharing 3u)", price: 50000 },
                         { name: "Drakorid (1 Tahun Sharing)", price: 18000 },
                         { name: "Loklok (1 Bulan Sharing 3u Basic)", price: 25000 },
                         { name: "Loklok (1 Bulan Sharing 4u Standar)", price: 35000 },
                    ]
                }
            ]
        };
