const apiUrl = 'http://localhost:3000/api/v1';

export const fetchPopularProducts = async () => {
    try {
        const response = await fetch(`${apiUrl}/products/get/featured/5`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching popular products:', error);
        throw error;
    }
};

export const fetchNewArrivals = async () => {
    try {
        const response = await fetch(`${apiUrl}/products/get/featured/5`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching new arrivals:', error);
        throw error;
    }
};
