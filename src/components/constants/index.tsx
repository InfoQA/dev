const INFO_APP = {
  NAME: import.meta.env.VITE_APP_NAME,
  VERSION: import.meta.env.VITE_APP_VERSION,
  DESCRIPTION: `InfoQA adalah aplikasi web yang dibuat untuk membantu mahasiswa Universitas Kristen Maranatha, khususnya Teknik Informatika, mendapatkan informasi kampus dengan cepat. Banyak mahasiswa malas membaca panduan resmi dan lebih memilih bertanya ke teman atau kakak tingkat, sehingga InfoQA hadir sebagai pusat informasi yang ringkas dan mudah diakses.
Versi 1 masih dalam tahap pengembangan, jadi beberapa fitur mungkin belum sempurna, namun tim InfoQA terus berupaya menyempurnakannya.`,
};

const API_URL = import.meta.env.VITE_API_BASE_URL;

export { API_URL };

export default INFO_APP;
