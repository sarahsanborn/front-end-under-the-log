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
    value: ["Salicornia rubra", "Salicornia virginica"],
    label: "Pickleweed",
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
  //   value: ["Sagittaria cuneata", "Sagittaria latifolia"],
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
  //   value: ["Galium aparine", "Galium boreale", "Galium triflorum"],
  //   label: "Bedstraw",
  // },
  // {
  //   id: 12,
  //   value: ["Bistorta bistortoides", "Bistorta vivipara"],
  //   label: "Bistort",
  // },
  // {
  //   id: 13,
  //   value: [
  //     "Cardamine breweri",
  //     "Cardamine cordifolia",
  //     "Cardamine pensylvanica",
  //   ],
  //   label: "Bittercress",
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
  //   id: 16,
  //   value: ["Lycopus uniflorus", "Lycopus americanus"],
  //   label: "Bugleweed",
  // },
  // {
  //   id: 17,
  //   value: ["Schoenoplectus acutus", "Schoenoplectus tabernaemontani"],
  //   label: "Bulrush",
  // },
  // {
  //   id: 18,
  //   value: ["Arctium minus", "Arctium tomentosum"],
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
  //   value: ["Typha latifolia", "Typha angustifolia"],
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
  //   id: 24,
  //   value: ["Cyperus esculentus"],
  //   label: "Chufa",
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
  //   id: 26,
  //   value: ["Xanthium strumarium"],
  //   label: "Cocklebur",
  // },
  // {
  //   id: 27,
  //   value: [
  //     "Petasites sagittatus",
  //     "Petasites frigidus var palmatus",
  //     "Petasites frigidus var frigidus",
  //   ],
  //   label: "Coltsfoot",
  // },
  // {
  //   id: 28,
  //   value: ["Atriplex patula"],
  //   label: "Common Orache",
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
  //   value: ["Taraxacum officinale"],
  //   label: "Dandelion",
  // },
  // {
  //   id: 32,
  //   value: ["Oplopanax horridus"],
  //   label: "Devils Club",
  // },
  // {
  //   id: 33,
  //   value: ["Rumex crispus", "Rumex occidentalis", "Rumex triangulivalvis"],
  //   label: "Dock",
  // },
  // {
  //   id: 34,
  //   value: ["Pedicularis groenlandica"],
  //   label: "Elephanthead Lousewort",
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
  //   id: 37,
  //   value: ["Erigeron annuus", "Erigeron philadelphicus"],
  //   label: "Fleabane",
  // },
  // {
  //   id: 38,
  //   value: ["Nymphaea odorata"],
  //   label: "Fragrant Water Lily",
  // },
  // {
  //   id: 39,
  //   value: ["Atriplex hortensis"],
  //   label: "Garden Orache",
  // },
  // {
  //   id: 40,
  //   value: [
  //     "Solidago canadensis",
  //     "Solidago missouriensis",
  //     "Solidago multiradiata",
  //   ],
  //   label: "Goldenrod",
  // },
  // {
  //   id: 41,
  //   value: ["Glechoma hederacea"],
  //   label: "Ground Ivy",
  // },
  // {
  //   id: 42,
  //   value: ["Boschniakia hookeri", "Boschniakia rossica"],
  //   label: "Groundcone",
  // },
  // {
  //   id: 43,
  //   value: ["Malva sylvestris"],
  //   label: "High Mallow",
  // },
  // // {
  // //   id: 44,
  // //   value: ["Monotropa uniflora"],
  // //   label: "Indian Pipe",
  // // },
  // {
  //   id: 45,
  //   value: ["Helianthus tuberosus"],
  //   label: "Jerusalem Artichoke",
  // },
  // {
  //   id: 46,
  //   value: [
  //     "Polygonum aviculare",
  //     "Polygonum arenastrum",
  //     "Polygonum douglasii",
  //   ],
  //   label: "Knotweed",
  // },
  // {
  //   id: 47,
  //   value: ["Chenopodium album"],
  //   label: "Lamb's Quarter",
  // },
  // {
  //   id: 48,
  //   value: ["Triteleia grandiflora"],
  //   label: "Largeflower Triteleia",
  // },
  // {
  //   id: 49,
  //   value: ["Calochortus apiculatus"],
  //   label: "Mariposa Lily",
  // },
  // {
  //   id: 50,
  //   value: ["Caltha leptosepala", "Caltha palustris"],
  //   label: "Marsh Marigold",
  // },
  // {
  //   id: 51,
  //   value: ["Montia perfoliata"],
  //   label: "Miner's Lettuce",
  // },
  // {
  //   id: 52,
  //   value: ["Oxyria digyna"],
  //   label: "Mountain Sorrel",
  // },
  // {
  //   id: 53,
  //   value: ["Malva moschata"],
  //   label: "Musk Mallow",
  // },
  // // {
  // //   id: 54,
  // //   value: [],
  // //   label: "Mustard",
  // // },
  // {
  //   id: 55,
  //   value: ["Alisma triviale"],
  //   label: "Northern Water Plantain",
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
  //   id: 58,
  //   value: ["Lepidium virginicum"],
  //   label: "Peppergrass",
  // },
  // {
  //   id: 59,
  //   value: ["Amaranthus hybridus", "Amaranthus retroflexus"],
  //   label: "Pigweed",
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
  //   value: ["Opuntia fragilis", "Opuntia polyacantha"],
  //   label: "Prickly Pear",
  // },
  // {
  //   id: 63,
  //   value: ["Clintonia uniflora"],
  //   label: "Queen's Cup",
  // },
  // {
  //   id: 64,
  //   value: ["Galinsoga parviflora"],
  //   label: "Quickweed",
  // },
  // {
  //   id: 65,
  //   value: ["Rhodiola integrifolia"],
  //   label: "Roseroot",
  // },
  // {
  //   id: 66,
  //   value: [
  //     "Tragopogon porrifolius",
  //     "Tragopogon dubius",
  //     "Tragopogon pratensis",
  //   ],
  //   label: "Salsify",
  // },
  // {
  //   id: 67,
  //   value: ["Glaux maritima"],
  //   label: "Sea Milkweed",
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
  //   id: 72,
  //   value: ["Atriplex argentea"],
  //   label: "Silver Orache",
  // },
  // {
  //   id: 73,
  //   value: ["Argentina anserina", "Argentina pacifica"],
  //   label: "Silverweed",
  // },
  // {
  //   id: 74,
  //   value: ["Sonchus arvensis", "Sonchus asper", "Sonchus oleraceus"],
  //   label: "Sow Thistle",
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
  //   id: 79,
  //   value: ["Chenopodium capitatum"],
  //   label: "Strawberry Blite",
  // },
  // {
  //   id: 80,
  //   value: ["Helianthus annuus", "Helianthus petiolaris"],
  //   label: "Sunflower",
  // },
  // {
  //   id: 81,
  //   value: ["Stachys palustris"],
  //   label: "Marsh Woundwort",
  // },
  // {
  //   id: 82,
  //   value: ["Myrica gale"],
  //   label: "Sweet Gale",
  // },
  // {
  //   id: 83,
  //   value: ["Acorus americanus"],
  //   label: "Sweetflag",
  // },
  // {
  //   id: 84,
  //   value: ["Cirsium arvense", "Cirsium vulgare", "Cirsium brevistylum"],
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
  //     "Viola canadensis",
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
  //   id: 88,
  //   value: ["Monarda fistulosa"],
  //   label: "Wild Bergamot",
  // },
  // {
  //   id: 89,
  //   value: ["Glycyrrhiza lepidota"],
  //   label: "Wild Licorice",
  // },
  // {
  //   id: 90,
  //   value: ["Mentha arvensis", "Mentha spicata", "Mentha piperita"],
  //   label: "Wild Mint",
  // },
  // {
  //   id: 91,
  //   value: [
  //     "Rosa arkansana",
  //     "Rosa acicularis",
  //     "Rosa woodsii",
  //     "Rosa gymnocarpa",
  //     "Rosa nutkana",
  //   ],
  //   label: "Wild Rose",
  // },
  // {
  //   id: 92,
  //   value: ["Lilium philadelphicum"],
  //   label: "Wood Lily",
  // },
  // {
  //   id: 93,
  //   value: ["Erythronium grandiflorum"],
  //   label: "Snow Lily",
  // },
  // {
  //   id: 94,
  //   value: ["Rorippa palustris"],
  //   label: "Yellowcress",
  // },
  // {
  //   id: 95,
  //   value: ["Ribes hudsonianum", "Ribes bracteosum", "Ribes lacustre"],
  //   label: "Black Currant",
  // },
];

export default edibleList;
