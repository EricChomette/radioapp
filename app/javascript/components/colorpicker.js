
function colorpicker() {
(function ($) {
  $.fn.colorCapture = function (options) {
    var __bind = function (fn, self) {
      return function () {
        return fn.apply(self, arguments);
      };
    };

    var settings = {
      change: function (e, color) { },
      select: function (e, color) { },
      grid: true
    };

    var ColorCapture = (function () {
      function ColorCapture(input, o) {
        let ColorCapture = this;
        this.display = {
          input: input
        };
        this.options = o;
        buildCanvas(this).then(function (res) {
          ColorCapture.bindEvents(ColorCapture);
        });
      }

      ColorCapture.prototype.bindEvents = function () {
        this.change = __bind(this.change, this);
        this.select = __bind(this.select, this);

        document.addEventListener("mousemove", this.change, true);
        document.addEventListener("click", this.select, true);

        // window.addEventListener("resize", updateCanvas(this), true);
      };

      ColorCapture.prototype.change = function (e) {
        // console.log("CHANGE");

        // console.log("x: ", e.pageX, "y: ", e.pageY);

        buildBlob(this, e);
        let color = getColor(this, e);
        this.display.input.value = color;

        this.options.change.call(this, e, color);
      };

      ColorCapture.prototype.select = function (e) {
        // console.log("SELECT");
        document.removeEventListener("mousemove", this.change, true);
        document.removeEventListener("click", this.select, true);

        let color = getColor(this, e);
        this.display.input.value = color;

        this.options.select.call(this, e, color);
        this.destroy();
      };

      ColorCapture.prototype.destroy = function () {
        this.display.cursor.remove();
        this.display.canvas.remove();
        this.display.image.remove();

        $(this.display.input).removeData("colorCapture");
      };

      var getColor = function (ColorCapture, e) {
        var color = ColorCapture.display.canvas
          .getContext("2d")
          .getImageData(e.pageX, e.pageY, 1, 1).data;
        var rgb = {
          r: color[0],
          g: color[1],
          b: color[2]
        };
        if (rgb.r > 255 || rgb.g > 255 || rgb.b > 255)
          throw "Invalid color component";
        return (
          "#" +
          ("000000" + ((rgb.r << 16) | (rgb.g << 8) | rgb.b).toString(16)).slice(-6)
        );
      };

      var buildBlob = function (ColorCapture, e) {
        ColorCapture.display.cursor.style.left = e.pageX + "px";
        ColorCapture.display.cursor.style.top = e.pageY + "px";
        ColorCapture.display.blobCanvas
          .getContext("2d")
          .drawImage(
            ColorCapture.display.image,
            e.pageX - ColorCapture.display.pos.width / 2,
            e.pageY - ColorCapture.display.pos.height / 2,
            ColorCapture.display.pos.width,
            ColorCapture.display.pos.height,
            0,
            0,
            ColorCapture.display.pos.width,
            ColorCapture.display.pos.height
          );

        ColorCapture.display.blobImage.src = ColorCapture.display.blobCanvas.toDataURL(
          "image/png"
        );
        ColorCapture.display.cursorBlob.appendChild(ColorCapture.display.blobImage);
      };

      var buildCanvas = function (ColorCapture) {
        // create cursor
        var cursor = document.createElement("span");
        var cursorEye = document.createElement("span");
        var cursorBlob = document.createElement("span");
        cursor.classList.add("cc-cursor");
        cursorEye.classList.add("cc-cursor-eye");
        cursorBlob.classList.add("cc-cursor-blob");
        if (options.grid) cursorBlob.classList.add("cc-cursor-blob-grid");

        return html2canvas(document.documentElement, {
          foreignObjectRendering: true,
          letterRendering: true,
          useCORS: true,
          scale: window.devicePixelRatio
        }).then(function (canvas) {
          canvas.classList.add("cc-canvas");
          document.body.appendChild(canvas);

          // create image
          var image = document.createElement("img");
          image.classList.add("cc-image");
          image.src = canvas.toDataURL("image/png");
          document.body.appendChild(image);

          // append cursor
          cursor.appendChild(cursorEye);
          cursor.appendChild(cursorBlob);
          document.body.appendChild(cursor);

          var pos = {
            x: cursorEye.offsetLeft,
            y: cursorEye.offsetTop,
            width: cursorEye.offsetWidth,
            height: cursorEye.offsetHeight
          };

          var blobCanvas = document.createElement("canvas");
          blobCanvas.classList.add("cc-blob-canvas");
          blobCanvas.width = pos.width;
          blobCanvas.height = pos.height;

          // create image to be shown in cursor blob
          var blobImage = new Image();
          blobImage.src = canvas.toDataURL("image/png");
          blobImage.classList.add("cc-blob-image");

          blobCanvas
            .getContext("2d")
            .drawImage(
              image,
              pos.left,
              pos.top,
              pos.width,
              pos.height,
              0,
              0,
              pos.width,
              pos.height
            );
          cursorBlob.appendChild(blobCanvas);
          blobImage.src = blobCanvas.toDataURL("image/png");
          cursorBlob.appendChild(blobImage);

          ColorCapture.display.cursor = cursor;
          ColorCapture.display.cursorEye = cursorEye;
          ColorCapture.display.cursorBlob = cursorBlob;
          ColorCapture.display.pos = pos;

          ColorCapture.display.canvas = canvas;
          ColorCapture.display.image = image;
          ColorCapture.display.blobCanvas = blobCanvas;
          ColorCapture.display.blobImage = blobImage;
        });
      };

      return ColorCapture;
    })();

    return this.each(function () {
      if (options) $.extend(settings, options);

      var colorCapture = new ColorCapture(this, settings);
      $(this).data("colorCapture", colorCapture);

      return colorCapture;
    });
  };
})(jQuery);

$(function () {
  $(".minicolors_input").minicolors();

  $(document).on("click", ".minicolors_eyedropper", function (e) {
    e.preventDefault();
    // trigger on input
    $(".cc-input").colorCapture({
      change: function (e, color) {
        $(".minicolors-swatch-color").css("background-color", color);
        $(".wrap").css("border-color", color);
      }
    });
  });
});
};

export { colorpicker };