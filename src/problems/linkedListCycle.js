export default function linkedListHasCycle(list) {
  let hare = list;
  let turtle = list;

  while (hare && turtle) {
    turtle = turtle.next;
    hare = hare.next && hare.next.next;
    if (turtle === hare) break;
  }

  return !!hare;
}
