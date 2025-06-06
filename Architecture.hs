src/
├── app/                                     # UI pages and popups
│   ├── delete-popup.tsx                     # Delete wallet confirmation
│   ├── distributor.tsx                      # Placeholder distributor page
│   ├── generator.tsx                        # Placeholder generator page
│   ├── layout.tsx                           # Global layout with header
│   ├── mainwallet.tsx                       # Placeholder main wallet page
│   ├── page.tsx                             # Home page
│   ├── pump.tsx                             # Placeholder pump page
│   └── send-popup.tsx                       # Send funds popup
│
├── components/
│   └── header.tsx                           # Simple header component
│
├── services/                                # Business logic and blockchain
│   ├── pumpfun/                             # Pump.fun related services
│   ├── solana/                              # Solana integration
│   ├── utils/                               # Utilities
│   ├── wallet/                              # Wallet management
│   └── api.json                             # API endpoints config
│
├── styles/
│   ├── fonts.ts                             # Google font definitions
│   └── globals.css                          # Tailwind base styles
│
Architecture.hs                               # Project structure overview
RoadMap.md                                    # Feature planning checklist
developer-notes.md                            # Internal setup notes
