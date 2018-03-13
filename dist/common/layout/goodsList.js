'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Component({
  data: {
    tabs: [{ title: '化妆品', content: '' }, { title: '服装', content: '' }]
  },
  methods: {
    onClick: function onClick(e) {
      console.log('ComponentId:' + e.detail.componentId + ',you selected:' + e.detail.key);
      var catagory = void 0;
      var that = this;
      wx.request({
        url: 'http://localhost:7001/getGoodsByCatagory',
        method: 'POST',
        data: { catagory: that.data.tabs[e.detail.key].title },
        success: function success(res) {
          that.data.tabs[e.detail.key].content = res.data;
        }
      });
    },
    getDetailPage: function getDetailPage(index, tab) {
      var that = this;
      wx.navigateTo({
        url: '/pages/detail/index?id=' + tab.content[index]._id
      });
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdvb2RzTGlzdC53eGMiXSwibmFtZXMiOlsiZGF0YSIsInRhYnMiLCJ0aXRsZSIsImNvbnRlbnQiLCJtZXRob2RzIiwib25DbGljayIsImUiLCJjb25zb2xlIiwibG9nIiwiZGV0YWlsIiwiY29tcG9uZW50SWQiLCJrZXkiLCJjYXRhZ29yeSIsInRoYXQiLCJ3eCIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJzdWNjZXNzIiwicmVzIiwiZ2V0RGV0YWlsUGFnZSIsImluZGV4IiwidGFiIiwibmF2aWdhdGVUbyIsIl9pZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBVUVBLFFBQU07QUFDSkMsVUFBTSxDQUNKLEVBQUNDLE9BQU8sS0FBUixFQUFlQyxTQUFTLEVBQXhCLEVBREksRUFFSixFQUFDRCxPQUFPLElBQVIsRUFBY0MsU0FBUyxFQUF2QixFQUZJO0FBREYsRztBQU1OQyxXQUFTO0FBQ1BDLGFBQVMsaUJBQVNDLENBQVQsRUFBWTtBQUNuQkMsY0FBUUMsR0FBUixrQkFBMkJGLEVBQUVHLE1BQUYsQ0FBU0MsV0FBcEMsc0JBQWdFSixFQUFFRyxNQUFGLENBQVNFLEdBQXpFO0FBQ0EsVUFBSUMsaUJBQUo7QUFDQSxVQUFNQyxPQUFPLElBQWI7QUFDQUMsU0FBR0MsT0FBSCxDQUFXO0FBQ1RDLGFBQUssMENBREk7QUFFVEMsZ0JBQVEsTUFGQztBQUdUakIsY0FBTSxFQUFFWSxVQUFVQyxLQUFLYixJQUFMLENBQVVDLElBQVYsQ0FBZUssRUFBRUcsTUFBRixDQUFTRSxHQUF4QixFQUE2QlQsS0FBekMsRUFIRztBQUlUZ0IsaUJBQVMsaUJBQVVDLEdBQVYsRUFBZTtBQUN0Qk4sZUFBS2IsSUFBTCxDQUFVQyxJQUFWLENBQWVLLEVBQUVHLE1BQUYsQ0FBU0UsR0FBeEIsRUFBNkJSLE9BQTdCLEdBQXVDZ0IsSUFBSW5CLElBQTNDO0FBQ0Q7QUFOUSxPQUFYO0FBUUQsS0FiTTtBQWNQb0IsaUJBZE8seUJBY09DLEtBZFAsRUFjYUMsR0FkYixFQWNrQjtBQUN2QixVQUFNVCxPQUFPLElBQWI7QUFDQUMsU0FBR1MsVUFBSCxDQUFjO0FBQ1pQLGFBQUssNEJBQTRCTSxJQUFJbkIsT0FBSixDQUFZa0IsS0FBWixFQUFtQkc7QUFEeEMsT0FBZDtBQUdEO0FBbkJNIiwiZmlsZSI6Imdvb2RzTGlzdC53eGMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGNvbmZpZzoge1xuICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgJ3d4Yy10YWInOiAnQG1pbnVpL3d4Yy10YWInLFxuICAgICAgJ3d4Yy10YWItcGFuZWwnOiAnQG1pbnVpL3d4Yy10YWIvcGFuZWwnLFxuICAgICAgJ3d4Yy1wcmljZSc6ICdAbWludWkvd3hjLXByaWNlJyxcbiAgICAgICd3eGMtZWxpcCc6ICdAbWludWkvd3hjLWVsaXAnLFxuICAgICAgJ3d4Yy1hdmF0YXInOiAnQG1pbnVpL3d4Yy1hdmF0YXInXG4gICAgfVxuICB9LFxuICBkYXRhOiB7XG4gICAgdGFiczogW1xuICAgICAge3RpdGxlOiAn5YyW5aaG5ZOBJywgY29udGVudDogJyd9LFxuICAgICAge3RpdGxlOiAn5pyN6KOFJywgY29udGVudDogJyd9LFxuICAgIF1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBDb21wb25lbnRJZDoke2UuZGV0YWlsLmNvbXBvbmVudElkfSx5b3Ugc2VsZWN0ZWQ6JHtlLmRldGFpbC5rZXl9YCk7XG4gICAgICBsZXQgY2F0YWdvcnk7XG4gICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjcwMDEvZ2V0R29vZHNCeUNhdGFnb3J5JyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IHsgY2F0YWdvcnk6IHRoYXQuZGF0YS50YWJzW2UuZGV0YWlsLmtleV0udGl0bGUgfSxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgIHRoYXQuZGF0YS50YWJzW2UuZGV0YWlsLmtleV0uY29udGVudCA9IHJlcy5kYXRhO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgZ2V0RGV0YWlsUGFnZShpbmRleCx0YWIpIHtcbiAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy9wYWdlcy9kZXRhaWwvaW5kZXg/aWQ9JyArIHRhYi5jb250ZW50W2luZGV4XS5faWQsXG4gICAgICB9KVxuICAgIH1cbiAgfSxcbn0iXX0=