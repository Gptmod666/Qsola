src/
├── app/                                     # Composants de pages (UI principale de l'application)
│   ├── delete-popup.tsx                     # Popup de confirmation de suppression d'un wallet
│   ├── distributor.tsx                      # Interface de distribution de SOL ou tokens
│   ├── generator.tsx                        # Interface de génération automatique de wallets
│   ├── layout.tsx                           # Layout général (header inclus)
│   ├── mainwallet.tsx                       # Gestion du wallet principal (import/export/solde)
│   ├── page.tsx                             # Entrée principale de l'app (dashboard + tabs)
│   ├── pump.tsx                             # Interface liée à PumpFun (exploration tokens)
│   └── send-popup.tsx                       # Popup pour envoyer des fonds (SOL ou token)

├── components/
│   └── header.tsx                           # Composant Header réutilisable (titre, navigation éventuelle)

├── services/                                # Logique métier et interactions blockchain/API
│   ├── pumpfun/                             # Services spécifiques à Pump.fun
│   │   ├── clients/                         # Clients pour APIs externes
│   │   │   ├── config.ts                    # Paramètres/config communs à PumpFun
│   │   │   ├── jito.ts                      # Client Jito (MEV, relayer)
│   │   │   ├── LookupTableProvider.ts       # Gestion des Lookup Tables pour les transactions
│   │   │   └── poolKeysReassigned.ts        # Gestion des clés de pools modifiées

│   │   ├── keypairs/                        # Données de wallets utilisées pour les tests ou sessions
│   │   │   └── keypair1.json                # Exemple de keypair JSON (clé publique/privée)

│   │   ├── createKeys.ts                    # Génération de keypairs
│   │   ├── createLUT.ts                     # Création de Lookup Tables pour l’optimisation des txs
│   │   ├── jitoPool.ts                      # Interaction avec les pools Jito
│   │   ├── keyinfo.json                     # Métadonnées ou mapping des keypairs
│   │   ├── sellFunc.ts                      # Fonction de vente sur PumpFun
│   │   ├── sellRay.ts                       # Vente via Raydium (ou intégré à PumpFun)
│   │   ├── senderLut.ts                     # Envoi de transactions en utilisant LUT
│   │   └── trending.service.ts              # Récupération des tokens en tendance (PumpFun, etc.)

│   ├── solana/                              # Intégration directe avec Solana (RPC, WSS, etc.)
│   ├── utils/                               # Fonctions utilitaires globales
│   ├── wallet/                              # Gestion des wallets (génération, stockage, sélection)
│   └── api.json                             # Config des endpoints API (Helius, Jito, autres)

├── styles/
│   ├── fonts.ts                             # Déclaration et chargement des polices
│   └── globals.css                          # Feuille de style globale (tailwind ou CSS perso)

Architecture.hs                               # Fichier Haskell (peut-être une spec ou outil de dev)
RoadMap.md                                    # Planification des fonctionnalités et priorités (README projet)
generatedwallet.json                          # Stockage de la clee Main Wallet
mainwallet.json                               # Stockage des clees generated
