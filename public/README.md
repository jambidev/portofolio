# Instruksi untuk File Audio

Untuk menambahkan file audio "Keajaiban Air Mata Wanita" (bagian reff), silakan ikuti langkah-langkah berikut:

1. Dapatkan file MP3 dari lagu "Keajaiban Air Mata Wanita" (bagian reff saja)
2. Rename file tersebut menjadi `keajaiban-air-mata-wanita.mp3`
3. Letakkan file tersebut di folder `public/`
4. File placeholder yang ada saat ini (`keajaiban-air-mata-wanita.mp3`) harus diganti dengan file MP3 yang sebenarnya

## Catatan Penting

- Pastikan Anda memiliki hak untuk menggunakan lagu tersebut di website Anda
- Jika ingin menggunakan lagu lain, Anda dapat mengganti file dan mengubah path di komponen AudioPlayer di `src/components/VSCodeLayout.tsx`
- Anda dapat mengatur volume default dengan mengubah prop `initialVolume` pada komponen AudioPlayer (nilai antara 0-1)
- Preferensi volume dan status mute akan disimpan di localStorage browser pengguna