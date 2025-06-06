# ✅ Qsol App – Roadmap Fonctionnelle & Architecture UI/UX

## 📦 Fichiers de données (réactivité en live)

- [ ] `mainwallet.json` – stocke le wallet principal (live update)
- [ ] `generatedwallet.json` – stocke jusqu’à 500 wallets générés (live update)
- [ ] Sauvegarde en temps réel via WebSocket Helius

---

## 🧠 Architecture Générale

- [~] `layout.tsx` – structure de page globale sans header
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