class Palette {
  constructor() {
    this.colors = [new Colors, new Colors, new Colors, new Colors, new Colors];
    this.id = Date.now()
  }

  lockColor(color) {
    for (var i = 0; i < this.colors.length; i++) {
      if (this.colors[i].hexCode === color.hexCode) {
      this.colors[i].locked = true;
      }
    }
  }

  refreshColors() {
    for (var i = 0; i < this.colors.length; i++) {
      if (this.colors[i].locked === false) {
        this.colors[i] = new Colors;
      }
    }
  }
}