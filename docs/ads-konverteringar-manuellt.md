# Google Ads-konverteringar – status

**Status (verifierat):** målen är redan rätt i Ads. Gör **inte** om stegen nedan om inget har ändrats i kontot.

## Gällande mål

| Konvertering | Typ | Status |
|---|---|---|
| Ringklick - 042-200 777 | Webb | **Primär** |
| Bokningsformulär skickat | Webb | **Primär** |
| Calls from ads | Samtal från annons | **Sekundär** |
| Direktsamtal från Annons | Samtal från annons | **Sekundär** |

Konto: **Stad Taxi** (`756-696-6300`).

Budgivningen styrs på de två primära webbmålen (ringklick + bokning). AD_CALL-åtgärderna är sekundära så de inte dubbelräknas i “Maximera konverteringar”.

## Valfritt (mindre brus)

Om **Calls from ads** och **Direktsamtal från Annons** mäter samma sak: pausa eller arkivera en av dem i Ads så rapporterna blir enklare.

## Om någon återställer till primär (nödläge)

Google Ads API kan inte sätta `primary_for_goal` på AD_CALL – det måste göras i UI:

1. **Mål** → **Konverteringar**
2. Öppna respektive AD_CALL-åtgärd → sätt till **Sekundär**
3. Kontrollera att Ringklick + Bokningsformulär fortfarande är **Primär**
