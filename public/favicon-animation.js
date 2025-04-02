// Script untuk membuat animasi berputar pada favicon
document.addEventListener('DOMContentLoaded', function() {
  // Fungsi untuk memutar favicon
  function rotateFavicon() {
    // Membuat elemen canvas untuk memanipulasi gambar
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const favicon = new Image();
    favicon.src = '/react-logo.png';
    
    // Menunggu gambar dimuat
    favicon.onload = function() {
      // Mengatur ukuran canvas sesuai dengan gambar
      canvas.width = favicon.width;
      canvas.height = favicon.height;
      
      // Variabel untuk melacak rotasi
      let rotation = 0;
      
      // Fungsi untuk memperbarui favicon
      function updateFavicon() {
        // Menambah sudut rotasi
        rotation += 1;
        if (rotation >= 360) {
          rotation = 0;
        }
        
        // Menggambar gambar yang diputar
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate((rotation * Math.PI) / 180);
        ctx.drawImage(favicon, -favicon.width / 2, -favicon.height / 2);
        ctx.restore();
        
        // Memperbarui favicon dengan gambar yang diputar
        const link = document.querySelector("link[rel*='icon']");
        link.href = canvas.toDataURL('image/png');
        
        // Memanggil fungsi lagi pada frame berikutnya
        requestAnimationFrame(updateFavicon);
      }
      
      // Memulai animasi
      updateFavicon();
    };
  }
  
  // Memanggil fungsi untuk memutar favicon
  rotateFavicon();
});