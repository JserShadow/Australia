'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    '__code__': {
      readme: ''
    },

    pageData: {}
  },
  onLoad: function onLoad(options) {
    var that = this;
    wx.request({
      url: 'http://localhost:7001/getSingleGoods',
      data: {
        '__code__': {
          readme: ''
        },
        _id: options.id },
      success: function success(res) {
        that.pageData = res.data;
      }
    });
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4Lnd4cCJdLCJuYW1lcyI6WyJkYXRhIiwicGFnZURhdGEiLCJvbkxvYWQiLCJvcHRpb25zIiwidGhhdCIsInd4IiwicmVxdWVzdCIsInVybCIsIl9pZCIsImlkIiwic3VjY2VzcyIsInJlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBT0VBLFFBQU07QUFBQTtBQUFBO0FBQUE7O0FBQ0pDLGNBQVU7QUFETixHO0FBR05DLFEsa0JBQU9DLE8sRUFBUztBQUNkLFFBQU1DLE9BQU8sSUFBYjtBQUNBQyxPQUFHQyxPQUFILENBQVc7QUFDVEMsV0FBSyxzQ0FESTtBQUVUUCxZQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUVRLGFBQUtMLFFBQVFNLEVBQWYsRUFGRztBQUdUQyxhQUhTLG1CQUdEQyxHQUhDLEVBR0k7QUFDWFAsYUFBS0gsUUFBTCxHQUFnQlUsSUFBSVgsSUFBcEI7QUFDRDtBQUxRLEtBQVg7QUFPRCIsImZpbGUiOiJpbmRleC53eHAiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGNvbmZpZzoge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfllYblk4Hor6bmg4UnLFxuICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgJ3d4Yy1wcmljZSc6ICdAbWludWkvd3hjLXByaWNlJyxcbiAgICB9XG4gIH0sXG4gIGRhdGE6IHtcbiAgICBwYWdlRGF0YToge31cbiAgfSxcbiAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICB3eC5yZXF1ZXN0KHtcbiAgICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6NzAwMS9nZXRTaW5nbGVHb29kcycsXG4gICAgICBkYXRhOiB7IF9pZDogb3B0aW9ucy5pZCB9LFxuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgdGhhdC5wYWdlRGF0YSA9IHJlcy5kYXRhO1xuICAgICAgfVxuICAgIH0pXG4gIH1cbn0iXX0=