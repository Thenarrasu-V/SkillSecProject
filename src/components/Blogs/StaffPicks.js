import React from 'react';

const StaffPicks = () => {
  const picks = [
    { id: 1, title: "Institutions vs. Evolution", author: "Anna Mercury" },
    { id: 2, title: "Reflections on Palantir", author: "Nabeel Qureshi" },
    { id: 3, title: "Notes from a classroom", author: "Ian Williams" },
    // Add more picks data here...
  ];

  return (
    <div className="staff-picks">
      <h2>Staff Picks</h2>
      <ul>
        {picks.map((pick) => (
          <li key={pick.id}>
            <span>{pick.author}</span>
            <h4>{pick.title}</h4>
          </li>
        ))}
      </ul>
      <a href="#">See the full list</a>
    </div>
  );
};

export default StaffPicks;
