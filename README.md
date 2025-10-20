# API-SHOES-WASH

REST API untuk layanan daftar barang cuci sepatu yang dibangun dengan Node.js, Express.js, dan Supabase.

## 📋 Deskripsi Umum

API ini menyediakan layanan manajemen data untuk bisnis cuci sepatu, memungkinkan pengelolaan data sepatu yang sedang dalam proses pencucian dengan operasi CRUD lengkap.

## 🏗 Struktur Project
API-SHOES-WASH/
├── src/
│ ├── config/
│ │ └── supabase.js
│ ├── controllers/
│ │ └── shoeController.js
│ ├── models/
│ │ └── shoeModel.js
│ ├── routes/
│ │ └── shoeRoutes.js
│ └── index.js
├── package.json
├── vercel.json
└── README.md


## 🎯 Fitur Utama

- **CRUD Operations**: Create, Read, Update, Delete data sepatu
- **Status Filter**: Filter data berdasarkan status pencucian
- **RESTful Design**: Mengikuti standar REST API
- **MVC Architecture**: Pattern Model-View-Controller
- **Cloud Database**: Menggunakan Supabase sebagai database

## 🗂 Struktur Data

### Tabel: shoe_items

| Field | Type | Description |
|-------|------|-------------|
| id | UUID (Primary Key) | ID unik item |
| customer_name | VARCHAR | Nama pelanggan |
| shoe_type | VARCHAR | Jenis sepatu |
| shoe_brand | VARCHAR | Merek sepatu |
| description | TEXT | Deskripsi tambahan |
| phone_number | VARCHAR | Nomor telepon pelanggan |
| status | VARCHAR | Status pencucian |
| created_at | TIMESTAMP | Waktu dibuat |
| updated_at | TIMESTAMP | Waktu diupdate |

### Status yang Tersedia:
- `Diterima` - Sepatu baru diterima
- `Dicuci` - Sedang dalam proses cuci
- `Dikeringkan` - Sedang dikeringkan
- `Selesai` - Proses selesai
- `Diambil` - Sudah diambil pelanggan

## 🚀 Contoh Request dan Response

### 1. GET /api/items - Mendapatkan semua data
**Request:**
GET /api/items

Response:

```
[
{
  "success": true,
  "data": [
    {
      "id": "123e4567-e89b-12d3-a456-426614174000",
      "customer_name": "John Doe",
      "shoe_type": "Sneakers",
      "shoe_brand": "Nike",
      "description": "Sepatu kotor bekas lari",
      "phone_number": "08123456789",
      "status": "Diterima",
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    }
  ],
  "total": 1
}
]

```