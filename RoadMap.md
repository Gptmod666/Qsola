# ✅ Qsol App – Roadmap Fonctionnelle & Architecture UI/UX

## 📦 Fichiers de données (réactivité en live)

- [ ] `mainwallet.json` – stocke le wallet principal (live update)
- [ ] `generatedwallet.json` – stocke jusqu’à 500 wallets générés (live update)
- [ ] Sauvegarde en temps réel via WebSocket Helius

---

## 🧠 Architecture Générale

- [~] `layout.tsx` – structure de page globale avec `<Header />`
- [~] `page.tsx` – SPA : routing des 4 tabs vers leurs composants
- [~] `header.tsx` – affiche le nombre total de wallets + soldes (SOL et USD)

---

## 🧰 Main Wallet (`mainwallet.tsx`)

- [ ] Import JSON → écrit dans `mainwallet.json`
- [ ] Export JSON
- [ ] Delete wallet principal
- [ ] Solde auto-mis à jour (via WebSocket Helius)
- [ ] Affichage SOL + conversion USD (`number-format.service.ts`)
- [ ] Pop Up de confiramation → `send-popup.tsx`

---

## 🧪 Wallet Generator (`generator.tsx`)

- [ ] Génération de X wallets (max 500)
- [ ] Import JSON multiple → `generatedwallet.json`
- [ ] Export JSON
- [ ] Delete tous ou un wallet ciblé
- [ ] Live update des soldes (WebSocket Helius)
- [ ] Génère keypairs dans `keypairs/`
- [ ] Pop Up de confiramation → `send-popup.tsx`

---

## 🔁 Distributor (`distributor.tsx`)

- [ ] Champ "Montant à distribuer"
- [ ] Distribution proportionnelle ou égale à tous les wallets générés
- [ ] Utilise `rpc.service.ts` + confirmation/feedback

---

## 🚀 PumpFun (`pump.tsx`)

- [ ] Scanner tokens → `trending.service.ts`
- [ ] Graphique TradingView du token sélectionné
- [ ] Bouton `Vendre` → déclenche `sellFunc.ts` ou `sellRay.ts`
- [ ] Intégration Lookup Table (LUT) → `senderLut.ts`, `createLUT.ts`
- [ ] Affichage portefeuille du bundle (multiple keypairs)
- [ ] Interface CLI-UI: simulateur de stratégie

---

## 📤 Send Popup (`send-popup.tsx`)

- [ ] Récapitulatif des infos avant envoi
- [ ] Confirmation manuelle
- [ ] Intègre `senderLut.ts` pour LUTs

---

## 🗑 Delete Popup (`delete-popup.tsx`)

- [ ] Confirmation de suppression (main ou generated wallet)

---

## 🧠 Backend Services

- [ ] `rpc.service.ts` – lecture/écriture Solana (balances, transferts)
- [ ] `wss.service.ts` – WebSocket Helius (solde en direct)
- [ ] `helius-rest.service.ts` – fetch enrichi : noms tokens, logo, etc.
- [ ] `number-format.service.ts` – formatage SOL / USD

---

## 💡 Fonctionnalités Pump.Fun Bundler

- [ ] Génération profils crédibles (bios, PFP, historique tokens)
- [ ] Acheteurs multiples configurables (20 max)
- [ ] Lookup Table optimisé
- [ ] Gestion dynamique de supply
- [ ] Anti-sniper + Sniper Dump
- [ ] Selling stratégy modulable (temps, % etc.)
- [ ] UI CLI-friendly (feedback live)
- [ ] Intégration TradingView du token lancé

---

## 🧪 À tester ou affiner

- [ ] `Architecture.hs` → Définir si utile pour décrire la structure (ou à supprimer)
- [ ] `RoadMap.md` → Garder cette checklist à jour

---

## 🧩 Légende

- `[x]` Terminé  
- `[ ]` À faire  
- `[~]` Partiellement fait / en cours  
