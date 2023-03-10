const newedibleList = [
  {
    id: 1,
    value: ["Agoseris aurantiaca", "Agoseris glauca"],
    label: "Agoseris",
    type: "plant",
  },
  {
    id: 2,
    value: ["Laccaria amethysteo-occidentalis"],
    label: "Amethyst Deceiver",
    type: "fungi",
  },
  {
    id: 3,
    value: ["Pleurocybella porrigens"],
    label: "Angel's Wings",
    type: "fungi",
  },
  {
    id: 4,
    value: ["Balsamorhiza sagittata"],
    label: "Arrowleaf Balsamroot",
    type: "plant",
  },
  {
    id: 5,
    value: ["Asparagus officinalis"],
    label: "Asparagus",
    type: "plant",
  },
  {
    id: 6,
    value: ["Rosa rugosa"],
    label: "Beach Rose",
    type: "plant",
  },
  {
    id: 7,
    value: ["Hericium abietis"],
    label: "Bear's Head",
    type: "fungi",
  },
  {
    id: 8,
    value: ["Xerophyllum tenax"],
    label: "Beargrass",
    type: "plant",
  },
  {
    id: 9,
    value: ["Galium aparine", "Galium triflorum"],
    label: "Bedstraw",
    type: "plant",
  },
  {
    id: 10,
    value: ["Bistorta bistortoides"],
    label: "Bistort",
    type: "plant",
  },
  {
    id: 11,
    value: ["Lewisia rediviva"],
    label: "Bitterroot",
    type: "plant",
  },
  {
    id: 12,
    value: ["Ribes bracteosum", "Ribes lacustre"],
    label: "Black Currant",
    type: "plant",
  },
  {
    id: 13,
    value: ["Vaccinium membranaceum", "Vaccinium ovatum"],
    label: "Black Huckleberry",
    type: "plant",
  },
  {
    id: 14,
    value: ["Morchella importuna"],
    label: "Black Landscape Morel",
    type: "fungi",
  },
  {
    id: 15,
    value: ["Rubus armeniacus", "Rubus ursinus"],
    label: "Blackberry",
    type: "plant",
  },
  {
    id: 16,
    value: ["Camassia leichtlinii", "Camassia quamash"],
    label: "Blue Camas",
    type: "plant",
  },
  {
    id: 17,
    value: ["Vaccinium ovalifolium"],
    label: "Blueberry",
    type: "plant",
  },
  {
    id: 18,
    value: ["Borago officinalis"],
    label: "Borage",
    type: "plant",
  },
  {
    id: 19,
    value: ["Pteridium aquilinum"],
    label: "Bracken",
    type: "plant",
  },
  {
    id: 20,
    value: ["Sagittaria latifolia"],
    label: "Broadleaf Arrowhead",
    type: "plant",
  },
  {
    id: 21,
    value: ["Nereocystis luetkeana"],
    label: "Bull Kelp",
    type: "plant",
  },
  {
    id: 22,
    value: ["Arctium minus"],
    label: "Burdock",
    type: "plant",
  },
  {
    id: 23,
    value: ["Nepeta cataria"],
    label: "Catnip",
    type: "plant",
  },
  {
    id: 24,
    value: ["Typha latifolia"],
    label: "Cattail",
    type: "plant",
  },
  {
    id: 25,
    value: ["Cantharellus cibarius", "Cantharellus formosus"],
    label: "Chanterelle",
    type: "fungi",
  },
  {
    id: 26,
    value: ["Laetiporus conifericola"],
    label: "Chicken of the Woods",
    type: "fungi",
  },
  {
    id: 27,
    value: ["Stellaria media"],
    label: "Chickweed",
    type: "plant",
  },
  {
    id: 28,
    value: ["Cichorium intybus"],
    label: "Chicory",
    type: "plant",
  },
  {
    id: 29,
    value: [
      "Trifolium pratense",
      "Trifolium hybridum",
      "Trifolium repens",
      "Trifolium wormskioldii",
    ],
    label: "Clover",
    type: "plant",
  },
  {
    id: 30,
    value: ["Clavariadelphus truncatus"],
    label: "Club Coral",
    type: "fungi",
  },
  {
    id: 31,
    value: ["Melilotus officinalis"],
    label: "Common Sweet Clover",
    type: "plant",
  },
  {
    id: 32,
    value: ["Nuphar lutea", "Nuphar polysepala"],
    label: "Cow Lily",
    type: "plant",
  },
  {
    id: 33,
    value: ["Vaccinium oxycoccus", "Vaccinium scoparium"],
    label: "Cranberry",
    type: "plant",
  },
  {
    id: 34,
    value: ["Empetrum nigrum"],
    label: "Crowberry",
    type: "plant",
  },
  {
    id: 35,
    value: ["Taraxacum officinale"],
    label: "Dandelion",
    type: "plant",
  },
  {
    id: 36,
    value: ["Laccaria laccata"],
    label: "Deceiver",
    type: "fungi",
  },
  {
    id: 37,
    value: ["Pluteus cervinus"],
    label: "Deer Mushroom",
    type: "fungi",
  },
  {
    id: 38,
    value: ["Zostera marina"],
    label: "Eel Grass",
    type: "plant",
  },
  {
    id: 39,
    value: ["Sambucus caerulea"],
    label: "Elderberry",
    type: "plant",
  },
  {
    id: 40,
    value: ["Prosartes hookeri"],
    label: "Fairy Bell",
    type: "plant",
  },
  {
    id: 41,
    value: ["Marasmius oreades"],
    label: "Fairy Ring Mushroom",
    type: "fungi",
  },
  {
    id: 42,
    value: ["Maianthemum racemosum", "Maianthemum stellatum"],
    label: "False Solomon's Seal",
    type: "plant",
  },
  {
    id: 43,
    value: ["Suillus caerulescens"],
    label: "Fat Jack",
    type: "fungi",
  },
  {
    id: 44,
    value: ["Epilobium angustifolium", "Epilobium latifolium"],
    label: "Fireweed",
    type: "plant",
  },
  {
    id: 45,
    value: ["Nymphaea odorata"],
    label: "Fragrant Water Lily",
    type: "plant",
  },
  {
    id: 46,
    value: ["Lycoperdon perlatum"],
    label: "Gem-Studded Puffball",
    type: "fungi",
  },
  {
    id: 47,
    value: ["Macrocystis integrifolia"],
    label: "Giant Kelp",
    type: "plant",
  },
  {
    id: 48,
    value: ["Glistening Ink Cap"],
    label: "Glistening Ink Cap",
    type: "fungi",
  },
  {
    id: 49,
    value: ["Ribes aureum"],
    label: "Golden Currant",
    type: "plant",
  },
  {
    id: 50,
    value: ["Ribes divaricatum", "Ribes lobbii"],
    label: "Gooseberry",
    type: "plant",
  },
  {
    id: 51,
    value: ["Glechoma hederacea"],
    label: "Ground Ivy",
    type: "plant",
  },
  {
    id: 52,
    value: ["Boschniakia hookeri"],
    label: "Groundcone",
    type: "plant",
  },
  {
    id: 53,
    value: ["Hydnum repandum"],
    label: "Hedgehog Mushroom",
    type: "fungi",
  },
  {
    id: 54,
    value: ["Malva sylvestris"],
    label: "High Mallow",
    type: "plant",
  },
  {
    id: 55,
    value: ["Coprinopsis atramentaria"],
    label: "Inky Cap",
    type: "fungi",
  },
  {
    id: 56,
    value: ["Boletus edulis"],
    label: "King Bolete",
    type: "fungi",
  },
  {
    id: 57,
    value: ["Athyrium filix-femina"],
    label: "Lady Fern Fiddlehead",
    type: "plant",
  },
  {
    id: 58,
    value: ["Triteleia grandiflora"],
    label: "Largeflower Triteleia",
    type: "plant",
  },
  {
    id: 59,
    value: ["Hypomyces lactifluorum"],
    label: "Lobster Mushroom",
    type: "fungi",
  },
  {
    id: 60,
    value: ["Agaricus campestris"],
    label: "Meadow Mushroom",
    type: "fungi",
  },
  {
    id: 61,
    value: ["Claytonia perfoliata"],
    label: "Miner's Lettuce",
    type: "plant",
  },
  {
    id: 62,
    value: ["Oxyria digyna"],
    label: "Mountain Sorrel",
    type: "plant",
  },
  {
    id: 63,
    value: [],
    label: "Mustard",
    type: "plant",
  },
  {
    id: 64,
    value: ["Leucanthemum vulgare"],
    label: "Oxeye Daisy",
    type: "plant",
  },
  {
    id: 65,
    value: ["Pleurotus ostreatus"],
    label: "Oyster mushroom",
    type: "fungi",
  },
  {
    id: 66,
    value: ["Malus fusca"],
    label: "Pacific Crabapple",
    type: "plant",
  },
  {
    id: 67,
    value: ["Salicornia pacifica"],
    label: "Pacific Glasswort",
    type: "plant",
  },
  {
    id: 68,
    value: ["Anaphalis margaritacea"],
    label: "Pearly Everlasting",
    type: "plant",
  },
  {
    id: 69,
    value: ["Matricaria discoidea"],
    label: "Pineapple Weed",
    type: "plant",
  },
  {
    id: 70,
    value: ["Plantago major", "Plantago lanceolata"],
    label: "Plantain",
    type: "plant",
  },
  {
    id: 71,
    value: ["Opuntia fragilis"],
    label: "Prickly Pear",
    type: "plant",
  },
  {
    id: 72,
    value: ["Clintonia uniflora"],
    label: "Queen's Cup",
    type: "plant",
  },
  {
    id: 73,
    value: ["Rubus leucodermis", "Rubus idaeus", "Rubus pedatus"],
    label: "Raspberry",
    type: "plant",
  },
  {
    id: 74,
    value: ["Ribes sanguineum"],
    label: "Red Currant",
    type: "plant",
  },
  {
    id: 75,
    value: ["Vaccinium parvifolium"],
    label: "Red Huckleberry",
    type: "plant",
  },
  {
    id: 76,
    value: ["Gomphidius subroseus"],
    label: "Rosy Gomphidius",
    type: "fungi",
  },
  {
    id: 77,
    value: ["Gaultheria shallon"],
    label: "Salal",
    type: "plant",
  },
  {
    id: 78,
    value: ["Rubus spectabilis"],
    label: "Salmonberry",
    type: "plant",
  },
  {
    id: 79,
    value: ["Sarcodon imbricatus"],
    label: "Scaly Hedgehog",
    type: "fungi",
  },
  {
    id: 80,
    value: ["Prunella vulgaris"],
    label: "Self Heal",
    type: "plant",
  },
  {
    id: 81,
    value: ["Coprinus comatus"],
    label: "Shaggy Mane",
    type: "fungi",
  },
  {
    id: 82,
    value: ["Chlorophyllum olivieri"],
    label: "Shaggy Parasol",
    type: "fungi",
  },
  {
    id: 83,
    value: ["Rumex acetosella"],
    label: "Sheep Sorrel",
    type: "plant",
  },
  {
    id: 84,
    value: ["Capsella bursa-pastoris"],
    label: "Shepherd's Purse",
    type: "plant",
  },
  {
    id: 85,
    value: ["Suillus brevipes"],
    label: "Short-Stemmed Slippery Jack",
    type: "fungi",
  },
  {
    id: 86,
    value: ["Claytonia sibirica"],
    label: "Siberian Miner's Lettuce",
    type: "plant",
  },
  {
    id: 87,
    value: ["Argentina pacifica"],
    label: "Silverweed",
    type: "plant",
  },
  {
    id: 88,
    value: ["Gomphidius glutinosus"],
    label: "Slimy Spike Cap",
    type: "fungi",
  },
  {
    id: 89,
    value: ["Erythronium grandiflorum"],
    label: "Snow Lily",
    type: "plant",
  },
  {
    id: 90,
    value: [
      "Veronica americana",
      "Veronica officinalis",
      "Veronica serpyllifolia",
    ],
    label: "Speedwell",
    type: "plant",
  },
  {
    id: 91,
    value: ["Boletus rex-veris"],
    label: "Spring King Bolete",
    type: "fungi",
  },
  {
    id: 92,
    value: ["Urtica dioica"],
    label: "Stinging Nettle",
    type: "plant",
  },
  {
    id: 93,
    value: ["Sedum lanceolatum", "Sedum divergens"],
    label: "Stonecrop",
    type: "plant",
  },
  {
    id: 94,
    value: ["Erodium cicutarium"],
    label: "Stork's Bill",
    type: "plant",
  },
  {
    id: 95,
    value: ["Fragaria virginiana", "Fragaria vesca", "Fragaria chiloensis"],
    label: "Strawberry",
    type: "plant",
  },
  {
    id: 96,
    value: ["Apioperdon pyriforme"],
    label: "Stump Puffball",
    type: "fungi",
  },
  {
    id: 97,
    value: ["Rhus glabra"],
    label: "Sumac",
    type: "plant",
  },
  {
    id: 98,
    value: ["Helianthus annuus"],
    label: "Sunflower",
    type: "plant",
  },
  {
    id: 99,
    value: ["Myrica gale"],
    label: "Sweet Gale",
    type: "plant",
  },
  {
    id: 100,
    value: ["Hydnum oregonense"],
    label: "Sweet Tooth Mushroom",
    type: "fungi",
  },
  {
    id: 101,
    value: ["Morchella snyderi"],
    label: "Thick Stemmed Morel",
    type: "fungi",
  },
  {
    id: 102,
    value: ["Rubus parviflorus"],
    label: "Thimbleberry",
    type: "plant",
  },
  {
    id: 103,
    value: ["Cirsium arvense", "Cirsium vulgare"],
    label: "Thistle",
    type: "plant",
  },
  {
    id: 104,
    value: ["Lilium columbianum"],
    label: "Tiger Lily",
    type: "plant",
  },
  {
    id: 105,
    value: ["Pseudohydnum gelatinosum"],
    label: "Toothed Jelly Fungus",
    type: "fungi",
  },
  {
    id: 106,
    value: ["Streptopus amplexifolius", "Streptopus lanceolatus"],
    label: "Twisted Stalk",
    type: "plant",
  },
  {
    id: 107,
    value: ["Viola adunca", "Viola tricolor", "Viola palustris"],
    label: "Violet",
    type: "plant",
  },
  {
    id: 108,
    value: ["Rorippa nasturtium-aquaticum"],
    label: "Watercress",
    type: "plant",
  },
  {
    id: 109,
    value: ["Sparassis radicata"],
    label: "Western Cauliflower Mushroom",
    type: "fungi",
  },
  {
    id: 110,
    value: ["Suillus lakei"],
    label: "Western Painted Suillus",
    type: "fungi",
  },
  {
    id: 111,
    value: ["Cantharellus subalbidus"],
    label: "White Chanterelle",
    type: "fungi",
  },
  {
    id: 112,
    value: ["Mentha spicata", "Mentha piperita"],
    label: "Wild Mint",
    type: "plant",
  },
  {
    id: 113,
    value: ["Rosa gymnocarpa", "Rosa nutkana"],
    label: "Wild Rose",
    type: "plant",
  },
  {
    id: 114,
    value: ["Craterellus tubaeformis"],
    label: "Winter Chanterelle",
    type: "fungi",
  },
  {
    id: 115,
    value: [
      "Oxalis articulata",
      "Oxalis corniculata",
      "Oxalis dillenii",
      "Oxalis stricta",
      "Oxalis oregana",
    ],
    label: "Wood Sorrel",
    type: "plant",
  }
];

export default newedibleList;
