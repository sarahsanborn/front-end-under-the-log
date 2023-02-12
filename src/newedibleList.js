const newedibleList =[
  {
    id: 1,
    value: [ 'Agoseris aurantiaca', 'Agoseris glauca' ],
    label: 'Agoseris',
    type: 'plant'
  },
  {
    id: 2,
    value: [ 'Sagittaria latifolia' ],
    label: 'Arrowhead',
    type: 'plant'
  },
  {
    id: 3,
    value: [ 'Balsamorhiza sagittata' ],
    label: 'Arrowleaf balsamroot',
    type: 'plant'
  },
  {
    id: 4,
    value: [ 'Asparagus officinalis' ],
    label: 'Asparagus',
    type: 'plant'
  },
  {
    id: 5,
    value: [ 'Xerophyllum tenax' ],
    label: 'Beargrass',
    type: 'plant'
  },
  // {
  //   id: 6,
  //   value: [ 'Galium aparine', 'Galium triflorum' ],
  //   label: 'Bedstraw',
  //   type: 'plant'
  // },
  // {
  //   id: 7,
  //   value: [ 'Bistorta bistortoides' ],
  //   label: 'Bistort',
  //   type: 'plant'
  // },
  // {
  //   id: 8,
  //   value: [ 'Lewisia rediviva' ],
  //   label: 'Bitterroot',
  //   type: 'plant'
  // },
  // {
  //   id: 9,
  //   value: [ 'Ribes bracteosum', 'Ribes lacustre' ],
  //   label: 'Black Currant',
  //   type: 'plant'
  // },
  // {
  //   id: 10,
  //   value: [ 'Vaccinium membranaceum', 'Vaccinium ovatum' ],
  //   label: 'Black Huckleberry',
  //   type: 'plant'
  // },
  // {
  //   id: 11,
  //   value: [ 'Rubus armeniacus', 'Rubus ursinus' ],
  //   label: 'Blackberry',
  //   type: 'plant'
  // },
  // {
  //   id: 12,
  //   value: [ 'Camassia leichtlinii', 'Camassia quamash' ],
  //   label: 'Blue Camas',
  //   type: 'plant'
  // },
  // {
  //   id: 13,
  //   value: [ 'Vaccinium ovalifolium' ],
  //   label: 'Blueberry',
  //   type: 'plant'
  // },
  // {
  //   id: 14,
  //   value: [ 'Borago officinalis' ],
  //   label: 'Borage',
  //   type: 'plant'
  // },
  // {
  //   id: 15,
  //   value: [ 'Pteridium aquilinum' ],
  //   label: 'Bracken',
  //   type: 'plant'
  // },
  // {
  //   id: 16,
  //   value: [ 'Nereocystis luetkeana' ],
  //   label: 'Bull Kelp',
  //   type: 'plant'
  // },
  // {
  //   id: 17,
  //   value: [ 'Arctium minus' ],
  //   label: 'Burdock',
  //   type: 'plant'
  // },
  // {
  //   id: 18,
  //   value: [ 'Nepeta cataria' ],
  //   label: 'Catnip',
  //   type: 'plant'
  // },
  // {
  //   id: 19,
  //   value: [ 'Typha latifolia' ],
  //   label: 'Cattail',
  //   type: 'plant'
  // },
  // {
  //   id: 20,
  //   value: [ 'Cantharellus cibarius', 'Cantharellus formosus' ],
  //   label: 'Chanterelle',
  //   type: 'mushroom'
  // },
  // {
  //   id: 21,
  //   value: [ 'Stellaria media' ],
  //   label: 'Chickweed',
  //   type: 'plant'
  // },
  // {
  //   id: 22,
  //   value: [ 'Cichorium intybus' ],
  //   label: 'Chicory',
  //   type: 'plant'
  // },
  // {
  //   id: 23,
  //   value: [
  //     'Trifolium pratense',
  //     'Trifolium hybridum',
  //     'Trifolium repens',
  //     'Trifolium wormskioldii'
  //   ],
  //   label: 'Clover',
  //   type: 'plant'
  // },
  // {
  //   id: 24,
  //   value: [ 'Melilotus officinalis' ],
  //   label: 'Common Sweet Clover',
  //   type: 'plant'
  // },
  // {
  //   id: 25,
  //   value: [ 'Nuphar lutea', 'Nuphar polysepala' ],
  //   label: 'Cow Lily',
  //   type: 'plant'
  // },
  // {
  //   id: 26,
  //   value: [ 'Vaccinium oxycoccus', 'Vaccinium scoparium' ],
  //   label: 'Cranberry',
  //   type: 'plant'
  // },
  // {
  //   id: 27,
  //   value: [ 'Empetrum nigrum' ],
  //   label: 'Crowberry',
  //   type: 'plant'
  // },
  // {
  //   id: 28,
  //   value: [ 'Taraxacum officinale' ],
  //   label: 'Dandelion',
  //   type: 'plant'
  // },
  // {
  //   id: 29,
  //   value: [ 'Zostera marina' ],
  //   label: 'Eel Grass',
  //   type: 'plant'
  // },
  // {
  //   id: 30,
  //   value: [ 'Sambucus caerulea' ],
  //   label: 'Elderberry',
  //   type: 'plant'
  // },
  // {
  //   id: 31,
  //   value: [ 'Prosartes hookeri' ],
  //   label: 'Fairy Bell',
  //   type: 'plant'
  // },
  // {
  //   id: 32,
  //   value: [ 'Maianthemum racemosum', 'Maianthemum stellatum' ],
  //   label: "False Solomon's Seal",
  //   type: 'plant'
  // },
  // {
  //   id: 33,
  //   value: [ 'Epilobium angustifolium', 'Epilobium latifolium' ],
  //   label: 'Fireweed',
  //   type: 'plant'
  // },
  // {
  //   id: 34,
  //   value: [ 'Nymphaea odorata' ],
  //   label: 'Fragrant Water Lily',
  //   type: 'plant'
  // },
  // {
  //   id: 35,
  //   value: [ 'Macrocystis integrifolia' ],
  //   label: 'Giant Kelp',
  //   type: 'plant'
  // },
  // {
  //   id: 36,
  //   value: [ 'Ribes aureum' ],
  //   label: 'Golden Currant',
  //   type: 'plant'
  // },
  // {
  //   id: 37,
  //   value: [ 'Ribes divaricatum', 'Ribes lobbii' ],
  //   label: 'Gooseberry',
  //   type: 'plant'
  // },
  // {
  //   id: 38,
  //   value: [ 'Glechoma hederacea' ],
  //   label: 'Ground Ivy',
  //   type: 'plant'
  // },
  // {
  //   id: 39,
  //   value: [ 'Boschniakia hookeri' ],
  //   label: 'Groundcone',
  //   type: 'plant'
  // },
  // {
  //   id: 40,
  //   value: [ 'Malva sylvestris' ],
  //   label: 'High Mallow',
  //   type: 'plant'
  // },
  // {
  //   id: 41,
  //   value: [ 'Triteleia grandiflora' ],
  //   label: 'Largeflower Triteleia',
  //   type: 'plant'
  // },
  // {
  //   id: 42,
  //   value: [ 'Claytonia perfoliata' ],
  //   label: "Miner's Lettuce",
  //   type: 'plant'
  // },
  // {
  //   id: 43,
  //   value: [ 'Oxyria digyna' ],
  //   label: 'Mountain Sorrel',
  //   type: 'plant'
  // },
  // { id: 44, value: [], label: 'Mustard', type: 'plant' },
  // {
  //   id: 45,
  //   value: [ 'Leucanthemum vulgare' ],
  //   label: 'Oxeye Daisy',
  //   type: 'plant'
  // },
  // {
  //   id: 46,
  //   value: [ 'Malus fusca' ],
  //   label: 'Pacific Crabapple',
  //   type: 'plant'
  // },
  // {
  //   id: 47,
  //   value: [ 'Salicornia pacifica' ],
  //   label: 'Pacific Glasswort',
  //   type: 'plant'
  // },
  // {
  //   id: 48,
  //   value: [ 'Anaphalis margaritacea' ],
  //   label: 'Pearly Everlasting',
  //   type: 'plant'
  // },
  // {
  //   id: 49,
  //   value: [ 'Matricaria discoidea' ],
  //   label: 'Pineapple Weed',
  //   type: 'plant'
  // },
  // {
  //   id: 50,
  //   value: [ 'Plantago major', 'Plantago lanceolata' ],
  //   label: 'Plantain',
  //   type: 'plant'
  // },
  // {
  //   id: 51,
  //   value: [ 'Opuntia fragilis' ],
  //   label: 'Prickly Pear',
  //   type: 'plant'
  // },
  // {
  //   id: 52,
  //   value: [ 'Clintonia uniflora' ],
  //   label: "Queen's Cup",
  //   type: 'plant'
  // },
  // {
  //   id: 53,
  //   value: [ 'Rubus leucodermis', 'Rubus idaeus', 'Rubus pedatus' ],
  //   label: 'Raspberry',
  //   type: 'plant'
  // },
  // {
  //   id: 54,
  //   value: [ 'Ribes sanguineum' ],
  //   label: 'Red Currant',
  //   type: 'plant'
  // },
  // {
  //   id: 55,
  //   value: [ 'Vaccinium parvifolium' ],
  //   label: 'Red Huckleberry',
  //   type: 'plant'
  // },
  // {
  //   id: 56,
  //   value: [ 'Gaultheria shallon' ],
  //   label: 'Salal',
  //   type: 'plant'
  // },
  // {
  //   id: 57,
  //   value: [ 'Rubus spectabilis' ],
  //   label: 'Salmonberry',
  //   type: 'plant'
  // },
  // {
  //   id: 58,
  //   value: [ 'Prunella vulgaris' ],
  //   label: 'Self Heal',
  //   type: 'plant'
  // },
  // {
  //   id: 59,
  //   value: [ 'Rumex acetosella' ],
  //   label: 'Sheep Sorrel',
  //   type: 'plant'
  // },
  // {
  //   id: 60,
  //   value: [ 'Capsella bursa-pastoris' ],
  //   label: "Shepherd's Purse",
  //   type: 'plant'
  // },
  // {
  //   id: 61,
  //   value: [ 'Claytonia sibirica' ],
  //   label: "Siberian Miner's Lettuce",
  //   type: 'plant'
  // },
  // {
  //   id: 62,
  //   value: [ 'Argentina pacifica' ],
  //   label: 'Silverweed',
  //   type: 'plant'
  // },
  // {
  //   id: 63,
  //   value: [ 'Erythronium grandiflorum' ],
  //   label: 'Snow Lily',
  //   type: 'plant'
  // },
  // {
  //   id: 64,
  //   value: [
  //     'Veronica americana',
  //     'Veronica officinalis',
  //     'Veronica serpyllifolia'
  //   ],
  //   label: 'Speedwell',
  //   type: 'plant'
  // },
  // {
  //   id: 65,
  //   value: [ 'Urtica dioica' ],
  //   label: 'Stinging Nettle',
  //   type: 'plant'
  // },
  // {
  //   id: 66,
  //   value: [ 'Sedum lanceolatum', 'Sedum divergens' ],
  //   label: 'Stonecrop',
  //   type: 'plant'
  // },
  // {
  //   id: 67,
  //   value: [ 'Erodium cicutarium' ],
  //   label: "Stork's Bill",
  //   type: 'plant'
  // },
  // {
  //   id: 68,
  //   value: [ 'Fragaria virginiana', 'Fragaria vesca', 'Fragaria chiloensis' ],
  //   label: 'Strawberry',
  //   type: 'plant'
  // },
  // { id: 69, value: [ 'Rhus glabra' ], label: 'Sumac', type: 'plant' },
  // {
  //   id: 70,
  //   value: [ 'Helianthus annuus' ],
  //   label: 'Sunflower',
  //   type: 'plant'
  // },
  // {
  //   id: 71,
  //   value: [ 'Myrica gale' ],
  //   label: 'Sweet Gale',
  //   type: 'plant'
  // },
  // {
  //   id: 72,
  //   value: [ 'Rubus parviflorus' ],
  //   label: 'Thimbleberry',
  //   type: 'plant'
  // },
  // {
  //   id: 73,
  //   value: [ 'Cirsium arvense', 'Cirsium vulgare' ],
  //   label: 'Thistle',
  //   type: 'plant'
  // },
  // {
  //   id: 74,
  //   value: [ 'Lilium columbianum' ],
  //   label: 'Tiger Lily',
  //   type: 'plant'
  // },
  // {
  //   id: 75,
  //   value: [ 'Streptopus amplexifolius', 'Streptopus lanceolatus' ],
  //   label: 'Twisted Stalk',
  //   type: 'plant'
  // },
  // {
  //   id: 76,
  //   value: [ 'Viola adunca', 'Viola tricolor', 'Viola palustris' ],
  //   label: 'Violet',
  //   type: 'plant'
  // },
  // {
  //   id: 77,
  //   value: [ 'Rorippa nasturtium-aquaticum' ],
  //   label: 'Watercress',
  //   type: 'plant'
  // },
  // {
  //   id: 78,
  //   value: [ 'Mentha spicata', 'Mentha piperita' ],
  //   label: 'Wild Mint',
  //   type: 'plant'
  // },
  // {
  //   id: 79,
  //   value: [ 'Rosa gymnocarpa', 'Rosa nutkana' ],
  //   label: 'Wild Rose',
  //   type: 'plant'
  // },
  // {
  //   id: 80,
  //   value: [
  //     'Oxalis articulata',
  //     'Oxalis corniculata',
  //     'Oxalis dillenii',
  //     'Oxalis stricta'
  //   ],
  //   label: 'Wood Sorrel',
  //   type: 'plant'
  // },
];

export default newedibleList;