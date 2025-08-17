# 🚨 **CONFIGURAZIONE WHATSAPP - OBBLIGATORIA**

## ⚠️ **ATTENZIONE: Il sito NON funziona senza questa configurazione!**

### **📱 STEP 1: Ottenere il Numero WhatsApp**
1. Apri WhatsApp Business (raccomandato) o WhatsApp normale
2. Vai su **Impostazioni → Account → Il mio numero**  
3. Annota il tuo numero nel formato: `+39 XXX XXXXXXX`

### **📝 STEP 2: Convertire il Numero nel Formato Corretto**
**Esempio:**
- Il tuo numero: `+39 388 1234567`
- Formato corretto: `393881234567` (rimuovi + e spazi)

### **⚙️ STEP 3: Configurare il Sito**

#### **Per la Versione Statica (GitHub Pages):**
1. Apri il file: `script.js`
2. Trova la riga: `const phoneNumber = '39XXXXXXXXXX';`
3. Sostituisci con: `const phoneNumber = '393881234567';` (il tuo numero)

#### **Per la Versione Dinamica (Hono):**
1. Apri il file: `public/static/app.js`
2. Trova la riga: `const phoneNumber = '39XXXXXXXXXX';`
3. Sostituisci con: `const phoneNumber = '393881234567';` (il tuo numero)

### **✅ STEP 4: Testare il Funzionamento**
1. Apri il sito nel browser
2. Clicca su un pulsante "Prenota su WhatsApp"
3. Dovrebbe aprirsi WhatsApp con un messaggio predefinito
4. Verifica che il numero di destinazione sia corretto

### **📋 STEP 5: Sostituire Altri Placeholder**
Nei file HTML cerca e sostituisci:
- `+39 [Il tuo numero]` → Il tuo numero completo
- `+39 [Il tuo numero WhatsApp]` → Il tuo numero completo
- `info@studiodentisticocircello.it` → La tua email

### **🔧 Esempio Completo di Configurazione:**

**Nel file JavaScript:**
```javascript
// PRIMA (non funziona)
const phoneNumber = '39XXXXXXXXXX';

// DOPO (funziona)
const phoneNumber = '393881234567';
```

**Nel file HTML:**
```html
<!-- PRIMA -->
<a href="tel:+39">+39 [Il tuo numero]</a>

<!-- DOPO -->  
<a href="tel:+393881234567">+39 388 1234567</a>
```

### **🚀 RISULTATO**
Dopo la configurazione:
- ✅ I pazienti cliccano sui pulsanti verdi
- ✅ Si apre WhatsApp con messaggio predefinito
- ✅ Il messaggio è indirizzato al TUO numero
- ✅ Tu ricevi le prenotazioni direttamente su WhatsApp

### **📞 Messaggi Predefiniti Inclusi:**
- **Igiene e Pulizia Dentale**
- **Ortodonzia (Apparecchi)** 
- **Estetica Dentale**
- **Implantologia**
- **Parodontologia**
- **Odontoiatria Pediatrica**
- **Urgenze Dentali** (con icona rossa)
- **Informazioni Generali**

**🎯 Il sistema è già pronto - serve solo il TUO numero WhatsApp!**