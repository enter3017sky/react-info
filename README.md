
## 將完成的 React 發佈在 Github Pages

> 參考來源：[Deployment · Create React App](https://facebook.github.io/create-react-app/docs/deployment)

- Step 1: 將 _homepage_ 新增到 _package.json_

`"homepage": "https://enter3017sky.github.io/react-info/.",`

- Step 2: Install gh-pages and add deploy to scripts in package.json

要在發佈在 https://enter3017sky.github.io/react-info/

用 npm 安裝 _gh-pages_ `npm install --save gh-pages`

但我最近都使用 yarn，也可以使用這個 `yarn add gh-pages`

安裝的同時，將指令添加到 _package.json_

```
  "scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
```

或

```
  "scripts": {
+   "deploy": "npm run build && gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
```

- Step 3: Deploy the site by running npm run deploy
Then run: `npm run deploy`

- Step 4: For a project page, ensure your project’s settings use gh-pages

Finally, make sure **GitHub Pages** option in your GitHub project settings is set to use the `gh-pages` branch:

確認 **GitHub Pages** 的選項是設置 `gh-pages` branch

![image](https://raw.githubusercontent.com/enter3017sky/mentor-program-2nd-blog/master/picture/github-pages.png)

但在公開的項目上可以在 `Settings -> Branches -> Default branch` 設定顯示為 **master** 或 **gh-pages**

