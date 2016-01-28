module.exports = [
{
  request: {
    path: 'https://api.github.com/search/users',
    method: 'GET'
  },
  response: {
    data: {
      items: [{
        login: "jamiebrown201",
        avatar_url: "https://avatars.githubusercontent.com/u/196474?v=3",
        html_url: "https://github.com/jamiebrown201"
      }]
    }
  }
}
];
