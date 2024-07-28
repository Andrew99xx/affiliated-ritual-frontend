import React from 'react';
import './Leaderboard.css';

function Leaderboard() {
    const data = [
        { rank: 1, name: 'John Doe', earnings: '$5000' },
        { rank: 2, name: 'Jane Smith', earnings: '$4500' },
        { rank: 3, name: 'Sam Wilson', earnings: '$4000' },
    ];

    return (
        <div className="leaderboard-container">
            <p className='leaderboard-paragraph'>Affiliate Ritual is proud of al of them.  The real heroes are here! Do you want to be one of them? Then join Affiliate Ritual now! You can eat burger, pizza, chocolate whatever you have. No compare. We do not believe on gimmick! We talk about fact always!</p>
            <table className="leaderboard">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Earnings</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.rank}</td>
                            <td>{item.name}</td>
                            <td>{item.earnings}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Leaderboard;
