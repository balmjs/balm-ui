const vDraggable = {
  name: 'draggable',
  mounted(el) {
    el.style.cursor = 'move';
    el.onmousedown = function (e) {
      let disX = e.pageX - el.offsetLeft;
      let disY = e.pageY - el.offsetTop;

      document.onmousemove = function (e) {
        let x = e.pageX - disX;
        let y = e.pageY - disY;
        let maxX =
          document.body.clientWidth -
          parseInt(window.getComputedStyle(el).width);
        let maxY =
          document.body.clientHeight -
          parseInt(window.getComputedStyle(el).height);

        if (x < 0) {
          x = 0;
        } else if (x > maxX) {
          x = maxX;
        }

        if (y < 0) {
          y = 0;
        } else if (y > maxY) {
          y = maxY;
        }

        el.style.left = x + 'px';
        el.style.top = y + 'px';
      };

      document.onmouseup = function () {
        document.onmousemove = document.onmouseup = null;
      };
    };
  }
};

export default vDraggable;
