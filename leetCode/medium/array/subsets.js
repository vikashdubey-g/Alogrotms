var subsets = function (nums) {
    const len = nums.length;
    if (!len) return;
    const res = [];
  
    // recursive helper
    const dfs = (i, nums, slate) => {
      //base case
      if (i === nums.length) {
        res.push(slate.slice());
        return;
      }
      // exclude ith value
      dfs(i + 1, nums, slate);
  
      // include
      slate.push(nums[i]);
      dfs(i + 1, nums, slate);
      slate.pop();
    };
  
    dfs(0, nums, []);
  
    return res;
  };
  
  var subsets = function (nums) {
    const res = [];
    const traverse = (temp, rest) => {
      res.push(temp);
      for (let i = 0; i < rest.length; i++) {
        traverse(temp.concat(rest[i]), rest.slice(i + 1));
      }
    };
    traverse([], nums);
    return res;
  };
  
  var subsets = function (nums) {
    const res = [];
    const traverse = (temp, start) => {
      res.push(temp);
      for (let i = start; i < nums.length; i++) {
        traverse(temp.concat(nums[i]), i + 1);
      }
    };
    traverse([], 0);
    return res;
  };
  
  const subsetsRes = subsets([1, 2, 3]);
  console.log("subsetsRes", subsetsRes);
  
  
  