export default function ConceptExplanation() {
  return (
    <div className="bg-white p-4 rounded shadow mb-6 max-w-4xl mx-auto text-sm text-gray-700">
      <h2 className="text-lg font-semibold text-blue-700 mb-2">Concepts pédagogiques</h2>
      <p><strong>SIP</strong> : Protocole de signalisation utilisé pour établir, modifier et terminer une session VoIP.</p>
      <p><strong>RTP</strong> : Transporte les flux audio/vidéo après établissement de l’appel via SIP.</p>
      <p><strong>MGCP</strong> : Protocole permettant à un Call Agent de contrôler les Media Gateways, souvent utilisé dans les architectures hybrides IP-PSTN.</p>
    </div>
  );
}