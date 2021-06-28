Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [
      {
        "pagePath": "/pages/index/index",
        "iconPath": "/assets/image/index.png",
        "selectedIconPath": "/assets/image/index_active.png",
        "text": "首页"
      },
      {
        "pagePath": "/pages/index/index",
        "iconPath": "/assets/image/open.png",
        "selectedIconPath": "/assets/image/open_active.png",
        "text": "开门"
      },
      {
        "pagePath": "/pages/index/index",
        "iconPath": "/assets/image/my.png",
        "selectedIconPath": "/assets/image/my_active.png",
        "text": "我的"
      }
  ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})