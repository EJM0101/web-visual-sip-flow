import { useState } from 'react';

export default function ScenarioForm() {
  const [scenario, setScenario] = useState("INVITE\n180 RINGING\n200 OK\nACK");

  return (
    <div className="bg-white p-4 rounded shadow mb-6 max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold mb-2 text-blue-700">Saisir un scénario SIP</h2>
      <textarea
        value={scenario}
        onChange={(e) => setScenario(e.target.value)}
        className="w-full h-32 p-2 border rounded resize-none"
      />
    </div>
  );
}