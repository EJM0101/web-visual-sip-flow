type ScenarioFormProps = {
  onScenarioChange: (messages: string[]) => void;
};

const scenarios: { name: string; messages: string[] }[] = [
  {
    name: 'Appel Réussi',
    messages: ['INVITE', '180 RINGING', '200 OK', 'ACK']
  },
  {
    name: 'Appel Rejeté (Occupé)',
    messages: ['INVITE', '486 BUSY HERE']
  },
  {
    name: 'Redirection',
    messages: ['INVITE', '302 MOVED', 'INVITE', '200 OK', 'ACK']
  },
  {
    name: 'Appel Non Répondu',
    messages: ['INVITE', '408 REQUEST TIMEOUT']
  }
];

export default function ScenarioForm({ onScenarioChange }: ScenarioFormProps) {
  return (
    <div className="bg-white p-4 rounded shadow mb-6 max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold mb-2 text-blue-700">Choisir un scénario SIP</h2>
      <select
        onChange={(e) => {
          const selected = scenarios.find(s => s.name === e.target.value);
          if (selected) onScenarioChange(selected.messages);
        }}
        className="w-full p-2 border rounded"
      >
        {scenarios.map((s, i) => (
          <option key={i} value={s.name}>{s.name}</option>
        ))}
      </select>
    </div>
  );
}