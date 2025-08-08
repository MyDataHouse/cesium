/**
 * 表示一个带有订阅回调功能的瓦片坐标管理类。
 * @class
 */
class TileCoordinatesMap {
  /**
   * 创建 TileCoordinates 实例。
   * @constructor
   */
  constructor() {
    /**
     * 存储瓦片坐标的 Map。
     * @type {Map<string, any>}
     */
    this.tileCoordinates = new Map();
  }

  /**
   * 订阅更新，如果已设置回调函数则执行。
   * @returns {void}
   */
  subscribe() {
    if (this.callback) {
      this.callback(this);
    }
  }

  /**
   * 设置回调函数，在订阅时调用。
   * @param {Function} callback - 要注册的回调函数。
   * @returns {void}
   */
  setCallback(callback) {
    this.callback = callback;
  }
}

export default TileCoordinatesMap;
