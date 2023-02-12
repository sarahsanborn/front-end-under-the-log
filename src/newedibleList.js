const newedibleList = [
  {
    id: 1,
    value: [ 'Agoseris aurantiaca', 'Agoseris glauca' ],
    label: 'Agoseris'
  },
  { id: 2, 
    value: [ 'Sagittaria latifolia' ], 
    label: 'Arrowhead' 
  },
  {
    id: 3,
    value: [ 'Balsamorhiza sagittata' ],
    label: 'Arrowleaf balsamroot'
  },
  { id: 4, 
    value: [ 'Asparagus officinalis' ], 
    label: 'Asparagus' 
  },
  { id: 5, 
    value: [ 'Xerophyllum tenax' ], 
    label: 'Beargrass' 
  },
  {
    id: 6,
    value: [ 'Galium aparine', 'Galium triflorum' ],
    label: 'Bedstraw'
  },
  { id: 7, 
    value: [ 'Bistorta bistortoides' ], 
    label: 'Bistort' 
  },
  { id: 8, 
    value: [ 'Lewisia rediviva' ], 
    label: 'Bitterroot' 
  },
  {
    id: 9,
    value: [ 'Ribes bracteosum', 'Ribes lacustre' ],
    label: 'Black Currant'
  },
  {
    id: 10,
    value: [ 'Vaccinium membranaceum', 'Vaccinium ovatum' ],
    label: 'Black Huckleberry'
  },
  {
    id: 11,
    value: [ 'Rubus armeniacus', 'Rubus ursinus' ],
    label: 'Blackberry'
  },
  {
    id: 12,
    value: [ 'Camassia leichtlinii', 'Camassia quamash' ],
    label: 'Blue Camas'
  },
  { id: 13, 
    value: [ 'Vaccinium ovalifolium' ], 
    label: 'Blueberry' 
  },
  { id: 14, 
    value: [ 'Borago officinalis' ], 
    label: 'Borage' 
  },
  { id: 15, 
    value: [ 'Pteridium aquilinum' ], 
    label: 'Bracken' 
  },
  { id: 16, 
    value: [ 'Nereocystis luetkeana' ], 
    label: 'Bull Kelp' 
  },
  { id: 17, 
    value: [ 'Arctium minus' ], 
    label: 'Burdock' 
  },
  { id: 18, 
    value: [ 'Nepeta cataria' ], 
    label: 'Catnip' 
  },
  { id: 19, 
    value: [ 'Typha latifolia' ], 
    label: 'Cattail' 
  },
  {
    id: 20,
    value: [ 'Cantharellus cibarius', 'Cantharellus formosus' ],
    label: 'Chanterelle'
  },
  { id: 21, 
    value: [ 'Stellaria media' ], 
    label: 'Chickweed' 
  },
  { id: 22, 
    value: [ 'Cichorium intybus' ], 
    abel: 'Chicory' 
  },
  {
    id: 23,
    value: [
      'Trifolium pratense',
      'Trifolium hybridum',
      'Trifolium repens',
      'Trifolium wormskioldii'
    ],
    label: 'Clover'
  },
  {
    id: 24,
    value: [ 'Melilotus officinalis' ],
    label: 'Common Sweet Clover'
  },
  {
    id: 25,
    value: [ 'Nuphar lutea', 'Nuphar polysepala' ],
    label: 'Cow Lily'
  },
  {
    id: 26,
    value: [ 'Vaccinium oxycoccus', 'Vaccinium scoparium' ],
    label: 'Cranberry'
  },
  { id: 27, 
    value: [ 'Empetrum nigrum' ], 
    label: 'Crowberry' 
  },
  { id: 28, 
    value: [ 'Taraxacum officinale' ], 
    label: 'Dandelion' 
  },
  { id: 29, 
    value: [ 'Zostera marina' ], 
    label: 'Eel Grass' 
  },
  { id: 30, 
    value: [ 'Sambucus caerulea' ], 
    label: 'Elderberry' 
  },
  { id: 31, 
    value: [ 'Prosartes hookeri' ], 
    label: 'Fairy Bell' 
  },
  {
    id: 32,
    value: [ 'Maianthemum racemosum', 'Maianthemum stellatum' ],
    label: "False Solomon's Seal"
  },
  {
    id: 33,
    value: [ 'Epilobium angustifolium', 'Epilobium latifolium' ],
    label: 'Fireweed'
  },
  {
    id: 34,
    value: [ 'Nymphaea odorata' ],
    label: 'Fragrant Water Lily'
  },
  {
    id: 35,
    value: [ 'Macrocystis integrifolia' ],
    label: 'Giant Kelp'
  },
  { id: 36, value: [ 'Ribes aureum' ], label: 'Golden Currant' },
  {
    id: 37,
    value: [ 'Ribes divaricatum', 'Ribes lobbii' ],
    label: 'Gooseberry'
  },
  { id: 38, value: [ 'Glechoma hederacea' ], label: 'Ground Ivy' },
  { id: 39, value: [ 'Boschniakia hookeri' ], label: 'Groundcone' },
  { id: 40, value: [ 'Malva sylvestris' ], label: 'High Mallow' },
  {
    id: 41,
    value: [ 'Triteleia grandiflora' ],
    label: 'Largeflower Triteleia'
  },
  {
    id: 42,
    value: [ 'Claytonia perfoliata' ],
    label: "Miner's Lettuce"
  },
  { id: 43, value: [ 'Oxyria digyna' ], label: 'Mountain Sorrel' },
  { id: 44, value: [], label: 'Mustard' },
  { id: 45, value: [ 'Leucanthemum vulgare' ], label: 'Oxeye Daisy' },
  { id: 46, value: [ 'Malus fusca' ], label: 'Pacific Crabapple' },
  {
    id: 47,
    value: [ 'Salicornia pacifica' ],
    label: 'Pacific Glasswort'
  },
  {
    id: 48,
    value: [ 'Anaphalis margaritacea' ],
    label: 'Pearly Everlasting'
  },
  {
    id: 49,
    value: [ 'Matricaria discoidea' ],
    label: 'Pineapple Weed'
  },
  {
    id: 50,
    value: [ 'Plantago major', 'Plantago lanceolata' ],
    label: 'Plantain'
  },
  { id: 51, value: [ 'Opuntia fragilis' ], label: 'Prickly Pear' },
  { id: 52, value: [ 'Clintonia uniflora' ], label: "Queen's Cup" },
  {
    id: 53,
    value: [ 'Rubus leucodermis', 'Rubus idaeus', 'Rubus pedatus' ],
    label: 'Raspberry'
  },
  { id: 54, value: [ 'Ribes sanguineum' ], label: 'Red Currant' },
  {
    id: 55,
    value: [ 'Vaccinium parvifolium' ],
    label: 'Red Huckleberry'
  },
  { id: 56, value: [ 'Gaultheria shallon' ], label: 'Salal' },
  { id: 57, value: [ 'Rubus spectabilis' ], label: 'Salmonberry' },
  { id: 58, value: [ 'Prunella vulgaris' ], label: 'Self Heal' },
  { id: 59, value: [ 'Rumex acetosella' ], label: 'Sheep Sorrel' },
  {
    id: 60,
    value: [ 'Capsella bursa-pastoris' ],
    label: "Shepherd's Purse"
  },
  {
    id: 61,
    value: [ 'Claytonia sibirica' ],
    label: "Siberian Miner's Lettuce"
  },
  { id: 62, value: [ 'Argentina pacifica' ], label: 'Silverweed' },
  { id: 63, value: [ 'Erythronium grandiflorum' ], label: 'Snow Lily' },
  {
    id: 64,
    value: [
      'Veronica americana',
      'Veronica officinalis',
      'Veronica serpyllifolia'
    ],
    label: 'Speedwell'
  },
  { id: 65, value: [ 'Urtica dioica' ], label: 'Stinging Nettle' },
  {
    id: 66,
    value: [ 'Sedum lanceolatum', 'Sedum divergens' ],
    label: 'Stonecrop'
  },
  { id: 67, value: [ 'Erodium cicutarium' ], label: "Stork's Bill" },
  {
    id: 68,
    value: [ 'Fragaria virginiana', 'Fragaria vesca', 'Fragaria chiloensis' ],
    label: 'Strawberry'
  },
  { id: 69, value: [ 'Rhus glabra' ], label: 'Sumac' },
  { id: 70, value: [ 'Helianthus annuus' ], label: 'Sunflower' },
  { id: 71, value: [ 'Myrica gale' ], label: 'Sweet Gale' },
  { id: 72, value: [ 'Rubus parviflorus' ], label: 'Thimbleberry' },
  {
    id: 73,
    value: [ 'Cirsium arvense', 'Cirsium vulgare' ],
    label: 'Thistle'
  },
  { id: 74, value: [ 'Lilium columbianum' ], label: 'Tiger Lily' },
  {
    id: 75,
    value: [ 'Streptopus amplexifolius', 'Streptopus lanceolatus' ],
    label: 'Twisted Stalk'
  },
  {
    id: 76,
    value: [ 'Viola adunca', 'Viola tricolor', 'Viola palustris' ],
    label: 'Violet'
  },
  {
    id: 77,
    value: [ 'Rorippa nasturtium-aquaticum' ],
    label: 'Watercress'
  },
  {
    id: 78,
    value: [ 'Mentha spicata', 'Mentha piperita' ],
    label: 'Wild Mint'
  },
  {
    id: 79,
    value: [ 'Rosa gymnocarpa', 'Rosa nutkana' ],
    label: 'Wild Rose'
  },
  {
    id: 80,
    value: [
      'Oxalis articulata',
      'Oxalis corniculata',
      'Oxalis dillenii',
      'Oxalis stricta'
    ],
    label: 'Wood Sorrel'
  },
];

export default newedibleList;