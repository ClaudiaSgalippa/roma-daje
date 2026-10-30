# Roma, daje. 🍅

Un piccolo progetto e-commerce ispirato a Roma, alla sua ironia e a quelle piccole cose che la rendono inconfondibile.

**Roma, daje.** è un progetto realizzato con React, nato per sperimentare la creazione di una pagina prodotto con un'identità visiva riconoscibile e un'esperienza di navigazione semplice e intuitiva.

## 🏛️ Il progetto

Il protagonista è **Er Sampietrino**, un prodotto immaginario che celebra uno dei simboli più caratteristici delle strade romane. È disponibile in quattro versioni, ispirate ad altrettante zone della città: **Er Classico**, **Er Magna** (Trastevere), **Er Verde** (Garbatella) ed **Er Vissuto** (Centro).

L'obiettivo è unire un concept ironico a un'interfaccia moderna, curando la presentazione del prodotto, la navigazione e l'esperienza utente su desktop e dispositivi mobili. Anche i testi fanno parte del progetto: sono scritti in romanesco, per dare al brand una voce riconoscibile.

## ✨ Funzionalità

**Homepage**
- Hero section con il claim del brand
- Vetrina prodotto con scelta tra le quattro versioni
- Sezione dedicata alla borraccia-nasone in omaggio
- Recensioni dei clienti

**Pagina prodotto**
- Scelta della versione e della quantità (massimo 99 pezzi)
- Zoom sull'immagine al passaggio del mouse
- Informazioni su spedizione, resi e garanzia
- Scheda tecnica, sezione "Tre motivi per scegliere Er Sampietrino" e FAQ a fisarmonica

**Carrello**
- Aggiunta, rimozione e modifica delle quantità
- Subtotale, costo di spedizione e totale
- Spedizione gratuita e borraccia-nasone in omaggio per ordini da 99 €
- Contatore degli articoli nella navbar
- Carrello salvato nel browser (`localStorage`): non si perde ricaricando la pagina

**Er Bot de Roma**
- Chat con risposte automatiche su versioni, zone, prezzo, spedizione e regalo
- Domande suggerite e conversazione salvata nel browser
- Pulsanti per ridurre la chat e ricominciare da capo

**Altro**
- Layout responsive per smartphone, tablet e desktop
- Animazioni allo scroll, che rispettano la preferenza "riduci animazioni" del sistema
- Pagina 404
- Attributi ARIA su pulsanti, FAQ e chat per una migliore accessibilità

## 🧪 Cosa è dimostrativo

Il progetto è solo front-end: non c'è un server.

- Il **checkout** non è attivo (il pulsante riporta "prossimamente").
- La **newsletter** mostra solo la conferma di iscrizione, senza salvare l'email.
- **Er Bot de Roma** risponde cercando parole chiave nel messaggio: non usa intelligenza artificiale.
- I link ai social portano alle home di Instagram, TikTok e Facebook, perché il brand è inventato.
- Alcuni link del footer (Contattaci, Privacy policy, ecc.) sono segnaposto.

## 🛠️ Tecnologie

- React 19 e JavaScript
- Vite
- React Router
- CSS, senza framework
- Lucide React per le icone
- Font DM Sans e Montserrat (Google Fonts)

## 🧠 Scelte tecniche

- **Context API** per gestire il carrello in tutta l'app, senza passare props tra i componenti.
- **`localStorage`** per salvare carrello e chat; i dati letti dal browser vengono controllati prima di essere usati.
- **IntersectionObserver** per le animazioni di comparsa allo scroll.
- **React Router** per le pagine, con un layout condiviso (navbar, footer e chat).

## 📁 Struttura

```text
src/
├── components/   # navbar, footer, chat, vetrina prodotto, recensioni, icone social
├── context/      # CartContext: stato del carrello
├── data/         # dati delle versioni del prodotto
├── layout/       # DefaultLayout: struttura comune alle pagine
└── pages/        # Homepage, ProductPage, CartPage, NotFound
```

## 🚀 Avvio in locale

Prerequisiti: Node.js e npm.

```bash
npm install
npm run dev
```

Apri nel browser l'indirizzo locale indicato da Vite.

Altri comandi:

```bash
npm run build     # crea la versione di produzione
npm run preview   # mostra in locale la versione di produzione
```

## 🔭 Prossimi passi

- Checkout e pagamento
- Salvataggio reale delle iscrizioni alla newsletter
- Più prodotti e una pagina catalogo
- Test automatici

## 🌐 Demo: https://roma-daje.vercel.app

## 👩‍💻 Autrice

**Claudia Sgalippa** — Junior Web Developer

Progetto realizzato per mettere in pratica le competenze di sviluppo web e sperimentare soluzioni per un'interfaccia responsive, curando sia l'aspetto visivo sia le funzionalità.