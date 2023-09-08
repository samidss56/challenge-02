const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

function getInfoPenjualan(dataPenjualan) {
  if (!Array.isArray(dataPenjualan)) {
    throw new Error("Parameter harus berupa array");
  }

  let totalKeuntungan = 0;
  let totalModal = 0;

  const penulisSales = {};

  const produkSales = {};

  dataPenjualan.forEach((product) => {
    if (
      typeof product.totalTerjual !== "number" ||
      typeof product.hargaBeli !== "number" ||
      typeof product.hargaJual !== "number" ||
      typeof product.sisaStok !== "number"
    ) {
      throw new Error(
        "Properti totalTerjual, hargaBeli, dan hargaJual harus berupa angka"
      );
    }

    totalKeuntungan +=
      product.totalTerjual * (product.hargaJual - product.hargaBeli);
    totalModal += (product.totalTerjual + product.sisaStok) * product.hargaBeli;

    if (!penulisSales[product.penulis]) {
      penulisSales[product.penulis] = product.totalTerjual;
    } else {
      penulisSales[product.penulis] += product.totalTerjual;
    }

    if (!produkSales[product.namaProduk]) {
      produkSales[product.namaProduk] = product.totalTerjual;
    } else {
      produkSales[product.namaProduk] += product.totalTerjual;
    }
  });

  let penulisTerlaris = "";
  let penjualanTerlaris = 0;
  for (const penulis in penulisSales) {
    if (penulisSales[penulis] > penjualanTerlaris) {
      penulisTerlaris = penulis;
      penjualanTerlaris = penulisSales[penulis];
    }
  }

  let produkBukuTerlaris = "";
  let penjualanProdukTerlaris = 0;
  for (const produk in produkSales) {
    if (produkSales[produk] > penjualanProdukTerlaris) {
      produkBukuTerlaris = produk;
      penjualanProdukTerlaris = produkSales[produk];
    }
  }

  const persentaseKeuntungan = ((totalKeuntungan / totalModal) * 100).toFixed(
    2
  );

  const formatRupiah = (angka) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(angka);
  };

  const dataHasil = {
    totalKeuntungan: formatRupiah(totalKeuntungan),
    totalModal: formatRupiah(totalModal),
    persentaseKeuntungan: `${persentaseKeuntungan}%`,
    produkBukuTerlaris,
    penulisTerlaris,
  };

  return dataHasil;
}

const dataInfoPenjualan = getInfoPenjualan(dataPenjualanNovel);
console.log(dataInfoPenjualan);
