# Návod na použitie aplikácie MTG Kolekcia

## 1. Ako nahrať svoje karty
Táto aplikácia je navrhnutá tak, aby bola **absolútne presná** a rešpektovala vašu konkrétnu verziu karty.

1.  Exportujte svoju kolekciu (napr. z ManaBox, Archidekt, Moxfield) do formátu **CSV**.
2.  Uistite sa, že CSV obsahuje aspoň jeden z týchto stĺpcov pre 100% presnosť:
    *   `Scryfall ID` (najlepšie)
    *   `Set Code` + `Collector Number`
    *   Ak tieto chýbajú, aplikácia použije `Name` (menej presné).
3.  Vložte tieto `.csv` súbory do priečinka:
    *   `D:\MTG\Kolekcia\MTG - Kolekcia App\karty`
4.  Spustite súbor **`AKTUALIZOVAT.bat`**.
5.  Obnovte webovú stránku (F5).

## 2. Filtrovanie
*   **Farby:** Klikaním na symboly many filtrujete podľa farby.
*   **Typy (Multi-select):**
    *   Kliknutie: Vyberie jeden typ (napr. Creature).
    *   **SHIFT + Kliknutie:** Umožňuje vybrať viac typov naraz (napr. Creature + Artifact).

## 3. Deck Builder (Stavba balíka)
Vpravo nájdete tlačidlo **"Deck Builder"**.
*   **Pridanie karty:** Kliknite na kartu v galérii a potiahnite ju myšou do panelu Deck Builder (Drag & Drop), alebo použite tlačidlo `+` v detaile karty.
*   **Štatistiky:** Panel automaticky ráta:
    *   Počet kariet.
    *   Mana Curve (graf rozloženia ceny kariet).
    *   Rozloženie farieb.
*   **Export:** Zoznam kariet si môžete skopírovať do schránky.

## Riešenie problémov
Ak vidíte nesprávnu kartu:
1.  Kliknite na **"🔍 Skontrolovať zdroj"** (dole v pätičke).
2.  Nájdite riadok s chybnou kartou.
3.  Skontrolujte vaše CSV, či obsahuje správne `Scryfall ID` pre danú verziu karty.
