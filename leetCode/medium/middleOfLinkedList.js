var middleNode = function (head) {
    let count = 0;
    const dumyHead = new ListNode(null);
    dumyHead.next = head;
    let head1 = dumyHead;
    let head2 = dumyHead;
    while (head1.next !== null) {
      count++;
      head1 = head1.next;
    }
    if (count % 2 === 0) {
      count++;
    }
    let i = 0;
    while (i < count / 2) {
      head2 = head2.next;
      i++;
    }
    return head2;
  };
  
  const middleNodeRes = middleNode([1, 2, 3, 4, 5]);
  console.log("middleNodeRes", middleNodeRes);