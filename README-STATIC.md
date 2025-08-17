# 🏥 Studio Dentistico - Versione Statica per GitHub Pages

## 🚀 **HOSTING GRATUITO SU GITHUB PAGES**

Questa è la **versione completamente statica** del sito del tuo studio dentistico, ottimizzata per GitHub Pages e hosting gratuiti.

### ✅ **File Inclusi:**
- `index.html` - Sito completo in un singolo file
- `style.css` - Stili CSS personalizzati
- `script.js` - JavaScript per interattività
- `README-STATIC.md` - Questa guida

## 🔧 **Come Pubblicare su GitHub Pages**

### **Metodo 1: Direttamente su GitHub (più semplice)**

1. **Crea un nuovo repository** su GitHub
   - Vai su [github.com](https://github.com) e fai login
   - Click su "New repository"
   - Nome: `studio-dentistico-sito` (o quello che preferisci)
   - Spunta "Add a README file"
   - Scegli "Public" per GitHub Pages gratuito

2. **Carica i file**
   - Click su "uploading an existing file"
   - Trascina tutti i file della cartella `static-version`
   - Scrivi commit message: "Sito studio dentistico"
   - Click "Commit new files"

3. **Attiva GitHub Pages**
   - Vai su Settings del repository
   - Scorri fino a "Pages"
   - Source: "Deploy from a branch"
   - Branch: "main" / Folder: "/ (root)"
   - Click "Save"

4. **Il tuo sito sarà disponibile a:**
   `https://[tuo-username].github.io/[nome-repository]/`

### **Metodo 2: Via Git (per esperti)**

```bash
# 1. Clona o crea il repository
git clone https://github.com/[tuo-username]/[nome-repository].git
cd [nome-repository]

# 2. Copia i file della versione statica
cp /percorso/static-version/* .

# 3. Commit e push
git add .
git commit -m "Sito studio dentistico statico"
git push origin main

# 4. Attiva GitHub Pages dalle impostazioni del repository
```

## 🌐 **Altre Opzioni di Hosting Gratuito**

### **Netlify (Raccomandato):**
1. Registrati su [netlify.com](https://netlify.com)
2. Trascina la cartella `static-version` su Netlify
3. Il sito è online immediatamente!
4. Dominio gratis: `https://[nome-random].netlify.app`

### **Vercel:**
1. Registrati su [vercel.com](https://vercel.com)
2. Connetti il repository GitHub
3. Deploy automatico ad ogni modifica

### **GitHub Codespaces + Pages:**
1. Apri il repository in Codespaces
2. I file sono già pronti per GitHub Pages

## ⚙️ **Personalizzazioni Necessarie**

### **🚨 OBBLIGATORIO - Da Modificare Subito:**

**⚠️ NUMERO WHATSAPP (PRIORITÀ ASSOLUTA):**
- Apri: `script.js`
- Cerca: `const phoneNumber = '39XXXXXXXXXX';`  
- Sostituisci con: `const phoneNumber = '39[IL-TUO-NUMERO-WHATSAPP]';`
- Formato: `393881234567` (senza + e senza spazi)
- **SENZA QUESTO IL SITO NON FUNZIONA!**

### **🔴 IMPORTANTE - Da Modificare:**

1. **Numero di Telefono:**
   - Cerca: `+39 [Il tuo numero]`
   - Sostituisci con il tuo numero reale
   - Presenti in: `index.html` (multiple occorrenze)

2. **Email:**
   - Cerca: `info@studiodentisticocircello.it`
   - Sostituisci con la tua email reale
   - File: `index.html` e `script.js`

3. **Nome Studio:**
   - Personalizza "Studio Dentistico" se hai un nome specifico

4. **Dettagli Specifici:**
   - Modifica orari se diversi
   - Aggiungi foto del tuo studio
   - Personalizza i servizi offerti

## 📱 **Come Funziona il Sistema WhatsApp**

### **Versione Statica con WhatsApp:**
- **Click sui pulsanti verdi** → **Apre WhatsApp** con messaggio predefinito
- **Messaggi personalizzati** per ogni servizio (igiene, ortodonzia, urgenze, etc.)
- **Apertura diretta WhatsApp** su desktop o mobile
- **Nessun database necessario** - tutto gestito tramite WhatsApp

### **Pro e Contro:**
✅ **PRO:** Immediato, familiare ai pazienti, nessun server necessario, risposta in tempo reale
✅ **PRO:** Funziona su tutti i dispositivi, messaggi predefiniti professionali  
❌ **CONTRO:** Richiede che il paziente abbia WhatsApp installato (90%+ delle persone)

## 🔧 **Hosting sul Tuo Server**

Se hai un server web, copia semplicemente i file in:
```
/var/www/html/          (Apache)
/usr/share/nginx/html/  (Nginx)
```

### **Requisiti Server:**
- Nessuno! È HTML/CSS/JS puro
- Qualsiasi web server funziona
- Apache, Nginx, IIS, etc.

## 🎨 **Personalizzazioni Avanzate**

### **Cambiare Colori:**
Modifica in `style.css`:
```css
:root {
    --dental-blue: #tuocolore;    /* Colore principale */
    --dental-light: #tuocolore;   /* Colore sfondo */
}
```

### **Aggiungere Google Maps:**
```html
<div class="map-container">
    <iframe src="https://www.google.com/maps/embed?pb=..." 
            width="100%" height="300" frameborder="0"></iframe>
</div>
```

### **Aggiungere Google Analytics:**
```html
<!-- Prima del </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🆚 **Confronto Versioni**

| Feature | Versione Statica | Versione Dinamica (Hono) |
|---------|------------------|---------------------------|
| **Hosting** | GitHub Pages (Gratis) | Cloudflare Pages / Server |
| **Modulo Contatti** | Via Email Client | Database + API |
| **Velocità** | ⚡ Molto Veloce | ⚡ Veloce |
| **Manutenzione** | 🟢 Minima | 🟡 Moderata |
| **Costi** | 🆓 Gratuito | 🆓 Gratis (Cloudflare) |
| **Complessità** | 🟢 Semplice | 🟡 Media |

## 🔄 **Aggiornamenti Futuri**

Per aggiornare il sito:
1. Modifica i file localmente
2. Testa in locale aprendo `index.html` nel browser
3. Fai commit e push su GitHub
4. GitHub Pages si aggiorna automaticamente

## 📞 **Supporto**

Il sito è pronto all'uso! Se hai domande:
- Tutto il codice è commentato
- Files auto-contenuti e modificabili
- Design responsive già funzionante
- Ottimizzato per SEO

**Il tuo sito sarà online in meno di 5 minuti con GitHub Pages! 🚀**