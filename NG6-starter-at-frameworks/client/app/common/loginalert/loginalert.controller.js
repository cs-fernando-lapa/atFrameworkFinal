
class LoginalertController {
  constructor() {
  }

  init(){
    this.isLoginalertCollapsed = false;
    this.toggleLoginalert = () => this.isLoginalertCollapsed = !this.isLoginalertCollapsed;
  }

  toggleLoginalert() {
    this.isLoginalertCollapsed = !this.isLoginalertCollapsed;
  }
}

export default LoginalertController;
