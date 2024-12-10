import React, { useEffect, useState } from 'react';
import './Leaderboard.css';
import { getAllTimeTopEarnerInLeader } from '../../../service/getAllTimeTopEarner/getAllTimeTopEarnerInLeader';

function Leaderboard() {
    const [leaderboardData, setLeaderboardData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch leaderboard data when the component mounts
        const fetchLeaderboardData = async () => {
            try {
                const data = await getAllTimeTopEarnerInLeader();

                // Sort the data in descending order based on totalEarnings
                const sortedData = data.sort((a, b) => b.totalEarnings - a.totalEarnings);

                setLeaderboardData(sortedData);
            } catch (err) {
                setError('Failed to load leaderboard data');
            } finally {
                setLoading(false);
            }
        };

        fetchLeaderboardData();
    }, []); // Empty dependency array ensures this runs only once

    if (loading) {
        return (
            <div className="leaderboard-loading">
                <div className="spinner"></div>
                <p>Loading leaderboard data...</p>
            </div>
        );
    }

    if (error) {
        return <div className="leaderboard-error">{error}</div>;
    }

    return (
        <div className="leaderboard-container">
            <p className='leaderboard-paragraph'>
                Affiliate Ritual is proud of all of them. The real heroes are here!
                Do you want to be one of them? Then join Affiliate Ritual now!
                You can eat burger, pizza, chocolate, whatever you have. No comparison.
                We do not believe in gimmicks! We always talk about facts!
            </p>
            <table className="leaderboard">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Earnings</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboardData.length > 0 ? (
                        leaderboardData.slice(0, 7).map((item, index) => (
                            <tr key={index} className={`leaderboard-row rank-${index + 1}`}>
                                <td>{index + 1}</td>
                                <td>{item.firstName}</td>
                                <td>₹{item.totalEarnings}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Leaderboard;
