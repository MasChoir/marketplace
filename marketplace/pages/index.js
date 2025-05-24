import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <header className="bg-blue-700 text-white shadow p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">MyMarketplace</h1>
          <nav className="space-x-4">
            <Link href="/login" className="hover:underline">Login</Link>
            <Link href="/register" className="hover:underline">Register</Link>
          </nav>
        </div>
      </header>

      <section className="bg-gradient-to-r from-blue-500 to-blue-300 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Temukan Produk Terbaikmu</h2>
          <p className="mb-6">Marketplace khusus untuk produk eksklusif milik kamu sendiri</p>
          <Link href="/products" className="bg-white text-blue-700 font-semibold px-6 py-2 rounded-full hover:bg-gray-200">Lihat Produk</Link>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Kategori</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {['Fashion', 'Elektronik', 'Aksesoris', 'Kesehatan'].map((category) => (
              <div key={category} className="bg-white rounded-xl shadow p-4 text-center hover:shadow-lg transition">
                <div className="text-lg font-semibold mb-2">{category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Produk Unggulan</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((id) => (
              <div key={id} className="bg-white rounded-xl shadow p-4">
                <div className="h-40 bg-gray-200 mb-4"></div>
                <h4 className="font-semibold text-lg mb-2">Nama Produk {id}</h4>
                <p className="text-sm text-gray-600">Deskripsi singkat produk.</p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Lihat Detail</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-blue-700 text-white py-6 mt-12">
        <div className="container mx-auto text-center">
          &copy; {new Date().getFullYear()} MyMarketplace. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
