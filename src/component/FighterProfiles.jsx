// FighterProfiles.jsx - Full interface with modal, matching logic, and integration-ready

import { useState } from "react";

const mockFighters = [
  {
    name: "Sonny Maddox",
    weightClass: "Featherweight",
    record: "29-5-2",
    style: "Pressure Fighter",
    licenseStatus: "Expired",
    activityStatus: "Inactive",
    amateurLevel: "Unknown",
    countryAffiliation: "British",
    estimatedPurse: [6970, 19355],
    highlightLinks: [
      "https://www.youtube.com/watch?v=Aj88up90",
      "https://www.youtube.com/watch?v=CA43RS81"
    ],
    sparringPartners: ["Kurt Taylor", "Leo Sparks"]
  },
  {
    name: "Ray McQueen",
    weightClass: "Lightweight",
    record: "35-3-1",
    style: "Aggressive",
    licenseStatus: "Valid",
    activityStatus: "Injured",
    amateurLevel: "Elite",
    countryAffiliation: "British",
    estimatedPurse: [4237, 12582],
    highlightLinks: [
      "https://www.youtube.com/watch?v=XT52VL46",
      "https://www.youtube.com/watch?v=JD53nw78"
    ],
    sparringPartners: ["Manny Dawes", "Leo Sparks"]
  },
  // Add more fighters here...
];

const FighterProfiles = () => {
  const [filterWeight, setFilterWeight] = useState("");
  const [selectedFighter, setSelectedFighter] = useState(null);

  const filtered = mockFighters.filter(f =>
    filterWeight ? f.weightClass === filterWeight : true
  );

  const matchSuggestions = (fighter) => {
    return mockFighters.filter(
      f => f.weightClass === fighter.weightClass && f.name !== fighter.name
    );
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold text-blue-800">Fighter Profiles</h1>

      <div className="mb-4">
        <label className="font-semibold mr-2">Filter by Weight:</label>
        <select
          value={filterWeight}
          onChange={(e) => setFilterWeight(e.target.value)}
          className="border px-2 py-1 rounded"
        >
          <option value="">All</option>
          <option value="Flyweight">Flyweight</option>
          <option value="Featherweight">Featherweight</option>
          <option value="Lightweight">Lightweight</option>
          <option value="Welterweight">Welterweight</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((f, idx) => (
          <div
            key={idx}
            className="border rounded shadow p-4 bg-white cursor-pointer hover:shadow-lg"
            onClick={() => setSelectedFighter(f)}
          >
            <h2 className="text-lg font-bold text-blue-700">{f.name}</h2>
            <p><strong>Weight:</strong> {f.weightClass}</p>
            <p><strong>Record:</strong> {f.record}</p>
            <p><strong>Style:</strong> {f.style}</p>
            <p><strong>License:</strong> {f.licenseStatus}</p>
            <p><strong>Status:</strong> {f.activityStatus}</p>
          </div>
        ))}
      </div>

      {selectedFighter && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
            <button
              className="absolute top-2 right-3 text-lg font-bold"
              onClick={() => setSelectedFighter(null)}
            >
              ×
            </button>
            <h2 className="text-xl font-bold text-blue-700 mb-2">{selectedFighter.name}</h2>
            <p><strong>Weight:</strong> {selectedFighter.weightClass}</p>
            <p><strong>Record:</strong> {selectedFighter.record}</p>
            <p><strong>Style:</strong> {selectedFighter.style}</p>
            <p><strong>Country:</strong> {selectedFighter.countryAffiliation}</p>
            <p><strong>Amateur Level:</strong> {selectedFighter.amateurLevel}</p>
            <p><strong>Sparring:</strong> {selectedFighter.sparringPartners.join(', ')}</p>
            <p><strong>Purse:</strong> £{selectedFighter.estimatedPurse[0]} - £{selectedFighter.estimatedPurse[1]}</p>
            <a
              href={selectedFighter.highlightLinks[0]}
              className="text-blue-500 underline text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Highlight Video
            </a>
            <div className="mt-4">
              <h3 className="font-semibold mb-1">Suggested Opponents:</h3>
              <ul className="list-disc list-inside text-sm">
                {matchSuggestions(selectedFighter).map((opp, i) => (
                  <li key={i}>{opp.name} ({opp.record}) - {opp.style}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FighterProfiles;
