'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App({
  globalData: {
    firstData: []
  },
  methods: {
    showDialog: function showDialog() {
      var dialogComponent = this.selectComponent('.wxc-dialog');
      dialogComponent && dialogComponent.show();
    },
    hideDialog: function hideDialog() {
      var dialogComponent = this.selectComponent('.wxc-dialog');
      dialogComponent && dialogComponent.hide();
    },
    onConfirm: function onConfirm() {
      var that = this;
      wx.request({
        url: 'https://australia.hhp.im/getGoodsByCatagory',
        method: 'POST',
        data: { catagory: '化妆品' },
        success: function success(res) {
          that.globalData.firstData = res.data;
          console.log('success');
        },
        complete: function complete() {
          console.log('completed');
        },
        fail: function fail() {
          that.showDialog();
        }
      });
    },
    onCancel: function onCancel() {
      this.hideDialog();
    }
  },
  onLaunch: function onLaunch() {},
  onShow: function onShow() {
    var that = this;
    console.log('start');
    wx.request({
      url: 'https://australia.hhp.im/getGoodsByCatagory',
      method: 'POST',
      data: { catagory: '化妆品' },
      success: function success(res) {
        that.globalData.firstData = res.data;
        console.log('success');
      },
      complete: function complete() {
        console.log('completed');
      },
      fail: function fail() {
        that.methods.showDialog();
      }
    });
  },
  onHide: function onHide() {}
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC53eGEiXSwibmFtZXMiOlsiZ2xvYmFsRGF0YSIsImZpcnN0RGF0YSIsIm1ldGhvZHMiLCJzaG93RGlhbG9nIiwiZGlhbG9nQ29tcG9uZW50Iiwic2VsZWN0Q29tcG9uZW50Iiwic2hvdyIsImhpZGVEaWFsb2ciLCJoaWRlIiwib25Db25maXJtIiwidGhhdCIsInd4IiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJjYXRhZ29yeSIsInN1Y2Nlc3MiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiY29tcGxldGUiLCJmYWlsIiwib25DYW5jZWwiLCJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBa0JJQSxjQUFZO0FBQ1ZDLGVBQVc7QUFERCxHO0FBR1pDLFdBQVM7QUFDUEMsY0FETyx3QkFDTTtBQUNYLFVBQUlDLGtCQUFrQixLQUFLQyxlQUFMLENBQXFCLGFBQXJCLENBQXRCO0FBQ0FELHlCQUFtQkEsZ0JBQWdCRSxJQUFoQixFQUFuQjtBQUNELEtBSk07QUFLUEMsY0FMTyx3QkFLTTtBQUNYLFVBQUlILGtCQUFrQixLQUFLQyxlQUFMLENBQXFCLGFBQXJCLENBQXRCO0FBQ0FELHlCQUFtQkEsZ0JBQWdCSSxJQUFoQixFQUFuQjtBQUNELEtBUk07QUFTUEMsYUFUTyx1QkFTTTtBQUNYLFVBQU1DLE9BQU8sSUFBYjtBQUNBQyxTQUFHQyxPQUFILENBQVc7QUFDVEMsYUFBSyw2Q0FESTtBQUVUQyxnQkFBUSxNQUZDO0FBR1RDLGNBQU0sRUFBQ0MsVUFBVSxLQUFYLEVBSEc7QUFJVEMsaUJBQVMsaUJBQVVDLEdBQVYsRUFBZTtBQUN0QlIsZUFBS1YsVUFBTCxDQUFnQkMsU0FBaEIsR0FBNEJpQixJQUFJSCxJQUFoQztBQUNBSSxrQkFBUUMsR0FBUixDQUFZLFNBQVo7QUFDRCxTQVBRO0FBUVRDLGtCQUFVLG9CQUFZO0FBQ3BCRixrQkFBUUMsR0FBUixDQUFZLFdBQVo7QUFDRCxTQVZRO0FBV1RFLGNBQU0sZ0JBQVk7QUFDaEJaLGVBQUtQLFVBQUw7QUFDRDtBQWJRLE9BQVg7QUFlRCxLQTFCTTtBQTJCUG9CLFlBM0JPLHNCQTJCSztBQUNWLFdBQUtoQixVQUFMO0FBQ0Q7QUE3Qk0sRztBQStCVGlCLFUsc0JBQVksQ0FBRyxDO0FBQ2ZDLFEsb0JBQVU7QUFDUixRQUFNZixPQUFPLElBQWI7QUFDQVMsWUFBUUMsR0FBUixDQUFZLE9BQVo7QUFDQVQsT0FBR0MsT0FBSCxDQUFXO0FBQ1RDLFdBQUssNkNBREk7QUFFVEMsY0FBUSxNQUZDO0FBR1RDLFlBQU0sRUFBQ0MsVUFBVSxLQUFYLEVBSEc7QUFJVEMsZUFBUyxpQkFBVUMsR0FBVixFQUFlO0FBQ3RCUixhQUFLVixVQUFMLENBQWdCQyxTQUFoQixHQUE0QmlCLElBQUlILElBQWhDO0FBQ0FJLGdCQUFRQyxHQUFSLENBQVksU0FBWjtBQUNELE9BUFE7QUFRVEMsZ0JBQVUsb0JBQVk7QUFDcEJGLGdCQUFRQyxHQUFSLENBQVksV0FBWjtBQUNELE9BVlE7QUFXVEUsWUFBTSxnQkFBWTtBQUNoQlosYUFBS1IsT0FBTCxDQUFhQyxVQUFiO0FBQ0Q7QUFiUSxLQUFYO0FBZUQsRztBQUNEdUIsUSxvQkFBVSxDQUFHIiwiZmlsZSI6ImFwcC53eGEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgY29uZmlnOiB7XG4gICAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICAgJ2xheW91dC1nb29kcyc6ICdsYXlvdXQvZ29vZHNMaXN0JyxcbiAgICAgICAgJ3d4Yy1kaWFsb2cnOiAnQG1pbnVpL3d4Yy1kaWFsb2cnXG4gICAgICB9LFxuICAgICAgcGFnZXM6IFtdLFxuICAgICAgd2luZG93OiB7XG4gICAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdkYXJrJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2VmZWZlZicsXG4gICAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjZWZlZmVmJyxcbiAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ0F1c3RyYWxpYScsXG4gICAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaydcbiAgICAgIH0sXG4gICAgICBuZXR3b3JrVGltZW91dDoge1xuICAgICAgICByZXF1ZXN0OiAxMDAwMFxuICAgICAgfVxuICAgIH0sXG4gICAgZ2xvYmFsRGF0YToge1xuICAgICAgZmlyc3REYXRhOiBbXVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgc2hvd0RpYWxvZygpIHtcbiAgICAgICAgbGV0IGRpYWxvZ0NvbXBvbmVudCA9IHRoaXMuc2VsZWN0Q29tcG9uZW50KCcud3hjLWRpYWxvZycpXG4gICAgICAgIGRpYWxvZ0NvbXBvbmVudCAmJiBkaWFsb2dDb21wb25lbnQuc2hvdygpO1xuICAgICAgfSxcbiAgICAgIGhpZGVEaWFsb2coKSB7XG4gICAgICAgIGxldCBkaWFsb2dDb21wb25lbnQgPSB0aGlzLnNlbGVjdENvbXBvbmVudCgnLnd4Yy1kaWFsb2cnKVxuICAgICAgICBkaWFsb2dDb21wb25lbnQgJiYgZGlhbG9nQ29tcG9uZW50LmhpZGUoKTtcbiAgICAgIH0sXG4gICAgICBvbkNvbmZpcm0gKCkge1xuICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgd3gucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiAnaHR0cHM6Ly9hdXN0cmFsaWEuaGhwLmltL2dldEdvb2RzQnlDYXRhZ29yeScsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgZGF0YToge2NhdGFnb3J5OiAn5YyW5aaG5ZOBJ30sXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgdGhhdC5nbG9iYWxEYXRhLmZpcnN0RGF0YSA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MnKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY29tcGxldGVkJyk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGF0LnNob3dEaWFsb2coKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgb25DYW5jZWwgKCkge1xuICAgICAgICB0aGlzLmhpZGVEaWFsb2coKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG9uTGF1bmNoICgpIHsgfSxcbiAgICBvblNob3cgKCkge1xuICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICBjb25zb2xlLmxvZygnc3RhcnQnKTtcbiAgICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwczovL2F1c3RyYWxpYS5oaHAuaW0vZ2V0R29vZHNCeUNhdGFnb3J5JyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHtjYXRhZ29yeTogJ+WMluWmhuWTgSd9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgdGhhdC5nbG9iYWxEYXRhLmZpcnN0RGF0YSA9IHJlcy5kYXRhO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2NvbXBsZXRlZCcpO1xuICAgICAgICB9LFxuICAgICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhhdC5tZXRob2RzLnNob3dEaWFsb2coKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIG9uSGlkZSAoKSB7IH1cbiAgfSJdfQ==