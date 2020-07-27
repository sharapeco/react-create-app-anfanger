# React-create Anfänger

## 目標

create-react-app を使用して React 単一ページアプリケーションのビルドを行う。


## セットアップ

### 初期設定

[新しい React アプリを作る – React](https://ja.reactjs.org/docs/create-a-new-react-app.html) を参考にした。

```
npx create-react-app react-create-anfanger
cd react-create-anfanger
```

#### Eslint は手動で設定する

```
yarn add --dev eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard
yarn add --dev eslint-plugin-react
```

#### Sass を入れる

なんと入れるだけで動く。

```
yarn add -D node-sass
```

CSS Modules を使用するには、 .css または .scss に

```
.btn { ... }
```

のようにクラスのスタイルを定義し、 .jsx で次のように読み込む。

```
import React from 'react'
import { btn } from './LikeButton.module.scss'

export default class LikeButton extends React.Component {
	render () {
		return (
			<button className={btn}>
				Like
			</button>
		)
	}
}
```

#### Rollup で配布物を作る

[create-react-app で作成したコードをrollupで整形する - Qiita](https://qiita.com/kspotfujita/items/f3a50f613828170170ba)

```
yarn add --dev rollup rollup-plugin-commonjs rollup-plugin-babel rollup-plugin-uglify-es rollup-plugin-svg rollup-plugin-node-resolve
yarn add --dev rollup-plugin-scss rollup-plugin-postcss
```

#### Rollup で作ったファイルを minify する

Rollup の中で minify するのがうまくいかなかったので、 package.json に minify 用のスクリプトを追加した。

```
yarn add --dev npm-run-all uglify-es postcss-cli cssnano
```

PostCSS は Rollup でも使われるため、 minify 用の設定は conf-release/postcss.config.js に配置して次のようにした。

``
postcss --verbose --config conf-release -o build/package/anfanger.min.css build/package/anfanger.css
```


### ビルド

次のコマンドで開発/リリースビルド

```
yarn start
yarn build
```


## 評価

- 単一ページアプリケーションをビルドできた
- Eslint の設定を好みのものにできた
- Scss の設定が不要で簡単にできるのがいい
- 出力ファイル名がでたらめの文字列になる
	- asset-manifest.json で復元可能
	- Rollup を使用することで任意のファイル名にできた！
