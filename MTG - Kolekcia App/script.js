// DOM Elements
const gallery = document.getElementById('gallery');
const loader = document.getElementById('loader');
const statusText = document.getElementById('status-text');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const captionText = document.getElementById('caption');
const closeBtn = document.getElementsByClassName('close')[0];
const cardCountEl = document.getElementById('card-count');

// State
let appMode = 'collection'; // 'collection' or 'sealed'
let allCards = [];
let sealedPool = [];
let sealedDeck = [];
let collectionDeck = []; // The original deck

// Filters & Sorting
let currentColorFilters = new Set(['all']);
let currentTypeFilters = new Set(['all']);
let sortType = 'rarity'; // 'cmc' or 'rarity'
let sortDirection = 'desc';
let filterDupes = false;

// Helper to update color filter counts
function updateColorCounts(cardsToCount) {
    const counts = { 'All': cardsToCount.length, 'W': 0, 'U': 0, 'B': 0, 'R': 0, 'G': 0, 'C': 0, 'M': 0 };

    cardsToCount.forEach(card => {
        let colors = card.colors || [];
        if (colors.length === 0) counts['C']++;
        else if (colors.length > 1) counts['M']++;
        else counts[colors[0]]++;
    });

    const updateBtn = (sel, val) => {
        const el = document.querySelector(`${sel} .count-badge`);
        if (el) el.textContent = `(${val})`;
    };

    updateBtn('[data-color="all"]', counts['All']);
    updateBtn('[data-color="W"]', counts['W']);
    updateBtn('[data-color="U"]', counts['U']);
    updateBtn('[data-color="B"]', counts['B']);
    updateBtn('[data-color="R"]', counts['R']);
    updateBtn('[data-color="G"]', counts['G']);
    updateBtn('[data-color="C"]', counts['C']);
    updateBtn('[data-color="M"]', counts['M']);
}

// Init
let isAppInitialized = false;
async function initApp() {
    if (isAppInitialized) return;
    isAppInitialized = true;

    console.log("Checking for card data...");
    if (typeof ALL_CARDS !== 'undefined') {
        if (ALL_CARDS.length > 0) {
            console.log("Data found. Length:", ALL_CARDS.length);
            statusText.textContent = "Spracovávam zoznam kariet...";

            parseCardList(ALL_CARDS);
        } else {
            console.error("ALL_CARDS is empty string.");
            statusText.innerHTML = `Dáta sú prázdne. Skontrolujte <b>db.js</b>.`;
        }
    } else {
        console.error("ALL_CARDS is undefined.");
        statusText.innerHTML = `Nenašli sa dáta (premenná nedefinovaná). Vložte <b>.csv</b> súbory a spustite <b>AKTUALIZOVAT.bat</b>.`;
    }
}

// App Start
document.addEventListener('DOMContentLoaded', () => {
    console.log("App starting...");
    initApp();
});

// Mode Switching
// Mode Switching Handled via HTML attributes

async function switchMode(mode, subMode) {
    appMode = mode;

    const collectionBtn = document.getElementById('mode-collection');
    const sealedSelect = document.getElementById('mode-sealed-select');

    if (mode === 'collection') {
        if (collectionBtn) collectionBtn.classList.add('active');
        if (sealedSelect) {
            sealedSelect.classList.remove('active');
            sealedSelect.value = "";
        }

        document.getElementById('deck-title').textContent = "Váš Balík (Kolekcia)";
        document.getElementById('deck-limits').innerHTML = "";
        document.getElementById('sealed-actions').style.display = 'none';

        renderCards(allCards);
        updateDeckUI();
    } else {
        // Sealed
        if (collectionBtn) collectionBtn.classList.remove('active');
        if (sealedSelect) sealedSelect.classList.add('active');

        document.getElementById('deck-title').textContent = "Sealed Deck (" + (subMode === 'monkey' ? 'Opička' : 'Normal') + ")";
        document.getElementById('deck-limits').innerHTML = `Non-Lands: <span id="limit-indicator">0/23</span>`;
        document.getElementById('sealed-actions').style.display = 'inline-block';

        document.getElementById('loader').style.display = 'block';
        setTimeout(() => {
            generateSealedPool(subMode);
            renderCards(sealedPool);
            updateDeckUI();
            document.getElementById('loader').style.display = 'none';
        }, 100);
    }
}

function generateSealedPool(subMode) {
    if (allCards.length < 90) {
        alert("Nedostatok kariet v kolekcii na Sealed (min 90).");
        return;
    }

    let source = allCards;
    // Monkey Mode
    if (subMode === 'monkey') {
        const keywords = ['flying', 'haste', 'trample', 'vigilance', 'reach', 'deathtouch', 'lifelink', 'menace', 'hexproof', 'indestructible', 'double strike', 'first strike'];
        source = allCards.filter(c => {
            const text = (c.oracle_text || "").toLowerCase();
            return keywords.some(k => text.includes(k));
        });
        if (source.length < 90) {
            alert('Nedostatok kariet pre Opička Friendly mód.');
            return;
        }
    }

    // Filter out Lands
    const validCandidates = source.filter(c => !(c.type_line || "").includes("Land"));

    if (validCandidates.length < 90) {
        alert("Nedostatok Non-Land kariet (min 90).");
        return;
    }

    // Shuffle
    const shuffled = [...validCandidates].sort(() => 0.5 - Math.random());
    sealedPool = shuffled.slice(0, 90).map(c => ({ ...c, quantity: 1, _uid: Math.random() }));
    sealedDeck = [];

    updateDeckUI();
    applyFilters();
}

function rerollSingleCard(card) {
    // Replace this card in sealedPool with another random one
    const validCandidates = allCards.filter(c => !(c.type_line || "").includes("Land"));

    // Filter out cards already in pool (by name/id) to avoid duplicates if desired
    const poolIds = new Set(sealedPool.map(c => c.id || c.name));
    const available = validCandidates.filter(c => !poolIds.has(c.id || c.name));

    if (available.length === 0) {
        alert("Žiadne ďalšie karty na výmenu.");
        return;
    }

    const randomNew = available[Math.floor(Math.random() * available.length)];
    const newWrapped = { ...randomNew, _uid: Math.random() };

    // Swap using Unique ID
    const idx = sealedPool.findIndex(c => c._uid === card._uid);
    if (idx !== -1) {
        sealedPool[idx] = newWrapped;

        // Remove from deck if present
        const deckIdx = sealedDeck.findIndex(c => c._uid === card._uid);
        if (deckIdx !== -1) sealedDeck.splice(deckIdx, 1);

        updateDeckUI();
        applyFilters();
    }
}

// Parsing
function parseCardList(text) {
    if (!text) return;
    const lines = text.trim().split('\n');
    const parsedEntries = [];

    // Reset Map
    let idxMap = { name: -1, set: -1, number: -1, scryfall_id: -1, quantity: -1 };
    let headerFound = false;

    lines.forEach((line) => {
        let cleanLine = line.trim();
        if (!cleanLine) return;
        if (cleanLine.startsWith('#') || cleanLine.startsWith('//') || cleanLine.startsWith('const ') || cleanLine.startsWith('`') || cleanLine.startsWith(';') || cleanLine.startsWith('=') || cleanLine === "`;") return;

        // Try to identify header row
        const lowerLine = cleanLine.toLowerCase();
        if (!headerFound) {
            // Check for known headers
            if (lowerLine.includes('name') && (lowerLine.includes('set') || lowerLine.includes('quantity') || lowerLine.includes('rarity'))) {
                // Clean up potential quotes just in case, split by comma
                const headers = cleanLine.split(',').map(h => h.trim().toLowerCase().replace(/^"|"$/g, ''));

                idxMap.name = headers.indexOf('name');
                idxMap.set = headers.findIndex(h => h === 'set code' || h === 'set');
                idxMap.number = headers.findIndex(h => h === 'collector number' || h === 'number');
                idxMap.scryfall_id = headers.findIndex(h => h === 'scryfall id');
                idxMap.quantity = headers.findIndex(h => h === 'quantity' || h === 'count');

                if (idxMap.name !== -1) {
                    headerFound = true;
                    return; // Skip header line
                }
            }
        }

        // Skip header processing if loop continues
        if (headerFound && lowerLine.startsWith('name,')) return;

        // Valid data line logic
        // Handle CSV split respecting quotes
        // Regex allows quoted strings OR non-comma sequences (including spaces)
        const matches = cleanLine.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g);
        let columns = [];

        if (matches) {
            columns = matches.map(m => m.trim());
        } else {
            // Fallback split if regex fails (simple csv)
            columns = cleanLine.split(',');
        }

        // If we found a header, use indices. If not, try legacy inference (not really needed for new db.js but safety)
        if (headerFound) {
            let name = idxMap.name !== -1 ? cleanQuotes(columns[idxMap.name]) : "";
            let setCode = idxMap.set !== -1 ? cleanQuotes(columns[idxMap.set]) : null;
            let collNum = idxMap.number !== -1 ? cleanQuotes(columns[idxMap.number]) : null;
            let scryfallId = idxMap.scryfall_id !== -1 ? cleanQuotes(columns[idxMap.scryfall_id]) : null;
            let qty = 1;

            if (idxMap.quantity !== -1 && columns[idxMap.quantity]) {
                const q = parseInt(cleanQuotes(columns[idxMap.quantity]));
                if (!isNaN(q)) qty = q;
            }

            if (name || scryfallId) {
                parsedEntries.push({ name, set: setCode, collector_number: collNum, scryfall_id: scryfallId, quantity: qty });
            }
        } else {
            // Fallback: Assume simple list "1 Quantity Name" or Just "Name" if headers never found
            // But db.js HAS headers. So this should ideally not be hit unless header detecion fails.
            // Let's rely on strict parsing for now.
        }
    });

    if (parsedEntries.length === 0) {
        // Fallback checks just in case the file content is weird
        if (lines.length > 5 && !headerFound) {
            statusText.innerHTML = "Chyba: Nepodarilo sa rozoznať formát CSV (chýba hlavička 'Name, Set Code...').";
            console.error("Parsing failed: Header not found in CSV data.");
        } else {
            statusText.innerHTML = "Zoznam kariet je prázdny.<br>Skontrolujte 'karty' a spustite AKTUALIZOVAT.bat.";
            console.warn("Parsing resulted in 0 entries. Check input data.");
        }
        return;
    }

    // Deduplicate parsedEntries (Fix for double data loading)
    const uniqueEntries = [];
    const _seen = new Set();
    parsedEntries.forEach(entry => {
        // Robust Key: Name (Lower, Trim) + Set (Lower, Trim) + Number (Trim)
        const namePart = (entry.name || "").toLowerCase().trim();
        const setPart = (entry.set || "").toLowerCase().trim();
        const numPart = (entry.collector_number || "").toString().trim();
        // If set/number are missing, just use name to be aggressive against duplication
        const k = `${namePart}|${setPart}|${numPart}`;

        if (!_seen.has(k)) {
            _seen.add(k);
            uniqueEntries.push(entry);
        }
    });

    if (parsedEntries.length > uniqueEntries.length) {
        console.warn(`Deduplicated ${parsedEntries.length - uniqueEntries.length} entries.`);
    }

    processCardsStrict(uniqueEntries);
}

function cleanQuotes(str) {
    if (!str) return "";
    str = str.trim();
    // Remove surrounding quotes
    if (str.startsWith('"') && str.endsWith('"')) {
        str = str.slice(1, -1);
    }
    // Unescape double quotes
    return str.replace(/""/g, '"');
}

async function processCardsStrict(entries) {
    statusText.textContent = `Pripravujem ${entries.length} záznamov...`;

    const identifiersToFetch = [];
    const entryMap = new Map();

    entries.forEach(entry => {
        let identifier = null;
        let key = null;

        if (entry.scryfall_id) {
            identifier = { id: entry.scryfall_id };
            key = entry.scryfall_id;
        } else if (entry.set && entry.collector_number) {
            identifier = { set: entry.set, collector_number: entry.collector_number };
            key = `${entry.set}:${entry.collector_number}`.toLowerCase();
        } else if (entry.name) {
            const lower = entry.name.toLowerCase();
            const blacklist = ['purchase price', 'total:', 'set name', 'set code', 'quantity', 'rarity', 'condition', 'language', 'foil'];
            if (blacklist.includes(lower)) return;
            identifier = { name: entry.name };
            key = entry.name.toLowerCase();
        }

        if (identifier) {
            identifiersToFetch.push(identifier);
            if (entryMap.has(key)) {
                entryMap.get(key).quantity += entry.quantity;
            } else {
                entryMap.set(key, { ...entry, identifierKey: key });
            }
        }
    });

    const uniqueItems = Array.from(entryMap.values());
    const batches = [];
    while (uniqueItems.length > 0) batches.push(uniqueItems.splice(0, 75));

    allCards = [];
    const fetchedDataMap = new Map();
    // const missingCards = [];

    let processedCount = 0;
    const totalCalc = entryMap.size;

    for (const batch of batches) {
        statusText.textContent = `Overujem dáta kariet... ${processedCount} / ${totalCalc}`;

        const identifiers = batch.map(item => {
            if (item.scryfall_id) return { id: item.scryfall_id };
            if (item.set && item.collector_number) return { set: item.set, collector_number: item.collector_number };
            return { name: item.name };
        });

        try {
            const response = await fetch('https://api.scryfall.com/cards/collection', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ identifiers })
            });

            if (response.ok) {
                const data = await response.json();

                data.data.forEach(card => {
                    if (entryMap.has(card.id)) fetchedDataMap.set(card.id, card);
                    const setNumKey = `${card.set}:${card.collector_number}`.toLowerCase();
                    if (entryMap.has(setNumKey)) fetchedDataMap.set(setNumKey, card);
                    const nameKey = card.name.toLowerCase();
                    if (entryMap.has(nameKey)) fetchedDataMap.set(nameKey, card);
                });

                // if (data.not_found && data.not_found.length > 0) {
                //     data.not_found.forEach(nf => missingCards.push(nf));
                // }
            } else {
                console.error("Batch failed");
            }
        } catch (e) { console.error(e); }

        processedCount += batch.length;
        await new Promise(r => setTimeout(r, 50));
    }

    statusText.textContent = "Generujem galériu...";

    entryMap.forEach((entry, key) => {
        const myCardData = fetchedDataMap.get(key);

        if (myCardData) {
            allCards.push({
                ...myCardData,
                quantity: entry.quantity
            });
        } else {
            allCards.push({
                name: entry.name || "Unknown Card",
                quantity: entry.quantity,
                set: entry.set,
                collector_number: entry.collector_number,
                isPlaceholder: true,
                image_uris: null,
                colors: []
            });
        }
    });

    updateColorCounts(allCards);
    renderCards(allCards);
    document.getElementById('loader').style.display = 'none';
}

function getCardColor(card) {
    if (!card.colors || card.colors.length === 0) return 'C';
    if (card.colors.length > 1) return 'M';
    return card.colors[0];
}

function getCardImageUrl(card) {
    if (card.image_uris && card.image_uris.normal) return card.image_uris.normal;
    if (card.card_faces && card.card_faces[0].image_uris) return card.card_faces[0].image_uris.normal;
    return 'https://placehold.co/250x350/1e1e1e/FFF?text=' + encodeURIComponent(card.name);
}

// Sorting Logic Updated for Dropdown
function applyFilters() {
    let source = appMode === 'sealed' ? sealedPool : allCards;
    let filtered = [...source];

    // 1. Color Filter
    if (!currentColorFilters.has('all')) {
        filtered = filtered.filter(card => {
            const colors = card.colors || [];

            // Handle Colorless
            if (colors.length === 0) return currentColorFilters.has('C');

            // Handle Multi ('M') - Show all multi when M selected
            if (colors.length > 1 && currentColorFilters.has('M')) return true;

            // Strict Subset Logic (User Request)
            // Card must ONLY contain colors that are currently selected.
            // E.g. Selected [W, U] -> Shows W, U, and W+U. Hides W+B.
            return colors.every(c => currentColorFilters.has(c));
        });
    }

    // 2. Type Filter
    if (!currentTypeFilters.has('all')) {
        filtered = filtered.filter(card => {
            const typeLine = (card.type_line || "").toLowerCase();
            let match = false;
            currentTypeFilters.forEach(type => {
                if (typeLine.includes(type.toLowerCase())) match = true;
            });
            return match;
        });
    }

    // 2.5 Duplicates Filter (Show only cards that have copies)
    if (filterDupes) {
        filtered = filtered.filter(c => (Number(c.quantity) || 1) >= 2);
    }

    // 3. Sorting (Disable for Sealed to prevent jumping cards on reroll, keep shuffle order)
    if (appMode !== 'sealed') {
        filtered.sort((a, b) => {
            let valA, valB;
            if (sortType === 'rarity') {
                const rMap = { 'common': 1, 'uncommon': 2, 'rare': 3, 'mythic': 4, 'special': 5 };
                valA = rMap[(a.rarity || 'common').toLowerCase()] || 0;
                valB = rMap[(b.rarity || 'common').toLowerCase()] || 0;
            } else if (sortType === 'color') {
                const getColorVal = (c) => {
                    const cols = c.colors || [];
                    if (cols.length === 0) return 0; // Colorless
                    if (cols.length > 1) return 10 + cols.length; // Multi (High)
                    // Order: G -> R -> B -> U -> W (Low -> High)
                    const map = { 'G': 1, 'R': 2, 'B': 3, 'U': 4, 'W': 5 };
                    return map[cols[0]] || 6;
                };
                valA = getColorVal(a);
                valB = getColorVal(b);
            } else {
                // Mana Cost (CMC)
                valA = a.cmc || 0;
                valB = b.cmc || 0;
            }
            if (sortDirection === 'desc') return valB - valA;
            return valA - valB;
        });
    }

    renderCards(filtered);
}

// Dropdown Handler
function onSortChange(e) {
    const val = e.target.value; // "cmc-asc", "cmc-desc", "rarity-asc", "rarity-desc"
    const parts = val.split('-');
    sortType = parts[0];
    sortDirection = parts[1];
    applyFilters();
}

// Render Logic
function renderCards(cards) {
    gallery.innerHTML = '';

    // Calculate Total Volume (Sum of quantities)
    const totalVolume = cards.reduce((sum, c) => sum + (c.quantity || 1), 0);
    const uniqueNames = new Set(cards.map(c => c.name)).size;

    // Sort Dropdown HTML
    const sortOptions = `
        <select id="sort-select" onchange="onSortChange(event)">
            <option value="cmc-asc" ${sortType === 'cmc' && sortDirection === 'asc' ? 'selected' : ''}>Mana Cost ▲</option>
            <option value="cmc-desc" ${sortType === 'cmc' && sortDirection === 'desc' ? 'selected' : ''}>Mana Cost ▼</option>
            <option value="rarity-asc" ${sortType === 'rarity' && sortDirection === 'asc' ? 'selected' : ''}>Rarity (Common->Mythic)</option>
            <option value="rarity-desc" ${sortType === 'rarity' && sortDirection === 'desc' ? 'selected' : ''}>Rarity (Mythic->Common)</option>
            <option value="color-desc" ${sortType === 'color' && sortDirection === 'desc' ? 'selected' : ''}>Color (Multi -> Mono)</option>
            <option value="color-asc" ${sortType === 'color' && sortDirection === 'asc' ? 'selected' : ''}>Color (Mono -> Multi)</option>
        </select>
    `;

    // Make sure global scope has access to onSortChange
    window.onSortChange = onSortChange;

    cardCountEl.innerHTML = `Kariet: ${uniqueNames} <span style="font-size:0.85rem; color:#aaa; margin-left:5px;">(s kópiami: ${totalVolume})</span> ${sortOptions}`;

    cards.forEach(card => {
        const cardEl = document.createElement('div');
        cardEl.className = 'card-item';
        cardEl.draggable = true;

        // Middle Click to Remove
        cardEl.addEventListener('mousedown', (e) => {
            if (e.button === 1) {
                e.preventDefault();
                const targetDeck = appMode === 'sealed' ? sealedDeck : collectionDeck;
                const idx = targetDeck.indexOf(card);
                if (idx !== -1) {
                    targetDeck.splice(idx, 1);
                    updateDeckUI();
                }
            }
        });

        cardEl.ondragstart = (e) => drag(e, card);

        let imgUrl = getCardImageUrl(card);

        // Left Click: Add to Deck
        cardEl.onclick = () => addToDeck(card);

        // Right Click: Zoom (Modal)
        cardEl.oncontextmenu = (e) => {
            e.preventDefault();
            openModal(imgUrl, card.name, card);
        };

        const img = document.createElement('img');
        img.src = imgUrl;
        img.loading = "lazy";
        img.alt = card.name;

        cardEl.appendChild(img);

        // Quantity Badge (Collection Mode Only)
        if (appMode === 'collection' && card.quantity && card.quantity > 1) {
            const badge = document.createElement('div');
            badge.className = 'card-quantity';
            badge.textContent = `${card.quantity}x`;
            cardEl.appendChild(badge);
        }

        // Sealed Reroll Icon
        if (appMode === 'sealed') {
            const reroll = document.createElement('div');
            reroll.className = 'reroll-card-btn';
            // Sealed Dice Icon
            reroll.innerHTML = `<svg viewBox="0 0 24 24" style="width:20px;height:20px;display:block;margin:auto;"><rect x="4" y="4" width="16" height="16" rx="2" stroke="#ff6600" stroke-width="2" fill="none"/><circle cx="8.5" cy="8.5" r="1.5" fill="#ff6600"/><circle cx="15.5" cy="15.5" r="1.5" fill="#ff6600"/><circle cx="12" cy="12" r="1.5" fill="#ff6600"/><circle cx="15.5" cy="8.5" r="1.5" fill="#ff6600"/><circle cx="8.5" cy="15.5" r="1.5" fill="#ff6600"/></svg>`;
            reroll.title = "Vymeniť za náhodnú";
            reroll.draggable = false;
            reroll.ondragstart = (e) => e.preventDefault();

            reroll.onclick = (e) => {
                e.preventDefault();
                e.stopPropagation();
                rerollSingleCard(card);
            };
            cardEl.appendChild(reroll);
        }

        const color = getCardColor(card);
        cardEl.dataset.color = color;



        gallery.appendChild(cardEl);
    });

    // Update Deck Indicators
    const targetDeck = appMode === 'sealed' ? sealedDeck : collectionDeck;
    updateGalleryDeckIndicators(targetDeck);
}

// Color Filters (Shift + Click)
const colorBtns = document.querySelectorAll('#color-filter .filter-btn');
colorBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const color = btn.dataset.color;

        if (e.shiftKey) {
            if (currentColorFilters.has('all')) currentColorFilters.clear();

            if (currentColorFilters.has(color)) {
                currentColorFilters.delete(color);
                btn.classList.remove('active');
            } else {
                currentColorFilters.add(color);
                btn.classList.add('active');
            }

            if (currentColorFilters.size === 0) {
                currentColorFilters.add('all');
                document.querySelector('#color-filter [data-color="all"]').classList.add('active');
            } else {
                document.querySelector('#color-filter [data-color="all"]').classList.remove('active');
            }
        } else {
            currentColorFilters.clear();
            currentColorFilters.add(color);
            colorBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        }
        applyFilters();
    });
});

// Type Filters (Shift + Click)
const typeBtns = document.querySelectorAll('#type-filter .filter-btn');
typeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const type = btn.dataset.type;

        if (e.shiftKey) {
            if (currentTypeFilters.has('all')) currentTypeFilters.clear();

            if (currentTypeFilters.has(type)) {
                currentTypeFilters.delete(type);
                btn.classList.remove('active');
            } else {
                currentTypeFilters.add(type);
                btn.classList.add('active');
            }
            if (currentTypeFilters.size === 0) {
                currentTypeFilters.add('all');
                document.querySelector('#type-filter [data-type="all"]').classList.add('active');
            } else {
                document.querySelector('#type-filter [data-type="all"]').classList.remove('active');
            }
        } else {
            currentTypeFilters.clear();
            currentTypeFilters.add(type);
            typeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        }
        applyFilters();
    });
});

// Duplicates Filter
const dupeBtn = document.getElementById('filter-dupes-btn');
if (dupeBtn) {
    dupeBtn.addEventListener('click', () => {
        filterDupes = !filterDupes;
        dupeBtn.classList.toggle('active', filterDupes);
        dupeBtn.style.color = filterDupes ? 'white' : '#aaa';
        dupeBtn.style.borderColor = filterDupes ? 'var(--accent)' : '#444';
        applyFilters();
    });
}

// Modal Logic
function openModal(src, caption, card) {
    currentModalCard = card;
    modal.style.display = "flex"; // Flex to center with new CSS
    modalImg.src = src;
    captionText.textContent = caption; // Name below button

    // Ensure close button works (re-binding just in case)
    if (closeBtn) {
        closeBtn.onclick = () => modal.style.display = "none";
    }
}

// Close when clicking outside
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Ensure .close button is found (it was getElementsByClassName returning collection)
const closeBtnEl = document.querySelector('.close');
if (closeBtnEl) {
    closeBtnEl.onclick = () => modal.style.display = "none";
}

// Deck Builder UI
const deckBuilder = document.getElementById('deck-builder');
// const deckListEl ... defined in updateDeckUI or cached
// Need global access to currentModalCard for Add button
let currentModalCard = null;

// Deck Builder Toggle
const deckBtn = document.getElementById('deck-toggle-btn'); // Using existing ID for consistency
const deckSidebar = document.getElementById('deck-builder'); // deckBuilder is the sidebar element
const closeDeckBtn = document.getElementById('close-deck-btn');

function toggleDeckBuilder() {
    deckSidebar.classList.toggle('open');
    document.body.classList.toggle('sidebar-open'); // Push content
    updateDeckUI(); // Refresh stats when opening
}

if (deckBtn) deckBtn.onclick = toggleDeckBuilder;
if (closeDeckBtn) closeDeckBtn.onclick = toggleDeckBuilder;

if (document.getElementById('modal-add-deck')) {
    document.getElementById('modal-add-deck').onclick = () => {
        if (currentModalCard) addToDeck(currentModalCard);
        modal.style.display = 'none';
        deckBuilder.classList.add('open');
        document.body.classList.add('sidebar-open');
    };
}
if (document.getElementById('clear-deck-btn')) {
    document.getElementById('clear-deck-btn').onclick = () => {
        if (appMode === 'sealed') sealedDeck = [];
        else collectionDeck = [];
        updateDeckUI();
    };
}
if (document.getElementById('copy-deck-btn')) {
    document.getElementById('copy-deck-btn').onclick = () => {
        const deck = appMode === 'sealed' ? sealedDeck : collectionDeck;
        const text = deck.map(c => `1 ${c.name}`).join('\n');
        navigator.clipboard.writeText(text).then(() => alert('Deck skopírovaný!'));
    };
}

function addToDeck(card) {
    const targetDeck = appMode === 'sealed' ? sealedDeck : collectionDeck;
    targetDeck.push(card);

    // Auto Open Sidebar
    document.body.classList.add('sidebar-open');
    document.getElementById('deck-builder').classList.add('open');

    updateDeckUI();
}

function removeFromDeck(index) {
    const targetDeck = appMode === 'sealed' ? sealedDeck : collectionDeck;
    targetDeck.splice(index, 1);
    updateDeckUI();
}

function parseManaCost(manaCost) {
    if (!manaCost) return "";

    // Fix split cards: "//" -> single "/" with spacing
    let displayCost = manaCost.replace(/\s*\/\/\s*/g, ' <span style="margin:0 2px; color:#777;">/</span> ');

    return displayCost.replace(/\{([^}]+)\}/g, (match, symbol) => {
        const clean = symbol.toLowerCase().replace('/', '');

        // Check if numeric (Generic Mana)
        if (!isNaN(parseInt(clean))) {
            return `<span class="ms-generic">${clean}</span>`;
        }

        // Color Symbols
        // Map common hybrids if needed, or simple fallback
        return `<span class="mana-icon ms-${clean}" style="border:none;"></span>`;
    });
}

function updateDeckUI() {
    const deck = appMode === 'sealed' ? sealedDeck : collectionDeck;
    const deckListEl = document.getElementById('deck-list');
    const deckCountEl = document.getElementById('deck-count');
    const limitIndicator = document.getElementById('limit-indicator');

    // Count
    const statRow = document.querySelector('.deck-sidebar .stat-row');
    if (statRow) {
        statRow.innerHTML = `Počet kariet: <span style="margin-left: 5px; color: #fff; font-weight: bold;">${deck.length}</span>`;
        statRow.style.justifyContent = 'flex-start';
    }

    if (appMode === 'sealed') {
        const nonLands = deck.filter(c => !(c.type_line || "").includes("Land")).length;
        if (limitIndicator) {
            limitIndicator.textContent = `${nonLands}/23`;
            limitIndicator.style.color = nonLands > 23 ? "red" : "#ccc";
        }
    }

    // Clear List
    if (deckListEl) deckListEl.innerHTML = '';

    if (deck.length === 0) {
        if (deckListEl) deckListEl.innerHTML = '<div class="empty-deck-msg">Potiahnite sem karty z galérie</div>';
    } else {
        const creatures = deck.filter(c => (c.type_line || "").toLowerCase().includes("creature"));
        const others = deck.filter(c => !(c.type_line || "").toLowerCase().includes("creature"));

        if (creatures.length > 0) createDeckSection("Creatures", creatures, deckListEl, deck);
        if (others.length > 0) createDeckSection("Non-Creatures", others, deckListEl, deck);
    }

    // Update Curve
    updateManaCurve(deck);

    // Update Gallery Indicators
    updateGalleryDeckIndicators(deck);
}

function createDeckSection(title, cards, container, fullDeck) {
    if (!container) return;
    const titleEl = document.createElement('div');
    titleEl.className = 'deck-section-title';
    titleEl.textContent = title; // Clean title
    container.appendChild(titleEl);

    // Group cards by Name
    const groups = new Map();
    cards.forEach(c => {
        if (!groups.has(c.name)) {
            groups.set(c.name, {
                card: c,
                count: 0
            });
        }
        groups.get(c.name).count++;
    });

    groups.forEach((group) => {
        const { card, count } = group;
        const item = document.createElement('div');
        item.className = 'deck-item';

        let color = getCardColor(card);
        const colorMap = {
            'W': 'linear-gradient(90deg, transparent, rgba(248, 231, 185, 0.2))',
            'U': 'linear-gradient(90deg, transparent, rgba(14, 104, 171, 0.2))',
            'B': 'linear-gradient(90deg, transparent, rgba(100, 100, 100, 0.4))', /* Lightened Black */
            'R': 'linear-gradient(90deg, transparent, rgba(211, 32, 42, 0.2))',
            'G': 'linear-gradient(90deg, transparent, rgba(0, 115, 62, 0.2))',
            'M': 'linear-gradient(90deg, transparent, rgba(210, 180, 140, 0.2))',
            'C': 'linear-gradient(90deg, transparent, rgba(100, 100, 100, 0.1))'
        };
        if (colorMap[color]) item.style.background = colorMap[color];

        const costHtml = parseManaCost(card.mana_cost);
        const imgUrl = getCardImageUrl(card);

        // Show count if > 1
        const countBadge = count > 1 ? `<span style="font-weight:bold; margin-right:5px; color:white;">${count}x</span>` : '';

        // Middle Click to Remove
        item.addEventListener('mousedown', (e) => {
            if (e.button === 1) {
                e.preventDefault();
                removeFromDeck(fullDeck.indexOf(card));
            }
        });

        item.innerHTML = `
            <div class="deck-item-left">
                <span class="eye-icon" onmouseover="showDeckPreview('${imgUrl}', event)" onmouseout="hideDeckPreview()">
                    <svg viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                </span>
                ${countBadge}
                <span class="deck-item-name" title="${card.name}">${card.name}</span>
            </div>
            <div class="deck-item-right">
                <span class="deck-item-cost">${costHtml}</span>
                <button class="deck-item-remove" onclick="removeFromDeck(${fullDeck.indexOf(card)})">&times;</button>
            </div>
        `;
        container.appendChild(item);
    });
}

function updateManaCurve(deck) {
    const container = document.querySelector('.mana-curve-container');
    if (!container) return;

    const counts = [0, 0, 0, 0, 0, 0];
    const labels = ['0-1', '2', '3', '4', '5', '6+'];
    let max = 0;

    deck.forEach(c => {
        if ((c.type_line || "").includes("Land")) return;
        let cmc = Math.floor(c.cmc || 0);
        if (cmc <= 1) counts[0]++;
        else if (cmc === 2) counts[1]++;
        else if (cmc === 3) counts[2]++;
        else if (cmc === 4) counts[3]++;
        else if (cmc === 5) counts[4]++;
        else counts[5]++;
    });

    max = Math.max(...counts);
    if (max === 0) max = 1;

    let columnsHtml = '';

    labels.forEach((label, index) => {
        const count = counts[index];
        // Height: max 90% to avoid touching top
        let h = (count / max) * 90;

        let barColor = '#fff3cd'; // 1
        if (count === 2) barColor = '#ffe69c';
        else if (count === 3) barColor = '#ffc107';
        else if (count === 4) barColor = '#fd7e14';
        else if (count === 5) barColor = '#dc3545';
        else if (count >= 6) barColor = '#8b0000';

        columnsHtml += `
            <div class="mc-col">
                <div class="mc-label">${label}</div>
                <div class="mc-bar-track">
                     <div class="mc-bar" style="height: ${h}%; background-color: ${barColor};"></div>
                </div>
                <div class="mc-count" style="visibility:${count > 0 ? 'visible' : 'hidden'}">${count}</div>
            </div>
        `;
    });

    // Render Grid
    container.innerHTML = `
        <div class="curve-title" style="border-bottom: 1px solid #555; padding-bottom: 5px; margin-bottom: 8px;">Mana Curve</div>
        <div class="mana-curve-grid">
            ${columnsHtml}
        </div>
    `;
}

// Deck Hover Preview
const previewEl = document.createElement('div');
previewEl.id = 'deck-hover-preview';
document.body.appendChild(previewEl);

function showDeckPreview(url, e) {
    previewEl.style.backgroundImage = `url('${url}')`;
    previewEl.style.display = 'block';
    moveDeckPreview(e);
}

function hideDeckPreview() {
    previewEl.style.display = 'none';
}

function moveDeckPreview(e) {
    if (previewEl.style.display === 'block') {
        previewEl.style.top = (e.clientY + 10) + 'px';
        previewEl.style.left = (e.clientX - 260) + 'px';
    }
}
window.addEventListener('mousemove', moveDeckPreview);

// Drag functionality
function allowDrop(ev) { ev.preventDefault(); }
function drag(ev, card) { ev.dataTransfer.setData("text/plain", JSON.stringify(card)); }
function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text/plain");
    try {
        const card = JSON.parse(data);
        addToDeck(card);
    } catch (e) { console.error("Drop failed", e); }
}
window.drop = drop;
window.allowDrop = allowDrop;
window.drag = drag;
window.removeFromDeck = removeFromDeck;

// Source Inspector - Removed as user requested

// Hover Preview element (Floating)
let deckPreviewEl = document.createElement('div');
deckPreviewEl.id = 'deck-hover-preview';
document.body.appendChild(deckPreviewEl);

// Modal Close logic
closeBtn.onclick = function () {
    modal.style.display = "none";
    if (document.getElementById('debug-content')) document.getElementById('debug-content').style.display = 'none';
    if (document.querySelector('.modal-content-wrapper')) document.querySelector('.modal-content-wrapper').style.display = 'flex';
    modalImg.style.display = "block";
    captionText.style.display = "block";
}
modal.onclick = function (e) {
    if (e.target === modal) {
        modal.style.display = "none";
        if (document.getElementById('debug-content')) document.getElementById('debug-content').style.display = 'none';
        if (document.querySelector('.modal-content-wrapper')) document.querySelector('.modal-content-wrapper').style.display = 'flex';
        modalImg.style.display = "block";
        captionText.style.display = "block";
    }
}

function updateGalleryDeckIndicators(deck) {
    const counts = {};
    deck.forEach(c => {
        counts[c.name] = (counts[c.name] || 0) + 1;
    });

    document.querySelectorAll('.card-item').forEach(item => {
        const img = item.querySelector('img');
        if (!img) return;
        const name = img.alt;

        const existing = item.querySelector('.deck-indicator');
        if (existing) existing.remove();

        if (counts[name]) {
            const ind = document.createElement('div');
            ind.className = 'deck-indicator';
            // Simple Box Icon
            const boxIcon = `<svg viewBox="0 0 24 24"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 16H5V7h14v12zm-7-2h-2v-2h2v2z"/></svg>`;
            ind.innerHTML = `${boxIcon} <span>${counts[name]}x</span>`;
            item.appendChild(ind);
            item.style.boxShadow = '0 0 12px rgba(255, 102, 0, 0.6)';
            item.style.borderColor = '#ff6600';
        } else {
            item.style.boxShadow = '';
            item.style.borderColor = '';
        }
    });
}

initApp();
