// Find all-time earnings for a given user ID
const findAllTimeEarningsForUser = async (userId) => {
    try {
        const earningsRef = collection(db, "users", userId, "earnings");
        const querySnapshot = await getDocs(earningsRef);

        const monthlyEarnings = {};
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const month = moment(data.createdAt, "DD-MM-YY HH:mm:ss").format("MMMM YYYY");
            if (!monthlyEarnings[month]) {
                monthlyEarnings[month] = 0;
            }
            monthlyEarnings[month] += data.yourAmount;
        });

        return monthlyEarnings;
    } catch (error) {
        console.error("Error fetching earnings data:", error);
        return {};
    }
};