import '../App.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import Product from '../components/Product';
import blogIcon from '../img/Meubel House_Logos-05.png';
import Features from '../components/Features';
import headerImage from '../img/HeaderShop.png';
import { useState } from 'react';

function Shop() {
    const [filter, setFilter] = useState('');
    const [sort, setSort] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const handleSortChange = (e) => {
        setSort(e.target.value);
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    return (
        <>
            <Navbar />
            <header className="relative bg-cover bg-center h-64 flex items-center justify-center" style={{ backgroundImage: `url(${headerImage})` }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 text-center text-white">
                    <img src={blogIcon} alt="Blog Icon" className="h-auto w-auto mb-1 mx-auto" /> 
                    <h1 className="text-4xl font-bold">Shop</h1>
                    <p className="mt-2">Home &gt; Shop</p>
                </div>
            </header>
            <main className="mx-auto">
                <div className="flex justify-between items-center mb-8 p-4" style={{ backgroundColor: '#F9F1E7' }}>
                    <div>
                        <label htmlFor="filter" className="mr-2">Filter:</label>
                        <select id="filter" value={filter} onChange={handleFilterChange} className="border-b-2 border-gray-300 focus:outline-none px-2 py-1">
                            <option value="">All Products</option>
                            <option value="new">New Arrivals</option>
                            <option value="discount">Discounts</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="sort" className="mr-2">Sort by:</label>
                        <select id="sort" value={sort} onChange={handleSortChange} className="border-b-2 border-gray-300 focus:outline-none px-2 py-1">
                            <option value="">Default</option>
                            <option value="price-asc">Price: Low to High</option>
                            <option value="price-desc">Price: High to Low</option>
                            <option value="name-asc">Name: A to Z</option>
                            <option value="name-desc">Name: Z to A</option>
                        </select>
                    </div>
                </div>
                <Product filter={filter} sort={sort} showTitle={false} page={currentPage} />
                <div className="flex justify-center items-center mt-8 p-4 space-x-4">
                    <button
                        onClick={handlePreviousPage}
                        className="px-4 py-2"
                        style={{ backgroundColor: '#F9F1E7' }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#B88E2F'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#F9F1E7'}
                        disabled={currentPage === 1}
                    >
                        Back
                    </button>
                    <span className="text-lg">{currentPage}</span>
                    <button
                        onClick={handleNextPage}
                        className="px-4 py-2"
                        style={{ backgroundColor: '#F9F1E7' }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#B88E2F'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#F9F1E7'}
                    >
                        Next
                    </button>
                </div>
                <Features />
            </main>
            <Footer />
        </>
    );
}

export default Shop;
