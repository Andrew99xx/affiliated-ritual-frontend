// Function to get current timestamp in dd-mm-yy hh:mm:ss format
export const getCurrentDate = () => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear().toString().slice(-2);
    return `${day}-${month}-${year}`;
};
