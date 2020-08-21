class loader {
  constructor(loading) {
    this.loading = loading;
  }
  load() {
    loading.style = "display:flex";
  }
  unload() {
    loading.style = "display:none";
  }
  startLoading() {
    setTimeout(this.load, 0);
  }
  stopLoading() {
    setTimeout(this.unload, 6000);
  }
}

class followMouse {
  constructor(cursor, body) {
    this.cursor = cursor;
    this.body = body;
  }
  follow(e) {
    let x = e.clientX;
    let y = e.clientY;

    if (x <= this.body.clientWidth - 20) {
      this.cursor.style.left = `${x}px`;
      this.cursor.style.top = `${y}px`;
    } else {
      this.cursor.style.left = `${x - 20}px`;
      this.cursor.style.top = `${y - 20}px`;
    }
  }
}
