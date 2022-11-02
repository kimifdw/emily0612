# 栈

## 单调栈

1. 特性。
   1. 先进后出
   2. 从栈顶到栈底的元素是**严格递增或递减**
   3. **栈顶操作**
   
2. 适用场景

   对于一个数组arr, 针对每个数，寻找它和它左 / 右边第一个比它大 / 小的数的值，以及相距多少个数

3. 过程。
   1. 对于单调递增栈，若当前进栈元素为 `e`，从栈顶开始遍历元素，把小于 `e` 或者等于 `e` 的元素弹出栈，直接遇到一个大于 `e` 的元素或者栈为空为止，然后再把 `e` 压入栈中。
   2. 对于单调递减栈，则每次弹出的是大于 `e` 或者等于 `e` 的元素 

4. 用途。只处理`Next Greater Element`问题

5. 套路。

   ```伪代码
   new Stack
   for (遍历处理集) {
   	while (栈非空 && 达到预期条件) {
   		出栈并处理, 保存到结果集
   	}
   	入栈（栈中保存数组的索引)
   }
   while(栈非空) {
   	出栈处理剩余栈内元素
   }
   ```

   ```java
   public int[] dailyTemperatures(int[] T) {
           // 栈存放的是数组元素的下标
           Stack<Integer> stack = new Stack<>();
       	// 返回差距天数的数组
           int[] ret = new int[T.length];
           for (int i = 0; i < T.length; i++) {
               while (!stack.isEmpty() && T[i] > T[stack.peek()]) {
                   // 出栈
                   int idx = stack.pop();
                   ret[idx] = i - idx;
               }
               stack.push(i);
           }
           return ret;
       }
   ```

6. 参考文档
   1. [算法笔记-单调栈](https://www.jianshu.com/p/35d9cf84a35d)
   2. [刷题笔记6（浅谈单调栈）](https://zhuanlan.zhihu.com/p/26465701)
   3. [特殊数据结构(单调栈)](https://www.cnblogs.com/RioTian/p/13462825.html)