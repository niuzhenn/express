var navbar = [
  {
    index: 0,
    id: 'work',
    text: {
      'zh-cn': '工作',
      'en-us': 'work'
    },
    subMenu: [
      {
        index: 0,
        id: 'myWork',
        text: {
          'zh-cn': '我的工作',
          'en-us': 'My Work'
        },
      },
      {
        index: 1,
        id: 'doneWork',
        text: {
          'zh-cn': '已完成工作',
          'en-us': 'Done Work'
        },
      }
    ]
  },
  {
    index: 1,
    id: 'kaoqin',
    text: {
      'zh-cn': '考勤',
      'en-us': 'KaoQin'
    },
    subMenu: [
      {
        index: 0,
        id: 'kaoQin',
        text: {
          'zh-cn': '本月考勤',
          'en-us': 'Kao Qin'
        },
      },
      {
        index: 1,
        id: 'Weekend',
        text: {
          'zh-cn': '年假查询',
          'en-us': 'Weekend'
        },
      }
    ]
  }
];

var mainContent = 'i am main content';

var defaultSql = {
  host: 'localhost',
  port: '32080',
  database: 'all_user_info',
  user: 'root',
  password: 'zhen@1234'
}

module.exports = {
  navbar: navbar,
  mainContent: mainContent,
  defaultSql: defaultSql
}