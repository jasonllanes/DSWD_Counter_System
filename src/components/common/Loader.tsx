import React from 'react';

const Loader = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
                <p className="mt-3 text-gray-600">Loading...</p>
            </div>
        </div>
    );
};

export default Loader;