const explorer = {
    id: "1",
    name: "root",
    isFolder: true,
    items: [
      {
        id: "2",
        name: "public",
        isFolder: true,
        items: [
          {
            id: "3",
            name: "index.html",
            isFolder: false,
            items: []
          },
          {
            id: "4",
            name: "new.html",
            isFolder: false,
            items: []
          }
        ]
      },
      {
        id: "5",
        name: "src",
        isFolder: true,
        items: [
          {
            id: "6",
            name: "app.js",
            isFolder: false,
            items: []
          },
          {
            id: "7",
            name: "index.js",
            isFolder: false,
            items: []
          }
        ]
      },
      {
        id: "8",
        name: "compnents",
        isFolder: true,
        items: [
          {
            id: "9",
            name: "folder.js",
            isFolder: false,
            items: []
          },
          {
            id: "10",
            name: "best.js",
            isFolder: false,
            items: []
          }
        ]
      },
      {
        id: "11",
        name: "package.json",
        isFolder: false,
        items: []
      }
    ]
  };
  
  export default explorer;
  