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
        url: 'http://localhost:7001/getGoodsByCatagory',
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
      url: 'http://localhost:7001/getGoodsByCatagory',
      method: 'POST',
      data: { catagory: '化妆品' },
      success: function success(res) {
        that.globalData.firstData = res.data;
        console.log(res.data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC53eGEiXSwibmFtZXMiOlsiZ2xvYmFsRGF0YSIsImZpcnN0RGF0YSIsIm1ldGhvZHMiLCJzaG93RGlhbG9nIiwiZGlhbG9nQ29tcG9uZW50Iiwic2VsZWN0Q29tcG9uZW50Iiwic2hvdyIsImhpZGVEaWFsb2ciLCJoaWRlIiwib25Db25maXJtIiwidGhhdCIsInd4IiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJjYXRhZ29yeSIsInN1Y2Nlc3MiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiY29tcGxldGUiLCJmYWlsIiwib25DYW5jZWwiLCJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBcUJJQSxjQUFZO0FBQ1ZDLGVBQVc7QUFERCxHO0FBR1pDLFdBQVM7QUFDUEMsY0FETyx3QkFDTTtBQUNYLFVBQUlDLGtCQUFrQixLQUFLQyxlQUFMLENBQXFCLGFBQXJCLENBQXRCO0FBQ0FELHlCQUFtQkEsZ0JBQWdCRSxJQUFoQixFQUFuQjtBQUNELEtBSk07QUFLUEMsY0FMTyx3QkFLTTtBQUNYLFVBQUlILGtCQUFrQixLQUFLQyxlQUFMLENBQXFCLGFBQXJCLENBQXRCO0FBQ0FELHlCQUFtQkEsZ0JBQWdCSSxJQUFoQixFQUFuQjtBQUNELEtBUk07QUFTUEMsYUFUTyx1QkFTTTtBQUNYLFVBQU1DLE9BQU8sSUFBYjtBQUNBQyxTQUFHQyxPQUFILENBQVc7QUFDVEMsYUFBSywwQ0FESTtBQUVUQyxnQkFBUSxNQUZDO0FBR1RDLGNBQU0sRUFBQ0MsVUFBVSxLQUFYLEVBSEc7QUFJVEMsaUJBQVMsaUJBQVVDLEdBQVYsRUFBZTtBQUN0QlIsZUFBS1YsVUFBTCxDQUFnQkMsU0FBaEIsR0FBNEJpQixJQUFJSCxJQUFoQztBQUNBSSxrQkFBUUMsR0FBUixDQUFZLFNBQVo7QUFDRCxTQVBRO0FBUVRDLGtCQUFVLG9CQUFZO0FBQ3BCRixrQkFBUUMsR0FBUixDQUFZLFdBQVo7QUFDRCxTQVZRO0FBV1RFLGNBQU0sZ0JBQVk7QUFDaEJaLGVBQUtQLFVBQUw7QUFDRDtBQWJRLE9BQVg7QUFlRCxLQTFCTTtBQTJCUG9CLFlBM0JPLHNCQTJCSztBQUNWLFdBQUtoQixVQUFMO0FBQ0Q7QUE3Qk0sRztBQStCVGlCLFUsc0JBQVksQ0FBRyxDO0FBQ2ZDLFEsb0JBQVU7QUFDUixRQUFNZixPQUFPLElBQWI7QUFDQVMsWUFBUUMsR0FBUixDQUFZLE9BQVo7QUFDQVQsT0FBR0MsT0FBSCxDQUFXO0FBQ1RDLFdBQUssMENBREk7QUFFVEMsY0FBUSxNQUZDO0FBR1RDLFlBQU0sRUFBQ0MsVUFBVSxLQUFYLEVBSEc7QUFJVEMsZUFBUyxpQkFBVUMsR0FBVixFQUFlO0FBQ3RCUixhQUFLVixVQUFMLENBQWdCQyxTQUFoQixHQUE0QmlCLElBQUlILElBQWhDO0FBQ0FJLGdCQUFRQyxHQUFSLENBQVlGLElBQUlILElBQWhCO0FBQ0FJLGdCQUFRQyxHQUFSLENBQVksU0FBWjtBQUNELE9BUlE7QUFTVEMsZ0JBQVUsb0JBQVk7QUFDcEJGLGdCQUFRQyxHQUFSLENBQVksV0FBWjtBQUNELE9BWFE7QUFZVEUsWUFBTSxnQkFBWTtBQUNoQlosYUFBS1IsT0FBTCxDQUFhQyxVQUFiO0FBQ0Q7QUFkUSxLQUFYO0FBZ0JELEc7QUFDRHVCLFEsb0JBQVUsQ0FBRyIsImZpbGUiOiJhcHAud3hhIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbmZpZzoge1xuICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgICdsYXlvdXQtZ29vZHMnOiAnbGF5b3V0L2dvb2RzTGlzdCcsXG4gICAgICAgICd3eGMtZGlhbG9nJzogJ0BtaW51aS93eGMtZGlhbG9nJ1xuICAgICAgfSxcbiAgICAgIHBhZ2VzOiBbXG4gICAgICAgICdwYWdlcy9ob21lL2luZGV4JyxcbiAgICAgICAgJ3BhZ2VzL2RldGFpbC9pbmRleCdcbiAgICAgIF0sXG4gICAgICB3aW5kb3c6IHtcbiAgICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2RhcmsnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZWZlZmVmJyxcbiAgICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNlZmVmZWYnLFxuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnQXVzdHJhbGlhJyxcbiAgICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJ1xuICAgICAgfSxcbiAgICAgIG5ldHdvcmtUaW1lb3V0OiB7XG4gICAgICAgIHJlcXVlc3Q6IDEwMDAwXG4gICAgICB9XG4gICAgfSxcbiAgICBnbG9iYWxEYXRhOiB7XG4gICAgICBmaXJzdERhdGE6IFtdXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICBzaG93RGlhbG9nKCkge1xuICAgICAgICBsZXQgZGlhbG9nQ29tcG9uZW50ID0gdGhpcy5zZWxlY3RDb21wb25lbnQoJy53eGMtZGlhbG9nJylcbiAgICAgICAgZGlhbG9nQ29tcG9uZW50ICYmIGRpYWxvZ0NvbXBvbmVudC5zaG93KCk7XG4gICAgICB9LFxuICAgICAgaGlkZURpYWxvZygpIHtcbiAgICAgICAgbGV0IGRpYWxvZ0NvbXBvbmVudCA9IHRoaXMuc2VsZWN0Q29tcG9uZW50KCcud3hjLWRpYWxvZycpXG4gICAgICAgIGRpYWxvZ0NvbXBvbmVudCAmJiBkaWFsb2dDb21wb25lbnQuaGlkZSgpO1xuICAgICAgfSxcbiAgICAgIG9uQ29uZmlybSAoKSB7XG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjcwMDEvZ2V0R29vZHNCeUNhdGFnb3J5JyxcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBkYXRhOiB7Y2F0YWdvcnk6ICfljJblpoblk4EnfSxcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICB0aGF0Lmdsb2JhbERhdGEuZmlyc3REYXRhID0gcmVzLmRhdGE7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VzcycpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb21wbGV0ZWQnKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoYXQuc2hvd0RpYWxvZygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBvbkNhbmNlbCAoKSB7XG4gICAgICAgIHRoaXMuaGlkZURpYWxvZygpO1xuICAgICAgfVxuICAgIH0sXG4gICAgb25MYXVuY2ggKCkgeyB9LFxuICAgIG9uU2hvdyAoKSB7XG4gICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgIGNvbnNvbGUubG9nKCdzdGFydCcpO1xuICAgICAgd3gucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6NzAwMS9nZXRHb29kc0J5Q2F0YWdvcnknLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YToge2NhdGFnb3J5OiAn5YyW5aaG5ZOBJ30sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICB0aGF0Lmdsb2JhbERhdGEuZmlyc3REYXRhID0gcmVzLmRhdGE7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2NvbXBsZXRlZCcpO1xuICAgICAgICB9LFxuICAgICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhhdC5tZXRob2RzLnNob3dEaWFsb2coKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIG9uSGlkZSAoKSB7IH1cbiAgfSJdfQ==