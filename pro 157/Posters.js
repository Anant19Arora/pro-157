AFRAME.registerComponent("comics-posters", {
  init: function () {
    this.postersContainer = this.el;
    this.posters();
  },

  posters: function () {
    const postersRef = [
      {
        url: "download (1).jpg",
      },
      {
        url: "./download (2).jpg",
      },

      {
        url: "./download (3).png",
      },
      {
        url: "./download.jpg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of postersRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position, item.id);

      // Poster Element
      const poster = this.createPoster(item);
      borderEl.appendChild(poster);

      this.postersContainer.appendChild(borderEl);
    }
  },
  createBorder: function (position, id) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("id", id);
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 22,
      height: 40,
    });

    entityEl.setAttribute("position", position);
    entityEl.setAttribute("material", { color: "white" });

    return entityEl;
  },
  createPoster: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 20,
      height: 28,
    });

    entityEl.setAttribute("position", { x: 0, y: 5, z: 0.1 });
    entityEl.setAttribute("material", { src: item.url });

    return entityEl;
  },
});
