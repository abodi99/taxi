# Google Ads – samtalsmål (manuellt om behövs)

## Nuläge (API)

| Konvertering | Önskat | Status |
|---|---|---|
| Ringklick - 042-200 777 | Primär | Primär |
| Direktsamtal från Annons | Primär | Primär |
| Calls from ads | Sekundär | Sekundär |
| Bokningsformulär skickat | Sekundär | **Kan fortfarande vara Primär** (API immutable) |

## Om bokningsformulär fortfarande är Primär

Gör i Ads-UI:
1. **Mål → Konverteringar**
2. Öppna **Bokningsformulär skickat**
3. Sätt till **Sekundär** / ta bort från “Inkludera i Konverteringar”

Då styr **Maximera konverteringar** på samtal, inte formulär.

## Call-only vs nu

Gamla call-only-annonser kan inte skapas (Google avvecklar).  
Vi kör **RSA + call asset** + pausade webb-sitelinks = samtalstung setup.
