const ALL_CARDS = ` 
Name,Set code,Set name,Collector number,Foil,Rarity,Quantity,ManaBox ID,Scryfall ID,Purchase price,Misprint,Altered,Condition,Language,Purchase price currency
Fiery Annihilation,FDN,Foundations,86,normal,uncommon,1,100523,54fe00aa-d284-48f9-b5a2-1bd4c5fa8e58,0.09,false,false,near_mint,en,EUR
Vampire Nighthawk,FDN,Foundations,186,normal,uncommon,1,101474,0a1934ab-3171-4fc6-8033-ad998899ba73,0.13,false,false,near_mint,en,EUR
"Tatyova, Benthic Druid",FDN,Foundations,247,foil,uncommon,1,101301,eabc978a-0666-472d-bdc6-d4b29d29eca4,0.2,false,false,near_mint,en,EUR
Skyknight Squire,FDN,Foundations,301,normal,rare,1,101269,e52d0d34-4d66-4e0d-9d64-bb7786930b7a,0.83,false,false,near_mint,en,EUR
Strix Lookout,FDN,Foundations,52,normal,common,1,101627,fbd2422e-8e84-4c39-af29-3b4d38baee63,0.03,false,false,near_mint,en,EUR
Banishing Light,FDN,Foundations,138,normal,common,1,101613,e38dc3b3-1629-491b-8afd-0e7a9a857713,0.04,false,false,near_mint,en,EUR
Sanguine Syphoner,FDN,Foundations,68,normal,common,1,101582,b1daf5bb-c8e9-4e79-a532-ca92a9a885cd,0.06,false,false,near_mint,en,EUR
Sower of Chaos,FDN,Foundations,95,normal,common,1,101556,7ff50606-491c-4946-8d03-719b01cfad77,0.02,false,false,near_mint,en,EUR
Burglar Rat,FDN,Foundations,170,normal,common,1,101608,de1c8758-ce3d-49cf-8173-c0eb46f5e7bc,0.07,false,false,near_mint,en,EUR
Llanowar Elves,FDN,Foundations,227,normal,common,1,95583,6a0b230b-d391-4998-a3f7-7b158a0ec2cd,0.14,false,false,near_mint,en,EUR
Fleeting Flight,FDN,Foundations,13,normal,common,1,101513,55139100-9342-41fd-b10a-8e9932e605d4,0.06,false,false,near_mint,en,EUR
Goldvein Pick,FDN,Foundations,253,normal,common,1,101572,a241317d-2277-467e-a8f9-aa71c944e244,0.07,false,false,near_mint,en,EUR
Dazzling Angel,FDN,Foundations,9,normal,common,1,101468,027dc444-e544-4693-8653-3dcdda530162,0.12,false,false,near_mint,en,EUR
Erudite Wizard,FDN,Foundations,37,normal,common,1,100835,9273c417-0fcd-4273-b24e-afff76336d0c,0.03,false,false,near_mint,en,EUR
Giant Growth,FDN,Foundations,223,normal,common,1,101073,bd0bf74e-14c1-4428-88d8-2181a080b5d0,0.05,false,false,near_mint,en,EUR
Gutless Plunderer,FDN,Foundations,60,normal,common,1,101567,909d7778-c7f8-4fa4-89f2-8b32e86e96e4,0.03,false,false,near_mint,en,EUR
Gorehorn Raider,FDN,Foundations,89,normal,common,1,101551,78ce6c40-3452-4aa0-a45b-dbfd70f8d220,0.03,false,false,near_mint,en,EUR
Claws Out,FDN,Foundations,6,normal,uncommon,1,100429,4396049c-b976-4b7f-8ecd-564e24ebd631,0.12,false,false,near_mint,en,EUR
Grappling Kraken,FDN,Foundations,39,normal,uncommon,1,101165,d1f5cab3-3fc0-448d-8252-cd55abf5b596,0.13,false,false,near_mint,en,EUR
Ravenous Amulet,FDN,Foundations,131,normal,uncommon,1,100744,80cadee5-6f26-4440-ad31-a8e573a90436,0.11,false,false,near_mint,en,EUR
"Balmor, Battlemage Captain",FDN,Foundations,237,normal,uncommon,1,100142,0b45ab13-9bb6-48af-8b37-d97b25801ac8,0.14,false,false,near_mint,en,EUR
Searslicer Goblin,FDN,Foundations,93,normal,rare,1,100845,94ad0b97-a318-4e76-ac79-b3e83417c333,0.77,false,false,near_mint,en,EUR
Mocking Sprite,FDN,Foundations,159,foil,common,1,101624,f6792f63-b651-497d-8aa5-cddf4cedeca8,0.11,false,false,near_mint,en,EUR
Treetop Snarespinner,FDN,Foundations,114,normal,common,2,101562,88e68fa3-159d-49a6-8ac6-afc9bd6f1718,0.04,false,false,near_mint,en,EUR 
Name,Set code,Set name,Collector number,Foil,Rarity,Quantity,ManaBox ID,Scryfall ID,Purchase price,Misprint,Altered,Condition,Language,Purchase price currency
Kishla Trawlers,TDM,Tarkir: Dragonstorm,50,normal,uncommon,1,104472,190fbc55-e8e9-4077-9532-1de7406baabf,0.03,false,false,near_mint,en,EUR
Essence Anchor,TDM,Tarkir: Dragonstorm,44,normal,uncommon,1,105026,e91c4509-918e-44ba-aa13-1991199fee9f,0.03,false,false,near_mint,en,EUR
Bewildering Blizzard,TDM,Tarkir: Dragonstorm,38,normal,uncommon,1,104807,91b25843-1aa0-484a-b6c7-0c284fe7214a,0.02,false,false,near_mint,en,EUR
Whirlwing Stormbrood // Dynamic Soar,TDM,Tarkir: Dragonstorm,234,normal,uncommon,1,104656,56a25eb1-bdb8-4f86-8d9a-3055ad1b2a13,0.03,false,false,near_mint,en,EUR
Spellscorn Coven // Take It Back,WOE,Wilds of Eldraine,237,normal,uncommon,2,85554,8c112f62-6034-4636-a75b-4a45bc916a91,0.05,false,false,near_mint,en,EUR
Horses of the Bruinen,LTR,The Lord of the Rings: Tales of Middle-earth,55,normal,uncommon,1,83659,f7725dc2-2654-4ffb-b6b3-510ae64ec6af,0.04,false,false,near_mint,en,EUR
Archive Dragon,WOE,Wilds of Eldraine,41,normal,uncommon,1,85313,2979104f-7570-487c-8024-131d7ee3ab91,0.05,false,false,near_mint,en,EUR
Threadbind Clique // Rip the Seams,WOE,Wilds of Eldraine,239,normal,uncommon,1,85769,dd6ed252-c262-4062-97ba-75c50d6b5579,0.06,false,false,near_mint,en,EUR
Tenacious Tomeseeker,WOE,Wilds of Eldraine,74,normal,uncommon,1,85710,c40be735-0780-459b-8dd2-a298575beaab,0.07,false,false,near_mint,en,EUR
Icewrought Sentry,WOE,Wilds of Eldraine,55,normal,uncommon,1,85535,859419d3-cd15-4362-98b3-a7ff98e29692,0.13,false,false,near_mint,en,EUR
Bitter Chill,WOE,Wilds of Eldraine,44,normal,uncommon,1,85543,888e3c71-e21d-4e77-b1b6-09769f9cd3d6,0.08,false,false,near_mint,en,EUR
Surveillance Monitor,MKM,Murders at Karlov Manor,73,normal,uncommon,1,90957,703b874d-6739-4063-9891-e9c040dd9618,0.04,false,false,near_mint,en,EUR
Eliminate the Impossible,MKM,Murders at Karlov Manor,54,normal,uncommon,1,90839,486f1cc2-c162-448e-91a9-577d7d796584,0.09,false,false,near_mint,en,EUR
Mistway Spy,MKM,Murders at Karlov Manor,65,normal,uncommon,1,91273,e8578839-046f-4afd-a0e7-4737ded9e6eb,0.05,false,false,near_mint,en,EUR
Sudden Setback,MKM,Murders at Karlov Manor,72,normal,uncommon,1,90647,0b9e5fd6-a5ea-4ae5-83f5-89ed6a658dd3,0.03,false,false,near_mint,en,EUR
Nightveil Sprite,MKC,Murders at Karlov Manor Commander,113,normal,uncommon,1,90428,82f806fe-3970-4ae2-b232-d99002d46062,0.03,false,false,near_mint,en,EUR
Agency Outfitter,MKM,Murders at Karlov Manor,38,normal,uncommon,1,91008,8112f133-535e-4264-8357-9cbf97957710,0.04,false,false,near_mint,en,EUR
Case of the Filched Falcon,MKM,Murders at Karlov Manor,44,normal,uncommon,1,90729,266be5bd-71ba-4511-8b71-d0b03885a28d,0.07,false,false,near_mint,en,EUR
"Elrond, Lord of Rivendell",LTR,The Lord of the Rings: Tales of Middle-earth,49,normal,uncommon,2,83369,a62a5e55-fa1b-4c70-9293-740dd513d52e,0.08,false,false,near_mint,en,EUR
Constrictor Sage,TDM,Tarkir: Dragonstorm,39,normal,uncommon,2,105156,b2f160d7-c832-4b83-8f2e-aaeb190add3f,0.03,false,false,near_mint,en,EUR
Saruman the White,LTR,The Lord of the Rings: Tales of Middle-earth,67,normal,uncommon,2,82903,1bfccbab-29fa-4e92-8919-6cd4815fb655,0.09,false,false,near_mint,en,EUR
Ureni's Rebuff,TDM,Tarkir: Dragonstorm,63,normal,uncommon,2,104310,722716df-9cea-40a7-924b-c28497e227e6,0.03,false,false,near_mint,en,EUR
Aegis Sculptor,TDM,Tarkir: Dragonstorm,35,normal,uncommon,2,104248,19c1417a-9719-46f6-8749-d92b93ce0529,0.03,false,false,near_mint,en,EUR
Frolicking Familiar // Blow Off Steam,WOE,Wilds of Eldraine,226,normal,uncommon,2,85455,64c432d5-4f5b-44ac-9d61-891e78460d58,0.09,false,false,near_mint,en,EUR
Gadwick's First Duel,WOE,Wilds of Eldraine,51,normal,uncommon,2,85655,af07c47f-8b4e-43cb-b469-2efb82aa5590,0.04,false,false,near_mint,en,EUR
Dragonstorm Forecaster,TDM,Tarkir: Dragonstorm,43,normal,uncommon,2,104740,75ec7a31-1893-493c-926b-dc3a8a770e72,0.03,false,false,near_mint,en,EUR
Fresh Start,TDM,Tarkir: Dragonstorm,46,normal,uncommon,2,104818,96f7af08-ac05-45d0-979f-282943130c61,0.07,false,false,near_mint,en,EUR
"Gandalf, Friend of the Shire",LTR,The Lord of the Rings: Tales of Middle-earth,50,normal,uncommon,2,83510,cc9cfcc7-be64-4871-8d52-851e43fe3305,0.13,false,false,near_mint,en,EUR
"Bill Ferny, Bree Swindler",LTR,The Lord of the Rings: Tales of Middle-earth,42,normal,uncommon,2,82919,20ac63cb-fa4d-4340-8062-1029c8bd5ec8,0.04,false,false,near_mint,en,EUR
"Meneldor, Swift Savior",LTR,The Lord of the Rings: Tales of Middle-earth,62,normal,uncommon,2,83131,62d2ee20-abbc-4a9d-8d30-4223242123e8,0.08,false,false,near_mint,en,EUR
Superior Numbers,MIR,Mirage,244,normal,uncommon,2,38346,43d90914-ddfc-49c2-8e58-fdc3693040f2,0.15,false,false,near_mint,en,EUR
Splashy Spellcaster,WOE,Wilds of Eldraine,70,normal,uncommon,2,85493,73ebd7f0-a54d-43a8-a5ee-9d6835308794,0.02,false,false,near_mint,en,EUR
Succumb to the Cold,WOE,Wilds of Eldraine,72,normal,uncommon,2,85703,c14d9fc0-bfbf-4359-93bf-5e53466965d6,0.03,false,false,near_mint,en,EUR
Galvanic Giant // Storm Reading,WOE,Wilds of Eldraine,52,normal,uncommon,2,85439,60976109-30ad-4f12-99eb-c5ef560fcf1b,0.05,false,false,near_mint,en,EUR
Eyes Everywhere,RVR,Ravnica Remastered,43,normal,uncommon,2,89909,cf5aa4a2-f5fb-4771-9dd8-f41d8c65e687,0.09,false,false,near_mint,en,EUR
Disdainful Stroke,WOE,Wilds of Eldraine,47,normal,uncommon,2,85411,588c6217-c460-417e-98bf-de5475780baf,0.06,false,false,near_mint,en,EUR
Exit Specialist,MKM,Murders at Karlov Manor,55,normal,uncommon,2,90730,268f142d-9fb1-4673-b804-add1f08dacb9,0.08,false,false,near_mint,en,EUR
Candlestick,MKM,Murders at Karlov Manor,43,normal,uncommon,2,90898,5aeae6fb-3834-4891-924e-3d1fb3e19e09,0.07,false,false,near_mint,en,EUR
Burden of Proof,MKM,Murders at Karlov Manor,42,normal,uncommon,2,90855,4ea29c34-4b55-4170-9120-0a8dda61f2eb,0.04,false,false,near_mint,en,EUR
Fae Flight,MKM,Murders at Karlov Manor,56,normal,uncommon,2,91231,d9caa4eb-ed8c-4d05-8029-2a42163938a7,0.08,false,false,near_mint,en,EUR
Living Conundrum,MKM,Murders at Karlov Manor,63,normal,uncommon,2,91065,97fb11c7-7b7f-4bdb-a022-53e28ebadecc,0.05,false,false,near_mint,en,EUR
Furtive Courier,MKM,Murders at Karlov Manor,59,normal,uncommon,3,90953,6f359fc2-b9e4-4a01-9d04-442bb160b01e,0.03,false,false,near_mint,en,EUR
Cerulean Sphinx,RVR,Ravnica Remastered,36,normal,uncommon,3,89673,4ccc3647-4cbc-4fec-91f5-5bc064530174,0.03,false,false,near_mint,en,EUR
Aetherplasm,RVR,Ravnica Remastered,34,normal,uncommon,3,89536,07d71f03-de9c-4a85-be22-e4eb4d98a343,0.06,false,false,near_mint,en,EUR
Unrooted Ancestor,TDM,Tarkir: Dragonstorm,96,normal,uncommon,1,104689,6394b125-21a8-4439-9958-94b76684138e,0.03,false,false,near_mint,en,EUR
Stab Wound,RVR,Ravnica Remastered,93,normal,uncommon,1,89901,cbe656e7-ae71-45c2-a263-588b73f70d73,0.07,false,false,near_mint,en,EUR
High Fae Negotiator,WOE,Wilds of Eldraine,94,normal,uncommon,1,85823,f0fc77e7-154d-4433-93b3-1a1dee34791b,0.04,false,false,near_mint,en,EUR
Hundred-Battle Veteran,TDM,Tarkir: Dragonstorm,82,normal,uncommon,1,105017,e53adf93-2db5-4087-a2dc-c8f53401d700,0.03,false,false,near_mint,en,EUR
Corroding Dragonstorm,TDM,Tarkir: Dragonstorm,75,normal,uncommon,1,104372,e2a2d395-26d6-4eb2-9e8c-ed7dbbd3a8f5,0.09,false,false,near_mint,en,EUR
Festerleech,MKM,Murders at Karlov Manor,85,normal,uncommon,1,91017,83a6fa37-8351-403b-ae05-b67e9bf74bbb,0.04,false,false,near_mint,en,EUR
Gollum's Bite,LTR,The Lord of the Rings: Tales of Middle-earth,85,normal,uncommon,1,82900,1b1e790e-ff82-4888-8aee-9986c646241a,0.05,false,false,near_mint,en,EUR
Krumar Initiate,TDM,Tarkir: Dragonstorm,84,normal,uncommon,1,104916,bc66680f-24ab-433a-8197-feac3a174075,0.03,false,false,near_mint,en,EUR
Mausoleum Turnkey,CLU,Ravnica: Clue Edition,116,normal,uncommon,1,91156,bb0f0260-b737-43aa-a6fc-9e0b55b24369,0.09,false,false,near_mint,en,EUR
Case of the Gorgon's Kiss,MKM,Murders at Karlov Manor,79,normal,uncommon,1,90831,45e4c07a-3205-4193-8163-b0e63e6242a4,0.07,false,false,near_mint,en,EUR
Persuasive Interrogators,MKM,Murders at Karlov Manor,345,normal,uncommon,1,90941,6c134956-ba18-415e-b101-c1254415ea04,0.05,false,false,near_mint,en,EUR
March from the Black Gate,LTR,The Lord of the Rings: Tales of Middle-earth,94,normal,uncommon,1,82810,e57815d4-b21f-4ceb-a3f1-73cff5f0e612,0.09,false,false,near_mint,en,EUR
Long Goodbye,MKM,Murders at Karlov Manor,92,normal,uncommon,1,91184,c3896705-bbd2-4ffb-a590-ee78e0eabdc5,0.19,false,false,near_mint,en,EUR
"Gothmog, Morgul Lieutenant",LTR,The Lord of the Rings: Tales of Middle-earth,87,normal,uncommon,1,83353,a1c10e93-88eb-46b9-8adc-583661807990,0.06,false,false,near_mint,en,EUR
Bitter Downfall,LTR,The Lord of the Rings: Tales of Middle-earth,77,normal,uncommon,1,83593,e4b83aa1-33ce-4b8d-ae5a-72f64eef5f09,0.03,false,false,near_mint,en,EUR
Leering Onlooker,MKM,Murders at Karlov Manor,91,normal,uncommon,1,91244,dc687588-9c57-411d-b666-b9699949d48f,0.05,false,false,near_mint,en,EUR
Gorbag of Minas Morgul,LTR,The Lord of the Rings: Tales of Middle-earth,86,normal,uncommon,1,83097,58aafdb6-1c8c-4fc4-a52e-3e601be7fb0c,0.04,false,false,near_mint,en,EUR
Venerated Stormsinger,TDM,Tarkir: Dragonstorm,97,normal,uncommon,1,104858,a4a4e985-facd-47e6-b680-3023c82c2957,0.12,false,false,near_mint,en,EUR
Nightdrinker Moroii,MKM,Murders at Karlov Manor,96,normal,uncommon,1,91216,ce043cba-aea4-4156-b1d0-545eda06c400,0.03,false,false,near_mint,en,EUR
It Doesn't Add Up,MKM,Murders at Karlov Manor,89,normal,uncommon,1,91325,fa02dbc2-ad01-47fd-b39e-f0a695029f26,0.06,false,false,near_mint,en,EUR
Gríma Wormtongue,LTR,The Lord of the Rings: Tales of Middle-earth,88,normal,uncommon,1,83283,8e3bd86b-e8ca-4885-a823-78fb967e6caf,0.05,false,false,near_mint,en,EUR
Slimy Dualleech,MKM,Murders at Karlov Manor,104,normal,uncommon,1,90847,4bc803ad-f8a2-4198-a8a6-8d987b3d00fb,0.03,false,false,near_mint,en,EUR
Presumed Dead,MKM,Murders at Karlov Manor,100,normal,uncommon,1,90853,4dd64e5c-ea0b-4ea0-aba3-88e7e96ac7ba,0.04,false,false,near_mint,en,EUR
Polygraph Orb,MKM,Murders at Karlov Manor,99,normal,uncommon,1,91101,a6cc4c6f-4a84-4d42-89fa-7405f7ad6ba0,0.09,false,false,near_mint,en,EUR
Lead Pipe,MKM,Murders at Karlov Manor,90,normal,uncommon,1,91028,87f69249-c6e4-40c1-9870-b9c45ce24c39,0.03,false,false,near_mint,en,EUR
Voracious Fell Beast,LTR,The Lord of the Rings: Tales of Middle-earth,113,normal,uncommon,2,83554,d9b7d7f8-503d-4660-9a18-6a8e2fcaa25f,0.06,false,false,near_mint,en,EUR
Ashiok's Reaper,WOE,Wilds of Eldraine,79,normal,uncommon,2,85527,83957fe0-6500-420c-9b7a-2448a1c1d3b3,0.05,false,false,near_mint,en,EUR
Oath of the Grey Host,LTR,The Lord of the Rings: Tales of Middle-earth,101,normal,uncommon,2,83165,6a780abd-f276-40d3-b2af-d2e47d858d3d,0.05,false,false,near_mint,en,EUR
The Witch's Vanity,WOE,Wilds of Eldraine,119,normal,uncommon,2,85374,47ca4926-b5ac-405a-8b58-f8db6df400ff,0.06,false,false,near_mint,en,EUR
Alchemist's Assistant,TDM,Tarkir: Dragonstorm,71,normal,uncommon,2,105131,4d305609-64f8-4f3f-bf67-cd5257f0d01e,0.04,false,false,near_mint,en,EUR
"Gollum, Patient Plotter",LTR,The Lord of the Rings: Tales of Middle-earth,84,normal,uncommon,1,83069,4ddda7d4-0226-404f-8418-f1f5720dcef8,0.08,false,false,near_mint,en,EUR
Purging Stormbrood // Absorb Essence,TDM,Tarkir: Dragonstorm,213,normal,uncommon,2,104271,3988dc76-072c-4f43-849d-2e73c6f6ff58,0.04,false,false,near_mint,en,EUR
Gurmag Rakshasa,TDM,Tarkir: Dragonstorm,81,normal,uncommon,2,105173,f05ad909-8860-473b-9a30-a322f7670b32,0.04,false,false,near_mint,en,EUR
Wail of War,TDM,Tarkir: Dragonstorm,98,normal,uncommon,2,104764,7e9430dd-f583-400d-808a-64e2b5fa54f1,0.09,false,false,near_mint,en,EUR
Salt Road Skirmish,TDM,Tarkir: Dragonstorm,88,normal,uncommon,2,105144,8f529a2e-5102-492e-84ab-68541d83b5a3,0.03,false,false,near_mint,en,EUR
Dreadmalkin,RVR,Ravnica Remastered,75,normal,uncommon,2,89821,9dc48d40-630b-4699-9cc9-5035313f538b,0.06,false,false,near_mint,en,EUR
Back for Seconds,WOE,Wilds of Eldraine,80,normal,uncommon,2,85457,660845b5-96fa-4484-822b-aa0508801306,0.06,false,false,near_mint,en,EUR
Vindictive Vampire,CLU,Ravnica: Clue Edition,126,normal,uncommon,2,90781,335cf2ae-90c3-407e-9e4a-5e18aab74744,0.2,false,false,near_mint,en,EUR
Undercity Eliminator,MKM,Murders at Karlov Manor,108,normal,uncommon,2,91100,a67a4c5e-215b-4f03-87f7-c1af4f9f0a63,0.03,false,false,near_mint,en,EUR
Taken by Nightmares,WOE,Wilds of Eldraine,112,normal,uncommon,2,85846,f858d83d-a13e-4ffa-a91d-d695e5e5d71a,0.04,false,false,near_mint,en,EUR
"Grond, the Gatebreaker",LTR,The Lord of the Rings: Tales of Middle-earth,89,normal,uncommon,2,83056,4bc61b28-afdd-4de9-829b-ffe5ca7c7f19,0.06,false,false,near_mint,en,EUR
Clandestine Meddler,MKM,Murders at Karlov Manor,82,normal,uncommon,3,90760,2e069de0-3218-456c-b191-93e755634783,0.03,false,false,near_mint,en,EUR
Twisted Sewer-Witch,WOE,Wilds of Eldraine,114,normal,uncommon,3,85750,d6e3ddf7-582d-4923-be30-8428e52237e4,0.09,false,false,near_mint,en,EUR
Woebringer Demon,RVR,Ravnica Remastered,98,normal,uncommon,3,89785,88b86280-f7a5-4d4d-bc00-71f21590835e,0.05,false,false,near_mint,en,EUR
Duty Beyond Death,TDM,Tarkir: Dragonstorm,10,normal,uncommon,1,104265,2e92640d-768b-4357-905f-bea017d351cc,0.17,false,false,near_mint,en,EUR
Call a Surprise Witness,MKM,Murders at Karlov Manor,6,normal,uncommon,1,91309,f5148def-cf1a-460e-8dfd-856103940892,0.07,false,false,near_mint,en,EUR
Loxodon Battle Priest,TDM,Tarkir: Dragonstorm,15,normal,uncommon,1,104861,a527cdb0-f54a-4b53-83a0-6b3e8cafa45e,0.02,false,false,near_mint,en,EUR
"Faramir, Field Commander",LTR,The Lord of the Rings: Tales of Middle-earth,14,normal,uncommon,1,82889,17c2250a-9af1-40de-9f09-7e8c7daec520,0.04,false,false,near_mint,en,EUR
Sanctuary Wall,MKM,Murders at Karlov Manor,32,normal,uncommon,1,90843,4a009ba2-c7b9-4cf6-bb90-9d6fd589e932,0.05,false,false,near_mint,en,EUR
Dalkovan Packbeasts,TDM,Tarkir: Dragonstorm,7,normal,uncommon,1,104631,4df7b253-6107-47d6-b650-cb4d3e0aec6b,0.1,false,false,near_mint,en,EUR
"Éowyn, Lady of Rohan",LTR,The Lord of the Rings: Tales of Middle-earth,10,normal,uncommon,1,83594,e59710c4-24de-419e-a8a0-e8392d450c23,0.08,false,false,near_mint,en,EUR
Descendant of Storms,TDM,Tarkir: Dragonstorm,8,normal,uncommon,1,105056,f632be90-9e7f-41f8-a52e-a2952354d730,0.06,false,false,near_mint,en,EUR
Stormbeacon Blade,TDM,Tarkir: Dragonstorm,27,normal,uncommon,1,105176,f2f12684-c80a-422b-9c3f-ed4f31742b9d,0.05,false,false,near_mint,en,EUR
Dutiful Griffin,WOE,Wilds of Eldraine,11,normal,uncommon,1,85683,b8e40377-990f-41ea-8dd2-62a998dcd128,0.03,false,false,near_mint,en,EUR
Solitary Sanctuary,WOE,Wilds of Eldraine,30,normal,uncommon,1,85738,d155693c-def0-4290-b662-ab9932e07fe5,0.07,false,false,near_mint,en,EUR
Krovod Haunch,MKM,Murders at Karlov Manor,21,normal,uncommon,1,91315,f663cd86-39e6-467b-85b7-dd27536251a6,0.07,false,false,near_mint,en,EUR
Glass Casket,WOE,Wilds of Eldraine,16,normal,uncommon,1,85226,02c5c395-ee8b-47fd-ac52-256354c19cdf,0.04,false,false,near_mint,en,EUR
Ministrant of Obligation,RVR,Ravnica Remastered,23,normal,uncommon,1,89834,a37658ab-2dda-4412-9cc2-3b2df32c7581,0.07,false,false,near_mint,en,EUR
Condemn,RVR,Ravnica Remastered,14,normal,uncommon,1,89549,0c93201b-7664-4bfd-a462-f1c684ebedf6,0.15,false,false,near_mint,en,EUR
Azorius Justiciar,CLU,Ravnica: Clue Edition,55,normal,uncommon,1,90677,1628e808-f0d7-4225-8020-d9cbd14c510e,0.07,false,false,near_mint,en,EUR
Essence of Antiquity,MKM,Murders at Karlov Manor,15,normal,uncommon,1,91123,aee2945d-bf6d-4328-a482-df24c2973b56,0.06,false,false,near_mint,en,EUR
Perimeter Enforcer,MKM,Murders at Karlov Manor,31,normal,uncommon,1,90702,1f88d077-5082-4a67-91e4-97aafb9a5e91,0.02,false,false,near_mint,en,EUR
Neighborhood Guardian,MKM,Murders at Karlov Manor,26,normal,uncommon,1,90625,0438d482-b74c-4d5e-a2bc-7063c1ae73fa,0.06,false,false,near_mint,en,EUR
Forum Familiar,MKM,Murders at Karlov Manor,16,normal,uncommon,1,91131,b06a243d-acc8-42cd-926c-98a4cc96ab21,0.09,false,false,near_mint,en,EUR
Bill the Pony,LTR,The Lord of the Rings: Tales of Middle-earth,3,normal,uncommon,2,83328,9ac68519-ed7f-4f38-9549-c02975f88eed,0.07,false,false,near_mint,en,EUR
You Cannot Pass!,LTR,The Lord of the Rings: Tales of Middle-earth,38,normal,uncommon,2,82859,116d4030-acd2-4aa2-8254-aaaff1264459,0.04,false,false,near_mint,en,EUR
Teeming Dragonstorm,TDM,Tarkir: Dragonstorm,30,normal,uncommon,2,104563,3b9d771f-24dc-4ed6-8051-62df576a2ba5,0.04,false,false,near_mint,en,EUR
Discerning Financier,WOE,Wilds of Eldraine,10,normal,uncommon,2,85409,584774b5-640f-45e0-810b-f5faf119645b,0.07,false,false,near_mint,en,EUR
Starry-Eyed Skyrider,TDM,Tarkir: Dragonstorm,25,normal,uncommon,2,104624,4b3cc15e-1c82-454e-b541-4ab47c44814e,0.09,false,false,near_mint,en,EUR
"Landroval, Horizon Witness",LTR,The Lord of the Rings: Tales of Middle-earth,21,normal,uncommon,2,83089,5684483b-9a6a-499b-a5e1-e2815ee03cdb,0.06,false,false,near_mint,en,EUR
Wayspeaker Bodyguard,TDM,Tarkir: Dragonstorm,34,normal,uncommon,2,104676,5e5b2324-69fe-4105-b6f8-14dfbe359d59,0.09,false,false,near_mint,en,EUR
Tale of Tinúviel,LTR,The Lord of the Rings: Tales of Middle-earth,34,normal,uncommon,2,83330,9ae65f96-7bfd-4390-88bf-764c26bf4668,0.09,false,false,near_mint,en,EUR
Shire Shirriff,LTR,The Lord of the Rings: Tales of Middle-earth,30,normal,uncommon,2,83039,444b687f-2571-4c55-a497-d24b9e18bc0f,0.03,false,false,near_mint,en,EUR
Urbis Protector,CLU,Ravnica: Clue Edition,79,normal,uncommon,2,91024,8771abc9-e1f2-4d4f-8492-3209866cdc05,0.08,false,false,near_mint,en,EUR
Eerie Interference,WOE,Wilds of Eldraine,12,normal,uncommon,2,85364,42a74545-75c8-4a6b-bee1-ac5665d9bcf0,0.05,false,false,near_mint,en,EUR
Shrouded Shepherd // Cleave Shadows,WOE,Wilds of Eldraine,236,normal,uncommon,2,85644,ab03c342-2bf4-41bf-8bb8-472d978d238a,0.06,false,false,near_mint,en,EUR
Devouring Light,RVR,Ravnica Remastered,15,normal,uncommon,2,89845,a81a828b-e17e-4789-b73e-1f44a7f03e9f,0.04,false,false,near_mint,en,EUR
Knight of Doves,WOE,Wilds of Eldraine,19,normal,uncommon,2,85669,b4f33617-ad19-4d42-ab94-6f21a7fb3dd4,0.09,false,false,near_mint,en,EUR
Cursed Courtier,WOE,Wilds of Eldraine,9,normal,uncommon,1,85356,3d2d5a71-d6e1-4c96-9a53-0e370047a56e,0.02,false,false,near_mint,en,EUR
Woodland Acolyte // Mend the Wilds,WOE,Wilds of Eldraine,241,normal,uncommon,2,85687,b9f10623-4783-4773-b9c8-a5a2bcfdb5d9,0.09,false,false,near_mint,en,EUR
Mistral Charger,RVR,Ravnica Remastered,24,normal,uncommon,2,89811,97b4c2d1-ba84-4051-a2e2-5b9710a3823e,0.05,false,false,near_mint,en,EUR
Absolving Lammasu,MKM,Murders at Karlov Manor,2,normal,uncommon,2,91163,bd6e71a1-713e-4eca-bd65-9f0638c16794,0.03,false,false,near_mint,en,EUR
Case of the Gateway Express,MKM,Murders at Karlov Manor,8,normal,uncommon,2,90635,0862bf07-8a76-4e80-bba2-20d22f8eee30,0.1,false,false,near_mint,en,EUR
Case of the Pilfered Proof,MKM,Murders at Karlov Manor,9,normal,uncommon,2,90776,32927bf2-63c1-4402-99dc-3a0f2f8e0f9c,0.05,false,false,near_mint,en,EUR
Karlov Watchdog,MKM,Murders at Karlov Manor,20,normal,uncommon,2,90983,79cfb366-ae2a-4b3d-9a80-383a32db1509,0.06,false,false,near_mint,en,EUR
Cheeky House-Mouse // Squeak By,WOE,Wilds of Eldraine,7,normal,uncommon,3,85292,1f3013bf-9647-4bdb-a638-d299ae00f88e,0.13,false,false,near_mint,en,EUR
Food Coma,WOE,Wilds of Eldraine,308,normal,uncommon,4,85442,61ba2aed-3514-4db9-8da0-329620b12f63,0.11,false,false,near_mint,en,EUR
Gallant Pie-Wielder,WOE,Wilds of Eldraine,15,normal,uncommon,4,85779,e053d330-d0a2-4468-afba-42bf165b8fbf,0.04,false,false,near_mint,en,EUR
Sunhome Stalwart,CLU,Ravnica: Clue Edition,73,normal,uncommon,4,90815,3eb6a3ab-29eb-4c9a-995b-04de1c0dd4c9,0.05,false,false,near_mint,en,EUR
Convenient Target,MKM,Murders at Karlov Manor,305,normal,uncommon,1,91254,e11c0f62-80a0-4e45-9ed2-295814475a3f,0.1,false,false,near_mint,en,EUR
Expose the Culprit,MKM,Murders at Karlov Manor,307,normal,uncommon,1,91240,dbaae9b6-510f-4039-8cca-fe7d7c57f1c5,0.06,false,false,near_mint,en,EUR
Runescale Stormbrood // Chilling Screech,TDM,Tarkir: Dragonstorm,221,normal,uncommon,1,104533,317744d1-ed78-4b53-a4d8-8c7ecfd9c4ae,0.06,false,false,near_mint,en,EUR
Caught Red-Handed,MKM,Murders at Karlov Manor,115,normal,uncommon,1,91060,95bc5f89-2f01-40c4-9883-4c90ab89fcbb,0.05,false,false,near_mint,en,EUR
Éomer of the Riddermark,LTR,The Lord of the Rings: Tales of Middle-earth,121,normal,uncommon,1,83552,d920fcaf-4988-4186-962d-cdda25d79e7b,0.03,false,false,near_mint,en,EUR
Siege of Towers,RVR,Ravnica Remastered,123,normal,uncommon,1,89566,13bf0a97-2dcf-4d18-bb3f-92d0406c7b4b,0.03,false,false,near_mint,en,EUR
Book of Mazarbul,LTR,The Lord of the Rings: Tales of Middle-earth,116,normal,uncommon,1,82829,04dcef75-6f98-4233-ae32-6fe41724c8e0,0.05,false,false,near_mint,en,EUR
Concealed Weapon,MKM,Murders at Karlov Manor,117,normal,uncommon,1,90796,38e31fa6-a445-47c6-a73f-135087f6d760,0.04,false,false,near_mint,en,EUR
Bolrac-Clan Basher,MKM,Murders at Karlov Manor,112,normal,uncommon,1,91151,b87683f7-8a61-4e4a-8b8b-3bf812454096,0.03,false,false,near_mint,en,EUR
Case of the Burning Masks,MKM,Murders at Karlov Manor,113,normal,uncommon,1,90743,29ee07df-215f-45a6-9a5a-708143d73e45,0.03,false,false,near_mint,en,EUR
Cornered Crook,MKM,Murders at Karlov Manor,120,normal,uncommon,1,91092,a3aff1ea-1d25-49c3-a2d9-f435124a5969,0.02,false,false,near_mint,en,EUR
Equilibrium Adept,TDM,Tarkir: Dragonstorm,106,normal,uncommon,1,104335,a4ba6d74-c6be-4a5e-8859-b791bb6b8f51,0.03,false,false,near_mint,en,EUR
Harried Dronesmith,MKM,Murders at Karlov Manor,131,normal,uncommon,1,90787,36cb25ee-3c84-40a8-ba45-7e44893deecf,0.04,false,false,near_mint,en,EUR
"Erkenbrand, Lord of Westfold",LTR,The Lord of the Rings: Tales of Middle-earth,123,normal,uncommon,1,82999,38f81e68-cddd-47f4-b1d1-a297c3298c25,0.06,false,false,near_mint,en,EUR
Foray of Orcs,LTR,The Lord of the Rings: Tales of Middle-earth,128,normal,uncommon,1,83116,5fea0c66-c776-4dc7-a235-f3822521cacd,0.05,false,false,near_mint,en,EUR
"Fear, Fire, Foes!",LTR,The Lord of the Rings: Tales of Middle-earth,125,normal,uncommon,1,82995,37be98a4-0cba-46b4-be93-a9805fe77160,0.07,false,false,near_mint,en,EUR
Goblin Fireleaper,LTR,The Lord of the Rings: Tales of Middle-earth,133,normal,uncommon,1,83620,ec120dae-8c40-4053-9341-1f7774464634,0.03,false,false,near_mint,en,EUR
Iridescent Tiger,TDM,Tarkir: Dragonstorm,109,normal,uncommon,1,105170,e3abbc8b-2bf8-478e-a541-f8019d150054,0.03,false,false,near_mint,en,EUR
Korvold and the Noble Thief,WOE,Wilds of Eldraine,139,normal,uncommon,1,85636,a811b2cb-ffc7-4100-ac3e-bc4125842bb2,0.07,false,false,near_mint,en,EUR
Breaching Dragonstorm,TDM,Tarkir: Dragonstorm,101,normal,uncommon,1,105013,e2c2a069-7553-4879-abfb-b2aa3349e4b8,0.13,false,false,near_mint,en,EUR
Vengeful Tracker,MKM,Murders at Karlov Manor,147,normal,uncommon,1,91086,a247c9a0-0c65-47bc-92fd-bebe95cd35a3,0.06,false,false,near_mint,en,EUR
Homing Lightning,RVR,Ravnica Remastered,112,normal,uncommon,1,89523,00bca3e9-43c9-4647-8259-00580c0457ea,0.03,false,false,near_mint,en,EUR
Channeled Dragonfire,TDM,Tarkir: Dragonstorm,102,normal,uncommon,2,104499,24204881-690c-4043-8771-20cb93385072,0.05,false,false,near_mint,en,EUR
Frantic Scapegoat,MKM,Murders at Karlov Manor,126,normal,uncommon,2,91283,eb81e343-7242-44b1-9ce6-1dddd104f764,0.06,false,false,near_mint,en,EUR
Guttersnipe,RVR,Ravnica Remastered,110,normal,uncommon,2,89662,48eeb13e-26f8-4fc7-8850-d38790317ea4,0.22,false,false,near_mint,en,EUR
Knife,MKM,Murders at Karlov Manor,134,normal,uncommon,2,91148,b6883788-e1ee-4ddd-add2-24d6bc367717,0.04,false,false,near_mint,en,EUR
Boundary Lands Ranger,WOE,Wilds of Eldraine,123,normal,uncommon,2,85727,ccdcbb1d-702e-4832-8eed-7ed3deffefe3,0.03,false,false,near_mint,en,EUR
Hearth Elemental // Stoke Genius,WOE,Wilds of Eldraine,136,normal,uncommon,2,85641,a8f5f102-cc75-4cee-a117-4bdaaf86c2e9,0.08,false,false,near_mint,en,EUR
Twisted Fealty,WOE,Wilds of Eldraine,154,normal,uncommon,2,85347,382d6085-79b9-48f7-8949-9f44dde2c753,0.09,false,false,near_mint,en,EUR
Unsparing Boltcaster,TDM,Tarkir: Dragonstorm,130,normal,uncommon,2,104488,204f5e5e-d87f-4aee-84e3-28afe8e21591,0.04,false,false,near_mint,en,EUR
Two-Headed Hunter // Twice the Rage,WOE,Wilds of Eldraine,155,normal,uncommon,2,85481,70c12e75-7e65-4706-b976-e47835910928,0.04,false,false,near_mint,en,EUR
Belligerent of the Ball,WOE,Wilds of Eldraine,120,normal,uncommon,2,85460,6658398a-46a5-4f41-9b1b-4a47f2822cf8,0.03,false,false,near_mint,en,EUR
Reckless Detective,MKM,Murders at Karlov Manor,141,normal,uncommon,2,90682,18da1a1d-e6ba-47e5-a545-0bacd427b782,0.03,false,false,near_mint,en,EUR
"Grishnákh, Brash Instigator",LTR,The Lord of the Rings: Tales of Middle-earth,134,normal,uncommon,2,83136,6385e769-f805-499d-9f47-494533362152,0.04,false,false,near_mint,en,EUR
Torch the Witness,MKM,Murders at Karlov Manor,146,normal,uncommon,2,90718,22bbf709-d8e9-4e3b-8ec8-206f1b2162b3,0.04,false,false,near_mint,en,EUR
Stonesplitter Bolt,WOE,Wilds of Eldraine,151,normal,uncommon,2,85854,fb22f79c-3075-439d-a072-ceaabe35d76f,0.06,false,false,near_mint,en,EUR
War Effort,TDM,Tarkir: Dragonstorm,131,normal,uncommon,2,105007,dd7f0413-c009-4c08-b877-9c1b776cbf26,0.06,false,false,near_mint,en,EUR
Reverberating Summons,TDM,Tarkir: Dragonstorm,117,normal,uncommon,2,104475,1af19ce8-bc0c-420c-9e3b-9059b4df32cb,0.03,false,false,near_mint,en,EUR
"Gimli, Counter of Kills",LTR,The Lord of the Rings: Tales of Middle-earth,129,normal,uncommon,3,82948,28b41c48-0715-49d9-98e5-e82b706da816,0.07,false,false,near_mint,en,EUR
Demonfire,RVR,Ravnica Remastered,107,normal,uncommon,2,89982,f39020e2-86cf-4b7c-bcb8-23207291f9ee,0.1,false,false,near_mint,en,EUR
Tattered Ratter,WOE,Wilds of Eldraine,152,normal,uncommon,3,85335,30f505b4-d61c-4da8-ab45-37125260d556,0.05,false,false,near_mint,en,EUR
Stalking Vengeance,RVR,Ravnica Remastered,126,normal,uncommon,3,89599,22ab5c53-932e-465d-84b7-2c8263c835e9,0.15,false,false,near_mint,en,EUR
Bloodfray Giant,RVR,Ravnica Remastered,101,normal,uncommon,3,90000,fd353a11-4f3c-472b-b954-4427968c09cf,0.02,false,false,near_mint,en,EUR
Embereth Veteran,WOE,Wilds of Eldraine,127,normal,uncommon,4,85696,bc7130b8-3168-421f-912a-46ed5b769807,0.07,false,false,near_mint,en,EUR
Formation Breaker,TDM,Tarkir: Dragonstorm,143,normal,uncommon,3,105136,67ab8e8f-3ef6-4339-8c66-68c5aca4867a,0.03,false,false,near_mint,en,EUR
Gift of Strands,LTR,The Lord of the Rings: Tales of Middle-earth,170,normal,uncommon,2,83277,8c54ee0c-1432-4f20-9a92-2cdfcbab30ac,0.03,false,false,near_mint,en,EUR
Meriadoc Brandybuck,LTR,The Lord of the Rings: Tales of Middle-earth,177,normal,uncommon,2,83266,885a3277-ef10-4dcf-ac63-eb8971cd627c,0.06,false,false,near_mint,en,EUR
Greenbelt Radical,MKM,Murders at Karlov Manor,163,normal,uncommon,1,91029,88e62346-cc62-4938-970c-b56beeb79fa6,0.04,false,false,near_mint,en,EUR
Hedge Whisperer,MKM,Murders at Karlov Manor,165,normal,uncommon,1,90832,4627adcd-ace7-4777-a7e6-fc80ac6b9dfe,0.02,false,false,near_mint,en,EUR
Howling Galefang,WOE,Wilds of Eldraine,175,normal,uncommon,1,85537,86311523-d0eb-4db3-b586-8349de9c2d37,0.03,false,false,near_mint,en,EUR
Experiment One,RVR,Ravnica Remastered,137,normal,uncommon,1,89639,3b551403-47dd-4c2b-95c8-0e2e674d6fcf,0.13,false,false,near_mint,en,EUR
Rope,MKM,Murders at Karlov Manor,173,normal,uncommon,1,90931,6881946c-5036-4d9f-926f-932c9a592aff,0.06,false,false,near_mint,en,EUR
Case of the Trampled Garden,MKM,Murders at Karlov Manor,156,normal,uncommon,1,91076,9e80f5c7-ae29-473c-ac64-04bcbc629385,0.06,false,false,near_mint,en,EUR
Intrepid Trufflesnout // Go Hog Wild,WOE,Wilds of Eldraine,320,normal,uncommon,1,85363,4224747e-1dbc-4a29-b5da-5916d8ca2768,0.09,false,false,near_mint,en,EUR
Get a Leg Up,MKM,Murders at Karlov Manor,161,normal,uncommon,1,90786,34e61e0f-d0f3-492a-92f1-36f72a91583a,0.04,false,false,near_mint,en,EUR
Sample Collector,MKM,Murders at Karlov Manor,175,normal,uncommon,1,90976,76f7480c-82cc-4ddd-b619-c1a609c29a13,0.02,false,false,near_mint,en,EUR
Fungal Rebirth,CLU,Ravnica: Clue Edition,163,normal,uncommon,1,90868,52abf994-78d6-40dd-9d43-19ae8176e3bd,0.15,false,false,near_mint,en,EUR
Glint Weaver,MKM,Murders at Karlov Manor,162,normal,uncommon,1,91203,c8eff4d0-67ad-4900-b33d-605659b59161,0.07,false,false,near_mint,en,EUR
Sage of the Fang,TDM,Tarkir: Dragonstorm,155,normal,uncommon,1,105123,1ebf4a9d-d90c-4017-9f00-fca89899f301,0.05,false,false,near_mint,en,EUR
Dúnedain Rangers,LTR,The Lord of the Rings: Tales of Middle-earth,159,normal,uncommon,1,83133,630e1e36-2f5d-44d4-9ff2-19ae75295016,0.04,false,false,near_mint,en,EUR
Knockout Maneuver,TDM,Tarkir: Dragonstorm,147,normal,uncommon,1,105149,9d218831-2a41-46a3-8e9d-93462cae5cab,0.03,false,false,near_mint,en,EUR
Inspirited Vanguard,TDM,Tarkir: Dragonstorm,146,normal,uncommon,1,105165,c642d6ac-f0f0-4b4c-a7ee-50631531f6d1,0.04,false,false,near_mint,en,EUR
Wurmweaver Coil,RVR,Ravnica Remastered,161,normal,uncommon,1,89634,37a71160-aa29-4662-8d7b-590771b42635,0.06,false,false,near_mint,en,EUR
Flourishing Bloom-Kin,MKM,Murders at Karlov Manor,160,normal,uncommon,1,90911,5ddcb31e-9301-44f1-b138-0573fbf56a47,0.08,false,false,near_mint,en,EUR
Provisions Merchant,WOE,Wilds of Eldraine,321,normal,uncommon,1,85610,a015282d-bcd4-44ab-ae26-41e4e3b23fc0,0.13,false,false,near_mint,en,EUR
Tempest Hart // Scan the Clouds,WOE,Wilds of Eldraine,238,normal,uncommon,1,85401,559bacc8-facc-4d93-90b5-8ac21d3246f5,0.05,false,false,near_mint,en,EUR
Hard-Hitting Question,MKM,Murders at Karlov Manor,164,normal,uncommon,1,91036,8ad807c2-14a7-4464-bf57-c323fb3c0bd0,0.11,false,false,near_mint,en,EUR
Encroaching Dragonstorm,TDM,Tarkir: Dragonstorm,142,normal,uncommon,1,104630,4ddd4477-f8c9-4d05-9177-f8344ba8f40b,0.09,false,false,near_mint,en,EUR
Rite of Renewal,TDM,Tarkir: Dragonstorm,153,normal,uncommon,1,104390,f737698a-d934-4851-b238-828959ef4835,0.03,false,false,near_mint,en,EUR
Shortcut to Mushrooms,LTR,The Lord of the Rings: Tales of Middle-earth,187,normal,uncommon,1,82870,13bc14f9-c90c-499d-9024-3182d78e0a88,0.04,false,false,near_mint,en,EUR
Loaming Shaman,RVR,Ravnica Remastered,149,normal,uncommon,1,89985,f5226787-e2c0-4ce2-903c-6c0797420f99,0.23,false,false,near_mint,en,EUR
Synchronized Charge,TDM,Tarkir: Dragonstorm,162,normal,uncommon,1,104484,1f721f8d-fd2f-480b-8645-4bf6ce38dde9,0.06,false,false,near_mint,en,EUR
Dragonbroods' Relic,TDM,Tarkir: Dragonstorm,140,normal,uncommon,1,104569,3d634087-77ba-4543-aa7a-8a3774d69cd7,0.09,false,false,near_mint,en,EUR
Chalk Outline,MKM,Murders at Karlov Manor,157,normal,uncommon,1,91139,b3ff56c1-4153-4e15-9ac6-06d93fa2ae50,0.11,false,false,near_mint,en,EUR
Overwhelm,RVR,Ravnica Remastered,152,normal,uncommon,1,89582,19384be7-d746-4927-adb4-ad521e8a8dd5,0.03,false,false,near_mint,en,EUR
"Glorfindel, Dauntless Rescuer",LTR,The Lord of the Rings: Tales of Middle-earth,171,normal,uncommon,2,83444,baf7a546-8a8b-4396-ab64-9a5b9abffe79,0.05,false,false,near_mint,en,EUR
"Quickbeam, Upstart Ent",LTR,The Lord of the Rings: Tales of Middle-earth,183,normal,uncommon,2,83434,b889037f-b95f-4756-80aa-04097d2818c3,0.05,false,false,near_mint,en,EUR
Stew the Coneys,LTR,The Lord of the Rings: Tales of Middle-earth,189,normal,uncommon,2,83455,bcc7c41c-f416-457e-91ba-1f338f45eeac,0.06,false,false,near_mint,en,EUR
Tough Cookie,WOE,Wilds of Eldraine,193,normal,uncommon,2,85513,7aa37f85-5336-4372-97a2-9c8b00798c7a,0.11,false,false,near_mint,en,EUR
Welcome to Sweettooth,WOE,Wilds of Eldraine,198,normal,uncommon,2,85560,8e629a31-2e06-4f95-9628-34670dcf68b9,0.09,false,false,near_mint,en,EUR
Gingerbread Hunter // Puny Snack,WOE,Wilds of Eldraine,227,normal,uncommon,2,85798,e77a8fd4-af5f-42b3-a87e-788baf2562dd,0.04,false,false,near_mint,en,EUR
Stormkeld Vanguard // Bear Down,WOE,Wilds of Eldraine,187,normal,uncommon,2,85692,bacb1fe5-0adf-461f-b698-9d09a8728c63,0.09,false,false,near_mint,en,EUR
Culvert Ambusher,MKM,Murders at Karlov Manor,158,normal,uncommon,2,90756,2ccdc58b-1e7e-402c-88f9-c789ff1dae31,0.03,false,false,near_mint,en,EUR
Celeborn the Wise,LTR,The Lord of the Rings: Tales of Middle-earth,156,normal,uncommon,2,82959,2daf449a-5f3e-44fd-968e-55d8517ae797,0.04,false,false,near_mint,en,EUR
A Killer Among Us,MKM,Murders at Karlov Manor,167,normal,uncommon,2,90750,2c1392c5-91a5-4e6e-803d-ed032e4d594b,0.04,false,false,near_mint,en,EUR
Attuned Hunter,TDM,Tarkir: Dragonstorm,135,normal,uncommon,2,104977,d1a4f502-86a9-49fb-9cb9-7918d13c5313,0.03,false,false,near_mint,en,EUR
Peregrin Took,LTR,The Lord of the Rings: Tales of Middle-earth,181,normal,uncommon,2,83648,f5baee8d-88e7-4468-94a9-66ca8e2caf15,0.35,false,false,near_mint,en,EUR
Graceful Takedown,WOE,Wilds of Eldraine,171,normal,uncommon,2,85528,83edf626-ed34-417f-818d-597ecf439167,0.03,false,false,near_mint,en,EUR
Tanglespan Lookout,WOE,Wilds of Eldraine,188,normal,uncommon,2,85352,3bc5c32d-be0a-4a5f-a8c7-9767a895bc76,0.05,false,false,near_mint,en,EUR
Pompous Gadabout,MKM,Murders at Karlov Manor,171,normal,uncommon,2,90946,6d803b93-c1df-4a02-9dbb-d347c841d4d7,0.03,false,false,near_mint,en,EUR
Redtooth Vanguard,WOE,Wilds of Eldraine,180,normal,uncommon,2,85400,55271960-b9bd-4bea-93ca-3321bf30be78,0.03,false,false,near_mint,en,EUR
Disruptive Stormbrood // Petty Revenge,TDM,Tarkir: Dragonstorm,178,normal,uncommon,2,104920,bd78e8ae-e927-40e7-9580-966c5e81f53c,0.12,false,false,near_mint,en,EUR
Frilled Mystic,RVR,Ravnica Remastered,183,normal,uncommon,3,89702,5bf655ce-c841-42b2-9578-56ab401bf4de,0.08,false,false,near_mint,en,EUR
Boros Guildmage,RVR,Ravnica Remastered,168,normal,uncommon,3,89651,4355130c-bfaa-4799-9d70-dbfd32e39f7e,0.09,false,false,near_mint,en,EUR
Putrefy,OTC,Outlaws of Thunder Junction Commander,238,normal,uncommon,3,93688,6fcc6bf7-ccce-4975-be8b-0790ab790e3f,0.11,false,false,near_mint,en,EUR
Jeskai Shrinekeeper,TDM,Tarkir: Dragonstorm,197,normal,uncommon,3,104722,6ec8fa0b-c695-4326-aebd-042cb1974925,0.05,false,false,near_mint,en,EUR
Effortless Master,TDM,Tarkir: Dragonstorm,181,normal,uncommon,3,104441,0ae03ca5-cd4b-42b7-8cd5-3f7e753b4147,0.04,false,false,near_mint,en,EUR
"Shadowfax, Lord of Horses",LTR,The Lord of the Rings: Tales of Middle-earth,227,normal,uncommon,3,83062,4c7d861d-7832-4c15-8d6c-8c07a9a57891,0.06,false,false,near_mint,en,EUR
Marshal of the Lost,TDM,Tarkir: Dragonstorm,207,normal,uncommon,3,104304,64fbaa16-67c3-4ed2-9545-39abbbde61dc,0.05,false,false,near_mint,en,EUR
Riverwheel Sweep,TDM,Tarkir: Dragonstorm,219,normal,uncommon,3,104706,686fe623-ee50-407d-87c9-664fb039f4d9,0.05,false,false,near_mint,en,EUR
Shadow Summoning,LTR,The Lord of the Rings: Tales of Middle-earth,226,normal,uncommon,3,83619,ec0984b2-bed6-41b1-9087-2cfd16749037,0.04,false,false,near_mint,en,EUR
Friendly Rivalry,LTR,The Lord of the Rings: Tales of Middle-earth,204,normal,uncommon,3,82930,24076763-88ba-4dee-b548-9c27bd34fdb7,0.06,false,false,near_mint,en,EUR
Sky Hussar,RVR,Ravnica Remastered,224,normal,uncommon,3,89904,cccfd565-99db-4c24-a16d-665b0823a159,0.09,false,false,near_mint,en,EUR
Golgari Guildmage,CLU,Ravnica: Clue Edition,194,normal,uncommon,3,90783,342ad189-b221-493c-b2c1-73b63246ab47,0.12,false,false,near_mint,en,EUR
Selesnya Evangel,RVR,Ravnica Remastered,220,normal,uncommon,3,89620,2d929bda-150c-484a-910e-eee19297c77e,0.07,false,false,near_mint,en,EUR
Nightveil Predator,RVR,Ravnica Remastered,206,normal,uncommon,3,89747,72efc1ee-3583-4814-beaa-bbee709275e6,0.11,false,false,near_mint,en,EUR
Golgari Findbroker,RVR,Ravnica Remastered,187,normal,uncommon,4,89967,eb6104f6-127f-4ab8-94bb-d98783ecb377,0.08,false,false,near_mint,en,EUR
Sunder Shaman,RVR,Ravnica Remastered,230,normal,uncommon,4,89701,5baeb29b-5462-4692-ba26-844d2952f77f,0.09,false,false,near_mint,en,EUR
Sharae of Numbing Depths,WOE,Wilds of Eldraine,213,normal,uncommon,1,85435,600bc36a-3ef0-459c-9a93-94ec45b8c3d9,0.09,false,false,near_mint,en,EUR
Izzet Guildmage,RVR,Ravnica Remastered,191,normal,uncommon,2,89678,5058ac2d-7b16-4b1c-acdd-e328bc5adc1a,0.11,false,false,near_mint,en,EUR
Sharktocrab,RVR,Ravnica Remastered,222,normal,uncommon,2,89969,ec7933b5-15de-4ed7-af0c-626f81726338,0.09,false,false,near_mint,en,EUR
Crackling Drake,RVR,Ravnica Remastered,174,normal,uncommon,2,89748,73957e3b-504d-4ac7-a69c-0b81cb9af402,0.09,false,false,near_mint,en,EUR
Gruul Guildmage,RVR,Ravnica Remastered,189,normal,uncommon,2,89767,80c29287-d32e-4f7d-8602-240921314804,0.04,false,false,near_mint,en,EUR
Sphinx of New Prahv,RVR,Ravnica Remastered,227,normal,uncommon,2,89798,8e858971-4084-47cc-8b13-a933891456b6,0.05,false,false,near_mint,en,EUR
"Bilbo, Retired Burglar",LTR,The Lord of the Rings: Tales of Middle-earth,196,normal,uncommon,2,83077,527df93e-cc2b-4216-909a-4ada1abcbfd3,0.08,false,false,near_mint,en,EUR
Frodo Baggins,LTR,The Lord of the Rings: Tales of Middle-earth,205,normal,uncommon,2,83576,de1c0399-9db8-4901-b72e-0010eb9b92b0,0.08,false,false,near_mint,en,EUR
"Butterbur, Bree Innkeeper",LTR,The Lord of the Rings: Tales of Middle-earth,197,normal,uncommon,2,83640,f3fd9ff1-278b-4e6a-b30b-90250d8b5762,0.05,false,false,near_mint,en,EUR
"Théoden, King of Rohan",LTR,The Lord of the Rings: Tales of Middle-earth,233,normal,uncommon,2,83654,f6dcd1ca-4943-46e4-bb5d-c14949e21e23,0.07,false,false,near_mint,en,EUR
"Legolas, Counter of Kills",LTR,The Lord of the Rings: Tales of Middle-earth,212,normal,uncommon,2,83496,c8bd408c-9e6d-436d-9c4f-9ef3203aeb64,0.09,false,false,near_mint,en,EUR
Gwaihir the Windlord,LTR,The Lord of the Rings: Tales of Middle-earth,210,normal,uncommon,2,82897,1a42c951-1146-4f49-a690-7d385962b191,0.09,false,false,near_mint,en,EUR
"Syr Armont, the Redeemer",WOE,Wilds of Eldraine,214,normal,uncommon,2,85533,85050609-baf0-430a-ab33-83a6ea6d4741,0.08,false,false,near_mint,en,EUR
"Johann, Apprentice Sorcerer",WOE,Wilds of Eldraine,207,normal,uncommon,2,85681,b88a762d-19ed-451d-a3a9-b3e7eea40f67,0.07,false,false,near_mint,en,EUR
Arwen Undómiel,LTR,The Lord of the Rings: Tales of Middle-earth,194,normal,uncommon,2,83484,c544e301-13b4-4dec-b65c-d54809bb7736,0.07,false,false,near_mint,en,EUR
"Denethor, Ruling Steward",LTR,The Lord of the Rings: Tales of Middle-earth,198,normal,uncommon,2,83669,fa8654cf-431c-427b-b78f-0e48f6007e9e,0.09,false,false,near_mint,en,EUR
Old Man Willow,LTR,The Lord of the Rings: Tales of Middle-earth,217,normal,uncommon,2,82826,0362b7c4-fff5-4bc2-b32d-913f85c23cc4,0.05,false,false,near_mint,en,EUR
Buried in the Garden,MKM,Murders at Karlov Manor,191,normal,uncommon,2,90999,7e144609-e1f6-4bdc-8d14-b735ef4140d3,0.06,false,false,near_mint,en,EUR
"Totentanz, Swarm Piper",WOE,Wilds of Eldraine,216,normal,uncommon,2,85267,1422d6db-fe5b-4a89-951a-fbd7985a29fc,0.11,false,false,near_mint,en,EUR
Sumala Sentry,MKM,Murders at Karlov Manor,233,normal,uncommon,2,90803,3b9d4691-59d1-4e97-9b5d-8017788fbcb3,0.04,false,false,near_mint,en,EUR
Mammoth Bellow,TDM,Tarkir: Dragonstorm,205,normal,uncommon,2,104599,468b17b4-79ce-4dfa-8873-a9cfc347e38f,0.03,false,false,near_mint,en,EUR
Frontline Rush,TDM,Tarkir: Dragonstorm,186,normal,uncommon,2,104520,2ce8a205-99d6-4a9c-83a7-18b7220177d3,0.15,false,false,near_mint,en,EUR
Lie in Wait,TDM,Tarkir: Dragonstorm,203,normal,uncommon,2,104819,96fff22c-282b-4849-82ce-890013b53262,0.06,false,false,near_mint,en,EUR
Kin-Tree Severance,TDM,Tarkir: Dragonstorm,200,normal,uncommon,2,104896,b577e246-3377-42aa-856e-b9fa89f3603a,0.05,false,false,near_mint,en,EUR
Karakyk Guardian,TDM,Tarkir: Dragonstorm,198,normal,uncommon,2,104859,a4c77b08-c3f6-4458-8636-f226f9843b6d,0.05,false,false,near_mint,en,EUR
The Mouth of Sauron,LTR,The Lord of the Rings: Tales of Middle-earth,216,normal,uncommon,2,83201,76a88814-aa30-4297-b338-3d851bfe7256,0.07,false,false,near_mint,en,EUR
Cease // Desist,MKM,Murders at Karlov Manor,246,normal,uncommon,1,91208,cb59130a-a134-4383-b983-e4b526d11fb4,0.12,false,false,near_mint,en,EUR
Fuss // Bother,MKM,Murders at Karlov Manor,248,normal,uncommon,1,90731,269a031e-0b89-40e1-b11b-ae870d72161c,0.04,false,false,near_mint,en,EUR
Gleaming Geardrake,MKM,Murders at Karlov Manor,205,normal,uncommon,1,91205,cabb5875-42ff-4e3a-a32e-aab392fccff8,0.07,false,false,near_mint,en,EUR
Wispdrinker Vampire,MKM,Murders at Karlov Manor,243,normal,uncommon,1,91091,a3490c05-d12c-4483-acbc-1b4ae68877f0,0.15,false,false,near_mint,en,EUR
Private Eye,MKM,Murders at Karlov Manor,223,normal,uncommon,1,91150,b6a50807-058e-45dc-847c-8ffd13b1bd48,0.05,false,false,near_mint,en,EUR
"Troyan, Gutsy Explorer",WOE,Wilds of Eldraine,217,normal,uncommon,1,85807,eadd2a1a-93a0-4257-897d-1aaee279449f,0.06,false,false,near_mint,en,EUR
Cartel Aristocrat,RVR,Ravnica Remastered,170,normal,uncommon,1,89951,e2dec477-5764-4c0c-bb10-42d64ad2103e,0.09,false,false,near_mint,en,EUR
Izzet Charm,RVR,Ravnica Remastered,190,normal,uncommon,1,89572,15af0592-a1cb-4b1e-b051-dde978939706,0.2,false,false,near_mint,en,EUR
Rakdos Guildmage,RVR,Ravnica Remastered,214,normal,uncommon,1,89996,fb3271d0-4788-4ecc-abf7-95a1e8106d0c,0.03,false,false,near_mint,en,EUR
Azorius Guildmage,RVR,Ravnica Remastered,165,normal,uncommon,1,89612,288c751e-a042-45a9-adce-7001bb0ce512,0.1,false,false,near_mint,en,EUR
Truefire Captain,RVR,Ravnica Remastered,235,normal,uncommon,1,89972,eddcf0fd-bcbb-4ce9-ab94-9d4b81c0222d,0.12,false,false,near_mint,en,EUR
Rakdos Firewheeler,RVR,Ravnica Remastered,213,normal,uncommon,1,89889,c413daa1-5996-488a-ad97-0964336618e3,0.03,false,false,near_mint,en,EUR
Selesnya Guildmage,CLU,Ravnica: Clue Edition,207,normal,uncommon,1,91058,954b8e86-284a-4a6f-ac35-896afd414f8a,0.1,false,false,near_mint,en,EUR
Orzhov Guildmage,CLU,Ravnica: Clue Edition,201,normal,uncommon,1,90912,5eb5c82b-71aa-4c94-bda0-3e5abe10ea67,0.08,false,false,near_mint,en,EUR
Sonic Shrieker,TDM,Tarkir: Dragonstorm,226,normal,uncommon,1,104757,7c231437-8bec-42e0-9175-af74c752b119,0.07,false,false,near_mint,en,EUR
Armament Dragon,TDM,Tarkir: Dragonstorm,168,normal,uncommon,1,104469,17f61c01-0a41-4fa1-ac34-ffa83baad989,0.04,false,false,near_mint,en,EUR
Uglúk of the White Hand,LTR,The Lord of the Rings: Tales of Middle-earth,235,normal,uncommon,1,83610,e914c7fc-be3c-4346-bf37-6e10f4998204,0.06,false,false,near_mint,en,EUR
Prince Imrahil the Fair,LTR,The Lord of the Rings: Tales of Middle-earth,219,normal,uncommon,1,83216,7d486def-7c3f-41e9-bb28-4582450a7b9e,0.06,false,false,near_mint,en,EUR
"Strider, Ranger of the North",LTR,The Lord of the Rings: Tales of Middle-earth,232,normal,uncommon,1,83081,54461d61-a745-467f-9fbe-b5e7a8edbdbf,0.06,false,false,near_mint,en,EUR
"Mauhúr, Uruk-hai Captain",LTR,The Lord of the Rings: Tales of Middle-earth,214,normal,uncommon,1,83145,65e9a757-7ed4-4cc0-bb6f-a59fa69b32a5,0.1,false,false,near_mint,en,EUR
"Neva, Stalked by Nightmares",WOE,Wilds of Eldraine,209,normal,uncommon,1,85795,e6f925ab-ade7-4da8-a791-185e098d18f2,0.05,false,false,near_mint,en,EUR
Gandalf's Sanction,LTR,The Lord of the Rings: Tales of Middle-earth,208,normal,uncommon,1,83286,8ebf2a25-9bee-4146-af83-f22aab6db2a8,0.06,false,false,near_mint,en,EUR
Jeskai Brushmaster,TDM,Tarkir: Dragonstorm,195,normal,uncommon,1,104526,2eb06c36-cf7e-47a9-819e-adfc54284153,0.04,false,false,near_mint,en,EUR
Host of the Hereafter,TDM,Tarkir: Dragonstorm,193,normal,uncommon,1,104448,0f182957-8133-45a7-80a3-1944bead4d43,0.07,false,false,near_mint,en,EUR
Glacial Dragonhunt,TDM,Tarkir: Dragonstorm,188,normal,uncommon,1,104814,95994c88-e404-4a4f-8be6-b99d703d4609,0.13,false,false,near_mint,en,EUR
Wispdrinker Vampire,MKM,Murders at Karlov Manor,374,normal,uncommon,1,90970,74463d05-3928-4d55-84d4-21d65623a3e6,0.1,false,false,near_mint,en,EUR
Soul Search,MKM,Murders at Karlov Manor,232,normal,uncommon,1,90665,0f852937-381d-4445-99d3-2ecb8af6bb6a,0.04,false,false,near_mint,en,EUR
Curious Cadaver,MKM,Murders at Karlov Manor,194,normal,uncommon,1,90737,2893aef8-835d-4935-b532-d8670585e489,0.03,false,false,near_mint,en,EUR
Rune-Brand Juggler,MKM,Murders at Karlov Manor,229,normal,uncommon,1,90867,5288cf17-9d79-4d35-85f1-bf4d0a73494b,0.03,false,false,near_mint,en,EUR
Evidence Examiner,MKM,Murders at Karlov Manor,201,normal,uncommon,1,91310,f53a6ee7-86e1-4d2d-994c-214e0ec08dad,0.03,false,false,near_mint,en,EUR
Detective's Satchel,MKM,Murders at Karlov Manor,196,normal,uncommon,1,90749,2c05bf2d-7d4f-4717-b1ea-ec4284854f4f,0.07,false,false,near_mint,en,EUR
Meddling Youths,MKM,Murders at Karlov Manor,219,normal,uncommon,1,91125,af12417c-b082-4379-a850-c72e2652c6fb,0.04,false,false,near_mint,en,EUR
Coerced to Kill,MKM,Murders at Karlov Manor,311,normal,uncommon,1,90905,5c9c1153-93d6-4250-bc42-2d9fd3042e55,0.09,false,false,near_mint,en,EUR
Deadly Complication,MKM,Murders at Karlov Manor,312,normal,uncommon,1,90816,3f1aaebc-105a-4867-9727-24b8d7899e28,0.09,false,false,near_mint,en,EUR
Kraul Whipcracker,MKM,Murders at Karlov Manor,364,normal,uncommon,1,90642,0a70bb7a-ba29-4fa5-b5f7-e2c71ca7df6f,0.05,false,false,near_mint,en,EUR
Lumbering Laundry,MKM,Murders at Karlov Manor,253,normal,uncommon,1,90632,080ad039-1669-4735-9864-76f4c61fc59e,0.02,false,false,near_mint,en,EUR
Ent-Draught Basin,LTR,The Lord of the Rings: Tales of Middle-earth,238,normal,uncommon,1,82875,1500126f-fbe4-4c39-bb06-1a36e2c4682f,0.03,false,false,near_mint,en,EUR
Jeskai Monument,TDM,Tarkir: Dragonstorm,244,normal,uncommon,1,104362,d0193ad6-39b7-4558-bd3e-36f809332ea2,0.03,false,false,near_mint,en,EUR
Sultai Monument,TDM,Tarkir: Dragonstorm,247,normal,uncommon,1,104279,45308e0e-b515-49ac-9960-a24e898dd321,0.05,false,false,near_mint,en,EUR
Mardu Monument,TDM,Tarkir: Dragonstorm,245,normal,uncommon,1,104328,9bd0c794-77bc-4d4a-a769-3829e2ce4bdf,0.03,false,false,near_mint,en,EUR
Temur Monument,TDM,Tarkir: Dragonstorm,248,normal,uncommon,1,104295,55e97b40-d898-4da5-8159-cca48eb298eb,0.03,false,false,near_mint,en,EUR
Junktroller,RVR,Ravnica Remastered,262,normal,uncommon,1,89571,14dcae36-a1a7-4fe2-a1ef-974ca1558a7f,0.09,false,false,near_mint,en,EUR
Silent Dart,RVR,Ravnica Remastered,268,normal,uncommon,1,89986,f59521a1-07c4-47a6-8b2f-8a2d8338a58c,0.03,false,false,near_mint,en,EUR
Case of the Shattered Pact,MKM,Murders at Karlov Manor,1,normal,uncommon,1,90745,2a70f0ae-d49b-4cc8-9f76-895039c3dc39,0.08,false,false,near_mint,en,EUR
Magnetic Snuffler,MKM,Murders at Karlov Manor,254,normal,uncommon,2,90958,70476534-2fc7-4872-a009-3380dd5ce2ab,0.09,false,false,near_mint,en,EUR
Gate Colossus,FDN,Foundations,675,normal,uncommon,2,101068,bc49d9cb-8c7a-4a8f-96ea-bbe6ade8ae00,0.11,false,false,near_mint,en,EUR
Three Bowls of Porridge,WOE,Wilds of Eldraine,253,normal,uncommon,2,85624,a508e040-d1e5-46aa-8404-1adc18f0f8bd,0.08,false,false,near_mint,en,EUR
Mirror of Galadriel,LTR,The Lord of the Rings: Tales of Middle-earth,244,normal,uncommon,2,83454,bc95036f-98f2-4ea7-93bb-542ad7064540,0.09,false,false,near_mint,en,EUR
Barrow-Blade,LTR,The Lord of the Rings: Tales of Middle-earth,237,normal,uncommon,2,83629,f0eb7284-78a5-4b5e-8f6d-6be540e0bef8,0.14,false,false,near_mint,en,EUR
Abzan Monument,TDM,Tarkir: Dragonstorm,238,normal,uncommon,2,104363,d2da9024-3b58-4a57-8f7d-4094c193daee,0.04,false,false,near_mint,en,EUR
Civic Saber,RVR,Ravnica Remastered,254,normal,uncommon,3,89917,d222eb30-9ebc-4197-bbe4-678512d960d1,0.05,false,false,near_mint,en,EUR
Voyager Staff,RVR,Ravnica Remastered,271,normal,uncommon,3,89793,8b9533a8-6ee3-493c-b211-5a1bc2b31ec8,0.14,false,false,near_mint,en,EUR 
Name,Set code,Set name,Collector number,Foil,Rarity,Quantity,ManaBox ID,Scryfall ID,Purchase price,Misprint,Altered,Condition,Language,Purchase price currency
Imprisoned in the Moon,INR,Innistrad Remastered,69,normal,common,1,102416,0d150547-09f5-45ce-a825-89944b066bd4,0.14,false,false,near_mint,en,EUR
Ecstatic Awakener // Awoken Demon,INR,Innistrad Remastered,107,normal,common,1,102716,abd587d8-2f71-4b3c-960a-d362133e967b,0.02,false,false,near_mint,en,EUR
Forbidden Alchemy,TDC,Tarkir: Dragonstorm Commander,152,normal,common,1,104432,04def7e3-10e4-4733-8c19-8fa6e4469086,0.08,false,false,near_mint,en,EUR
Runebound Wolf,INR,Innistrad Remastered,168,normal,uncommon,1,102666,8e220cc1-e13f-48da-b59b-91a556829ea5,0.05,false,false,near_mint,en,EUR
Niblis of the Urn,INR,Innistrad Remastered,35,normal,uncommon,1,102454,1ffd406d-92d3-47f1-8887-853958fd464e,0.08,false,false,near_mint,en,EUR
Maelstrom Pulse,INR,Innistrad Remastered,244,normal,rare,1,102577,66f17263-b916-40f4-b175-fcfd5630103d,0.23,false,false,near_mint,en,EUR
Village Rites,INR,Innistrad Remastered,137,normal,common,1,102519,42ed35e9-51cd-468a-86a9-9412553cf50d,0.2,false,false,near_mint,en,EUR
Geistcatcher's Rig,INR,Innistrad Remastered,264,normal,uncommon,1,102415,0b8f741c-919e-457d-8a02-c7282c1305ec,0.03,false,false,near_mint,en,EUR
Traveler's Amulet,INR,Innistrad Remastered,273,normal,common,1,102467,26a7e5f0-0d60-4118-ad10-b27c7382511a,0.07,false,false,near_mint,en,EUR
Stitched Mangler,INR,Innistrad Remastered,87,normal,common,1,102825,e90cb0f1-d6fa-4a73-83bb-8870e59b1d7d,0.03,false,false,near_mint,en,EUR
Dauntless Cathar,INR,Innistrad Remastered,19,normal,common,1,102745,b680d42c-8198-43b0-b934-2add08a02bbc,0.02,false,false,near_mint,en,EUR
Spore Crawler,INR,Innistrad Remastered,218,normal,common,1,102702,a2a37c40-6d33-4e32-ab7b-4a7c2d10b757,0.03,false,false,near_mint,en,EUR
Hungry Ridgewolf,INR,Innistrad Remastered,160,normal,common,1,102611,770fc080-ac42-4a5a-846f-6e49b4aaf4ba,0.03,false,false,near_mint,en,EUR
Murderous Compulsion,INR,Innistrad Remastered,126,normal,common,1,102563,5fca1faf-bd47-45cd-a2d9-b2efbc75cbb5,0.02,false,false,near_mint,en,EUR
Guardian of Pilgrims,INR,Innistrad Remastered,26,foil,common,1,102852,f87b5e18-d1a9-424b-bec5-6a80f7699600,0.03,false,false,near_mint,en,EUR
Laboratory Maniac,INR,Innistrad Remastered,71,normal,uncommon,1,102624,7a5be94c-08b8-4964-a79d-e22ea6e94be8,0.75,false,false,near_mint,en,EUR
Sever the Bloodline,INR,Innistrad Remastered,130,normal,uncommon,1,102703,a2d4152d-c128-453c-86f5-f2ebcfd48b98,0.04,false,false,near_mint,en,EUR
Scorned Villager // Moonscarred Werewolf,INR,Innistrad Remastered,212,normal,common,1,102836,ee539a5e-2d10-4666-9b52-5064562dd233,0.03,false,false,near_mint,en,EUR
Bound by Moonsilver,INR,Innistrad Remastered,13,normal,common,1,102573,647f5c2f-3ced-4397-a366-6f0e57582566,0.03,false,false,near_mint,en,EUR
Tower Geist,INR,Innistrad Remastered,93,normal,common,1,102652,88523d44-4469-4685-8f59-dbcf255e7fe0,0.02,false,false,near_mint,en,EUR
Crawl from the Cellar,INR,Innistrad Remastered,102,normal,common,1,102619,79563dd1-640c-4ebd-a347-0b71439b79d3,0.04,false,false,near_mint,en,EUR
Ancestral Anger,INR,Innistrad Remastered,141,normal,common,1,102837,eeaca66d-23bd-4e8f-8d4a-c5864dd447be,0.06,false,false,near_mint,en,EUR
Bloodmad Vampire,INR,Innistrad Remastered,145,normal,common,1,102662,8a9747c1-ef2c-4c61-9529-abfb6ae0f964,0.03,false,false,near_mint,en,EUR
Villagers of Estwald // Howlpack of Estwald,INR,Innistrad Remastered,224,normal,common,1,102480,319b65f6-a6e6-45ea-9837-bc5831f54205,0.02,false,false,near_mint,en,EUR
Graf Rats,INR,Innistrad Remastered,113,normal,uncommon,1,101894,f830ede6-ddbf-49b9-80cd-e3dbeccbf208,0.07,false,false,near_mint,en,EUR
Butcher's Cleaver,INR,Innistrad Remastered,256,normal,uncommon,1,102505,3c55bce1-8746-4554-9876-f443c37a125b,0.05,false,false,near_mint,en,EUR
Ghoulish Procession,INR,Innistrad Remastered,110,normal,uncommon,1,102760,c178227f-3b66-45f7-9838-dff70f1f2003,0.2,false,false,near_mint,en,EUR
Vanquish the Horde,INR,Innistrad Remastered,49,normal,rare,1,102584,68dea60e-1bd9-4fb5-bb0c-668dfa9b1eee,0.72,false,false,near_mint,en,EUR
Mayor of Avabruck // Howlpack Alpha,INR,Innistrad Remastered,207,normal,rare,1,102839,ef84540b-a132-4169-b3c0-b0edeb395c9b,0.24,false,false,near_mint,en,EUR
Olivia Voldaren,INR,Innistrad Remastered,246,foil,mythic,1,102549,561d616c-df11-4144-acec-f9fe47efa5c7,4.42,false,false,near_mint,en,EUR
Wild-Field Scarecrow,INR,Innistrad Remastered,274,normal,common,2,102429,13629238-f907-47b7-bdba-164e38c7b6d2,0.05,false,false,near_mint,en,EUR
Desperate Farmer // Depraved Harvester,INR,Innistrad Remastered,105,normal,common,1,102418,0ec488de-fded-4df9-97ed-ba46cbacfdbf,0.05,false,false,near_mint,en,EUR
Gisa's Bidding,INR,Innistrad Remastered,111,normal,common,1,102557,5ad2fdbf-4a68-42e8-9c4f-7a075261ddf8,0.07,false,false,near_mint,en,EUR
Blood Petal Celebrant,INR,Innistrad Remastered,144,normal,common,1,102686,96db3d95-c0b8-42ff-956c-837f5f9cd40d,0.03,false,false,near_mint,en,EUR
Abundant Growth,INR,Innistrad Remastered,184,normal,common,1,102789,d15adc93-1a71-453b-8277-4a525a9cbc7b,0.09,false,false,near_mint,en,EUR
Crusader of Odric,INR,Innistrad Remastered,18,normal,common,1,102799,d6ae6566-3df8-4e09-b487-f0362622ca04,0.03,false,false,near_mint,en,EUR 
Name,Set code,Set name,Collector number,Foil,Rarity,Quantity,ManaBox ID,Scryfall ID,Purchase price,Misprint,Altered,Condition,Language,Purchase price currency
"Sephiroth, Planet's Heir",FIN,Final Fantasy,553,foil,mythic,1,103801,abd73e52-62f0-4e89-9dc6-90ff0bc2a9b7,0.54,false,false,near_mint,en,EUR
Sahagin,FIN,Final Fantasy,71,normal,common,1,106276,516940c7-c271-4f64-af75-c7ba98548382,0.22,false,false,near_mint,en,EUR
Il Mheg Pixie,FIN,Final Fantasy,57,normal,uncommon,3,106629,ae612312-3a8e-495f-8730-deaaf7505ca1,0.05,false,false,near_mint,en,EUR
Retrieve the Esper,FIN,Final Fantasy,68,normal,common,2,106301,ebd733f0-8883-434a-b36c-ef76b091fe8e,0.02,false,false,near_mint,en,EUR
Dreams of Laguna,FIN,Final Fantasy,50,normal,common,2,106292,ba752243-2727-4b8a-8e21-e70becfd4ff3,0.07,false,false,near_mint,en,EUR
Relm's Sketching,FIN,Final Fantasy,67,normal,uncommon,1,106345,6aedac12-3714-4a81-bd4d-1d2555c66f78,0.14,false,false,near_mint,en,EUR
"Ultimecia, Temporal Threat",FIN,Final Fantasy,556,normal,rare,1,106130,b64e4475-f1c6-4d85-b42f-6d84d06855bb,0.47,false,false,near_mint,en,EUR
Undercity Dire Rat,FIN,Final Fantasy,123,normal,common,4,106270,274788f4-fbf3-4a15-bdc0-f513a2fde30d,0.08,false,false,near_mint,en,EUR
Shinra Reinforcements,FIN,Final Fantasy,118,normal,common,3,106282,7367b257-1a8c-4593-a307-7116e36e0342,0.04,false,false,near_mint,en,EUR
Sephiroth's Intervention,FIN,Final Fantasy,116,normal,common,3,106297,cf7df82f-937a-443f-813f-2bcc6944c5c0,0.05,false,false,near_mint,en,EUR
Shambling Cie'th,FIN,Final Fantasy,117,normal,uncommon,3,106302,f02ce338-4fe2-44b0-a896-3ed7e6c874a3,0.04,false,false,near_mint,en,EUR
Al Bhed Salvagers,FIN,Final Fantasy,88,normal,uncommon,3,106278,58ccdcfc-a669-480f-bded-4273cfaf2045,0.06,false,false,near_mint,en,EUR
Overkill,FIN,Final Fantasy,109,normal,uncommon,2,106628,ae075e71-d33d-4d6c-b4a5-0b47dd6fd196,0.2,false,false,near_mint,en,EUR
Evil Reawakened,FIN,Final Fantasy,98,normal,uncommon,2,106300,eb98cbc3-749c-44f4-974c-00be1286d69e,0.09,false,false,near_mint,en,EUR
Seymour Flux,FIN,Final Fantasy,558,normal,rare,1,106156,c5fdc78e-0815-443c-8c26-35387b6f4f37,0.25,false,false,near_mint,en,EUR
Deadly Embrace,FIN,Final Fantasy,557,normal,rare,1,106087,a11cb85c-85dd-435c-8303-4d0d18bdb1e9,0.19,false,false,near_mint,en,EUR
"Xande, Dark Mage",FIN,Final Fantasy,561,normal,rare,1,105846,1caed9a8-b73b-470e-b9d8-8c3b7cac3eee,0.16,false,false,near_mint,en,EUR
Magitek Scythe,FIN,Final Fantasy,562,normal,rare,1,106027,8b691d42-3498-4d47-9a46-f7c376df8886,0.17,false,false,near_mint,en,EUR
"Cloud, Planet's Champion",FIN,Final Fantasy,552,foil,mythic,1,103799,a6d58067-337d-43dc-b4a3-c6acc701d450,1.55,false,false,near_mint,en,EUR
Cloudbound Moogle,FIN,Final Fantasy,11,normal,common,2,106283,7387bca7-f496-45da-a0ac-6be049303a8f,0.04,false,false,near_mint,en,EUR
Coeurl,FIN,Final Fantasy,12,normal,common,2,106284,7604b534-5480-42fa-bc36-bbae730f8582,0.03,false,false,near_mint,en,EUR
Dwarven Castle Guard,FIN,Final Fantasy,18,normal,common,4,106454,e17c0d27-e88d-4ba9-acbb-3f916cee3d7e,0.03,false,false,near_mint,en,EUR
Fate of the Sun-Cryst,FIN,Final Fantasy,19,normal,common,2,106287,900cdf11-b42e-4dcc-97c3-2e4d8e406a70,0.03,false,false,near_mint,en,EUR
Slash of Light,FIN,Final Fantasy,32,normal,common,2,106662,da6d9529-3cb0-4adc-8209-b9b02db3bf54,0.04,false,false,near_mint,en,EUR
White Auracite,FIN,Final Fantasy,41,normal,common,2,105873,2df6f515-9d21-4769-b1c4-c219611bccbb,0.11,false,false,near_mint,en,EUR
White Mage's Staff,FIN,Final Fantasy,42,normal,common,1,105584,30db372e-0b4c-4e16-9667-bf3fda666f72,0.04,false,false,near_mint,en,EUR
Adelbert Steiner,FIN,Final Fantasy,3,normal,uncommon,1,106424,1a67a991-1e52-4676-a2e3-2bc7aa943ab3,0.06,false,false,near_mint,en,EUR
The Crystal's Chosen,FIN,Final Fantasy,14,normal,uncommon,1,105725,d4df4373-0ee6-44e3-81c6-0881c070014c,0.04,false,false,near_mint,en,EUR
Dragoon's Lance,FIN,Final Fantasy,17,normal,uncommon,1,105671,96630531-8eb7-4e3e-8d63-60c562a5571b,0.07,false,false,near_mint,en,EUR
G'raha Tia,FIN,Final Fantasy,21,normal,uncommon,1,106501,076a8eca-ed73-4ee9-aab4-d9d43d394ee6,0.04,false,false,near_mint,en,EUR
"Rosa, Resolute White Mage",FIN,Final Fantasy,555,normal,rare,1,106153,c44e0ad6-9f44-4e4c-8c3b-3ee99409a740,1.72,false,false,near_mint,en,EUR
"Beatrix, Loyal General",FIN,Final Fantasy,554,normal,rare,1,106074,9da83b07-4978-4af7-be51-8aa8f35ec0bb,0.87,false,false,near_mint,en,EUR
Item Shopkeep,FIN,Final Fantasy,142,normal,common,3,106293,bd2db3f5-fd0d-4817-af90-6bea1f07e16b,0.03,false,false,near_mint,en,EUR
Warrior's Sword,FIN,Final Fantasy,169,normal,common,2,106296,cb98a7dd-542e-4448-b3bb-ff5d67a36535,0.03,false,false,near_mint,en,EUR
Suplex,FIN,Final Fantasy,164,normal,common,1,106376,f61693a2-7042-44e0-85ba-9bf12ab94e7e,0.08,false,false,near_mint,en,EUR
Freya Crescent,FIN,Final Fantasy,138,normal,uncommon,1,106289,9921f646-e893-44db-ac89-0633c1009788,0.11,false,false,near_mint,en,EUR
Samurai's Katana,FIN,Final Fantasy,154,normal,uncommon,2,106267,11f1d378-c78c-402a-ac46-2d32598c23e7,0.08,false,false,near_mint,en,EUR
Barret Wallace,FIN,Final Fantasy,129,normal,uncommon,1,105840,1a504dff-5857-4a61-ab99-616d5df7cf5a,0.08,false,false,near_mint,en,EUR
"Lightning, Security Sergeant",FIN,Final Fantasy,560,normal,rare,1,105920,4ad4dce3-6e43-4528-b570-85547d03164e,0.29,false,false,near_mint,en,EUR
Judgment Bolt,FIN,Final Fantasy,559,normal,rare,1,105801,05b04b06-9271-4a28-a60e-287df0d1a4d1,0.18,false,false,near_mint,en,EUR
Ultima Weapon,FIN,Final Fantasy,563,normal,rare,1,106135,b9162d08-a6ba-4e6e-b82c-9b092bd781dd,3.7,false,false,near_mint,en,EUR 
`; 
