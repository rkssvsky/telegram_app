// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        colors: {
          primary: '#0687C9', // первичный цвет
          secondary: '#394a58', // вторичный цвет
          surface: '#fff', // поверхность
          background: '#F2F2F2', // фон
          error: '#e21a1a',
          info: '#33d9ff',
          success: '#6bff26',
          warning: '#ff520f'
        }
      },
      dark: {
        colors: {
          primary: '#e21a1a',
          secondary: '#666666'
        }
      }
    }
  }
})

// RZD-RED '#e21a1a', // rgb 226 26 26
// RZD-GRAY '#394a58', // rgb 57 74 88
// RZD-BLACK #000
// Возможно использовать оттенки черного и серого с шагом в 20% (80% 60% 40% 20%)

// темные оттенки по RAL
// 05% прозрачности от черного // #F2F2F2 piked
// 10% прозрачности от черного // #E5E5E5 piked
// 20% прозрачности от черного // #CCCCCC piked
// 40% прозрачности от черного // #999999 piked
// 60% прозрачности от черного // #666666 piked
// 80% прозрачности от черного // #333333 piked

// дополнительные цвета - яркие
// цвет сочной травы #6bff26 / cmyk 58 - 0 - 85 - 0
// оранжевый #ff520f / cmyk 0 - 68 - 94 - 0
// небесно голубой #33d9ff / cmyk 80 - 15 - 0 - 0
// *** дополнительные цвета могут использоваться с прозрачностью в 80% и 40%
