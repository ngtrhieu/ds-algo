export const dijkstra = (graph, source) => {
  if (!graph || !source) return undefined;
  if (!graph.getNeighbors || !graph.getDistance) return undefined;

  const visiting = [source];

  const visited = { source: true };

  const vertices = {
    [source]: {
      dist: 0,
      prev: null,
    },
  };

  while (visiting.length) {
    const smallestIndex = 0;
    for (let i = 1; i < visiting.length; ++i) {
      if (vertices[visiting[i]].dist < vertices[visiting[smallestIndex]].dist) {
        smallestIndex = i;
      }
    }
    const visit = visiting[smallestIndex];
    visiting.splice(smallestIndex, 1);

    const neighbors = graph.getNeighbors(visit);
    neighbors.forEach(neighbor => {
      if (!(neighbor in visited)) {
        // queue neighbor for visit next sometime
        visiting.push(neighbor);
        visited[neighbor] = true;
      }

      // initialize neighbor if not exist yet
      if (!(neighbor in vertices)) {
        vertices[neighbor] = {
          dist: Infinity,
          prev: null,
        };
      }

      // update neighbor if there is a shorter path via `visit`
      const distToNeighbor =
        vertices[visit].dist + graph.getDistance(visit, neighbor);
      if (vertices[neighbor].dist > distToNeighbor) {
        vertices[neighbor] = {
          dist: distToNeighbor,
          prev: visit,
        };
      }
    });
  }

  return vertices;
};
