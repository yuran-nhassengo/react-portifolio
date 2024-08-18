import React from 'react';

export const SearchComponent = ({ searchTerm, onSearchChange }) => {
    return (
        <div >
            <form onSubmit={(e) => e.preventDefault()} className="relative flex-1">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={onSearchChange}
                    placeholder="Pesquisar..."
                    className="w-full pl-10 pr-12 py-2 border-2 border-blue-300 bg-white rounded-md shadow-sm  focus:bg-slate-100 focus:outline-sky-500"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <i className="bx bx-search w-5 h-5 text-gray" aria-hidden="true"></i>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <i className="bx bx-microphone w-5 h-5 text-gray" aria-hidden="true"></i>
                </div>
            </form>
        </div>
    );
};


