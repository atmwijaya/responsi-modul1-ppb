# API-SHOES-WASH

REST API untuk layanan daftar barang cuci sepatu yang dibangun dengan Node.js, Express.js, dan Supabase.

## 📋 Deskripsi Umum

API ini menyediakan layanan manajemen data untuk bisnis cuci sepatu, memungkinkan pengelolaan data sepatu yang sedang dalam proses pencucian dengan operasi CRUD lengkap.

## 🎯 Tujuan

1. Mengimplementasikan operasi CRUD dalam REST API.
2. Melakukan pengolahan sistem basis data dengan framework Express sebagai backend.
3. Membangun sistem pencatatan yang relevan untuk kebutuhan bisnis.
4. Melakukan filter data berdasarkan status.

## 🎯 Fitur Utama

- **CRUD Operations**: Create, Read, Update, Delete data sepatu
- **Status Filter**: Filter data berdasarkan status pencucian
- **RESTful Design**: Mengikuti standar REST API
- **MVC Architecture**: Pattern Model-View-Controller
- **Cloud Database**: Menggunakan Supabase sebagai database

## 🏗 Struktur Data

Contoh struktur data yang disimpan ke dalam database:

```
{
  "id": "2da17699-2e3d-4de0-90cf-65a24c85f4f9",
  "customer_name": "Arrasyid Atma Wijaya",
  "shoe_type": "Sneakers",
  "shoe_brand": "Adidas",
  "description": "Sepatu butuh cuci menyeluruh",
  "phone_number": "0819876543298",
  "status": "Diterima",
  "created_at": "2025-10-21T02:47:27.528+00:00",
  "updated_at": "2025-10-21T02:47:27.528+00:00"
}
```

Keterangan:
- **id**: Nomor unik sepatu
- **customer_name**: Nama pengguna sepatu
- **shoe_type**: Tipe sepatu yang dicuci
- **shoe_brand**: Merek sepatu yang dicuci
- **description**: Deskripsi sepatu/kondisi sepatu
- **phone_number**: Nomor telepon pengguna
- **status**: Status sepatu
- **created_at**: Tanggal masuk sepatu
- **updated_at**: Tanggal pembaharuan sepatu

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

## Contoh Request dan Response

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

### 2. POST /api/items - Mendaftarkan sepatu 
**Request:**
POST /api/items

Body:
POST /items

```
{
  "customer_name": "nama kustomer",
  "shoe_type": "tipe sepatu",
  "shoe_brand": "merek sepatu",
  "description": "deskripsi sepatu",
  "phone_number": "nomor telepon"
}

```

Response:

```
[
{
  "success": true,
  "data": [
    {
      "id": "123e4567-e89b-12d3-a456-426614174000",
      "customer_name": "nama kustomer",
      "shoe_type": "tipe sepatu",
      "shoe_brand": "merek sepatu",
      "description": "deskripsi sepatu",
      "phone_number": "nomor telepon",
      "status": "Diterima",
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    }
  ],
  "total": 1
}
]

```

### 3. PUT /api/items - Memperbaharui status sepatu
**REQUEST:**
PUT api/items/:id

Body:
PUT /items/:id

```
{
  "status": "Dicuci/Dikeringkan/Dijemur/Selesai/Diambil"
}
```

Response:

```
{
    "success": true,
    "message": "Data sepatu berhasil diperbarui.",
    "data": {
        "id": "2da17699-2e3d-4de0-90cf-65a24c85f4f9",
        "customer_name": "nama kustomer",
        "shoe_type": "tipe sepatu",
        "shoe_brand": "merek sepatu",
        "description": "deskripsi sepatu",
        "phone_number": "nomor telepon",
        "status": "Dicuci/Dikeringkan/Dijemur/Selesai/Diambil",
        "created_at": "2025-10-21T02:47:27.528+00:00",
        "updated_at": "2025-10-21T02:57:58.278+00:00"
    }
}
```

### 4. DELETE /api/items - Menghapus data sepatu yang sudah selesai
**REQUEST:**
DELETE api/items/:id

Response:

```
{
    "success": true,
    "message": "Data sepatu berhasil dihapus."
}
```

## Bonus Fitur

API ini dilengkapi dengan fitur filter berdasarkan status sepatu, misalnya:
GET /items?status=Selesai

Response:

```
{
    "success": true,
    "data": [
        {
            "id": "2da17699-2e3d-4de0-90cf-65a24c85f4f9",
            "customer_name": "nama kustomer",
            "shoe_type": "tipe sepatu",
            "shoe_brand": "merek sepatu",
            "description": "deskripsi sepatu",
            "phone_number": "nomor telepon",
            "status": "Selesai",
            "created_at": "2025-10-21T02:47:27.528+00:00",
            "updated_at": "2025-10-21T03:05:58.454+00:00"
        }
    ],
    "total": 1
}
```

## Langkah Instalasi dan Cara Menjalankan API
### 1. Clone pada GitHub ke dalam folder kerja anda

```
git clone https://github.com/atmwijaya/responsi-modul1-ppb.git
cd api-shoe-wash
```

### 2. Lakukan install dependencies

```
npm install
```

### 3. Setup environmental variables
Buat file .env yang berisi sebagai berikut:

```
SUPABASE_URL=https://xwzzsicukxgdvpxtskdl.supabase.co
SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3enpzaWN1a3hnZHZweHRza2RsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA5NzM0NDUsImV4cCI6MjA3NjU0OTQ0NX0.KCp4MJkCMUANNr14ETE6tUo_0j3mC92yKgtczw_V848
PORT=3000
```

### 4. Jalankan API

```
npm run dev
```

### 5. Lakukan pengujian API dengan alamat sebagai berikut:

```
http://localhost:3000/api/items
```

## Link Deployment Vercel

https://responsi-modul1-ppb-swart.vercel.app/api/items
