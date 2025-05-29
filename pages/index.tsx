import ScenarioForm from '../components/ScenarioForm';
import SIPDiagram from '../components/SIPDiagram';
import ConceptExplanation from '../components/ConceptExplanation';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-10">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-4">Web Visual SIP Flow</h1>
      <p className="text-center text-gray-700 mb-6">Visualisez les protocoles VoIP : SIP, RTP, MGCP</p>
      <ConceptExplanation />
      <ScenarioForm />
      <SIPDiagram />
    </div>
  );
}