import getType from '../utils/typeof';

const vCopy = {
  name: 'copy',
  beforeMount(el, { value }) {
    if (getType(value) === 'object') {
      const { text, success, error } = value;

      if (getType(success) !== 'function') {
        console.warn(`[v-copy]: The 'success' must be a function`);
      }

      el.$value = text;
      el.handler = () => {
        if (!el.$value) {
          error && error();
          return;
        }
        // 动态创建 textarea 标签
        const textarea = document.createElement('textarea');
        // 将该 textarea 设为 readonly 防止 iOS 下自动唤起键盘，同时将 textarea 移出可视区域
        textarea.readOnly = 'readonly';
        textarea.style.position = 'absolute';
        textarea.style.left = '-9999px';
        // 将要 copy 的值赋给 textarea 标签的 value 属性
        textarea.value = el.$value;
        // 将 textarea 插入到 body 中
        document.body.appendChild(textarea);
        // 选中值并复制
        textarea.select();
        const result = document.execCommand('copy');
        if (result) {
          success();
        }
        document.body.removeChild(textarea);
      };
      // 绑定点击事件，就是所谓的一键 copy 啦
      el.addEventListener('click', el.handler);
    } else {
      throw new Error(
        `[v-copy]: The 'value' must be an object ({ text: string; success: Function; error?: Function })`
      );
    }
  },
  // 当传进来的值更新的时候触发
  updated(el, { value }) {
    el.$value = value.text;
  },
  // 指令与元素解绑的时候，移除事件绑定
  unmounted(el) {
    el.removeEventListener('click', el.handler);
  }
};

export default vCopy;
