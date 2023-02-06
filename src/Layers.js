import { FaLeaf } from "react-icons/fa";
const leaf = <FaLeaf></FaLeaf>

const clusterLayer = {
  id: 'clusters',
  type: 'circle',
  source: 'taxa',
  filter: ['has', 'point_count'],
  paint: { 
    'circle-color': ['step', ['get', 'point_count'], '#51bbd6', 100, '#f1f075', 750, '#f28cb1'],
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
  // layout: {
  //   'icon-image': "{leaf}",
  //   'icon-size': 0.25
  // }
  // layout: {
  //   'icon-image': <FaLeaf></FaLeaf>,
  //   'icon-size': 0.25
  // }
  paint: {
    'circle-color': '#FC6A03',
    'circle-radius': 5,
    'circle-stroke-width': 1,
    'circle-stroke-color': '#fff'
  }
};

export { clusterLayer, clusterCountLayer, unclusteredPointLayer };
