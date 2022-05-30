# 💪 Setup Windi Css Di Next JS 💪

##### Apa itu windi css ?

Berdasarkan website resmi Windi CSS sendiri ( https://windicss.org/guide/ ) disitu dikatakan bahwa Windi CSS adalah next utility css yang di klaim lebih cepat dari pada Tailwind CSS dan memiliki fitur tambahan yang lebih keren dari Tailwind CSS

#

##### Cara Install Windi CSS Ke Projek Next Kita

1. Install Widi CSS Ke Projek kita

```sh
npm i windicss
```

2. Install Windi Css Webpack Plugin

```sh
npm i windicss-webpack-plugin
```

3. Tambahkan kode berikut di next.config.js

```sh
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')

module.exports = {
  // ...
  webpack(config) {
    config.plugins.push(new WindiCSSWebpackPlugin())
    return config
  },
}
```

4. Import Windi Css ke pages/\_app.js

```sh
import 'windi.css'
```

5. Kemudian buat file di folder / direktori utama dan beri nama windi.config.js
6. Import kode di bawah ini ke windi.config.js yang telah kita buat tadi

```sh
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
  <!--untuk include silahkan di sesuaikan dengan format file yang akan kita kerjakan-->
    include: ['**/*.{js,jsx}'],
    exclude: ['node_modules', '.git', '.next'],
  },
})
```

# Hore Setup Kita Selesai 🤸🏽, Selamat Mencoba Dan Semoga Bermanfaat 👋🏼
