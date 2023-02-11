const clusterLayer = {
  id: 'clusters',
  type: 'circle',
  source: 'taxa',
  filter: ['has', 'point_count'],
  paint: { 
    'circle-color': ['step', ['get', 'point_count'], '#00A6A6', 100, '#F3B61F', 750, '#ff6b6b'],
    'circle-radius': ['step', ['get', 'point_count'], 20, 100, 30, 750, 40]
  }
};

const clusterCountLayer = {
  id: 'cluster-count',
  type: 'symbol',
  source: 'taxa',
  filter: ['has', 'point_count'],
  layout: {
    'text-field': '{point_count_abbreviated}',
    'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
    'text-size': 12
  }
};

const unclusteredPointLayer = {
  id: 'unclustered-point',
  type: 'circle',
  source: 'taxa',
  filter: ['!', ['has', 'point_count']],
  paint: {
    'circle-color': '#F79824',
    'circle-radius': 5,
    'circle-stroke-width': 1,
    'circle-stroke-color': '#265061'
  }
};

export { clusterLayer, clusterCountLayer, unclusteredPointLayer };
