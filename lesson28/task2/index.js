export { markFavorites };

const favorites = ['id-2'];
const tree = {
  id: 'id-1',
  name: 'Product',
  nodes: [
    {
      id: 'id-2',
      name: 'Food',
      nodes: [],
    },
  ],
};
const markFavorites = (tree, favorites) => {
  const isFavorites = favorites.includes(tree.id);

  return {
    ...tree,
    isFavorites,
    nodes: tree.nodes.map(childNode => markFavorites(childNode, favorites)),
  };
};

const result = markFavorites(tree, favorites);

console.log(result);
