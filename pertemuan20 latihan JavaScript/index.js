//variabel

// let & const
// let umur = 18;
// let nilai = 95.25;
// let sudahMenikah = false; //bolean
// let nama = "ete"; //string
// console.log(umur);
// console.log(nama);

// let alamat;
// console.log(alamat); //undefined

// const tahunLahir = 2001;
// console.log(tahunLahir);
      
// Operator

// Aritmatic Operator(+,-,*,:)
// let angka = 10;
// let angka2 = 20;
// console.log(angka1+angka2);

// let namaDepan = "Ester";
// let namaBelakang = "Ester";
// console.log("Nama Saya" + namaDepan + " "+ namaBelakang + ". Umur saya adalah" + umur + "Tahun"
// );

// Operator Perbandingan

// let angka1 = 10;
// let angka2 = "10";
// console.log(angka1 === angka2);

// Ternary Operator
// let angka = 5;
// let hasil = angka < 0 ? "Negatif" : "Positif";
// console.log(hasil);

// Operator logika
// let kondisi1 = false;
// let kondisi2 = true;
// console.log(kondisi1&&kondisi2);
// console.log(!kondisi1);




// Exercise #7
/*  buatlah program javascript untuk menghitung BMI (Body Mass Index)
  Rumus = berat (kg) / (tinggi * tinggi)
  gunakan prompt untuk meminta input dari user*/
  let tinggi;
  let berat;
  let BMI;
  berat = prompt ("Masukan berat : ");
  tinggi = prompt ("Masukan Tinggi : ");
  tinggi/=100;
  BMI = berat/(tinggi*tinggi);
  console.log ("BMI = " + BMI);