import { dijkstra } from './dijkstra';

describe('dijkstra trivial', () => {
  test('empty or invalid inputs', () => {
    expect(dijkstra()).toBe(undefined);
  });

  describe('wikipedia example graph', () => {
    const createGraph = () => {
      // Check here for the visualization of the graph
      const vertices = {
        1: {
          2: 14,
          3: 9,
          2: 7,
        },
        2: {
          1: 7,
          3: 10,
          4: 15,
        },
        3: {
          1: 9,
          2: 10,
          4: 11,
          6: 2,
        },
        4: {
          2: 15,
          3: 11,
          5: 6,
        },
        5: {
          4: 6,
          6: 9,
        },
        6: {
          1: 14,
          3: 2,
          5: 9,
        },
      };
      const getDistance = (x, y) => vertices[x][y];
      const getNeighbors = x => Object.keys(vertices[x]);
      return { getDistance, getNeighbors };
    };

    test('dijkstra graph start at vertex 1', () => {
      const graph = createGraph();
      const result = dijkstra(graph, 1);

      expect(result[1].dist).toBe(0);
      expect(result[2].dist).toBe(7);
      expect(result[3].dist).toBe(9);
      expect(result[4].dist).toBe(20);
      expect(result[5].dist).toBe(20);
      expect(result[6].dist).toBe(11);
    });

    test('dijkstra graph start at vertex 2', () => {
      const graph = createGraph();
      const result = dijkstra(graph, 2);

      expect(result[1].dist).toBe(7);
      expect(result[2].dist).toBe(0);
      expect(result[3].dist).toBe(10);
      expect(result[4].dist).toBe(15);
      expect(result[5].dist).toBe(21);
      expect(result[6].dist).toBe(12);
    });

    test('dijkstra graph start at vertex 5', () => {
      const graph = createGraph();
      const result = dijkstra(graph, 5);

      expect(result[1].dist).toBe(20);
      expect(result[2].dist).toBe(21);
      expect(result[3].dist).toBe(11);
      expect(result[4].dist).toBe(6);
      expect(result[5].dist).toBe(0);
      expect(result[6].dist).toBe(9);
    });
  });
});
