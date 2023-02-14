const edibleList = [
  {
    id: 1,
    value: ["Rubus spectabilis"],
    label: "Salmonberry",
  },
  {
    id: 2,
    value: ["Borago officinalis"],
    label: "Borage",
  },
  {
    id: 3,
    value: [
      "Oxalis articulata",
      "Oxalis corniculata",
      "Oxalis dillenii",
      "Oxalis stricta",
    ],
    label: "Wood Sorrel",
  },
  {
    id: 4,
    value: ["Salicornia pacifica"],
    label: "Pacific Glasswort",
  },
  {
    id: 5,
    value: ["Cantharellus cibarius", "Cantharellus formosus"],
    label: "Chanterelle",
  },
  {
    id: 6,
    value: ["Balsamorhiza sagittata"],
    label: "Arrowleaf balsamroot",
  },
  // {
  //   id: 7,
  //   value: ["Agoseris aurantiaca", "Agoseris glauca"],
  //   label: "Agoseris",
  // },
  // {
  //   id: 8,
  //   value: ["Sagittaria latifolia"],
  //   label: "Arrowhead",
  // },
  // {
  //   id: 9,
  //   value: ["Asparagus officinalis"],
  //   label: "Asparagus",
  // },
  // {
  //   id: 10,
  //   value: ["Xerophyllum tenax"],
  //   label: "Beargrass",
  // },
  // {
  //   id: 11,
  //   value: ["Galium aparine", "Galium triflorum"],
  //   label: "Bedstraw",
  // },
  // {
  //   id: 12,
  //   value: ["Bistorta bistortoides"],
  //   label: "Bistort",
  // },
  // {
  //   id: 14,
  //   value: ["Lewisia rediviva"],
  //   label: "Bitterroot",
  // },
  // {
  //   id: 15,
  //   value: ["Pteridium aquilinum"],
  //   label: "Bracken",
  // },
  // {
  //   id: 18,
  //   value: ["Arctium minus"],
  //   label: "Burdock",
  // },
  // {
  //   id: 19,
  //   value: ["Camassia leichtlinii", "Camassia quamash"],
  //   label: "Blue Camas",
  // },
  // {
  //   id: 20,
  //   value: ["Nepeta cataria"],
  //   label: "Catnip",
  // },
  // {
  //   id: 21,
  //   value: ["Typha latifolia"],
  //   label: "Cattail",
  // },
  // {
  //   id: 22,
  //   value: ["Stellaria media"],
  //   label: "Chickweed",
  // },
  // {
  //   id: 23,
  //   value: ["Cichorium intybus"],
  //   label: "Chicory",
  // },
  // {
  //   id: 25,
  //   value: [
  //     "Trifolium pratense",
  //     "Trifolium hybridum",
  //     "Trifolium repens",
  //     "Trifolium wormskioldii",
  //   ],
  //   label: "Clover",
  // },
  // {
  //   id: 29,
  //   value: ["Melilotus officinalis"],
  //   label: "Common Sweet Clover",
  // },
  // {
  //   id: 30,
  //   value: ["Nuphar lutea", "Nuphar polysepala"],
  //   label: "Cow Lily",
  // },
  // {
  //   id: 31,
  //   value: ["Taraxacum officinale"], DANDELION
  //   label: "Dandelion",
  // },
  // {
  //   id: 35,
  //   value: ["Maianthemum racemosum", "Maianthemum stellatum"],
  //   label: "False Solomon's Seal",
  // },
  // {
  //   id: 36,
  //   value: ["Epilobium angustifolium", "Epilobium latifolium"],
  //   label: "Fireweed",
  // },
  // {
  //   id: 38,
  //   value: ["Nymphaea odorata"],
  //   label: "Fragrant Water Lily",
  // },
  // {
  //   id: 41,
  //   value: ["Glechoma hederacea"],
  //   label: "Ground Ivy",
  // },
  // {
  //   id: 42,
  //   value: ["Boschniakia hookeri"],
  //   label: "Groundcone",
  // },
  // {
  //   id: 43,
  //   value: ["Malva sylvestris"],
  //   label: "High Mallow",
  // },
  // {
  //   id: 48,
  //   value: ["Triteleia grandiflora"],
  //   label: "Largeflower Triteleia",
  // },
  // {
  //   id: 51,
  //   value: ["Claytonia perfoliata"],
  //   label: "Miner's Lettuce",
  // },
  // {
  //   id: 52,
  //   value: ["Oxyria digyna"],
  //   label: "Mountain Sorrel",
  // },
  // {
  //   id: 54,
  //   value: [],  MUSTARD
  //   label: "Mustard",
  // },
  // {
  //   id: 56,
  //   value: ["Leucanthemum vulgare"],
  //   label: "Oxeye Daisy",
  // },
  // {
  //   id: 57,
  //   value: ["Anaphalis margaritacea"],
  //   label: "Pearly Everlasting",
  // },
  // {
  //   id: 60,
  //   value: ["Matricaria discoidea"],
  //   label: "Pineapple Weed",
  // },
  // {
  //   id: 61,
  //   value: ["Plantago major", "Plantago lanceolata"],
  //   label: "Plantain",
  // },
  // {
  //   id: 62,
  //   value: ["Opuntia fragilis"],
  //   label: "Prickly Pear",
  // },
  // {
  //   id: 63,
  //   value: ["Clintonia uniflora"],
  //   label: "Queen's Cup",
  // },
  // {
  //   id: 68,
  //   value: ["Prunella vulgaris"],
  //   label: "Self Heal",
  // },
  // {
  //   id: 69,
  //   value: ["Rumex acetosella"],
  //   label: "Sheep Sorrel",
  // },
  // {
  //   id: 70,
  //   value: ["Capsella bursa-pastoris"],
  //   label: "Shepherd's Purse",
  // },
  // {
  //   id: 71,
  //   value: ["Claytonia sibirica"],
  //   label: "Siberian Miner's Lettuce",
  // },
  // {
  //   id: 73,
  //   value: ["Argentina pacifica"],
  //   label: "Silverweed",
  // },
  // {
  //   id: 75,
  //   value: [
  //     "Veronica americana",
  //     "Veronica officinalis",
  //     "Veronica serpyllifolia",
  //   ],
  //   label: "Speedwell",
  // },
  // {
  //   id: 76,
  //   value: ["Urtica dioica"],
  //   label: "Stinging Nettle",
  // },
  // {
  //   id: 77,
  //   value: ["Sedum lanceolatum", "Sedum divergens"],
  //   label: "Stonecrop",
  // },
  // {
  //   id: 78,
  //   value: ["Erodium cicutarium"],
  //   label: "Stork's Bill",
  // },
  // {
  //   id: 80,
  //   value: ["Helianthus annuus"],
  //   label: "Sunflower",
  // },
  // {
  //   id: 82,
  //   value: ["Myrica gale"],
  //   label: "Sweet Gale",
  // },
  // {
  //   id: 84,
  //   value: ["Cirsium arvense", "Cirsium vulgare"],
  //   label: "Thistle",
  // },
  // {
  //   id: 85,
  //   value: ["Lilium columbianum"],
  //   label: "Tiger Lily",
  // },
  // {
  //   id: 86,
  //   value: [
  //     "Viola adunca",
  //     "Viola tricolor",
  //     "Viola palustris",
  //   ],
  //   label: "Violet",
  // },
  // {
  //   id: 87,
  //   value: ["Rorippa nasturtium-aquaticum"],
  //   label: "Watercress",
  // },
  // {
  //   id: 90,
  //   value: ["Mentha spicata", "Mentha piperita"], MINT
  //   label: "Wild Mint",
  // },
  // {
  //   id: 91,
  //   value: [
  //     "Rosa gymnocarpa",
  //     "Rosa nutkana",
  //   ],
  //   label: "Wild Rose",
  // },
  // {
  //   id: 93,
  //   value: ["Erythronium grandiflorum"],
  //   label: "Snow Lily",
  // },
  // {
  //   id: 95,
  //   value: ["Ribes bracteosum", "Ribes lacustre"],
  //   label: "Black Currant",
  // },
  // {
  //   id: 96,
  //   value: ["Vaccinium membranaceum", "Vaccinium ovatum"],
  //   label: "Black Huckleberry",
  // },
  // {
  //   id: 97,
  //   value: ["Rubus armeniacus", "Rubus ursinus"], BLACKBERRY
  //   label: "Blackberry",
  // },
  // {
  //   id: 98,
  //   value: ["Vaccinium ovalifolium"], BLUEBERRY
  //   label: "Blueberry",
  // },
  // {
  //   id: 101,
  //   value: ["Vaccinium oxycoccus", "Vaccinium scoparium"],
  //   label: "Cranberry",
  // },
  // {
  //   id: 102,
  //   value: ["Empetrum nigrum"],
  //   label: "Crowberry",
  // },
  // {
  //   id: 103,
  //   value: ["Sambucus caerulea"],
  //   label: "Elderberry",
  // },
  // {
  //   id: 104,
  //   value: ["Prosartes hookeri"],
  //   label: "Fairy Bell",
  // },
  // {
  //   id: 105,
  //   value: ["Ribes aureum"],
  //   label: "Golden Currant",
  // },
  // {
  //   id: 106,
  //   value: ["Ribes divaricatum", "Ribes lobbii"],
  //   label: "Gooseberry",
  // },
  // {
  //   id: 108,
  //   value: ["Malus fusca"],
  //   label: "Pacific Crabapple",
  // },
  // {
  //   id: 109,
  //   value: ["Rubus leucodermis", "Rubus idaeus", "Rubus pedatus"], RASPBERRY
  //   label: "Raspberry",
  // },
  // {
  //   id: 110,
  //   value: ["Ribes sanguineum"],
  //   label: "Red Currant",
  // },
  // {
  //   id: 111,
  //   value: ["Vaccinium parvifolium"],
  //   label: "Red Huckleberry",
  // },
  // {
  //   id: 112,
  //   value: ["Gaultheria shallon"],
  //   label: "Salal",
  // },
  // {
  //   id: 113,
  //   value: ["Fragaria virginiana", "Fragaria vesca", "Fragaria chiloensis"], STRAWBERRY
  //   label: "Strawberry",
  // },
  // {
  //   id: 114,
  //   value: ["Rhus glabra"],
  //   label: "Sumac",
  // },
  // {
  //   id: 115,
  //   value: ["Rubus parviflorus"],
  //   label: "Thimbleberry",
  // },
  // {
  //   id: 116,
  //   value: ["Streptopus amplexifolius", "Streptopus lanceolatus"],
  //   label: "Twisted Stalk",
  // },
  // {
  //   id: 117,
  //   value: ["Nereocystis luetkeana"],
  //   label: "Bull Kelp",
  // },
  // {
  //   id: 118,
  //   value: ["Macrocystis integrifolia"],
  //   label: "Giant Kelp",
  // },
  // {
  //   id: 120,
  //   value: ["Zostera marina"],
  //   label: "Eel Grass",
  // },
  // {
  //   id: ,
  //   value: [""],
  //   label: "",
  // },
];

export default edibleList;

[
  {
    id: 0,
    value: ["Laccaria amethysteo-occidentalis"],
    label: "amethyst deceiver",
    type: "fungi",
  },
  {
    id: 0,
    value: ["Pleurocybella porrigens"],
    label: "angel's wings",
    type: "fungi",
  },
  {
    id: 0,
    value: ["Hericium abietis"],
    label: "bear's head",
    type: "fungi",
  },
  {
    id: 0,
    value: ["Morchella importuna"],
    label: "black landscape morel",
    type: "fungi",
  },
  {
    id: 0,
    value: ["Laetiporus conifericola"],
    label: "chicken of the woods",
    type: "fungi",
  },
  {
    id: 0,
    value: ["Clavariadelphus truncatus"],
    label: "club coral",
    type: "fungi",
  },
  {
    id: 0,
    value: ["Laccaria laccata"],
    label: "deceiver",
    type: "fungi",
  },
  {
    id: 0,
    value: ["Pluteus cervinus"],
    label: "deer mushroom",
    type: "fungi",
  },
  {
    id: 0,
    value: ["Marasmius oreades"],
    label: "fairy ring mushroom",
    type: "fungi",
  },
  {
    id: 0,
    value: ["Suillus caerulescens"],
    label: "fat jack",
    type: "fungi",
  },
  {
    id: 0,
    value: ["Lycoperdon perlatum"],
    label: "gem-studded puffball",
    type: "fungi",
  },
  {
    id: 0,
    value: ["Glistening Ink Cap"],
    label: "glistening ink cap",
    type: "fungi",
  },
  {
    id: 0,
    value: ["Hydnum repandum"],
    label: "hedgehog mushroom",
    type: "fungi",
  },
  {
    id: 0,
    value: ["Coprinopsis atramentaria"],
    label: "inky cap",
    type: "fungi",
  },
  {
    id: 0,
    value: ["Boletus edulis"],
    label: "king bolete",
    type: "fungi",
  },
  {
    id: 0,
    value: ["Hypomyces lactifluorum"],
    label: "lobster mushroom",
    type: "fungi",
  },
  {
    id: 0,
    value: ["Agaricus campestris"],
    label: "meadow mushroom",
    type: "fungi",
  },
  {
    id: 0,
    value: ["Aleuria aurantia"],
    label: "orange peel fungus",
    type: "fungi",
  },
  {
    id: 0,
    value: ["Pleurotus ostreatus"],
    label: "oyster mushroom",
    type: "fungi",
  },
  {
    id: 0,
    value: ["Cantharellus formosus"],
    label: "pacific golden chanterelle",
    type: "fungi",
  },
  {
    id: 0,
    value: ["Gomphus clavatus"],
    label: "pig's ears",
    type: "fungi",
  },
  {
    id: 0,
    value: ["Gomphidius subroseus"],
    label: "rosy gomphidius",
    type: "fungi",
  },
  {
    id: 0,
    value: ["Sarcodon imbricatus"],
    label: "scaly hedgehog",
    type: "fungi",
  },
  {
    id: 0,
    value: ["Coprinus comatus"],
    label: "shaggy mane",
    type: "fungi",
  },
  {
    id: 0,
    value: ["Chlorophyllum olivieri"],
    label: "shaggy parasol",
    type: "fungi",
  },
  {
    id: 0,
    value: ["Suillus brevipes"],
    label: "short-stemmed slippery jack",
    type: "fungi",
  },
  {
    id: 0,
    value: ["Gomphidius glutinosus"],
    label: "slimy spike cap",
    type: "fungi",
  },
  {
    id: 0,
    value: ["Boletus rex-veris"],
    label: "spring king bolete",
    type: "fungi",
  },
  {
    id: 0,
    value: ["Apioperdon pyriforme"],
    label: "stump puffball",
    type: "fungi",
  },
  {
    id: 0,
    value: ["Hydnum oregonense"],
    label: "sweet tooth mushroom",
    type: "fungi",
  },
  {
    id: 0,
    value: ["Morchella snyderi"],
    label: "thick stemmed morel",
    type: "fungi",
  },
  {
    id: 0,
    value: ["Pseudohydnum gelatinosum"],
    label: "toothed jelly fungus",
    type: "fungi",
  },
  {
    id: 0,
    value: ["Sparassis radicata"],
    label: "western cauliflower mushroom",
    type: "fungi",
  },
  {
    id: 0,
    value: ["Suillus lakei"],
    label: "western painted suillus",
    type: "fungi",
  },
  {
    id: 0,
    value: ["Cantharellus subalbidus"],
    label: "white chanterelle",
    type: "fungi",
  },
  {
    id: 0,
    value: ["Craterellus tubaeformis"],
    label: "winter chanterelle",
    type: "fungi",
  },
];
