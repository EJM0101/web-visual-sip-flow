# 📞 Web Visual SIP Flow – Visualisation interactive des protocoles VoIP (SIP, RTP, MGCP)

**Web Visual SIP Flow** est une application web pédagogique qui permet de visualiser dynamiquement le déroulement d’un scénario d’appel VoIP utilisant les protocoles **SIP**, **RTP** et **MGCP**. Cette interface est conçue pour aider les étudiants, ingénieurs réseau, enseignants et techniciens à comprendre et démontrer le fonctionnement des protocoles fondamentaux de la VoIP dans un cadre professionnel.

## 🎯 Objectifs pédagogiques

- Visualiser les échanges de messages SIP entre différentes entités (User Agent, Proxy, Gateway)
- Rejouer étape par étape le scénario d’un appel VoIP
- Apprendre la structure des dialogues SIP (INVITE, 180 RINGING, 200 OK, ACK…)
- Comprendre le rôle des flux **RTP** (audio/vidéo) et du protocole **MGCP** dans les passerelles

## 🧠 Concepts pédagogiques expliqués

| Protocole | Rôle pédagogique |
|----------|------------------|
| **SIP (Session Initiation Protocol)** | Établit, modifie et termine les sessions d’appel. Sert à l’**établissement de la signalisation** entre agents SIP. |
| **RTP (Real-Time Protocol)** | Utilisé pour le **transport des médias** (voix, vidéo). Commence après établissement du dialogue SIP. |
| **MGCP (Media Gateway Control Protocol)** | Permet à un Call Agent de **contrôler une Media Gateway**. Typiquement utilisé pour les appels entre PSTN et IP. |

## 🔍 Fonctionnalités principales

- ✍️ **Formulaire de saisie de scénario SIP** : INVITE, RINGING, 200 OK, etc.
- 📈 **Diagramme dynamique SIP/RTP/MGCP** avec flèches colorées (via D3.js)
- 📂 **Exemples pré-chargés** (appel simple, appel via proxy, appel échoué)
- ⏯️ **Mode Replay pas-à-pas** des messages SIP
- 📄 **Affichage pédagogique** : chaque étape est accompagnée d'une **explication claire du protocole**
- 🎓 **Interface internationale professionnelle**, idéale pour supports de cours

## 🛠️ Stack technique

- **Next.js** – Framework React moderne
- **TypeScript** – Typage robuste et professionnel
- **Tailwind CSS** – Interface responsive, propre et efficace
- **D3.js** – Visualisation dynamique du flux SIP

## ▶️ Utilisation locale

```bash
npm install
npm run dev
```

Puis ouvre `http://localhost:3000`

## 🚀 Déploiement

Le projet est prêt pour Vercel ou tout hébergement Next.js :

1. Pousse sur GitHub
2. Lien vers [https://vercel.com](https://vercel.com)
3. Déploiement auto en quelques clics

## 📂 Structure du projet

```
web-visual-sip-flow/
├── pages/
│   └── index.tsx                  # Interface principale
├── components/
│   ├── ScenarioForm.tsx           # Saisie des messages SIP
│   ├── SIPDiagram.tsx             # Affichage visuel dynamique
│   └── ConceptExplanation.tsx     # Affichage pédagogique
├── styles/
│   └── globals.css
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
├── tsconfig.json
├── package.json
└── README.md
```

## ⚖️ Licence

Projet éducatif open source, libre de reproduction et d’adaptation dans un cadre académique.